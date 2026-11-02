# AVENOR — Technical Architecture & Roblox Implementation Plan

> **Status: Proposed technical blueprint.** This document defines how AVENOR's gameplay systems should be structured in Roblox. It is an implementation plan, not a claim that systems have already been built. Values marked proposed require profiling and playtesting. Core competitive rule: the server is authoritative for outcomes that affect fairness, progression, or match state.

## 1. Technical Goals

AVENOR's architecture must support:
- Responsive first-person combat across PC, controller, and mobile.
- Server-authoritative damage, ammunition, abilities, projectiles, objectives, and match results.
- A large content roster without one-off scripts for every weapon or ability.
- Reliable match lifecycle, parties, matchmaking, and teleportation.
- Persistent account progression, mastery, unlocks, cosmetics, and ranked data.
- Separation between gameplay logic, presentation, content definitions, and platform services.
- Maintainable systems that can be tested independently and expanded safely.

**Architecture principle:** Build a small, complete vertical slice first. Do not attempt to implement all 113 active weapons, 50 abilities, eight maps, and every progression feature before the first reliable match works.

## 2. Roblox Experience Structure

### Recommended place layout

Use one Roblox experience with separate places when implementation and player flow justify it:

| Place | Responsibility | Status |
|---|---|---|
| Lobby | Social hub, parties, loadouts, shop, profile, queues | Core planned place |
| Match | Active match server for a selected mode and map | Core planned place |
| Test Arena | Private development and balance testing | Development-only |

The Lobby and Match places share versioned modules and data contracts. The Test Arena must not grant production currency, ranked rating, or permanent progression.

A single Match place can host multiple modes and maps by loading the correct mode and map configuration. Separate match places should only be introduced if isolation, capacity, or technical constraints require them.

### Server types

- **Lobby server:** Social, party, loadout, and queue experience. It does not decide match results.
- **Match server:** Owns active match state and authoritative gameplay outcomes.
- **Private test server:** Uses test data and explicit development permissions.

The server that completes a match creates the authoritative result record. The lobby receives a result summary; it does not recalculate the outcome.

## 3. Runtime Architecture

### Server-side services

Organize server code by responsibility. Suggested logical services:

| Service | Responsibility |
|---|---|
| MatchService | Match lifecycle, player states, mode start/end |
| ModeService | Mode-specific rules and objective state |
| TeamService | Team assignment, sides, membership |
| SpawnService | Spawn selection, safety checks, respawn scheduling |
| CombatService | Validated damage, eliminations, assists |
| WeaponService | Equipped weapon state, firing rules, ammo |
| ProjectileService | Server-owned projectile simulation and outcomes |
| AbilityService | Ability activation, cooldowns, effects and cleanup |
| MovementValidationService | Validate movement state and special movement actions |
| PickupService | Pickup availability, ownership and replacement |
| InventoryService | Loadout validation and owned-item checks |
| ProfileService | Load and save persistent player profile data |
| ProgressionService | Match rewards, XP, levels, mastery and challenges |
| RankedService | Ranked rating, placements, eligibility and season records |
| PartyService | Party membership, leader, invitations and readiness |
| QueueService | Queue tickets and matchmaking handoff |
| PurchaseService | Platform purchase receipt validation and grants |
| TelemetryService | Structured match and system metrics |

These are logical responsibilities, not a requirement to create dozens of ModuleScripts immediately. Split modules when complexity justifies it.

### Client-side controllers

Suggested client responsibilities:
- CameraController
- InputController
- MovementController
- WeaponController
- ViewmodelController
- AbilityController
- HUDController
- MatchPresentationController
- AudioController
- EffectsController
- LobbyController
- MenuController
- AccessibilityController

The client handles input, camera, viewmodels, local animation, responsive UI, and cosmetic presentation. It may predict immediate local feedback, but the server confirms gameplay results.

### Shared modules

