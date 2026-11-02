# AVENOR — Development Roadmap

> **Status: Proposed execution roadmap.** This document turns the existing design and technical specifications into an ordered development plan. It is a planning guide, not a claim that any Roblox systems have already been implemented. Proposed gameplay values remain subject to playtesting. A milestone is complete only when its exit criteria are demonstrated in a working Roblox build.

## 1. Roadmap Rules

1. **Build playable slices, not isolated feature piles.** Each milestone should produce something that can be launched and tested.
2. **Prove the foundation before scaling content.** Do not implement all 167 weapons, all 50 abilities, eight maps, or the full cosmetic catalogue before the core loop works.
3. **Use the existing design documents as the source of truth.** Do not silently redesign systems while implementing them. Record approved changes in the relevant document.
4. **Keep proposed numbers tunable.** Health, movement, damage, cooldowns, match timers, and weapon statistics are starting values until playtests support them.
5. **Server authority is mandatory for competitive outcomes.** Clients may present effects and send input requests; the server validates combat, damage, ammo, cooldowns, objectives, match results, ownership, and rewards.
6. **Content must be data-driven.** New weapons, abilities, maps, and cosmetics should use shared frameworks and stable IDs rather than one-off scripts.
7. **Test on real target platforms.** Keyboard and mouse are the first development target, but controller and mobile support must be considered in input and UI architecture from the beginning.
8. **Do not mistake a design-complete document for a built feature.** Every milestone has an implementation and test gate.

## 2. Current Planning Baseline

The following design work already exists and should be treated as the current reference set:

| Area | Current planning document | Roadmap use |
|---|---|---|
| Overall game direction | `AVENOR_Main.md` | Product-level decisions and identity |
| Core gameplay | `AVENOR_Gameplay.md` | Movement, health, combat, match flow, prototype |
| Weapons | `AVENOR_Weapons.md` | 167-weapon roster and prototype stat sheet |
| Abilities | `AVENOR_Abilities.md` | 50 ability concepts and prototype specifications |
| Modes | `AVENOR_GameModes.md` | DUEL through AVENOR ORIGIN |
| Maps | `AVENOR_Maps.md` | Map standards and eight map concepts |
| Progression | `AVENOR_Progression.md` | XP, mastery, ranked, seasons, economy |
| Architecture | `AVENOR_Technical.md` | Roblox services, networking, data, security, release |
| Weapon skins | `AVENOR_Cosmetics.md` | Individual weapon skin collection |
| Elimination effects | `AVENOR_KillEffects.md` | Cosmetic elimination presentation |
| Victory effects | `AVENOR_WinEffects.md` | Post-match victory presentation |
| Emotes | `AVENOR_Emotes.md` | Character emote collection |

**Important distinction:** The design roster is much larger than the first implementation target. The initial playable build should prove the game loop with a deliberately small selection.

## 3. Milestone Overview

| ID | Milestone | Main result | Depends on |
|---|---|---|---|
| M0 | Project foundation | Clean Roblox project and shared code structure | None |
| M1 | Combat test range | Two players can enter a stable test arena | M0 |
| M2 | First playable DUEL | Complete 1v1 round loop with one weapon | M1 |
| M3 | Movement and feel | Tested movement, camera, input, and feedback | M2 |
| M4 | Weapon framework | Data-driven weapons and a small tested weapon set | M2–M3 |
| M5 | Ability framework | One-ability loadout and a small tested ability set | M3–M4 |
| M6 | First production arena | FOUNDRY greybox becomes a tested DUEL map | M2–M5 |
| M7 | Match and mode framework | Reusable match flow plus first respawn/team mode | M4–M6 |
| M8 | Lobby and social flow | Players can move from lobby into matches and back | M7 |
| M9 | Persistence and progression | Reliable profiles, XP, unlocks, and mastery foundation | M8 |
| M10 | Content production pipeline | Repeatable process for weapons, abilities, maps, and cosmetics | M4–M9 |
| M11 | Expanded game modes and maps | More modes and maps added through proven frameworks | M7, M10 |
| M12 | Ranked and seasonal systems | Competitive queues, rating, seasons, and rewards | M9, M11 |
| M13 | Economy and full cosmetic presentation | Shop, ownership, equip flows, and cosmetic categories | M9–M10 |
| M14 | Release candidate | Performance, security, UX, moderation, QA, and release checks | M11–M13 |

