import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Mic2, Zap, Users, Star, Clock, Shield, Globe, Headphones, Video, GraduationCap, Gamepad2, Building } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onIndustryClick: (industry: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted, onIndustryClick }) => {
  const stats = [
    { label: 'Voices Created', value: '50K+', icon: Mic2 },
    { label: 'Happy Users', value: '10K+', icon: Users },
    { label: 'Languages', value: '25+', icon: Globe },
    { label: 'Avg Rating', value: '4.9', icon: Star },
  ];

  const features = [
    {
      icon: Mic2,
      title: 'AI Voice Cloning',
      description: 'Upload just 30 seconds of audio and create a perfect digital replica of any voice with our advanced neural networks.',
      highlights: ['30-second samples', 'Neural voice synthesis', 'Real-time processing']
    },
    {
      icon: Zap,
      title: 'Instant Text-to-Speech',
      description: 'Convert text to natural-sounding speech in real-time with customizable voice parameters and professional audio quality.',
      highlights: ['Real-time synthesis', 'Custom parameters', 'Studio quality']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and privacy protection ensure your voice data and generated content remain completely secure.',
      highlights: ['End-to-end encryption', 'GDPR compliant', 'Zero data retention']
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Create voices in 25+ languages with native accent support and cultural pronunciation nuances.',
      highlights: ['25+ languages', 'Native accents', 'Cultural accuracy']
    },
    {
      icon: Clock,
      title: 'Lightning Fast',
      description: 'Generate hours of speech in minutes with our optimized AI infrastructure and global edge network.',
      highlights: ['Sub-second latency', 'Global CDN', 'Scalable processing']
    },
    {
      icon: Headphones,
      title: 'Professional Audio',
      description: 'Broadcast-quality output with advanced audio processing, noise reduction, and customizable effects.',
      highlights: ['Broadcast quality', 'Noise reduction', 'Audio effects']
    }
  ];

  const useCases = [
    {
      id: 'content-creation',
      title: 'Content Creation',
      description: 'Podcasts, YouTube videos, audiobooks',
      gradient: 'from-purple-500 to-pink-500',
      icon: Video,
      details: 'Perfect for creators who need consistent, high-quality narration'
    },
    {
      id: 'elearning',
      title: 'E-Learning',
      description: 'Course narration, training materials',
      gradient: 'from-blue-500 to-cyan-500',
      icon: GraduationCap,
      details: 'Scale educational content with multilingual voice support'
    },
    {
      id: 'gaming',
      title: 'Gaming',
      description: 'Character voices, game narration',
      gradient: 'from-green-500 to-emerald-500',
      icon: Gamepad2,
      details: 'Bring characters to life with unique, customizable voices'
    },
    {
      id: 'business',
      title: 'Business',
      description: 'IVR systems, presentations, ads',
      gradient: 'from-orange-500 to-red-500',
      icon: Building,
      details: 'Professional voice solutions for enterprise applications'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Podcast Producer',
      content: 'VoiceForge transformed our production workflow. We can now create multilingual content effortlessly.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Game Developer',
      content: 'The voice quality is indistinguishable from human speech. Our players are amazed by the character voices.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Watson',
      role: 'E-Learning Director',
      content: 'We reduced our narration costs by 80% while improving consistency across all our training materials.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-full px-4 py-2 border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-accent-500" />
              <span className="text-sm text-white/80">Trusted by 10,000+ creators worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Clone Any Voice
              <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                In Seconds
              </span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform text into speech with AI-powered voice cloning. Create custom voices, 
              generate natural-sounding audio, and bring your content to life with 
              professional-grade voice synthesis technology.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>30-second training</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Enterprise security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>25+ languages</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <motion.button
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Cloning Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              className="group bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Watch Demo</span>
              <Zap className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Every Creator
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Everything you need to create professional voice content with cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From content creation to enterprise solutions, VoiceForge adapts to your industry needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                onClick={() => onIndustryClick(useCase.id)}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-white/70 text-sm mb-3">{useCase.description}</p>
                  <p className="text-white/50 text-xs">{useCase.details}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-white/60 text-xs">Learn more</span>
                    <ArrowRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Loved by Creators Worldwide
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              See what our community of creators, developers, and businesses have to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Voice Content?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of creators who are already using VoiceForge to revolutionize their audio content.
            Start your free trial today and experience the future of voice synthesis.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <div className="text-white/60 text-sm">
              No credit card required • 5 free voice clones
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;