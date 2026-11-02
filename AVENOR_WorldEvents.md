# AVENOR — Global World Events & Limited-Time Experiences

> **Purpose:** Define events that meaningfully transform AVENOR. Major seasonal events change the entire active world, not just a few decorated districts. Smaller live incidents and competitive playlists remain separate event types.

## 1. Event layers

AVENOR has three distinct event layers:

1. **Global World Events:** large, world-wide transformations. They can replace the active region, change its biome or season, alter weather, lighting, vegetation, water, wildlife, NPC routines, landmarks, routes and available activities. The whole server shares the same world state.
2. **Local World Events:** temporary situations inside the active world, such as a convoy, expedition, blackout or travelling market. These add activity without replacing the world's overall identity.
3. **Competitive Events:** limited-time playlists and rulesets such as 1v1, 2v2, FFA and objective variants. These run in dedicated match servers and do not alter the Open World.

Calendar events can combine all three layers, but the global transformation is the defining feature of major seasonal events.


## 2. Admin-triggered and live operations events

**Admin Events** are manually started by authorised developers or event staff. They can happen without a calendar date and may be announced, partially announced or a complete surprise. An admin event can run across every live Open World server, a selected world pool, or one clearly labelled showcase server.

### Admin event examples

- **WORLD SHIFT:** The active region transitions into a different approved world while a live announcement explains the change.
- **METEOR WATCH:** A meteor shower crosses the sky. Players can visit impact sites to investigate strange materials and environmental clues. No unavoidable map-wide damage.
- **ANOMALY BREACH:** Strange energy appears at selected landmarks, temporarily changing lighting, sounds, NPC behaviour and access to hidden rooms.
- **TITAN SIGHTING:** A huge neutral creature or machine can be seen moving in the far distance. Players follow its route and discover traces; it is a spectacle and exploration event, not a forced boss fight.
- **SUPPLY SURGE:** Several temporary supply stations appear across the region with balanced, capped event rewards. No exclusive permanent weapon unlocks.
- **FACTION MOBILISATION:** NPC groups move in large numbers and establish temporary camps or checkpoints, changing routes and local encounters.
- **SKYFALL:** The sky, clouds and lighting shift into a dramatic event state, with unusual objects or signals appearing at distant landmarks.
- **WORLDWIDE HIDE & SEEK:** A harmless community-wide search begins, with clues placed across the map and a shared progress tracker.
- **ADMIN SHOWCASE:** Developers demonstrate a new map area, NPC, vehicle, weapon cosmetic or upcoming feature in a controlled public event.
- **CHAOS HOUR:** A short, playful ruleset changes selected world properties, such as low gravity in marked zones, unusual jump pads or altered vehicle handling. Keep it opt-in or clearly signposted and never alter core controls unexpectedly.

### Admin event controls and safeguards

- Only authenticated, permission-checked staff accounts can start, stop, schedule or modify events. Never trust a client-side admin button or user-submitted role flag.
- Use a tiered permission model: moderators can start approved presets; senior event staff can schedule larger events; only trusted developers can publish new global world-state packages or override production rotation.
- Every action is logged with actor, timestamp, event ID, target scope and before/after state. Logs are append-only for review.
- Admins choose a predefined event preset and scope. Production commands should not allow arbitrary code execution or unrestricted edits to player data.
- Include a preview/test-server option, confirmation for global actions, a maximum duration, cooldowns and an immediate safe-stop/rollback.
- A global admin event must use the same server-authoritative schedule and transition rules as scheduled events. All targeted servers receive the same event version.
- Admins cannot grant themselves or players unbounded currency, exclusive gameplay power or permanent weapon ownership through event controls. Rewards use the normal server-validated reward pipeline.
- Never force-teleport players into danger, erase progress, change ownership, or interrupt a competitive match. Clearly communicate event scope and whether participation is optional.
- If a command fails or the event package is unavailable, return to the last known safe world state and record the failure.

## 3. Additional event families

These broaden the live calendar beyond seasonal transformations and small local incidents.

