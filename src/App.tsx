import React, { useState } from "react";
import { motion } from "framer-motion";

// Original Components
import Hero from "./components/Hero";
import VoiceCloning from "./components/VoiceCloning";
import TextToSpeech from "./components/TextToSpeech";
import VoiceLibrary from "./components/VoiceLibrary";
import ContentCreationPage from "./components/industry/ContentCreationPage";
import ELearningPage from "./components/industry/ELearningPage";
import GamingPage from "./components/industry/GamingPage";
import BusinessPage from "./components/industry/BusinessPage";
import Footer from "./components/Footer";

// Enhanced Components
import Header from "./components/Header";
import VoiceStudio from "./components/VoiceStudio";

// Additional Enhanced Components (you'll need to create these)
const VoiceAnalyticsDashboard: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-white mb-4">
        Voice Analytics Dashboard
      </h2>
      <p className="text-white/70 text-lg">
        Track your voice synthesis usage and performance
      </p>
    </div>
    {/* Analytics content would go here */}
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
      <p className="text-white/70">Analytics dashboard coming soon...</p>
    </div>
  </div>
);

const VoiceMarketplace: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-white mb-4">Voice Marketplace</h2>
      <p className="text-white/70 text-lg">
        Discover and purchase premium voice models
      </p>
    </div>
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
      <p className="text-white/70">Voice marketplace coming soon...</p>
    </div>
  </div>
);

const RealTimeCollaboration: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-white mb-4">Collaboration Hub</h2>
      <p className="text-white/70 text-lg">
        Work together on voice projects in real-time
      </p>
    </div>
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
      <p className="text-white/70">Collaboration features coming soon...</p>
    </div>
  </div>
);

const AIVoiceChat: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-white mb-4">AI Voice Assistant</h2>
      <p className="text-white/70 text-lg">
        Chat with our AI assistant about voice synthesis
      </p>
    </div>
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
      <p className="text-white/70">AI voice chat coming soon...</p>
    </div>
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      // Original pages
      case "clone":
        return <VoiceCloning />;
      case "synthesis":
        return <TextToSpeech />;
      case "library":
        return <VoiceLibrary />;

      // Enhanced pages
      case "enhanced-studio":
        return <VoiceStudio />;
      case "analytics":
        return <VoiceAnalyticsDashboard />;
      case "marketplace":
        return <VoiceMarketplace />;
      case "collaboration":
        return <RealTimeCollaboration />;
      case "ai-chat":
        return <AIVoiceChat />;

      // Industry pages
      case "content-creation":
        return <ContentCreationPage />;
      case "elearning":
        return <ELearningPage />;
      case "gaming":
        return <GamingPage />;
      case "business":
        return <BusinessPage />;

      // Home page
      default:
        return (
          <Hero
            onGetStarted={() => setActiveTab("enhanced-studio")}
            onIndustryClick={setActiveTab}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <motion.main
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.4,
            ease: [0.4, 0.0, 0.2, 1]
          }}
        >
          {renderContent()}
        </motion.main>

        {(activeTab === "home" || activeTab.includes("-")) && <Footer />}
      </div>
    </div>
  );
}

export default App;
