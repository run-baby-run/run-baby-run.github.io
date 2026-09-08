/**
 * Strava figures for the club, transcribed from each athlete's side-by-side
 * comparison view on 8 September 2026.
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
}

export const captured = '8 September 2026';

export const stats: AthleteStats[] = [
  {
    member: 'Pouria',
    stravaName: 'Pouria Jahandideh',
    recent: { activitiesPerWeek: 4, distancePerWeekKm: 38.6, timePerWeek: '4h 15m', elevationPerWeekM: 290 },
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
      { label: '20K', time: '1:52:44' },
      { label: 'Half-Marathon', time: '1:58:58' },
      { label: '30K', time: '3:17:10' },
      { label: 'Marathon', time: '4:59:34' },
    ],
    thisYear: { activities: 76, distanceKm: 544.4, time: '65h 55m', elevationM: 5261 },
    allTime: { activities: 740, distanceKm: 4074.3, time: '519h 38m', elevationM: 49267 },
    highlight: 'Ran his fastest ever 30K (3:17:10)',
  },
  {
    member: 'Yeva',
    stravaName: 'Yeva H',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 26.7, timePerWeek: '2h 52m', elevationPerWeekM: 217 },
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
    thisYear: { activities: 14, distanceKm: 123.1, time: '13h 20m', elevationM: 957 },
    allTime: { activities: 14, distanceKm: 123.1, time: '13h 20m', elevationM: 957 },
    highlight: 'Local Legend of Keru-Barbyus Backstreets downhill',
  },
  {
    member: 'Tagouhi',
    stravaName: 'Tagouhi Manoukian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 7.8, timePerWeek: '59m 53s', elevationPerWeekM: 71 },
    bests: [
      { label: '400m', time: '2:05' },
      { label: '½ mile', time: '4:20' },
      { label: '1K', time: '6:11' },
      { label: '1 mile', time: '10:00' },
      { label: '2 mile', time: '20:56' },
      { label: '5K', time: '33:50' },
    ],
    thisYear: { activities: 56, distanceKm: 282.2, time: '36h 41m', elevationM: 3328 },
    allTime: { activities: 56, distanceKm: 282.2, time: '36h 41m', elevationM: 3328 },
  },
  {
    member: 'Soheil',
    stravaName: 'Soheil Qorbani',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 23.5, timePerWeek: '2h 38m', elevationPerWeekM: 139 },
    bests: [
      { label: '400m', time: '1:40' },
      { label: '½ mile', time: '4:04' },
      { label: '1K', time: '5:14' },
      { label: '1 mile', time: '8:48' },
      { label: '2 mile', time: '18:39' },
      { label: '5K', time: '31:38' },
      { label: '10K', time: '1:06:40' },
      { label: '15K', time: '1:41:24' },
      { label: '10 mile', time: '1:48:39' },
      { label: '20K', time: '2:17:29' },
    ],
    thisYear: { activities: 44, distanceKm: 255.9, time: '29h 4m', elevationM: 1910 },
    allTime: { activities: 44, distanceKm: 255.9, time: '29h 4m', elevationM: 1910 },
    highlight: 'Second-fastest 10K this week (1:11:56)',
  },
  {
    member: 'Sha',
    stravaName: 'Sha Melikian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 18.9, timePerWeek: '2h 17m', elevationPerWeekM: 399 },
    bests: [
      { label: '400m', time: '1:05' },
      { label: '½ mile', time: '2:30' },
      { label: '1K', time: '3:55' },
      { label: '1 mile', time: '8:29' },
      { label: '2 mile', time: '21:00' },
      { label: '5K', time: '33:09' },
      { label: '10K', time: '1:09:18' },
      { label: '15K', time: '1:55:34' },
      { label: '10 mile', time: '2:06:44' },
    ],
    thisYear: { activities: 40, distanceKm: 307.6, time: '37h 29m', elevationM: 4166 },
    allTime: { activities: 40, distanceKm: 307.6, time: '37h 29m', elevationM: 4166 },
    highlight: 'Set a 15K best of 1:59:19',
  },
  {
    member: 'Sabrina',
    stravaName: 'Sabrina Khachikyan',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 7.8, timePerWeek: '59m 5s', elevationPerWeekM: 53 },
    bests: [
      { label: '400m', time: '2:15' },
      { label: '½ mile', time: '3:04' },
      { label: '1K', time: '6:44' },
      { label: '1 mile', time: '11:35' },
      { label: '2 mile', time: '26:38' },
      { label: '5K', time: '48:34' },
    ],
    thisYear: { activities: 8, distanceKm: 37.7, time: '4h 49m', elevationM: 272 },
    allTime: { activities: 8, distanceKm: 37.7, time: '4h 49m', elevationM: 272 },
    highlight: 'Just ran her fastest 5K (48:34)',
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
    stravaName: 'Moojan Ebadi',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 16.0, timePerWeek: '2h 9m', elevationPerWeekM: 177 },
    bests: [
      { label: '400m', time: '1:47' },
      { label: '½ mile', time: '3:03' },
      { label: '1K', time: '4:24' },
      { label: '1 mile', time: '9:03' },
      { label: '2 mile', time: '22:40' },
      { label: '5K', time: '37:07' },
      { label: '10K', time: '1:46:11' },
    ],
    thisYear: { activities: 60, distanceKm: 310.4, time: '40h 30m', elevationM: 3440 },
    allTime: { activities: 60, distanceKm: 310.4, time: '40h 30m', elevationM: 3440 },
    highlight: 'Starting her running era in Yerevan',
  },
  {
    member: 'Mohsen',
    stravaName: 'Mohsen Pakbaz',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 9.9, timePerWeek: '1h 4m', elevationPerWeekM: 100 },
    bests: [
      { label: '400m', time: '59s' },
      { label: '½ mile', time: '1:52' },
      { label: '1K', time: '3:07' },
      { label: '1 mile', time: '7:11' },
      { label: '2 mile', time: '17:20' },
      { label: '5K', time: '28:35' },
      { label: '10K', time: '1:03:22' },
    ],
    thisYear: { activities: 37, distanceKm: 198.6, time: '23h 25m', elevationM: 2460 },
    allTime: { activities: 37, distanceKm: 198.6, time: '23h 25m', elevationM: 2460 },
  },
  {
    member: 'Michael',
    stravaName: 'Michael Jalkejian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 9.9, timePerWeek: '1h 14m', elevationPerWeekM: 84 },
    bests: [
      { label: '400m', time: '1:04' },
      { label: '½ mile', time: '4:17' },
      { label: '1K', time: '5:35' },
      { label: '1 mile', time: '9:58' },
      { label: '2 mile', time: '20:20' },
      { label: '5K', time: '33:21' },
      { label: '10K', time: '1:14:21' },
      { label: '15K', time: '2:03:38' },
    ],
    thisYear: { activities: 47, distanceKm: 239.1, time: '28h 34m', elevationM: 2342 },
    allTime: { activities: 56, distanceKm: 277.1, time: '33h 2m', elevationM: 2848 },
    highlight: 'Fastest 15K two days ago (2:03:38)',
  },
  {
    member: 'Mahty',
    stravaName: 'Mahty Garjasi',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 21.3, timePerWeek: '2h 4m', elevationPerWeekM: 183 },
    bests: [
      { label: '400m', time: '44s' },
      { label: '½ mile', time: '1:42' },
      { label: '1K', time: '4:29' },
      { label: '1 mile', time: '4:04' },
      { label: '2 mile', time: '16:45' },
      // 5K (19:01) removed: GPS artefact, not a real effort. Do not re-add on
      // the next refresh — Strava will keep reporting it.
      { label: '10K', time: '49:37' },
      { label: '15K', time: '1:20:18' },
      { label: '10 mile', time: '1:30:16' },
      { label: '20K', time: '2:01:05' },
      { label: 'Half-Marathon', time: '2:07:10' },
    ],
    thisYear: { activities: 38, distanceKm: 241.8, time: '25h 59m', elevationM: 2107 },
    allTime: { activities: 352, distanceKm: 1019.3, time: '163h 57m', elevationM: 15150 },
    highlight: 'Completed the September 5K x Brooks Challenge',
  },
  {
    member: 'Jebid',
    stravaName: 'Jebid Jouharian',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 18.0, timePerWeek: '1h 50m', elevationPerWeekM: 107 },
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
    thisYear: { activities: 101, distanceKm: 859.3, time: '90h 38m', elevationM: 7547 },
    allTime: { activities: 157, distanceKm: 1176.3, time: '122h 16m', elevationM: 10333 },
  },
  {
    member: 'Inga',
    stravaName: 'Inga Sargsyan',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 8.3, timePerWeek: '1h 2m', elevationPerWeekM: 58 },
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
    stravaName: 'Hrag Stanboulian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 11.6, timePerWeek: '1h 7m', elevationPerWeekM: 100 },
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
    thisYear: { activities: 55, distanceKm: 545.1, time: '54h 19m', elevationM: 5229 },
    allTime: { activities: 105, distanceKm: 1043.4, time: '105h 29m', elevationM: 9846 },
  },
  {
    member: 'Har Hov',
    stravaName: 'Hov Har',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 31.3, timePerWeek: '2h 54m', elevationPerWeekM: 275 },
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
    thisYear: { activities: 83, distanceKm: 769.0, time: '71h 36m', elevationM: 7376 },
    allTime: { activities: 113, distanceKm: 1008.1, time: '91h 27m', elevationM: 9856 },
    highlight: 'Fastest 30K on a 30km club long run (3:03:24)',
  },
  {
    member: 'Hayk',
    stravaName: 'Hayk Hambardzumyan',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 30.8, timePerWeek: '2h 57m', elevationPerWeekM: 247 },
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
      { label: 'Half-Marathon', time: '1:55:11' },
      { label: '30K', time: '3:01:54' },
    ],
    thisYear: { activities: 58, distanceKm: 522.4, time: '54h 31m', elevationM: 3927 },
    allTime: { activities: 58, distanceKm: 522.4, time: '54h 31m', elevationM: 3927 },
    highlight: 'Fastest 30K (3:01:54) on the club long run',
  },
  {
    member: 'Avak',
    stravaName: 'Avak K',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 4, distancePerWeekKm: 22.2, timePerWeek: '2h 20m', elevationPerWeekM: 176 },
    bests: [
      { label: '400m', time: '44s' },
      { label: '½ mile', time: '2:38' },
      { label: '1K', time: '3:51' },
      { label: '1 mile', time: '7:40' },
      { label: '2 mile', time: '17:31' },
      { label: '5K', time: '30:58' },
      { label: '10K', time: '1:10:53' },
    ],
    thisYear: { activities: 44, distanceKm: 235.2, time: '26h 28m', elevationM: 1939 },
    allTime: { activities: 44, distanceKm: 235.2, time: '26h 28m', elevationM: 1939 },
  },
  {
    member: 'Ashot',
    stravaName: 'Ashot H.',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 16.2, timePerWeek: '1h 37m', elevationPerWeekM: 150 },
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
    thisYear: { activities: 16, distanceKm: 137.6, time: '14h 20m', elevationM: 1214 },
    allTime: { activities: 16, distanceKm: 137.6, time: '14h 20m', elevationM: 1214 },
    highlight: 'Second-fastest 10K yesterday (56:59)',
  },
  {
    member: 'Asdghig',
    stravaName: 'Asdghig Jouharian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 14.6, timePerWeek: '1h 51m', elevationPerWeekM: 100 },
    bests: [
      { label: '400m', time: '58s' },
      { label: '½ mile', time: '2:58' },
      { label: '1K', time: '4:17' },
      { label: '1 mile', time: '9:06' },
      { label: '2 mile', time: '18:59' },
      { label: '5K', time: '30:22' },
      { label: '10K', time: '1:10:47' },
      { label: '15K', time: '1:58:02' },
      { label: '10 mile', time: '2:06:46' },
      { label: '20K', time: '4:13:25' },
    ],
    thisYear: { activities: 93, distanceKm: 638.9, time: '78h 56m', elevationM: 6704 },
    allTime: { activities: 130, distanceKm: 790.6, time: '97h 39m', elevationM: 8417 },
    highlight: 'Fastest 10 miles two days ago (2:06:46)',
  },
  {
    member: 'Arman',
    stravaName: 'Arman Hovsepyan',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 2, distancePerWeekKm: 19.9, timePerWeek: '1h 57m', elevationPerWeekM: 153 },
    bests: [
      { label: '400m', time: '1:03' },
      { label: '½ mile', time: '2:35' },
      { label: '1K', time: '3:13' },
      { label: '1 mile', time: '6:10' },
      { label: '2 mile', time: '13:06' },
      { label: '5K', time: '21:05' },
      { label: '10K', time: '43:16' },
      { label: '15K', time: '1:13:49' },
      { label: '10 mile', time: '1:20:16' },
      { label: '20K', time: '1:42:54' },
      { label: 'Half-Marathon', time: '1:47:39' },
    ],
    thisYear: { activities: 23, distanceKm: 203.7, time: '31h 58m', elevationM: 1421 },
    allTime: { activities: 23, distanceKm: 203.7, time: '31h 58m', elevationM: 1421 },
  },
  {
    member: 'Aram',
    stravaName: 'Aram V',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 3, distancePerWeekKm: 20.2, timePerWeek: '2h 28m', elevationPerWeekM: 401 },
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
    thisYear: { activities: 94, distanceKm: 666.2, time: '74h 8m', elevationM: 8714 },
    allTime: { activities: 119, distanceKm: 826.8, time: '92h 54m', elevationM: 10268 },
  },
  {
    member: 'Akshy',
    stravaName: 'Akshy Balasubramaniyam',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 6, distancePerWeekKm: 63.6, timePerWeek: '6h 26m', elevationPerWeekM: 512 },
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
    thisYear: { activities: 160, distanceKm: 1486.4, time: '149h 25m', elevationM: 10034 },
    allTime: { activities: 160, distanceKm: 1486.4, time: '149h 25m', elevationM: 10034 },
    highlight: 'Finished the September Run 100K Challenge',
  },
  {
    member: 'Shaghig',
    stravaName: 'Shaghig Jouharian',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 4, distancePerWeekKm: 38.3, timePerWeek: '4h 2m', elevationPerWeekM: 297 },
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
    thisYear: { activities: 134, distanceKm: 1058.7, time: '111h 51m', elevationM: 8182 },
    allTime: { activities: 208, distanceKm: 1499.8, time: '155h 34m', elevationM: 11339 },
    highlight: 'Marathon best of 4:24:12',
  },
  {
    member: 'Sevag',
    stravaName: 'Sevag Sulahian',
    location: 'Yerevan',
    strava: '203841915',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 16.4, timePerWeek: '2h 4m', elevationPerWeekM: 144 },
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
    thisYear: { activities: 23, distanceKm: 229.2, time: '27h 39m', elevationM: 1797 },
    allTime: { activities: 23, distanceKm: 229.2, time: '27h 39m', elevationM: 1797 },
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
    stravaName: 'Mariamik Sahakyan',
    location: 'Yerevan',
    recent: { activitiesPerWeek: 1, distancePerWeekKm: 3.2, timePerWeek: '21m 51s', elevationPerWeekM: 15 },
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
];

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
