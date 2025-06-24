import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Play, Save, RotateCcw, Sparkles } from 'lucide-react';

interface VoiceDesignerProps {
  onSave: (voiceConfig: any) => void;
}

export const VoiceDesigner: React.FC<VoiceDesignerProps> = ({ onSave }) => {
  const [voiceConfig, setVoiceConfig] = useState({
    pitch: 0,
    speed: 1.0,
    energy: 0.5,
    emotion: 'neutral',
    accent: 'american',
    age: 'adult',
    gender: 'neutral'
  });

  const emotions = ['neutral', 'happy', 'sad', 'excited', 'calm', 'angry', 'surprised'];
  const accents = ['american', 'british', 'australian', 'canadian', 'irish'];
  const ages = ['child', 'teen', 'adult', 'elderly'];
  const genders = ['male', 'female', 'neutral'];

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold text-lg flex items-center">
          <Sliders className="w-5 h-5 mr-2" />
          Voice Designer
        </h3>
        <div className="flex space-x-2">
          <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg">
            <RotateCcw className="w-4 h-4" />
          </button>
          <button className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-lg">
            <Play className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Voice Parameters */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-white/70 text-sm mb-2">
              Pitch: {voiceConfig.pitch} semitones
            </label>
            <input
              type="range"
              min="-12"
              max="12"
              step="0.1"
              value={voiceConfig.pitch}
              onChange={(e) => setVoiceConfig({...voiceConfig, pitch: parseFloat(e.target.value)})}
              className="w-full accent-primary-500"
            />
          </div>
          
          <div>
            <label className="block text-white/70 text-sm mb-2">
              Speed: {voiceConfig.speed}x
            </label>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.1"
              value={voiceConfig.speed}
              onChange={(e) => setVoiceConfig({...voiceConfig, speed: parseFloat(e.target.value)})}
              className="w-full accent-primary-500"
            />
          </div>
          
          <div>
            <label className="block text-white/70 text-sm mb-2">
              Energy: {(voiceConfig.energy * 100).toFixed(0)}%
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={voiceConfig.energy}
              onChange={(e) => setVoiceConfig({...voiceConfig, energy: parseFloat(e.target.value)})}
              className="w-full accent-primary-500"
            />
          </div>
          
          <div>
            <label className="block text-white/70 text-sm mb-2">Gender</label>
            <select
              value={voiceConfig.gender}
              onChange={(e) => setVoiceConfig({...voiceConfig, gender: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white"
            >
              {genders.map(gender => (
                <option key={gender} value={gender}>{gender}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Emotion Selection */}
        <div>
          <label className="block text-white/70 text-sm mb-3">Emotion</label>
          <div className="grid grid-cols-4 gap-2">
            {emotions.map(emotion => (
              <button
                key={emotion}
                onClick={() => setVoiceConfig({...voiceConfig, emotion})}
                className={`p-2 rounded-lg text-sm capitalize transition-colors ${
                  voiceConfig.emotion === emotion
                    ? 'bg-primary-500 text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {emotion}
              </button>
            ))}
          </div>
        </div>

        {/* Accent Selection */}
        <div>
          <label className="block text-white/70 text-sm mb-3">Accent</label>
          <div className="grid grid-cols-3 gap-2">
            {accents.map(accent => (
              <button
                key={accent}
                onClick={() => setVoiceConfig({...voiceConfig, accent})}
                className={`p-2 rounded-lg text-sm capitalize transition-colors ${
                  voiceConfig.accent === accent
                    ? 'bg-accent-500 text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {accent}
              </button>
            ))}
          </div>
        </div>

        {/* Age Selection */}
        <div>
          <label className="block text-white/70 text-sm mb-3">Age</label>
          <div className="grid grid-cols-4 gap-2">
            {ages.map(age => (
              <button
                key={age}
                onClick={() => setVoiceConfig({...voiceConfig, age})}
                className={`p-2 rounded-lg text-sm capitalize transition-colors ${
                  voiceConfig.age === age
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => onSave(voiceConfig)}
          className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2"
        >
          <Save className="w-5 h-5" />
          <span>Save Voice Configuration</span>
        </button>
      </div>
    </div>
  );
};

export default VoiceDesigner;