### Community-wide goals
Players across all servers contribute to one shared target, such as documenting wildlife, restoring a research station, mapping unexplored sites or delivering supplies. Progress is aggregated server-side and rewards are granted only after validated contributions. The goal should remain achievable for players who join late.

### World discovery campaigns
A chain of clues appears over several days. Each stage reveals a new location, story fragment or hidden route. Different servers share the same campaign stage so the community can compare discoveries without requiring everyone online simultaneously.

### World emergencies
A region-wide situation changes NPC routines and available routes: a major communications outage, evacuation drill, infrastructure failure, flood warning or containment alert. These should create exploration and cooperation, not unavoidable damage or forced combat.

### Developer live showcases
A scheduled or surprise session where developers reveal a new region, feature, cosmetic collection or upcoming update. It can include a temporary exhibit, guided NPC tour, live Q&A area or playable preview. The showcase must not grant gameplay advantages unavailable elsewhere.

### Creator and community takeovers
A moderated community spotlight can feature approved map photography, player discoveries, fan-made banners or creator-hosted challenges. Submissions need moderation and privacy safeguards; never display unreviewed player text globally.

### Milestone celebrations
A game-wide visit, update, community exploration or anniversary milestone can trigger a shared visual celebration, archive exhibit or temporary activity. Milestones should not depend on artificial login pressure.

### Weather and sky incidents
Short-lived world states such as auroras, meteor showers, eclipses, unusual cloud formations, heavy rain or rare fog banks. They can be atmospheric-only or reveal optional discoveries, with visibility and accessibility kept fair.

### Exploration races and scavenger hunts
Optional timed routes, landmark photography challenges, clue hunts and multi-stop discovery trails. Leaderboards should reward completion and route variety, not exploit-prone endless repetition.

### Social world gatherings
Temporary concerts, vehicle meets, exhibitions, public games, travelling shows and community meetups. Provide multiple gathering points and activities so the entire server does not bottleneck into one tiny area.

### Competitive pop-up events
Short tournaments, weapon-restriction playlists, map-specific cups, team challenges and experimental objective rules. These remain in dedicated competitive servers and never alter Open World weapon ownership.

## 4. Global transformation rules


- A major Global World Event owns the active Open World state for its duration. It is not merely a set of decorations placed over the normal map.
- A global event may select a different region from the normal rotation. The event's world selection takes priority over the regular rotation schedule.
- Some regions may be excluded when their geography or climate conflicts with the event. For example, WINTERLIGHT should not load REDSTONE as a normal desert world. The event can instead select a cold region such as NORTHPASS, PINEFALL or BLACKRIDGE.
- If the event calls for a fully transformed world, the entire playable region must follow that theme. Avoid obvious untreated pockets where the normal biome clashes with the event.
- Global transformations should change several systems together: terrain/material appearance, vegetation, weather, sky and lighting, water/ice, ambience, wildlife, NPC clothing and schedules, points of interest, routes and activities.
- Transformations must preserve navigation, readable landmarks, accessibility and gameplay fairness. Snow must not hide important paths or make combat unreadable.
- Do not build ten duplicate maps for every season. Use modular world-state variants, shared environmental assets and carefully selected event-specific changes.
- A world transition happens at a controlled server boundary. Never swap terrain or major collision during an active player encounter.
- All servers use one authoritative schedule and the same event/world identity. Clients never decide which global event is active.
- Permanent player data remains safe: weapons, cosmetics, mastery, discoveries and progression persist.
- No permanent weapon should be obtainable only during a short event window. Event discoveries can be archived and return later.
- Every transformation needs a mobile/server performance budget, moderation review, fallback state and tested transition path.
- Use UTC timestamps on the server and localised dates in the UI.

## 5. Year-round event catalogue

These events can run at any time of year, subject to cooldowns and schedule variety. Most are Local World Events or Competitive Events, not full global transformations.

### 01 — FRONTIER EXPEDITION
**Duration:** 72 hours. **Type:** Local World.
A travelling expedition sets up a temporary camp at a remote landmark. NPC explorers map nearby routes, mark environmental clues and offer a multi-stage discovery trail. The camp moves to a different region on later runs. Players can join at any stage.
**Changes:** temporary camp, NPC route, map clues, hidden site and journal entries.

