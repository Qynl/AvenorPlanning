# AVENOR — Core Gameplay Specification

> **Status: Proposed for approval.** Nothing in this document is locked until reviewed and approved. Values marked **TBD** must be decided or tested before implementation. This document defines the intended player experience and gameplay rules; it does not replace the weapon roster in `AVENOR_Weapons.md`.

## 1. Purpose and Design Targets

AVENOR is a competitive Roblox FPS built around readable, responsive combat, expressive movement, distinct weapon identities, and fair opportunities to outplay opponents.

The core loop should be:

1. Read the arena and opponent.
2. Move, position, and choose an engagement.
3. Aim and use the weapon's normal firing behaviour.
4. Use a weapon action, ability, or map feature when it creates a meaningful advantage.
5. Win the engagement, reposition, and make the next decision.

### Core design targets

- **Responsive:** Inputs should feel immediate and consistent.
- **Readable:** Players should understand what hit them and why.
- **Skill-based:** Aim, movement, timing, positioning, and decisions should matter.
- **Distinct:** Weapons and tools should create different decisions, not just different numbers.
- **Fair:** Strong effects need clear limits and counterplay.
- **Accessible:** Keyboard/mouse, controller, and mobile should all be viable.
- **Performance-aware:** Effects, projectiles, and maps must work well on a wide range of Roblox devices.

## 2. Player Perspective and Character

### Proposed defaults

- First-person camera during active matches.
- Third-person camera in the social lobby.
- A consistent player collision size across the roster.
- A visible first-person weapon model with clear firing, reload, and action feedback.
- Camera settings should support sensitivity adjustment and basic accessibility options.

**TBD:** Field of view, camera bob, viewmodel offsets, character collision dimensions, and whether any modes permit third-person gameplay.

## 3. Movement

Movement is a major part of AVENOR's skill ceiling. The baseline should feel quick, responsive, and expressive while preserving readable fights and reliable hit registration.

### 3.1 Movement model

The first prototype uses a custom, server-validated movement model built around four core actions:

- Walk / ground movement
- Sprint
- Jump with limited air control
- Slide

No stamina bar is used in the initial baseline. Sprint is available whenever the player is in a valid movement state. The goal is to make movement decisions depend on timing, routes, and positioning rather than waiting for an energy meter.

### 3.2 Initial prototype values

All distances are Roblox studs. Speeds are studs per second. These are starting values for a test arena, not final locked balance.

| Property | Initial value | Notes |
|---|---:|---|
| Walk speed | 16 studs/s | Normal ground movement |
| Sprint speed | 22 studs/s | 37.5% faster than walking |
| Ground acceleration | 0.18s to reach 90% of target speed | Responsive, but not instant |
| Ground stopping | 0.16s to reach near-zero from walk speed | No excessive ice-like drift |
| Jump vertical launch | Tuned for about 7.5 studs of rise | Validate with the actual character controller |
| Gravity | Start from Roblox default gravity, then tune only if needed | Avoid changing gravity before the jump arc is tested |
| Air-control strength | 35% of equivalent ground steering | Allows correction without full mid-air direction changes |
| Air speed cap | 22 studs/s horizontal baseline | Preserve takeoff momentum; do not add a second sprint boost in air |
| Slide entry speed | At least 20 studs/s | Requires a meaningful run-up |
| Slide target speed | 26 studs/s at entry | Speed decays during the slide; no instant repeated boost |
| Slide duration | 0.70s maximum | Ends early if blocked or speed falls below its minimum |
| Slide recovery | 0.25s | Brief commitment before another slide can begin |
| Slide cooldown | 1.25s from slide start | Prevents chaining; cooldown remains even if the slide is interrupted |

### 3.3 Walking and sprinting

- Walking is the default ground state.
- Sprint is activated by a held input and ends when the input is released, the player is eliminated, or a state that disallows sprint begins.
- Sprinting does not consume stamina and has no arbitrary duration limit.
- Sprinting is cancelled by firing, aiming down sights, reloading, or starting a weapon action that requires a stable stance. The player can sprint again as soon as the blocking action ends.
- Sprint does not increase jump height or air-control strength. A sprinting jump carries the horizontal momentum present at takeoff, subject to the air-speed cap.
- Movement speed is identical for all players. Weapons, abilities, and temporary map effects may change movement only through explicit, documented mechanics.
- No speed bonuses are granted by account level, rank, purchases, mastery, or cosmetics.

