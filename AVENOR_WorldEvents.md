# AVENOR — Live Events & Limited-Time Experiences

> **Purpose:** Define temporary experiences that change what players can do, see, discover or compete in. Events are not merely double-XP weekends or decorations. Every event below has a gameplay/world change and a clear limited duration.

## 1. Event structure

AVENOR has two connected event families:

1. **Open World events:** temporary changes to the active region. These preserve exploration as the main experience and may alter locations, NPC behaviour, routes, discoveries, services, hazards or world activity.
2. **Competitive mode events:** limited-time playlists and rule variants such as 1v1, 2v2, FFA and objective modes. These are selected from the home screen and run in dedicated match servers.

A third layer is **calendar/seasonal events**. These only activate during their real-world calendar window, such as Halloween or Christmas. They can include both Open World changes and limited competitive playlists.

Events can overlap only when their combined server, map and UI cost has been tested. Avoid flooding the player with simultaneous banners.

## 2. Event rules

- Every event has a start time, end time, timezone policy, eligible world/modes, content version, reward table and fallback behaviour.
- All servers read one authoritative event schedule. Clients never decide whether an event is active.
- Event participation is optional unless a player queues into its playlist.
- Permanent rewards are saved to the player's profile. Temporary world state is not.
- No event removes owned weapons, mastery, cosmetics or progression.
- Do not put permanent weapon unlocks exclusively behind a short event window. Event discoveries may be archived and return later.
- Events should offer meaningful participation, not just login rewards.
- Every event needs a mobile/performance budget, moderation review and exploit-resistant reward validation.
- Display remaining time clearly in the event page. In-world, use environmental cues rather than constant intrusive alerts.
- If an event ends during a match, let that match finish under its starting rules; do not change rules mid-round.
- Use UTC timestamps on the server; display localised dates to players.

## 3. Year-round event catalogue

These can run at any time of year, subject to cooldowns and schedule variety.

### 01 — FRONTIER EXPEDITION
**Duration:** 72 hours. **Type:** Open World.
A travelling expedition sets up a temporary camp at a remote landmark. NPC explorers map nearby routes, mark strange environmental clues and offer a multi-stage discovery trail. The camp moves to a new region on later runs. Players can join at any stage; clues remain discoverable without a full party.
**Changes:** temporary camp, NPC route, map clues, hidden site and journal entries.

### 02 — BLACKOUT
**Duration:** 90 minutes per occurrence, several occurrences across a 24-hour event window. **Type:** Open World.
A district loses power. Street lighting, some doors, signs, lifts and security systems change state. Backup generators can be found and activated. Some interiors become accessible while others become harder to navigate. Emergency crews arrive.
**Changes:** district lighting, access routes, generator interactions, NPC routines and ambience.

### 03 — MOVING MARKET
**Duration:** 48 hours. **Type:** Open World.
A convoy of traders travels between settlements, setting up temporary stalls at different stops. Their stock is curated and cosmetic/utility focused; it does not bypass permanent weapon discovery rules. Players can follow the convoy or encounter it by chance.
**Changes:** moving NPC convoy, temporary market locations, rotating services and social gathering points.

### 04 — LOST SIGNAL
**Duration:** 48 hours. **Type:** Open World.
Unusual radio transmissions appear across the region. Players triangulate signal sources by visiting locations and comparing clues. Different players may find different fragments, encouraging conversation without requiring a party.
**Changes:** signal props/audio, clue locations, journal puzzle and a hidden temporary destination.

### 05 — RIVAL TERRITORIES
**Duration:** 72 hours. **Type:** Open World.
Two NPC groups contest several temporary outposts. Players may help either side, ignore the conflict or exploit the changing routes. Control shifts through NPC activity, not a permanent player-owned territory system.
**Changes:** faction patrols, outpost access, local dialogue, supply routes and optional encounters.

### 06 — CONVOY RUN
**Duration:** 24 hours. **Type:** Open World.
A heavily escorted civilian convoy crosses the region on a scheduled route. Players can escort it, scout ahead, help with roadblocks or simply watch it pass. NPCs react to threats and route obstructions.
**Changes:** moving convoy, road traffic, escort NPCs, route incidents and temporary rewards.

### 07 — THE DEEP SURVEY
**Duration:** 4 days. **Type:** Open World.
A research crew opens a temporary survey operation at a cave, tunnel, mine or underwater-adjacent site. Players locate survey equipment, map chambers and uncover a permanent journal discovery. The location differs by world.
**Changes:** temporary site access, research NPCs, exploration tools/props and a layered discovery route.

