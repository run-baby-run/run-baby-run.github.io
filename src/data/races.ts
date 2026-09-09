/**
 * Races the club went to together.
 *
 * Everything here is drawn from the group chat, so a race is listed only where
 * the archive actually shows people going. Dates are the day of the race.
 *
 * Still to come at the time of writing: the Yerevan Marathon on 17-18 October,
 * which the club has a discount code for and at least one person has signed up
 * to run the full 42.2 km of.
 */

export interface Race {
  slug: string;
  name: string;
  date: string;
  where: string;
  /** What was on offer; the club rarely ran only one of them. */
  distances: string[];
  note?: string;
  /** How many of that day's photographs to show. */
  photos?: number;
}

export const races: Race[] = [
  {
    slug: 'gorge-run',
    name: 'Gorge Run',
    date: '2026-03-29',
    where: 'Hrazdan Gorge, Yerevan',
    distances: ['1 km', '5 km'],
    note: 'Founders Running Club. A kids’ race first, then the 5K, then the awards. The club’s first race together, seven weeks in.',
    photos: 6,
  },
  {
    slug: 'india',
    name: 'A race in India',
    date: '2026-03-29',
    where: 'India',
    distances: ['—'],
    note: 'Subhav and Jebid, on the other side of the world on the same weekend, sending the medal photo back to the group.',
  },
  {
    slug: 'spring-run',
    name: 'Yerevan Spring Run',
    date: '2026-05-10',
    where: 'Yerevan',
    distances: ['5 km', '10 km', '21.1 km'],
    note: 'Sold out before some of us got to the form. Ten in the morning, and then Wings for Life the same afternoon.',
    photos: 8,
  },
  {
    slug: 'wings-for-life',
    name: 'Wings for Life World Run',
    date: '2026-05-10',
    where: 'Yerevan',
    distances: ['until the car catches you'],
    note: 'Three in the afternoon, caps and medals, and the second race of the same day for anyone who had signed up twice.',
    photos: 6,
  },
  {
    slug: 'one-run',
    name: 'One Run',
    date: '2026-05-23',
    where: 'Yerevan',
    distances: ['5 km', '10 km'],
    note: 'The PR race. “A lot of you did their PR today.”',
    photos: 8,
  },
  {
    slug: 'beat-run',
    name: 'Tricolor Beat Run',
    date: '2026-06-14',
    where: 'Shahumyan Square, Yerevan',
    distances: ['5 km'],
    note: 'An evening fun run, 19:30 start, no finisher medal and nobody minded. Newcomers were told they would recognise us afterwards, which turned out to be true.',
    photos: 8,
  },
  {
    slug: 'night-race',
    name: 'Tricolor Night Race',
    date: '2026-07-04',
    where: 'Republic Square, Yerevan',
    distances: ['5 km', '10 km'],
    note: 'Half past nine at night, through the middle of the city, for the Day of State Symbols. Bibs the day before, T-shirts on site, congratulations until about one in the morning.',
    photos: 6,
  },
  {
    slug: 'yerevan-run',
    name: 'HamaliRun × Run Baby Run',
    date: '2026-08-01',
    where: 'Hrazdan Gorge, Yerevan',
    distances: ['5 km'],
    note: 'The first race with the club’s name on it rather than only its runners in it. Small finisher medals, water and snacks, and a start you could roll straight into from the 8:00 breakfast run.',
    photos: 10,
  },
  {
    slug: 'vanadzor-half',
    name: 'Vanadzor Half Marathon',
    date: '2026-08-23',
    where: 'Vanadzor',
    distances: ['10 km', '21.1 km'],
    note: 'Out of the city for once, with a discount code that was just our name in capitals. Some of us took the 10K and some the half; one of us finished 34th of 106 and took twenty minutes off his own best. Six medals in the photo, held up together.',
    photos: 4,
  },
];

/** Most recent first. */
export const racesByDate = [...races].sort((a, b) => b.date.localeCompare(a.date));