Shared code may contain:
- Weapon definitions and display metadata.
- Ability display metadata and input labels.
- Mode and map metadata.
- Enumerations and state names.
- Remote message schemas.
- UI formatting helpers.
- Shared constants that are safe to expose.

Never put secrets, authoritative reward logic, trusted ownership decisions, or private anti-abuse rules in replicated client modules.

## 4. Data-Driven Content Framework

### Weapons

The active launch roster contains 113 weapons (40 firearms/launchers, 43 utility tools, and 30 melee weapons). Use a shared, data-driven weapon framework rather than one-off scripts. The 54 archived firearm concepts are not launch content.

Each weapon definition should provide structured fields appropriate to its class:
- Stable weapon ID, display name, category, and slot classification.
- Fire behavior and input behavior.
- Damage profile and eligible hit regions.
- Fire cadence and ammunition rules.
- Reload behavior, range, and falloff.
- Projectile or hitscan type, with explicit projectile shape, count, speed, path, gravity, bounce, split, return, fuse, and impact rules where applicable.
- Firing loop state, such as charge stage, burst index, heat state, spin-up, alternating sequence, or manually selected ammunition feed.
- Cosmetic presentation hooks that are guaranteed not to alter authoritative projectile or hit behaviour.
- Weapon-specific action definition.
- Animation, sound, viewmodel, and effect asset references.
- Pickup and replacement rules.
- Prototype/balance version.

Not every field applies to every weapon. Use validated class-specific schemas rather than filling utility or melee weapons with meaningless firearm values.

Suggested behavior families:
- Hitscan.
- Server-simulated projectile with deterministic travel and impact state.
- Multi-projectile patterns and fixed-sequence bursts.
- Ricochet, single-rebound, multi-bounce, and returning-projectile behaviours.
- Fixed-path split, fork, companion, delayed-echo, and converging projectile behaviours.
- Timed or remotely detonated payloads.
- Charge-stage, heat-state, spin-up, and manually selected dual-feed firing loops.
- Directional wave/cone attacks and limited preselected curved paths.
- Melee trace.
- Charge/release.
- Burst.
- Beam or sustained action.
- Utility deployment.
- Placeable or interactable tool.

A weapon can combine approved behavior modules, but a data definition must never execute arbitrary code.

### Abilities

Use one ability framework with structured definitions:
- Stable ability ID.
- Activation input and activation conditions.
- Cooldown or availability rule.
- Duration and range where relevant.
- Targeting and validation requirements.
- Server-side effect handler.
- Client presentation and audio cues.
- Counterplay and cancellation conditions.
- Cleanup behavior.
- Version and test status.

The server checks ownership, equipped ability, player state, cooldown, range, line of sight where required, and valid targets before applying effects.

### Cosmetics

Cosmetics are presentation-only definitions:
- Item ID and category.
- Rarity.
- Applicable weapon or presentation slot.
- Asset references.
- Animation, sound, and effect references.
- Visibility and performance settings.
- Ownership and equip rules.

Weapon skins remain individual to their specific weapon. Only the 80 firearm skins belonging to the 40 active firearms are launch firearm cosmetics; archived firearm skins remain readable in legacy inventories but cannot be newly unlocked or equipped as active launch content. Cosmetic effects must not change projectile count, path, speed, spread, hitboxes, damage, visibility advantages, movement, timing, or competitive state.

### Content IDs and versioning

- IDs are permanent identifiers; display names may change.
- Store stable IDs in player inventory and loadouts.
- Maintain a content schema version.
- Validate definitions at startup in Studio/test environments.
- Missing assets should fall back safely rather than breaking a match.
- Retired content must remain readable in old player inventories.

## 5. Combat Authority and Networking

### Trust boundary

The client may request an action. The server decides whether the action is legal and what gameplay result it produces.

The server validates:
- Player is in the correct match and alive/eligible.
- Weapon or ability is equipped and owned where required.
- Fire rate, ammo, reload state, cooldown, and action state.
- Valid target, range, direction, and relevant obstruction.
- Projectile ownership and impact.
- Damage, assists, eliminations, and scoring.
- Objective interactions, pickups, and match transitions.

