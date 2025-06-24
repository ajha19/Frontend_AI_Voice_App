import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Zap, Library, Home, Video, GraduationCap, Gamepad2, Building } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'clone', label: 'Clone Voice', icon: Mic },
    { id: 'synthesis', label: 'Text to Speech', icon: Zap },
    { id: 'library', label: 'Voice Library', icon: Library },
  ];

  const industryItems = [
    { id: 'content-creation', label: 'Content', icon: Video },
    { id: 'elearning', label: 'E-Learning', icon: GraduationCap },
    { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
    { id: 'business', label: 'Business', icon: Building },
  ];

  return (
    <header className="relative z-20 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <Mic className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">VoiceForge</h1>
          </motion.div>

          <nav className="hidden lg:flex">
            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-xl rounded-full p-1 border border-white/10">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Industry Navigation */}
          <nav className="hidden md:flex lg:hidden">
            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-xl rounded-full p-1 border border-white/10">
              {[...navItems.slice(0, 2), ...industryItems.slice(0, 2)].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </nav>
        </div>

        {/* Secondary Navigation for Industries */}
        {activeTab !== 'home' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex justify-center"
          >
            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-xl rounded-full p-1 border border-white/10">
              {industryItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-accent-500 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4">
          <div className="grid grid-cols-4 gap-2 bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10 mb-3">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center space-y-1 px-2 py-3 rounded-xl text-xs font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-primary-500 text-white'
                    : 'text-white/70'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>
          
          <div className="grid grid-cols-4 gap-2 bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
            {industryItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center space-y-1 px-2 py-3 rounded-xl text-xs font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-accent-500 text-white'
                    : 'text-white/70'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;