### 02 — BLACKOUT
**Duration:** 90 minutes per occurrence, several occurrences across a 24-hour window. **Type:** Local World.
A major district loses power. Street lighting, selected doors, signs, lifts and security systems change state. Backup generators can be found and activated. Emergency crews arrive and NPC routines adapt.
**Changes:** district lighting, access routes, generator interactions, NPC routines and ambience.

### 03 — MOVING MARKET
**Duration:** 48 hours. **Type:** Local World.
A convoy of traders travels between settlements, setting up temporary stalls at different stops. Stock is curated and cosmetic/utility focused; it does not bypass permanent weapon discovery rules.
**Changes:** moving NPC convoy, temporary market locations, rotating services and social gathering points.

### 04 — LOST SIGNAL
**Duration:** 48 hours. **Type:** Local World.
Unusual radio transmissions appear across the region. Players triangulate signal sources by visiting locations and comparing clues. Different players may find different fragments, encouraging conversation without requiring a party.
**Changes:** signal props/audio, clue locations, journal puzzle and a hidden temporary destination.

### 05 — RIVAL TERRITORIES
**Duration:** 72 hours. **Type:** Local World.
Two NPC groups contest temporary outposts. Players may help either side, ignore the conflict or explore the changing routes. Control shifts through NPC activity, not a permanent player-owned territory system.
**Changes:** faction patrols, outpost access, local dialogue, supply routes and optional encounters.

### 06 — CONVOY RUN
**Duration:** 24 hours. **Type:** Local World.
A civilian convoy crosses the region on a scheduled route. Players can escort it, scout ahead, help with roadblocks or simply watch it pass. NPCs react to threats and route obstructions.
**Changes:** moving convoy, road traffic, escort NPCs, route incidents and temporary rewards.

### 07 — THE DEEP SURVEY
**Duration:** 4 days. **Type:** Local World.
A research crew opens a temporary survey operation at a cave, tunnel, mine or underwater-adjacent site. Players locate survey equipment, map chambers and uncover a permanent journal discovery. The location differs by world.
**Changes:** temporary site access, research NPCs, exploration props and a layered discovery route.

### 08 — STORMFRONT
**Duration:** 6 hours of active weather within a 24-hour window. **Type:** Local World.
A major storm rolls through the active region. Visibility, ambient sound, selected water levels and NPC travel patterns change. Exposed routes become more difficult while sheltered routes and interiors become more interesting. No random unavoidable damage.
**Changes:** weather state, ambience, selected traversal routes and NPC schedules.

### 09 — OPEN HOUSE
**Duration:** 48 hours. **Type:** Local World.
Normally closed public buildings open for a temporary community weekend: museum, station, observatory, factory visitor wing or civic hall depending on the map. Each contains exhibits, environmental stories and interactive discoveries.
**Changes:** interior access, NPC hosts, exhibits, audio logs and collectible records.

### 10 — BOUNTY BOARD
**Duration:** 72 hours. **Type:** Local World.
A temporary board posts optional tracking tasks involving NPC targets, missing cargo or unusual sightings. Objectives are investigation and location-based, not simply repeated eliminations.
**Changes:** temporary clues, NPC movement schedules, tracking interactions and a limited event journal. Rewards are cosmetic/XP, never exclusive weapons.

### 11 — DUEL CIRCUIT
**Duration:** 48 hours. **Type:** Competitive.
A dedicated 1v1 ladder rotates through small purpose-built arenas and a limited set of match rules. Players earn circuit points for completed matches, with placement rewards based on participation and performance.
**Changes:** featured 1v1 queue, arena rotation, event leaderboard and cosmetic reward track.

### 12 — DUOS TAKEOVER
**Duration:** 72 hours. **Type:** Competitive.
A 2v2 limited playlist with round-based matches and a small curated arena pool. Party and solo queue rules are clearly separated to reduce unfair premade matchups.
**Changes:** featured 2v2 queue, team-focused arena pool and duo challenges.

