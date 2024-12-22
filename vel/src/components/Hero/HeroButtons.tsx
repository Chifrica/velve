import React from 'react';
import { Rocket, Coins } from 'lucide-react';
import { Button } from '../ui/Button';

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <Button icon={Rocket}>Buy Now</Button>
      <Button icon={Coins}>Tokenomics</Button>
    </div>
  );
}