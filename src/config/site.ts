import { bot } from './bot';

export const site = {
  name: bot.name,
  title: `${bot.name} — ${bot.tagline}`,
  description: bot.description,
  url: 'https://aichan.web.app',
  lang: 'en',
  locale: 'en_US',
  themeColorDark: '#07080c',
  themeColorLight: '#f5f6fa',
} as const;