Milestones may overlap when their dependencies are satisfied, but a later milestone must not be used to hide an unfinished dependency.

## 4. Detailed Milestones

### M0 — Project Foundation

**Goal:** Create a maintainable Roblox project before gameplay complexity grows.

**Work:**
- Create the Roblox experience and initial development place.
- Set up the project structure and source-control workflow.
- Establish server, client, and shared-code boundaries.
- Create a small configuration layer for tunable prototype values.
- Establish stable IDs and naming conventions for content.
- Add basic logging and error reporting.
- Set up a repeatable test process with at least two clients.

**Deliverables:**
- Clean project structure.
- Server bootstrap and client bootstrap.
- Shared configuration and content registry skeleton.
- Basic test checklist and development notes.

**Exit criteria:**
- The project starts without critical errors.
- Two test clients can join the same server.
- Server-only and client-only code are separated.
- A small configuration change can be made without editing multiple unrelated scripts.

**Do not build yet:** Full lobby, progression, all weapons, or cosmetic effects.

### M1 — Combat Test Range

**Goal:** Establish a reliable multiplayer environment for testing the core game.

**Work:**
- Build a small greybox test arena with safe spawn positions.
- Add basic character spawning and reset handling.
- Add a simple match/test state.
- Add minimal player and network diagnostics.
- Confirm that both clients see consistent player positions and state.

**Deliverables:**
- One small test arena.
- Stable two-player test session.
- Basic spawn/reset flow.
- Initial latency and replication observations.

**Exit criteria:**
- Two players can join, spawn, move, reset, and continue testing repeatedly.
- No frequent softlocks or broken character states.
- The arena allows safe testing without accidental spawn traps.

### M2 — First Playable DUEL

**Goal:** Prove the smallest complete AVENOR combat loop.

**Scope:**
- 1v1 DUEL.
- One greybox arena.
- One simple hitscan test weapon.
- Proposed 100 HP baseline.
- One life per player per round.
- Server-validated firing, ammo, hit registration, damage, and elimination.
- Round start, round end, winner display, and clean reset.
- Minimal HUD: health, ammo, crosshair, round state, and result.

**Deliverables:**
- A complete playable 1v1 round.
- Server-authoritative combat path.
- Basic combat feedback and result display.
- Repeatable round reset.

**Exit criteria:**
- Two players can complete multiple rounds without manual server intervention.
- The server, not the client, decides valid hits and eliminations.
- Ammo and fire-rate limits cannot be bypassed by sending requests too quickly.
- Round state and winner are consistent for both clients.
- A disconnect or character reset does not permanently break the match.

**Gate:** Do not expand the weapon roster until this loop is stable and enjoyable enough to justify more content.

### M3 — Movement, Camera, and Game Feel

**Goal:** Make the game feel intentional, responsive, and consistent.

**Work:**
- Implement the proposed walk, sprint, jump, air-control, and slide package.
- Add camera and first-person presentation foundations.
- Add weapon-ready, firing, reload, hit, elimination, and round feedback.
- Tune input buffering and action cancellation rules.
- Validate movement and state transitions on the server.
- Test keyboard and mouse first; keep input actions abstracted for future controller/mobile support.

**Deliverables:**
- Complete first-pass movement controller.
- First-person camera and viewmodel foundation.
- Basic animation and audio hooks.
- Movement test results and tuning notes.

**Exit criteria:**
- Movement actions transition predictably and do not create unintended state combinations.
- Slide restrictions and cooldown behavior match the gameplay specification.
- Server validation prevents obvious speed/state manipulation.
- Movement remains understandable and responsive in a real two-player session.
- Values that feel wrong are recorded and tuned rather than treated as fixed.

### M4 — Data-Driven Weapon Framework