### 08 — STORMFRONT
**Duration:** 6 hours of active weather within a 24-hour event window. **Type:** Open World.
A region-wide storm rolls through. Visibility, ambient sound, water levels in selected areas and NPC travel patterns change. Certain exposed routes become difficult while sheltered routes and interiors become more interesting.
**Changes:** weather state, ambience, selected traversal routes and NPC schedules. No random unavoidable damage.

### 09 — OPEN HOUSE
**Duration:** 48 hours. **Type:** Open World.
Several normally closed public buildings open for a temporary community weekend: museum, station, observatory, factory visitor wing or civic hall depending on the map. Each contains exhibits, environmental stories and small interactive discoveries.
**Changes:** interior access, NPC hosts, exhibits, audio logs and collectible records.

### 10 — BOUNTY BOARD
**Duration:** 72 hours. **Type:** Open World.
A temporary board posts optional tracking tasks involving NPC targets, missing cargo or unusual sightings. Objectives are investigation and location-based, not simply repeated eliminations. Players can solve them alone or together.
**Changes:** temporary clues, NPC movement schedules, tracking interactions and a limited event journal. Rewards are cosmetic/XP, never exclusive weapons.

### 11 — DUEL CIRCUIT
**Duration:** 48 hours. **Type:** Competitive playlist.
A dedicated 1v1 ladder rotates through small purpose-built arenas and a limited set of match rules. Players earn circuit points for completed matches, with placement rewards based on participation and performance. Matchmaking should consider skill and latency.
**Changes:** featured 1v1 queue, arena rotation, event leaderboard and cosmetic reward track.

### 12 — DUOS TAKEOVER
**Duration:** 72 hours. **Type:** Competitive playlist.
A 2v2 limited playlist with round-based matches and a small curated arena pool. Optional party queue and solo queue rules are clearly separated to reduce unfair premade matchups.
**Changes:** featured 2v2 queue, team-focused arena pool and duo challenges.

### 13 — ONE IN THE CHAMBER
**Duration:** 24 hours. **Type:** Competitive ruleset.
FFA or small-team rounds begin with a single loaded shot. A successful elimination grants another shot. Movement remains AVENOR movement; the mode is about accuracy and composure, not a new weapon unlock.
**Changes:** temporary ammo rule, dedicated compact maps, altered scoring and event stats.

### 14 — ARSENAL SHUFFLE
**Duration:** 48 hours. **Type:** Competitive ruleset.
Players receive a rotating preset weapon sequence during the match. Each elimination advances the sequence. The event uses a curated subset of weapons so every step is readable and balanced.
**Changes:** match loadout progression, weapon order, HUD and score rules. Does not change permanent ownership.

### 15 — HEAVY ROTATION
**Duration:** 48 hours. **Type:** Competitive playlist.
A limited playlist focused on heavier, slower-handling weapon classes and larger arena routes. It is not simply higher damage: movement lanes, objective timings and map selection are tuned for the featured weapon set.
**Changes:** curated loadouts, arena pool and objective pacing.

### 16 — OBJECTIVE LAB
**Duration:** 72 hours. **Type:** Competitive playlist.
A rotating objective playlist tests variants of Hardpoint, CTF and AVENOR ORIGIN. One variant is featured at a time, with clear rules and feedback voting after matches. Only variants that test well graduate to the permanent playlist.
**Changes:** objective rules, queue rotation, map pool and post-match feedback.

### 17 — FFA AFTER HOURS
**Duration:** 24 hours. **Type:** Competitive playlist.
A compact FFA playlist uses a changing set of night-lit arenas with alternate routes and visibility profiles. The goal is different pacing and map reading, not visual darkness that hides opponents unfairly.
**Changes:** night arena variants, route lighting, spawn layout and FFA queue.

### 18 — LAST SQUAD
**Duration:** 72 hours. **Type:** Competitive playlist.
Small teams compete in short elimination rounds with limited respawns or no respawns, depending on the tested ruleset. A match is structured around survival of the team, but there is no Open World loot loss.
**Changes:** squad queue, round structure, spectator flow and compact maps.

## 4. Calendar and seasonal events

These are tied to real-world calendar windows. Dates below are recommended operating windows and can be adjusted for the release calendar. The event must end cleanly and its rewards must be archived.

### 19 — HALLOWEEN: VEILFALL
**Window:** approximately 10 days around October 31. **Type:** Seasonal Open World + optional playlist.
A strange fog covers selected districts after dusk. Temporary lantern trails lead to abandoned interiors, masked NPC visitors appear and a few landmarks receive eerie alternate states. A limited night playlist uses themed arena dressing while keeping enemy silhouettes readable.
**Changes:** fog zones, lighting, NPC archetypes, hidden rooms, ambient audio and themed playlist.

