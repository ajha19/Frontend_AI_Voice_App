import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Users, Globe, Shield, Target, Award, Heart, Lightbulb } from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing the boundaries of AI voice technology with ethical development practices'
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Making professional voice synthesis available to creators of all backgrounds'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Delivering reliable, high-quality voice solutions that exceed expectations'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building a supportive ecosystem for creators, educators, and innovators'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      bio: 'Former ML engineer at Google, passionate about democratizing voice technology',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-founder',
      bio: 'AI researcher with 10+ years in speech synthesis and neural networks',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Product',
      bio: 'Product strategist focused on user experience and accessibility in AI tools',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '50K+', icon: Users },
    { label: 'Voices Created', value: '1M+', icon: Mic },
    { label: 'Countries Served', value: '150+', icon: Globe },
    { label: 'Uptime', value: '99.9%', icon: Shield }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          About
          <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            VoiceForge
          </span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          We're pioneering the future of AI voice technology, making professional voice synthesis 
          accessible to creators, educators, and businesses worldwide.
        </p>
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
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-6 h-6 text-primary-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-white/70 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-2 gap-8 mb-20"
      >
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-white/70 leading-relaxed">
            To democratize voice technology and enable creators, educators, and businesses 
            to produce professional-quality voice content without barriers. We believe 
            everyone should have access to tools that amplify their creative expression.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-white/70 leading-relaxed">
            A world where anyone can create compelling voice content, breaking down 
            language barriers and making information accessible to all. We envision 
            a future where AI enhances human creativity rather than replacing it.
          </p>
        </div>
      </motion.div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            The passionate individuals behind VoiceForge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-primary-500/20"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-primary-400 font-medium mb-3">{member.role}</p>
              <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-xl rounded-3xl p-12 border border-primary-500/20"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Story</h2>
        </div>
        <div className="max-w-4xl mx-auto text-white/70 leading-relaxed space-y-6">
          <p>
            VoiceForge was born from a simple observation: while AI technology was advancing rapidly, 
            professional voice synthesis remained expensive and inaccessible to most creators. 
            Our founders, having worked at leading tech companies, saw an opportunity to change this.
          </p>
          <p>
            Starting in a small garage in 2023, we began developing technology that would make 
            professional-grade voice synthesis available to everyone. Our breakthrough came when 
            we developed a neural network architecture that could learn voice characteristics 
            from just 30 seconds of audio.
          </p>
          <p>
            Today, VoiceForge serves over 50,000 creators, educators, and businesses worldwide. 
            We've helped produce millions of hours of content in over 25 languages, enabling 
            our users to reach global audiences and break down language barriers.
          </p>
          <p>
            But we're just getting started. Our vision extends beyond voice synthesis to a future 
            where AI empowers human creativity in ways we're only beginning to imagine.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;