import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  Play,
  Pause,
  Download,
  Upload,
  Settings,
  Zap,
  Users,
  Star,
  Volume2,
  RotateCcw,
  Copy,
  Share2,
  MessageSquare,
  Brain,
  Globe,
  Clock,
  Shield,
  Sparkles,
  ChevronDown,
  Sliders,
  Heart,
  BookOpen,
  Headphones,
  Camera,
  Video,
  Gamepad2,
  Building,
  ArrowRight,
  Plus,
  Trash2,
  Edit,
  Search,
  Filter,
  MoreHorizontal,
  Bot,
  Send,
  User,
  Loader,
  CheckCircle,
  AlertCircle,
  X,
  Maximize2,
  Minimize2,
  BarChart3,
  TrendingUp,
  Languages,
  Mic2,
  Speaker,
  Save,
  Eye,
  EyeOff,
  FileAudio,
  Shuffle,
  Repeat,
  SkipBack,
  SkipForward,
} from "lucide-react";

// --- Type Definitions ---
type Voice = {
  id: string;
  name: string;
  type: string;
  category: string;
  language: string;
  accent: string;
  gender: string;
  age: string;
  description: string;
  preview_url: string;
  similarity: number;
  stability: number;
  clarity: number;
  style: number;
  use_cases: string[];
  rating: number;
  usage_count: number;
  is_premium: boolean;
  creator: string;
  price: number;
  tags: string[];
};

type SpeechHistoryItem = {
  id: string;
  text: string;
  voice_id: string;
  voice_name: string;
  created_at: string;
  duration: number;
  status: string;
  audio_url: string;
  settings: any;
};

type AIMsg = {
  type: "user" | "ai";
  content: string;
};

