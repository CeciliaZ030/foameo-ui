'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaHome, FaRegMap, FaTicketAlt, FaRegHeart, FaRegMoneyBillAlt, FaRegUser } from 'react-icons/fa';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/chat', icon: <FaHome size={24} /> },
    { name: 'Explore', path: '/explore', icon: <FaRegMap size={24} /> },
    { name: 'Social', path: '/social', icon: <FaRegHeart size={24} /> },
    { name: 'Holdings', path: '/holdings', icon: <FaRegMoneyBillAlt size={24} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-4 pt-2 rounded-b-3xl shadow-lg">
      <div className="max-w-2xl mx-auto flex justify-between items-end px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className="flex-1 flex flex-col items-center justify-end px-1"
            >
              <div className={`flex flex-col items-center gap-1 ${isActive ? 'text-black font-bold' : 'text-gray-500'}`}>
                {item.icon}
                <span className={`text-xs mt-0.5 ${isActive ? 'font-semibold text-black' : 'text-gray-500'}`}>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 