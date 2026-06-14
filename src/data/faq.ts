/** Answers a developer wants before connecting their GitHub account. */
export const faqs = [
  {
    q: 'Is Astral free?',
    a: 'Yes, free and always will be. Astral is open source and supported by GitHub Sponsors, not by selling you or your data.',
  },
  {
    q: 'Is it open source? Can I self-host?',
    a: 'Astral is MIT-licensed and lives on GitHub. Use the hosted app, or run your own instance with Docker, backed by SQLite or MySQL.',
  },
  {
    q: 'What GitHub permissions does it need?',
    a: 'You sign in with GitHub OAuth, no password. Astral reads your starred repositories and can star or unstar on your behalf. That is the extent of it.',
  },
  {
    q: 'Is my data private?',
    a: 'Astral only touches your stars, plus the tags and notes you add. Nothing is sold or shared, and self-hosting puts the whole thing on your own server.',
  },
  {
    q: 'Does it handle thousands of stars?',
    a: 'That is exactly who it is for. Astral is built for power users with hundreds or thousands of stars, and search and filtering stay instant at scale.',
  },
] as const;

export type Faq = (typeof faqs)[number];