### 13 — ONE IN THE CHAMBER
**Duration:** 24 hours. **Type:** Competitive ruleset.
FFA or small-team rounds begin with a single loaded shot. A successful elimination grants another shot. It changes match rules, not permanent weapon ownership.
**Changes:** temporary ammo rule, compact maps, altered scoring and event stats.

### 14 — ARSENAL SHUFFLE
**Duration:** 48 hours. **Type:** Competitive ruleset.
Players receive a rotating preset weapon sequence during the match. Each elimination advances the sequence. A curated subset keeps every step readable and balanced.
**Changes:** match loadout progression, weapon order, HUD and score rules. Permanent ownership is untouched.

### 15 — HEAVY ROTATION
**Duration:** 48 hours. **Type:** Competitive.
A limited playlist focuses on heavier, slower-handling weapon classes and larger arena routes. Movement lanes, objective timings and map selection are tuned for the featured weapon set.
**Changes:** curated loadouts, arena pool and objective pacing.

### 16 — OBJECTIVE LAB
**Duration:** 72 hours. **Type:** Competitive.
A rotating objective playlist tests variants of Hardpoint, CTF and AVENOR ORIGIN. One variant is featured at a time, with feedback after matches. Only variants that test well graduate to the permanent playlist.
**Changes:** objective rules, queue rotation, map pool and post-match feedback.

### 17 — FFA AFTER HOURS
**Duration:** 24 hours. **Type:** Competitive.
A compact FFA playlist uses night-lit arenas with alternate routes and visibility profiles. The goal is different pacing, not darkness that hides opponents unfairly.
**Changes:** night arena variants, route lighting, spawn layout and FFA queue.

### 18 — LAST SQUAD
**Duration:** 72 hours. **Type:** Competitive.
Small teams compete in short elimination rounds with limited or no respawns, depending on the tested ruleset. There is no Open World loot loss.
**Changes:** squad queue, round structure, spectator flow and compact maps.

## 6. Calendar-wide world transformations

These are the major seasonal experiences. Each one should make the active world feel genuinely different from the normal version. Windows and exact dates are proposals.

### 19 — HALLOWEEN: VEILFALL
**Window:** approximately 10 days around October 31. **Type:** Global World + Local World + optional Competitive.
**Global transformation:** The entire active region shifts into a late-autumn night state. Trees lose leaves, vegetation darkens, skies become overcast, fog and wind move across open areas, water and ground materials take on a colder look, and every settlement receives a consistent Halloween atmosphere. Landmarks gain eerie alternate states, but routes and silhouettes remain readable.
**World activity:** Masked visitors and unusual NPC groups appear throughout the region. Abandoned interiors open, strange signals lead to hidden places, and lantern trails connect discoveries. A themed night playlist can run separately.
**World selection:** Prefer worlds with forests, towns, old structures and varied interiors. Avoid loading a bright summer/island version unchanged.
**Changes:** region-wide autumn-night art state, weather, vegetation, lighting, NPC variants, interior access, ambient audio and discovery trails.

### 20 — CHRISTMAS: WINTERLIGHT
**Window:** approximately 14 days around December 25. **Type:** Global World + Local World + optional Competitive.
**Global transformation:** Christmas takes over the entire Open World. The active region becomes a coherent winter environment: snow-covered ground and rooftops, frozen or partially frozen water where appropriate, snow-laden trees, cold skies, winter lighting, snowstorms and winter ambience. Cities, roads, forests, mountains and interiors all receive matching seasonal treatment. It must not look like a normal map with a few snowy props.
**World selection:** Winterlight may override the regular four-day rotation and select a cold-compatible region, such as NORTHPASS, PINEFALL or BLACKRIDGE. REDSTONE and other strongly hot/desert worlds are excluded for this event rather than awkwardly forcing snow onto them. The event can use one featured winter world or rotate between a small approved winter pool.
**World activity:** Settlements become decorated winter towns. A travelling gift train or delivery convoy crosses the map, markets and social areas open, and players can help deliver parcels or uncover winter discoveries. Wildlife, civilian clothing, NPC schedules and services adapt to winter conditions.
**Changes:** whole-region winter biome state, snow coverage, ice/water variants, winter vegetation, sky/weather, settlement dressing, NPC clothing/routines, wildlife, routes and seasonal activities.

