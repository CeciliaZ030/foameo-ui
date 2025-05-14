'use client';

import { motion } from 'framer-motion';

interface Bot {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
}

const bots: Bot[] = [
  {
    id: 1,
    name: "Compound",
    description: "Your Assets, Working for You",
    category: "Lending",
    image: "https://picsum.photos/200/200?random=1"
  },
  {
    id: 2,
    name: "GMX",
    description: "Trade with Zero Price Impact",
    category: "Trading",
    image: "https://picsum.photos/200/200?random=2"
  },
  {
    id: 3,
    name: "MakerDAO",
    description: "The Foundation of DeFi Stability",
    category: "Lending",
    image: "https://picsum.photos/200/200?random=3"
  },
  {
    id: 4,
    name: "Synthetix",
    description: "Create and trade synthetic assets",
    category: "RWA",
    image: "https://picsum.photos/200/200?random=4"
  }
];

const categories = ["All", "DEX", "Staking", "RWA", "NFTs", "Lending", "Prediction Markets"];

const topAssets = [
  {
    name: 'SOL',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Kahoot%21_logo.svg',
    bg: 'bg-[#1A0066]'
  },
  {
    name: 'ETH',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Disney_wordmark.svg',
    bg: 'bg-[#181818]'
  },
  {
    name: 'Farcoin',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MarvelLogo.svg',
    bg: 'bg-white border'
  },
  {
    name: 'BTC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/National-Geographic-Logo.png',
    bg: 'bg-black'
  }
];

const topVaults = [
  {
    name: 'Lido ETH',
    subtitle: 'Earn yield on your ETH',
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    action: 'Deposit',
  },
  {
    name: 'Morpho USDC',
    subtitle: 'Stablecoin savings',
    icon: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    action: 'Deposit',
  },
  {
    name: 'BTC Growth',
    subtitle: 'Grow your Bitcoin',
    icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    action: 'Deposit',
  },
  {
    name: 'stETH Vault',
    subtitle: 'Staked ETH rewards',
    icon: 'https://cryptologos.cc/logos/lido-dao-ldo-logo.png',
    action: 'Deposit',
  },
  {
    name: 'DAI Savings',
    subtitle: 'Flexible DAI yield',
    icon: 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png',
    action: 'Deposit',
  },
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <header className="sticky top-0 z-10 p-4 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900">Today <span className="text-gray-400 font-normal text-lg ml-1">July 1</span></h1>
      </header>

      {/* Feature Card */}
      <section className="px-4 pt-6">
        <div className="rounded-3xl overflow-hidden shadow-lg bg-pink-100 relative mb-6">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Feature" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          {/* Chat Button */}
          <button className="absolute top-5 right-5 z-10 px-5 py-2 rounded-full bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition-all">
            Chat
          </button>
          <div className="relative p-6 flex flex-col justify-end min-h-[520px]">
            <span className="uppercase text-xs font-semibold text-pink-600 mb-2">Hyerliquid</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Leveraged Perpetual Futures</h2>
            <p className="text-gray-700 text-sm">Trade on performant blockchain built with the vision of a fully onchain open financial system</p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <div className="px-4 mb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search apps..."
            className="w-full px-4 py-2 pl-10 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white shadow-sm"
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
      </div>

      {/* Category Filter */}
      <div className="px-4 mb-4 overflow-x-auto">
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

      {/* App Cards Section */}
      <section className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Feature App Card - Large */}
          <div className="col-span-1 md:col-span-2 rounded-3xl bg-blue-100 flex flex-col items-center p-6 shadow-sm h-60 mb-2">
            <img src="https://img.icons8.com/fluency/64/000000/robot-2.png" alt="Polymarket" className="w-20 h-20 rounded-2xl mb-4" />
            <div className="flex flex-row items-end justify-between w-full mt-auto">
              <div className="flex flex-col items-start">
                <div className="font-bold text-xl text-gray-900 mb-1">Polymarket</div>
                <div className="text-sm text-gray-700 mb-2">Bet on real-world outcomes in politics, sports, and more with your crypto.</div>
              </div>
              <button className="px-6 py-2 rounded-xl bg-white text-blue-600 font-semibold text-base shadow hover:bg-blue-50 transition">Chat</button>
            </div>
          </div>
          {/* Top Assets Sliding Bar */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Top Assets</h2>
            <div className="flex gap-x-4 overflow-x-auto pb-2 scrollbar-hide">
              {topAssets.map(asset => (
                <div key={asset.name} className={`w-24 h-24 min-w-[6rem] rounded-2xl flex items-center justify-center ${asset.bg} shadow-sm border-0`}>
                  <img src={asset.logo} alt={asset.name} className="max-h-10 max-w-[70%] object-contain" />
                </div>
              ))}
            </div>
          </div>
          {/* Top Vaults Widget */}
          <div className="rounded-3xl bg-white shadow-lg p-6 mb-8">
            <div className="uppercase text-xs font-semibold text-gray-400 mb-1 tracking-wider">Top Vaults</div>
            <div className="text-2xl font-bold text-gray-900 mb-4">Top Vaults</div>
            <div>
              {topVaults.map((vault, i) => (
                <div key={vault.name} className={`flex items-center py-3 ${i !== 0 ? 'border-t border-gray-100' : ''}`}>
                  <img src={vault.icon} alt={vault.name} className="w-10 h-10 rounded-xl mr-4 object-contain bg-gray-50" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 leading-tight">{vault.name}</div>
                    <div className="text-xs text-gray-500 leading-tight">{vault.subtitle}</div>
                  </div>
                  {vault.action === 'Deposit' ? (
                    <button className="ml-2 px-4 py-1 rounded-xl bg-blue-100 text-blue-700 font-medium text-sm shadow hover:bg-blue-200 transition">Deposit</button>
                  ) : (
                    <button className="ml-2 px-4 py-1 rounded-xl bg-gray-100 text-gray-800 font-medium text-sm shadow hover:bg-gray-200 transition">Open</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Dynamic Bot Cards Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Essential Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bots.map((bot, i) => (
            <motion.div
              key={bot.id}
              whileHover={{ scale: 1.02 }}
              className={`bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center ${i % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <img
                src={bot.image}
                alt={bot.name}
                className="w-12 h-12 rounded-xl object-cover mr-4"
              />
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{bot.name}</div>
                <div className="text-xs text-gray-700 mb-1">{bot.description}</div>
                <span className="text-xs text-gray-500">{bot.category}</span>
              </div>
              <div className="flex flex-col items-end">
                <button className="px-4 py-1 rounded-xl bg-gray-100 text-gray-800 font-medium text-sm shadow hover:bg-gray-200 transition mb-1">Chat</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
} 