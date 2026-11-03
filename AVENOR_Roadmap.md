# AVENOR — Complete Development Roadmap

> **Purpose:** The end-to-end production plan for AVENOR, from the first planning and visual tests to a stable public release and long-term updates. This roadmap is a sequence of gates, not a promise that every proposed world or feature ships at launch.
>
> **Current game direction:** exploration-first multiplayer open-world sandbox shooter. Exploration, permanent progression and player-driven interaction are connected. PvP is enabled throughout the Open World. Solo and team play must both be viable. Permanent weapon unlocks are safe; eligible physical items deposited in base storage can be stolen.

## How to use this roadmap

- Complete milestones in order unless a task is explicitly marked as parallel.
- Each milestone must produce a visible, testable result.
- Do not build the entire game in one AI prompt. Work in small tasks, inspect generated code and test in Roblox Studio.
- A milestone is not complete because files or assets exist. It is complete when the feature works in a playable build and passes its acceptance checks.
- Keep a known-good version before large changes.
- Maintain a decision log. **Confirmed** means selected by the creator; **proposal** means not yet approved; **TBD** means unresolved.
- Build for Roblox desktop, mobile and controller from the start. Do not leave mobile adaptation until the end.
- Performance, server authority, security, accessibility and saving are continuous requirements, not final-week tasks.

## Production order at a glance

1. Pre-production and design lock
2. Visual target and asset pipeline
3. Roblox project and technical foundation
4. Movement and weapon-feel prototype
5. First region greybox and traversal
6. Multiplayer, combat and PvP foundation
7. Inventory, discovery and permanent data
8. Camps, physical storage and theft rules
9. NPC faction squad prototype
10. Dynamic world and event framework
11. First playable vertical slice
12. First-world environment art and content production
13. Progression, collectibles and cosmetic rewards
14. Home hub, UI, social and onboarding
15. Competitive playlists
16. World rotation and live operations
17. Full QA, optimisation, security and release preparation
18. Launch, monitoring and post-launch expansion

Some content creation can run in parallel after the asset pipeline and greybox standards are proven. Do not mass-produce final art before the map scale, gameplay and performance have been tested.

---

# PHASE I — PRE-PRODUCTION

## M0 — Design source of truth and scope

**Goal:** Make sure the team and any AI coding assistant are building the same game.

### Work
- Review and reconcile the main design documents.
- Separate confirmed decisions, proposals and unresolved questions.
- Define the first-release target separately from the long-term vision.
- Establish the core pillars: exploration, progression and player-driven interaction.
- Confirm the distinction between permanent Main Hub ownership and physical world possessions.
- Define the first-world candidate and a compact first playable district.
- Create a feature dependency list and risk register.
- Define what is explicitly out of scope: civilian society simulation, police/wanted systems, forced survival chores, mandatory crafting trees and permanent weapon loss.

### Deliverables
- Approved core design brief.
- First-release scope document.
- Decision log and open-questions list.
- First playable feature checklist.
- Initial risk register.

### Exit gate
No conflicting core rules remain in the active specifications. Unresolved details are labelled TBD rather than silently invented.

## M1 — Visual target, art direction and asset pipeline

**Goal:** Establish the visual quality and repeatable asset workflow before producing large quantities of content.

### Work
- Create a visual target board for the overall game and the first world.
- Define environment style, material language, colour range, lighting, scale and readability.
- Define first-person weapon presentation and third-person character presentation.
- Establish character proportions, outfit rules, animation style and silhouette readability.
- Define weapon modelling standards, world-item versions, interaction states and cosmetic separation.
- Create a modular environment kit plan: walls, floors, doors, windows, roofs, stairs, trims, road pieces, barriers and structural variations.
- Define prop families: furniture, containers, signs, tools, cables, lights, debris, vegetation and landmarks.
- Define UI visual language, icon style, typography and AVENOR brand usage.
- Define VFX and audio direction for weapons, movement, environments, events and UI.
- Establish naming conventions, scale rules, pivots, collision standards, texture budgets, LOD rules and import validation.
- Create a source-file and versioning workflow for Blender or other chosen tools and Roblox Studio.
- Make a small representative asset pack and test it in-engine.

### Starter asset pack
- One player character presentation target.
- One representative weapon model and first-person viewmodel.
- One small modular building kit.
- One interior prop set.
- One outdoor prop set.
- One environment material set.
- One basic VFX and audio test set.
- One UI style sample.

### Deliverables
- AVENOR visual target.
- Asset production checklist and naming guide.
- Modular kit specifications.
- Tested sample assets inside Roblox Studio.
- Import and optimisation checklist.

### Exit gate
Sample assets look consistent in-engine, have correct scale and pivots, use appropriate collision, and meet an initial performance budget. Only then begin larger asset production.

---

# PHASE II — TECHNICAL AND GAMEPLAY FOUNDATION

## M2 — Roblox project foundation

**Goal:** Create a stable, organised project that can grow without becoming difficult to maintain.

### Work
- Set up the Roblox experience and required places.
- Establish source control and a backup workflow.
- Define folder, module and service conventions.
- Create development, test and release environments.
- Add basic logging and error reporting.
- Establish configuration and feature-flag patterns.
- Create a repeatable Studio test procedure.
- Set up a minimal CI or automated validation workflow if practical.
- Document how to run, test and publish safely.

### Deliverables
- Clean project structure.
- Versioned project baseline.
- Test place and release workflow.
- Development instructions.

### Exit gate
A clean checkout or known-good project copy opens and runs in Studio. A basic change can be tested and reverted reliably.

## M3 — Movement and camera prototype

**Goal:** Prove that moving around AVENOR feels excellent before building a large world.

### Work
- First-person camera and character controls.
- Sprint without stamina.
- Jump and responsive air control.
- Slide and slide-jump.
- Camera feedback, landing response and movement audio.
- Sensitivity and control settings.
- Keyboard/mouse, controller and mobile input.
- Server validation for movement plausibility and exploit resistance.
- Test movement on flat ground, slopes, stairs, tight interiors and uneven terrain.

### Deliverables
- Small movement test place.
- Tunable movement configuration.
- Input support for target devices.
- Recorded movement test results.

### Exit gate
Movement is responsive, predictable, readable and reliable across supported input types. No major clipping, exploit or network problems remain.

## M4 — Weapon handling and combat-feel prototype

**Goal:** Establish the combat foundation using a very small sample of distinct weapons.

### Work
- Weapon framework and data definitions.
- Equip, unequip, switching and firing.
- Reloading and ammunition state.
- The intended magazine model: loaded magazine, quick-access spare magazines, then slower backpack resupply.
- Hit detection and server-authoritative damage.
- Recoil, spread, animation, sound and hit feedback.
- First-person viewmodel and third-person weapon representation.
- Weapon pickup/discovery test objects.
- Basic combat HUD and accessibility settings.
- Test latency, replication, hit registration and mobile controls.

### Deliverables
- A small playable weapon set representing different firing identities.
- Working server-authoritative combat.
- Basic combat HUD.
- Weapon tuning and test report.

### Exit gate
Combat feels responsive in multiplayer and cannot be decided by trusting client-side damage, ammo or ownership claims.

## M5 — First region greybox and traversal test

**Goal:** Prove that AVENOR's world layout is enjoyable and technically viable before detailed art production.

### Work
- Select one compact first-world district.
- Block out terrain, roads, paths, landmarks, buildings and vertical routes.
- Include a small settlement, a recognisable landmark, a remote destination and several interiors.
- Add a few hidden routes and optional exploration spaces.
- Mark possible vehicle routes without committing to a full vehicle roster.
- Test travel times, visibility, navigation and encounter distances.
- Configure and test Roblox streaming.
- Build a small benchmark scene for dense geometry and traversal.

### Deliverables
- Playable greybox district.
- First map layout and landmark list.
- Traversal and streaming test report.
- Region performance baseline.

### Exit gate
The district is enjoyable to traverse without final art. Streaming works at realistic movement speeds, and the layout supports both calm exploration and player encounters.

## M6 — Multiplayer, combat and always-on PvP foundation

**Goal:** Make the core experience reliable with multiple real players.

### Work
- Player joining, leaving, spawning and character replication.
- Server capacity tests.
- Server-authoritative combat and ammunition.
- PvP enabled throughout the Open World.
- Damage validation, rate limits and exploit checks.
- Spawn protection and safe respawn handling as protective mechanics, without creating PvP-free regions.
- Team/party identity and friendly-fire handling, with exact defaults to be finalised.
- Combat logging and abuse monitoring.
- Network tests under latency and crowded conditions.

### Deliverables
- Multiplayer combat test build.
- PvP test scenarios.
- Server and network performance report.
- Initial exploit checklist.

### Exit gate
Multiple players can explore and fight reliably. PvP is available throughout the world, while spawn handling and exploit controls prevent obvious abuse.

---

# PHASE III — WORLD SYSTEMS AND PLAYER PERSISTENCE

## M7 — Player data, Arsenal and permanent discoveries

**Goal:** Make permanent account progression safe and reliable.

### Work
- Versioned player profiles and session handling.
- Safe save/load patterns, retries and recovery.
- Permanent weapon ownership by stable weapon ID.
- Main Hub Arsenal collection.
- Server-validated first-time weapon discovery.
- Duplicate discovery handling.
- Permanent cosmetics, account XP, levels and discovery records.
- Death, disconnect, rejoin and server-shutdown tests.
- Data migration and partial-failure tests.

### Deliverables
- Persistent player profile.
- Main Hub Arsenal prototype.
- One complete permanent weapon discovery.
- Save/rejoin test report.

### Exit gate
Permanent weapon ownership survives death, disconnects, server changes and world rotation. No physical item loss or theft can remove a permanent weapon unlock.

## M8 — Physical inventory, camps and base storage

**Goal:** Build the separate, risk-bearing possession system.

### Work
- Define physical item categories and stable item identifiers.
- Separate physical supplies from permanent account unlocks.
- Carrying and depositing eligible items.
- Basic temporary camp placement and interaction.
- Storage UI and server-authoritative deposit/withdrawal.
- Storage permissions and access validation.
- Theft and transfer rules.
- Anti-duplication, transaction safety and audit logs.
- Test camp discovery, abandonment and contested access.
- Decide offline protection, persistence, capacity and raid windows before enabling broad player access.

### Deliverables
- Physical inventory prototype.
- Camp and storage prototype.
- Validated deposit, withdrawal and theft flow.
- Explicit storage rules document.

### Exit gate
Physical possessions can be transferred without duplication or data loss. Theft affects only the physical item, never the owner's permanent Arsenal unlock. Do not ship raids until access and offline-protection rules are decided.

## M9 — NPC faction squad prototype

**Goal:** Add occasional player-like groups that make the world feel inhabited and contested.

### Work
- One faction identity and a small squad.
- Navigation and authored patrol/travel routes.
- Local awareness and readable detection.
- Weapon use, reloads, cover and repositioning.
- Group coordination, retreat and regrouping.
- Scavenging and limited equipment use.
- Temporary camp or location occupation.
- Rare-discovery defence as an optional faction behaviour.
- Distance-based simulation tiers, spawn budgets and despawn rules.
- Server performance and fairness tests.

### Deliverables
- One working faction squad.
- A small set of squad behaviours.
- NPC performance measurements.
- Faction data structure.

### Exit gate
NPCs behave like believable player squads without omniscient detection, unfair accuracy, instant respawns or excessive server cost.

## M10 — Dynamic locations, world activity and events

**Goal:** Give players reasons to revisit places and explore without forcing everyone into one hotspot.

### Work
- Dynamic location states: quiet, occupied, abandoned, damaged, powered, inaccessible or transformed.
- Local event framework.
- Global world transformation framework.
- Admin-triggered live events with permissions and logs.
- Community event framework.
- Event scheduling and compatibility with world identities.
- Temporary discoveries, route changes and faction activity.
- Event rewards and permanent archive records.
- Server-authoritative shared state and cross-server consistency.
- Test event start, end, interruption and recovery.

### Deliverables
- One local dynamic incident.
- One small global transformation test.
- Event configuration and validation framework.
- Event test report.

### Exit gate
Events create new choices and discoveries, not mandatory chores. They work consistently across servers and end cleanly without corrupting persistent data.

---

# PHASE IV — FIRST PLAYABLE AND CONTENT PRODUCTION

## M11 — First playable vertical slice

**Goal:** Combine the core systems into one small but genuinely fun AVENOR experience.

### Required slice
- One compact greybox district.
- First-person movement.
- A small set of distinct weapons.
- Multiplayer and always-on PvP.
- One permanent weapon discovery.
- Physical supplies and inventory.
- One basic camp/storage interaction.
- One NPC faction squad.
- Several authored points of interest and at least one hidden discovery.
- One local dynamic event.
- Save, leave and rejoin.
- Basic Main Hub entry and Arsenal.
- Desktop and mobile performance tests.

### Deliverables
- End-to-end playable build.
- Known-issues list.
- Test session feedback.
- Updated scope and risk assessment.

### Exit gate
A new player can join, understand the basic controls, explore, discover something, encounter players or a faction, make progress, leave and return without losing permanent data. The slice must be fun before the world is expanded.

## M12 — First-world environment art production

**Goal:** Turn the proven greybox into a visually coherent, recognisable first region.

### Work
- Produce modular building and environment kits.
- Create region-specific terrain, vegetation, structures and landmarks.
- Build interiors and environmental storytelling.
- Create road, path and traversal assets.
- Add world props, containers and discovery set dressing.
- Add regional lighting, weather presentation and audio ambience.
- Create LOD and collision variants.
- Apply streaming and memory budgets.
- Replace greybox assets in controlled batches.
- Re-run performance tests after every major art pass.

### Deliverables
- Art-complete first-world district.
- Reusable modular environment kits.
- Region asset library.
- Updated performance benchmarks.

### Exit gate
The district meets the visual target and remains within measured performance budgets on target devices.

## M13 — World content, locations and discovery production

**Goal:** Fill the first region with varied reasons to explore.

### Work
- Select and adapt a launch-sized subset from the location catalogue.
- Build signature landmarks and distinct interiors.
- Add hidden rooms, environmental clues and remote destinations.
- Add faction-occupied and abandoned location variants.
- Create weapon discovery placements and server validation.
- Add physical supplies, equipment and meaningful collectibles.
- Add cosmetic trophies and display objects.
- Add journal/archive entries and discovery feedback.
- Test location variety, route flow and reward pacing.

### Deliverables
- First-world location set.
- Discovery catalogue for the first release.
- Collectible and journal content.
- Location QA checklist.

### Exit gate
Locations have distinct purposes and moods. Not every place is a loot room, combat encounter or objective marker. Exploration remains rewarding without constant events.

## M14 — Progression, mastery, collectibles and rewards

**Goal:** Create a long-term progression system that rewards many playstyles without unfair combat advantages.

### Work
- Account XP and level curve.
- Weapon discovery and collection completion.
- Per-weapon mastery and weapon-specific challenges.
- Exploration journal and discovery records.
- Achievements, titles and badges.
- Meaningful collectibles with documented purposes.
- Purely cosmetic trophies and display collections.
- Earnable cosmetics from challenges, exploration, levels, events and weapon mastery.
- Earnable in-game currency and cosmetic shop structure.
- Competitive rank rewards.
- Event reward archive and fair return paths.
- Anti-farming and server-side reward validation.

### Deliverables
- Working account progression.
- Working weapon mastery.
- First reward catalogue.
- Collectible and trophy presentation.
- Economy and reward rules.

### Exit gate
Progression supports exploration, combat, mastery and participation. No level, mastery tier, collectible, trophy, cosmetic or reward creates an unfair combat advantage.

## M15 — Home Hub, UI, social and onboarding

**Goal:** Make the experience understandable and easy to navigate.

### Work
- Main Hub environment and character/weapon showcase.
- Enter World and world status.
- Arsenal, loadout and weapon collection.
- Character cosmetics and presentation.
- Progression, mastery and discovery journal.
- Events and announcements.
- Party/group tools.
- Social and player interaction UI.
- Settings, controls, accessibility and graphics options.
- First-session onboarding and concise tutorials.
- Responsive layouts for desktop, mobile and controller.

### Deliverables
- Functional Main Hub.
- Complete first-release navigation.
- Core HUD and menus.
- Onboarding flow.

### Exit gate
A new player can understand how to enter the world, equip owned weapons, find progression and change settings without external instructions.

---

# PHASE V — SECONDARY MODES AND LIVE WORLD

## M16 — Competitive playlists

**Goal:** Deliver separate, polished FPS modes without undermining the Open World.

### Work
- Select the first competitive mode for release.
- Matchmaking and party handling.
- Match lifecycle, teams, rounds and score validation.
- Map selection and competitive spawn logic.
- Owned-weapon loadouts from the permanent Arsenal.
- Competitive rank and seasonal rewards.
- Weapon mastery progress for already-owned weapons.
- No competitive weapon unlocks.
- Anti-cheat and result validation.
- Add more modes only after the first is stable.

### Deliverables
- One complete competitive playlist.
- Match result and rank persistence.
- Competitive QA report.

### Exit gate
Competitive matches are stable, fair and clearly separate from Open World progression. They never grant permanent weapon unlocks.

## M17 — World rotation and multi-world framework

**Goal:** Prove that AVENOR can rotate worlds without losing player progression or damaging server consistency.

### Work
- Active world identity and cycle ID.
- Authoritative schedule and transition logic.
- World package loading and validation.
- Cross-server consistency.
- Player routing and reconnect handling.
- Event overlays and compatible world transformations.
- Cycle-local state separation from permanent player data.
- Rotation announcements and hub presentation.
- Test server shutdown and transition edge cases.
- Build a second small region to validate the pipeline.

### Deliverables
- Two working world packages or representative regions.
- Stable rotation prototype.
- World-cycle archive.
- Rotation recovery test report.

### Exit gate
All servers agree on the active world. Permanent player data remains safe. Rotation and event overrides recover cleanly after failures.

## M18 — Vehicles and expanded traversal (scope gate)

**Goal:** Add vehicles only if they improve exploration and fit the performance and gameplay goals.

### Work
- Decide the first vehicle type and intended role.
- Prototype vehicle handling and camera.
- Server-authoritative ownership, movement and interaction.
- Spawn/despawn and recovery rules.
- Collision, passenger and seat behaviour.
- Mobile and controller controls.
- Vehicle audio and damage presentation if approved.
- Test vehicle use with streaming, combat and crowded areas.

### Deliverables
- One polished vehicle prototype, if approved.
- Vehicle performance and network report.
- Final vehicle launch-scope decision.

### Exit gate
Vehicles add meaningful travel options without making on-foot exploration obsolete or creating severe network/performance problems. If they fail this gate, defer them.

---

# PHASE VI — RELEASE QUALITY

## M19 — Full QA, balance and optimisation

**Goal:** Test the whole experience under realistic conditions.

### Work
- Functional testing of every player-facing system.
- Save/load, migration and recovery tests.
- Multiplayer and latency testing.
- PvP fairness, spawn protection and exploit testing.
- Physical inventory and storage theft transaction tests.
- NPC fairness and performance tests.
- Event start/end and cross-server tests.
- Streaming, memory, frame-time and server simulation profiling.
- Mobile, desktop and controller compatibility.
- Accessibility, readability and settings.
- UI clarity and onboarding tests.
- Audio and VFX performance.
- Moderation, reporting and abuse response.
- Regression testing after fixes.

### Deliverables
- Release candidate.
- QA matrix and test results.
- Performance report for supported devices.
- Security and exploit review.
- Prioritised bug list.

### Exit gate
No unresolved critical data-loss, exploit, progression, combat or stability issues. Performance targets are based on measured devices and realistic server loads.

## M20 — Release preparation and controlled launch

**Goal:** Publish safely and observe real player behaviour before scaling.

### Work
- Finalise store page, icon, thumbnails and game description.
- Prepare trailers and genuine gameplay footage.
- Prepare community channels and support process.
- Configure analytics and crash/error monitoring.
- Configure moderation and reporting workflows.
- Prepare rollback and incident response.
- Run a limited test or staged release.
- Monitor retention, session length, crashes, server health and player feedback.
- Fix critical issues before broad promotion.

### Deliverables
- Public-ready experience.
- Release assets and community information.
- Monitoring dashboard or reporting process.
- Rollback plan.
- Launch checklist.

### Exit gate
The experience can be operated safely, issues can be identified quickly and a known-good version can be restored.

## M21 — Post-launch expansion and live operations

**Goal:** Grow AVENOR based on player behaviour and tested production capacity.

### Work
- Improve existing locations before adding huge amounts of new content.
- Expand the first world and add a second full world when the pipeline is proven.
- Add more faction identities and squad behaviours within performance budgets.
- Add new discoveries, weapons and cosmetics.
- Expand collectibles, trophies, mastery challenges and events.
- Add competitive modes based on demand and quality.
- Add seasonal transformations and community events.
- Review retention, fairness, progression pacing and economy health.
- Maintain regular optimisation and security work.

### Deliverables
- Update schedule.
- Tested content releases.
- Updated roadmap and design documents.
- Ongoing community feedback loop.

### Exit gate
Every update has a clear purpose, passes regression tests and does not destabilise the core experience.

---

# ASSET PRODUCTION TRACK

Asset creation is not one giant task. It is a repeatable pipeline used by the world, weapons, characters, UI, audio and effects milestones.

## Environment assets
1. Visual references and scale guide.
2. Modular greybox pieces.
3. First reusable building kit.
4. Interior and exterior prop families.
5. Landmark kits.
6. Terrain, vegetation and road assets.
7. Material and texture sets.
8. Collision and LOD variants.
9. Lighting and atmosphere presets.
10. Optimisation and in-engine validation.

## Weapon and equipment assets
1. Weapon silhouette and role approval.
2. High-level model and scale.
3. First-person viewmodel.
4. Third-person/world model.
5. Animation set.
6. Sound set.
7. Muzzle, impact and reload effects.
8. Pickup/discovery presentation.
9. Skin material and effect variants.
10. Performance and readability checks.

## Character assets
1. Base character proportions.
2. First-person arms and hands.
3. Third-person body and outfit system.
4. Movement and combat animations.
5. Cosmetic slots and presentation.
6. Emotes and showcase animations.
7. Performance and clipping checks.

## UI, audio and VFX
- UI components, icons, typography and responsive layouts.
- Weapon, movement, environment and interface audio.
- Muzzle flashes, impacts, trails, event effects and discovery feedback.
- Accessibility alternatives for audio/visual information.
- Quality scaling and performance limits.

---

# CONTINUOUS QUALITY GATES

These apply to every milestone:

- **Gameplay:** the feature is fun and understandable in a real session.
- **Performance:** measure client frame time, memory, server frame time, network traffic and streaming.
- **Security:** validate important state and rewards on the server.
- **Persistence:** test failures, retries, rejoin and recovery.
- **Compatibility:** test desktop, mobile and controller where relevant.
- **Accessibility:** keep controls, text, effects and information readable.
- **Maintainability:** small modules, clear ownership, documented assumptions.
- **Regression:** previously working systems remain functional.
- **Scope:** do not build optional systems before the core loop is proven.

## Definition of done

A milestone is complete only when:
1. The feature exists in a playable Roblox build.
2. Main success and failure paths have been tested.
3. Multiplayer behaviour is verified where relevant.
4. No critical errors or data-loss issues remain.
5. Performance is measured on representative devices.
6. The relevant documentation is updated.
7. A known-good version can be restored.

## Safe AI development workflow

For every Freebuff or coding-agent task:
1. Read the relevant AVENOR documents first.
2. Inspect the existing project and identify the exact files involved.
3. Propose a small implementation plan before editing.
4. Change only the files required for the task.
5. Do not rewrite unrelated systems or invent unresolved design rules.
6. Run available checks and explain what could not be tested.
7. Give exact Roblox Studio test steps.
8. Report assumptions, known issues and performance implications.
9. Stop and wait for approval before starting the next task.

Never grant blanket access to unrelated files or ask an agent to generate the entire game at once.

---

## Scope reminder

The ten-world roster and the 400-location catalogue are long-term design libraries, not a requirement to build all content before release. First prove one compact district, one fun gameplay loop and a repeatable asset/performance pipeline. Expand only after those foundations work.
