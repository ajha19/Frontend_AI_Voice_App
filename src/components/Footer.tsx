import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="border-t border-white/10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">VoiceForge</h3>
            </div>
            <p className="text-white/70 max-w-md">
              The most advanced AI voice cloning platform. Create custom voices, 
              generate natural speech, and bring your content to life with 
              professional-grade audio synthesis.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Voice Cloning</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Text to Speech</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Voice Library</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">API Access</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/70 text-sm">
            © 2024 VoiceForge. All rights reserved.
          </p>
          <p className="text-white/70 text-sm mt-4 md:mt-0">
            Made with ❤️ for the AI community
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;