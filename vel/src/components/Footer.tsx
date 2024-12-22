import React from 'react';
import { SOCIAL_LINKS } from '../config/constants';

export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-12">
      <div className="glass-effect rounded-2xl p-8">
        <div className="flex justify-center space-x-8">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="hover:text-purple-300 transition-all duration-300 hover:scale-110"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-8 h-8" />
            </a>
          ))}
        </div>
        <p className="text-center mt-6 text-purple-200">
          © {new Date().getFullYear()} Velvet. All rights reserved.
        </p>
      </div>
    </footer>
  );
}