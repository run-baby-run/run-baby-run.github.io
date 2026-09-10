#!/usr/bin/env node
/**
 * Records the weather each diary entry and race actually happened in.
 *
 * Hourly, not daily, and that matters: on 10 March the daily minimum was
 * -3.4°C, but the run went out at ten at night when it was 0.2°C. A daily
 * figure would have been wrong by three and a half degrees.
 *
 * The hour is chosen from the photographs — the median time of the pictures
 * sent that day is a good proxy for when everyone was actually out — falling
 * back to 21:00 on a date with none.
 *
 * Writes src/data/weather.ts, which is committed, so ordinary builds need no
 * network. Re-run it only when new dates are added to the diary.
 *
 *   node scripts/fetch-weather.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';

const YEREVAN = { latitude: 40.1792, longitude: 44.4991, timezone: 'Asia/Yerevan' };

const read = (file) => readFileSync(file, 'utf8');

/** Dates the diary and the races care about, with any time window they set. */
function wanted() {
  const out = new Map();
  for (const file of ['src/data/diary.ts', 'src/data/races.ts']) {
    const src = read(file);
    for (const block of src.split(/\n  \{\n/).slice(1)) {
      const date = block.match(/date: '([\d-]+)'/)?.[1];
      if (!date) continue;
      const after = block.match(/photosAfter: '([\d:]+)'/)?.[1];
      // A date can appear twice — two races in a day — so keep the tighter window.
      if (!out.has(date) || after) out.set(date, after);
    }
  }
  return out;
}

/** The median time of the photographs sent on each date. */
function photoTimes() {
  const lib = read('src/data/library.ts');
  const MARK = 'export const photos: Photo[] = ';
  const start = lib.indexOf(MARK) + MARK.length;
  const photos = JSON.parse(lib.slice(start, lib.indexOf('\n];', start) + 2));
  const byDate = new Map();
  for (const p of photos) {
    if (!byDate.has(p.date)) byDate.set(p.date, []);
    byDate.get(p.date).push(p.time);
  }
  return byDate;
}

const minutes = (hhmm) => Number(hhmm.slice(0, 2)) * 60 + Number(hhmm.slice(3, 5));

/**
 * WMO codes, in the plainest words that fit on a chip.
 * https://open-meteo.com/en/docs — table at the foot of the page.
 */
function describe(code) {
  if (code === 0) return 'clear';
  if (code <= 2) return 'fair';
  if (code === 3) return 'overcast';
  if (code <= 48) return 'fog';
  if (code <= 57) return 'drizzle';
  if (code <= 67) return 'rain';
  if (code <= 77) return 'snow';
  if (code <= 82) return 'showers';
  if (code <= 86) return 'snow';
  return 'thunder';
}

const dates = wanted();
const times = photoTimes();
const all = [...dates.keys()].sort();
const [first, last] = [all[0], all.at(-1)];

const url =
  `https://archive-api.open-meteo.com/v1/archive?latitude=${YEREVAN.latitude}` +
  `&longitude=${YEREVAN.longitude}&start_date=${first}&end_date=${last}` +
  `&hourly=temperature_2m,precipitation,snowfall,wind_speed_10m,weather_code` +
  `&daily=snowfall_sum,precipitation_sum` +
  `&timezone=${encodeURIComponent(YEREVAN.timezone)}`;

console.log(`${dates.size} dates, ${first} to ${last}`);
const response = await fetch(url);
if (!response.ok) throw new Error(`Open-Meteo said ${response.status}`);
const { hourly, daily } = await response.json();

// Whether anything fell that day, which the run's own hour can miss: on 8
// March it snowed at five in the morning and was merely overcast by the time we
// were out, on a route that was still white.
//
// Rain needs a millimetre before it counts. Open-Meteo reports traces of 0.1mm
// on half the days of a Yerevan summer, and saying "rain earlier" about 0.1mm
// put the note on 32 of 57 entries and meant nothing on any of them. Snow needs
// only to have happened.
const RAIN_MM = 1.0;
const SNOW_CM = 0.05;
const dayTotals = new Map(
  daily.time.map((date, i) => [date, { snow: daily.snowfall_sum[i], rain: daily.precipitation_sum[i] }])
);

// Index the flat hourly arrays by date, so each day can be searched cheaply.
const rows = new Map();
hourly.time.forEach((stamp, i) => {
  const [date, clock] = stamp.split('T');
  if (!rows.has(date)) rows.set(date, []);
  rows.get(date).push({ clock, i });
});

const weather = {};
let missing = 0;

for (const [date, after] of dates) {
  const day = rows.get(date);
  if (!day) { missing++; continue; }

  // When were we out? The middle of that day's photographs, or 21:00.
  let target = 21 * 60;
  const shots = (times.get(date) ?? []).filter((t) => !after || t >= after).sort();
  if (shots.length) target = minutes(shots[Math.floor(shots.length / 2)]);

  const hour = day.reduce((best, row) =>
    Math.abs(minutes(row.clock) - target) < Math.abs(minutes(best.clock) - target) ? row : best
  );

  const i = hour.i;
  weather[date] = {
    at: hour.clock.slice(0, 5),
    tempC: Math.round(hourly.temperature_2m[i]),
    wind: Math.round(hourly.wind_speed_10m[i]),
    sky: describe(hourly.weather_code[i]),
    ...(hourly.snowfall[i] > 0 ? { snowCm: hourly.snowfall[i] } : {}),
    ...(hourly.precipitation[i] > 0 ? { rainMm: hourly.precipitation[i] } : {}),
    ...(dayTotals.get(date)?.snow >= SNOW_CM ? { snowedThatDay: true } : {}),
    ...(dayTotals.get(date)?.rain >= RAIN_MM ? { rainedThatDay: true } : {}),
  };
}

writeFileSync(
  'src/data/weather.ts',
  `// Generated by scripts/fetch-weather.mjs — do not edit by hand.
//
// The weather each diary entry and race actually happened in, taken at the hour
// we were out rather than as a daily average. Source: Open-Meteo's historical
// archive for Yerevan (${YEREVAN.latitude}, ${YEREVAN.longitude}).

export interface Weather {
  /** The hour these figures are for, HH:MM local. */
  at: string;
  tempC: number;
  /** km/h */
  wind: number;
  sky: 'clear' | 'fair' | 'overcast' | 'fog' | 'drizzle' | 'rain' | 'snow' | 'showers' | 'thunder';
  snowCm?: number;
  rainMm?: number;
  /** Snow fell at some point that day, even if not while we were out. */
  snowedThatDay?: boolean;
  rainedThatDay?: boolean;
}

export const weather: Record<string, Weather> = ${JSON.stringify(weather, null, 2)};
`
);

console.log(`wrote src/data/weather.ts — ${Object.keys(weather).length} dates${missing ? `, ${missing} with no data` : ''}`);
console.log('spot checks:', ['2026-03-08', '2026-03-10', '2026-07-04'].map((d) => `${d} ${JSON.stringify(weather[d])}`).join('\n               '));
