/**
 * The club diary.
 *
 * Every entry comes from the WhatsApp group: the date is the day it happened,
 * the quotes are what people actually typed, and the photographs are the ones
 * sent that day. Nothing is invented.
 *
 * Voice: we, us, one of us. This is the club telling its own story, not a
 * report about it — "we ran fourteen kilometres", never "the group completed a
 * fourteen kilometre run". If an entry reads like minutes of a meeting, it is
 * wrong.
 *
 * Names: a first name where the export has one, "one of us" otherwise. Never a
 * phone number. The export shows both "Astrig" and a starred nickname for what
 * may be the same person, so those quotes are left unattributed rather than
 * guessed at.
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
  /**
   * Only photographs sent after this time (HH:MM), for a day that held two
   * different things — 14 June was a trail race at lunchtime and the Beat Run
   * that evening, and the diary entry is about the evening.
   */
  photosAfter?: string;
  /** Slug in races.ts, when the day was a race. */
  race?: string;
  /** A number worth setting large: a distance, a count. */
  stat?: { value: string; label: string };
}

export const entries: Entry[] = [
  {
    date: '2026-02-12',
    kind: 'milestone',
    title: 'We start as a group chat',
    story:
      'Twelve minutes to eight on a Thursday evening, Shaghig makes a WhatsApp group and calls it Run Baby Run. We have no logo, no plan, and no idea that five hundred of us will eventually be in here arguing about pace.',
  },
  {
    date: '2026-03-05',
    kind: 'place',
    title: 'Thursday. 10pm. Seasons Park.',
    story: 'Our first poster. Nineteen words, and honestly we have not needed many more since.',
    quote: { text: 'Our next run will be on Thursday at 10:00 PM. Meet up at Seasons Park.' },
    photos: 4,
  },
  {
    date: '2026-03-06',
    kind: 'quote',
    title: 'Our first review',
    quote: { text: 'Great run with amazing company ❤️❤️' },
    story:
      'Someone asked, a bit anxiously, whether we would always run at night, because they work evenings. We said mostly, but there would be mornings. We have had mornings ever since.',
    photos: 3,
  },
  {
    date: '2026-03-08',
    kind: 'quote',
    title: 'We run in any weather',
    story: 'It snowed. Someone asked, very politely, whether we might call it off. Reader, we did not.',
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
      'Our first run to land on Strava with the club’s name on it. So many of us turned up that Shaghig started broadcasting her location so the stragglers could find us. This becomes a recurring feature.',
    stat: { value: '8 km', label: 'Diana Abgar Park, 22:00' },
    photos: 4,
  },
  {
    date: '2026-03-11',
    kind: 'place',
    title: 'Coffee at Ground Zero',
    story:
      'Meet 21:50. Stretch 21:55. Run 22:00. Coffee at Ground Zero on Saryan. We have changed café twice since — Prépa, then Coffee House — but not one of us has ever suggested skipping the coffee.',
    quote: { text: 'Thank you. Great run and so much fun.' },
    photos: 4,
  },
  {
    date: '2026-03-17',
    kind: 'quote',
    title: 'Standing by',
    story: 'One of us kept having to miss Tuesdays, and clearly felt terrible about it:',
    quote: { text: 'I hope I can stand by you like you do. It would truly make me happy and proud.' },
    photos: 2,
  },
  {
    date: '2026-03-21',
    kind: 'run',
    title: 'Breakfast run, and a scheme',
    story:
      'A few of us joined Yerevan’s Saturday breakfast run, and by the afternoon one of us was already proposing intervals and calisthenics as a weekly extra. The reply — “yesss it’s really a great idea, we will discuss this together” — is the most us thing in the entire archive.',
    photos: 3,
  },
  {
    date: '2026-03-28',
    kind: 'run',
    title: 'Walking counts',
    story:
      'We did fourteen kilometres and one of us immediately apologised for it: “if the part where I was walking back counts as finishing 😂 then maybe yes.” Shaghig, instantly: “Of course walking while running also counts. It’s totally normal, so you did amazing.” Case closed, forever.',
    stat: { value: '14 km', label: 'we did it 😮‍💨' },
    photos: 4,
  },
  {
    date: '2026-03-29',
    kind: 'race',
    title: 'Medals on two continents',
    race: 'gorge-run',
    story:
      'Our first race together: a 5K down in the Hrazdan gorge on Sunday morning. Meanwhile Subhav and Jebid were racing in India and sent the medal photo into the group at eight in the morning, Yerevan time.',
    quote: { text: 'Thank youuu! Sending love to Run Baby Run from 🇮🇳' },
    photos: 5,
  },
  {
    date: '2026-04-02',
    kind: 'run',
    title: 'And I found a new friend, Amir',
    quote: { text: 'Today’s run was great. Because of the weather. Also I had missed you guys. And I found a new friend, Amir.' },
    story: 'Amir, four hours later, having clearly had a nice time with us: “Thanks everyone, it was amazing time to run with you. Nice to meet you all ❤️”',
    photos: 3,
  },
  {
    date: '2026-04-04',
    kind: 'quote',
    title: 'Vote wisely',
    quote: { text: 'Btw keep in mind the long run will be around 20km (so vote wisely) 😂' },
    story: 'We put up a poll. The poll was a trap.',
    photos: 3,
  },
  {
    date: '2026-04-11',
    kind: 'milestone',
    title: 'A hundred of us in one month',
    quote: {
      text: '100 MEMBERS IN ONE MONTH. 100 people in just one month… amazing! This is more than a running group, it’s a family.',
    },
    stat: { value: '100', label: 'of us, one month in' },
  },
  {
    date: '2026-04-14',
    kind: 'place',
    title: 'We move Thursdays to Prépa',
    story:
      'New deal: Thursday mornings start and finish at Prépa on Saryan, and if you say you’re from Run Baby Run you get ten percent off breakfast. That evening one of us panicked about the forecast — four degrees! — and got the definitive answer.',
    quote: { text: 'No one freezes while running.', who: 'Astrig' },
    photos: 4,
  },
  {
    date: '2026-04-15',
    kind: 'quote',
    title: 'Who let the dogs out',
    story:
      'Two of us worked out we both had dogs and could run them together. A third immediately quoted the song. A fourth admitted to owning a dog but ruled out taking him anywhere.',
    quote: { text: 'I have a dog too but I’m definitely not taking him out myself 😂😂' },
    photos: 3,
  },
  {
    date: '2026-04-16',
    kind: 'run',
    title: 'A Russian lesson over breakfast',
    story:
      'One of us taught the table неужели — roughly “oh really”, the thing you say to a person who is late every single time — and then всего хорошего, which literally means: I wish you everything that might be good. Another confessed their technique for surviving our pace.',
    quote: { text: 'If I run and there is a green light but is going to turn red I prefer wait. So I can take my breath HAHAHA' },
    photos: 5,
  },
  {
    date: '2026-05-01',
    kind: 'run',
    title: 'The first of May',
    story:
      'Our biggest turnout of the spring. Some of us ran *in* from Arabkir and from the bridge on Azatutyan just to reach the start. Someone left a blue football behind in the park and told us to keep it. Someone filmed a reel. We were all extremely pleased with ourselves.',
    quote: { text: 'Thanks everyone for the amazing energy today! It was a pleasure meeting you all.' },
    photos: 8,
  },
  {
    date: '2026-05-02',
    kind: 'run',
    title: 'Thirty-two kilometres, before breakfast',
    story: 'Four of us. On a Saturday morning. For fun, allegedly.',
    stat: { value: '32 km', label: 'and then coffee' },
    photos: 4,
  },
  {
    date: '2026-05-04',
    kind: 'quote',
    title: 'Signed up for both by accident',
    quote: { text: 'Oh shoot i somehow thought the yerevan spring run was the same as the wings for life and i accidentally signed up for both hahaha😭' },
    story: 'Followed two minutes later by: “Yeah well i now have to do both lol im kinda excited too tbh.” This is how most of us end up doing most things.',
    photos: 3,
  },
  {
    date: '2026-05-09',
    kind: 'place',
    title: 'We book a table at Ambar',
    story:
      'The night before our double race day, with all of us quietly terrified, we handled the important logistics: six o’clock, Saryan 16, table reserved. We also worked out that you can turn up when your own distance starts and skip the opening ceremony, which was the most popular message of the week.',
    photos: 4,
  },
  {
    date: '2026-05-10',
    kind: 'race',
    title: 'Two races in one day',
    race: 'spring-run',
    story:
      'Spring Run at ten in the morning. Wings for Life at three in the afternoon. Twenty-three of us talking in the chat, a hundred and seventy-six photos by nightfall, caps and medals everywhere, and one of us doing both because of an admin error four days earlier.',
    photos: 10,
  },
  {
    date: '2026-05-19',
    kind: 'quote',
    title: 'Elapsed time always reveals the truth',
    quote: {
      text: 'Taking a 52-minute pause break in the middle of a route makes it a great hiking day, but definitely not a Half-Marathon PR. The “Elapsed Time” always reveals the truth.',
    },
    story: 'Strava: keeping us honest since March.',
    photos: 2,
  },
  {
    date: '2026-05-21',
    kind: 'pr',
    title: 'Sha’s fastest 5K',
    story: 'In the rain. Before work. Third-fastest kilometre of her life in the same run, just for good measure.',
    stat: { value: 'PR', label: 'fastest 5K · Sha' },
    photos: 4,
  },
  {
    date: '2026-05-23',
    kind: 'race',
    title: 'Our PR race',
    race: 'one-run',
    quote: { text: 'Good job to everyone ❤️❤️ you guys were amazing and a lot of you did their PR today ✨', who: 'Shaghig' },
    story: 'And for the one of us convinced they had blown it, Akshy: “Don’t worry! We all saw you crushing the 10k PR 🫡”',
    photos: 8,
  },
  {
    date: '2026-06-03',
    kind: 'milestone',
    title: 'Our promo code is literally run_baby_run',
    story:
      'Yerevan Marathon gave us a ten percent discount code, and the code is our own name. The same day turned out to be International Day of Runners, which none of us knew existed, and we spent an hour hunting for a proper track to do 800m repeats on. The best suggestion was the railway station.',
    quote: { text: 'Ppl joking that you may run along train platform. It’s straight and public and even has WC 🤣' },
    photos: 3,
  },
  {
    date: '2026-06-07',
    kind: 'quote',
    title: 'Anyone fancy nine o’clock?',
    quote: { text: 'Heyy 👋🏼 is there anyone who wants to run with me tonight at 9 PM? Maybe the usual route but we can change it a bit.' },
    story: 'Not on our schedule. Not announced. Just one of us asking on a Sunday evening, and that being enough.',
    photos: 4,
  },
  {
    date: '2026-06-10',
    kind: 'run',
    title: 'A birthday, and we all get emotional',
    story:
      'Bahieh’s birthday, a genuinely fast Tuesday, and then we completely lost our composure at half past midnight. One of us registered for the full marathon on the spot. Another produced this, unprompted:',
    quote: { text: 'Speed is a talent, but consistency is a character trait. You have both.' },
    photos: 6,
  },
  {
    date: '2026-06-14',
    kind: 'race',
    title: 'Beat Run at Shahumyan Square',
    race: 'beat-run',
    photosAfter: '18:00',
    story:
      'Five kilometres in the evening, a crowd of us in matching shirts, and the eternal question from someone who had never met any of us: how will I find you? Our answer: “You will find us and we will know you and you will know us afterwards 😂”',
    photos: 8,
  },
  {
    date: '2026-06-17',
    kind: 'quote',
    title: 'Happy birthday Mark',
    story:
      'Seven of us wished him happy birthday between midnight and 1:15am, including one from a different continent. Best description of a clubmate we have:',
    quote: { text: 'happy birthday @Mark our kind-hearted runner 🩷💚🤘🏻🫂' },
    photos: 3,
  },
  {
    date: '2026-06-18',
    kind: 'pr',
    title: 'Inga’s fastest 5K',
    story: 'On a Thursday morning, on a normal run with the rest of us, and she threw in her second-fastest mile too. Our response was “Wooooohoooooo”, which feels correct.',
    stat: { value: 'PR', label: 'fastest 5K · Inga' },
    photos: 5,
  },
  {
    date: '2026-06-20',
    kind: 'run',
    title: 'Morning people',
    story:
      'Thirteen kilometres from Kond tunnel at seven in the morning. At 01:23 one of us had already posted the eternal complaint. One of us lost to their own alarm and said so. Mehrdad summed up our group-photo discipline exactly: “someone was super dedicated to running, as you see they didn’t stop for one proper picture 😂”',
    quote: { text: 'Helloooo guyssssss, quick question, why you’re running so early 🥲 I can’t understand “morning people” but here trying my best 😆' },
    photos: 8,
  },
  {
    date: '2026-06-25',
    kind: 'run',
    title: 'The brownies morning',
    story:
      'One of us brought brownies to a Thursday run. It escalated. Three of us thanked the brownies in writing, including one who didn’t get any and thanked them anyway on the strength of reviews.',
    quote: { text: 'Thank you everyone for joining and turning a normal morning to a wonderful memory 🫶 And thanks for the amazing brownies 🫰' },
    photos: 8,
  },
  {
    date: '2026-06-27',
    kind: 'quote',
    title: 'Can I just come for the coffee?',
    quote: { text: 'I want to meeting you for the my first time, but it’s a bit late now. Can I just join for coffee after? I’m going to do my 8km now' },
    story: 'Yes. Obviously yes.',
    photos: 4,
  },
  {
    date: '2026-06-28',
    kind: 'pr',
    title: 'Ten kilometres in thirty minutes',
    story:
      'The message that broke our chat that morning was four question marks long: “He finished 10k in 30 mins????” He had. In the same thread one of us was quietly delighted with 56:30, which is this whole club in two lines.',
    stat: { value: '30:00', label: '10K · Hov' },
    photos: 5,
  },
  {
    date: '2026-06-30',
    kind: 'quote',
    title: 'Our best rule',
    quote: { text: 'If you’re not joining, you don’t have to inform us, just come whenever you can 🩷💚' },
    story: 'One of us had apologised for missing a Tuesday. None of us has needed to since.',
    photos: 3,
  },
  {
    date: '2026-07-02',
    kind: 'run',
    title: 'Our busiest Thursday yet',
    quote: { text: 'I just realized that for a Thursday morning, we had the most people today. Hope you all enjoyed the run as much as we did! See you on next time runner babies ✨' },
    story: 'Thirty-nine photographs out of one morning. We also decided our next video would be the funny one.',
    photos: 8,
  },
  {
    date: '2026-07-04',
    kind: 'race',
    title: 'Half past nine at night, from Republic Square',
    race: 'night-race',
    story:
      'The Tricolor night race: 5K and 10K straight through the middle of the city at 21:30. We picked up bibs the day before, got T-shirts on site, and started congratulating Jebid before midnight and didn’t stop until about one in the morning.',
    photos: 6,
  },
  {
    date: '2026-07-05',
    kind: 'quote',
    title: 'One minute run, two minutes walk',
    story: 'Someone brand new, being extremely brave in front of all of us:',
    quote: { text: 'I just started running for the first time and am so excited to join you and run with you. But what im practicing now is 1min run, 2min fast walk. So thought i cannot join you yet..' },
    photos: 4,
  },
  {
    date: '2026-07-08',
    kind: 'run',
    title: 'UltramarathonArmenia come out with us',
    quote: {
      text: 'Dear all, first of all thank you to the leader of this club for inviting UltramarathonArmenia to this run, it was pleasure to meet you all.',
    },
    story: 'They ran with us, then pointed out their co-founder had been standing right there the whole time — “one of the most kindest people on planet earth” — and asked us not to bother her, as she was with her family.',
    photos: 5,
  },
  {
    date: '2026-07-09',
    kind: 'milestone',
    title: 'Our Thursdays start doing some good',
    story:
      'Friends at Yerevan Run and Founders Running Club started a charity push for a children’s playground, and from that week our Thursday runs quietly counted towards it. One of us read the message from Pennsylvania and did her run that day to support it.',
    quote: { text: 'Thursday runs are special 🤩 They make the whole day better' },
    photos: 6,
  },
  {
    date: '2026-07-11',
    kind: 'quote',
    title: 'There are no after pictures',
    quote: { text: 'And there is no “after” pictures because it’s too much traumatic? 🫣' },
    story: 'Sixteen kilometres in July. There were, in fairness, no after pictures.',
    photos: 3,
  },
  {
    date: '2026-07-15',
    kind: 'quote',
    title: 'We forgot to cool down',
    quote: { text: 'I just remembered we didn’t cool down last night 😅 If my yoga teacher finds out she kills me, although now she’s a real estate agent in Dubai.' },
    photos: 3,
  },
  {
    date: '2026-07-16',
    kind: 'place',
    title: 'The great Prépa misunderstanding',
    story:
      'For about six hours we believed our ten percent discount was gone, and we took it about as calmly as you would expect. It turned out there was a new person working there who hadn’t been told about us. Crisis over. Breakfast saved.',
    photos: 5,
  },
  {
    date: '2026-07-18',
    kind: 'pr',
    title: 'Twelve kilometres in an hour',
    quote: { text: 'Today such a good day i i completed new record 12 km in 1 hour' },
    stat: { value: '12 km', label: 'in 60 minutes' },
    photos: 3,
  },
  {
    date: '2026-07-28',
    kind: 'milestone',
    title: 'We outgrow our own route',
    story:
      'We moved the warm-up spot and changed the route, for the nicest reason a running club can have: there were simply too many of us for the old one.',
    quote: { text: 'Please pay attention that the route and the warm up locations have changed, because the previous route is crowded' },
    photos: 4,
  },
  {
    date: '2026-08-01',
    kind: 'race',
    title: 'A race with our name on it',
    race: 'yerevan-run',
    story:
      'HamaliRun × Run Baby Run: a 5K in the gorge with real finisher medals, water and snacks, and us on the organising side of the table for the first time. Our photos and video were in a shared folder by the evening.',
    quote: { text: 'Thank you everyone for coming and thank you to the ones who helped us ❤️ You’re the best!!' },
    photos: 10,
  },
  {
    date: '2026-08-02',
    kind: 'run',
    title: 'Feet that kiss the ground',
    story:
      'The morning after our race turned into a form clinic in the chat: land under your centre of mass, not out in front; small steps, high cadence; midfoot first. Then a newcomer in Arabkir asked how to avoid hills in Yerevan and we had to break it to him gently.',
    quote: { text: 'My running coach used to say, it’s as if your feet kiss the ground.' },
    photos: 5,
  },
  {
    date: '2026-08-07',
    kind: 'quote',
    title: 'Hi all, my name is Taylor',
    story:
      'Two strangers introduced themselves to us within six minutes of each other, both living in Yerevan for a while. This happens to us most weeks. It has never once been a problem.',
    quote: { text: 'I am looking forward to receiving more information and hopefully joining for a group run one of these days!' },
    photos: 3,
  },
  {
    date: '2026-08-08',
    kind: 'milestone',
    title: 'Our shirt wins an age group in America',
    quote: { text: 'Representing the Run baby run shirt at a race in the US! 🩷💚 5-mile/8km race and my friend and I won our age group 😅' },
    story: 'We asked to put it on the club story and were given permission within sixty seconds.',
    photos: 3,
  },
  {
    date: '2026-08-13',
    kind: 'quote',
    title: 'The dog put his paw on my hand',
    quote: { text: 'You don’t have a picture when dog put his paw on my hand? 😭' },
    story: 'A dog joined our Thursday run. A dog frequently joins our Thursday run. Our photographic record was, on this occasion, inadequate.',
    photos: 4,
  },
  {
    date: '2026-08-15',
    kind: 'run',
    title: 'Six of us go further than we ever have',
    story:
      'A Saturday long run where three of us did a half marathon and six others quietly broke their own distance record. The roll call afterwards named every single one of us.',
    quote: { text: 'I love long runs because of you all 💕🩷' },
    photos: 5,
  },
  {
    date: '2026-08-23',
    kind: 'race',
    title: 'Vanadzor Half Marathon',
    race: 'vanadzor-half',
    story:
      'Twenty-one kilometres out of the city, with a club discount code that was — again — just our name shouted in capitals. One of us came 34th out of 106 and took twenty minutes off his own best.',
    stat: { value: '1:55', label: '21 km · 20 minutes faster' },
    photos: 4,
  },
  {
    date: '2026-08-24',
    kind: 'quote',
    title: 'Normal is crazy, crazy is normal',
    story:
      'Someone asked us, reasonably, for a route without traffic lights and stops. We told them about the Hrazdan Gorge, and then told them the truth about everywhere else in Yerevan.',
    quote: { text: 'To us normal is crazy, or crazy is normal, not sure exactly 😅 lost track...' },
    photos: 3,
  },
  {
    date: '2026-08-29',
    kind: 'pr',
    title: 'Two records, one Saturday',
    story: 'A half marathon five minutes quicker than ever before, and another of us setting a PR in the same thread.',
    stat: { value: '−5:00', label: 'half marathon PR' },
    photos: 3,
  },
  {
    date: '2026-09-01',
    kind: 'milestone',
    title: 'Shirts',
    story:
      'Our T-shirts arrived and we handed them out after the Tuesday run rather than before, because none of us wanted to carry one for eight kilometres.',
    photos: 5,
  },
  {
    date: '2026-09-06',
    kind: 'run',
    title: 'Early, to beat the sun',
    story:
      'Sunday at 6:30, moved earlier because two of us were going for thirty kilometres and we all wanted to be finished before the heat. One of us offered to bring coffee and food to the finish, and helpfully pointed out there’s a pulpulak right there for water.',
    quote: { text: 'I couldn’t sleep tonight either... I only slept for two hours. I think I’ll feel unwell from running that much, but I’ll definitely join next time 🥹' },
    photos: 5,
  },
  {
    date: '2026-09-08',
    kind: 'milestone',
    title: 'We get a website',
    story:
      'runbabyrun.fun went up with all our Stravas on it, and the very next message was the only possible one: mine’s missing, add me.',
    photos: 4,
  },
];

/** Newest first, which is how the diary reads. */
export const diary = [...entries].sort((a, b) => b.date.localeCompare(a.date));
