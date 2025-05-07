'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Chat', path: '/chat' },
    { name: 'Explore', path: '/explore' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-2">
      <div className="max-w-md mx-auto flex justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className="relative flex-1 flex flex-col items-center py-2"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span
                className={`text-sm ${
                  isActive ? 'text-blue-500' : 'text-gray-500'
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
        <Link
          href="/profile"
          className="relative flex-1 flex flex-col items-center py-2"
        >
          {pathname === '/profile' && (
            <motion.div
              layoutId="nav-indicator"
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs">
            U
          </div>
          <span
            className={`text-sm ${
              pathname === '/profile' ? 'text-blue-500' : 'text-gray-500'
            }`}
          >
            Profile
          </span>
        </Link>
      </div>
    </nav>
  );
} 