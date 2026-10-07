import type { NavItem } from '../types/nav';

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Commands', href: '/commands', icon: 'terminal' },
  { label: 'Privacy Policy', href: '/privacy', icon: 'shield' },
  { label: 'Terms of Service', href: '/terms', icon: 'file-text' },
];