### 21 — NEW YEAR: FIRST LIGHT
**Window:** December 30 to January 2. **Type:** Global World + Local World + social.
**Global transformation:** The entire region enters a special celebration state. Night lighting, illuminated landmarks, temporary sky effects and region-wide decorations create a shared countdown atmosphere. At the event's central moment, the world transitions into a synchronised new-year sunrise/first-light sequence.
**World activity:** Players can gather at a landmark, activate public light installations, explore temporary night routes and discover a first-sunrise viewpoint. The celebration should work across server instances without requiring every player to be online at one exact second.
**World selection:** Any region with a strong skyline, coastline, mountain viewpoint or central landmark can qualify.
**Changes:** region-wide lighting and decoration state, synchronised countdown sequence, temporary gathering spaces, ambience and sunrise discovery.

### 22 — SPRING: WILDBLOOM
**Window:** approximately 10 days around the spring equinox. **Type:** Global World + Local World.
**Global transformation:** The entire region moves into spring. Snow recedes in cold areas, trees and vegetation regain leaves, flowers and ground cover appear across suitable terrain, rivers and lakes reflect seasonal thaw, and skies and lighting become brighter. Each biome gets a spring version rather than receiving identical flowers everywhere.
**World activity:** Wildlife becomes more active, migratory species appear, botanical research stations open and temporary paths or clearings reveal new discoveries. NPC routines and outdoor gathering spaces change with the season.
**World selection:** Broadly compatible with most worlds, but each needs its own authored spring state.
**Changes:** region-wide vegetation and terrain materials, snowmelt, water state, wildlife, weather, NPC schedules, temporary research sites and discovery records.

### 23 — SUMMER: SUNRUN
**Window:** approximately 10 days in mid-summer. **Type:** Global World + Local World + social.
**Global transformation:** The whole active region enters summer. Longer/brighter daylight, warmer skies, lush vegetation where appropriate, dry paths, changed water appearance and summer ambience affect the full map. Coastal regions gain bright beaches and clear water; forests gain dense green canopies; cities gain rooftop and street-life changes. This is a full seasonal art/weather state, not just a beach party.
**World activity:** Shoreline races, parkour routes, public games, evening concerts and temporary social spaces appear where geography supports them. Non-coastal worlds receive alternatives such as hilltop festivals, outdoor cinemas or town fairs.
**World selection:** Most worlds can qualify, with activities adapted to geography.
**Changes:** region-wide summer lighting/weather/vegetation state, water and shoreline variants, NPC clothing/routines, public spaces and seasonal activities.

### 24 — APRIL FOOLS: WORLD GLITCH
**Window:** April 1, 24 hours. **Type:** Global World + Local World.
**Global transformation:** The whole region receives a harmless reality-glitch treatment. Selected materials, signs, environmental props, public displays and NPC routines become subtly inconsistent. Some familiar landmarks have playful alternate versions, and unusual visual rules connect into a region-wide puzzle. It should feel like the world itself is behaving strangely, not like random props were scattered around.
**World activity:** NPC dialogue, signage, public announcements and hidden interactions contain clues. Players can compare discoveries. Do not invert core controls, obstruct accessibility or make the world unreadable.
**World selection:** Any region, with a tailored set of environmental swaps.
**Changes:** region-wide visual/audio variants, landmark swaps, NPC dialogue/routines, public displays and connected puzzles.

