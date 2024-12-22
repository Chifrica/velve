import React, { useState } from 'react';
import { Moon, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#tokenomics', label: 'Tokenomics' },
    { href: '#community', label: 'Community' }
  ];

  return (
    <nav className="glass-effect rounded-2xl p-4 mb-16">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Moon className="w-8 h-8 text-purple-300" />
          <span className="text-2xl font-bold gradient-text">Velvet</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="hover:text-purple-300 transition-colors relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="block hover:text-purple-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}