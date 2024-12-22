import React from 'react';
import { Rocket, Coins, Moon } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl" />
      </div>

      {/* Content */}
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

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="glass-effect hover:bg-purple-500/20 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-3 transition-all duration-300 group">
            <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Buy Now</span>
          </button>
          
          <button className="glass-effect hover:bg-purple-500/20 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-3 transition-all duration-300 group">
            <Coins className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Tokenomics</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 w-full">
          {[
            { label: 'Holders', value: '10K+' },
            { label: 'Market Cap', value: '$2M' },
            { label: 'Total Supply', value: '1B' }
          ].map((stat) => (
            <div key={stat.label} className="glass-effect p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
              <p className="text-purple-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}