**Goal:** Turn the weapon roster into a scalable system instead of 167 separate implementations.

**Work:**
- Create a shared weapon definition schema.
- Separate weapon data from firing, reload, recoil, projectile, and presentation logic.
- Implement server-authoritative ammo, cadence, reload, hit validation, and damage.
- Support the required weapon behavior families: hitscan, projectile, shotgun/pellet, melee, and utility.
- Add weapon equip/swap handling and the planned loadout slots.
- Implement a small representative test set covering different behavior families.

**Recommended first test set:**
- One balanced automatic weapon.
- One precision/slow-firing weapon.
- One shotgun-style weapon.
- One projectile weapon.
- One melee weapon.
- One utility-focused item.

The selected weapons should be chosen from the existing roster based on how well they test distinct framework requirements, not simply because they are the first entries.

**Deliverables:**
- Shared weapon framework.
- Data definitions for the first test weapons.
- Weapon debug panel or server logs.
- Weapon test matrix.

**Exit criteria:**
- A new compatible weapon can be added primarily through data and reusable behavior modules.
- Server validates fire cadence, ammo, reload state, range, and damage.
- Weapon families behave correctly in multiplayer tests.
- Weapon stats can be adjusted centrally without editing unrelated weapon scripts.
- No weapon receives an advantage from client-side authority.

### M5 — Ability Framework

**Goal:** Add the one-ability loadout system without destabilizing combat or movement.

**Work:**
- Create a shared ability definition and activation framework.
- Implement server-validated activation, cooldowns, duration, charges, and cancellation.
- Add clear HUD cooldown feedback.
- Add counterplay and state restrictions.
- Select a small prototype set that exercises different ability categories.
- Test ability interactions with sprinting, sliding, firing, reloading, death, and round reset.

**Deliverables:**
- Shared ability framework.
- Small playable ability test set.
- Cooldown and state UI.
- Ability interaction test matrix.

**Exit criteria:**
- Abilities cannot be activated early or repeatedly through client request spam.
- Cooldowns and outcomes are server-authoritative.
- Ability effects clean up correctly on death, reset, and match end.
- Abilities do not silently override core movement or weapon rules.
- The one-ability loadout restriction is enforced.

### M6 — FOUNDRY Production Greybox

**Goal:** Turn the selected first map concept into a real testable arena.

**Work:**
- Greybox FOUNDRY using the map design standards.
- Build routes, cover, vertical options, landmarks, and spawn areas.
- Test sightlines and engagement distances with the current weapon set.
- Check slide and jump routes for unintended exploits.
- Run repeated DUEL sessions and revise layout based on evidence.
- Add an initial visual blockout only after layout works.

**Deliverables:**
- Playable FOUNDRY greybox.
- Spawn and route review.
- Map performance baseline.
- Documented revisions.

**Exit criteria:**
- The map supports fair DUEL starts across repeated tests.
- No dominant spawn trap or unavoidable opening angle remains.
- Routes and landmarks are readable.
- The map performs within the current prototype budget.
- The layout is validated in play, not only in Studio.

### M7 — Reusable Match and Mode Framework

**Goal:** Expand beyond DUEL without duplicating match logic.

**Work:**
- Implement a reusable match lifecycle and mode adapter.
- Separate shared match state from mode-specific rules.
- Add team assignment and team-state handling.
- Add respawn handling for respawn modes.
- Implement one team/respawn mode first, recommended TEAM DEATHMATCH.
- Add match timers, scoring, end conditions, and result records.
- Prototype AVENOR ORIGIN only after objective, team, and respawn foundations are stable.

**Deliverables:**
- Reusable match lifecycle.
- Team and respawn systems.
- One playable team mode.
- Mode test checklist.

**Exit criteria:**
- DUEL and the first team mode use shared lifecycle services.
- Mode-specific rules do not require a separate copy of the entire match system.
- Score, timer, team assignment, respawns, and match results remain consistent.
- A match can end and cleanly return players to the next state.

### M8 — Lobby, Parties, and Match Travel

