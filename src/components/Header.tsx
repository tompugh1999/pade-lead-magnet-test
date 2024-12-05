import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '../assets/logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 backdrop-blur-lg bg-dark-100/80 border-b border-dark-300/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-auto text-primary" />
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {['Features', 'Success Stories'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-primary"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-200"
        >
          <ul className="px-4 py-2">
            {['Features', 'Success Stories'].map((item) => (
              <li key={item} className="py-2">
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-primary block"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}