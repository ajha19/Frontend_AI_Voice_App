import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Play, Pause, Download, Trash2, Edit, Plus, Mic2 } from 'lucide-react';

interface VoiceModel {
  id: string;
  name: string;
  type: 'custom' | 'preset';
  language: string;
  gender: string;
  createdAt: string;
  duration: string;
  quality: 'High' | 'Medium' | 'Low';
  usage: number;
}

const VoiceLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'custom' | 'preset'>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const voiceModels: VoiceModel[] = [
    {
      id: '1',
      name: 'Sarah Professional',
      type: 'custom',
      language: 'English (US)',
      gender: 'Female',
      createdAt: '2024-01-15',
      duration: '3:24',
      quality: 'High',
      usage: 145
    },
    {
      id: '2',
      name: 'David Narrator',
      type: 'custom',
      language: 'English (US)',
      gender: 'Male',
      createdAt: '2024-01-10',
      duration: '2:56',
      quality: 'High',
      usage: 89
    },
    {
      id: '3',
      name: 'Emma British',
      type: 'preset',
      language: 'English (UK)',
      gender: 'Female',
      createdAt: '2024-01-01',
      duration: '5:12',
      quality: 'High',
      usage: 234
    },
    {
      id: '4',
      name: 'James Executive',
      type: 'custom',
      language: 'English (UK)',
      gender: 'Male',
      createdAt: '2024-01-08',
      duration: '4:33',
      quality: 'Medium',
      usage: 67
    },
    {
      id: '5',
      name: 'Maria Spanish',
      type: 'preset',
      language: 'Spanish (ES)',
      gender: 'Female',
      createdAt: '2024-01-05',
      duration: '3:45',
      quality: 'High',
      usage: 123
    }
  ];

  const filteredVoices = voiceModels.filter(voice => {
    const matchesSearch = voice.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         voice.language.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || voice.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'High': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-red-400';
      default: return 'text-white/70';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Voice Library</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Manage your custom voice models and browse our collection of preset voices.
          Create, edit, and organize all your AI voices in one place.
        </p>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0"
      >
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Search voices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all w-full sm:w-64"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as 'all' | 'custom' | 'preset')}
              className="pl-10 pr-8 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all appearance-none"
            >
              <option value="all">All Voices</option>
              <option value="custom">Custom Voices</option>
              <option value="preset">Preset Voices</option>
            </select>
          </div>
        </div>

        {/* Create New Voice Button */}
        <motion.button
          className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-5 h-5" />
          <span>Create New Voice</span>
        </motion.button>
      </motion.div>

      {/* Voice Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVoices.map((voice, index) => (
          <motion.div
            key={voice.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  voice.type === 'custom' 
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500' 
                    : 'bg-white/10'
                }`}>
                  <Mic2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{voice.name}</h3>
                  <p className="text-white/70 text-sm">{voice.language}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {voice.type === 'custom' && (
                  <>
                    <motion.button
                      className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Edit className="w-4 h-4 text-white" />
                    </motion.button>
                    <motion.button
                      className="w-8 h-8 bg-red-500/20 hover:bg-red-500/30 rounded-lg flex items-center justify-center transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </motion.button>
                  </>
                )}
              </div>
            </div>

            {/* Voice Info */}
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm">Type</span>
                <span className={`text-sm px-2 py-1 rounded-lg ${
                  voice.type === 'custom' 
                    ? 'bg-primary-500/20 text-primary-300' 
                    : 'bg-white/10 text-white/70'
                }`}>
                  {voice.type === 'custom' ? 'Custom' : 'Preset'}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm">Gender</span>
                <span className="text-white text-sm">{voice.gender}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm">Quality</span>
                <span className={`text-sm font-medium ${getQualityColor(voice.quality)}`}>
                  {voice.quality}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm">Usage</span>
                <span className="text-white text-sm">{voice.usage} times</span>
              </div>
            </div>

            {/* Audio Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center space-x-3">
                <motion.button
                  onClick={() => setPlayingId(playingId === voice.id ? null : voice.id)}
                  className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {playingId === voice.id ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  )}
                </motion.button>
                <span className="text-white/70 text-sm">{voice.duration}</span>
              </div>
              
              <motion.button
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Download className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredVoices.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Mic2 className="w-16 h-16 text-white/30 mx-auto mb-4" />
          <h3 className="text-white/70 text-lg font-medium mb-2">No voices found</h3>
          <p className="text-white/50">Try adjusting your search or filter criteria</p>
        </motion.div>
      )}
    </div>
  );
};

export default VoiceLibrary;