/**
 * Strava figures for the club, transcribed from each athlete's side-by-side
 * comparison view on 8 September 2026. Anyone read since carries their own
 * `captured` date: Agnesa on 10 September, Hovig on 13 September, Arman and a
 * refreshed Pouria on 27 September.
 *
 * A snapshot, not a live feed: Strava's API only exposes an athlete's own
 * detailed stats, so these cannot be refreshed automatically. Best efforts are
 * Strava's own estimates and are occasionally inconsistent across distances.
 */

export interface Best {
  label: string;
  time: string;
}

export interface Totals {
  activities: number;
  distanceKm: number;
  time: string;
  elevationM: number;
}

export interface AthleteStats {
  /** Matches a name in members.ts, or a founder/leader in site.ts. */
  member: string;
  stravaName: string;
  location?: string;
  recent: {
    activitiesPerWeek: number;
    distancePerWeekKm: number;
    timePerWeek: string;
    elevationPerWeekM: number;
  };
  bests: Best[];
  thisYear: Totals;
  allTime: Totals;
  highlight?: string;
  /**
   * Strava athlete id. Only needed for people not yet on the members page
   * (no photo); otherwise the id on their member record is used.
   */
  strava?: string;
  /**
   * When this runner's figures were read, if not on the set-wide date below.
   * Their own page shows this rather than `captured`, because a page dated
   * three weeks before the numbers on it is simply wrong.
   */
  captured?: string;
}

export const captured = '8 September 2026';

