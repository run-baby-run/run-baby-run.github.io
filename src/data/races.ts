/**
 * Races the club went to together.
 *
 * Everything here is drawn from the group chat, so a race is listed only where
 * the archive actually shows people going. Dates are the day of the race.
 *
 * Not listed yet, for want of a confirmed date: the Vanadzor Half Marathon,
 * whose registrations were confirmed on 20 August, and the October half
 * marathon people have been training for.
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
    slug: 'night-race',
    name: 'The night race',
    date: '2026-07-04',
    where: 'Yerevan',
    distances: ['—'],
    note: 'Bibs collected the day before, photos posted at one in the morning.',
    photos: 5,
  },
  {
    slug: 'yerevan-run',
    name: 'Yerevan Run',
    date: '2026-08-01',
    where: 'Yerevan',
    distances: ['—'],
    note: 'The one the club helped put on rather than only turning up to. Photos and video in a shared folder by the evening.',
    photos: 8,
  },
];

/** Most recent first. */
export const racesByDate = [...races].sort((a, b) => b.date.localeCompare(a.date));