Never accept client-submitted damage, hit confirmations, kill claims, objective scores, XP, currency, ranked rating, or purchase ownership.

### RemoteEvent design

Use a small number of clearly defined remotes grouped by purpose, not one remote per weapon.

Every client-to-server message should:
- Have a documented message shape.
- Use stable action identifiers.
- Be validated for type, range, size, and state.
- Be rate-limited by action category.
- Reject malformed or impossible requests safely.
- Avoid accepting arbitrary Instance references as proof of authority.
- Avoid unnecessary high-frequency data.

Server-to-client messages communicate confirmed state changes and relevant presentation events. Do not broadcast private information to clients that should not know it.

### Hitscan and hit validation

For hitscan-style weapons:
- The client sends a fire request and aim information, not a claimed target or damage amount.
- The server validates weapon state and plausible shot direction.
- The server performs authoritative world/character hit validation.
- The server applies the current server-side damage definition.
- The server sends confirmed hit/elimination feedback to relevant clients.

If latency compensation is introduced, keep it bounded and server-controlled. Rewind must use a short, defined history window and must not allow shots against impossible future or stale states. Start without complex rewind; add it only after measuring a real responsiveness problem.

### Projectiles and melee

- Gameplay-relevant projectiles have server-owned state and validated impact outcomes.
- Clients may render smooth visual approximations, but visual prediction cannot award damage.
- Melee hits are validated against plausible attack timing, reach, facing, and target state.
- Placeables and ability-created objects have server-controlled lifetime, ownership, collision, and cleanup.
- Every temporary object needs a maximum lifetime and cleanup path.

### Rate limits and request safety

Rate limits should be specific to action type. Firing, ability activation, inventory changes, party invitations, and purchase claims have different expected rates.

Log repeated invalid requests and apply proportionate enforcement. Do not automatically punish a player for one malformed or delayed request; network conditions and client bugs can produce legitimate edge cases.

## 6. Movement and Character State

The movement package is defined for prototyping in AVENOR_Gameplay.md. The technical implementation must preserve those intended values while validating exceptional states on the server.

### State model

Represent important movement states explicitly:
- Idle / moving.
- Sprinting.
- Jumping / falling.
- Sliding.
- Weapon action restricted.
- Ability movement effect.
- Eliminated / respawning.

The server validates transitions that affect competitive outcomes. The client handles immediate camera and animation response.

### Validation principles

- Check plausible movement speed and state transitions over time, not one isolated position sample.
- Account for server frame timing, replication delay, and normal network jitter.
- Validate special movement from abilities and weapon actions against their approved definitions.
- Avoid brittle checks that flag legitimate latency as cheating.
- Do not let client physics alone determine teleport-like movement, objective entry, or ability outcomes.
- Keep collision and movement behavior consistent across supported platforms.

The first prototype should implement only baseline movement plus one test ability that exercises a special movement case.

## 7. Match Lifecycle and Mode Framework

### Standard match state machine

Use explicit server-owned states:
1. Creating.
2. WaitingForPlayers.
3. AssigningTeams.
4. LoadingMap.
5. PreMatch.
6. Active.
7. Intermission / RoundTransition.
8. Overtime, when applicable.
9. Ending.
10. Results.
11. Closing.

A mode may skip or repeat some states, but transitions must be explicit and validated. A match cannot award results twice.

### Mode adapters

Each mode implements a shared contract:
- Required player count and team structure.
- Initialization and cleanup.
- Start conditions.
- Objective and score updates.
- Respawn policy.
- Round or cycle transitions.
- Timer and overtime rules.
- End condition and winner calculation.
- Result summary.

The shared MatchService owns lifecycle and result finalization. Mode-specific code owns objective rules. Do not duplicate the entire match framework for every mode.

### Match result record

Create one immutable result record containing:
- Unique match ID.
- Match and content version.
- Mode and map IDs.
- Start/end timestamps.
- Player IDs and team assignments.
- Final score and winner.
- Per-player validated statistics.
- Disconnect/forfeit/termination status.
- Ranked eligibility and integrity flags.

The record is finalized once by the match server. Reward processing must be idempotent so retries cannot grant duplicate rewards.

## 8. Lobby, Parties, Matchmaking and Teleportation

### Party model

A party should have:
- Party ID.
- Leader user ID.
- Member user IDs.
- Invite state and expiry.
- Queue state.
- Region/latency preference where supported.
- Mode selection.
- Join/leave and leader-transfer rules.

Validate party membership and leader authority on the server. A player cannot join two parties or queue simultaneously in conflicting states.

### Queue flow

1. Party leader or solo player selects a mode.
2. Server validates eligibility and party size.
3. QueueService creates a queue ticket.
4. Matchmaking selects a suitable group using mode and rating constraints where applicable.
5. A match server is reserved.
6. The lobby server sends players to the reserved match.
7. The match server validates arrival and reconstructs the assigned roster from trusted server-side assignment data.

Do not trust client-supplied teleport data as proof of a match assignment.

### Roblox platform services

Use Roblox services for their intended responsibilities:
- **TeleportService:** Move players between lobby and reserved match servers.
- **MemoryStoreService:** Short-lived queue tickets, party/queue coordination, and ephemeral matchmaking state.
- **MessagingService:** Optional cross-server notifications; never the sole source of durable match or player data.
- **DataStoreService:** Persistent player profiles and durable records.
- **OrderedDataStore:** Suitable leaderboard projections, not the sole authoritative ranked record.

Teleport failures need bounded retry behavior, clear player feedback, and a safe return-to-lobby path. A failed teleport must not silently consume a queue ticket or create a phantom match.

## 9. Persistent Player Data

### Profile structure

Use a versioned profile with logical sections:
- Schema version.
- Account XP and level.
- AVENOR Credits balance.
- Owned weapon IDs.
- Owned ability IDs.
- Owned cosmetic IDs.
- Equipped loadouts.
- Per-weapon mastery.
- Challenges and achievements.
- Ranked season records.
- Settings and accessibility preferences.
- Selected profile presentation.
- Recent reward/match processing identifiers.

Keep frequently updated settings separate from large history data where practical. Do not store unlimited match history inside one profile key.

### DataStore rules

- Use UpdateAsync for read-modify-write operations that need conflict-safe updates.
- Use a session-locking strategy to prevent two active servers from overwriting the same profile.
- Save on meaningful changes and at safe intervals; do not rely only on PlayerRemoving or server shutdown.
- Handle throttling, transient failures, and shutdown budgets.
- Retry with bounded backoff and jitter.
- Keep a clear unsaved/dirty state and do not claim a save succeeded until confirmed.
- Make reward grants idempotent with unique transaction or match IDs.
- Validate loaded data against the current schema and migrate older versions safely.
- Never let malformed profile data crash the entire match server.

### Data separation

- Player profile: durable personal progression and inventory.
- Match result: immutable record created once per match.
- Ranked season data: authoritative rating and eligibility state.
- Leaderboard: derived display projection that can be rebuilt from authoritative records.
- Analytics: aggregate events without storing unnecessary personal data.

## 10. Progression, Purchases and Economy Integration

Progression rules are defined in AVENOR_Progression.md. The technical layer must enforce them.

### Reward pipeline

1. Match server finalizes a validated result.
2. A unique result ID is sent to the reward-processing layer.
3. The layer checks whether the result has already been processed.
4. Eligible XP, mastery, challenge progress, and currency are calculated from validated match data.
5. The player profile is updated safely.
6. The processed result ID is recorded.
7. The client receives a reward summary after confirmation.

A retry must not duplicate any reward.

### Purchases

- Use Roblox's supported purchase receipt flow.
- Grant developer-product benefits only from the server-side receipt handler.
- Make receipt processing idempotent.
- Do not trust a client button press or client-reported purchase completion.
- Validate product IDs against a server-side catalog.
- Record grants and spending in a transaction history.
- Check game pass ownership through the platform where relevant.
- Never sell damage, health, movement, cooldown, accuracy, or competitive advantages.

The final monetization design and exact products remain in AVENOR_Progression.md.

## 11. Maps, Streaming and Asset Loading

### Map package

Each map should be a self-contained package with:
- Stable map ID and version.
- Geometry and visual assets.
- Spawn markers and spawn metadata.
- Mode-specific objective markers.
- Pickup locations and rules.
- Traversal and boundary metadata.
- Lighting and audio configuration.
- Performance notes and supported device targets.

Mode compatibility must come from tested map metadata, not assumptions based on the map name.

### Loading flow

- Match server selects a compatible map and mode.
- Required map package is loaded before the active countdown.
- Server validates required spawn/objective markers.
- Clients receive loading state and preload appropriate visual assets.
- Match begins only when server requirements are satisfied or a clear timeout/fallback rule applies.
- Missing optional cosmetics should never prevent a match from starting.

Use instance streaming where it improves large-map memory and replication behavior. Test it carefully with fast movement, long sightlines, viewmodels, and objective visibility. Do not enable or disable streaming as a blanket optimization without profiling.

## 12. UI, Input and Platform Support

### Input abstraction

Gameplay code should respond to semantic actions rather than hard-coded keys:
- Fire.
- Aim.
- Reload.
- Sprint.
- Jump.
- Slide.
- Melee.
- Ability.
- Interact.
- Swap weapon.
- Scoreboard.
- Menu.

Map keyboard/mouse, controller, and mobile controls onto the same action layer. Support rebinding where practical.

### Camera and first-person presentation

- Match camera is first-person; lobby camera is third-person.
- Camera and viewmodel are client-side presentation.
- Recoil, sway, FOV changes, and camera effects must not change server hit validation.
- Provide comfort settings for motion effects and sensitivity.
- Avoid visual effects that hide threats or make the crosshair unreliable.

### Mobile and controller

- Use scalable UI and safe-area-aware layouts.
- Provide configurable mobile button placement/size where practical.
- Avoid requiring simultaneous inputs that are unrealistic on touch screens.
- Support controller focus navigation and clear prompts.
- Test the same weapon and ability actions on every supported input type.
- Competitive balance should not rely on a platform-specific control exploit.

## 13. Performance and Reliability Targets

These are proposed engineering targets, not guaranteed platform performance:

| Area | Initial target / rule |
|---|---|
| Client frame rate | Aim for stable 60 FPS on target PC hardware; establish a realistic lower-end mobile baseline through profiling |
| Server simulation | Aim for stable server frame timing under intended player count |
| Match size | Initial modes target 2–8 players; architecture should not assume larger matches |
| Combat feedback | Immediate local input feedback with server-confirmed outcomes |
| Loading | Preload required assets and avoid starting while essential map data is missing |
| Memory | Profile lobby and match places separately on PC and mobile |
| Effects | Cosmetic effects must have quality limits and not obscure combat |
| Recovery | Handle disconnects, teleport failure, save failure, and server shutdown explicitly |

### Performance practices

- Profile before optimizing.
- Avoid unbounded loops and per-frame work when event-driven updates are possible.
- Avoid excessive remote traffic and unnecessary replicated instances.
- Pool frequently reused visual effects where beneficial.
- Keep authoritative projectile and temporary-object counts bounded.
- Use simple collision geometry where possible.
- Test worst-case fights with multiple abilities and cosmetic effects active.
- Test mobile thermal/performance behavior, not only a short Studio session.

## 14. Security and Exploit Resistance

Security is layered; no single anti-cheat check is sufficient.

### Server authority

The server owns:
- Combat outcomes.
- Ammo and cooldown state.
- Ability activation and effects.
- Objective and match state.
- Player inventory ownership.
- XP, mastery, currencies and unlocks.
- Ranked rating and season rewards.
- Purchase grants.

