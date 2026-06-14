/** Real quotes from Astral users (carried forward from the original site).
 *  Avatars live in /public/images/avatars. */
export const testimonials = [
  {
    name: 'Bryan Irace',
    handle: 'irace',
    avatar: '/images/avatars/irace.jpg',
    quote: 'Astral is an underrated tool that I love. Like Pinboard for code.',
  },
  {
    name: 'David Nicholson',
    handle: 'nicholdav',
    avatar: '/images/avatars/nicholdav.jpg',
    quote:
      'Just started using Astral to organize my starred repos on GitHub. I feel so in control of my life now.',
  },
  {
    name: 'Jeremy Kidwell',
    handle: 'kidwellj',
    avatar: '/images/avatars/kidwellj.jpg',
    quote:
      'Oh man am I loving Astral — transforming the cacophony of my GitHub stars into meaningful order!',
  },
  {
    name: 'Veronica Ray',
    handle: 'nerdonica',
    avatar: '/images/avatars/nerdonica.jpg',
    quote: "Astral is the app to organize my GitHub stars that I've been waiting for.",
  },
  {
    name: 'Chris Cornutt',
    handle: 'enygma',
    avatar: '/images/avatars/enygma.jpg',
    quote:
      "If you're as star-happy as I am on GitHub, Astral is invaluable for organizing them. So nice.",
  },
  {
    name: 'Justin Juno',
    handle: 'justinjunodev',
    avatar: '/images/avatars/junocodes.jpg',
    quote:
      'Thanks to Astral I now have an addiction to organizing my stars on GitHub. Not complaining though — this app is awesome!',
  },
  {
    name: 'Er Galvão Abbott',
    handle: 'galvao',
    avatar: '/images/avatars/galvao.jpg',
    quote:
      'Astral lets you organize starred GitHub repos. Love this kind of app: simple concept, awesome value.',
  },
  {
    name: 'whyGaard',
    handle: 'whygaard',
    avatar: '/images/avatars/whyGaard.jpg',
    quote: 'Yeeees, just organized and tagged a ton of my GitHub stars with Astral. So satisfying.',
  },
] as const;

export type Testimonial = (typeof testimonials)[number];