### 20 — CHRISTMAS: WINTERLIGHT
**Window:** approximately 14 days around December 25. **Type:** Seasonal Open World.
Settlements receive lights, decorations, markets and snow where the region's climate supports it. A travelling gift train or delivery convoy follows a route. Players can help deliver parcels to NPC homes and discover small stories. Tropical worlds use rain/lights rather than forced snow.
**Changes:** settlement dressing, weather-appropriate ambience, NPC schedules, delivery route, temporary interiors and collectibles.

### 21 — NEW YEAR: FIRST LIGHT
**Window:** December 30 to January 2. **Type:** Seasonal Open World + social.
A region-wide countdown is hosted at a landmark. Players can gather, trigger local light installations and watch a synchronised celebration. Small exploration challenges reveal the first sunrise viewpoint.
**Changes:** timed landmark gathering, lighting sequence, audio, temporary social activity and journal entry.

### 22 — SPRING: WILDBLOOM
**Window:** approximately 10 days around the spring equinox. **Type:** Seasonal Open World.
The landscape changes gradually: flowers, migrating wildlife ambience, open seasonal paths and temporary botanical research stations. Players photograph or catalogue rare environmental finds rather than harvesting endless identical objects.
**Changes:** vegetation variants, ambient wildlife, open paths, research NPCs and discovery records.

### 23 — SUMMER: SUNRUN
**Window:** approximately 10 days in mid-summer. **Type:** Seasonal Open World + social activities.
Coastal and lake settlements host temporary public activities: boat-free shoreline races, parkour routes, beach games and evening concerts. Regions without beaches get town festivals and hilltop events.
**Changes:** activity spaces, NPC crowds, temporary routes, audio stages and leaderboards.

### 24 — APRIL FOOLS: WORLD GLITCH
**Window:** April 1, 24 hours. **Type:** Seasonal Open World.
A playful one-day anomaly changes harmless world details: swapped signage, unusual NPC dialogue, oversized props, reversed announcement wording and a few hidden visual puzzles. Do not invert core controls or break accessibility.
**Changes:** temporary environmental variants, NPC dialogue, secret interactions and a commemorative journal record.

### 25 — AUTUMN: HARVEST CIRCUIT
**Window:** approximately 10 days around the autumn equinox. **Type:** Seasonal Open World.
Rural and urban districts host harvest markets, timed delivery routes, local cooking displays and a travelling fair. Players help vendors prepare stalls and uncover a fairground backstory.
**Changes:** market/fair locations, vendor NPCs, temporary delivery activity, props and discovery trail.

### 26 — ANNIVERSARY: AVENOR REUNION
**Window:** 7 days around the game's launch anniversary. **Type:** Seasonal/community.
The active world displays a gallery of community milestones, archived event objects return in a curated exhibition, and players can revisit selected past event spaces. A community-wide exploration record is tracked.
**Changes:** anniversary exhibition, archive access, returning NPCs/props, community progress and commemorative cosmetics.

## 5. Scheduling recommendation

Do not run all events continuously. Recommended initial live schedule:
- At most one major Open World event active at a time.
- At most one featured competitive event playlist at a time, with normal playlists still accessible where population allows.
- Small ambient incidents can continue in the background if they fit the current event and performance budget.
- Seasonal events may replace or modify the major Open World event slot.
- Keep a quiet gap between major events so the world can breathe.
- Avoid requiring players to log in at one exact hour. Use multi-day windows and repeatable progress.

## 6. Event data model

Each event definition should contain:
- stable eventId and version
- category: OpenWorld, Competitive, Seasonal, Social
- startUtc and endUtc
- eligibleWorldIds and/or playlistId
- content package/version
- schedule priority and conflict group
- reward table and permanent/temporary reward flags
- progress rules and server validation
- telemetry keys
- performance budget
- fallback if a server starts late or the event package fails

Server schedule is authoritative. A match snapshots its rules at match creation. A world event snapshots its content version at server startup or a safe transition point.

## 7. Build and release priority

Prototype first: DUEL CIRCUIT, FRONTIER EXPEDITION and BLACKOUT. Together they test the three event foundations: limited playlist, NPC-led exploration and world-state changes. Then test one calendar event (VEILFALL or WINTERLIGHT) using existing map assets before building bespoke seasonal maps.

## 8. Open decisions
Exact real-world dates, event rewards, number of concurrent event slots, event rerun policy, seasonal content scope and final event cadence remain subject to player population, moderation, technical capacity and playtesting.
