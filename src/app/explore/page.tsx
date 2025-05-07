'use client';

import { motion } from 'framer-motion';

interface Bot {
  id: number;
  name: string;
  description: string;
  category: string;
  rating: number;
  image: string;
}

const bots: Bot[] = [
  {
    id: 1,
    name: "Creative Writer",
    description: "Your AI writing companion for creative content",
    category: "Writing",
    rating: 4.8,
    image: "https://picsum.photos/200/200?random=1"
  },
  {
    id: 2,
    name: "Code Assistant",
    description: "Expert programming help and code review",
    category: "Development",
    rating: 4.9,
    image: "https://picsum.photos/200/200?random=2"
  },
  {
    id: 3,
    name: "Math Tutor",
    description: "Step-by-step math problem solving",
    category: "Education",
    rating: 4.7,
    image: "https://picsum.photos/200/200?random=3"
  },
  {
    id: 4,
    name: "Language Translator",
    description: "Real-time translation in multiple languages",
    category: "Language",
    rating: 4.6,
    image: "https://picsum.photos/200/200?random=4"
  }
];

const categories = ["All", "Writing", "Development", "Education", "Language"];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-10 p-4 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Explore</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search bots..."
            className="w-full px-4 py-2 pl-10 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </header>

      {/* Categories */}
      <div className="px-4 py-3 overflow-x-auto">
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <section className="px-4 py-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Featured</h2>
        <div className="relative h-48 rounded-2xl overflow-hidden">
          <img
            src="https://picsum.photos/800/400?random=5"
            alt="Featured"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-2">AI Assistant Pro</h3>
              <p className="text-sm opacity-90">Your all-in-one AI companion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bot Grid */}
      <section className="px-4 py-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Bots</h2>
        <div className="grid grid-cols-2 gap-4">
          {bots.map((bot) => (
            <motion.div
              key={bot.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={bot.image}
                alt={bot.name}
                className="w-full aspect-square rounded-xl object-cover mb-3"
              />
              <h3 className="font-semibold text-gray-800 mb-1">{bot.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{bot.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{bot.category}</span>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm text-gray-600">{bot.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
} 