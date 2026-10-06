import { bot } from './bot';

export const site = {
  name: bot.name,
  title: `${bot.name} — ${bot.tagline}`,
  description: bot.description,
  url: 'https://nebulabot.dev',
  lang: 'en',
  locale: 'en_US',
  themeColorDark: '#07080c',
  themeColorLight: '#f5f6fa',
} as const;
