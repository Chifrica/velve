import { Twitter, MessageCircle } from 'lucide-react';
import type { Feature, SocialLink, StatItem, NavLink } from '../types';

export const FEATURES: Feature[] = [
  {
    title: 'Community Driven',
    description: 'Built by the community, for the community. No team tokens, no presale.',
  },
  {
    title: 'LP Locked',
    description: 'Liquidity locked forever. Your funds are safe with Velvet.',
  },
  {
    title: 'Zero Tax',
    description: 'Trade freely without any transaction tax. What you see is what you get.',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Twitter,
    href: 'https://twitter.com/velvetcoin',
    label: 'Twitter',
  },
  {
    icon: MessageCircle,
    href: 'https://t.me/velvetcoin',
    label: 'Telegram',
  },
];

export const STATS_DATA: StatItem[] = [
  { label: 'Holders', value: '10K+' },
  { label: 'Market Cap', value: '$2M' },
  { label: 'Total Supply', value: '1B' }
];

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#tokenomics', label: 'Tokenomics' },
  { href: '#community', label: 'Community' }
];