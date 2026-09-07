export const site = {
  name: 'Run Baby Run',
  tagline: "Just show up, we'll take it from there.",
  city: 'Yerevan, Armenia',
  instagram: 'https://www.instagram.com/run.baby.run.club/',
  instagramHandle: '@run.baby.run.club',
  whatsapp: 'https://chat.whatsapp.com/I8efTvyrNSZKm5PxoadkVt',
  strava: 'https://www.strava.com/clubs/1997257',
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
    accent: 'sage',
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

export interface Founder {
  name: string;
  surname: string;
  role: string;
  /** Filename in src/assets/founders/ */
  file: string;
  alt: string;
  /** object-position for the 3:4 crop, when centre is not the right choice. */
  focus?: string;
}

export const founders: Founder[] = [
  {
    name: 'Shaghig',
    surname: 'Jouharian',
    role: 'Co-founder',
    file: 'shaghig.jpg',
    alt: 'Shaghig holding up a marathon finisher medal at the end of a race',
  },
  {
    name: 'Asdghig',
    surname: 'Jouharian',
    role: 'Co-founder',
    file: 'asdghig.jpg',
    alt: 'Asdghig holding up a Yerevan Night Run medal after the race',
  },
  {
    name: 'Jebid',
    surname: 'Jouharian',
    role: 'Co-founder',
    file: 'jebid.jpg',
    alt: 'Jebid photographed in front of the Eiffel Tower in Paris',
    focus: 'center 35%',
  },
];
