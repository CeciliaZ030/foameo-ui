"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const mockAssets = [
  { name: 'ETH', value: 1200, color: '#6366F1' },
  { name: 'SOL', value: 800, color: '#F59E42' },
  { name: 'BTC', value: 600, color: '#F87171' },
  { name: 'USDC', value: 400, color: '#34D399' },
  { name: 'ARB', value: 200, color: '#60A5FA' },
];

const total = mockAssets.reduce((sum, asset) => sum + asset.value, 0);

export default function HoldingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center mb-8">
        <div className="uppercase text-xs font-semibold text-gray-400 mb-2 tracking-wider">Total Balance</div>
        <div className="text-4xl font-bold text-gray-900 mb-1">${total.toLocaleString()}</div>
        <div className="text-sm text-gray-500 mb-4">USD</div>
        <div className="w-full h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={mockAssets}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {mockAssets.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <div className="font-semibold text-lg text-gray-900 mb-4">Asset Breakdown</div>
        <ul>
          {mockAssets.map(asset => (
            <li key={asset.name} className="flex items-center justify-between py-2 border-b last:border-b-0">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full" style={{ background: asset.color }}></span>
                <span className="font-medium text-gray-800">{asset.name}</span>
              </div>
              <div className="text-gray-700 font-semibold">${asset.value.toLocaleString()}</div>
              <div className="text-xs text-gray-500 ml-2">{((asset.value / total) * 100).toFixed(1)}%</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 