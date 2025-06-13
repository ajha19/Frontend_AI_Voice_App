import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Download, Volume2, Settings, Mic } from 'lucide-react';

interface Voice {
  id: string;
  name: string;
  language: string;
  gender: string;
  sample?: string;
}

const TextToSpeech: React.FC = () => {
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [generatedAudio, setGeneratedAudio] = useState<string | null>(null);
  const [speed, setSpeed] = useState(1.0);
  const [pitch, setPitch] = useState(1.0);

  const voices: Voice[] = [
    { id: '1', name: 'Sarah', language: 'English (US)', gender: 'Female' },
    { id: '2', name: 'David', language: 'English (US)', gender: 'Male' },
    { id: '3', name: 'Emma', language: 'English (UK)', gender: 'Female' },
    { id: '4', name: 'James', language: 'English (UK)', gender: 'Male' },
    { id: '5', name: 'Custom Voice 1', language: 'English (US)', gender: 'Custom' },
  ];

  const generateSpeech = async () => {
    if (!text || !selectedVoice) return;
    
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setGeneratedAudio('generated-audio-url');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Text to Speech</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Convert your text into natural-sounding speech using our AI-powered voices.
          Choose from our library or use your custom voice models.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Voice Selection */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              <Mic className="w-5 h-5 mr-2" />
              Select Voice
            </h3>
            <div className="space-y-3">
              {voices.map((voice) => (
                <motion.div
                  key={voice.id}
                  onClick={() => setSelectedVoice(voice)}
                  className={`p-4 rounded-xl cursor-pointer transition-all border ${
                    selectedVoice?.id === voice.id
                      ? 'bg-primary-500/20 border-primary-500'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{voice.name}</p>
                      <p className="text-white/70 text-sm">{voice.language}</p>
                      <p className="text-white/50 text-xs">{voice.gender}</p>
                    </div>
                    <motion.button
                      className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Voice Settings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mt-6"
          >
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Voice Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-white/70 text-sm mb-2">
                  Speed: {speed.toFixed(1)}x
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="2.0"
                  step="0.1"
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className="w-full accent-primary-500"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">
                  Pitch: {pitch.toFixed(1)}x
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="2.0"
                  step="0.1"
                  value={pitch}
                  onChange={(e) => setPitch(parseFloat(e.target.value))}
                  className="w-full accent-primary-500"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text Input and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="mb-6">
              <label className="block text-white font-medium mb-3">Enter Text</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter the text you want to convert to speech..."
                rows={8}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-white/50 text-sm">{text.length} characters</span>
                <span className="text-white/50 text-sm">
                  Estimated: {Math.ceil(text.length / 150)} minutes
                </span>
              </div>
            </div>

            {/* Generate Button */}
            <motion.button
              onClick={generateSpeech}
              disabled={!text || !selectedVoice || isGenerating}
              className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 mb-6"
              whileHover={{ scale: text && selectedVoice && !isGenerating ? 1.02 : 1 }}
              whileTap={{ scale: text && selectedVoice && !isGenerating ? 0.98 : 1 }}
            >
              {isGenerating ? 'Generating Speech...' : 'Generate Speech'}
            </motion.button>

            {/* Audio Player */}
            {generatedAudio && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white ml-1" />
                      )}
                    </motion.button>
                    <div>
                      <p className="text-white font-medium">Generated Audio</p>
                      <p className="text-white/70 text-sm">
                        Voice: {selectedVoice?.name} • Duration: 2:34
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-5 h-5 text-white/70" />
                    <motion.button
                      className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </motion.button>
                  </div>
                </div>

                {/* Waveform Placeholder */}
                <div className="h-16 bg-white/5 rounded-lg flex items-center justify-center">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-primary-400 rounded-full"
                        style={{ height: Math.random() * 40 + 10 }}
                        animate={isPlaying ? { scaleY: [1, 1.5, 1] } : {}}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.02,
                          repeat: isPlaying ? Infinity : 0,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TextToSpeech;