import { ShoppingBag, Filter, Search, Star, Download, Crown, Play } from 'lucide-react';
import { useState } from 'react';

interface VoiceMarketplaceItem {
  id: string;
  name: string;
  creator: string;
  price: number;
  rating: number;
  downloads: number;
  preview_url: string;
  tags: string[];
  is_premium: boolean;
}

export const VoiceMarketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const marketplaceVoices: VoiceMarketplaceItem[] = [
    {
      id: '1',
      name: 'Hollywood Narrator',
      creator: 'AudioPro Studios',
      price: 29.99,
      rating: 4.9,
      downloads: 1520,
      preview_url: 'preview1.mp3',
      tags: ['cinematic', 'professional', 'deep'],
      is_premium: true
    },
    {
      id: '2',
      name: 'Friendly Assistant',
      creator: 'VoiceCraft',
      price: 19.99,
      rating: 4.7,
      downloads: 890,
      preview_url: 'preview2.mp3',
      tags: ['conversational', 'warm', 'helpful'],
      is_premium: false
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold text-lg flex items-center">
          <ShoppingBag className="w-5 h-5 mr-2" />
          Voice Marketplace
        </h3>
        <button className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          Sell Voice
        </button>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
          <input
            type="text"
            placeholder="Search voices..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary-500"
          />
        </div>
        
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary-500"
        >
          <option value="all">All Categories</option>
          <option value="cinematic">Cinematic</option>
          <option value="conversational">Conversational</option>
          <option value="character">Character</option>
          <option value="educational">Educational</option>
        </select>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary-500"
        >
          <option value="popular">Most Popular</option>
          <option value="recent">Recently Added</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Voice Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {marketplaceVoices.map((voice) => (
          <div key={voice.id} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="text-white font-medium">{voice.name}</h4>
                  {voice.is_premium && (
                    <Crown className="w-4 h-4 text-yellow-400" />
                  )}
                </div>
                <p className="text-white/60 text-sm">by {voice.creator}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white/70 text-sm">{voice.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4 text-white/60" />
                    <span className="text-white/70 text-sm">{voice.downloads}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">${voice.price}</p>
                <button className="mt-2 bg-primary-500 hover:bg-primary-600 text-white px-3 py-1 rounded-lg text-sm">
                  Buy
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {voice.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="bg-white/10 text-white/70 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg">
                <Play className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoiceMarketplace;