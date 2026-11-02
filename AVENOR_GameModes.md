# AVENOR — Competitive Modes & Limited-Time Playlists

> This document covers permanent match-based playlists and temporary competitive events. The Open World remains the primary experience. Limited-time playlists are scheduled events, not separate permanent game modes unless they prove successful.

## 1. Relationship to the Open World
- Players enter the active Open World or queue for a competitive playlist from the home screen.
- Competitive modes use the player's permanently unlocked weapons and configured loadouts.
- Weapons are discovered/unlocked in the Open World only. Competitive matches never grant weapon unlocks.
- Competitive modes may award account XP, weapon mastery, competitive rank, achievements and cosmetics.
- Weapon ownership is never lost through competitive match results.
- Core movement, weapon identity, input and readability remain consistent.

## 2. Permanent playlist candidates

| Mode | Players | Format | Prototype win condition |
|---|---:|---|---|
| DUEL | 1v1 | Round-based | First to 5 round wins |
| DUOS | 2v2 | Round-based | First to 5 round wins |
| TEAM DEATHMATCH | 4v4 | Respawn | First to 50 team eliminations |
| FREE FOR ALL | 8 | Respawn | First to 25 eliminations |
| HARDPOINT | 4v4 | Objective | First to 150 objective points |
| CAPTURE THE FLAG | 4v4 | Objective | First to 3 captures |
| AVENOR ORIGIN | 4v4 | Two-stage objective | Complete the two-stage Core objective |

Player counts and score limits are test values, not final balance.

## 3. Temporary competitive event playlists
These are limited-time event queues. Their duration and rule changes are specified in AVENOR_WorldEvents.md.

- DUEL CIRCUIT: temporary 1v1 ladder, rotating arenas and event leaderboard.
- DUOS TAKEOVER: featured 2v2 round-based playlist.
- ONE IN THE CHAMBER: one loaded shot; an elimination grants another.
- ARSENAL SHUFFLE: elimination advances a curated weapon sequence.
- HEAVY ROTATION: curated heavy-weapon set with tuned maps/objective pacing.
- OBJECTIVE LAB: temporary Hardpoint/CTF/AVENOR ORIGIN variants, one featured at a time.
- FFA AFTER HOURS: night-lit arena variants and alternate routes.
- LAST SQUAD: short team-elimination rounds with limited/no respawns.

A temporary playlist should change match decisions, pacing, team composition or objective flow. A renamed normal queue or XP multiplier alone is not enough.

## 4. Shared match rules
- Server owns match state, timer, score, eliminations, objective state and results.
- Loadouts are selected before queueing and locked at match start unless a mode explicitly permits changes.
- Only owned weapons may be equipped.
- No weapon unlocks are granted by match completion.
- Rewards are previewed and clearly separated into account XP, mastery, rank and cosmetics.
- Players can leave, but progression and penalties follow clear fair-play rules.
- Reconnect behaviour and late-join rules are defined per mode.
- Every mode supports accessible controls and clear feedback.
- Event matches keep their starting rules until the match ends, even if the event schedule expires.

## 5. Ranked and casual
- Casual playlists prioritise fast access and experimentation.
- Ranked uses a clearly defined competitive rating system and stable rules.
- Rank is separate from account level and weapon mastery.
- No rank tier grants combat power or exclusive weapon statistics.
- Seasonal ranked rewards are cosmetic or recognition-based.
- Do not force Open World participation to queue for an already-owned weapon.

## 6. Competitive map standards
Competitive maps are purpose-built compact arenas, not the large Open World regions. Each mode needs fair spawns, multiple approaches, counterplay to strong positions, objective-readable geometry and predictable performance. Arena variants used by events must be tested independently.

## 7. Prototype order
1. DUEL permanent queue and DUEL CIRCUIT event.
2. TDM to test respawn flow and team HUD.
3. DUOS and DUOS TAKEOVER.
4. One objective mode.
5. ONE IN THE CHAMBER and ARSENAL SHUFFLE as low-content-cost event rules.
6. Larger event playlists only after matchmaking population supports them.

## 8. Open decisions
Final permanent roster, exact player counts, score limits, round lengths, overtime, ranked mode selection, ability availability, ammunition rules and which event playlists graduate to permanent status.
