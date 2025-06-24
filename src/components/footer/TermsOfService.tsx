import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle, Clock, CheckCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: 'Fair Use Policy',
      description: 'Reasonable usage guidelines for all users'
    },
    {
      icon: Shield,
      title: 'Privacy Protection',
      description: 'Your data and voice samples are protected'
    },
    {
      icon: Scale,
      title: 'Clear Rights',
      description: 'Transparent terms about your content ownership'
    },
    {
      icon: AlertTriangle,
      title: 'Responsible AI',
      description: 'Guidelines for ethical voice synthesis use'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
        <div className="flex items-center justify-center space-x-2 text-white/60 mb-6">
          <Clock className="w-4 h-4" />
          <span>Last updated: December 2024</span>
        </div>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Please read these terms carefully before using VoiceForge. They govern your use of our services.
        </p>
      </motion.div>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-6 mb-12"
      >
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center mb-4">
              <highlight.icon className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
            <p className="text-white/70 text-sm">{highlight.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Terms Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
      >
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-primary-400" />
                Acceptance of Terms
              </h2>
              <div className="text-white/70 space-y-4">
                <p>
                  By accessing and using VoiceForge ("the Service"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and VoiceForge Inc. ("Company," "we," "us," or "our") regarding your use of the Service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  VoiceForge provides AI-powered voice synthesis and cloning services, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Text-to-speech conversion using AI voices</li>
                  <li>Custom voice cloning from audio samples</li>
                  <li>Voice library access and management</li>
                  <li>API access for developers</li>
                  <li>Related tools and features for voice content creation</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Accounts and Eligibility</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  To use certain features of the Service, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Be at least 18 years old or have parental consent</li>
                  <li>Provide accurate and complete information when creating an account</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access to your account</li>
                  <li>Be responsible for all activities that occur under your account</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use Policy</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  You agree to use the Service responsibly and in compliance with all applicable laws. You may NOT use the Service to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create content that impersonates another person without consent</li>
                  <li>Generate harmful, abusive, or discriminatory content</li>
                  <li>Violate any individual's privacy or publicity rights</li>
                  <li>Create content for fraudulent or deceptive purposes</li>
                  <li>Infringe on copyrights or other intellectual property rights</li>
                  <li>Generate content that violates applicable laws or regulations</li>
                  <li>Attempt to reverse engineer or circumvent our security measures</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Voice Cloning and Consent</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  When using our voice cloning features, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Only upload voice samples that you own or have explicit permission to use</li>
                  <li>Obtain clear consent from any individual whose voice you wish to clone</li>
                  <li>Not attempt to clone voices of public figures or celebrities without permission</li>
                  <li>Clearly disclose when content is AI-generated in appropriate contexts</li>
                  <li>Respect all applicable laws regarding voice and likeness rights</li>
                </ul>
                <p>
                  We reserve the right to remove voice models that appear to violate these guidelines.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property Rights</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  <strong>Your Content:</strong> You retain ownership of any voice samples, text, or other content you upload to the Service. By uploading content, you grant us a limited license to use it solely for providing the Service to you.
                </p>
                <p>
                  <strong>Generated Content:</strong> You own the rights to audio content generated using our Service, subject to these Terms and applicable laws.
                </p>
                <p>
                  <strong>Our Technology:</strong> VoiceForge and our underlying AI technology, software, and algorithms remain our intellectual property.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Payment and Billing</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  For paid services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fees are charged according to your selected plan or usage</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>We may change pricing with 30 days' notice</li>
                  <li>Failure to pay may result in service suspension or termination</li>
                  <li>You're responsible for all taxes associated with your use</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  We strive to maintain service availability but cannot guarantee uninterrupted access. We may:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Temporarily suspend the Service for maintenance or updates</li>
                  <li>Modify or discontinue features with reasonable notice</li>
                  <li>Limit usage to prevent abuse or maintain performance</li>
                  <li>Implement fair use policies for free tier users</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Privacy and Data Protection</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms, explains how we collect, use, and protect your information. Key points include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Voice samples are encrypted and securely stored</li>
                  <li>You can delete your voice data at any time</li>
                  <li>We don't use your personal voice data to improve general models</li>
                  <li>We comply with GDPR, CCPA, and other privacy regulations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Merchantability and fitness for a particular purpose</li>
                  <li>Non-infringement of third-party rights</li>
                  <li>Accuracy or reliability of generated content</li>
                  <li>Uninterrupted or error-free operation</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, VOICEFORGE SHALL NOT BE LIABLE FOR:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages exceeding the amount paid by you in the preceding 12 months</li>
                  <li>Issues arising from misuse of the Service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  Either party may terminate this agreement:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You may close your account at any time</li>
                  <li>We may suspend or terminate accounts that violate these Terms</li>
                  <li>We may discontinue the Service with reasonable notice</li>
                  <li>Upon termination, you lose access to the Service and your data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  We may modify these Terms at any time. We will notify you of material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting updated Terms on our website</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Providing in-app notifications</li>
                </ul>
                <p>
                  Continued use of the Service after changes constitutes acceptance of the new Terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law and Disputes</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  These Terms are governed by the laws of California, USA. Any disputes will be resolved through:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Good faith negotiation as the first step</li>
                  <li>Binding arbitration if negotiation fails</li>
                  <li>Courts in San Francisco County, California for non-arbitrable matters</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li><strong>Email:</strong> legal@voiceforge.ai</li>
                    <li><strong>Address:</strong> VoiceForge Inc., 123 Tech Street, San Francisco, CA 94105</li>
                    <li><strong>Support:</strong> support@voiceforge.ai</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;