# VoiceForge Backend API

A Python Flask API for AI voice cloning and text-to-speech synthesis.

## Features

- **Voice Cloning**: Upload audio samples to create custom voice models
- **Text-to-Speech**: Convert text to natural-sounding speech
- **Voice Management**: Organize and manage voice models
- **Real-time Processing**: Background job processing with progress tracking
- **Audio Processing**: Handle multiple audio formats (WAV, MP3, M4A, FLAC, OGG)

## Installation

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Run the API server:
```bash
python app.py
```

The API will be available at `http://localhost:5001`

## API Endpoints

### Health Check
- `GET /api/health` - Check API status

### Voice Management
- `GET /api/voices` - List all voice models
- `DELETE /api/voices/{id}` - Delete a voice model
- `GET /api/voices/{id}/sample` - Get voice sample

### Voice Training
- `POST /api/upload` - Upload audio file
- `POST /api/train` - Start voice model training
- `GET /api/training/{job_id}` - Get training status

### Speech Synthesis
- `POST /api/synthesize` - Generate speech from text
- `GET /api/synthesis/{job_id}` - Get synthesis status
- `GET /api/audio/{job_id}` - Download generated audio

## Usage Examples

### Upload Audio File
```bash
curl -X POST -F "audio=@sample.wav" -F "voice_name=My Voice" \
  http://localhost:5001/api/upload
```

### Start Voice Training
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"audio_path": "uploads/sample.wav", "voice_name": "My Voice"}' \
  http://localhost:5001/api/train
```

### Generate Speech
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"text": "Hello world!", "voice_id": "preset_1"}' \
  http://localhost:5001/api/synthesize
```

## Directory Structure

```
backend/
├── app.py              # Main Flask application
├── requirements.txt    # Python dependencies
├── uploads/           # Uploaded audio files
├── processed/         # Generated audio files
└── README.md          # This file
```

## Notes

This is a demo implementation that simulates voice cloning and synthesis processes. In a production environment, you would integrate with actual AI models like:

- **Voice Cloning**: Coqui TTS, SpeechT5, or custom neural networks
- **Text-to-Speech**: Tacotron 2, FastSpeech, or commercial APIs
- **Audio Processing**: More sophisticated preprocessing and postprocessing
- **Database**: Persistent storage for voice models and user data
- **Authentication**: User management and API key authentication
- **Scaling**: Queue systems for background processing