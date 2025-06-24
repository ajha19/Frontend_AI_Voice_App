import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, Zap, Library, Home, Video, GraduationCap, Gamepad2, Building,
  Sparkles, BarChart3, ShoppingBag, Users, MessageSquare, Settings,
  Brain, Globe, Crown, Bell, Search, User, Menu, X
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);

  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'enhanced-studio', label: 'Voice Studio', icon: Sparkles },
    { id: 'synthesis', label: 'Speech Synthesis', icon: Zap },
    { id: 'clone', label: 'Voice Cloning', icon: Mic },
    { id: 'library', label: 'Voice Library', icon: Library },
  ];

  const advancedNavItems = [
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag },
    { id: 'collaboration', label: 'Collaboration', icon: Users },
    { id: 'ai-chat', label: 'AI Assistant', icon: MessageSquare },
  ];

  const industryItems = [
    { id: 'content-creation', label: 'Content', icon: Video },
    { id: 'elearning', label: 'E-Learning', icon: GraduationCap },
    { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
    { id: 'business', label: 'Business', icon: Building },
  ];

  return (
    <header className="relative z-20 px-4 py-4 border-b border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <Mic className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">VoiceForge</h1>
              <p className="text-xs text-white/60">AI Voice Platform</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-xl rounded-full p-1 border border-white/10">
              {mainNavItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden lg:block">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                type="text"
                placeholder="Search voices..."
                className="w-64 pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
              />
            </div>

            {/* Notifications */}
            <motion.button
              className="relative w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="w-5 h-5 text-white" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </motion.button>

            {/* Profile */}
            <div className="relative">
              <motion.button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 rounded-xl p-2 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-white text-sm font-medium">John Doe</p>
                  <p className="text-white/60 text-xs">Pro Plan</p>
                </div>
                <Crown className="w-4 h-4 text-yellow-400" />
              </motion.button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-64 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
                >
                  <div className="p-4 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">John Doe</p>
                        <p className="text-white/60 text-sm">john@example.com</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Crown className="w-3 h-3 text-yellow-400" />
                          <span className="text-yellow-400 text-xs">Pro Plan</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2">
                    <button className="w-full text-left px-3 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors">
                      <Settings className="w-4 h-4 inline mr-2" />
                      Settings
                    </button>
                    <button className="w-full text-left px-3 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors">
                      <BarChart3 className="w-4 h-4 inline mr-2" />
                      Usage & Billing
                    </button>
                    <button className="w-full text-left px-3 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors">
                      <Globe className="w-4 h-4 inline mr-2" />
                      API Keys
                    </button>
                    <hr className="border-white/10 my-2" />
                    <button className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                      Sign Out
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </motion.button>
          </div>
        </div>

        {/* Advanced Navigation (Desktop) */}
        <div className="hidden xl:flex items-center justify-center mt-4">
          <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-xl rounded-full p-1 border border-white/10">
            {advancedNavItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
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
        </div>

        {/* Industry Navigation (Desktop) */}
        <div className="hidden lg:flex items-center justify-center mt-3">
          <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-xl rounded-full p-1 border border-white/10">
            {industryItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-purple-500 text-white shadow-lg'
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden mt-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="p-4">
              {/* Search Mobile */}
              <div className="md:hidden mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                  <input
                    type="text"
                    placeholder="Search voices..."
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-500 text-sm"
                  />
                </div>
              </div>

              {/* Main Navigation */}
              <div className="space-y-2 mb-4">
                <p className="text-white/60 text-xs uppercase tracking-wider font-medium">Main</p>
                {mainNavItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeTab === item.id
                        ? 'bg-primary-500 text-white'
                        : 'text-white/70 hover:bg-white/10'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Advanced Navigation */}
              <div className="space-y-2 mb-4">
                <p className="text-white/60 text-xs uppercase tracking-wider font-medium">Advanced</p>
                {advancedNavItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeTab === item.id
                        ? 'bg-accent-500 text-white'
                        : 'text-white/70 hover:bg-white/10'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Industry Navigation */}
              <div className="space-y-2">
                <p className="text-white/60 text-xs uppercase tracking-wider font-medium">Industries</p>
                {industryItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeTab === item.id
                        ? 'bg-purple-500 text-white'
                        : 'text-white/70 hover:bg-white/10'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;