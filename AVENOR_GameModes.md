# AVENOR — Competitive Game Modes & Match Rules

> **Scope:** This document covers the separate match-based competitive playlists selected from the AVENOR home screen. It does not define the rotating Open World. The Open World is the primary sandbox experience; its four-day map rotation is a world event, not a mode.

## 1. Relationship to the Open World

- Players can enter the active Open World or queue for a competitive playlist from the home screen.
- Competitive modes use the player's permanently unlocked weapons and configured loadouts.
- **Weapons are discovered/unlocked in the Open World only.** Competitive matches never grant weapon unlocks.
- Competitive modes may award account XP, weapon mastery, competitive rank, achievements and cosmetics.
- Weapon ownership is never lost through competitive match results.
- Core movement, weapon identity, input and readability should remain consistent between Open World and competitive modes.

## 2. Playlist principles

Every mode needs:
- A clear objective and win condition.
- A reason to exist beyond a minor score-limit variation.
- Fair spawns and understandable match flow.
- Match lengths that respect players' time.
- Readable HUD and audio cues.
- Maps designed for its player count and format.
- A plan for ranked eligibility, if applicable.

The initial playlist remains a proposed set, not a locked release promise.

## 3. Proposed initial roster

| Mode | Players | Format | Win condition (prototype target) |
|---|---:|---|---|
| DUEL | 1v1 | Round-based | First to 5 round wins |
| DUOS | 2v2 | Round-based | First to 5 round wins |
| TEAM DEATHMATCH | 4v4 | Respawn | First to 50 team eliminations |
| FREE FOR ALL | 8 | Respawn | First to 25 eliminations |
| HARDPOINT | 4v4 | Objective | First to 150 objective points |
| CAPTURE THE FLAG | 4v4 | Objective | First to 3 captures |
| AVENOR ORIGIN | 4v4 | Two-stage objective | Complete the two-stage world-control objective |

Player counts, score limits and target durations are initial test values. The original AVENOR ORIGIN concept may be retained for testing, but it must earn its place through playtests rather than being assumed as a final signature mode.

## 4. Shared match rules

- Server owns match state, timer, score, eliminations, objective state and results.
- Loadouts are selected before queueing and locked at match start unless the mode explicitly permits changes.
- Only owned weapons may be equipped.
- No weapon unlocks are granted by match completion.
- Rewards are previewed and clearly separated into account XP, mastery, rank and cosmetics.
- Players can leave a match, but progression and penalties must follow clear fair-play rules.
- Reconnect behaviour and late-join rules are defined per mode.
- All modes must support accessible controls and clear feedback.

## 5. Mode-specific notes

### DUEL
Small, focused 1v1 combat. Prioritise clean sightlines, fair starts and short downtime between rounds.

### DUOS
2v2 round-based combat. Team coordination matters, but individual movement and weapon skill remain important.

### TEAM DEATHMATCH
Continuous respawn team combat. Spawn safety and anti-spawn-trap design are critical.

### FREE FOR ALL
Every player competes individually. The map must avoid dominant camping positions and repeated spawn eliminations.

### HARDPOINT
Teams contest a rotating objective. Objective movement and score state must be visible and consistent.

### CAPTURE THE FLAG
Teams retrieve and return the opposing flag. Flag carrier information, return rules and overtime must be explicit.

### AVENOR ORIGIN
Retain as an experimental original mode concept: a two-stage objective involving activation of a central Core and a subsequent claim phase. It remains experimental until a focused prototype proves it is fun, readable and distinct.

## 6. Ranked and casual

- Casual playlists prioritise fast access and experimentation.
- Ranked uses a clearly defined competitive rating system and stable rules.
- Rank is separate from account level and weapon mastery.
- No rank tier grants combat power or exclusive weapon statistics.
- Seasonal ranked rewards are cosmetic or recognition-based.
- Do not force Open World participation to queue for an already-unlocked weapon; players simply use their current collection.

## 7. Competitive maps

Competitive maps are purpose-built compact arenas. They are not the large Open World regions and do not follow the four-day world rotation.

The world collection in `AVENOR_Worlds.md` and competitive arena map design in `AVENOR_Maps.md` must remain clearly distinguished. A world region may inspire a competitive arena, but it is not automatically reused as one.

## 8. Prototype priorities

1. DUEL using a small subset of Open World-discovered weapons.
2. TDM to test respawn flow and team HUD.
3. One objective mode.
4. Test loadout parity and ammunition rules.
5. Test ranked only after casual match quality is stable.

## 9. Open decisions

- Final mode roster and launch availability.
- Exact player counts, score limits, round lengths and overtime.
- Ranked mode selection.
- Whether abilities are available in every competitive mode.
- Final ammo behaviour for each mode.
- Whether AVENOR ORIGIN survives prototype testing.
