import type { IconName } from './icons';

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly icon?: IconName;
}
