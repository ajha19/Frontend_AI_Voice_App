import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, Send, Mic, MicOff, Play, Pause, Volume2, 
  Bot, User, Loader, Copy, Download, Share2, Settings,
  Brain, Sparkles, Zap, RefreshCw, Trash2, MoreHorizontal,
  FileText, Headphones, Languages, Clock, Star
} from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  voice_id?: string;
  audio_url?: string;
  is_voice_message?: boolean;
  duration?: number;
}

interface VoiceModel {
  id: string;
  name: string;
  language: string;
  accent: string;
  gender: string;
  preview_url?: string;
}

const AIVoiceChat: React.FC = () => {
  // Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Voice State
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [selectedVoice, setSelectedVoice] = useState<VoiceModel | null>(null);
  const [playingMessageId, setPlayingMessageId] = useState<string | null>(null);
  
  // Settings
  const [autoPlayResponses, setAutoPlayResponses] = useState(true);
  const [voiceResponseMode, setVoiceResponseMode] = useState(true);
  const [responseLanguage, setResponseLanguage] = useState('en-US');
  
  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Sample voices for the chat
  const availableVoices: VoiceModel[] = [
    {
      id: 'assistant-1',
      name: 'Sarah AI',
      language: 'English',
      accent: 'American',
      gender: 'female',
      preview_url: 'sarah_preview.mp3'
    },
    {
      id: 'assistant-2',
      name: 'Marcus AI',
      language: 'English',
      accent: 'British',
      gender: 'male',
      preview_url: 'marcus_preview.mp3'
    },
    {
      id: 'assistant-3',
      name: 'Luna AI',
      language: 'English',
      accent: 'Australian',
      gender: 'female',
      preview_url: 'luna_preview.mp3'
    }
  ];

  // Sample initial messages
  const initialMessages: ChatMessage[] = [
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your AI Voice Assistant. I can help you with voice synthesis, text optimization, voice selection, and answer questions about audio production. How can I assist you today?',
      timestamp: new Date(Date.now() - 5000),
      voice_id: 'assistant-1',
      audio_url: 'welcome_message.mp3',
      is_voice_message: true,
      duration: 8
    }
  ];

  useEffect(() => {
    setMessages(initialMessages);
    setSelectedVoice(availableVoices[0]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isRecording) {
      recordingIntervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } else {
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
      setRecordingTime(0);
    }

    return () => {
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
    };
  }, [isRecording]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
      is_voice_message: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI processing
    setTimeout(async () => {
      const aiResponse = generateAIResponse(inputMessage);
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: aiResponse,
        timestamp: new Date(),
        voice_id: selectedVoice?.id,
        audio_url: voiceResponseMode ? `ai_response_${Date.now()}.mp3` : undefined,
        is_voice_message: voiceResponseMode,
        duration: voiceResponseMode ? Math.ceil(aiResponse.length / 15) : undefined
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);

      // Auto-play if enabled
      if (autoPlayResponses && voiceResponseMode) {
        setPlayingMessageId(assistantMessage.id);
        // Simulate audio playback
        setTimeout(() => {
          setPlayingMessageId(null);
        }, (assistantMessage.duration || 5) * 1000);
      }
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('voice') && input.includes('recommend')) {
      return "Based on your content, I'd recommend Sarah AI for professional narration, Marcus AI for storytelling, or Luna AI for conversational content. Each voice has unique characteristics that work well for different use cases.";
    } else if (input.includes('ssml') || input.includes('markup')) {
      return "SSML (Speech Synthesis Markup Language) helps control pronunciation, pauses, and emphasis. For example: <break time='1s'/> for pauses, <emphasis level='strong'>text</emphasis> for emphasis, and <prosody rate='slow'>text</prosody> for speed control.";
    } else if (input.includes('quality') || input.includes('improve')) {
      return "To improve voice quality, try adjusting stability (0.7-0.9 for consistent voices), similarity (0.8+ for accuracy), and add natural pauses in your text. Shorter sentences often produce better results.";
    } else if (input.includes('language') || input.includes('multilingual')) {
      return "VoiceForge supports 25+ languages with native accents. Each voice model is optimized for specific languages. Would you like me to recommend voices for a particular language?";
    } else if (input.includes('price') || input.includes('cost')) {
      return "Voice synthesis costs depend on character count and voice type. Premium voices offer higher quality. You can check your usage in the analytics dashboard. Would you like me to explain the pricing tiers?";
    } else {
      return "I understand you're asking about voice synthesis. I can help with voice selection, text optimization, SSML markup, quality improvement tips, and technical questions. What specific aspect would you like to explore?";
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    // Here you would start actual voice recording
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Here you would stop recording and process the audio
    
    if (recordingTime > 0) {
      const voiceMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'user',
        content: `[Voice message - ${recordingTime}s]`,
        timestamp: new Date(),
        is_voice_message: true,
        duration: recordingTime,
        audio_url: `voice_recording_${Date.now()}.mp3`
      };

      setMessages(prev => [...prev, voiceMessage]);
      
      // Simulate transcription and AI response
      setTimeout(() => {
        const transcribedText = "I'd like to know more about voice cloning options.";
        const transcriptionMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: `I heard: "${transcribedText}"\n\nVoice cloning lets you create custom voices from audio samples. You need about 30 seconds to 5 minutes of clear audio. The process analyzes speech patterns, tone, and pronunciation to build a unique voice model. Would you like me to guide you through the cloning process?`,
          timestamp: new Date(),
          voice_id: selectedVoice?.id,
          audio_url: `transcription_response_${Date.now()}.mp3`,
          is_voice_message: true,
          duration: 12
        };

        setMessages(prev => [...prev, transcriptionMessage]);
      }, 2000);
    }
  };

  const playMessage = (messageId: string) => {
    setPlayingMessageId(messageId);
    // Simulate audio playback
    const message = messages.find(m => m.id === messageId);
    if (message?.duration) {
      setTimeout(() => {
        setPlayingMessageId(null);
      }, message.duration * 1000);
    }
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const clearChat = () => {
    setMessages(initialMessages);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">AI Voice Assistant</h1>
        </div>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          Get intelligent help with voice synthesis, text optimization, and audio production. 
          Chat with text or voice to get personalized recommendations and guidance.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Settings Sidebar */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 sticky top-4"
          >
            <h2 className="text-white font-semibold text-lg mb-6 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Chat Settings
            </h2>

            {/* Voice Selection */}
            <div className="mb-6">
              <label className="block text-white/70 text-sm mb-3">AI Voice</label>
              <div className="space-y-2">
                {availableVoices.map((voice) => (
                  <button
                    key={voice.id}
                    onClick={() => setSelectedVoice(voice)}
                    className={`w-full p-3 rounded-xl text-left transition-all border ${
                      selectedVoice?.id === voice.id
                        ? 'bg-primary-500/20 border-primary-500'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium text-sm">{voice.name}</p>
                        <p className="text-white/60 text-xs">{voice.accent} • {voice.gender}</p>
                      </div>
                      <button className="w-6 h-6 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center">
                        <Play className="w-3 h-3 text-white ml-0.5" />
                      </button>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Options */}
            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Voice Responses</span>
                <input
                  type="checkbox"
                  checked={voiceResponseMode}
                  onChange={(e) => setVoiceResponseMode(e.target.checked)}
                  className="w-4 h-4 accent-primary-500"
                />
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Auto-play Responses</span>
                <input
                  type="checkbox"
                  checked={autoPlayResponses}
                  onChange={(e) => setAutoPlayResponses(e.target.checked)}
                  className="w-4 h-4 accent-primary-500"
                />
              </label>

              <div>
                <label className="block text-white/70 text-sm mb-2">Response Language</label>
                <select
                  value={responseLanguage}
                  onChange={(e) => setResponseLanguage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
                >
                  <option value="en-US">English (US)</option>
                  <option value="en-GB">English (UK)</option>
                  <option value="es-ES">Spanish</option>
                  <option value="fr-FR">French</option>
                  <option value="de-DE">German</option>
                  <option value="it-IT">Italian</option>
                </select>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-white font-medium mb-3">Quick Help</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setInputMessage("What voices do you recommend for audiobooks?")}
                  className="w-full bg-white/5 hover:bg-white/10 text-white/80 text-left p-2 rounded-lg text-sm transition-colors"
                >
                  Voice recommendations
                </button>
                <button
                  onClick={() => setInputMessage("How do I improve voice quality?")}
                  className="w-full bg-white/5 hover:bg-white/10 text-white/80 text-left p-2 rounded-lg text-sm transition-colors"
                >
                  Quality tips
                </button>
                <button
                  onClick={() => setInputMessage("Explain SSML markup")}
                  className="w-full bg-white/5 hover:bg-white/10 text-white/80 text-left p-2 rounded-lg text-sm transition-colors"
                >
                  SSML help
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 h-[700px] flex flex-col"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Assistant</h3>
                  <p className="text-white/60 text-sm">
                    {selectedVoice ? `Speaking as ${selectedVoice.name}` : 'Text responses only'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={clearChat}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Trash2 className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MoreHorizontal className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`flex items-start space-x-3 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'user' 
                            ? 'bg-primary-500' 
                            : 'bg-gradient-to-r from-purple-500 to-pink-500'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>

                        {/* Message Content */}
                        <div className={`rounded-2xl p-4 ${
                          message.type === 'user'
                            ? 'bg-primary-500 text-white'
                            : 'bg-white/10 text-white border border-white/10'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.content}</p>
                          
                          {/* Voice Message Controls */}
                          {message.is_voice_message && message.audio_url && (
                            <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/20">
                              <div className="flex items-center space-x-2">
                                <motion.button
                                  onClick={() => playMessage(message.id)}
                                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  {playingMessageId === message.id ? (
                                    <Pause className="w-4 h-4 text-white" />
                                  ) : (
                                    <Play className="w-4 h-4 text-white ml-0.5" />
                                  )}
                                </motion.button>
                                <span className="text-white/70 text-xs">
                                  {message.duration ? formatTime(message.duration) : '0:00'}
                                </span>
                                {message.type === 'assistant' && selectedVoice && (
                                  <span className="text-white/50 text-xs">
                                    {selectedVoice.name}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center space-x-1">
                                <button
                                  onClick={() => copyMessage(message.content)}
                                  className="w-6 h-6 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                                >
                                  <Copy className="w-3 h-3 text-white" />
                                </button>
                                <button className="w-6 h-6 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                                  <Download className="w-3 h-3 text-white" />
                                </button>
                              </div>
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-white/50 text-xs">
                              {message.timestamp.toLocaleTimeString()}
                            </span>
                            {!message.is_voice_message && (
                              <button
                                onClick={() => copyMessage(message.content)}
                                className="w-6 h-6 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                              >
                                <Copy className="w-3 h-3 text-white" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                      <div className="flex items-center space-x-2">
                        <Loader className="w-4 h-4 text-white animate-spin" />
                        <span className="text-white/70 text-sm">AI is thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-white/10">
              {/* Recording Indicator */}
              {isRecording && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center space-x-3 mb-4 p-3 bg-red-500/20 rounded-xl border border-red-500/30"
                >
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-white font-medium">Recording: {formatTime(recordingTime)}</span>
                  <motion.button
                    onClick={stopRecording}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Stop
                  </motion.button>
                </motion.div>
              )}

              <div className="flex items-end space-x-4">
                <div className="flex-1">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    placeholder="Ask me about voice synthesis, SSML, voice selection, or any audio questions..."
                    rows={3}
                    disabled={isRecording}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none disabled:opacity-50"
                  />
                </div>
                
                <div className="flex flex-col space-y-2">
                  {/* Voice Recording Button */}
                  <motion.button
                    onClick={isRecording ? stopRecording : startRecording}
                    disabled={isLoading}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isRecording
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-white/10 hover:bg-white/20'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isRecording ? (
                      <MicOff className="w-5 h-5 text-white" />
                    ) : (
                      <Mic className="w-5 h-5 text-white" />
                    )}
                  </motion.button>
                  
                  {/* Send Button */}
                  <motion.button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isLoading || isRecording}
                    className="w-12 h-12 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-500 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-all"
                    whileHover={{ scale: !inputMessage.trim() || isLoading || isRecording ? 1 : 1.1 }}
                    whileTap={{ scale: !inputMessage.trim() || isLoading || isRecording ? 1 : 0.9 }}
                  >
                    <Send className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-4 text-xs text-white/50">
                  <span>Press Enter to send, Shift+Enter for new line</span>
                  {voiceResponseMode && selectedVoice && (
                    <span>• Voice responses with {selectedVoice.name}</span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {voiceResponseMode && (
                    <div className="flex items-center space-x-1 text-xs text-white/60">
                      <Headphones className="w-3 h-3" />
                      <span>Voice mode</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIVoiceChat;