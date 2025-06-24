import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import VoiceCloning from './components/VoiceCloning';
import TextToSpeech from './components/TextToSpeech';
import VoiceLibrary from './components/VoiceLibrary';
import ContentCreationPage from './components/industry/ContentCreationPage';
import ELearningPage from './components/industry/ELearningPage';
import GamingPage from './components/industry/GamingPage';
import BusinessPage from './components/industry/BusinessPage';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'clone':
        return <VoiceCloning />;
      case 'synthesis':
        return <TextToSpeech />;
      case 'library':
        return <VoiceLibrary />;
      case 'content-creation':
        return <ContentCreationPage />;
      case 'elearning':
        return <ELearningPage />;
      case 'gaming':
        return <GamingPage />;
      case 'business':
        return <BusinessPage />;
      default:
        return <Hero onGetStarted={() => setActiveTab('clone')} onIndustryClick={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <motion.main
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.main>
        
        {(activeTab === 'home' || activeTab.includes('-')) && <Footer />}
      </div>
    </div>
  );
}

export default App;