**Goal:** Create the first real player journey around the match.

**Work:**
- Build a functional lobby place.
- Add party creation/invites and party leader behavior.
- Add a basic queue and match allocation flow.
- Implement safe teleportation between lobby and match servers.
- Handle failed teleports, party splits, disconnects, and full servers.
- Add a minimal loadout selection surface.

**Deliverables:**
- Functional lobby.
- Basic party flow.
- Queue and match travel.
- Return-to-lobby flow.

**Exit criteria:**
- Solo players and parties can enter a match.
- Party membership remains consistent through queue and travel.
- Failed travel has a recoverable path.
- Players are not stranded in an invalid queue or match state.
- Match servers do not trust client-provided party or match results.

### M9 — Player Data and Core Progression

**Goal:** Save player identity and reward progress reliably.

**Work:**
- Implement versioned player profiles and safe DataStore access.
- Add session locking or equivalent protection against conflicting writes.
- Add migration and recovery handling.
- Add match completion rewards and a basic account XP display.
- Add weapon ownership and loadout persistence.
- Add the first weapon mastery tracking foundation.
- Make reward grants idempotent so retries cannot duplicate rewards.

**Deliverables:**
- Persistent player profile.
- Basic account XP and match rewards.
- Saved loadout and ownership.
- Data migration and recovery tests.

**Exit criteria:**
- Progress survives leaving and rejoining.
- Repeated reward requests cannot duplicate grants.
- Data failures do not silently overwrite valid player progress.
- Profile updates are server-authoritative.
- A test suite covers save, load, retry, migration, and session conflict cases.

**Scope restraint:** Full ranked seasons, elaborate shop systems, and every challenge type are not required here.

### M10 — Content Production Pipeline

**Goal:** Make content expansion predictable and maintainable.

**Work:**
- Define a standard review and implementation template for each weapon.
- Define ability, map, and cosmetic production checklists.
- Add stable content IDs and version compatibility checks.
- Establish asset naming, folder, animation, sound, and effect conventions.
- Create a balance review process using the prototype stat sheet.
- Add a content QA pass for performance, readability, and accessibility.
- Track content as designed, implemented, tested, approved, or retired.

**Deliverables:**
- Content pipeline documentation.
- Reusable content schemas.
- QA checklists.
- A small batch of fully implemented and approved content.

**Exit criteria:**
- A content item can be added without custom architecture work each time.
- Every live item has a stable ID and defined ownership/unlock behavior.
- Content can be disabled or rolled back safely.
- Design values and implemented values can be compared.
- Cosmetic effects do not obscure important combat information.

### M11 — Expanded Modes and Map Roster

**Goal:** Expand the playable variety using proven systems.

**Work:**
- Add modes in priority order based on player testing and development cost.
- Recommended next modes: DUOS, FREE FOR ALL, HARDPOINT, CAPTURE THE FLAG.
- Build additional maps in batches, each with a distinct gameplay identity.
- Test map/mode compatibility rather than assuming every map supports every mode.
- Prototype AVENOR ORIGIN as a separate focused feature.
- Add map voting or rotation only after the map pool is large enough to justify it.

**Deliverables:**
- Expanded mode selection.
- Additional playable maps.
- Map/mode compatibility data.
- AVENOR ORIGIN prototype and test report.

**Exit criteria:**
- Every released mode has complete start, play, end, and recovery behavior.
- Each map has been tested in every mode where it is enabled.
- Map selection does not create unfair or broken mode combinations.
- AVENOR ORIGIN is understandable and fun in repeated tests before being promoted to a full mode.

### M12 — Ranked and Seasonal Competition

**Goal:** Add competitive structure only after the underlying match experience is trustworthy.

**Work:**
- Finalize ranked eligibility, party restrictions, placement flow, rating behavior, and disconnect policy.
- Build ranked queues and rating updates on the server.
- Add season lifecycle and reward distribution.
- Add leaderboard rules and anti-abuse checks.
- Test rating behavior with controlled match scenarios before public release.

