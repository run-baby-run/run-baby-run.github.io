/**
 * The club diary.
 *
 * Every entry comes from the WhatsApp group: the date is the day the messages
 * were sent, the quotes are what people actually wrote, and the photographs are
 * the ones sent that day. Nothing here is invented.
 *
 * Names follow one rule — a first name where the export has one, "someone"
 * otherwise. Never a phone number.
 */

export type EntryKind =
  | 'run'       // an ordinary session worth remembering
  | 'milestone' // the club changing shape
  | 'race'      // a race we went to together
  | 'pr'        // somebody's personal record
  | 'quote'     // just something that was said
  | 'place';    // a route, a café, a meeting point

export interface Entry {
  /** ISO date; also how photographs are matched to the entry. */
  date: string;
  kind: EntryKind;
  title: string;
  /** Two or three sentences. Shorter is better. */
  story?: string;
  quote?: { text: string; who?: string };
  /** How many of that day's photographs to show, in the order they were sent. */
  photos?: number;
  /** Slug in races.ts, when the day was a race. */
  race?: string;
  /** A number worth setting large: a distance, a count. */
  stat?: { value: string; label: string };
}

export const entries: Entry[] = [
  {
    date: '2026-02-12',
    kind: 'milestone',
    title: 'A group chat',
    story:
      'At 7:44 in the evening Shaghig made a WhatsApp group and called it Run Baby Run. That is the whole of day one.',
  },
  {
    date: '2026-03-05',
    kind: 'place',
    title: 'Thursday, ten at night, Seasons Park',
    story:
      'The first poster went up in the chat, and it said everything the club still says: where, when, come.',
    quote: { text: 'Our next run will be on Thursday at 10:00 PM. Meet up at Seasons Park.' },
    photos: 3,
  },
  {
    date: '2026-03-06',
    kind: 'quote',
    title: 'After the first one',
    quote: { text: 'Great run with amazing company ❤️❤️' },
    story:
      'Somebody asked the same night whether every run would be at night, because they worked evenings. The answer set the pattern that held all year: mostly night, one or two mornings a week.',
    photos: 2,
  },
  {
    date: '2026-03-08',
    kind: 'quote',
    title: 'We run in any weather',
    story: 'It had snowed, and somebody asked whether the run was still on.',
    quote: {
      text: 'Today’s route was a bit snowy but the route was very clean, so feel free to join on Tuesday. P.S. we run in any weather unless it’s dangerous.',
      who: 'Shaghig',
    },
  },
  {
    date: '2026-03-10',
    kind: 'run',
    title: 'Eight kilometres, and a live location',
    story:
      'The first run to show up on Strava under the club’s name: 8 km from Diana Abgar Park at ten at night. So many people came that Shaghig started sharing her location so the latecomers could find the pack.',
    stat: { value: '8 km', label: 'Diana Abgar Park, 22:00' },
    photos: 4,
  },
  {
    date: '2026-03-11',
    kind: 'place',
    title: 'Coffee at Ground Zero',
    story:
      'Meet at 21:50, stretch at 21:55, run at 22:00, then Ground Zero on Saryan. The café has changed twice since; the shape of the evening never has.',
    quote: { text: 'Thank you. Great run and so much fun.' },
    photos: 4,
  },
  {
    date: '2026-03-17',
    kind: 'quote',
    title: 'Standing by',
    quote: { text: 'I hope I can stand by you like you do. It would truly make me happy and proud.' },
    photos: 2,
  },
  {
    date: '2026-03-28',
    kind: 'run',
    title: 'Walking counts',
    story:
      'Someone finished and wasn’t sure it counted, because they had walked part of the way back. Shaghig, straight away: “Of course walking while running also counts. It’s totally normal, so you did amazing.” If you want to know what this club is, it is that.',
    stat: { value: '14 km', label: 'and we did it' },
    photos: 3,
  },
  {
    date: '2026-03-29',
    kind: 'race',
    title: 'Medals, and a message from India',
    race: 'gorge-run',
    story:
      'A 5K in the Hrazdan gorge on a Sunday morning. The same weekend Subhav and Jebid raced on the other side of the world and sent the photo back.',
    quote: { text: 'Thank youuu! Sending love to Run Baby Run from 🇮🇳' },
    photos: 4,
  },
  {
    date: '2026-04-02',
    kind: 'run',
    title: 'A new friend',
    quote: { text: 'Today’s run was great. Because of the weather. Also I had missed you guys. And I found a new friend, Amir.' },
    story: 'Amir, the same afternoon: “Thanks everyone, it was amazing time to run with you. Nice to meet you all.”',
    photos: 4,
  },
  {
    date: '2026-04-11',
    kind: 'milestone',
    title: '100 people in one month',
    quote: {
      text: '100 MEMBERS IN ONE MONTH. 100 people in just one month… amazing! This is more than a running group, it’s a family.',
    },
    stat: { value: '100', label: 'members, one month in' },
  },
  {
    date: '2026-04-14',
    kind: 'place',
    title: 'Thursdays begin at Prépa',
    story:
      'From this week the Thursday morning run started and finished at Prépa on Saryan — meet 7:50, stretch 7:55, run at 8:00, and say you’re from Run Baby Run for something off the coffee. That evening somebody worried it was dropping to 4°C. Astrig: “No one freezes while running.”',
    quote: { text: 'Thank you for really not letting me give up on running.' },
    photos: 3,
  },
  {
    date: '2026-04-16',
    kind: 'run',
    title: 'A Russian lesson at breakfast',
    story:
      'Somebody taught the table неужели — roughly “oh really”, the thing you say to a person who is never on time — and then всего хорошего, which literally means: I wish you everything that might be good. Somebody else admitted a trick: if the light is about to turn red, wait for it, and get your breath back while nobody is judging.',
    quote: { text: 'The trickiest part is not feeling guilty when making people wait for you.' },
    photos: 4,
  },
  {
    date: '2026-05-01',
    kind: 'run',
    title: 'The first of May',
    story:
      'The biggest turnout of the spring. People ran in from Arabkir and from the bridge on Azatutyan to meet the start. Somebody left a blue football in the park and told the group to keep it.',
    quote: { text: 'Thanks everyone for the amazing energy today! It was a pleasure meeting you all.' },
    photos: 6,
  },
  {
    date: '2026-05-02',
    kind: 'run',
    title: 'Thirty-two kilometres',
    story: 'A Saturday morning long run, four of them, all the way out and all the way back.',
    stat: { value: '32 km', label: 'Saturday morning' },
    photos: 3,
  },
  {
    date: '2026-05-10',
    kind: 'race',
    title: 'Two races, one day',
    race: 'spring-run',
    story:
      'The Spring Run at ten in the morning and Wings for Life at three in the afternoon, with one person who had signed up for both by accident — “yeah well I now have to do both lol im kinda excited too tbh.” Twenty-three people in the chat and a hundred and seventy-six photos by the end of it.',
    photos: 8,
  },
  {
    date: '2026-05-21',
    kind: 'pr',
    title: 'Sha’s fastest 5K',
    story:
      'Posted from a rainy morning run: fastest 5K of her life, and third fastest kilometre. 7.18 km in the rain before work.',
    stat: { value: 'PR', label: 'fastest 5K · Sha' },
    photos: 3,
  },
  {
    date: '2026-05-23',
    kind: 'race',
    title: 'A lot of you did their PR today',
    race: 'one-run',
    quote: { text: 'Good job to everyone. You guys were amazing, and a lot of you did their PR today.', who: 'Shaghig' },
    story: 'Akshy, to somebody who thought they had gone badly: “Don’t worry! We all saw you crushing the 10k PR.”',
    photos: 6,
  },
  {
    date: '2026-06-18',
    kind: 'pr',
    title: 'Inga’s fastest 5K',
    story: 'Second fastest mile of her life in the same run, on an ordinary Thursday morning.',
    stat: { value: 'PR', label: 'fastest 5K · Inga' },
    photos: 4,
  },
  {
    date: '2026-06-23',
    kind: 'quote',
    title: 'Upstairs or underground',
    quote: { text: 'Hi guys I will join you first time today, are you gathering underground or upstairs at Seasons Park?' },
    story: 'The most-asked question in the whole archive, and the reason the posters got more specific.',
    photos: 2,
  },
  {
    date: '2026-06-26',
    kind: 'run',
    title: 'Intervals from the post office',
    quote: { text: 'Jebid and I will do interval run at 8:30pm. We will start from post office building on Saryan, you are welcome to join' },
    story: 'Not on the schedule. Just two people going anyway, and saying so out loud.',
    photos: 3,
  },
  {
    date: '2026-07-08',
    kind: 'run',
    title: 'UltramarathonArmenia come along',
    quote: {
      text: 'Thank you to the leader of this club for inviting UltramarathonArmenia to this run, it was pleasure to meet you all.',
    },
    photos: 4,
  },
  {
    date: '2026-07-09',
    kind: 'run',
    title: 'Back again next week',
    quote: { text: 'It was so awesome to meet you all at the morning run! I had tons of fun!!! I’ll definitely be back again next week!' },
    photos: 5,
  },
  {
    date: '2026-07-18',
    kind: 'pr',
    title: 'Twelve kilometres in an hour',
    quote: { text: 'Today such a good day, I completed new record 12 km in 1 hour' },
    stat: { value: '12 km', label: 'in 60 minutes' },
    photos: 2,
  },
  {
    date: '2026-07-28',
    kind: 'milestone',
    title: 'We outgrew the route',
    story:
      'The warm-up spot and the route both changed, and the reason was the nicest one a running club can have: there were too many of us for the old one.',
    quote: { text: 'Please pay attention that the route and the warm up locations have changed, because the previous route is crowded' },
    photos: 3,
  },
  {
    date: '2026-08-01',
    kind: 'race',
    title: 'A race of our own',
    race: 'yerevan-run',
    story:
      'The club helped put the race on rather than just turning up to it. Photos and video went into a shared folder the same evening; Roman made a film of it.',
    quote: { text: 'Thank you everyone for coming and thank you to the ones who helped us. You’re the best!!' },
    photos: 8,
  },
  {
    date: '2026-08-02',
    kind: 'run',
    title: 'Feet that kiss the ground',
    story:
      'The morning after the race turned into a form clinic in the chat: land under your centre of mass, not in front of it; small steps, high cadence; midfoot first.',
    quote: { text: 'My running coach used to say, it’s as if your feet kiss the ground.' },
    photos: 3,
  },
  {
    date: '2026-08-29',
    kind: 'pr',
    title: 'Two records in one day',
    story: 'One half marathon five minutes faster than ever before, and one more PR alongside it.',
    stat: { value: '−5:00', label: 'half marathon PR' },
    photos: 2,
  },
  {
    date: '2026-09-01',
    kind: 'milestone',
    title: 'Shirts',
    story:
      'The club T-shirts arrived and were handed out after the Tuesday run — after, because nobody wanted to carry one for eight kilometres.',
    photos: 4,
  },
  {
    date: '2026-09-06',
    kind: 'run',
    title: 'Early, to beat the sun',
    story:
      'Sunday, 6:30, moved earlier because two people were going for 30 km and everyone wanted to be done before the heat. Someone offered to bring coffee and food to the finish, and pointed out there is a pulpulak right there for water.',
    quote: { text: 'I couldn’t sleep tonight either... I only slept for two hours. I think I’ll feel unwell from running that much, but I’ll definitely join next time.' },
    photos: 4,
  },
  {
    date: '2026-09-08',
    kind: 'milestone',
    title: 'The club gets a website',
    story:
      'runbabyrun.fun went up, with everybody’s Strava on it, and the request that followed was immediate and predictable: send me yours, it’s missing.',
    photos: 3,
  },
];

/** Newest first, which is how the diary reads. */
export const diary = [...entries].sort((a, b) => b.date.localeCompare(a.date));
