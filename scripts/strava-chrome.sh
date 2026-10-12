#!/usr/bin/env bash
# Starts the Chrome that scripts/refresh-stats.mjs attaches to.
#
# A separate profile is required, not a convenience: since Chrome 136 the
# remote debugging port is silently ignored on the default profile. Log into
# Strava in this window once and the profile remembers it.
exec google-chrome \
  --remote-debugging-port=9222 \
  --user-data-dir="$HOME/.strava-chrome" \
  https://www.strava.com/dashboard
