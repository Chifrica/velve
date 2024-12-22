import React from 'react';
import { Moon } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <Moon className="w-8 h-8 text-purple-300" />
      <span className="text-2xl font-bold gradient-text">Velvet</span>
    </div>
  );
}