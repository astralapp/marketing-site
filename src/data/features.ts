/** The six core capabilities, in the order they appear on the page.
 *  `icon` is a Lucide name resolved by astro-icon. */
export const features = [
  {
    title: 'Tag everything',
    icon: 'lucide:tags',
    blurb:
      'Add one or more tags to any repo and shape thousands of stars into the system that actually fits your head.',
  },
  {
    title: 'Smart filters',
    icon: 'lucide:list-filter',
    blurb:
      'Stack rules into saved smart filters by language, tag, or owner, and pin the slices you reach for every day.',
  },
  {
    title: 'Instant search',
    icon: 'lucide:search',
    blurb:
      'Type to find. Astral searches names, descriptions, and READMEs the moment you start, across your whole catalog.',
  },
  {
    title: 'READMEs at a glance',
    icon: 'lucide:book-open',
    blurb:
      "Read any repo's README right inside Astral. No tab-hopping to remember what a tool actually does.",
  },
  {
    title: 'Notes that stick',
    icon: 'lucide:sticky-note',
    blurb:
      "Jot a note on any star: the missing context, why you saved it, the gotcha you'll have forgotten by next month.",
  },
  {
    title: 'Free & open source',
    icon: 'lucide:github',
    blurb:
      'Astral is free, MIT-licensed, and self-hostable. Use the hosted app or run your own. Your stars, your call.',
  },
] as const;

export type Feature = (typeof features)[number];
