'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  content: "Hello! I'm your AI assistant. How can I help you today?",
  sender: 'bot',
  timestamp: 0,
  status: 'sent'
};

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
    <div className="flex h-[calc(100vh-4rem)] bg-white">
      {/* Sidebar */}
      <motion.div
        initial={{ width: isSidebarOpen ? 260 : 0 }}
        animate={{ width: isSidebarOpen ? 260 : 0 }}
        className="h-full border-r border-gray-200 overflow-hidden"
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
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="p-4 border-b border-gray-200 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold">{currentChat?.title}</h1>
          <div className="w-10" /> {/* Spacer for alignment */}
        </header>

        {/* Messages */}
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
            
            {/* Typing Indicator */}
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

        {/* Input */}
        <div className="border-t border-gray-200 p-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md transition-colors ${
                  input.trim()
                    ? 'text-blue-500 hover:bg-blue-50'
                    : 'text-gray-400'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 