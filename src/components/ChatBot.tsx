import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircleIcon,
  XIcon,
  SendIcon,
  BotIcon,
  UserIcon,
  SparklesIcon,
  MinimizeIcon } from
'lucide-react';
interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}
const quickPrompts = [
'How do I search for a thesis?',
'What departments are available?',
'How does semantic search work?',
'Help me find AI-related theses'];

const botResponses: Record<string, string> = {
  'how do i search':
  'You can search for theses using the Search page. Just type your topic, keywords, or even a natural language question in the search bar. Our RAG-based system understands the meaning behind your query, not just exact keyword matches!',
  departments:
  'We have theses from 5 departments:\n• Computer Science\n• Information Technology\n• Education\n• Business Administration\n• Agriculture\n\nYou can filter by department on the Search page.',
  'semantic search':
  'Our system uses Retrieval-Augmented Generation (RAG) — an AI technique that converts your query into a mathematical representation (embedding) and compares it against all thesis embeddings. This means searching for "AI in farming" will also find theses about "crop disease detection using neural networks" even without matching keywords!',
  'ai-related':
  'Great choice! Try searching for terms like "artificial intelligence", "machine learning", "neural networks", or "natural language processing". Our top AI-related theses include:\n\n• AI-Powered Crop Disease Detection (97% relevance)\n• Sentiment Analysis Using NLP (91% relevance)\n• Blockchain Document Verification (94% relevance)\n\nHead to the Search page to explore more!',
  hello:
  "Hello! 👋 I'm your Academia Sync Thesis Repository assistant. I can help you find theses, explain how our search works, or guide you through the system. What would you like to know?",
  help: 'I can help you with:\n\n🔍 **Searching** — Tips on finding relevant theses\n📚 **Departments** — Browse by academic department\n🤖 **How it works** — Understanding our AI-powered search\n📊 **Features** — Exploring the repository\n\nJust ask me anything!',
  thank:
  "You're welcome! Feel free to ask if you need anything else. Happy researching! 📚"
};
function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (
  lower.includes('search') ||
  lower.includes('find') ||
  lower.includes('look for'))
  {
    if (
    lower.includes('ai') ||
    lower.includes('artificial') ||
    lower.includes('machine learning'))
    {
      return botResponses['ai-related'];
    }
    return botResponses['how do i search'];
  }
  if (
  lower.includes('department') ||
  lower.includes('course') ||
  lower.includes('program'))
  {
    return botResponses['departments'];
  }
  if (
  lower.includes('semantic') ||
  lower.includes('rag') ||
  lower.includes('how does') ||
  lower.includes('how it work'))
  {
    return botResponses['semantic search'];
  }
  if (
  lower.includes('ai') ||
  lower.includes('artificial intelligence') ||
  lower.includes('machine learning') ||
  lower.includes('neural'))
  {
    return botResponses['ai-related'];
  }
  if (
  lower.includes('hello') ||
  lower.includes('hi') ||
  lower.includes('hey') ||
  lower.includes('good'))
  {
    return botResponses['hello'];
  }
  if (lower.includes('help') || lower.includes('what can you')) {
    return botResponses['help'];
  }
  if (lower.includes('thank') || lower.includes('thanks')) {
    return botResponses['thank'];
  }
  return "I'm not sure about that, but I can help you search for theses, explain how our semantic search works, or guide you through the departments. Try asking me about any of those topics! 😊";
}
export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
  {
    id: 'welcome',
    role: 'bot',
    text: "Hi there! 👋 I'm the Academia Sync Thesis Assistant. I can help you navigate the repository, find theses, or explain how our AI-powered search works. How can I help you today?",
    timestamp: new Date()
  }]
  );
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages, isTyping]);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);
  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: text.trim(),
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    // Simulate bot thinking
    setTimeout(
      () => {
        const botMsg: Message = {
          id: `bot-${Date.now()}`,
          role: 'bot',
          text: getBotResponse(text),
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      },
      600 + Math.random() * 800
    );
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };
  return (
    <div className="fixed bottom-5 left-5 z-50">
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 16,
            scale: 0.95
          }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute bottom-16 left-0 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
          style={{
            maxHeight: 'min(520px, calc(100vh - 120px))'
          }}>
          
            {/* Header */}
            <div className="bg-psu-maroon px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center border border-psu-gold/40">
                  <SparklesIcon className="w-4 h-4 text-psu-gold" />
                </div>
                <div>
                  <p className="text-sm font-sans font-semibold text-white">
                    Thesis Assistant
                  </p>
                  <p className="text-[10px] font-sans text-white/50">
                    AI-powered help
                  </p>
                </div>
              </div>
              <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              aria-label="Close chat">
              
                <MinimizeIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div
            className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50/50"
            style={{
              minHeight: 200
            }}>
            
              {messages.map((msg) =>
            <motion.div
              key={msg.id}
              initial={{
                opacity: 0,
                y: 8
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.2
              }}
              className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              
                  <div
                className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'bot' ? 'bg-psu-maroon/10 text-psu-maroon' : 'bg-blue-500 text-white'}`}>
                
                    {msg.role === 'bot' ?
                <BotIcon className="w-3.5 h-3.5" /> :

                <UserIcon className="w-3.5 h-3.5" />
                }
                  </div>
                  <div
                className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm font-sans leading-relaxed ${msg.role === 'bot' ? 'bg-white border border-gray-100 text-psu-charcoal rounded-tl-md shadow-sm' : 'bg-psu-maroon text-white rounded-tr-md'}`}>
                
                    {msg.text.split('\n').map((line, i) =>
                <span key={i}>
                        {line}
                        {i < msg.text.split('\n').length - 1 && <br />}
                      </span>
                )}
                  </div>
                </motion.div>
            )}

              {/* Typing indicator */}
              {isTyping &&
            <motion.div
              initial={{
                opacity: 0,
                y: 8
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="flex gap-2.5">
              
                  <div className="w-7 h-7 rounded-full bg-psu-maroon/10 flex items-center justify-center flex-shrink-0">
                    <BotIcon className="w-3.5 h-3.5 text-psu-maroon" />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-1">
                      <span
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                    style={{
                      animationDelay: '0ms'
                    }} />
                  
                      <span
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                    style={{
                      animationDelay: '150ms'
                    }} />
                  
                      <span
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                    style={{
                      animationDelay: '300ms'
                    }} />
                  
                    </div>
                  </div>
                </motion.div>
            }
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            {messages.length <= 2 && !isTyping &&
          <div className="px-4 py-2 border-t border-gray-100 bg-white flex-shrink-0">
                <p className="text-[10px] font-sans text-gray-400 uppercase tracking-wider font-medium mb-2">
                  Suggestions
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {quickPrompts.map((prompt) =>
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                className="px-2.5 py-1.5 text-xs font-sans text-psu-maroon bg-psu-maroon/5 hover:bg-psu-maroon/10 rounded-lg border border-psu-maroon/10 transition-colors">
                
                      {prompt}
                    </button>
              )}
                </div>
              </div>
          }

            {/* Input */}
            <form
            onSubmit={handleSubmit}
            className="px-3 py-3 border-t border-gray-100 bg-white flex-shrink-0">
            
              <div className="flex items-center gap-2">
                <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-sans placeholder:text-gray-400 focus:outline-none focus:border-psu-gold focus:ring-1 focus:ring-psu-gold/20 transition-all"
                aria-label="Chat message" />
              
                <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-xl bg-psu-maroon hover:bg-psu-maroon-dark text-white flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Send message">
                
                  <SendIcon className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        }
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-psu-charcoal hover:bg-gray-700' : 'bg-psu-maroon hover:bg-psu-maroon-dark'}`}
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}>
        
        <AnimatePresence mode="wait">
          {isOpen ?
          <motion.div
            key="close"
            initial={{
              rotate: -90,
              opacity: 0
            }}
            animate={{
              rotate: 0,
              opacity: 1
            }}
            exit={{
              rotate: 90,
              opacity: 0
            }}
            transition={{
              duration: 0.15
            }}>
            
              <XIcon className="w-6 h-6 text-white" />
            </motion.div> :

          <motion.div
            key="open"
            initial={{
              rotate: 90,
              opacity: 0
            }}
            animate={{
              rotate: 0,
              opacity: 1
            }}
            exit={{
              rotate: -90,
              opacity: 0
            }}
            transition={{
              duration: 0.15
            }}
            className="relative">
            
              <MessageCircleIcon className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-psu-gold rounded-full border-2 border-psu-maroon" />
            </motion.div>
          }
        </AnimatePresence>
      </motion.button>
    </div>);

}