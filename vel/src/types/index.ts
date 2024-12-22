import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
}