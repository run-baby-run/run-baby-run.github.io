/**
 * Our own words about each plan.
 *
 * The figures in plans.ts are COROS's and are reproduced as facts; everything
 * written here is ours. Each plan credits and links to the original.
 */
export interface PlanNote {
  slug: string;
  /** What we call it, which is plainer than what COROS calls it. */
  name: string;
  distance: string;
  /** One line for the list. */
  blurb: string;
  /** A paragraph at the top of the plan itself. */
  intro: string;
  /** Who should not pick this one. */
  instead?: string;
}

export const notes: PlanNote[] = [
  {
    slug: 'half-marathon-beginner-pace',
    name: 'First half marathon',
    distance: '21.1 km',
    blurb: 'Twelve weeks to your first half, with a pace written on every run.',
    intro:
      'The one to start with. Five runs most weeks, and nearly all of them slow — the hard days only work because the easy days were genuinely easy. Every session tells you the pace to hold, so there is nothing to work out on the night.',
    instead:
      'If you run mostly on hills, or through a Yerevan July, take the heart-rate version instead: pace lies in both.',
  },
  {
    slug: 'half-marathon-beginner-hr',
    name: 'First half marathon, by heart rate',
    distance: '21.1 km',
    blurb: 'The same twelve weeks, steered by heart rate rather than pace.',
    intro:
      'The same plan as the first, with the targets given as heart rate. Better on hills and in heat, where a given pace costs far more than it does on a cool flat night, and your watch is the only honest judge of how hard you are working.',
  },
  {
    slug: 'half-marathon-hr',
    name: 'Half marathon, second time round',
    distance: '21.1 km',
    blurb: 'Thirteen weeks and more sessions, for a half you have already done once.',
    intro:
      'For anyone who has finished a half and wants the next one to be quicker. More sessions than the beginners’ plans and a longer run at the end of each week, all led by heart rate.',
    instead: 'If this is your first, start with the twelve-week plan — this one assumes the miles are already in your legs.',
  },
  {
    slug: 'marathon-4-00-4-30',
    name: 'Marathon, four to four and a half hours',
    distance: '42.2 km',
    blurb: 'Thirteen weeks and 549 km, aimed at a four to four-and-a-half hour finish.',
    intro:
      'A marathon build for a specific finish time, so it only makes sense if that time is roughly within reach — a half marathon somewhere near two hours. The Saturday long run is the plan; everything else exists to let you keep doing it.',
  },
];

export const byPlan = new Map(notes.map((n) => [n.slug, n]));
