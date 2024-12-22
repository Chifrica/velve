import React from 'react';
import { Moon } from 'lucide-react';
import { HeroButtons } from './HeroButtons';
import { Stats } from './Stats';

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="animate-float mb-8">
          <Moon className="w-24 h-24 text-purple-300" />
        </div>
        
        <h1 className="text-7xl font-bold mb-6 gradient-text">
          The Smoothest Meme in Crypto
        </h1>
        
        <p className="text-xl text-purple-200 mb-12 max-w-2xl">
          Join the velvet revolution. The softest, most luxurious meme token that's taking crypto by storm. 
          Built for the community, by the community.
        </p>

        <HeroButtons />
        <Stats />
      </div>
    </div>
  );
}