**Deliverables:**
- Ranked queue and match rules.
- Rating and placement system.
- Season state and reward pipeline.
- Competitive integrity monitoring.

**Exit criteria:**
- Rating changes are server-calculated and auditable.
- Disconnects, remakes, ties, and abnormal match endings have defined outcomes.
- Season transitions do not duplicate or erase rewards.
- Leaderboards cannot be updated by client requests.
- The system has enough real match data to evaluate rating quality.

### M13 — Economy and Cosmetic Presentation

**Goal:** Turn the existing cosmetic collections into a reliable player-facing customization system.

**Work:**
- Implement cosmetic ownership, equip, preview, and inventory interfaces.
- Add the universal rarity presentation system.
- Add weapon skin application through the shared weapon framework.
- Add elimination effects, victory effects, and emotes in their appropriate contexts.
- Add MVP selection and presentation, elimination announcements, banners, titles, and profile showcases.
- Implement the HUD, cross-platform controls, accessibility options, and gameplay audio priorities.
- Add shop and currency transactions with server-side validation.
- Ensure paid purchases are cosmetic and never create combat-stat advantages.
- Add options to reduce or disable intense cosmetic presentation where practical.

**Deliverables:**
- Inventory and equip UI.
- Cosmetic rendering pipeline.
- MVP, announcement, banner, title, and profile showcase systems.
- HUD, control, accessibility, and audio foundations.
- First implemented cosmetic batches.
- Secure currency and purchase handling.

**Exit criteria:**
- Owned cosmetics equip consistently across servers.
- MVP selection is server-authoritative and cosmetic presentation can be skipped or reduced.
- Cosmetic announcements cannot imitate gameplay-critical audio.
- HUD and control layouts communicate the same critical state across supported platforms.
- Cosmetic effects do not alter hitboxes, movement, damage, or visibility in a competitive advantage.
- Inventory and currency are server-authoritative.
- Failed or repeated transactions cannot duplicate purchases or currency.
- Cosmetic performance remains within budget.

### M14 — Release Candidate and Hardening

**Goal:** Prepare a stable, understandable, fair, and supportable public release.

**Work:**
- Profile server and client performance at realistic player counts.
- Test low-end devices and mobile/controller input.
- Review exploit surfaces and remote validation.
- Test DataStore failures, teleport failures, server shutdown, and reconnect behavior.
- Complete onboarding, settings, accessibility, HUD clarity, and error messaging.
- Review moderation, reporting, privacy, and community safety features.
- Run closed playtests, collect feedback, fix high-impact issues, and repeat.
- Prepare rollback plans and release monitoring.

**Deliverables:**
- Release candidate build.
- QA and performance report.
- Security review checklist.
- Known-issues list and rollback plan.
- Launch readiness decision.

**Exit criteria:**
- No known critical exploit or data-loss issue remains.
- Core modes can complete matches reliably.
- Performance targets are measured on representative devices.
- Players can understand controls, loadouts, objectives, and match results.
- Monitoring and rollback procedures are ready.

## 5. First Playable Version: Strict Scope

The first genuinely playable AVENOR build should contain only:

- One small test arena, followed by the FOUNDRY greybox.
- DUEL, 1v1.
- One fully working hitscan weapon.
- The proposed baseline health and round rules.
- Basic walk, sprint, jump, and slide once the combat loop is stable.
- Basic first-person camera and HUD.
- Server-authoritative firing, ammo, hit validation, damage, and elimination.
- Round start, round end, result display, and reset.

The first playable version does **not** need:

- All 167 weapons.
- All 50 abilities.
- Eight finished maps.
- The full social hub.
- Ranked, seasons, or a battle pass.
- The complete shop and currency economy.
- The full skin, kill-effect, win-effect, and emote collections.
- Every game mode.

This is not cutting the vision. It is protecting the vision from being buried under unfinished systems.

## 6. Content Expansion Strategy

Use staged content batches rather than importing the entire design roster at once.

### Weapons
1. **Framework batch:** representative weapons that test each behavior family.
2. **Core batch:** a compact, balanced selection suitable for the first public modes.
3. **Expansion batches:** add weapons only when their role is distinct and the framework supports them.
4. **Full roster target:** work toward all 167 designs only after balance, performance, and content production are sustainable.