### 3.4 Jumping and air control

- Jump input is edge-triggered: holding the button does not automatically produce repeated jumps on landing.
- A player must be grounded and out of a landing / action lock to jump.
- Jump height and gravity must produce a consistent, readable arc. The 7.5-stud rise is a measurement target, not a promise that the default Humanoid jump settings will be used unchanged.
- Air control is limited to 35% of the equivalent ground steering response.
- Air control can redirect some horizontal momentum but cannot instantly reverse a full-speed jump.
- Landing restores normal ground acceleration. Landing does not grant a hidden speed boost.
- No double jump, air dash, wall-run, wall-climb, or automatic bunny-hop chain is included in the initial baseline.

### 3.5 Sliding

- Slide is initiated from a sprint while grounded, with at least 20 studs/s horizontal speed.
- A slide begins at up to 26 studs/s and decelerates throughout its maximum 0.70-second duration.
- The slide ends when its duration expires, the player's speed falls below the minimum useful slide speed, or valid collision / movement state prevents continuation.
- The player returns to normal standing movement after the slide. There is no separate crouch state in the initial baseline.
- Slide cannot be started from a standstill, chained into another slide, or refreshed by jumping.
- Slide has a 1.25-second cooldown from its start, plus a 0.25-second recovery commitment. The cooldown is not reset by interruption.
- Jumping out of a slide is not included in the first tuning pass. Test the base slide first; consider a deliberate slide-jump variant only if the baseline lacks enough movement expression.
- The player may fire from the hip during a slide, but cannot aim down sights or sprint-fire. Any weapon-specific exception must be explicit and tested across the roster.
- Sliding does not grant invulnerability, damage reduction, invisibility, or a smaller hitbox. The character's combat hitbox remains consistent and readable.

### 3.6 Advanced movement scope

The initial movement package is intentionally limited to sprint, jump, air control, and slide. Do not add wall-running, wall-climbing, double-jumping, grappling as a universal movement action, or bunny-hop speed stacking to the baseline.

Weapons and abilities may create their own movement options, but those are separate mechanics with individual limits, cooldowns, and counterplay. They must not silently rewrite the universal movement rules.

### 3.7 Network and fairness requirements

- The client may predict immediate movement presentation, but the server validates movement state and rejects impossible speed, acceleration, jump, and slide transitions.
- Server correction should be smooth enough to avoid visible snapping during normal play.
- Movement validation must account for explicitly approved weapon actions, abilities, knockback, launch pads, and other server-authorized impulses.
- The server must not mistake a valid designed impulse for a speed exploit, nor allow a client to invent one.
- Character collision dimensions remain consistent across players and cosmetics.
- Test keyboard/mouse, controller, and mobile with the same movement rules. Input layouts may differ; movement capabilities may not.
- Test at varied latency and frame rates before locking values.

### 3.8 Movement playtest checklist

Record these during the first 1v1 movement test:

1. Time to cross a standard arena lane while walking and sprinting.
2. Whether sprint-to-fire transitions feel responsive without allowing sprint-fire.
3. Slide distance on flat ground and on a shallow slope.
4. Whether slide entry and recovery are readable to both players.
5. Whether a sliding player remains consistently hittable.
6. Whether air control permits corrections without allowing instant reversals.
7. Whether movement remains consistent at low frame rates and moderate latency.
8. Whether mobile players can activate sprint and slide without awkward button combinations.

**Status:** The movement package and values above are proposed prototype defaults. They require hands-on testing before being marked locked.

## 4. Health, Damage, and Elimination

### Proposed baseline

<badge>Proposed for playtesting</badge>

- **Maximum health: 100 HP** for every player and every ordinary life.
- Health is not increased by account level, rank, purchases, weapon mastery, or cosmetic rarity.
- Damage is applied by the server-authoritative combat system.
- A player is eliminated when health reaches zero.
- **No passive health regeneration** in the initial baseline. Damage should matter, and players should need to reposition, use a deliberate healing tool/ability, or wait for the next life/round rather than automatically recovering during a duel.
- **No universal shields or overheal** in the initial baseline. A specific mode or approved ability may introduce temporary protection only with clear limits and counterplay.
- Healing effects cannot exceed the ordinary 100 HP maximum unless a future mode explicitly approves a different rule.

### Proposed damage rules

