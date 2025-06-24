import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Key, Zap, Globe, Shield, Check, Copy, Play, Book, Terminal } from 'lucide-react';

const APIAccess: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  const features = [
    {
      icon: Zap,
      title: 'Real-time Synthesis',
      description: 'Generate speech in real-time with low latency'
    },
    {
      icon: Globe,
      title: '25+ Languages',
      description: 'Support for multiple languages and accents'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and data protection'
    },
    {
      icon: Code,
      title: 'RESTful API',
      description: 'Simple HTTP endpoints with comprehensive docs'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$0.001',
      unit: 'per character',
      description: 'Perfect for testing and small projects',
      features: [
        '10,000 free characters/month',
        'Standard voices',
        'Basic API access',
        'Community support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$0.0008',
      unit: 'per character',
      description: 'For production applications',
      features: [
        'Unlimited characters',
        'Premium voices',
        'Priority processing',
        'Email support',
        'Custom voice training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      unit: '',
      description: 'Volume discounts and dedicated support',
      features: [
        'Volume discounts',
        'Dedicated infrastructure',
        'SLA guarantees',
        '24/7 phone support',
        'Custom integration'
      ],
      popular: false
    }
  ];

  const codeExample = `curl -X POST https://api.voiceforge.ai/v1/synthesize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Hello, world! This is VoiceForge AI.",
    "voice_id": "rachel-premium",
    "settings": {
      "stability": 0.5,
      "similarity": 0.75,
      "style": 0.0,
      "use_speaker_boost": true
    },
    "output_format": "mp3_44100_128"
  }'`;

  const responseExample = `{
  "audio_base64": "UklGRiQAAABXQVZFZm10IBAAAAABAAEA...",
  "content_type": "audio/mpeg",
  "duration_seconds": 3.2,
  "character_count": 34,
  "voice_id": "rachel-premium",
  "request_id": "req_abc123"
}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-xl rounded-full px-4 py-2 border border-blue-500/20 mb-6">
          <Terminal className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300">Developer API</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          VoiceForge
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            API Access
          </span>
        </h1>
        
        <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
          Integrate VoiceForge's powerful AI voice synthesis directly into your applications 
          with our comprehensive REST API. Build amazing voice experiences with just a few lines of code.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Key className="w-5 h-5" />
            <span>Get API Key</span>
          </motion.button>
          
          <motion.button
            className="bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Book className="w-5 h-5" />
            <span>View Docs</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-4 gap-6 mb-20"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <feature.icon className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
            <p className="text-white/70 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* API Documentation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid lg:grid-cols-2 gap-8 mb-20"
      >
        {/* Code Example */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Quick Start</h3>
            <motion.button
              onClick={() => copyToClipboard(codeExample)}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span className="text-sm">{copiedCode ? 'Copied!' : 'Copy'}</span>
            </motion.button>
          </div>
          
          <div className="bg-black/40 rounded-xl p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{codeExample}</code>
            </pre>
          </div>
          
          <div className="mt-6">
            <h4 className="text-white font-semibold mb-3">Response:</h4>
            <div className="bg-black/40 rounded-xl p-4 overflow-x-auto">
              <pre className="text-blue-400 text-sm">
                <code>{responseExample}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Getting Started</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Get Your API Key</h4>
                <p className="text-white/70 text-sm">Sign up and generate your API key from the dashboard</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Make Your First Request</h4>
                <p className="text-white/70 text-sm">Use our REST API to synthesize your first voice</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Integrate & Scale</h4>
                <p className="text-white/70 text-sm">Build amazing voice experiences in your application</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <h4 className="text-blue-400 font-semibold mb-2">Need Help?</h4>
            <p className="text-white/70 text-sm mb-4">Our comprehensive documentation covers everything you need to know.</p>
            <div className="flex space-x-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                View Docs
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Discord
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">API Pricing</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Simple, transparent pricing that scales with your usage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-300 ${
                tier.popular 
                  ? 'border-blue-500 scale-105' 
                  : 'border-white/10 hover:border-blue-500/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.unit && <span className="text-white/70 ml-1">{tier.unit}</span>}
                </div>
                <p className="text-white/70">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Building?
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          Join thousands of developers already using VoiceForge API to create 
          amazing voice experiences. Get started with 10,000 free characters.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Free API Key</span>
            <Key className="w-5 h-5" />
          </motion.button>
          <div className="text-white/60 text-sm">
            10,000 free characters • No credit card required
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default APIAccess;