### Abilities
1. Test a small group covering different ability categories.
2. Validate cooldowns, counterplay, clarity, and interaction with movement/combat.
3. Expand the available pool in reviewed batches.
4. Do not release an ability merely because its concept exists in the design document.

### Maps
1. Make FOUNDRY the first validated map.
2. Build the next maps only when each contributes a different gameplay experience.
3. Release maps with explicit supported-mode lists.
4. Keep untested maps out of competitive rotation.

### Cosmetics
1. Build the cosmetic application and inventory framework.
2. Implement a small representative batch across rarity tiers.
3. Verify that effects are readable and performant.
4. Expand the individual collections in batches without changing gameplay behavior.

## 7. Cross-Milestone Quality Gates

Every milestone must pass the relevant gates before being marked complete.

- **Gameplay:** Does the feature feel clear, responsive, and fun in an actual match?
- **Fairness:** Can the client fake or bypass an outcome that should be server-controlled?
- **Networking:** Does it remain consistent with two or more real clients and variable latency?
- **Performance:** Does it stay within measured client and server budgets?
- **Recovery:** What happens after death, reset, disconnect, teleport failure, or server shutdown?
- **Data:** If persistent, can retries, failures, and migrations corrupt or duplicate progress?
- **UX:** Can a new player understand what happened and what to do next?
- **Accessibility:** Are important signals readable and are effects/controls configurable where needed?
- **Maintainability:** Can the next similar feature reuse the same framework?
- **Documentation:** Are changed decisions and tested values reflected in the relevant planning file?

## 8. Playtest and Decision Log

For each playtest, record:

- Build/version and milestone.
- Testers, platform, and approximate network conditions.
- Mode, map, weapons, and abilities used.
- Match duration and round outcomes.
- Bugs, exploits, and unexpected interactions.
- Player feedback separated into clarity, feel, fairness, and fun.
- Proposed changes, with the reason for each.
- Whether a value is retained, changed, or still needs more evidence.

Do not tune several major variables at once if doing so makes the cause of an improvement or regression unclear.

## 9. Roadmap Status Tracking

Use these statuses consistently:

- **Not started:** No implementation work has begun.
- **In progress:** Implementation is underway.
- **Blocked:** A dependency or unresolved decision prevents progress.
- **Testing:** Feature is implemented and undergoing validation.
- **Needs revision:** Testing found issues that require changes.
- **Complete:** All milestone exit criteria have been demonstrated.
- **Deferred:** Deliberately moved out of the current release scope.

A milestone is not complete because its scripts exist. It is complete when its exit criteria pass in a working multiplayer build.

## 10. Immediate Next Actions

The next practical work should begin with **M0 — Project Foundation**:

1. Confirm the Roblox project/repository workflow and where the actual game source will live.
2. Create the initial folder and service structure from `AVENOR_Technical.md`.
3. Set up a two-client test place.
4. Add the smallest server/client bootstrap and shared configuration.
5. Verify the project can be launched and tested before implementing combat.

Once M0 passes, move directly into M1 and M2. Do not start building the full lobby or importing the complete content roster first.

## 11. Related Documents

- `AVENOR_Main.md` — overall game design and identity.
- `AVENOR_Technical.md` — Roblox implementation architecture and technical standards.
- `AVENOR_Gameplay.md` — core gameplay and first playable prototype.
- `AVENOR_Weapons.md` — weapon concepts and prototype combat values.
- `AVENOR_Abilities.md` — player ability concepts and specifications.
- `AVENOR_GameModes.md` — mode rules and match structure.
- `AVENOR_Maps.md` — map standards and map concepts.
- `AVENOR_Progression.md` — progression, ranked, seasons, and economy.
- `AVENOR_Cosmetics.md` — weapon skins.
- `AVENOR_KillEffects.md`, `AVENOR_WinEffects.md`, and `AVENOR_Emotes.md` — presentation cosmetics.