### Validation and monitoring

- Validate every remote request.
- Apply action-specific rate limits.
- Check impossible state transitions and implausible movement over time.
- Validate weapon cadence and ammunition server-side.
- Validate pickup distance and availability.
- Keep server-side transaction and match logs.
- Monitor repeated invalid requests and suspicious patterns.
- Use proportionate responses and account for latency and bugs.
- Keep enforcement decisions auditable and reviewable.

Do not rely on client-side anti-cheat scripts as primary protection. Do not expose secrets or authoritative logic in replicated code.

## 15. Observability, Testing and Quality Assurance

### Structured events

Record useful aggregate events:
- Match created, started, completed, cancelled.
- Map and mode selected.
- Player joins, leaves, disconnects, reconnects.
- Match duration and result.
- Weapon and ability usage counts.
- Objective captures/contests and respawn events.
- Teleport failures and queue time.
- Data load/save failures and reward retries.
- Client/server performance summaries where available.

Collect only what is useful for development and integrity. Avoid unnecessary personal data.

### Test layers

1. Unit tests: pure calculations, schemas, mode scoring, reward formulas, validation helpers.
2. Service tests: weapon state, ability cooldowns, spawn selection, profile migration, idempotent rewards.
3. Integration tests: lobby queue to match, match to result, result to progression.
4. Multiplayer tests: multiple clients, latency simulation, disconnect/reconnect, party edge cases.
5. Platform tests: keyboard/mouse, controller, mobile touch.
6. Load/performance tests: full intended player count, intense combat, effects, and map streaming.
7. Regression tests: every change to shared systems must retest existing weapons, abilities, modes, and maps.

### Minimum match test checklist

- Two players can join a DUEL server and complete a round.
- Server validates firing, damage, elimination, and round winner.
- A player cannot award themselves damage or score by editing client requests.
- Reload, cooldown, and weapon swap state stay consistent.
- Respawn modes spawn players safely.
- Match ends once and creates one result.
- Reward retry does not duplicate XP or currency.
- A disconnect does not corrupt the match or player profile.
- Lobby queue and teleport failure paths recover cleanly.

## 16. Development Environments and Release Safety

Use separate development, staging, and production configurations.

- **Development:** Test assets, test profiles, rapid iteration, no production rewards.
- **Staging:** Production-like services and settings with test accounts/data.
- **Production:** Live player data and economy, restricted deployment permissions.

Never test migrations, purchases, or reward resets against live player data.

Before publishing:
- Validate content schemas.
- Run automated tests.
- Verify remote contracts.
- Confirm DataStore migration compatibility.
- Confirm rollback/recovery plan.
- Test the release with a small controlled group.
- Monitor errors, performance, match completion, and save success after deployment.

Version shared modules and content definitions together. A match should not combine incompatible weapon definitions, mode rules, or client/server contracts.

## 17. Recommended Implementation Order

Build in vertical slices. Each phase should produce a playable, testable result.

### Phase 1 — Foundation
- Project folder structure and shared configuration.
- Server/client bootstrap.
- Player state model.
- Remote message contracts and validation.
- Basic logging and error handling.

### Phase 2 — First playable DUEL
- One greybox test arena.
- Two-player match lifecycle.
- First-person camera and input abstraction.
- One hitscan test weapon.
- Server-authoritative ammo, firing, hit validation, damage, and elimination.
- Round reset and match result.

### Phase 3 — Core movement and ability
- Implement baseline movement values from AVENOR_Gameplay.md.
- Add server validation for movement state.
- Implement one representative ability end-to-end.
- Test latency, counterplay, and all input platforms.

### Phase 4 — Shared combat framework
- Add behavior families for projectile, melee, burst, charge, utility and other required weapon types.
- Convert a small representative sample of weapons to data definitions.
- Validate weapon schemas and balance versioning.
- Do not mass-import the full roster until each behavior family is stable.