- Each weapon defines its own body damage and any special damage behaviour in AVENOR_Weapons.md.
- **Headshots are weapon-specific, not universal.** A weapon only receives a headshot bonus when its design explicitly supports one. Weapons without that rule deal their normal damage to all valid hit regions.
- Headshot multipliers and damage values must be individually documented and playtested. Avoid one global multiplier that accidentally makes every weapon behave the same.
- Damage falloff is also weapon-specific. A weapon with no falloff must say so; ranges and falloff curves must be explicit for weapons that use them.
- Damage-over-time, area damage, knockback, and status effects must state their duration, limits, stacking rules, and counterplay.
- Friendly fire is **off** in the initial standard modes. A future mode may define otherwise.
- Environmental damage must be clearly attributed and must follow the same server-authoritative validation standards.
- Simultaneous eliminations are allowed when both attacks were valid before either elimination was processed. The server resolves the events from their validated timestamps rather than granting an arbitrary first-player advantage.

### Elimination, credit, and feedback

- The server records the elimination, attacker, assists, weapon/ability source, and relevant match event exactly once.
- An assist is awarded when a player made a meaningful recent contribution to the eliminated opponent. The exact contribution threshold and time window remain **TBD** and must be consistent across modes.
- Damage indicators communicate a useful direction cue without revealing an opponent's exact position.
- Hit, critical-hit (where applicable), elimination, and assist feedback must be visually and audibly distinct.
- No weapon or ability may silently bypass the normal health and damage rules.

### Why this is the starting point

100 HP is an easy-to-understand reference for weapon tuning. No passive regeneration makes damage and disengagement meaningful, while weapon-specific headshots preserve individual weapon identity. These are testable starting rules, not final balance guarantees.

**Still TBD after prototype testing:** Individual weapon damage, headshot multipliers, damage falloff, assist threshold/window, and any mode-specific exceptions.

## 5. Combat and Hit Registration

### Combat model

AVENOR may use both instant-hit and simulated projectile weapons, depending on the weapon design.

- **Instant-hit weapons:** The server validates the shot and its result using an agreed latency-compensation model.
- **Projectile weapons:** The server owns the authoritative projectile state and validates impacts.
- **Melee:** Uses clearly defined range, timing, and hit validation.
- **Area effects:** Use server-validated zones with clear visual warnings and duration limits.

### Hit registration requirements

- The server is authoritative for damage, eliminations, cooldowns, ammunition, and important combat outcomes.
- Client effects may predict presentation for responsiveness, but cannot decide final damage.
- Latency compensation must have explicit limits to avoid unfair hits around cover.
- Repeated hit events must not duplicate damage.
- The system must handle players leaving, respawning, or changing state during an attack.

**TBD:** Exact hitbox model, latency-compensation window, projectile simulation approach, and any per-weapon exceptions. These should be validated in real network tests before being locked.

## 6. Weapon Slots and Handling

The loadout has four distinct slots:

1. **Primary:** Main damage-dealing weapons.
2. **Secondary:** Utility, movement, information, deception, arena-control tools, and secondary damage options.
3. **Melee:** Dedicated close-combat weapon.
4. **Player Ability:** Character-level ability, separate from weapons.

The detailed weapon list and individual mechanics live in `AVENOR_Weapons.md`.

### Proposed handling rules

- Players spawn with a complete usable loadout.
- Players can switch between Primary and Secondary.
- Melee is selected as its own slot.
- Player Ability has its own input and cooldown rules.
- Weapon Action is a separate universal input shared by weapons that have an action.
- Switching weapons should be responsive but not cancel every possible commitment for free.
- Reloading, switching, firing, and weapon actions must have explicit interruption rules.
- Ammunition and reserve rules must be consistent and visible.

### Proposed default controls

| Input | Action |
|---|---|
| Left mouse | Fire |
| Right mouse | Aim / zoom, where supported |
| R | Reload |
| X | Weapon Action |
| F | Player Ability |
| Number keys / scroll | Switch weapon slots |

All controls should be remappable. Controller and mobile layouts must expose the same essential actions, with adjustable mobile button size and placement.

**TBD:** Whether melee has a dedicated key, exact switching inputs, whether aim is available on every weapon, reload interruption rules, and ammunition model.

## 7. Weapon Actions and Player Abilities

These are three separate systems and must not be merged:

- **Weapon Action:** Belongs to an individual weapon and is documented in `AVENOR_Weapons.md`.
- **Player Ability:** Belongs to the player's loadout and is documented in `AVENOR_Abilities.md`.

### Shared rules

- Each action must have a clear activation cue.
- Cooldowns, charges, durations, and limits must be visible to the user.
- The server validates activation and availability.
- Effects need counterplay where applicable.
- Abilities must not make weapon skill irrelevant.
- Weapon actions should reinforce the identity of their weapon rather than function as generic upgrades.

**TBD:** Ability inventory, loadout restrictions, cooldown model, and availability rules.

## 8. Pickups and Map Interaction

### Weapon pickups

- A pickup replaces one eligible weapon in the player's loadout.
- The player must be able to identify the pickup before taking it.
- Pickups have consistent interaction rules and clear availability feedback.
- Pickup respawn timing and weapon availability are controlled by the match rules.
- A pickup must not silently replace the player's Melee or Ability slot.

**TBD:** Whether pickups are fixed or randomized, whether players can drop weapons, pickup respawn timing, and whether a pickup can be rejected when both gun slots are occupied.

### World interaction

Doors, switches, launch panels, and other map features should use a consistent interaction system. Interactions must be readable, have clear range limits, and avoid accidental activation during combat.

## 9. Death, Respawn, and Spectating

Respawn rules depend on the selected game mode. The following is the proposed initial ruleset.

### Proposed mode distinction

- **Round-based modes:** Once eliminated, a player stays out until the round ends. No mid-round respawn in the initial baseline.
- **Respawn modes:** Respawn after **3 seconds** at a server-selected valid spawn. The delay begins after the elimination is confirmed.
- **1v1 prototype:** Use round-based elimination. Each player gets one life per round; the round ends when one player is eliminated. This makes damage, positioning, and weapon balance easier to evaluate.
- **Spectating:** In team modes, eliminated players may spectate living teammates. In solo modes, they may spectate the remaining opponent only if the mode rules permit it. Spectating must not reveal hidden information or provide live callouts through the game UI.

### Spawn fairness

- Spawn selection should consider opponent distance, line of sight, recent spawn use, and nearby hazards.
- Never intentionally spawn a player in an opponent's immediate line of fire when a safer valid spawn exists.
- **No spawn protection in the initial 1v1 prototype**, because players do not respawn during a round.
- If a respawn mode later requires protection, it should be brief, clearly visible, and immediately end when the player attacks or uses an offensive ability.
- The system should avoid repeatedly selecting the same unsafe spawn.
- Spawn logic must be tested with real player counts and map layouts.

### State reset on a new life

- Health returns to 100 HP.
- Weapon ammunition and ability availability follow the mode's explicit reset policy.
- Temporary damage, healing, and status effects from the previous life are cleared.
- Match score and already-recorded eliminations remain unchanged.

**Still TBD:** Final respawn delay after testing, spawn scoring/selection implementation, spectating permissions per mode, and whether each mode restores ability charges on respawn.

## 10. Match Flow

A standard match should follow this broad sequence:

1. Players queue or join a party.
2. Matchmaking selects a compatible match.
3. Players load into the arena.
4. Teams and/or starting positions are assigned.
5. A short countdown begins.
6. The match runs according to its mode rules.
7. The server determines the result.
8. Results and rewards are displayed.
9. Players can return to the lobby, queue again, or rematch where supported.

### Match-wide requirements

- Match state is controlled by the server.
- Players should receive clear countdown, score, timer, and objective information.
- Leaving, disconnecting, and rejoining must have defined outcomes.
- Match results must be recorded once, even if multiple events happen at the same time.
- Rewards must not be duplicated by reconnecting or replaying result events.

**TBD:** Matchmaking rules, party size, queue regions, match fill policy, match timers, score limits, overtime, rematch rules, and disconnect handling.

## 11. Game Modes

The main game document lists these planned mode families:

- Duels / 1v1
- Team modes
- Free-for-all
- Objective-based modes

Each mode needs its own specification before implementation, including:

- Player count and team structure.
- Round or respawn rules.
- Score and victory conditions.
- Time limit and overtime.
- Allowed loadout changes.
- Spectating and disconnect rules.
- Match XP and reward processing must follow **AVENOR_Progression.md**. Results and rewards are recorded exactly once per match.

