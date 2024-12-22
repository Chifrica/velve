import React from 'react';
import { StatsCard } from './StatsCard';
import { STATS_DATA } from '../../config/constants';

export function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 w-full">
      {STATS_DATA.map((stat) => (
        <StatsCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}