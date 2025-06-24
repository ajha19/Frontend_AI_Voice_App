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

// Enhanced Components - Using existing ones
import Header from "./components/Header";
import VoiceStudio from "./components/VoiceStudio";
import AIVoiceChat from "./components/AIVoiceChat";
import VoiceAnalyticsDashboard from "./components/VoiceAnalyticsDashboard";
import VoiceMarketplace from "./components/VoiceMarketplace";
import { CollaborationPanel } from "./components/RealTimeCollaboration";

// New Components for missing pages
import AboutUs from "./components/footer/AboutUs";
import PrivacyPolicy from "./components/footer/PrivacyPolicy";
import TermsOfService from "./components/footer/TermsOfService";
import Contact from "./components/footer/Contact";
import APIAccess from "./components/footer/APIAccess";

// Sample data for analytics
const sampleAnalyticsData = {
  totalGenerations: 15420,
  totalDuration: 4800,
  averageRating: 4.8,
  popularVoices: [
    { name: 'Sarah Professional', usage: 1520 },
    { name: 'David Narrator', usage: 890 },
    { name: 'Emma British', usage: 765 }
  ],
  usageOverTime: [
    { date: '2024-01-01', count: 120 },
    { date: '2024-01-02', count: 180 },
    { date: '2024-01-03', count: 150 }
  ]
};

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      // Product pages
      case "clone":
        return <VoiceCloning />;
      case "synthesis":
        return <TextToSpeech />;
      case "library":
        return <VoiceLibrary />;
      case "api-access":
        return <APIAccess />;

      // Enhanced pages - Now properly functional
      case "enhanced-studio":
        return <VoiceStudio />;
      case "analytics":
        return <VoiceAnalyticsDashboard data={sampleAnalyticsData} />;
      case "marketplace":
        return <VoiceMarketplace />;
      case "collaboration":
        return <CollaborationPanel 
          projectId="sample-project"
          collaborators={[
            { id: '1', name: 'Sarah Chen', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop', status: 'online' },
            { id: '2', name: 'Marcus Rodriguez', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop', status: 'offline' }
          ]}
          onInvite={() => console.log('Invite clicked')}
        />;
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

      // New company pages
      case "about":
        return <AboutUs />;
      case "privacy":
        return <PrivacyPolicy />;
      case "terms":
        return <TermsOfService />;
      case "contact":
        return <Contact />;

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

        {/* Show footer on main pages */}
        {(activeTab === "home" || 
          activeTab === "about" || 
          activeTab === "privacy" || 
          activeTab === "terms" || 
          activeTab === "contact" ||
          activeTab.includes("-")) && <Footer />}
      </div>
    </div>
  );
}

export default App;