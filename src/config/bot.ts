const clientId = '1024571054690099261';

export const bot = {
  name: 'Aichan',
  tagline: 'All in One Discord bot for modern servers',
  description:
    'Ultra High Performance Bot - So fast, responsive, reliable and free. Better than others...',
  clientId,
  inviteUrl: `https://discord.com/oauth2/authorize?client_id=${clientId}&permissions=104328774&scope=bot%20applications.commands`,
  supportUrl: 'https://discord.gg/aichanbot',
  email: 'support@aichanbot.dev',
  developer: 'iFluxo Labs',
  legal: {
    jurisdiction: 'Indonesia',
    effectiveDate: '2026-01-15',
    updatedDate: '2026-10-01',
  },
} as const;
