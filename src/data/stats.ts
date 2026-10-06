import type { IconName } from '../types/icons';

export interface Stat {
  readonly value: string;
  readonly label: string;
  readonly icon: IconName;
}

export const stats: readonly Stat[] = [
  { value: '12K+', label: 'Active servers', icon: 'server' },
  { value: '3.8M+', label: 'Community members', icon: 'users' },
  { value: '150M+', label: 'Commands executed', icon: 'zap' },
  { value: '99.9%', label: 'Uptime last year', icon: 'activity' },
];
