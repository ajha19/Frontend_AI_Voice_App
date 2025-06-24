import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, UserCheck, Globe, Clock } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const principles = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We use industry-standard encryption to protect your data'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear information about what data we collect and why'
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      description: 'Full control over your personal data and privacy settings'
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'GDPR, CCPA, and other privacy regulations compliant'
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <div className="flex items-center justify-center space-x-2 text-white/60 mb-6">
          <Clock className="w-4 h-4" />
          <span>Last updated: December 2024</span>
        </div>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Your privacy is fundamental to us. This policy explains how we collect, use, and protect your information.
        </p>
      </motion.div>

      {/* Principles */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-6 mb-12"
      >
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center mb-4">
              <principle.icon className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{principle.title}</h3>
            <p className="text-white/70 text-sm">{principle.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Policy Content */}
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
                <Lock className="w-6 h-6 mr-2 text-primary-400" />
                Information We Collect
              </h2>
              <div className="text-white/70 space-y-4">
                <p>
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create an account and provide your email address and name</li>
                  <li>Upload voice samples for cloning purposes</li>
                  <li>Use our voice synthesis services</li>
                  <li>Contact us for support or feedback</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                </ul>
                <p>
                  We also automatically collect certain information when you use our services, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Usage data and analytics</li>
                  <li>Device information and IP address</li>
                  <li>Browser type and operating system</li>
                  <li>Referring website and pages visited</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our voice synthesis services</li>
                  <li>Process your voice cloning requests and generate custom voices</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Analyze usage patterns to improve our platform</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Voice Data Protection</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  Your voice data is particularly sensitive, and we take special care to protect it:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Voice samples are encrypted in transit and at rest</li>
                  <li>Access to voice data is restricted to authorized personnel only</li>
                  <li>Voice models are stored securely and linked only to your account</li>
                  <li>You can delete your voice data at any time from your account settings</li>
                  <li>We never use your voice data to train general models without explicit consent</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties, except:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety, or that of our users</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                  <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights and Choices</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information and voice data</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Restriction:</strong> Request limitation on how we process your information</li>
                  <li><strong>Objection:</strong> Object to certain types of processing</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at privacy@voiceforge.ai
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for voice data transmission</li>
                  <li>AES-256 encryption for data storage</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>SOC 2 Type II compliance</li>
                  <li>Employee security training and background checks</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  VoiceForge operates globally, and your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Standard Contractual Clauses approved by the European Commission</li>
                  <li>Adequacy decisions where applicable</li>
                  <li>Other legally recognized transfer mechanisms</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting the new Privacy Policy on this page</li>
                  <li>Sending you an email notification</li>
                  <li>Providing a prominent notice in our application</li>
                </ul>
                <p>
                  Your continued use of our services after such modifications constitutes acceptance of the updated Privacy Policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <div className="text-white/70 space-y-4">
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li><strong>Email:</strong> privacy@voiceforge.ai</li>
                    <li><strong>Address:</strong> VoiceForge Inc., 123 Tech Street, San Francisco, CA 94105</li>
                    <li><strong>Data Protection Officer:</strong> dpo@voiceforge.ai</li>
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

export default PrivacyPolicy;