export const stats: AthleteStats[] = [
  {
    member: 'Pouria',
    stravaName: 'Pouria Jahandideh',
    captured: '19 October 2026',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 13.7, timePerWeek: '1h 26m', elevationPerWeekM: 85 },
    bests: [
      { label: '400m', time: '45s' },
      { label: '½ mile', time: '1:52' },
      { label: '1K', time: '2:22' },
      { label: '1 mile', time: '6:13' },
      { label: '2 mile', time: '15:37' },
      { label: '5K', time: '24:11' },
      { label: '10K', time: '49:27' },
      { label: '15K', time: '1:19:23' },
      { label: '10 mile', time: '1:26:13' },
      { label: '20K', time: '1:52:06' },
      { label: 'Half-Marathon', time: '1:58:32' },
      { label: '30K', time: '3:17:10' },
      { label: 'Marathon', time: '4:59:34' },
    ],
    thisYear: { activities: 89, distanceKm: 688, time: '81h 12m', elevationM: 6229 },
    allTime: { activities: 753, distanceKm: 4217.9, time: '534h 55m', elevationM: 50235 },
    highlight: 'Ran his fastest ever 30K (3:17:10)',
  },
  {
    member: 'Yeva',
    captured: '19 October 2026',
    stravaName: 'Yeva H',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 4, timePerWeek: '27m 6s', elevationPerWeekM: 0 },
    bests: [
      { label: '400m', time: '1:41' },
      { label: '½ mile', time: '3:16' },
      { label: '1K', time: '4:35' },
      { label: '1 mile', time: '8:32' },
      { label: '2 mile', time: '17:44' },
      { label: '5K', time: '28:15' },
      { label: '10K', time: '58:43' },
      { label: '15K', time: '1:30:07' },
      { label: '10 mile', time: '1:37:30' },
    ],
    thisYear: { activities: 16, distanceKm: 139.1, time: '15h 8m', elevationM: 957 },
    allTime: { activities: 16, distanceKm: 139.1, time: '15h 8m', elevationM: 957 },
    highlight: 'Local Legend of Keru-Barbyus Backstreets downhill',
  },
  {
    member: 'Tagouhi',
    captured: '19 October 2026',
    stravaName: 'Tagouhi Manoukian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 8.9, timePerWeek: '1h 22m', elevationPerWeekM: 66 },
    bests: [
      { label: '400m', time: '2:05' },
      { label: '½ mile', time: '4:20' },
      { label: '1K', time: '6:11' },
      { label: '1 mile', time: '10:00' },
      { label: '2 mile', time: '20:56' },
      { label: '5K', time: '33:50' },
      { label: '10K', time: '1:19:52' },
      { label: '15K', time: '2:08:34' },
      { label: '10 mile', time: '2:19:13' },
      { label: '20K', time: '3:02:10' },
      { label: 'Half-Marathon', time: '3:14:29' },
    ],
    thisYear: { activities: 62, distanceKm: 329.6, time: '43h 49m', elevationM: 3690 },
    allTime: { activities: 62, distanceKm: 329.6, time: '43h 49m', elevationM: 3690 },
  },
  {
    member: 'Soheil',
    captured: '19 October 2026',
    stravaName: 'Soheil Qorbani',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 19.1, timePerWeek: '2h 23m', elevationPerWeekM: 144 },
    bests: [
      { label: '400m', time: '1:37' },
      { label: '½ mile', time: '3:56' },
      { label: '1K', time: '5:03' },
      { label: '1 mile', time: '8:48' },
      { label: '2 mile', time: '18:39' },
      { label: '5K', time: '31:38' },
      { label: '10K', time: '1:06:40' },
      { label: '15K', time: '1:41:24' },
      { label: '10 mile', time: '1:48:39' },
      { label: '20K', time: '2:17:29' },
      { label: 'Half-Marathon', time: '3:04:08' },
    ],
    thisYear: { activities: 62, distanceKm: 378.2, time: '44h 0m', elevationM: 2760 },
    allTime: { activities: 62, distanceKm: 378.2, time: '44h 0m', elevationM: 2760 },
    highlight: 'Second-fastest 10K this week (1:11:56)',
  },
  {
    member: 'Sha',
    captured: '19 October 2026',
    stravaName: 'Sha Melikian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 4.9, timePerWeek: '38m 31s', elevationPerWeekM: 133 },
    bests: [
      { label: '400m', time: '1:05' },
      { label: '½ mile', time: '2:30' },
      { label: '1K', time: '3:55' },
      { label: '1 mile', time: '8:29' },
      { label: '2 mile', time: '21:00' },
      { label: '5K', time: '33:09' },
      { label: '10K', time: '1:09:18' },
      { label: '15K', time: '1:55:34' },
      { label: '10 mile', time: '2:06:04' },
      { label: '20K', time: '2:39:39' },
    ],
    thisYear: { activities: 49, distanceKm: 381.2, time: '46h 35m', elevationM: 6091 },
    allTime: { activities: 49, distanceKm: 381.2, time: '46h 35m', elevationM: 6091 },
    highlight: 'Set a 15K best of 1:59:19',
  },
  {
    member: 'Sabrina',
    captured: '19 October 2026',
    stravaName: 'Sabrina Khachikyan',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 3.5, timePerWeek: '28m 16s', elevationPerWeekM: 38 },
    bests: [
      { label: '400m', time: '1:11' },
      { label: '½ mile', time: '2:59' },
      { label: '1K', time: '4:13' },
      { label: '1 mile', time: '8:09' },
      { label: '2 mile', time: '19:39' },
      { label: '5K', time: '38:35' },
    ],
    thisYear: { activities: 12, distanceKm: 64.4, time: '8h 10m', elevationM: 556 },
    allTime: { activities: 12, distanceKm: 64.4, time: '8h 10m', elevationM: 556 },
    highlight: 'Took six and a half minutes off her 5K (42:01)',
  },
  {
    member: 'Narek',
    captured: '19 October 2026',
    stravaName: 'Narek Nazari',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 5, timePerWeek: '31m 22s', elevationPerWeekM: 28 },
    bests: [
      { label: '400m', time: '1:19' },
      { label: '½ mile', time: '3:41' },
      { label: '1K', time: '4:41' },
      { label: '1 mile', time: '7:48' },
      { label: '2 mile', time: '17:02' },
      { label: '5K', time: '27:29' },
      { label: '10K', time: '57:32' },
      { label: '15K', time: '1:30:20' },
      { label: '10 mile', time: '1:37:59' },
    ],
    thisYear: { activities: 67, distanceKm: 443.4, time: '48h 33m', elevationM: 3216 },
    allTime: { activities: 252, distanceKm: 1134.2, time: '121h 20m', elevationM: 5109 },
  },
  {
    member: 'Moojan',
    captured: '19 October 2026',
    stravaName: 'Moojan Ebadi',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 12, timePerWeek: '1h 22m', elevationPerWeekM: 109 },
    bests: [
      { label: '400m', time: '1:47' },
      { label: '½ mile', time: '3:03' },
      { label: '1K', time: '4:24' },
      { label: '1 mile', time: '9:03' },
      { label: '2 mile', time: '22:40' },
      { label: '5K', time: '37:07' },
      { label: '10K', time: '1:41:19' },
    ],
    thisYear: { activities: 76, distanceKm: 398.3, time: '50h 45m', elevationM: 4243 },
    allTime: { activities: 76, distanceKm: 398.3, time: '50h 45m', elevationM: 4243 },
    highlight: 'Starting her running era in Yerevan',
  },
  {
    member: 'Mohsen',
    captured: '19 October 2026',
    stravaName: 'Mohsen Pakbaz',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 0, distancePerWeekKm: 0.7, timePerWeek: '4m 35s', elevationPerWeekM: 3 },
    bests: [
      { label: '400m', time: '59s' },
      { label: '½ mile', time: '1:52' },
      { label: '1K', time: '3:07' },
      { label: '1 mile', time: '7:11' },
      { label: '2 mile', time: '17:20' },
      { label: '5K', time: '28:35' },
      { label: '10K', time: '1:03:22' },
    ],
    thisYear: { activities: 40, distanceKm: 215.3, time: '25h 9m', elevationM: 2571 },
    allTime: { activities: 40, distanceKm: 215.3, time: '25h 9m', elevationM: 2571 },
  },
  {
    member: 'Michael',
    captured: '19 October 2026',
    stravaName: 'Michael Jalkejian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 9.2, timePerWeek: '1h 5m', elevationPerWeekM: 90 },
    bests: [
      { label: '400m', time: '1:04' },
      { label: '½ mile', time: '4:17' },
      { label: '1K', time: '5:35' },
      { label: '1 mile', time: '9:58' },
      { label: '2 mile', time: '20:20' },
      { label: '5K', time: '32:57' },
      { label: '10K', time: '1:09:52' },
      { label: '15K', time: '2:03:38' },
    ],
    thisYear: { activities: 53, distanceKm: 285.7, time: '33h 59m', elevationM: 2812 },
    allTime: { activities: 62, distanceKm: 323.6, time: '38h 27m', elevationM: 3318 },
    highlight: 'Fastest 15K two days ago (2:03:38)',
  },
  {
    member: 'Mahty',
    captured: '19 October 2026',
    stravaName: 'Mahty Garjasi',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 0, distancePerWeekKm: 1.2, timePerWeek: '8m 4s', elevationPerWeekM: 8 },
    bests: [
      { label: '400m', time: '44s' },
      { label: '½ mile', time: '1:42' },
      { label: '1K', time: '4:29' },
      { label: '1 mile', time: '4:04' },
      { label: '2 mile', time: '16:45' },
      { label: '5K', time: '27:44' },
      { label: '10K', time: '49:37' },
      { label: '15K', time: '1:20:18' },
      { label: '10 mile', time: '1:30:16' },
      { label: '20K', time: '2:01:05' },
      { label: 'Half-Marathon', time: '2:07:10' },
    ],
    thisYear: { activities: 43, distanceKm: 272.5, time: '29h 3m', elevationM: 2298 },
    allTime: { activities: 357, distanceKm: 1050, time: '167h 1m', elevationM: 15340 },
    highlight: 'Completed the September 5K x Brooks Challenge',
  },
  {
    member: 'Jebid',
    captured: '19 October 2026',
    stravaName: 'Jebid Jouharian',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 18.9, timePerWeek: '1h 49m', elevationPerWeekM: 4 },
    bests: [
      { label: '400m', time: '59s' },
      { label: '½ mile', time: '3:09' },
      { label: '1K', time: '4:04' },
      { label: '1 mile', time: '7:21' },
      { label: '2 mile', time: '15:09' },
      { label: '5K', time: '24:04' },
      { label: '10K', time: '52:02' },
      { label: '15K', time: '1:20:47' },
      { label: '10 mile', time: '1:26:46' },
      { label: '20K', time: '1:50:14' },
      { label: 'Half-Marathon', time: '2:06:22' },
      { label: '30K', time: '3:10:33' },
      { label: 'Marathon', time: '4:35:01' },
    ],
    thisYear: { activities: 114, distanceKm: 955.2, time: '99h 51m', elevationM: 7581 },
    allTime: { activities: 170, distanceKm: 1272.2, time: '131h 28m', elevationM: 10367 },
  },
  {
    member: 'Inga',
    captured: '19 October 2026',
    stravaName: 'Inga Sargsyan',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 0, distancePerWeekKm: 0, timePerWeek: '0h 0m', elevationPerWeekM: 0 },
    bests: [
      { label: '400m', time: '1:25' },
      { label: '½ mile', time: '2:52' },
      { label: '1K', time: '2:36' },
      { label: '1 mile', time: '6:40' },
      { label: '2 mile', time: '16:56' },
      { label: '5K', time: '30:05' },
      { label: '10K', time: '1:06:04' },
      { label: '15K', time: '1:54:44' },
      { label: '10 mile', time: '2:04:38' },
      { label: '20K', time: '2:39:48' },
      { label: 'Half-Marathon', time: '2:48:15' },
    ],
    thisYear: { activities: 18, distanceKm: 144.1, time: '16h 34m', elevationM: 1196 },
    allTime: { activities: 19, distanceKm: 150.2, time: '17h 33m', elevationM: 1270 },
    highlight: 'Ran her first half marathon in Vanadzor',
  },
  {
    member: 'Hrag',
    captured: '19 October 2026',
    stravaName: 'Hrag Stanboulian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 31.1, timePerWeek: '3h 5m', elevationPerWeekM: 290 },
    bests: [
      { label: '400m', time: '1:07' },
      { label: '½ mile', time: '2:49' },
      { label: '1K', time: '3:30' },
      { label: '1 mile', time: '5:42' },
      { label: '2 mile', time: '12:08' },
      { label: '5K', time: '19:58' },
      { label: '10K', time: '42:51' },
      { label: '15K', time: '1:10:01' },
      { label: '10 mile', time: '1:15:37' },
      { label: '20K', time: '1:34:21' },
      { label: 'Half-Marathon', time: '1:40:31' },
      { label: '30K', time: '2:41:09' },
      { label: 'Marathon', time: '3:54:15' },
    ],
    thisYear: { activities: 67, distanceKm: 710.4, time: '70h 12m', elevationM: 6711 },
    allTime: { activities: 117, distanceKm: 1208.7, time: '121h 22m', elevationM: 11328 },
  },
  {
    member: 'Har Hov',
    captured: '19 October 2026',
    stravaName: 'Hov Har',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 39.6, timePerWeek: '3h 47m', elevationPerWeekM: 379 },
    bests: [
      { label: '400m', time: '49s' },
      { label: '½ mile', time: '2:01' },
      { label: '1K', time: '2:23' },
      { label: '1 mile', time: '5:34' },
      { label: '2 mile', time: '10:26' },
      { label: '5K', time: '20:29' },
      { label: '10K', time: '41:57' },
      { label: '15K', time: '1:05:18' },
      { label: '10 mile', time: '1:10:30' },
      { label: '20K', time: '1:28:54' },
      { label: 'Half-Marathon', time: '1:33:48' },
      { label: '30K', time: '2:26:07' },
    ],
    thisYear: { activities: 103, distanceKm: 1000.3, time: '93h 41m', elevationM: 9633 },
    allTime: { activities: 133, distanceKm: 1239.3, time: '113h 33m', elevationM: 12113 },
    highlight: 'Fastest 30K on a 30km club long run (3:03:24)',
  },
  {
    member: 'Hayk',
    captured: '19 October 2026',
    stravaName: 'Hayk Hambardzumyan',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 27, timePerWeek: '2h 40m', elevationPerWeekM: 204 },
    bests: [
      { label: '400m', time: '45s' },
      { label: '½ mile', time: '1:57' },
      { label: '1K', time: '2:12' },
      { label: '1 mile', time: '5:16' },
      { label: '2 mile', time: '13:34' },
      { label: '5K', time: '23:00' },
      { label: '10K', time: '47:43' },
      { label: '15K', time: '1:14:25' },
      { label: '10 mile', time: '1:21:07' },
      { label: '20K', time: '1:43:38' },
      { label: 'Half-Marathon', time: '1:50:11' },
      { label: '30K', time: '2:51:53' },
      { label: 'Marathon', time: '4:06:17' },
    ],
    thisYear: { activities: 71, distanceKm: 700.4, time: '72h 13m', elevationM: 5240 },
    allTime: { activities: 71, distanceKm: 700.4, time: '72h 13m', elevationM: 5240 },
    highlight: 'Fastest 30K (3:01:54) on the club long run',
  },
  {
    member: 'Avak',
    captured: '19 October 2026',
    stravaName: 'Avak K',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 14.7, timePerWeek: '1h 34m', elevationPerWeekM: 115 },
    bests: [
      { label: '400m', time: '44s' },
      { label: '½ mile', time: '2:38' },
      { label: '1K', time: '3:51' },
      { label: '1 mile', time: '7:40' },
      { label: '2 mile', time: '17:21' },
      { label: '5K', time: '28:45' },
      { label: '10K', time: '57:40' },
      { label: '15K', time: '1:30:12' },
      { label: '10 mile', time: '1:37:01' },
      { label: '20K', time: '2:02:22' },
      { label: 'Half-Marathon', time: '2:10:43' },
    ],
    thisYear: { activities: 56, distanceKm: 308.8, time: '34h 18m', elevationM: 2531 },
    allTime: { activities: 56, distanceKm: 308.8, time: '34h 18m', elevationM: 2531 },
  },
  {
    member: 'Ashot',
    captured: '19 October 2026',
    stravaName: 'Ashot H.',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 11.3, timePerWeek: '1h 6m', elevationPerWeekM: 172 },
    bests: [
      { label: '400m', time: '1:19' },
      { label: '½ mile', time: '2:57' },
      { label: '1K', time: '3:41' },
      { label: '1 mile', time: '6:11' },
      { label: '2 mile', time: '9:23' },
      { label: '5K', time: '21:13' },
      { label: '10K', time: '56:06' },
      { label: '15K', time: '1:31:22' },
      { label: '10 mile', time: '1:38:01' },
    ],
    thisYear: { activities: 25, distanceKm: 232, time: '23h 17m', elevationM: 2486 },
    allTime: { activities: 25, distanceKm: 232, time: '23h 17m', elevationM: 2486 },
    highlight: 'Second-fastest 10K yesterday (56:59)',
  },
  {
    member: 'Asdghig',
    captured: '19 October 2026',
    stravaName: 'Asdghig Jouharian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 19.8, timePerWeek: '2h 18m', elevationPerWeekM: 135 },
    bests: [
      { label: '400m', time: '58s' },
      { label: '½ mile', time: '2:58' },
      { label: '1K', time: '4:17' },
      { label: '1 mile', time: '8:35' },
      { label: '2 mile', time: '18:59' },
      { label: '5K', time: '30:22' },
      { label: '10K', time: '1:03:56' },
      { label: '15K', time: '1:36:58' },
      { label: '10 mile', time: '1:44:02' },
      { label: '20K', time: '2:09:48' },
      { label: 'Half-Marathon', time: '2:17:16' },
    ],
    thisYear: { activities: 109, distanceKm: 759.2, time: '92h 59m', elevationM: 7536 },
    allTime: { activities: 146, distanceKm: 910.9, time: '111h 41m', elevationM: 9249 },
    highlight: 'Fastest 10 miles two days ago (2:06:46)',
  },
  {
    member: 'Arman',
    stravaName: 'Arman Hovsepyan',
    location: 'Yerevan',
    captured: '19 October 2026',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 17.9, timePerWeek: '1h 36m', elevationPerWeekM: 149 },
    bests: [
      { label: '400m', time: '1:03' },
      { label: '½ mile', time: '2:12' },
      { label: '1K', time: '3:13' },
      { label: '1 mile', time: '5:59' },
      { label: '2 mile', time: '12:19' },
      { label: '5K', time: '19:24' },
      { label: '10K', time: '41:18' },
      { label: '15K', time: '1:08:03' },
      { label: '10 mile', time: '1:12:53' },
      { label: '20K', time: '1:30:44' },
      { label: 'Half-Marathon', time: '1:36:18' },
    ],
    thisYear: { activities: 39, distanceKm: 322.8, time: '43h 7m', elevationM: 2371 },
    allTime: { activities: 39, distanceKm: 322.8, time: '43h 7m', elevationM: 2371 },
    highlight: 'Four personal bests in one morning, including a 41:18 10K',
  },
  {
    member: 'Aram',
    captured: '19 October 2026',
    stravaName: 'Aram V',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 2.8, timePerWeek: '18m 1s', elevationPerWeekM: 26 },
    bests: [
      { label: '400m', time: '43s' },
      { label: '½ mile', time: '1:50' },
      { label: '1K', time: '3:00' },
      { label: '1 mile', time: '5:48' },
      { label: '2 mile', time: '11:16' },
      { label: '5K', time: '24:33' },
      { label: '10K', time: '53:05' },
      { label: '15K', time: '1:28:19' },
      { label: '10 mile', time: '1:35:21' },
      { label: '20K', time: '2:06:36' },
      { label: 'Half-Marathon', time: '3:12:34' },
    ],
    thisYear: { activities: 98, distanceKm: 689.1, time: '76h 38m', elevationM: 9002 },
    allTime: { activities: 123, distanceKm: 849.7, time: '95h 24m', elevationM: 10556 },
  },
  {
    member: 'Akshy',
    captured: '19 October 2026',
    stravaName: 'Akshy Balasubramaniyam',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 6, distancePerWeekKm: 63.9, timePerWeek: '6h 16m', elevationPerWeekM: 529 },
    bests: [
      { label: '400m', time: '1:21' },
      { label: '½ mile', time: '2:03' },
      { label: '1K', time: '3:13' },
      { label: '1 mile', time: '6:51' },
      { label: '2 mile', time: '13:52' },
      { label: '5K', time: '21:56' },
      { label: '10K', time: '43:59' },
      { label: '15K', time: '1:07:19' },
      { label: '10 mile', time: '1:12:21' },
      { label: '20K', time: '1:30:53' },
      { label: 'Half-Marathon', time: '1:36:03' },
      { label: '30K', time: '2:27:12' },
      { label: 'Marathon', time: '3:30:06' },
    ],
    thisYear: { activities: 192, distanceKm: 1874.5, time: '187h 50m', elevationM: 13242 },
    allTime: { activities: 192, distanceKm: 1874.5, time: '187h 50m', elevationM: 13242 },
    highlight: 'Finished the September Run 100K Challenge',
  },
  {
    member: 'Shaghig',
    captured: '19 October 2026',
    stravaName: 'Shaghig Jouharian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 26.9, timePerWeek: '2h 45m', elevationPerWeekM: 182 },
    bests: [
      { label: '400m', time: '1:26' },
      { label: '½ mile', time: '2:27' },
      { label: '1K', time: '2:54' },
      { label: '1 mile', time: '6:34' },
      { label: '2 mile', time: '15:36' },
      { label: '5K', time: '24:50' },
      { label: '10K', time: '51:32' },
      { label: '15K', time: '1:17:04' },
      { label: '10 mile', time: '1:22:43' },
      { label: '20K', time: '1:43:23' },
      { label: 'Half-Marathon', time: '1:49:48' },
      { label: '30K', time: '3:01:33' },
      { label: 'Marathon', time: '4:24:12' },
    ],
    thisYear: { activities: 152, distanceKm: 1215.8, time: '128h 2m', elevationM: 9335 },
    allTime: { activities: 226, distanceKm: 1656.9, time: '171h 45m', elevationM: 12492 },
    highlight: 'Marathon best of 4:24:12',
  },
  {
    member: 'Georgii',
    captured: '19 October 2026',
    stravaName: 'Georgii Ponomarev',
    recent: { activitiesPerWeek: 4, distancePerWeekKm: 41.6, timePerWeek: '4h 18m', elevationPerWeekM: 887 },
    bests: [
      { label: '400m', time: '46s' },
      { label: '½ mile', time: '1:48' },
      { label: '1K', time: '2:59' },
      { label: '5K', time: '19:43' },
      { label: '10K', time: '40:37' },
      { label: '15K', time: '1:03:37' },
      { label: '10 mile', time: '1:08:34' },
      { label: '20K', time: '1:26:18' },
      { label: 'Half-Marathon', time: '1:31:34' },
      { label: '30K', time: '2:21:51' },
      { label: 'Marathon', time: '3:37:19' },
    ],
    thisYear: { activities: 321, distanceKm: 2281.7, time: '233h 45m', elevationM: 35290 },
    allTime: { activities: 703, distanceKm: 5010.9, time: '507h 50m', elevationM: 69131 },
    highlight: 'Eight runs a week, and 30,535m of climbing this year',
  },
  {
    member: 'Sevag',
    captured: '19 October 2026',
    stravaName: 'Sevag Sulahian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 20.3, timePerWeek: '2h 47m', elevationPerWeekM: 166 },
    bests: [
      { label: '400m', time: '1:40' },
      { label: '½ mile', time: '4:00' },
      { label: '1K', time: '5:11' },
      { label: '1 mile', time: '8:54' },
      { label: '2 mile', time: '18:05' },
      { label: '5K', time: '29:08' },
      { label: '10K', time: '59:31' },
      { label: '15K', time: '1:41:41' },
      { label: '10 mile', time: '1:49:44' },
      { label: '20K', time: '2:17:42' },
      { label: 'Half-Marathon', time: '2:42:54' },
      { label: '30K', time: '4:01:25' },
      { label: 'Marathon', time: '5:56:41' },
    ],
    thisYear: { activities: 29, distanceKm: 341.8, time: '43h 1m', elevationM: 2821 },
    allTime: { activities: 29, distanceKm: 341.8, time: '43h 1m', elevationM: 2821 },
    highlight: 'Set a 20K best of 2:17:42',
  },
  {
    member: 'Subhav',
    captured: '19 October 2026',
    stravaName: 'Subhav Ramnani',
    location: 'Brooklyn, New York',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 4.3, timePerWeek: '29m 38s', elevationPerWeekM: 0 },
    bests: [
      { label: '400m', time: '1:44' },
      { label: '½ mile', time: '3:49' },
      { label: '1K', time: '4:48' },
      { label: '1 mile', time: '7:54' },
      { label: '2 mile', time: '16:38' },
      { label: '5K', time: '26:13' },
      { label: '10K', time: '53:58' },
      { label: '15K', time: '1:33:37' },
      { label: '10 mile', time: '1:40:50' },
      { label: '20K', time: '2:05:25' },
      { label: 'Half-Marathon', time: '2:12:38' },
    ],
    thisYear: { activities: 58, distanceKm: 408.6, time: '43h 22m', elevationM: 2729 },
    allTime: { activities: 58, distanceKm: 408.6, time: '43h 22m', elevationM: 2729 },
    highlight: 'Took the course record on Return From The Sea!',
  },
  {
    member: 'Mehrdad',
    captured: '19 October 2026',
    stravaName: 'Mehrdad Janboori',
    location: 'Tehran',
    recent: { activitiesPerWeek: 0, distancePerWeekKm: 0, timePerWeek: '0h 0m', elevationPerWeekM: 0 },
    bests: [
      { label: '400m', time: '45s' },
      { label: '½ mile', time: '1:41' },
      { label: '1K', time: '2:14' },
      { label: '1 mile', time: '3:46' },
      { label: '2 mile', time: '9:51' },
      { label: '5K', time: '23:05' },
      { label: '10K', time: '50:05' },
      { label: '15K', time: '1:17:57' },
      { label: '10 mile', time: '1:23:38' },
      { label: '20K', time: '1:44:53' },
      { label: 'Half-Marathon', time: '1:50:50' },
      { label: '30K', time: '2:42:15' },
      { label: 'Marathon', time: '3:56:10' },
    ],
    thisYear: { activities: 2, distanceKm: 9.3, time: '1h 4m', elevationM: 48 },
    allTime: { activities: 266, distanceKm: 2788.5, time: '342h 6m', elevationM: 34121 },
    highlight: 'Kick boxer and marathon runner',
  },
  {
    member: 'Mariam',
    captured: '19 October 2026',
    stravaName: 'Mariamik Sahakyan',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 0, distancePerWeekKm: 0, timePerWeek: '0h 0m', elevationPerWeekM: 0 },
    bests: [
      { label: '400m', time: '1:10' },
      { label: '½ mile', time: '2:46' },
      { label: '1K', time: '2:37' },
      { label: '1 mile', time: '6:26' },
      { label: '2 mile', time: '18:37' },
      { label: '5K', time: '35:29' },
    ],
    thisYear: { activities: 13, distanceKm: 77.3, time: '8h 35m', elevationM: 591 },
    allTime: { activities: 13, distanceKm: 77.3, time: '8h 35m', elevationM: 591 },
  },
  {
    member: 'Agnesa',
    captured: '19 October 2026',
    stravaName: 'Agnesa Galstyan',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 7.6, timePerWeek: '51m 13s', elevationPerWeekM: 63 },
    bests: [
      { label: '400m', time: '1:45' },
      { label: '½ mile', time: '4:03' },
      { label: '1K', time: '5:10' },
      { label: '1 mile', time: '9:00' },
      { label: '2 mile', time: '18:35' },
      { label: '5K', time: '30:07' },
      { label: '10K', time: '1:01:32' },
    ],
    thisYear: { activities: 76, distanceKm: 366, time: '46h 49m', elevationM: 3091 },
    allTime: { activities: 76, distanceKm: 366, time: '46h 49m', elevationM: 3091 },
    highlight: 'Third-fastest ever up Saryan from Mashtots (2:28)',
  },
  {
    // The club calls her Aliya; Strava has all three of her names.
    member: 'Aliya',
    captured: '19 October 2026',
    stravaName: 'Ellie • Aliya • Hands',
    location: 'Seattle, Washington',
    recent: { activitiesPerWeek: 0, distancePerWeekKm: 7.1, timePerWeek: '1h 29m', elevationPerWeekM: 423 },
    bests: [
      { label: '400m', time: '54s' },
      { label: '½ mile', time: '3:00' },
      { label: '1K', time: '4:24' },
      { label: '1 mile', time: '4:57' },
      { label: '2 mile', time: '14:56' },
      { label: '5K', time: '23:25' },
      { label: '10K', time: '48:22' },
      { label: '15K', time: '1:39:46' },
      { label: '10 mile', time: '1:48:35' },
      { label: '20K', time: '2:17:53' },
      { label: 'Half-Marathon', time: '2:25:07' },
      { label: '30K', time: '3:36:17' },
      { label: 'Marathon', time: '5:10:26' },
      { label: '50K', time: '9:51:09' },
    ],
    thisYear: { activities: 1, distanceKm: 28.6, time: '5h 56m', elevationM: 1693 },
    allTime: { activities: 40, distanceKm: 570.7, time: '79h 53m', elevationM: 27740 },
    highlight: 'A 50K in 9:51:09, and 1,006 m of climbing in one morning',
  },
  {
    // The club calls him Hovig; his Strava account is in his other name.
    member: 'Hovig',
    captured: '19 October 2026',
    stravaName: 'Ohanes Battalian',
    location: 'Yerevan',
    // One run in the last four weeks, which is what Strava's per-week averages
    // are dividing: 0 activities a week alongside 5.4 km a week is its own
    // rounding, not a mistake in the transcription.
    recent: { activitiesPerWeek: 0, distancePerWeekKm: 2.5, timePerWeek: '14m 23s', elevationPerWeekM: 20 },
    bests: [
      { label: '400m', time: '1:01' },
      { label: '½ mile', time: '2:38' },
      { label: '1K', time: '3:55' },
      { label: '1 mile', time: '7:49' },
      { label: '2 mile', time: '17:16' },
      { label: '5K', time: '27:49' },
      { label: '10K', time: '56:34' },
      { label: '15K', time: '1:31:24' },
      { label: '10 mile', time: '1:38:52' },
      { label: '20K', time: '2:03:29' },
      { label: 'Half-Marathon', time: '2:10:46' },
    ],
    // Seven activities, and the same figure all-time: he is new to Strava, so
    // this year and every year are the same number.
    thisYear: { activities: 8, distanceKm: 68.2, time: '6h 43m', elevationM: 567 },
    allTime: { activities: 8, distanceKm: 68.2, time: '6h 43m', elevationM: 567 },
    highlight: 'Ran his fastest ever half marathon (2:10:46)',
  },
  {
    member: 'Hamid',
    stravaName: 'Hamid Rp',
    location: 'Yerevan',
    captured: '19 October 2026',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 3.8, timePerWeek: '29m 34s', elevationPerWeekM: 33 },
    bests: [
      { label: '400m', time: '1:30' },
      { label: '½ mile', time: '4:32' },
      { label: '1K', time: '5:57' },
      { label: '1 mile', time: '11:16' },
      { label: '2 mile', time: '26:08' },
      { label: '5K', time: '51:32' },
    ],
    thisYear: { activities: 5, distanceKm: 33.6, time: '4h 1m', elevationM: 132 },
    allTime: { activities: 7, distanceKm: 52.8, time: '6h 33m', elevationM: 132 },
  },
  {
    member: 'Vahe',
    stravaName: 'Vahe Tildian',
    location: 'Yerevan',
    captured: '19 October 2026',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 10.1, timePerWeek: '1h 10m', elevationPerWeekM: 79 },
    bests: [
      { label: '400m', time: '1:33' },
      { label: '½ mile', time: '3:57' },
      { label: '1K', time: '5:02' },
      // Strava also reports a 4:56 mile. That is 3:07/km against a 1K of
      // 5:03/km, from a run averaging 6:30/km — left out, like Georgii's.
      { label: '2 mile', time: '15:46' },
      { label: '5K', time: '28:55' },
      { label: '10K', time: '59:43' },
      { label: '15K', time: '1:46:31' },
      { label: '10 mile', time: '1:54:22' },
      { label: '20K', time: '2:32:34' },
      { label: 'Half-Marathon', time: '2:43:45' },
    ],
    thisYear: { activities: 22, distanceKm: 154, time: '16h 51m', elevationM: 1102 },
    allTime: { activities: 24, distanceKm: 170.7, time: '18h 37m', elevationM: 1271 },
    highlight: 'Fastest ever two miles on an October morning (15:46)',
  },
  {
    member: 'Victor',
    stravaName: 'Victor Avtandilyan',
    location: 'Kraków',
    captured: '19 October 2026',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 10.3, timePerWeek: '1h 9m', elevationPerWeekM: 41 },
    bests: [
      { label: '400m', time: '1:43' },
      { label: '½ mile', time: '3:51' },
      { label: '1K', time: '4:48' },
      { label: '1 mile', time: '7:53' },
      { label: '2 mile', time: '16:30' },
      { label: '5K', time: '27:21' },
      { label: '10K', time: '56:49' },
      { label: '15K', time: '1:29:31' },
      { label: '10 mile', time: '1:36:32' },
      { label: '20K', time: '2:02:23' },
      { label: 'Half-Marathon', time: '2:10:03' },
    ],
    thisYear: { activities: 25, distanceKm: 175.9, time: '18h 59m', elevationM: 775 },
    allTime: { activities: 34, distanceKm: 233, time: '24h 56m', elevationM: 1228 },
  },
];

