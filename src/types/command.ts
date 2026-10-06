export const commandCategories = [
  'Moderation',
  'Music',
  'Fun',
  'Utility',
  'Economy',
  'Leveling',
] as const;

export type CommandCategory = (typeof commandCategories)[number];

export type OptionType =
  | 'string'
  | 'user'
  | 'channel'
  | 'role'
  | 'mentionable'
  | 'integer'
  | 'number'
  | 'boolean'
  | 'attachment';

export interface CommandOption {
  readonly name: string;
  readonly type: OptionType;
  readonly description: string;
  readonly required: boolean;
}

export interface Command {
  readonly name: string;
  readonly description: string;
  readonly category: CommandCategory;
  readonly usage: string;
  readonly options: readonly CommandOption[];
  readonly permissions: readonly string[];
  readonly cooldown: string;
  readonly premiumOnly?: boolean;
}
