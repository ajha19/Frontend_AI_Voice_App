import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Users, Zap, Mic, ArrowRight, Play, Star, Trophy, Headphones, Volume2, Settings, Sparkles } from 'lucide-react';

const GamingPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Character Voice Creation',
      description: 'Generate unique voices for NPCs, protagonists, and supporting characters with distinct personalities.',
      benefits: ['Unlimited character voices', 'Personality matching', 'Consistent delivery']
    },
    {
      icon: Zap,
      title: 'Real-time Voice Generation',
      description: 'Dynamic dialogue generation for procedural content and player interactions.',
      benefits: ['Low latency processing', 'Dynamic responses', 'Seamless integration']
    },
    {
      icon: Headphones,
      title: 'Immersive Narration',
      description: 'Create compelling storylines and atmospheric narration that draws players deeper into your world.',
      benefits: ['Cinematic quality', 'Emotional depth', 'Story enhancement']
    },
    {
      icon: Settings,
      title: 'Voice Customization',
      description: 'Fine-tune voice parameters like age, emotion, accent, and speaking style for perfect character fit.',
      benefits: ['Granular control', 'Emotion modulation', 'Style variations']
    }
  ];

  const gameTypes = [
    {
      title: 'RPG Games',
      description: 'Rich character dialogue and epic storytelling',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: ['Multiple character voices', 'Quest narration', 'Dialogue trees'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Action Games',
      description: 'Dynamic combat callouts and mission briefings',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: ['Combat audio', 'Mission updates', 'Character banter'],
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Indie Games',
      description: 'Professional voice acting on any budget',
      image: 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: ['Cost-effective solution', 'Quick iterations', 'Creative freedom'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Mobile Games',
      description: 'Lightweight audio for mobile platforms',
      image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: ['Optimized file sizes', 'Quick loading', 'Battery efficient'],
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Lead Game Designer',
      company: 'Mythic Studios',
      content: 'VoiceForge allowed us to create 50+ unique character voices for our RPG. The quality is indistinguishable from professional voice actors.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      game: 'Legends of Aetheria'
    },
    {
      name: 'Sarah Martinez',
      role: 'Indie Developer',
      company: 'Pixel Dreams',
      content: 'As a solo developer, VoiceForge gave my game the professional voice acting it needed without breaking the budget.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      game: 'Neon Nights'
    },
    {
      name: 'Marcus Johnson',
      role: 'Audio Director',
      company: 'Thunder Games',
      content: 'The real-time voice generation feature revolutionized our dialogue system. Players love the dynamic conversations.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      game: 'Cyber Warfare 2077'
    }
  ];

  const stats = [
    { label: 'Games Using VoiceForge', value: '2,500+', icon: Gamepad2 },
    { label: 'Character Voices Created', value: '50K+', icon: Mic },
    { label: 'Hours of Audio Generated', value: '1M+', icon: Volume2 },
    { label: 'Developer Satisfaction', value: '98%', icon: Star }
  ];

  const integrations = [
    { name: 'Unity', logo: '🎮', description: 'Native Unity plugin' },
    { name: 'Unreal Engine', logo: '🚀', description: 'UE5 integration' },
    { name: 'Godot', logo: '🎯', description: 'Open source support' },
    { name: 'GameMaker', logo: '🎨', description: '2D game engine' },
    { name: 'Construct 3', logo: '⚡', description: 'Browser-based' },
    { name: 'RPG Maker', logo: '📖', description: 'Story-driven games' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center space-x-2 bg-green-500/10 backdrop-blur-xl rounded-full px-4 py-2 border border-green-500/20 mb-6">
          <Gamepad2 className="w-4 h-4 text-green-400" />
          <span className="text-sm text-green-300">Gaming Solutions</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Bring Characters
          <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            To Life
          </span>
        </h1>
        
        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
          Create immersive gaming experiences with AI-powered character voices. 
          From epic RPG narratives to dynamic action sequences, give every character 
          a unique voice that enhances player engagement and storytelling.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Creating</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            className="bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            <span>Play Demo</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-white/70 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced Gaming Audio Features
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Professional-grade tools designed specifically for game developers and audio designers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{feature.description}</p>
              <div className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Sparkles className="w-4 h-4 text-green-400" />
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Game Types */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perfect for Every Game Genre
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From indie passion projects to AAA blockbusters, VoiceForge adapts to your game's needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {gameTypes.map((gameType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={gameType.image}
                  alt={gameType.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${gameType.gradient} opacity-20`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{gameType.title}</h3>
                  <p className="text-white/80 text-sm">{gameType.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {gameType.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Trophy className="w-4 h-4 text-green-400" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Engine Integrations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seamless Engine Integration
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Works with all major game engines and development platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-3">{integration.logo}</div>
              <div className="text-white font-medium text-sm mb-1">{integration.name}</div>
              <div className="text-white/60 text-xs">{integration.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved by Game Developers
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Join thousands of developers creating amazing gaming experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-green-400 text-sm">{testimonial.role}</p>
                  <p className="text-white/50 text-xs">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-3">"{testimonial.content}"</p>
              <div className="text-green-400 text-sm font-medium">🎮 {testimonial.game}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-3xl p-12 border border-green-500/20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Level Up Your Game Audio?
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          Join over 2,500 game developers who are already using VoiceForge to create 
          immersive, professional-quality voice acting for their games.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <div className="text-white/60 text-sm">
            Free for indie developers • No royalties • Cancel anytime
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GamingPage;