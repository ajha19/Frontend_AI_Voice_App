import React from 'react';
import { motion } from 'framer-motion';
import { Building, Phone, Presentation, Megaphone, ArrowRight, Play, Shield, Globe, Clock, Users, CheckCircle, BarChart3, Headphones, Mic } from 'lucide-react';

const BusinessPage: React.FC = () => {
  const solutions = [
    {
      icon: Phone,
      title: 'IVR & Call Centers',
      description: 'Professional phone system voices that enhance customer experience and reduce wait times.',
      benefits: ['24/7 availability', 'Consistent quality', 'Multi-language support', 'Cost reduction'],
      stats: '40% reduction in call abandonment'
    },
    {
      icon: Presentation,
      title: 'Corporate Training',
      description: 'Scalable training content with consistent narration across all modules and departments.',
      benefits: ['Standardized delivery', 'Quick updates', 'Global consistency', 'Compliance ready'],
      stats: '60% faster content creation'
    },
    {
      icon: Megaphone,
      title: 'Marketing & Advertising',
      description: 'Compelling voice-overs for commercials, explainer videos, and promotional content.',
      benefits: ['Brand voice consistency', 'Quick turnaround', 'A/B testing ready', 'Multi-platform'],
      stats: '3x faster campaign deployment'
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description: 'Automated support responses and help documentation with natural-sounding voices.',
      benefits: ['Instant responses', 'Reduced support load', 'Consistent messaging', 'Scalable solution'],
      stats: '50% reduction in support tickets'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'Patient education and medical training',
      icon: '🏥',
      features: ['HIPAA compliant', 'Medical terminology', 'Patient-friendly tone']
    },
    {
      name: 'Finance',
      description: 'Financial education and compliance training',
      icon: '🏦',
      features: ['Regulatory compliance', 'Professional tone', 'Multi-language']
    },
    {
      name: 'Retail',
      description: 'Product descriptions and customer service',
      icon: '🛍️',
      features: ['Brand consistency', 'Promotional content', 'Customer engagement']
    },
    {
      name: 'Technology',
      description: 'Product demos and technical documentation',
      icon: '💻',
      features: ['Technical accuracy', 'Clear explanations', 'Developer-friendly']
    },
    {
      name: 'Manufacturing',
      description: 'Safety training and operational procedures',
      icon: '🏭',
      features: ['Safety compliance', 'Clear instructions', 'Multi-shift training']
    },
    {
      name: 'Education',
      description: 'Corporate universities and skill development',
      icon: '🎓',
      features: ['Engaging content', 'Learning outcomes', 'Progress tracking']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'VP of Customer Experience',
      company: 'TechCorp Solutions',
      content: 'Our IVR system now sounds professional and welcoming. Customer satisfaction scores increased by 25% after implementing VoiceForge.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'Technology'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Training Director',
      company: 'Global Manufacturing Inc.',
      content: 'We reduced our training content production time by 70% while maintaining consistent quality across 15 countries.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'Manufacturing'
    },
    {
      name: 'Sarah Kim',
      role: 'Marketing Director',
      company: 'RetailMax',
      content: 'VoiceForge enabled us to create localized marketing content for 12 markets simultaneously. Our campaign reach increased 300%.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'Retail'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with enterprise-grade security and data protection'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy across multiple regions with 99.9% uptime guarantee'
    },
    {
      icon: Clock,
      title: 'Rapid Deployment',
      description: 'Get up and running in minutes with our enterprise onboarding'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Advanced user management and collaboration tools for large teams'
    }
  ];

  const pricingTiers = [
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        '25 custom voice models',
        '100 hours synthesis/month',
        'API access',
        'Priority support',
        'Team collaboration (5 users)'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Ideal for large organizations',
      features: [
        'Unlimited voice models',
        '500 hours synthesis/month',
        'Advanced API features',
        'Dedicated support',
        'Unlimited team members',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact us',
      period: '',
      description: 'Tailored solutions for enterprise needs',
      features: [
        'Custom deployment',
        'On-premise options',
        'White-label solution',
        'Custom voice training',
        'Dedicated infrastructure',
        'Custom SLA terms'
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
        <div className="inline-flex items-center space-x-2 bg-orange-500/10 backdrop-blur-xl rounded-full px-4 py-2 border border-orange-500/20 mb-6">
          <Building className="w-4 h-4 text-orange-400" />
          <span className="text-sm text-orange-300">Enterprise Solutions</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Enterprise Voice
          <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>
        
        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
          Transform your business communications with professional AI voices. 
          From customer service to training content, deliver consistent, 
          high-quality voice experiences that scale with your organization.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Schedule Demo</span>
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

      {/* Enterprise Features */}
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
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <feature.icon className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
            <p className="text-white/70 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Business Solutions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Business Solutions
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Professional voice solutions designed for enterprise-scale operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
                  {solution.stats}
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{solution.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                {solution.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Industries */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Specialized solutions for every industry's unique voice requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
              <p className="text-white/70 mb-4">{industry.description}</p>
              <div className="space-y-2">
                {industry.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                    <span className="text-white/60 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Enterprise Leaders
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            See how leading companies are transforming their voice communications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-orange-400 text-sm">{testimonial.role}</p>
                  <p className="text-white/50 text-xs">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-3">"{testimonial.content}"</p>
              <div className="text-orange-400 text-sm font-medium">🏢 {testimonial.industry}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enterprise Pricing Plans
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Flexible pricing designed to scale with your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-300 ${
                tier.popular 
                  ? 'border-orange-500 scale-105' 
                  : 'border-white/10 hover:border-orange-500/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-white/70 ml-1">{tier.period}</span>
                </div>
                <p className="text-white/70">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tier.name === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="text-center bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-xl rounded-3xl p-12 border border-orange-500/20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Business Communications?
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          Join hundreds of enterprises already using VoiceForge to deliver 
          professional, consistent voice experiences at scale.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Schedule Enterprise Demo</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <div className="text-white/60 text-sm">
            Custom deployment • Dedicated support • SLA guarantee
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BusinessPage;