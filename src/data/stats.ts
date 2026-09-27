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
    captured: '27 September 2026',
    recent: { activitiesPerWeek: 4, distancePerWeekKm: 50.2, timePerWeek: '5h 25m', elevationPerWeekM: 360 },
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
    thisYear: { activities: 87, distanceKm: 680.2, time: '80h 26m', elevationM: 6197 },
    allTime: { activities: 751, distanceKm: 4210.1, time: '534h 9m', elevationM: 50203 },
    highlight: 'Ran his fastest ever 30K (3:17:10)',
  },
  {
    member: 'Yeva',
    captured: '27 September 2026',
    stravaName: 'Yeva H',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 7.7, timePerWeek: '51m 43s', elevationPerWeekM: 49 },
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
    thisYear: { activities: 15, distanceKm: 133.2, time: '14h 29m', elevationM: 957 },
    allTime: { activities: 15, distanceKm: 133.2, time: '14h 29m', elevationM: 957 },
    highlight: 'Local Legend of Keru-Barbyus Backstreets downhill',
  },
  {
    member: 'Tagouhi',
    captured: '27 September 2026',
    stravaName: 'Tagouhi Manoukian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 3.9, timePerWeek: '36m 6s', elevationPerWeekM: 37 },
    bests: [
      { label: '400m', time: '2:05' },
      { label: '½ mile', time: '4:20' },
      { label: '1K', time: '6:11' },
      { label: '1 mile', time: '10:00' },
      { label: '2 mile', time: '20:56' },
      { label: '5K', time: '33:50' },
    ],
    thisYear: { activities: 59, distanceKm: 298.1, time: '39h 6m', elevationM: 3475 },
    allTime: { activities: 59, distanceKm: 298.1, time: '39h 6m', elevationM: 3475 },
  },
  {
    member: 'Soheil',
    captured: '27 September 2026',
    stravaName: 'Soheil Qorbani',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 20.5, timePerWeek: '2h 22m', elevationPerWeekM: 133 },
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
    ],
    thisYear: { activities: 54, distanceKm: 316.1, time: '36h 3m', elevationM: 2306 },
    allTime: { activities: 54, distanceKm: 316.1, time: '36h 3m', elevationM: 2306 },
    highlight: 'Second-fastest 10K this week (1:11:56)',
  },
  {
    member: 'Sha',
    captured: '27 September 2026',
    stravaName: 'Sha Melikian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 15.4, timePerWeek: '1h 53m', elevationPerWeekM: 404 },
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
    thisYear: { activities: 45, distanceKm: 361.3, time: '44h 1m', elevationM: 5561 },
    allTime: { activities: 45, distanceKm: 361.3, time: '44h 1m', elevationM: 5561 },
    highlight: 'Set a 15K best of 1:59:19',
  },
  {
    member: 'Sabrina',
    captured: '27 September 2026',
    stravaName: 'Sabrina Khachikyan',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 4.6, timePerWeek: '31m 41s', elevationPerWeekM: 44 },
    bests: [
      { label: '400m', time: '1:32' },
      { label: '½ mile', time: '3:04' },
      { label: '1K', time: '4:59' },
      { label: '1 mile', time: '8:45' },
      { label: '2 mile', time: '21:46' },
      { label: '5K', time: '42:01' },
    ],
    thisYear: { activities: 10, distanceKm: 50.3, time: '6h 17m', elevationM: 406 },
    allTime: { activities: 10, distanceKm: 50.3, time: '6h 17m', elevationM: 406 },
    highlight: 'Took six and a half minutes off her 5K (42:01)',
  },
  {
    member: 'Narek',
    stravaName: 'Narek Nazari',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 8.6, timePerWeek: '52m 51s', elevationPerWeekM: 63 },
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
    thisYear: { activities: 62, distanceKm: 411.1, time: '45h 11m', elevationM: 3049 },
    allTime: { activities: 247, distanceKm: 1101.9, time: '117h 58m', elevationM: 4941 },
  },
  {
    member: 'Moojan',
    captured: '27 September 2026',
    stravaName: 'Moojan Ebadi',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 19.5, timePerWeek: '2h 29m', elevationPerWeekM: 164 },
    bests: [
      { label: '400m', time: '1:47' },
      { label: '½ mile', time: '3:03' },
      { label: '1K', time: '4:24' },
      { label: '1 mile', time: '9:03' },
      { label: '2 mile', time: '22:40' },
      { label: '5K', time: '37:07' },
      { label: '10K', time: '1:41:19' },
    ],
    thisYear: { activities: 70, distanceKm: 369.4, time: '47h 28m', elevationM: 3970 },
    allTime: { activities: 70, distanceKm: 369.4, time: '47h 28m', elevationM: 3970 },
    highlight: 'Starting her running era in Yerevan',
  },
  {
    member: 'Mohsen',
    captured: '27 September 2026',
    stravaName: 'Mohsen Pakbaz',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 5.8, timePerWeek: '37m 41s', elevationPerWeekM: 62 },
    bests: [
      { label: '400m', time: '59s' },
      { label: '½ mile', time: '1:52' },
      { label: '1K', time: '3:07' },
      { label: '1 mile', time: '7:11' },
      { label: '2 mile', time: '17:20' },
      { label: '5K', time: '28:35' },
      { label: '10K', time: '1:03:22' },
    ],
    thisYear: { activities: 39, distanceKm: 212.5, time: '24h 50m', elevationM: 2559 },
    allTime: { activities: 39, distanceKm: 212.5, time: '24h 50m', elevationM: 2559 },
  },
  {
    member: 'Michael',
    captured: '27 September 2026',
    stravaName: 'Michael Jalkejian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 10.4, timePerWeek: '1h 16m', elevationPerWeekM: 98 },
    bests: [
      { label: '400m', time: '1:04' },
      { label: '½ mile', time: '4:17' },
      { label: '1K', time: '5:35' },
      { label: '1 mile', time: '9:58' },
      { label: '2 mile', time: '20:20' },
      { label: '5K', time: '32:57' },
      { label: '10K', time: '1:14:21' },
      { label: '15K', time: '2:03:38' },
    ],
    thisYear: { activities: 50, distanceKm: 258.7, time: '30h 48m', elevationM: 2518 },
    allTime: { activities: 59, distanceKm: 296.6, time: '35h 16m', elevationM: 3023 },
    highlight: 'Fastest 15K two days ago (2:03:38)',
  },
  {
    member: 'Mahty',
    captured: '27 September 2026',
    stravaName: 'Mahty Garjasi',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 10.5, timePerWeek: '1h 3m', elevationPerWeekM: 69 },
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
    captured: '27 September 2026',
    stravaName: 'Jebid Jouharian',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 9.7, timePerWeek: '56m 42s', elevationPerWeekM: 10 },
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
    thisYear: { activities: 105, distanceKm: 884.6, time: '93h 0m', elevationM: 7567 },
    allTime: { activities: 161, distanceKm: 1201.6, time: '124h 37m', elevationM: 10353 },
  },
  {
    member: 'Inga',
    captured: '27 September 2026',
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
    captured: '27 September 2026',
    stravaName: 'Hrag Stanboulian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 11.6, timePerWeek: '1h 0m', elevationPerWeekM: 88 },
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
      { label: '30K', time: '3:01:33' },
      { label: 'Marathon', time: '4:46:15' },
    ],
    thisYear: { activities: 60, distanceKm: 586, time: '57h 49m', elevationM: 5553 },
    allTime: { activities: 110, distanceKm: 1084.3, time: '108h 59m', elevationM: 10170 },
  },
  {
    member: 'Har Hov',
    captured: '27 September 2026',
    stravaName: 'Hov Har',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 4, distancePerWeekKm: 40.7, timePerWeek: '3h 58m', elevationPerWeekM: 402 },
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
      { label: '30K', time: '3:03:24' },
    ],
    thisYear: { activities: 94, distanceKm: 886.9, time: '83h 4m', elevationM: 8541 },
    allTime: { activities: 124, distanceKm: 1125.9, time: '102h 56m', elevationM: 11021 },
    highlight: 'Fastest 30K on a 30km club long run (3:03:24)',
  },
  {
    member: 'Hayk',
    captured: '27 September 2026',
    stravaName: 'Hayk Hambardzumyan',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 35.3, timePerWeek: '3h 28m', elevationPerWeekM: 260 },
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
      { label: '30K', time: '3:01:54' },
    ],
    thisYear: { activities: 66, distanceKm: 618.9, time: '63h 56m', elevationM: 4632 },
    allTime: { activities: 66, distanceKm: 618.9, time: '63h 56m', elevationM: 4632 },
    highlight: 'Fastest 30K (3:01:54) on the club long run',
  },
  {
    member: 'Avak',
    captured: '27 September 2026',
    stravaName: 'Avak K',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 8, timePerWeek: '50m 34s', elevationPerWeekM: 59 },
    bests: [
      { label: '400m', time: '44s' },
      { label: '½ mile', time: '2:38' },
      { label: '1K', time: '3:51' },
      { label: '1 mile', time: '7:40' },
      { label: '2 mile', time: '17:31' },
      { label: '5K', time: '30:58' },
      { label: '10K', time: '1:10:53' },
    ],
    thisYear: { activities: 47, distanceKm: 249.9, time: '28h 1m', elevationM: 2072 },
    allTime: { activities: 47, distanceKm: 249.9, time: '28h 1m', elevationM: 2072 },
  },
  {
    member: 'Ashot',
    captured: '27 September 2026',
    stravaName: 'Ashot H.',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 21.9, timePerWeek: '2h 5m', elevationPerWeekM: 267 },
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
    thisYear: { activities: 21, distanceKm: 196.8, time: '19h 51m', elevationM: 1942 },
    allTime: { activities: 21, distanceKm: 196.8, time: '19h 51m', elevationM: 1942 },
    highlight: 'Second-fastest 10K yesterday (56:59)',
  },
  {
    member: 'Asdghig',
    captured: '27 September 2026',
    stravaName: 'Asdghig Jouharian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 22, timePerWeek: '2h 42m', elevationPerWeekM: 158 },
    bests: [
      { label: '400m', time: '58s' },
      { label: '½ mile', time: '2:58' },
      { label: '1K', time: '4:17' },
      { label: '1 mile', time: '9:06' },
      { label: '2 mile', time: '18:59' },
      { label: '5K', time: '30:22' },
      { label: '10K', time: '1:04:55' },
      { label: '15K', time: '1:58:02' },
      { label: '10 mile', time: '2:06:46' },
      { label: '20K', time: '4:13:25' },
    ],
    thisYear: { activities: 101, distanceKm: 694, time: '85h 23m', elevationM: 7110 },
    allTime: { activities: 138, distanceKm: 845.7, time: '104h 6m', elevationM: 8823 },
    highlight: 'Fastest 10 miles two days ago (2:06:46)',
  },
  {
    member: 'Arman',
    stravaName: 'Arman Hovsepyan',
    location: 'Yerevan',
    captured: '27 September 2026',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 21.4, timePerWeek: '2h 6m', elevationPerWeekM: 165 },
    bests: [
      { label: '400m', time: '1:03' },
      { label: '½ mile', time: '2:35' },
      { label: '1K', time: '3:13' },
      { label: '1 mile', time: '5:59' },
      { label: '2 mile', time: '12:19' },
      { label: '5K', time: '19:51' },
      { label: '10K', time: '41:18' },
      { label: '15K', time: '1:13:49' },
      { label: '10 mile', time: '1:20:16' },
      { label: '20K', time: '1:42:54' },
      { label: 'Half-Marathon', time: '1:47:39' },
    ],
    thisYear: { activities: 30, distanceKm: 266.3, time: '37h 55m', elevationM: 1876 },
    allTime: { activities: 30, distanceKm: 266.3, time: '37h 55m', elevationM: 1876 },
    highlight: 'Four personal bests in one morning, including a 41:18 10K',
  },
  {
    member: 'Aram',
    captured: '27 September 2026',
    stravaName: 'Aram V',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 9.7, timePerWeek: '1h 19m', elevationPerWeekM: 184 },
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
    thisYear: { activities: 97, distanceKm: 684.3, time: '76h 6m', elevationM: 8960 },
    allTime: { activities: 122, distanceKm: 844.8, time: '94h 52m', elevationM: 10514 },
  },
  {
    member: 'Akshy',
    captured: '27 September 2026',
    stravaName: 'Akshy Balasubramaniyam',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 7, distancePerWeekKm: 82.3, timePerWeek: '8h 22m', elevationPerWeekM: 676 },
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
      { label: '30K', time: '3:07:15' },
    ],
    thisYear: { activities: 176, distanceKm: 1695.6, time: '170h 32m', elevationM: 11701 },
    allTime: { activities: 176, distanceKm: 1695.6, time: '170h 32m', elevationM: 11701 },
    highlight: 'Finished the September Run 100K Challenge',
  },
  {
    member: 'Shaghig',
    captured: '27 September 2026',
    stravaName: 'Shaghig Jouharian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 25.5, timePerWeek: '2h 42m', elevationPerWeekM: 204 },
    bests: [
      { label: '400m', time: '1:26' },
      { label: '½ mile', time: '2:27' },
      { label: '1K', time: '2:54' },
      { label: '1 mile', time: '6:34' },
      { label: '2 mile', time: '15:36' },
      { label: '5K', time: '24:50' },
      { label: '10K', time: '52:25' },
      { label: '15K', time: '1:21:10' },
      { label: '10 mile', time: '1:26:52' },
      { label: '20K', time: '1:48:53' },
      { label: 'Half-Marathon', time: '1:55:49' },
      { label: '30K', time: '3:01:33' },
      { label: 'Marathon', time: '4:24:12' },
    ],
    thisYear: { activities: 142, distanceKm: 1112.9, time: '117h 34m', elevationM: 8646 },
    allTime: { activities: 216, distanceKm: 1554, time: '161h 17m', elevationM: 11803 },
    highlight: 'Marathon best of 4:24:12',
  },
  {
    member: 'Georgii',
    captured: '27 September 2026',
    stravaName: 'Georgii Ponomarev',
    recent: { activitiesPerWeek: 8, distancePerWeekKm: 58.8, timePerWeek: '6h 0m', elevationPerWeekM: 1045 },
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
    thisYear: { activities: 309, distanceKm: 2156.8, time: '220h 42m', elevationM: 32694 },
    allTime: { activities: 691, distanceKm: 4886, time: '494h 47m', elevationM: 66535 },
    highlight: 'Eight runs a week, and 30,535m of climbing this year',
  },
  {
    member: 'Sevag',
    captured: '27 September 2026',
    stravaName: 'Sevag Sulahian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 13.9, timePerWeek: '1h 47m', elevationPerWeekM: 152 },
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
      { label: 'Half-Marathon', time: '2:47:30' },
    ],
    thisYear: { activities: 26, distanceKm: 276.2, time: '33h 53m', elevationM: 2344 },
    allTime: { activities: 26, distanceKm: 276.2, time: '33h 53m', elevationM: 2344 },
    highlight: 'Set a 20K best of 2:17:42',
  },
  {
    member: 'Subhav',
    stravaName: 'Subhav Ramnani',
    location: 'Brooklyn, New York',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 3.3, timePerWeek: '21m 57s', elevationPerWeekM: 3 },
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
    thisYear: { activities: 53, distanceKm: 382.4, time: '40h 22m', elevationM: 2729 },
    allTime: { activities: 53, distanceKm: 382.4, time: '40h 22m', elevationM: 2729 },
    highlight: 'Took the course record on Return From The Sea!',
  },
  {
    member: 'Mehrdad',
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
    captured: '27 September 2026',
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
    captured: '27 September 2026',
    stravaName: 'Agnesa Galstyan',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 10.6, timePerWeek: '1h 17m', elevationPerWeekM: 69 },
    bests: [
      { label: '400m', time: '1:45' },
      { label: '½ mile', time: '4:07' },
      { label: '1K', time: '5:15' },
      { label: '1 mile', time: '9:00' },
      { label: '2 mile', time: '18:35' },
      { label: '5K', time: '34:17' },
    ],
    thisYear: { activities: 72, distanceKm: 335.3, time: '43h 25m', elevationM: 2839 },
    allTime: { activities: 72, distanceKm: 335.3, time: '43h 25m', elevationM: 2839 },
    highlight: 'Third-fastest ever up Saryan from Mashtots (2:28)',
  },
  {
    // The club calls her Aliya; Strava has all three of her names.
    member: 'Aliya',
    stravaName: 'Ellie • Aliya • Hands',
    location: 'Seattle, Washington',
    recent: { activitiesPerWeek: 0, distancePerWeekKm: 0, timePerWeek: '0h 0m', elevationPerWeekM: 0 },
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
    thisYear: { activities: 0, distanceKm: 0, time: '0h 0m', elevationM: 0 },
    allTime: { activities: 39, distanceKm: 542.1, time: '73h 57m', elevationM: 26047 },
    highlight: 'A 50K in 9:51:09, and 1,006 m of climbing in one morning',
  },
  {
    // The club calls him Hovig; his Strava account is in his other name.
    member: 'Hovig',
    captured: '27 September 2026',
    stravaName: 'Ohanes Battalian',
    location: 'Yerevan',
    // One run in the last four weeks, which is what Strava's per-week averages
    // are dividing: 0 activities a week alongside 5.4 km a week is its own
    // rounding, not a mistake in the transcription.
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 7.9, timePerWeek: '48m 0s', elevationPerWeekM: 60 },
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
];

/**
 * The span the figures cover, for pages that describe the whole set.
 * Declared after `stats` on purpose: a const read above its declaration is a
 * temporal-dead-zone crash at build time, not a warning.
 */
export const capturedSpan = (() => {
  const dates = stats.map((a) => a.captured).filter(Boolean) as string[];
  if (!dates.length) return captured;
  const newest = dates
    .map((d) => ({ d, t: Date.parse(d) }))
    .sort((a, b) => b.t - a.t)[0].d;
  if (newest === captured) return captured;
  // "8-27 September 2026" when both ends share a month, which is the usual
  // case and keeps the line to one row on a phone; the long form otherwise.
  const [d1, ...rest1] = captured.split(' ');
  const [d2, ...rest2] = newest.split(' ');
  return rest1.join(' ') === rest2.join(' ')
    ? `${d1}–${d2} ${rest2.join(' ')}`
    : `${captured} to ${newest}`;
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