### Phase 5 — Team and objective matches
- Team assignment and safe spawning.
- Team Deathmatch.
- One objective mode.
- AVENOR ORIGIN prototype after shared objective and respawn systems are stable.

### Phase 6 — Lobby and parties
- Social hub foundation.
- Loadout and inventory presentation.
- Party membership and invites.
- Queue and reserved-server teleport flow.

### Phase 7 — Persistence and progression
- Profile loading/saving and migrations.
- Match result pipeline.
- Account XP and basic rewards.
- Weapon mastery and permanent unlock ownership.
- Challenges and achievements.

### Phase 8 — Content expansion
- Additional weapon definitions and ability definitions.
- Remaining maps and tested mode compatibility.
- Pickups and map interactions.
- Cosmetics and effect quality controls.

### Phase 9 — Ranked, seasons and economy
- Ranked rating and placements.
- Leaderboard projections.
- Season lifecycle and pass.
- Shop and purchase receipt processing.
- Economy auditing and anti-abuse checks.

### Phase 10 — Release hardening
- Cross-platform performance.
- Security review.
- Load and regression testing.
- Moderation and support processes.
- Staging and rollback rehearsal.

## 18. First Technical Prototype: Definition of Done

The first prototype is complete only when:
- Two players can enter a private match reliably.
- The server owns match state and round result.
- One weapon fires with server-validated ammo, cadence, hit, and damage.
- A player can be eliminated and the round resets correctly.
- Both clients receive consistent confirmed match state.
- Basic movement feels responsive without client authority over combat outcomes.
- Invalid remote requests cannot grant damage, ammo, or score.
- A match result is created exactly once.
- Disconnect and server shutdown paths do not silently corrupt persistent data.
- The test can be repeated without manual data cleanup.

Do not add the full lobby economy or entire weapon roster to this prototype.

## 19. Technical Decisions and Open Questions

### Current direction
- Roblox is the target platform.
- Competitive outcomes are server-authoritative.
- Lobby and match responsibilities are separated.
- Weapons and abilities use shared, data-driven frameworks.
- Match modes use a shared lifecycle with mode-specific rules.
- Persistent progression is server-validated and idempotent.
- PC, controller, and mobile are intended platforms.

### Proposed, not locked
- Separate Lobby and Match places within one experience.
- The service and controller boundaries in this document.
- MemoryStore-based queue coordination and reserved match servers.
- Profile schema and session-locking strategy.
- Performance targets and implementation phases.
- Exact remotes, schemas, telemetry events, and module boundaries.

### Still to decide during implementation
1. Final place topology and whether a separate test place is needed.
2. Exact queue strategy, region handling, party constraints and server reservation lifecycle.
3. Final profile library/session-locking implementation and recovery policy.
4. Hit validation and any latency compensation after baseline measurements.
5. Server simulation approach for each projectile and ability family.
6. Exact telemetry retention and privacy policy.
7. Supported minimum mobile performance baseline.
8. Release deployment, rollback and live-operations process.

## 20. Related Documents

- AVENOR_Main.md — overall game identity and core design decisions.
- AVENOR_Gameplay.md — movement, health, combat, match flow and prototype rules.
- AVENOR_Weapons.md — weapon roster, individual concepts and proposed prototype stats.
- AVENOR_Abilities.md — ability framework and individual ability concepts.
- AVENOR_GameModes.md — mode rules, scoring, respawns and overtime.
- AVENOR_Maps.md — map standards, roster concepts, spawns and mode compatibility.
- AVENOR_Progression.md — account progression, mastery, ranked, seasons and economy.
- AVENOR_Cosmetics.md, AVENOR_KillEffects.md, AVENOR_WinEffects.md, and AVENOR_Emotes.md — cosmetic content definitions.

- `AVENOR_MapLayouts.md`: Proposed greybox footprints, routes, spawns, and objective overlays for all eight maps.
- `AVENOR_HUD_Audio.md`: HUD, controls, audio, and accessibility requirements.
- `AVENOR_Presentation.md`: MVP presentation, announcements, banners, and profile showcases.
