import { motion } from 'framer-motion';
import { Volume2, Download, Share2, Heart, MoreHorizontal, Pause, Play } from 'lucide-react';
import { useState } from 'react';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
  voiceName: string;
  duration: number;
  onLike?: () => void;
  onShare?: () => void;
  onDownload?: () => void;
}

export const index: React.FC<AudioPlayerProps> = ({
  audioUrl,
  title,
  voiceName,
  duration,
  onLike,
  onShare,
  onDownload
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isLiked, setIsLiked] = useState(false);

  // Generate fake waveform data
  const waveformData = Array.from({ length: 100 }, () => Math.random() * 60 + 10);

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-medium">{title}</h3>
          <p className="text-white/60 text-sm">Voice: {voiceName}</p>
        </div>
        <button className="text-white/60 hover:text-white">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Waveform Visualization */}
      <div className="relative h-20 bg-white/5 rounded-lg mb-4 overflow-hidden">
        <div className="flex items-end justify-between h-full px-2">
          {waveformData.map((height, index) => (
            <motion.div
              key={index}
              className={`w-1 rounded-full transition-colors ${
                (index / waveformData.length) * duration <= currentTime
                  ? 'bg-primary-400'
                  : 'bg-white/20'
              }`}
              style={{ height: `${height}%` }}
              animate={isPlaying ? { scaleY: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5, delay: index * 0.01, repeat: isPlaying ? Infinity : 0 }}
            />
          ))}
        </div>
        
        {/* Progress overlay */}
        <div className="absolute bottom-0 left-0 h-1 bg-primary-500 transition-all duration-300"
             style={{ width: `${(currentTime / duration) * 100}%` }} />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" />
            )}
          </button>
          
          <div className="flex items-center space-x-2">
            <Volume2 className="w-4 h-4 text-white/60" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-20 accent-primary-500"
            />
          </div>
          
          <span className="text-white/60 text-sm">
            {Math.floor(currentTime)}:{(currentTime % 1 * 60).toFixed(0).padStart(2, '0')} / {Math.floor(duration)}:{(duration % 1 * 60).toFixed(0).padStart(2, '0')}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setIsLiked(!isLiked);
              onLike?.();
            }}
            className={`p-2 rounded-lg transition-colors ${
              isLiked ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-white/60 hover:text-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          
          <button
            onClick={onShare}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/60 hover:text-white transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>
          
          <button
            onClick={onDownload}
            className="p-2 bg-accent-500 hover:bg-accent-600 rounded-lg text-white transition-colors"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;