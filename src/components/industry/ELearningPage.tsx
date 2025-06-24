import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, Globe, Clock, Award, ArrowRight, Play, CheckCircle, Target, Zap } from 'lucide-react';

const ELearningPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Multilingual Course Creation',
      description: 'Create courses in 25+ languages with native pronunciation and cultural accuracy.',
      benefits: ['Native accents', 'Cultural context', 'Global reach']
    },
    {
      icon: Users,
      title: 'Consistent Instructor Voice',
      description: 'Maintain the same instructor voice across all modules for better learning continuity.',
      benefits: ['Brand consistency', 'Student familiarity', 'Professional quality']
    },
    {
      icon: Clock,
      title: 'Rapid Content Production',
      description: 'Convert text-based materials to audio content in minutes, not weeks.',
      benefits: ['10x faster production', 'Quick updates', 'Scalable content']
    },
    {
      icon: Award,
      title: 'Accessibility Compliance',
      description: 'Meet ADA and WCAG guidelines with high-quality audio narration for all learners.',
      benefits: ['ADA compliant', 'Inclusive learning', 'Better engagement']
    }
  ];

  const useCases = [
    {
      title: 'Corporate Training',
      description: 'Scale employee training programs across global offices',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      stats: '90% completion rate',
      metric: 'vs 65% text-only'
    },
    {
      title: 'Online Universities',
      description: 'Deliver consistent lecture quality across all courses',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      stats: '40% better retention',
      metric: 'with audio content'
    },
    {
      title: 'K-12 Education',
      description: 'Create engaging educational content for young learners',
      image: 'https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      stats: '85% engagement boost',
      metric: 'in remote learning'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Improved Learning Outcomes',
      description: 'Students retain 65% more information with audio-visual content',
      stat: '65%'
    },
    {
      icon: Clock,
      title: 'Faster Content Creation',
      description: 'Reduce course production time from months to days',
      stat: '10x'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Reach learners in 25+ languages with native voices',
      stat: '25+'
    },
    {
      icon: Zap,
      title: 'Cost Reduction',
      description: 'Cut narration costs by up to 80% compared to human voice actors',
      stat: '80%'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Jennifer Walsh',
      role: 'Director of Online Learning',
      company: 'Stanford University Extension',
      content: 'VoiceForge transformed our course production. We now deliver consistent, high-quality narration across 200+ courses in multiple languages.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Michael Rodriguez',
      role: 'L&D Manager',
      company: 'Microsoft',
      content: 'Our employee training completion rates increased by 45% after implementing AI-narrated modules. The consistency is remarkable.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Sarah Kim',
      role: 'EdTech Founder',
      company: 'LearnFast Academy',
      content: 'We scaled from 5 to 50 courses in 6 months. VoiceForge made it possible to maintain quality while growing rapidly.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const integrations = [
    { name: 'Moodle', logo: '🎓' },
    { name: 'Canvas', logo: '📚' },
    { name: 'Blackboard', logo: '🖥️' },
    { name: 'Google Classroom', logo: '🏫' },
    { name: 'Coursera', logo: '🌐' },
    { name: 'Udemy', logo: '💡' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-xl rounded-full px-4 py-2 border border-blue-500/20 mb-6">
          <GraduationCap className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300">E-Learning Solutions</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Education
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            With AI Narration
          </span>
        </h1>
        
        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
          Create engaging, accessible educational content at scale. From corporate training 
          to university courses, deliver consistent, high-quality narration that enhances 
          learning outcomes and student engagement.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            className="bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            <span>See Demo</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Benefits Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-4 gap-6 mb-20"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <benefit.icon className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{benefit.stat}</div>
            <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
            <p className="text-white/70 text-sm">{benefit.description}</p>
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
            Built for Educational Excellence
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive tools designed specifically for educators and training professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{feature.description}</p>
              <div className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
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
        transition={{ delay: 0.6 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven Results Across Education
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            See how educational institutions are improving outcomes with AI-powered narration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-1">
                    {useCase.stats}
                  </div>
                  <div className="text-white/80 text-xs">{useCase.metric}</div>
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

      {/* Integrations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seamless LMS Integration
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Works with all major learning management systems and educational platforms
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-3">{integration.logo}</div>
              <div className="text-white/80 font-medium">{integration.name}</div>
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
            Trusted by Leading Educators
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Join thousands of educational institutions improving learning outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  <p className="text-white/50 text-xs">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Educational Content?
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          Join leading educational institutions using VoiceForge to create more 
          engaging, accessible, and effective learning experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <div className="text-white/60 text-sm">
            30-day free trial • No setup fees • Cancel anytime
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ELearningPage;