### 25 — AUTUMN: HARVEST CIRCUIT
**Window:** approximately 10 days around the autumn equinox. **Type:** Global World + Local World + social.
**Global transformation:** The entire region shifts into autumn. Forests and street trees change colour, leaves collect along paths, fields and vegetation mature or fade, skies become cooler, rain and wind become more common, and water/lighting take on an autumn tone. Every biome receives an appropriate autumn palette.
**World activity:** Harvest markets, a travelling fair, deliveries, outdoor displays and vendor stories appear across the region. NPC clothing, routines and settlement activity adapt to the season.
**World selection:** Most worlds qualify, with event spaces adapted to local geography.
**Changes:** region-wide foliage/material/weather state, market and fair spaces, vendor NPCs, delivery routes and discovery trails.

### 26 — ANNIVERSARY: AVENOR REUNION
**Window:** 7 days around the game's launch anniversary. **Type:** Global World + Local World + community.
**Global transformation:** The active region becomes a celebration of AVENOR's history. Landmarks display anniversary lighting, public spaces gain a coherent event identity, and selected locations become archive spaces showing past world states, community milestones and previous event objects. The transformation should feel present across the whole map, not confined to one lobby.
**World activity:** Archived event spaces and selected NPC visitors return in curated form. A community-wide exploration record can be tracked. Returning content must be labelled as an archive, not presented as a live version of an old event.
**World selection:** Any region can host the anniversary state.
**Changes:** region-wide anniversary dressing, landmark lighting, archive interiors, returning props/NPCs, community progress and commemorative cosmetics.

## 7. Seasonal world compatibility

| Event | Preferred world treatment | Rotation rule |
|---|---|---|
| VEILFALL | Autumn-night version with forests, towns and interiors | Choose from compatible regions |
| WINTERLIGHT | Fully snow-covered winter/Arctic-compatible world | Override normal rotation; exclude hot desert worlds |
| FIRST LIGHT | Celebration lighting and sunrise state | Choose a region with a strong landmark |
| WILDBLOOM | Region-specific spring, thaw and growth state | Most regions eligible with authored variants |
| SUNRUN | Full summer state with geography-specific activities | Most regions eligible |
| WORLD GLITCH | Region-wide playful anomaly state | Any region with a tested variant |
| HARVEST CIRCUIT | Full autumn foliage/weather state | Most regions eligible |
| AVENOR REUNION | Anniversary state across the full region | Any region |

## 8. Scheduling and transitions

- At most one major Global World Event controls the Open World at a time.
- A Global World Event can take priority over the normal region rotation and define its own eligible world pool.
- Local World Events may run alongside a Global World Event only if they fit its theme and combined performance budget.
- At most one featured competitive event playlist runs at a time, while normal playlists remain available where population allows.
- A global event should have a clear start/end transition. Do not abruptly replace the world under active players.
- When the event ends, transition to the next scheduled normal region at a safe server boundary. Do not delete player discoveries or permanent ownership.
- Keep quiet gaps between major events so the world can breathe. Avoid exact-hour participation requirements.

## 9. Event data model

Each event definition should contain:
- stable eventId and version
- category: GlobalWorld, LocalWorld, Competitive, AdminTriggered or Social
- startUtc and endUtc
- eligibleWorldIds and excludedWorldIds
- global world-state package/version and transformation profile
- schedule priority and conflict group
- reward table and permanent/temporary reward flags
- progress rules and server validation
- telemetry keys and performance budget
- transition-in/transition-out rules
- fallback region/state if the event package fails

Server schedule is authoritative. A match snapshots its rules at creation. An Open World server snapshots its global event and world-state package at startup or a safe transition point.

## 10. Build and release priority

Prototype in this order:
1. **WINTERLIGHT world-state prototype:** prove that one complete region can become a convincing winter/Arctic version without rebuilding the whole map from scratch.
2. **VEILFALL:** test a second full-region art/weather state with different lighting and atmosphere.
3. **FRONTIER EXPEDITION:** test a Local World event layered on top of a global state.
4. **DUEL CIRCUIT:** test the separate competitive event system.

Do not build all seasonal variants before one region has passed performance and visual-quality tests.

## 11. Open decisions

Exact dates, durations, event rewards, featured winter-world pool, world transition timing, number of seasonal variants per region, event rerun policy and final cadence remain proposals until tested.
