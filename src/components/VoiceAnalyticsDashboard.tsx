import { BarChart3, TrendingUp, Users, Clock, Star, Zap } from 'lucide-react';

interface AnalyticsData {
  totalGenerations: number;
  totalDuration: number;
  averageRating: number;
  popularVoices: { name: string; usage: number }[];
  usageOverTime: { date: string; count: number }[];
}

export const VoiceAnalyticsDashboard: React.FC<{ data: AnalyticsData }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Generations */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-primary-400" />
          </div>
          <TrendingUp className="w-5 h-5 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{data.totalGenerations.toLocaleString()}</h3>
        <p className="text-white/60 text-sm">Total Generations</p>
        <p className="text-green-400 text-xs mt-2">+12% from last month</p>
      </div>

      {/* Total Duration */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6 text-accent-400" />
          </div>
          <TrendingUp className="w-5 h-5 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{Math.floor(data.totalDuration / 60)}h</h3>
        <p className="text-white/60 text-sm">Audio Generated</p>
        <p className="text-green-400 text-xs mt-2">+18% from last month</p>
      </div>

      {/* Average Rating */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
            <Star className="w-6 h-6 text-yellow-400" />
          </div>
          <TrendingUp className="w-5 h-5 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{data.averageRating.toFixed(1)}</h3>
        <p className="text-white/60 text-sm">Average Rating</p>
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(data.averageRating) ? 'text-yellow-400 fill-current' : 'text-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Popular Voices */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-purple-400" />
          </div>
        </div>
        <h3 className="text-white font-semibold mb-3">Popular Voices</h3>
        <div className="space-y-2">
          {data.popularVoices.slice(0, 3).map((voice, index) => (
            <div key={voice.name} className="flex items-center justify-between">
              <span className="text-white/80 text-sm">{voice.name}</span>
              <span className="text-white/60 text-xs">{voice.usage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceAnalyticsDashboard;