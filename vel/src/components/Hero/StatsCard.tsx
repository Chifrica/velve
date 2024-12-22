import React from 'react';
import type { StatItem } from '../../types';

export function StatsCard({ label, value }: StatItem) {
  return (
    <div className="glass-effect p-6 rounded-2xl text-center">
      <h3 className="text-3xl font-bold gradient-text mb-2">{value}</h3>
      <p className="text-purple-200">{label}</p>
    </div>
  );
}