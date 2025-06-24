import React from 'react';
import { motion } from 'framer-motion';
import { Video, Mic, Play, Download, Users, Clock, Star, ArrowRight, Youtube, Headphones, BookOpen, Camera } from 'lucide-react';

const ContentCreationPage: React.FC = () => {
  const features = [
    {
      icon: Youtube,
      title: 'YouTube & Video Content',
      description: 'Create consistent narration for your video content with custom voice models that match your brand.',
      benefits: ['Brand consistency', 'Multilingual content', 'Quick turnaround']
    },
    {
      icon: Headphones,
      title: 'Podcast Production',
      description: 'Generate professional podcast intros, outros, and even full episodes with AI-powered voices.',
      benefits: ['Professional quality', 'Cost-effective', 'Scalable production']
    },
    {
      icon: BookOpen,
      title: 'Audiobook Creation',
      description: 'Transform written content into engaging audiobooks with natural-sounding narration.',
      benefits: ['Multiple voice options', 'Chapter consistency', 'Rapid production']
    },
    {
      icon: Camera,
      title: 'Social Media Content',
      description: 'Create engaging voice content for TikTok, Instagram, and other social platforms.',
      benefits: ['Viral-ready content', 'Platform optimization', 'Trend adaptation']
    }
  ];

  const useCases = [
    {
      title: 'Educational Channels',
      description: 'Create consistent educational content with professional narration',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      stats: '85% faster production'
    },
    {
      title: 'Entertainment Podcasts',
      description: 'Produce engaging podcast content with multiple character voices',
      image: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      stats: '70% cost reduction'
    },
    {
      title: 'Brand Storytelling',
      description: 'Maintain brand voice consistency across all audio content',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      stats: '95% brand consistency'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'YouTube Creator (2M subscribers)',
      content: 'VoiceForge helped me scale my content to 12 languages. My international audience grew by 300%!',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      channel: '@AlexTechReviews'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Podcast Host',
      content: 'I can now produce 5 episodes per week instead of 2. The voice quality is indistinguishable from my real voice.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      channel: 'The Future Podcast'
    },
    {
      name: 'Marcus Chen',
      role: 'Audiobook Producer',
      content: 'We reduced our production time from 6 months to 2 weeks per audiobook. Game-changing technology.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      channel: 'Chen Audio Productions'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual content creators',
      features: [
        '10 custom voice models',
        '50 hours of synthesis/month',
        'HD audio quality',
        'Basic voice editing',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for professional creators and small teams',
      features: [
        '50 custom voice models',
        '200 hours of synthesis/month',
        'Studio-quality audio',
        'Advanced voice editing',
        'Priority support',
        'Commercial license'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale content operations',
      features: [
        'Unlimited voice models',
        'Unlimited synthesis',
        'White-label solution',
        'API access',
        'Dedicated support',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-xl rounded-full px-4 py-2 border border-purple-500/20 mb-6">
          <Video className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300">Content Creation Solutions</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Scale Your Content
          <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            With AI Voices
          </span>
        </h1>
        
        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
          Create unlimited audio content for YouTube, podcasts, audiobooks, and social media. 
          Maintain your unique voice across all platforms while scaling production 10x faster.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-2"
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
            <span>Watch Demo</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need for Content Creation
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Professional tools designed specifically for content creators and media professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{feature.description}</p>
              <div className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Use Cases */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real Success Stories
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            See how creators are using VoiceForge to transform their content production
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {useCase.stats}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-white/70">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Top Creators
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Join thousands of successful content creators who trust VoiceForge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-purple-400 text-sm">{testimonial.role}</p>
                  <p className="text-white/50 text-xs">{testimonial.channel}</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">"{testimonial.content}"</p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Creator Plan
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Flexible pricing designed for creators at every stage of their journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 scale-105' 
                  : 'border-white/10 hover:border-purple-500/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/70 ml-1">{plan.period}</span>
                </div>
                <p className="text-white/70">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Scale Your Content?
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          Join over 10,000 creators who are already using VoiceForge to produce 
          professional content faster and more efficiently than ever before.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <div className="text-white/60 text-sm">
            No credit card required • 14-day free trial
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContentCreationPage;