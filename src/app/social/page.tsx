import React from 'react';
import { Heart, MessageCircle, Repeat, ExternalLink, Wallet, Star, DollarSign, BarChart2, TrendingUp, Share2, User, Camera, Search, Bell } from 'lucide-react';

const FoameoSocialPage = () => {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto gap-4 p-4 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 p-4 border-b flex justify-between items-center bg-white w-full">
        <div className="text-lg font-semibold">Social</div>
        <div className="flex gap-3">
          <Search size={20} className="text-gray-500" />
          <Camera size={20} className="text-gray-500" />
          <Bell size={20} className="text-gray-500" />
        </div>
      </div>
      
      {/* Category Selection - pill style, scrollable */}
      <div className="px-4 py-3 overflow-x-auto w-full">
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold whitespace-nowrap">All</button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap">Farcaster</button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap">Pump.fun</button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap">X</button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap">Following</button>
        </div>
      </div>
      
      {/* Content Feed - Two Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Post 1 - Farcaster */}
        <div className="p-3 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow mb-2 h-full">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${Math.floor(Math.random()*70)+1}`} alt="User avatar" className="rounded-full w-full h-full object-cover" />
              </div>
              <div className="ml-2">
                <div className="font-medium text-sm">vitalik.eth</div>
                <div className="text-xs text-gray-400 flex items-center">
                  <div className="bg-purple-500 text-white text-[10px] rounded px-1 mr-1">FC</div>
                  <span>2h ago</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-2 text-sm text-gray-900">
            L2s continue to grow! Just checked the latest stats and rollups are processing more txns than L1 Ethereum. Optimism and Arbitrum leading the charge with impressive throughput at fraction of L1 costs.
          </div>
          
          <div className="flex gap-5 text-gray-400 text-xs">
            <div className="flex items-center gap-1">
              <Heart size={14} /> 248
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={14} /> 42
            </div>
            <div className="flex items-center gap-1">
              <Repeat size={14} /> 97
            </div>
            <div className="ml-auto flex items-center gap-1 text-blue-500">
              <ExternalLink size={14} /> <span className="text-xs">View on Farcaster</span>
            </div>
          </div>
        </div>

        {/* Post 2 - Pump.fun */}
        <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow mb-2 h-full">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <img src="/api/placeholder/40/40" alt="User avatar" className="rounded-full" />
              </div>
              <div className="ml-2">
                <div className="font-medium">MemeKing</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <div className="bg-green-500 text-white text-xs rounded px-1 mr-1">PUMP</div>
                  <span>30m ago</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-3">
            Just launched $FROG 🐸 - the memecoin that's actually ribbiting! First 100 buyers get bonus NFTs. Already hit $50k market cap in 20 mins!
          </div>
          
          <div className="mb-3 p-3 bg-gray-50 rounded-lg border">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-green-300 flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <div>
                  <div className="font-medium">$FROG</div>
                  <div className="text-xs text-gray-500">FROGGY</div>
                </div>
              </div>
              <div className="text-green-500 font-medium">+126.4%</div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              Market Cap: $56,234 • Holders: 89
            </div>
          </div>
          
          <div className="flex gap-5 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Heart size={16} /> 64
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={16} /> 12
            </div>
            <div className="ml-auto flex items-center gap-1 text-blue-500">
              <Wallet size={16} /> Trade
            </div>
          </div>
        </div>

        {/* Post 3 - Crypto Twitter */}
        <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow mb-2 h-full">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <img src="/api/placeholder/40/40" alt="User avatar" className="rounded-full" />
              </div>
              <div className="ml-2">
                <div className="font-medium">Pomp</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <div className="bg-blue-500 text-white text-xs rounded px-1 mr-1">X</div>
                  <span>1h ago</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-3">
            Bitcoin just hit $103k. All-time high! Remember when they said it was going to zero? Now global institutions are rushing to add it to their balance sheets. Stay humble, stack sats.
          </div>
          
          <div className="mb-3 p-3 bg-gray-50 rounded-lg border">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-white font-bold">₿</span>
                </div>
                <div>
                  <div className="font-medium">Bitcoin</div>
                  <div className="text-xs text-gray-500">BTC</div>
                </div>
              </div>
              <div className="text-green-500 font-medium">$103,245.62</div>
            </div>
            <div className="mt-2 text-sm text-gray-600 flex items-center">
              <TrendingUp size={14} className="text-green-500 mr-1" /> +5.4% (24h)
            </div>
          </div>
          
          <div className="flex gap-5 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Heart size={16} /> 3.2k
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={16} /> 843
            </div>
            <div className="flex items-center gap-1">
              <Repeat size={16} /> 1.5k
            </div>
            <div className="ml-auto flex items-center gap-1 text-blue-500">
              <ExternalLink size={16} /> View on X
            </div>
          </div>
        </div>

        {/* Post 4 - Farcaster with NFT */}
        <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow mb-2 h-full">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <img src="/api/placeholder/40/40" alt="User avatar" className="rounded-full" />
              </div>
              <div className="ml-2">
                <div className="font-medium">nft_creator</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <div className="bg-purple-500 text-white text-xs rounded px-1 mr-1">FC</div>
                  <span>4h ago</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-3">
            Just dropped my new NFT collection "Crypto Dreams" on Zora! Limited edition of 100 pieces. Mint directly here! 👇
          </div>
          
          <div className="mb-3 rounded-lg overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
            <img src="/api/placeholder/320/180" alt="NFT preview" className="w-full" />
          </div>
          
          <div className="flex gap-5 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Heart size={16} /> 156
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={16} /> 23
            </div>
            <div className="ml-auto flex items-center gap-1 text-blue-500">
              <Wallet size={16} /> Collect NFT
            </div>
          </div>
        </div>

        {/* Post 5 - Pump.fun Price Action */}
        <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow mb-2 h-full">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <img src="/api/placeholder/40/40" alt="User avatar" className="rounded-full" />
              </div>
              <div className="ml-2">
                <div className="font-medium">SolanaWhale</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <div className="bg-green-500 text-white text-xs rounded px-1 mr-1">PUMP</div>
                  <span>15m ago</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-3">
            $PEPE just crossed $150M market cap! If you bought last week when I called it, you're up 4x. This is only the beginning. Watch this space 👀
          </div>
          
          <div className="mb-3 p-3 bg-gray-50 rounded-lg border">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-green-400 flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <div>
                  <div className="font-medium">$PEPE</div>
                  <div className="text-xs text-gray-500">PEPE</div>
                </div>
              </div>
              <div className="text-green-500 font-medium">+412.7%</div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              Market Cap: $152.8M • Holders: 16,423
            </div>
          </div>
          
          <div className="flex gap-5 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Heart size={16} /> 342
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={16} /> 86
            </div>
            <div className="ml-auto flex items-center gap-1 text-blue-500">
              <Wallet size={16} /> Trade
            </div>
          </div>
        </div>

        {/* Post 6 - Crypto Twitter Analysis */}
        <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow mb-2 h-full">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <img src="/api/placeholder/40/40" alt="User avatar" className="rounded-full" />
              </div>
              <div className="ml-2">
                <div className="font-medium">BenjaminCowen</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <div className="bg-blue-500 text-white text-xs rounded px-1 mr-1">X</div>
                  <span>2h ago</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-3">
            ETH/BTC ratio looks interesting here. Could be setting up for a major move if we break above 0.061. Risk/reward is favorable for an ETH position against BTC in the short term.
          </div>
          
          <div className="mb-3 rounded-lg overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
            <img src="/api/placeholder/320/180" alt="Chart" className="w-full" />
          </div>
          
          <div className="flex gap-5 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Heart size={16} /> 1.8k
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={16} /> 324
            </div>
            <div className="flex items-center gap-1">
              <Repeat size={16} /> 562
            </div>
            <div className="ml-auto flex items-center gap-1 text-blue-500">
              <BarChart2 size={16} /> View Analysis
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Compose Button */}
      <div className="fixed bottom-24 right-6 h-14 w-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg">
        <Camera size={24} />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center text-gray-400">
            <MessageCircle size={22} />
            <div className="text-xs mt-1">Chat</div>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <Search size={22} />
            <div className="text-xs mt-1">Explore</div>
          </div>
          <div className="flex flex-col items-center text-blue-500">
            <Share2 size={22} />
            <div className="text-xs mt-1">Social</div>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <User size={22} />
            <div className="text-xs mt-1">Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoameoSocialPage;