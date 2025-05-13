'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaPen, FaPaperPlane } from 'react-icons/fa';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  timestamp: number;
  status?: 'sending' | 'sent' | 'error';
}

interface Chat {
  id: number;
  title: string;
  messages: Message[];
  lastUpdated: number;
}

const initialMessage: Message = {
  id: 1,
  content: "Hello! How can I help you today?",
  sender: 'bot',
  timestamp: 0,
  status: 'sent'
};

const SUGGESTIONS = [
  {
    title: 'Swap tokens',
    description: 'Which DEX is the cheapest?',
  },
  {
    title: 'Take a bet',
    description: 'Buy Yes to US recession in 2025',
  },
  {
    title: 'Farm yields',
    description: 'Stake on Morpho Vault',
  },
];

const Logo = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4C13.0589 4 4 13.0589 4 24C4 34.9411 13.0589 44 24 44C34.9411 44 44 34.9411 44 24C44 13.0589 34.9411 4 24 4Z" fill="#E5E7EB"/>
      <path d="M24 14V24L32 28" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export default function ChatPage() {
  const [chats, setChats] = useState<Chat[]>([
    {
      id: 1,
      title: "New Chat",
      messages: [initialMessage],
      lastUpdated: 0
    }
  ]);
  const [currentChatId, setCurrentChatId] = useState(1);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentChat = chats.find(chat => chat.id === currentChatId);

  // Set initial timestamp on client-side only
  useEffect(() => {
    setChats(prev => 
      prev.map(chat => ({
        ...chat,
        messages: chat.messages.map(msg => 
          msg.id === 1 
            ? { ...msg, timestamp: Date.now() }
            : msg
        ),
        lastUpdated: Date.now()
      }))
    );
  }, []);

  const handleSend = async () => {
    if (!input.trim() || !currentChat) return;
    
    const userMessage: Message = {
      id: currentChat.messages.length + 1,
      content: input,
      sender: 'user',
      timestamp: Date.now(),
      status: 'sending'
    };
    
    setChats(prev => 
      prev.map(chat => 
        chat.id === currentChatId
          ? {
              ...chat,
              messages: [...chat.messages, userMessage],
              lastUpdated: Date.now()
            }
          : chat
      )
    );
    setInput('');
    
    // Simulate message sending
    setTimeout(() => {
      setChats(prev => 
        prev.map(chat => 
          chat.id === currentChatId
            ? {
                ...chat,
                messages: chat.messages.map(msg => 
                  msg.id === userMessage.id 
                    ? { ...msg, status: 'sent' }
                    : msg
                )
              }
            : chat
        )
      );
      
      // Simulate bot typing
      setIsTyping(true);
      setTimeout(() => {
        const botMessage: Message = {
          id: currentChat.messages.length + 2,
          content: "I'm processing your request...",
          sender: 'bot',
          timestamp: Date.now(),
          status: 'sent'
        };
        setChats(prev => 
          prev.map(chat => 
            chat.id === currentChatId
              ? {
                  ...chat,
                  messages: [...chat.messages, botMessage],
                  lastUpdated: Date.now()
                }
              : chat
          )
        );
        setIsTyping(false);
      }, 1500);
    }, 1000);
  };

  const createNewChat = () => {
    const newChat: Chat = {
      id: chats.length + 1,
      title: "New Chat",
      messages: [initialMessage],
      lastUpdated: Date.now()
    };
    setChats(prev => [...prev, newChat]);
    setCurrentChatId(newChat.id);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white/80">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-700">
          <FaBars size={20} />
        </button>
        <button className="px-4 py-1 rounded-xl bg-indigo-50 text-indigo-600 font-medium text-sm flex items-center gap-1">
          Get Plus <span className="text-indigo-400">+</span>
        </button>
        <button className="p-2 text-gray-400">
          <FaPen size={18} />
        </button>
      </div>
      <div className="flex-1 flex h-full overflow-x-hidden">
        {/* Sidebar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isSidebarOpen ? 260 : 0 }}
          transition={{ type: 'tween', duration: 0.3 }}
          className={`h-full border-r border-gray-200 overflow-hidden bg-white transition-shadow duration-300
            ${isSidebarOpen ? 'shadow-xl pointer-events-auto' : 'pointer-events-none'}
          `}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-4">
            <button
              onClick={createNewChat}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Chat
            </button>
          </div>
          <div className="overflow-y-auto h-[calc(100%-4rem)]">
            {chats.map(chat => (
              <button
                key={chat.id}
                onClick={() => setCurrentChatId(chat.id)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  chat.id === currentChatId ? 'bg-gray-50' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <span className="truncate">{chat.title}</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col h-full"
          onClick={() => isSidebarOpen && setIsSidebarOpen(false)}
        >
          {/* If no messages except initial, show logo and suggestions */}
          {currentChat && currentChat.messages.length <= 1 ? (
            <div className="flex-1 flex flex-col items-center justify-center relative overflow-x-hidden">
              <div className="flex flex-col items-center justify-center flex-1">
                <Logo />
              </div>
              <div className="flex flex-row gap-3 px-4 mb-8 w-full overflow-x-auto flex-nowrap scrollbar-hide">
                {SUGGESTIONS.map((s, i) => (
                  <button key={i} className="w-56 rounded-2xl bg-gray-50 px-4 py-3 shadow-sm hover:bg-gray-100 transition-all text-left">
                    <div className="font-semibold text-gray-900 text-sm">{s.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.description}</div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-3xl mx-auto p-4 space-y-6">
                <AnimatePresence>
                  {currentChat?.messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex gap-4 ${
                        message.sender === 'user' ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-200'
                      }`}>
                        {message.sender === 'user' ? 'U' : 'AI'}
                      </div>
                      <div className="flex-1">
                        <div className={`rounded-lg px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {message.content}
                        </div>
                        {message.status === 'sending' && (
                          <div className="text-xs text-gray-400 mt-1">
                            Sending...
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      AI
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-100 rounded-lg px-4 py-2 flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          )}
          {/* Input */}
          <div className="border-t border-gray-100 p-4 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 bg-gray-50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors ${
                    input.trim()
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <FaPaperPlane size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 