/**
 * The span the figures cover, for pages that describe the whole set.
 * Declared after `stats` on purpose: a const read above its declaration is a
 * temporal-dead-zone crash at build time, not a warning.
 */
export const capturedSpan = (() => {
  // Built from the athletes themselves, not from `captured`: once everyone has
  // been read on the same day the set-wide constant is nobody's date, and a
  // range spanning three weeks would be a lie about the oldest figure here.
  const sorted = stats
    .map((a) => a.captured ?? captured)
    .map((d) => ({ d, t: Date.parse(d) }))
    .sort((a, b) => a.t - b.t);
  const oldest = sorted[0].d;
  const newest = sorted[sorted.length - 1].d;
  if (oldest === newest) return newest;
  // Collapse whatever the two ends share, so the line stays one row on a
  // phone: "8–27 September 2026" within a month, "27 September – 12 October
  // 2026" across one, and both dates in full only across a year.
  const [d1, m1, y1] = oldest.split(' ');
  const [d2, m2, y2] = newest.split(' ');
  if (y1 !== y2) return `${oldest} to ${newest}`;
  return m1 === m2 ? `${d1}–${d2} ${m2} ${y2}` : `${d1} ${m1} – ${d2} ${m2} ${y2}`;
})();

/** "1:58:58" / "24:11" / "45s" -> seconds, for ranking. */
export function toSeconds(time: string): number {
  if (!time.includes(':')) return Number(time.replace('s', ''));
  return time.split(':').map(Number).reduce((total, part) => total * 60 + part, 0);
}

export const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export const byMember = new Map(stats.map((s) => [s.member, s]));

export const bestFor = (athlete: AthleteStats, label: string) =>
  athlete.bests.find((b) => b.label === label);

/** Distances that enough people have for a meaningful ranking. */
export const RANKED = ['5K', '10K', 'Half-Marathon', 'Marathon'] as const;

export function ranking(label: string) {
  return stats
    .filter((a) => bestFor(a, label))
    .sort((a, b) => toSeconds(bestFor(a, label)!.time) - toSeconds(bestFor(b, label)!.time));
}
