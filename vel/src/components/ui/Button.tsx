import React from 'react';
import type { ButtonProps } from '../../types';

export function Button({ children, icon: Icon, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="glass-effect hover:bg-purple-500/20 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-3 transition-all duration-300 group"
    >
      {Icon && <Icon className="w-6 h-6 group-hover:rotate-12 transition-transform" />}
      <span>{children}</span>
    </button>
  );
}