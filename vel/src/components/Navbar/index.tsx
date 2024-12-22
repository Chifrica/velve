import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { NavLinks } from './NavLinks';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="glass-effect rounded-2xl p-4 mb-16">
      <div className="flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <NavLinks mobile onClickMobile={() => setIsMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
}