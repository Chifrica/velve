import React from 'react';
import { FeatureCard } from './FeatureCard';
import { FEATURES } from '../config/constants';

export function Features() {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-purple-950/50 backdrop-blur-sm" />
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Why Choose Velvet?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
}