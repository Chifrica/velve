import React from 'react';
import type { Feature } from '../types';

interface FeatureCardProps extends Feature {
  delay: number;
}

export function FeatureCard({ title, description, delay }: FeatureCardProps) {
  return (
    <div 
      className="glass-effect p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-purple-500/20"
      style={{ animationDelay: `${delay}s` }}
    >
      <h3 className="text-2xl font-bold mb-4 gradient-text">{title}</h3>
      <p className="text-purple-200">{description}</p>
    </div>
  );
}