export const site = {
  name: 'Run Baby Run',
  tagline: "Just show up, we'll take it from there.",
  city: 'Yerevan, Armenia',
  instagram: 'https://www.instagram.com/run.baby.run.club/',
  instagramHandle: '@run.baby.run.club',
  whatsapp: 'https://chat.whatsapp.com/I8efTvyrNSZKm5PxoadkVt',
};

export const runs = [
  {
    day: 'Tuesday',
    time: '22:00',
    icon: '🌓',
    label: 'Night run',
    blurb: 'City lights, cool air, easy pace. The one that ends with everyone talking too long on the corner.',
    accent: 'pink',
  },
  {
    day: 'Thursday',
    time: '07:45',
    icon: '☀️',
    label: 'Morning run',
    blurb: 'Before work, before excuses. Short, honest, and you get the whole day back afterwards.',
    accent: 'green',
  },
  {
    day: 'Saturday',
    time: '06:30',
    icon: '☀️',
    label: 'Long run',
    blurb: 'The big one. Distance for whoever wants it, coffee for everyone at the end.',
    accent: 'pink',
  },
] as const;

// TODO: replace the placeholder names with the founders' real names.
export const founders = [
  { name: 'Founder One', role: 'Co-founder' },
  { name: 'Founder Two', role: 'Co-founder' },
  { name: 'Founder Three', role: 'Co-founder' },
];
