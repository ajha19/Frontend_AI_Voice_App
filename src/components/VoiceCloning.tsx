import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Mic, Play, Pause, Download, Trash2, CheckCircle } from 'lucide-react';

const VoiceCloning: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [voiceName, setVoiceName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('audio/')) {
      setUploadedFile(file);
    }
  };

  const startTraining = () => {
    if (!uploadedFile || !voiceName) return;
    
    setIsTraining(true);
    setTrainingProgress(0);
    
    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Voice Cloning Studio</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Upload an audio sample or record your voice to create a custom AI voice model. 
          Just a few minutes of audio is enough to get started.
        </p>
      </motion.div>

      <div className="space-y-6">
        {/* Voice Name Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
        >
          <label className="block text-white font-medium mb-3">Voice Name</label>
          <input
            type="text"
            value={voiceName}
            onChange={(e) => setVoiceName(e.target.value)}
            placeholder="Enter a name for your voice model..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
          />
        </motion.div>

        {/* File Upload Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
        >
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-primary-500/50 transition-colors"
          >
            {uploadedFile ? (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">{uploadedFile.name}</p>
                  <p className="text-white/70 text-sm">
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <motion.button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </motion.button>
                  <motion.button
                    onClick={() => setUploadedFile(null)}
                    className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Remove</span>
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <Upload className="w-8 h-8 text-white/70" />
                </div>
                <div>
                  <p className="text-white font-medium text-lg mb-2">
                    Drag and drop your audio file here
                  </p>
                  <p className="text-white/70 text-sm mb-4">
                    Supports MP3, WAV, M4A files up to 50MB
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <motion.button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Choose File
                  </motion.button>
                  <span className="text-white/50">or</span>
                  <motion.button
                    onClick={() => setIsRecording(!isRecording)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                      isRecording
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mic className="w-4 h-4" />
                    <span>{isRecording ? 'Stop Recording' : 'Record Audio'}</span>
                  </motion.button>
                </div>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </motion.div>

        {/* Training Progress */}
        {isTraining && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <h3 className="text-white font-medium mb-4">Training Voice Model</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-white/70">
                <span>Processing audio...</span>
                <span>{trainingProgress}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${trainingProgress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            onClick={startTraining}
            disabled={!uploadedFile || !voiceName || isTraining}
            className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: uploadedFile && voiceName && !isTraining ? 1.05 : 1 }}
            whileTap={{ scale: uploadedFile && voiceName && !isTraining ? 0.95 : 1 }}
          >
            {isTraining ? 'Training Model...' : 'Create Voice Model'}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default VoiceCloning;