// --- Component ---
const VoiceStudio: React.FC = () => {
  // State Management
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);
  const [text, setText] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  const [showAdvancedSettings, setShowAdvancedSettings] =
    useState<boolean>(false);

  // Voice Settings
  const [stability, setStability] = useState<number>(0.5);
  const [similarity, setSimilarity] = useState<number>(0.75);
  const [style, setStyle] = useState<number>(0.0);
  const [useSpeakerBoost, setUseSpeakerBoost] = useState<boolean>(true);
  const [emotion, setEmotion] = useState<string>("neutral");
  const [speed, setSpeed] = useState<number>(1.0);
  const [pitch, setPitch] = useState<number>(0);
  const [emphasis, setEmphasis] = useState<number>(0.5);

  // Voice Library
  const [voices, setVoices] = useState<Voice[]>([]);
  const [voiceFilter, setVoiceFilter] = useState<string>("all");
  const [voiceSearch, setVoiceSearch] = useState<string>("");

  // History
  const [speechHistory, setSpeechHistory] = useState<SpeechHistoryItem[]>([]);

  // Waveform
  const [audioWaveform, setAudioWaveform] = useState<number[]>([]);

  // AI Assistant
  const [showAIAssistant, setShowAIAssistant] = useState<boolean>(false);
  const [aiMessages, setAiMessages] = useState<AIMsg[]>([]);
  const [aiInput, setAiInput] = useState<string>("");

  // Enhanced Voices Data (like ElevenLabs)
  const enhancedVoices = [
    {
      id: "rachel-premium",
      name: "Rachel",
      type: "professional",
      category: "conversational",
      language: "English",
      accent: "American",
      gender: "female",
      age: "middle",
      description:
        "Calm, articulate, and versatile. Perfect for narration and professional content.",
      preview_url: "rachel_preview.mp3",
      similarity: 0.92,
      stability: 0.88,
      clarity: 0.95,
      style: 0.75,
      use_cases: ["Audiobooks", "E-learning", "Corporate presentations"],
      rating: 4.9,
      usage_count: 15420,
      is_premium: true,
      creator: "ElevenLabs",
      price: 0,
      tags: ["professional", "clear", "versatile"],
    },
    {
      id: "adam-deep",
      name: "Adam",
      type: "preset",
      category: "narrative",
      language: "English",
      accent: "American",
      gender: "male",
      age: "middle",
      description:
        "Deep, warm, and engaging. Perfect for storytelling and documentaries.",
      preview_url: "adam_preview.mp3",
      similarity: 0.89,
      stability: 0.91,
      clarity: 0.93,
      style: 0.68,
      use_cases: ["Documentaries", "Audiobooks", "Podcasts"],
      rating: 4.8,
      usage_count: 12890,
      is_premium: false,
      creator: "ElevenLabs",
      price: 0,
      tags: ["deep", "warm", "engaging"],
    },
    {
      id: "bella-expressive",
      name: "Bella",
      type: "professional",
      category: "characters",
      language: "English",
      accent: "British",
      gender: "female",
      age: "young",
      description:
        "Expressive and captivating. Perfect for character voices and creative content.",
      preview_url: "bella_preview.mp3",
      similarity: 0.94,
      stability: 0.86,
      clarity: 0.97,
      style: 0.82,
      use_cases: ["Character voices", "Animation", "Creative content"],
      rating: 4.9,
      usage_count: 8765,
      is_premium: true,
      creator: "ElevenLabs",
      price: 0,
      tags: ["expressive", "character", "creative"],
    },
  ];

  useEffect(() => {
    setVoices(enhancedVoices);
    if (enhancedVoices.length > 0) {
      setSelectedVoice(enhancedVoices[0]);
    }
  }, []);

  // Generate waveform data
  useEffect(() => {
    const generateWaveform = () => {
      const data = Array.from({ length: 100 }, () => Math.random() * 60 + 10);
      setAudioWaveform(data);
    };
    generateWaveform();
  }, [currentAudio]);

  // Speech Generation with enhanced features
  const generateSpeech = async () => {
    if (!text || !selectedVoice) return;

    setIsGenerating(true);

    try {
      // Simulate advanced API call with all parameters
      const speechData = {
        text,
        voice_id: selectedVoice.id,
        settings: {
          stability,
          similarity,
          style,
          use_speaker_boost: useSpeakerBoost,
          emotion,
          speed,
          pitch,
          emphasis,
        },
      };

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const newAudio = `generated-audio-${Date.now()}.mp3`;
      setCurrentAudio(newAudio);

      // Add to history
      const historyItem = {
        id: Date.now().toString(),
        text: text.substring(0, 50) + (text.length > 50 ? "..." : ""),
        voice_id: selectedVoice.id,
        voice_name: selectedVoice.name,
        created_at: new Date().toISOString(),
        duration: Math.ceil(text.length / 15),
        status: "completed",
        audio_url: newAudio,
        settings: speechData.settings,
      };

      setSpeechHistory((prev) => [historyItem, ...prev]);
    } catch (error) {
      console.error("Speech generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  // Voice Selection Component
  const VoiceCard = ({ voice }: { voice: any }) => (
    <motion.div
      onClick={() => setSelectedVoice(voice)}
      className={`p-4 rounded-xl cursor-pointer transition-all border ${
        selectedVoice?.id === voice.id
          ? "bg-blue-500/20 border-blue-500 shadow-lg"
          : "bg-white/5 border-white/10 hover:bg-white/10"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="text-white font-semibold">{voice.name}</h3>
            {voice.is_premium && (
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs px-2 py-0.5 rounded-full font-medium">
                Premium
              </span>
            )}
          </div>
          <p className="text-white/70 text-sm">
            {voice.accent} • {voice.gender}
          </p>
          <p className="text-white/50 text-xs mb-2">{voice.description}</p>

          {/* Voice Quality Indicators */}
          <div className="grid grid-cols-2 gap-2 text-xs mb-2">
            <div className="flex justify-between">
              <span className="text-white/60">Similarity</span>
              <span className="text-white/80">
                {Math.round(voice.similarity * 100)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Clarity</span>
              <span className="text-white/80">
                {Math.round(voice.clarity * 100)}%
              </span>
            </div>
          </div>

          {/* Quality Bars */}
          <div className="space-y-1">
            <div className="w-full bg-white/10 rounded-full h-1">
              <div
                className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${voice.similarity * 100}%` }}
              />
            </div>
            <div className="w-full bg-white/10 rounded-full h-1">
              <div
                className="bg-purple-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${voice.clarity * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-2">
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-white/70 text-xs">{voice.rating}</span>
          </div>
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              // Play preview
            }}
            className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Play className="w-4 h-4 text-white ml-0.5" />
          </motion.button>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        {voice.tags?.slice(0, 3).map((tag: string, idx: number) => (
          <span
            key={idx}
            className="bg-white/10 text-white/70 text-xs px-2 py-1 rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">
              Enhanced Voice Studio
            </h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Create professional-quality speech with advanced AI voice synthesis.
            Fine-tune every aspect of your voice generation with studio-grade
            controls.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Voice Library */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 sticky top-4"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-semibold text-lg flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Voice Library
                </h2>
                <motion.button
                  className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus className="w-4 h-4 text-white" />
                </motion.button>
              </div>

              {/* Search and Filter */}
              <div className="space-y-4 mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                  <input
                    type="text"
                    placeholder="Search voices..."
                    value={voiceSearch}
                    onChange={(e) => setVoiceSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                <select
                  value={voiceFilter}
                  onChange={(e) => setVoiceFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="all">All Categories</option>
                  <option value="conversational">Conversational</option>
                  <option value="narrative">Narrative</option>
                  <option value="characters">Characters</option>
                  <option value="professional">Professional</option>
                </select>
              </div>

              {/* Voice List */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {voices.map((voice: any) => (
                  <VoiceCard key={voice.id} voice={voice} />
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="space-y-2">
                  <button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 py-2 px-4 rounded-lg font-medium transition-colors text-sm flex items-center space-x-2">
                    <Mic className="w-4 h-4" />
                    <span>Clone Voice</span>
                  </button>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Voice Samples</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            >
              {/* Text Input */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-white font-semibold text-lg">
                    Text to Speech
                  </label>
                  <div className="flex items-center space-x-2">
                    <button className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
                      <FileAudio className="w-4 h-4" />
                    </button>
                    <button className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
                      <Mic className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your text here or paste from clipboard. You can also upload a text file or record audio..."
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                />

                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center space-x-4 text-sm text-white/60">
                    <span>{text.length} characters</span>
                    <span>≈ {Math.ceil(text.length / 150)} min</span>
                    <span>${(text.length * 0.001).toFixed(3)} cost</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setText("")}
                      className="text-white/60 hover:text-white text-sm"
                    >
                      Clear
                    </button>
                    <button
                      onClick={() =>
                        navigator.clipboard.readText().then(setText)
                      }
                      className="text-white/60 hover:text-white text-sm"
                    >
                      Paste
                    </button>
                  </div>
                </div>
              </div>

              {/* Voice Settings */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">
                    Voice Settings
                  </h3>
                  <button
                    onClick={() =>
                      setShowAdvancedSettings(!showAdvancedSettings)
                    }
                    className="text-white/60 hover:text-white flex items-center space-x-2"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">Advanced</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        showAdvancedSettings ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Stability */}
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      Stability: {stability.toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={stability}
                      onChange={(e) => setStability(parseFloat(e.target.value))}
                      className="w-full accent-blue-500"
                    />
                    <p className="text-white/50 text-xs mt-1">
                      More stable speech with less randomness
                    </p>
                  </div>

                  {/* Similarity */}
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      Similarity: {similarity.toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={similarity}
                      onChange={(e) =>
                        setSimilarity(parseFloat(e.target.value))
                      }
                      className="w-full accent-blue-500"
                    />
                    <p className="text-white/50 text-xs mt-1">
                      How closely to follow the voice
                    </p>
                  </div>

                  {/* Style */}
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      Style: {style.toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={style}
                      onChange={(e) => setStyle(parseFloat(e.target.value))}
                      className="w-full accent-blue-500"
                    />
                    <p className="text-white/50 text-xs mt-1">
                      Amount of style enhancement
                    </p>
                  </div>

                  {/* Speaker Boost */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-white/70 text-sm mb-1">
                        Speaker Boost
                      </label>
                      <p className="text-white/50 text-xs">
                        Enhance clarity and pronunciation
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={useSpeakerBoost}
                        onChange={(e) => setUseSpeakerBoost(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                </div>

                {/* Advanced Settings */}
                <AnimatePresence>
                  {showAdvancedSettings && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-white/10"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Emotion */}
                        <div>
                          <label className="block text-white/70 text-sm mb-3">
                            Emotion
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              "neutral",
                              "happy",
                              "sad",
                              "excited",
                              "calm",
                              "angry",
                            ].map((em) => (
                              <button
                                key={em}
                                onClick={() => setEmotion(em)}
                                className={`p-2 rounded-lg text-xs capitalize transition-colors ${
                                  emotion === em
                                    ? "bg-blue-500 text-white"
                                    : "bg-white/5 text-white/70 hover:bg-white/10"
                                }`}
                              >
                                {em}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Speed */}
                        <div>
                          <label className="block text-white/70 text-sm mb-2">
                            Speed: {speed.toFixed(1)}x
                          </label>
                          <input
                            type="range"
                            min="0.5"
                            max="2.0"
                            step="0.1"
                            value={speed}
                            onChange={(e) =>
                              setSpeed(parseFloat(e.target.value))
                            }
                            className="w-full accent-purple-500"
                          />
                        </div>

                        {/* Pitch */}
                        <div>
                          <label className="block text-white/70 text-sm mb-2">
                            Pitch: {pitch > 0 ? "+" : ""}
                            {pitch} semitones
                          </label>
                          <input
                            type="range"
                            min="-12"
                            max="12"
                            step="0.1"
                            value={pitch}
                            onChange={(e) =>
                              setPitch(parseFloat(e.target.value))
                            }
                            className="w-full accent-purple-500"
                          />
                        </div>

                        {/* Emphasis */}
                        <div>
                          <label className="block text-white/70 text-sm mb-2">
                            Emphasis: {emphasis.toFixed(2)}
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={emphasis}
                            onChange={(e) =>
                              setEmphasis(parseFloat(e.target.value))
                            }
                            className="w-full accent-orange-500"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Generate Button */}
              <motion.button
                onClick={generateSpeech}
                disabled={!text || !selectedVoice || isGenerating}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 mb-8"
                whileHover={{
                  scale: text && selectedVoice && !isGenerating ? 1.02 : 1,
                }}
                whileTap={{
                  scale: text && selectedVoice && !isGenerating ? 0.98 : 1,
                }}
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Generating Speech...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Generate Speech</span>
                  </div>
                )}
              </motion.button>

              {/* Audio Player with Waveform */}
              {currentAudio && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        Generated Audio
                      </h3>
                      <p className="text-white/70 text-sm">
                        Voice: {selectedVoice?.name} • Duration: 2:34
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                        <Heart className="w-5 h-5 text-white/60" />
                      </button>
                      <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                        <Share2 className="w-5 h-5 text-white/60" />
                      </button>
                      <button className="w-10 h-10 bg-purple-500 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors">
                        <Download className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Waveform Visualization */}
                  <div className="relative h-24 bg-white/5 rounded-lg mb-6 overflow-hidden">
                    <div className="flex items-end justify-between h-full px-2">
                      {audioWaveform.map((height, index) => (
                        <motion.div
                          key={index}
                          className="w-1 bg-blue-400 rounded-full"
                          style={{ height: `${height}%` }}
                          animate={isPlaying ? { scaleY: [1, 1.2, 1] } : {}}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.01,
                            repeat: isPlaying ? Infinity : 0,
                          }}
                        />
                      ))}
                    </div>
                    {/* Progress overlay */}
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300"
                      style={{ width: "35%" }}
                    />
                  </div>

                  {/* Audio Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {isPlaying ? (
                          <Pause className="w-7 h-7 text-white" />
                        ) : (
                          <Play className="w-7 h-7 text-white ml-1" />
                        )}
                      </motion.button>

                      <div className="flex items-center space-x-2">
                        <Volume2 className="w-5 h-5 text-white/60" />
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          defaultValue="0.8"
                          className="w-24 accent-blue-500"
                        />
                      </div>

                      <span className="text-white/60 text-sm">0:35 / 2:34</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                        <Repeat className="w-5 h-5 text-white/60" />
                      </button>
                      <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                        <Shuffle className="w-5 h-5 text-white/60" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Right Sidebar - Voice Info & Tools */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Selected Voice Info */}
              {selectedVoice && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Selected Voice</h3>
                    {selectedVoice.is_premium && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                        Premium
                      </span>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium text-lg">
                        {selectedVoice.name}
                      </h4>
                      <p className="text-white/70 text-sm mb-2">
                        {selectedVoice.description}
                      </p>
                      <p className="text-white/50 text-xs">
                        by {selectedVoice.creator}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-white/60">Language</span>
                        <p className="text-white">{selectedVoice.language}</p>
                      </div>
                      <div>
                        <span className="text-white/60">Accent</span>
                        <p className="text-white">{selectedVoice.accent}</p>
                      </div>
                      <div>
                        <span className="text-white/60">Gender</span>
                        <p className="text-white">{selectedVoice.gender}</p>
                      </div>
                      <div>
                        <span className="text-white/60">Age</span>
                        <p className="text-white">{selectedVoice.age}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">
                          Similarity
                        </span>
                        <span className="text-white text-sm">
                          {Math.round(selectedVoice.similarity * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{
                            width: `${selectedVoice.similarity * 100}%`,
                          }}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">Stability</span>
                        <span className="text-white text-sm">
                          {Math.round(selectedVoice.stability * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${selectedVoice.stability * 100}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <span className="text-white/60 text-sm">Use Cases</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedVoice.use_cases.map(
                          (useCase: string, idx: number) => (
                            <span
                              key={idx}
                              className="bg-white/10 text-white/70 text-xs px-2 py-1 rounded-lg"
                            >
                              {useCase}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">
                          {selectedVoice.rating}
                        </span>
                        <span className="text-white/60 text-sm">
                          ({selectedVoice.usage_count} uses)
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* AI Assistant */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold flex items-center">
                    <Bot className="w-5 h-5 mr-2" />
                    AI Assistant
                  </h3>
                  <button
                    onClick={() => setShowAIAssistant(!showAIAssistant)}
                    className="text-white/60 hover:text-white"
                  >
                    {showAIAssistant ? (
                      <Minimize2 className="w-4 h-4" />
                    ) : (
                      <Maximize2 className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {showAIAssistant ? (
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-3 max-h-32 overflow-y-auto">
                      {aiMessages.length === 0 ? (
                        <p className="text-white/60 text-sm">
                          Hi! I can help you optimize your voice settings,
                          suggest improvements, or answer questions about voice
                          synthesis.
                        </p>
                      ) : (
                        <div className="space-y-2">
                          {aiMessages.map((msg: any, idx: number) => (
                            <div
                              key={idx}
                              className={`text-sm ${
                                msg.type === "user"
                                  ? "text-blue-300"
                                  : "text-white/80"
                              }`}
                            >
                              {msg.content}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={aiInput}
                        onChange={(e) => setAiInput(e.target.value)}
                        placeholder="Ask me anything..."
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 text-sm"
                      />
                      <button className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                        <Send className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <button className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                      Optimize Settings
                    </button>
                    <button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                      Voice Suggestions
                    </button>
                    <button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                      Help & Tips
                    </button>
                  </div>
                )}
              </motion.div>

              {/* Recent History */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Recent History
                </h3>

                <div className="space-y-3">
                  {speechHistory.length === 0 ? (
                    <p className="text-white/60 text-sm">
                      No recent generations
                    </p>
                  ) : (
                    speechHistory.slice(0, 3).map((item: any) => (
                      <div key={item.id} className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-white font-medium text-sm truncate">
                            {item.text}
                          </p>
                          <button className="w-6 h-6 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center">
                            <Play className="w-3 h-3 text-white" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between text-xs text-white/60">
                          <span>{item.voice_name}</span>
                          <span>{item.duration}s</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <button className="w-full mt-4 text-white/60 hover:text-white text-sm py-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                  View All History
                </button>
              </motion.div>

              {/* Usage Statistics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Usage Today
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">
                          Characters
                        </p>
                        <p className="text-white/60 text-xs">1,240 / 10,000</p>
                      </div>
                    </div>
                    <span className="text-blue-400 font-medium text-sm">
                      12%
                    </span>
                  </div>

                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "12%" }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Download className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">
                          Downloads
                        </p>
                        <p className="text-white/60 text-xs">8 / 100</p>
                      </div>
                    </div>
                    <span className="text-purple-400 font-medium text-sm">
                      8%
                    </span>
                  </div>

                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: "8%" }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          {/* Quick Templates */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Quick Templates
            </h3>
            <div className="space-y-3">
              {[
                {
                  name: "Audiobook Narration",
                  text: "In the quiet of the evening, as shadows danced across...",
                },
                {
                  name: "Professional Announcement",
                  text: "We are pleased to announce that our company has...",
                },
                {
                  name: "Educational Content",
                  text: "Today we will explore the fascinating world of...",
                },
                {
                  name: "Podcast Introduction",
                  text: "Welcome to another episode of our podcast, where...",
                },
              ].map((template, idx) => (
                <button
                  key={idx}
                  onClick={() => setText(template.text)}
                  className="w-full text-left bg-white/5 hover:bg-white/10 rounded-lg p-3 transition-colors"
                >
                  <p className="text-white font-medium text-sm mb-1">
                    {template.name}
                  </p>
                  <p className="text-white/60 text-xs truncate">
                    {template.text}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Voice Analytics */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Voice Analytics
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Clarity Score</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-white/10 rounded-full">
                    <div className="w-14 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-green-400 text-sm font-medium">
                    92%
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Naturalness</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-white/10 rounded-full">
                    <div className="w-12 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-blue-400 text-sm font-medium">88%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Emotion</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-white/10 rounded-full">
                    <div className="w-10 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <span className="text-purple-400 text-sm font-medium">
                    75%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Export Options */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Export Options
            </h3>
            <div className="space-y-3">
              <button className="w-full bg-white/5 hover:bg-white/10 rounded-lg p-3 transition-colors flex items-center space-x-3">
                <FileAudio className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <p className="text-white text-sm font-medium">MP3 Audio</p>
                  <p className="text-white/60 text-xs">
                    High quality compressed
                  </p>
                </div>
              </button>
              <button className="w-full bg-white/5 hover:bg-white/10 rounded-lg p-3 transition-colors flex items-center space-x-3">
                <Waveform className="w-5 h-5 text-purple-400" />
                <div className="text-left">
                  <p className="text-white text-sm font-medium">WAV Audio</p>
                  <p className="text-white/60 text-xs">Uncompressed quality</p>
                </div>
              </button>
              <button className="w-full bg-white/5 hover:bg-white/10 rounded-lg p-3 transition-colors flex items-center space-x-3">
                <Video className="w-5 h-5 text-green-400" />
                <div className="text-left">
                  <p className="text-white text-sm font-medium">
                    Video with Subtitles
                  </p>
                  <p className="text-white/60 text-xs">MP4 with captions</p>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VoiceStudio;
