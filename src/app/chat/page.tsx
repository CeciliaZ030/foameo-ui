'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaBell, FaWallet, FaPaperPlane } from 'react-icons/fa';

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
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white/80">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-700">
          <FaBars size={22} />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <FaWallet className="text-blue-500" size={22} />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-semibold text-gray-900 leading-tight">My Wallet</span>
            <span className="text-xs text-gray-500">$2,480.25 • 0.78 ETH</span>
          </div>
        </div>
        <button className="p-2 text-gray-400">
          <FaBell size={20} />
        </button>
      </div>
      {/* Tab Bar */}
      <div className="flex gap-2 px-4 py-2 border-b bg-white">
        {['General', 'Uniswap', 'Lido'].map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {tab}
          </button>
        ))}
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
            <div className="flex-1 flex flex-col items-center justify-center relative overflow-x-hidden w-full max-w-full">
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-3xl mx-auto p-4 space-y-6">
                <AnimatePresence>
                  {currentChat?.messages.map((message, idx) => (
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
                        <div className={`rounded-2xl px-4 py-2 text-sm ${
                          message.sender === 'user'
                            ? 'bg-blue-500 text-white text-right'
                            : 'bg-white text-gray-900 border border-gray-100 shadow-sm'
                        }`}>
                          {message.content}
                        </div>
                        {message.status === 'sending' && (
                          <div className="text-xs text-gray-400 mt-1">
                            Sending...
                          </div>
                        )}
                        {/* Transaction Card after first bot message */}
                        {message.sender === 'bot' && idx === 0 && (
                          <div className="mt-4 bg-white rounded-2xl shadow-md border border-gray-100 p-4">
                            <div className="font-semibold text-gray-900 mb-2">Swap Transaction</div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-500">From</span>
                              <span className="font-medium">0.1 ETH</span>
                            </div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-500">To (estimated)</span>
                              <span className="font-medium">210 USDC</span>
                            </div>
                            <div className="text-xs text-gray-400 mb-3">Via Uniswap V3 • 0.05% fee • Max slippage 0.5%</div>
                            <div className="flex gap-2 justify-end">
                              <button className="px-4 py-1 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 text-sm">Edit</button>
                              <button className="px-4 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 text-sm">Approve</button>
                            </div>
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
          {/* Suggestion Bar at Bottom (only in empty state) */}
          {currentChat && currentChat.messages.length <= 1 && (
            <div className="w-full max-w-full box-border pt-2 pb-4">
              <div className="flex flex-row gap-3 w-full max-w-full overflow-x-auto flex-nowrap scrollbar-hide box-border">
                {SUGGESTIONS.map((s, i) => (
                  <button key={i} className="w-56 rounded-2xl bg-gray-50 px-4 py-3 shadow-sm hover:bg-gray-100 transition-all text-left">
                    <div className="font-semibold text-gray-900 text-sm">{s.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="border-t border-gray-100 p-4 bg-white">
            <div className="w-full max-w-3xl mx-auto">
              <div className="relative flex items-center w-full max-w-full">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Send a message..."
                  className="w-full max-w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 bg-gray-50 shadow-sm"
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