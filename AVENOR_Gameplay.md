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

Movement should feel quick and controllable without making aiming or tracking opponents unnecessarily difficult.

### Proposed movement actions

| Action | Proposed behaviour | Status |
|---|---|---|
| Walk | Responsive ground movement | Proposed |
| Jump | Predictable jump with consistent height | Proposed |
| Air control | Limited steering while airborne | Proposed |
| Sprint | Optional faster movement with a clear trade-off | Proposed |
| Crouch | Not included in the initial core unless testing shows a clear need | Proposed |
| Slide | Not included by default; evaluate only if it adds a distinct skill expression | Proposed |
| Wall movement | No wall-run or wall-climb in the initial baseline | Proposed |

### Movement principles

- Ground acceleration and stopping should feel predictable.
- Jump timing and air control must be consistent.
- Movement effects supplied by weapons must obey their own clear limits.
- No movement action should make a player difficult to see or hit without a readable reason.
- Movement speed should not vary invisibly based on cosmetic items.
- Map geometry must support movement without requiring unintended exploits.

**TBD:** Base speed, sprint speed, acceleration, deceleration, jump height, gravity, air control, and whether sprint is always available or has a resource/cooldown.

## 4. Health, Damage, and Elimination

### Proposed baseline

- Every player starts an ordinary life at the same maximum health.
- Damage is applied by the server-authoritative combat system.
- Health and incoming damage feedback must be clear and consistent.
- A player is eliminated when health reaches zero.
- Cosmetic rarity and purchases never change health, damage, or survivability.

**TBD:** Maximum health, whether passive health regeneration exists, regeneration delay/rate if used, and whether shields or temporary health exist in any mode.

### Damage rules to define

- Whether headshots are supported by all eligible weapons or only selected weapons.
- Whether distance changes damage.
- Whether damage can pass through any map materials.
- How damage-over-time, area effects, knockback, and status effects are handled.
- Whether friendly fire exists in any mode.
- How simultaneous eliminations are resolved.

### Fairness requirements

- Damage indicators should communicate direction without revealing more information than intended.
- Elimination credit, assists, and environmental eliminations must follow consistent rules.
- Spawn protection, if used, must be brief, visible, and unable to be exploited for attacking.
- No weapon or ability should silently bypass the normal damage rules.

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

Respawn rules depend on the selected game mode.

### Proposed mode distinction

- **Round-based modes:** Players remain eliminated until the round ends, unless a specific mode rule says otherwise.
- **Respawn modes:** Players return after a short delay at a valid spawn location.
- **Spectating:** Eliminated players may spectate eligible teammates or use a limited overview, depending on the mode.

### Spawn fairness

- Spawn selection should avoid placing players directly in an opponent's immediate line of fire where practical.
- Spawn protection, if implemented, must end when the player attacks or after a short fixed duration.
- The system should avoid repeatedly selecting the same unsafe spawn.
- Spawn logic must be tested with real player counts and map layouts.

**TBD:** Respawn delay, spawn selection algorithm, spectating permissions, spawn protection, and whether players retain ability availability after respawning.

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
- Rewards and progression treatment.

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

- Server authority governs damage, health, ammunition, cooldowns, pickups, match results, and progression rewards.
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
2. Baseline movement includes walk, jump, air control, and optional sprint.
3. No crouch, slide, wall-run, or wall-climb in the initial movement baseline.
4. Equal baseline health for all players.
5. Server-authoritative combat and match outcomes.
6. Separate Primary, Secondary, Melee, and Ability slots.
7. Round-based modes and respawn modes use different elimination rules.
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
