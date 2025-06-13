from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
import io
import numpy as np
import soundfile as sf
from werkzeug.utils import secure_filename
import threading
import time
import uuid
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Configuration
UPLOAD_FOLDER = 'uploads'
PROCESSED_FOLDER = 'processed'
ALLOWED_EXTENSIONS = {'wav', 'mp3', 'm4a', 'flac', 'ogg'}

# Create directories if they don't exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)

# In-memory storage for demo purposes
voice_models = {}
training_jobs = {}
synthesis_jobs = {}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def simulate_voice_training(job_id, audio_path, voice_name):
    """Simulate voice model training process"""
    training_jobs[job_id] = {
        'status': 'training',
        'progress': 0,
        'voice_name': voice_name,
        'created_at': datetime.now().isoformat()
    }
    
    # Simulate training progress
    for progress in range(0, 101, 10):
        time.sleep(0.5)  # Simulate processing time
        training_jobs[job_id]['progress'] = progress
        
        if progress == 50:
            training_jobs[job_id]['status'] = 'processing'
        elif progress == 100:
            training_jobs[job_id]['status'] = 'completed'
            
            # Create voice model entry
            model_id = str(uuid.uuid4())
            voice_models[model_id] = {
                'id': model_id,
                'name': voice_name,
                'type': 'custom',
                'language': 'English (US)',
                'gender': 'Unknown',
                'created_at': datetime.now().isoformat(),
                'quality': 'High',
                'training_job_id': job_id,
                'audio_path': audio_path
            }
            
            training_jobs[job_id]['model_id'] = model_id

def simulate_speech_synthesis(job_id, text, voice_id, settings):
    """Simulate text-to-speech synthesis"""
    synthesis_jobs[job_id] = {
        'status': 'processing',
        'progress': 0,
        'text': text,
        'voice_id': voice_id,
        'settings': settings,
        'created_at': datetime.now().isoformat()
    }
    
    # Simulate synthesis progress
    for progress in range(0, 101, 20):
        time.sleep(0.3)
        synthesis_jobs[job_id]['progress'] = progress
        
        if progress == 100:
            synthesis_jobs[job_id]['status'] = 'completed'
            # Generate dummy audio file path
            audio_filename = f"synthesis_{job_id}.wav"
            audio_path = os.path.join(PROCESSED_FOLDER, audio_filename)
            
            # Create a simple sine wave as placeholder audio
            duration = len(text) * 0.1  # Rough estimation
            sample_rate = 22050
            t = np.linspace(0, duration, int(sample_rate * duration))
            frequency = 440  # A4 note
            audio_data = 0.3 * np.sin(2 * np.pi * frequency * t)
            
            # Save the audio file
            sf.write(audio_path, audio_data, sample_rate)
            synthesis_jobs[job_id]['audio_path'] = audio_path

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'VoiceForge API is running'})

@app.route('/api/voices', methods=['GET'])
def get_voices():
    """Get all available voice models"""
    # Default preset voices
    preset_voices = [
        {
            'id': 'preset_1',
            'name': 'Sarah Professional',
            'type': 'preset',
            'language': 'English (US)',
            'gender': 'Female',
            'created_at': '2024-01-01T00:00:00',
            'quality': 'High'
        },
        {
            'id': 'preset_2',
            'name': 'David Narrator',
            'type': 'preset',
            'language': 'English (US)',
            'gender': 'Male',
            'created_at': '2024-01-01T00:00:00',
            'quality': 'High'
        },
        {
            'id': 'preset_3',
            'name': 'Emma British',
            'type': 'preset',
            'language': 'English (UK)',
            'gender': 'Female',
            'created_at': '2024-01-01T00:00:00',
            'quality': 'High'
        }
    ]
    
    # Combine preset and custom voices
    all_voices = preset_voices + list(voice_models.values())
    
    return jsonify({
        'voices': all_voices,
        'total': len(all_voices)
    })

@app.route('/api/upload', methods=['POST'])
def upload_audio():
    """Upload audio file for voice cloning"""
    if 'audio' not in request.files:
        return jsonify({'error': 'No audio file provided'}), 400
    
    file = request.files['audio']
    voice_name = request.form.get('voice_name', 'Unnamed Voice')
    
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        timestamp = str(int(time.time()))
        filename = f"{timestamp}_{filename}"
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)
        
        return jsonify({
            'message': 'File uploaded successfully',
            'filename': filename,
            'filepath': filepath,
            'voice_name': voice_name
        })
    
    return jsonify({'error': 'Invalid file type'}), 400

