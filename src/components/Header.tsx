import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, Zap, Library, Home, Video, GraduationCap, Gamepad2, Building,
  Sparkles, BarChart3, ShoppingBag, Users, MessageSquare, Settings,
  Brain, Globe, Crown, Bell, Search, User, Menu, X, ChevronDown
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [notifications] = useState(3);

  // Navigation items organized by sections
  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'enhanced-studio', label: 'Voice Studio', icon: Sparkles },
  ];

  const productItems = [
    { id: 'clone', label: 'Voice Cloning', icon: Mic },
    { id: 'synthesis', label: 'Text to Speech', icon: Zap },
    { id: 'library', label: 'Voice Library', icon: Library },
    { id: 'api-access', label: 'API Access', icon: Settings },
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

  const companyItems = [
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' },
  ];

  return (
    <header className="relative z-20 px-4 py-4 border-b border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        {/* Main Header Row */}
        <div className="flex items-center justify-between h-16">
          {/* Logo - Fixed alignment */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 flex-shrink-0"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <Mic className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">VoiceForge</h1>
              <p className="text-xs text-white/60">AI Voice Platform</p>
            </div>
          </motion.div>

          {/* Desktop Main Navigation - Centered */}
          <nav className="hidden xl:flex items-center space-x-2 flex-1 justify-center">
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-full px-2 py-1 border border-white/10">
              {/* Main Nav Items */}
              {mainNavItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
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
              
              {/* Product Dropdown */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    productItems.some(item => item.id === activeTab)
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Library className="w-4 h-4" />
                  <span>Product</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>
                
                <AnimatePresence>
                  {isProductDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full mt-2 left-0 w-56 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden z-50"
                    >
                      <div className="p-2">
                        {productItems.map((item) => (
                          <motion.button
                            key={item.id}
                            onClick={() => {
                              setActiveTab(item.id);
                              setIsProductDropdownOpen(false);
                            }}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-colors text-left ${
                              activeTab === item.id ? 'bg-white/20 text-white' : ''
                            }`}
                            whileHover={{ x: 4 }}
                          >
                            <item.icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{item.label}</span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </nav>

          {/* Right Section - Properly aligned */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Search */}
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                type="text"
                placeholder="Search voices..."
                className="w-56 pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
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
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {notifications}
                </span>
              )}
            </motion.button>

            {/* Profile - Properly aligned */}
            <div className="relative">
              <motion.button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 rounded-xl px-3 py-2.5 transition-colors"
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
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-64 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden z-50"
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
                      {companyItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveTab(item.id);
                            setIsProfileOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          {item.label}
                        </button>
                      ))}
                      <hr className="border-white/10 my-2" />
                      <button className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                        Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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

        {/* Advanced Navigation Row (Desktop) - Evenly spaced */}
        <div className="hidden xl:flex items-center justify-center mt-4">
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-full px-2 py-1 border border-white/10">
            {advancedNavItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
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

        {/* Industry Navigation Row (Desktop) - Evenly spaced */}
        <div className="hidden lg:flex items-center justify-center mt-3">
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-full px-2 py-1 border border-white/10">
            {industryItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
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
        <AnimatePresence>
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

                {/* Navigation Sections */}
                <div className="space-y-6">
                  {/* Main Navigation */}
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider font-medium mb-3">Main</p>
                    <div className="space-y-2">
                      {mainNavItems.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => {
                            setActiveTab(item.id);
                            setIsMenuOpen(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            activeTab === item.id
                              ? 'bg-primary-500 text-white'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                          whileTap={{ scale: 0.95 }}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Product Navigation */}
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider font-medium mb-3">Product</p>
                    <div className="space-y-2">
                      {productItems.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => {
                            setActiveTab(item.id);
                            setIsMenuOpen(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            activeTab === item.id
                              ? 'bg-blue-500 text-white'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                          whileTap={{ scale: 0.95 }}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Advanced Navigation */}
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider font-medium mb-3">Advanced</p>
                    <div className="space-y-2">
                      {advancedNavItems.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => {
                            setActiveTab(item.id);
                            setIsMenuOpen(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            activeTab === item.id
                              ? 'bg-accent-500 text-white'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                          whileTap={{ scale: 0.95 }}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Industry Navigation */}
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider font-medium mb-3">Industries</p>
                    <div className="space-y-2">
                      {industryItems.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => {
                            setActiveTab(item.id);
                            setIsMenuOpen(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            activeTab === item.id
                              ? 'bg-purple-500 text-white'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                          whileTap={{ scale: 0.95 }}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;