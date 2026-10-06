const clientId = '1024571054690099261';

export const bot = {
  name: 'Nebula',
  tagline: 'The all-in-one Discord bot for modern servers',
  description:
    'Nebula brings moderation, music, leveling, economy and a wide range of fun and utility commands to your Discord server — fast, reliable and free.',
  clientId,
  inviteUrl: `https://discord.com/oauth2/authorize?client_id=${clientId}&permissions=104328774&scope=bot%20applications.commands`,
  supportUrl: 'https://discord.gg/nebulabot',
  email: 'support@nebulabot.dev',
  developer: 'Nusantara Labs',
  legal: {
    jurisdiction: 'Indonesia',
    effectiveDate: '2026-01-15',
    updatedDate: '2026-10-01',
  },
} as const;