@app.route('/api/train', methods=['POST'])
def train_voice_model():
    """Start voice model training"""
    data = request.get_json()
    
    if not data or 'audio_path' not in data or 'voice_name' not in data:
        return jsonify({'error': 'Missing required parameters'}), 400
    
    audio_path = data['audio_path']
    voice_name = data['voice_name']
    
    # Check if audio file exists
    if not os.path.exists(audio_path):
        return jsonify({'error': 'Audio file not found'}), 404
    
    # Create training job
    job_id = str(uuid.uuid4())
    
    # Start training in background thread
    training_thread = threading.Thread(
        target=simulate_voice_training,
        args=(job_id, audio_path, voice_name)
    )
    training_thread.start()
    
    return jsonify({
        'job_id': job_id,
        'message': 'Voice training started',
        'status': 'training'
    })

@app.route('/api/training/<job_id>', methods=['GET'])
def get_training_status(job_id):
    """Get training job status"""
    if job_id not in training_jobs:
        return jsonify({'error': 'Training job not found'}), 404
    
    return jsonify(training_jobs[job_id])

@app.route('/api/synthesize', methods=['POST'])
def synthesize_speech():
    """Convert text to speech using specified voice"""
    data = request.get_json()
    
    if not data or 'text' not in data or 'voice_id' not in data:
        return jsonify({'error': 'Missing required parameters'}), 400
    
    text = data['text']
    voice_id = data['voice_id']
    settings = data.get('settings', {})
    
    # Validate voice exists
    if voice_id not in voice_models and not voice_id.startswith('preset_'):
        return jsonify({'error': 'Voice model not found'}), 404
    
    # Create synthesis job
    job_id = str(uuid.uuid4())
    
    # Start synthesis in background thread
    synthesis_thread = threading.Thread(
        target=simulate_speech_synthesis,
        args=(job_id, text, voice_id, settings)
    )
    synthesis_thread.start()
    
    return jsonify({
        'job_id': job_id,
        'message': 'Speech synthesis started',
        'status': 'processing'
    })

@app.route('/api/synthesis/<job_id>', methods=['GET'])
def get_synthesis_status(job_id):
    """Get synthesis job status"""
    if job_id not in synthesis_jobs:
        return jsonify({'error': 'Synthesis job not found'}), 404
    
    return jsonify(synthesis_jobs[job_id])

@app.route('/api/audio/<job_id>', methods=['GET'])
def download_audio(job_id):
    """Download generated audio file"""
    if job_id not in synthesis_jobs:
        return jsonify({'error': 'Synthesis job not found'}), 404
    
    job = synthesis_jobs[job_id]
    if job['status'] != 'completed' or 'audio_path' not in job:
        return jsonify({'error': 'Audio not ready'}), 400
    
    audio_path = job['audio_path']
    if not os.path.exists(audio_path):
        return jsonify({'error': 'Audio file not found'}), 404
    
    return send_file(audio_path, as_attachment=True)

@app.route('/api/voices/<voice_id>', methods=['DELETE'])
def delete_voice(voice_id):
    """Delete a custom voice model"""
    if voice_id not in voice_models:
        return jsonify({'error': 'Voice model not found'}), 404
    
    # Remove voice model
    del voice_models[voice_id]
    
    return jsonify({'message': 'Voice model deleted successfully'})

@app.route('/api/voices/<voice_id>/sample', methods=['GET'])
def get_voice_sample(voice_id):
    """Get a sample audio for voice preview"""
    # This would typically return a short sample of the voice
    # For demo purposes, we'll return a placeholder response
    return jsonify({
        'sample_url': f'/api/audio/sample_{voice_id}.wav',
        'duration': '3.2',
        'message': 'Sample audio would be generated here'
    })

if __name__ == '__main__':
    print("Starting VoiceForge API server...")
    print("API Health Check: http://localhost:5001/api/health")
    print("Available endpoints:")
    print("  GET  /api/voices - List all voice models")
    print("  POST /api/upload - Upload audio for training")
    print("  POST /api/train - Start voice training")
    print("  POST /api/synthesize - Generate speech from text")
    
    app.run(debug=True, host='0.0.0.0', port=5001)