Exact mode rules and values are maintained in **AVENOR_GameModes.md**. The current proposed roster includes DUEL, DUOS, TEAM DEATHMATCH, FREE FOR ALL, HARDPOINT, CAPTURE THE FLAG, and the signature original mode AVENOR ORIGIN. All values remain proposals until approved and playtested. The first prototype should still focus on one small 1v1 ruleset because it makes core combat easier to test.

## 12. HUD and Combat Feedback

The in-match HUD should show only information that helps players make decisions.

### Required HUD elements

- Health.
- Current weapon and slot.
- Magazine and reserve ammunition, where applicable.
- Weapon Action availability.
- Player Ability availability.
- Ability availability or cooldown.
- Match timer and score/objective state.
- Clear hit and elimination feedback.
- Team information in team modes.

### Feedback principles

- Important enemy effects need readable world-space cues.
- Friendly and enemy effects must be visually distinguishable.
- Audio cues should communicate important events without overwhelming the match.
- Accessibility settings should support volume control, sensitivity, and visual clarity.
- Cosmetic effects must not hide opponents, obscure important warnings, or imitate gameplay indicators.

## 13. Competitive Integrity

- Server authority governs damage, health, ammunition, cooldowns, pickups, match results, and progression rewards. XP, mastery, challenges, currencies, unlocks and ranked rating must be validated and recorded server-side according to **AVENOR_Progression.md**.
- The client must not be trusted to report successful hits or award itself items.
- Remote requests must be validated for ownership, state, range, timing, and rate.
- Matchmaking and ranked systems must be protected against obvious abuse.
- Disconnects and suspicious state changes must not corrupt match results or saved data.
- Cosmetics never provide competitive advantages.
- Gameplay changes should be tested across keyboard/mouse, controller, and mobile.

This section describes design requirements, not a final implementation architecture. The detailed architecture belongs in `AVENOR_Technical.md`.

## 14. First Playable Prototype

The first prototype should prove that the basic game is fun before the full roster, progression, and social hub are built.

### Prototype scope

1. One compact test arena with multiple routes and safe spawn logic.
2. First-person camera and baseline movement.
3. Health and elimination.
4. Server-validated firing and hit registration.
5. Reloading, ammunition, and weapon switching.
6. A small test selection of distinct Primary, Secondary, and Melee weapons.
7. At least one working Weapon Action.
8. A simple 1v1 match loop with countdown, score, round end, and rematch.
9. Basic HUD and match feedback.
10. Network tests with more than one player and different latency conditions.

### Prototype exit criteria

The prototype is ready to expand when:

- Movement feels consistent and controllable.
- Shots register reliably for both players.
- Players understand why they were hit or eliminated.
- Weapon switching, reloading, and actions behave predictably.
- Spawns do not create obvious unfair situations.
- The match can start, finish, and reset without state errors.
- The game remains playable on target device classes.

## 15. Decisions Requiring Approval

The following are intentionally proposed rather than locked:

1. First-person-only matches.
2. Initial movement package: walk, sprint, jump, limited air control, and slide, using the prototype values in Section 3.
3. No stamina, crouch, double jump, wall-run, wall-climb, or universal air dash in the initial movement baseline.
4. Equal baseline health for all players, with a proposed 100 HP starting value and no passive regeneration.
5. Server-authoritative combat and match outcomes.
6. Separate Primary, Secondary, Melee, and Ability slots.
7. Round-based modes and respawn modes use different elimination rules; the proposed respawn-mode delay is 3 seconds.
8. First playable prototype focuses on 1v1.
9. Build and test a small weapon selection before implementing the full 167.
10. Exact numerical values remain open until playtesting.

## 16. Related Documents

- `AVENOR_Main.md`: Overall game identity, social hub, progression, ranked, cosmetics, and high-level vision.
- `AVENOR_Weapons.md`: Weapon design philosophy, controls, roster, actions, mastery, skins, and weapon balance principles.
- `AVENOR_Abilities.md`: Player ability concepts and design rules.
- `AVENOR_GameModes.md`: Mode roster, match formats, draft scoring, timers, respawns, and overtime rules.
- `AVENOR_Maps.md`: Map design standards, routes, sightlines, spawns, mode compatibility, interactions, and performance.
- `AVENOR_Maps.md` (planned): Arena layouts, spawn design, pickups, and map mechanics.
- `AVENOR_Technical.md` (planned): Roblox architecture, networking, persistence, security, and performance.
