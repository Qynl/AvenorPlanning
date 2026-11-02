# AVENOR — Main Game Design

> **Locked** decisions are confirmed. **Planned** features are part of the current direction but may still be refined. **TBD** means the exact implementation or values have not yet been decided.

## 1. Game Identity

- **Name:** AVENOR
- **Genre:** Competitive Roblox first-person shooter.
- **Goal:** A polished, full-scale FPS built around distinct weapons, mechanical skill, tactical outplays, expressive movement, and exciting matches.
- **Presentation:** Clean, readable, low-to-mid-poly Roblox FPS visuals. RIVALS is a presentation reference, not something to copy.
- **Core promise:** Players should win through aim, movement, decisions, weapon knowledge, teamwork, and smart use of the map. Abilities create opportunities, not automatic victories.

## 2. Core Gameplay

AVENOR combines:
- Fast-paced, skill-based gunfights.
- Responsive movement with room for mechanical expression.
- Distinct weapons with their own handling, strengths, weaknesses, and mastery.
- Tactical outplays through abilities, weapon actions, pickups, positioning, and map control.
- Casual and competitive play.
- Multiple match formats, from duels to larger team modes.
- Clear combat feedback and fair, consistent rules.

### Initial planned game modes

The current proposed roster in **AVENOR_GameModes.md** contains:

- **DUEL** — 1v1, round-based.
- **DUOS** — 2v2, round-based.
- **TEAM DEATHMATCH** — 4v4, continuous respawns.
- **FREE FOR ALL** — 8 players, continuous respawns.
- **HARDPOINT** — 4v4, rotating objective.
- **CAPTURE THE FLAG** — 4v4, team objective.
- **AVENOR ORIGIN** — 4v4, the signature original objective mode.

The roster and detailed draft rules exist. Player counts, score limits, round counts, timers, respawn delays, and overtime rules remain proposed until approved and playtested.

## 3. Player Perspective and Camera

<badge>Locked</badge>

- **During matches:** First-person perspective.
- **In the lobby:** Third-person perspective.

The match camera should keep aiming precise and combat readable. The lobby camera should let players see their character, cosmetics, and social surroundings.

Camera details such as field of view, viewmodel positioning, camera effects, and accessibility options are **TBD** and must be tuned for comfort, clarity, and competitive consistency.

## 4. Movement

<badge>Core movement package defined for prototyping</badge>

Movement is a major part of AVENOR's skill ceiling. It should feel responsive, deliberate, and satisfying, with enough options for players to outmaneuver opponents without making combat unreadable.

### Initial movement package

- Walk: 16 studs/s.
- Sprint: 22 studs/s, activated by holding the sprint input. No stamina system in the initial baseline.
- Jump: consistent jump arc targeting approximately 7.5 studs of vertical rise.
- Air control: 35% of equivalent ground steering strength, preserving takeoff momentum.
- Slide: initiated from sprint at a minimum of 20 studs/s; up to 26 studs/s at entry, 0.70s maximum duration, 0.25s recovery, and 1.25s cooldown.

These are proposed Roblox-stud prototype values, not locked final balance. Full rules, transition restrictions, network validation, and playtest criteria are documented in **AVENOR_Gameplay.md**, Section 3.

### Movement rules

- Sprint is unlimited and does not use stamina.
- Sprint is cancelled by firing, aiming down sights, reloading, or a weapon action that requires a stable stance.
- A sprint jump carries existing horizontal momentum but does not gain extra jump height or air-control strength.
- Slide requires a sprint run-up. It cannot be chained or refreshed by jumping.
- Hip-fire is allowed during a slide; aiming down sights is not.
- Sliding grants no invulnerability, damage reduction, invisibility, or smaller combat hitbox.
- No crouch, double jump, wall-run, wall-climb, automatic bunny-hop chain, or universal air dash in the initial baseline.
- Weapon actions and player abilities may create separately defined movement effects with their own limits and counterplay.
- All players use the same universal movement values. Cosmetics and progression never change movement performance.

### Movement design principles

- Movement should reward timing, control, and good decisions.
- Players should be able to combine movement with weapon use in interesting ways.
- Movement must remain readable to opponents.
- No movement option should make aiming, hit registration, or server performance unreliable.
- Maps should support movement routes, verticality, escapes, and alternate approaches.
- Movement abilities and weapon actions must have clear counterplay where appropriate.

**Status:** Initial movement package defined for prototype testing. Values and feel remain subject to playtesting.

## 5. Health, Damage, and Combat Fairness

<badge>Proposed for playtesting</badge>

- All players have the same baseline health.
- No player receives more base health because of account level, rank, purchases, or cosmetic rarity.
- Weapons and abilities may interact with health and damage through their own defined mechanics, but must be balanced and clearly communicated.

The current proposed baseline is 100 HP, no passive regeneration, no universal shields/overheal, and weapon-specific headshot/damage-falloff rules. These values and rules remain subject to prototype testing.

Combat should be understandable and consistent. Players need clear feedback when they hit, damage, eliminate, or are affected by another player.

## 6. Loadouts and Weapon Slots

Each player has four loadout slots:

1. **Primary** — a damage-dealing weapon.
2. **Secondary** — a weapon or tool whose primary purpose is not dealing damage, such as utility, disruption, movement, information, or deception. Damage-dealing sidearms may still be classified as Primary.
3. **Melee** — a dedicated close-combat weapon.
4. **Ability** — the player's selected ability.

These slot names and their basic roles are the current standard for AVENOR.

- Players receive a usable default loadout immediately.
- Loadouts can be changed between rounds or at other permitted points in a mode.
- Map weapon pickups replace one weapon already in the player's loadout, subject to the pickup's slot rules.
- Pickups create decisions around map control and adapting to opponents.
- The exact restrictions for swapping, dropping, and carrying picked-up items are **TBD**.

The full weapon roster and individual weapon designs are documented in **AVENOR_Weapons.md**.

## 7. Weapons and Weapon Identity

AVENOR is planned to launch with a broad weapon selection. The current planning roster contains **167 weapon concepts**.

Every weapon should have:
- A distinct identity and readable silhouette.
- A recognizable sound and firing behavior.
- A specific handling feel and gameplay purpose.
- Strengths, weaknesses, and meaningful counterplay.
- A reason to be chosen beyond simple stat superiority.
- Room for skill development and weapon mastery.

Weapon categories are for organization, not a substitute for unique gameplay. Avoid reskins, filler weapons, and tiny statistical variations presented as new weapons.

Weapon-specific actions are separate from player abilities. They should create interesting decisions and memorable moments without becoming generic buffs.

The roster is a design target, not a requirement to implement all weapons before the game is playable. Weapons will be prototyped, tested, refined, and added in sensible development batches.

## 8. Player Abilities

Each loadout contains:
- One player ability.

### Player abilities

- Abilities are distinct from weapon actions.
- Each player equips exactly one ability.
- Abilities use cooldowns or another clearly defined availability system.
- Abilities should create tactical opportunities, movement options, information, protection, deception, map interaction, or other meaningful decisions.
- Every ability must have understandable effects and reasonable counterplay.
- Abilities use the universal six-tier rarity system: Commonplace, Altered, Evolved, Ascendant, Extraordinary, and Singular.
- Rarity communicates originality, uniqueness, complexity, presentation, or exclusivity. It does not automatically indicate combat strength.
- Abilities have individual visual effects, animations, and sound cues that communicate their mechanics clearly.
- All 50 active ability concepts now have proposed activation rules, cooldowns, durations, ranges, counterplay, and technical constraints in **AVENOR_Abilities.md**, Section 6. Values remain proposals until playtesting.
- The approved ability concepts and their current rarity assignments are documented in **AVENOR_Abilities.md**.

Abilities may be unlocked through progression, the shop, challenges, achievements, and events. Unlock methods must not create an unfair combat advantage.

## 9. Maps and Map Interaction

AVENOR will feature many distinct arena maps.

Map design goals:
- Different sizes, layouts, and themes.
- Multiple routes and meaningful verticality.
- Clear sightlines and readable silhouettes.
- Movement routes that support sprinting, sliding, jumping, and other confirmed movement mechanics.
- Cover and positioning choices.
- Interactive mechanics where they improve gameplay.
- Opportunities for flanks, escapes, and map control.
- Competitive balance without making every map feel identical.

Map weapon pickups should encourage players to move around the arena and make situational choices. Pickups must be understandable, visible, and fair to contest.

The current concept roster contains eight maps: **FOUNDRY, BREAKWATER, SUNSPIRE, NEON DISTRICT, FROSTLINE, OVERGROWTH, BLACKSITE,** and **SKYLINE**. Their identities and initial mode candidates are documented in **AVENOR_Maps.md**. Proposed dimensions, route structures, vertical layers, spawn regions, pickup rules, and mode overlays for all eight greyboxes are now documented in **AVENOR_MapLayouts.md**. These are starting blueprints; final geometry, balance, and mode compatibility still require in-game testing.

## 10. Match Flow and Player States

A match should have a clear, consistent flow:
1. Players enter a match and receive the correct mode rules and loadout.
2. The match begins with a clear start signal.
3. Players fight, use movement, weapons, abilities, and map features.
4. The mode tracks its objective, score, time, rounds, or lives.
5. The match ends when its win condition is met.
6. Players see the result and relevant performance information.
7. Players can continue, queue again, or return to the lobby.

The exact flow differs by mode. Round-based modes and respawn modes must have rules suited to their format.

The current proposed baseline is no mid-round respawns in round-based modes and a 3-second respawn delay as the initial target for respawn modes. **AVENOR_GameModes.md** defines draft rules for the full mode roster, including round lengths, scoring, time limits, respawns, and overtime. These are proposals, not locked balance. Spectating, round transitions, ties, rematches, and mode-specific edge cases still require implementation testing and final approval.

## 11. Competitive Integrity and Networking

<badge>Locked</badge>

**Combat is server-authoritative.**

The server is responsible for validating important competitive outcomes, including:
- Damage and eliminations.
- Weapon firing and ammunition state.
- Cooldowns and ability use.
- Projectile outcomes.
- Match rules, scoring, and results.
- Ability-created objects and interactions that can affect player movement, map state, information, or match outcomes.

The client may handle responsive presentation and input feedback, but it must not be trusted as the final authority for competitive outcomes.

The implementation should aim for responsive combat while protecting consistency and fairness. The proposed service boundaries, RemoteEvent contracts, hit validation approach, replication strategy, persistence, matchmaking, and exploit-resistance architecture are documented in **AVENOR_Technical.md**. Exact latency tolerances, tuning, profiling results, and implementation-specific validation remain to be proven in a working Roblox build.

## 12. Social Hub

The lobby is a social space, not just a menu.

Planned features:
- Walkable hub where players can meet friends.
- Third-person character presentation.
- Party formation and queueing.
- Cosmetic and profile showcases.
- Interactive weapon showroom.
- Places to inspect weapons and display unlocks.
- Access to modes, loadouts, progression, and the shop.

The lobby should make it easy to group up, personalize a profile, explore the game, and enter a match.

## 13. Progression

There are three separate progression tracks: account progression, weapon mastery, and competitive rank. Their proposed rules, XP sources, level rewards, weapon and ability unlocks, rank ladder, seasons, currencies, challenges, and profile progression are defined in **AVENOR_Progression.md**.

### Account Progression

Account XP and levels can unlock:
- Gameplay unlocks through the approved earnable progression routes
- Currencies and rewards
- Cosmetics
- Titles and badges
- Profile features
- Prestige milestones

Progression should reward time and achievement without giving experienced or paying players an inherent combat-stat advantage.

### Weapon Mastery

Every weapon has its own mastery track:
- Weapon XP and levels
- Weapon-specific challenges
- Exclusive skins
- Titles and badges
- Weapon-specific statistics
- Unique mastery animations or effects

Max mastery grants a dedicated completion collection. There is no endless prestige after max mastery.

## 14. Ranked and Seasons

Planned:
- One universal competitive rank, separate from account level and weapon mastery.
- Competitive modes contribute to the overall rank.
- Monthly ranked seasons.
- A free and optional premium cosmetic season pass.
- Full XP, reward, currency, mastery, ranked and season rules in **AVENOR_Progression.md**.

Still **TBD**:
- Rank names and tiers.
- Rating system and placements.
- Matchmaking rules.
- Season resets.
- Ranked mode eligibility.
- Season pass structure and rewards.

Ranked systems must reward skill and consistency, with matchmaking and rating rules that are understandable and resistant to abuse.

## 15. Cosmetics and Customization

There are no customizable character outfits, faces, helmets, or accessories.

Cosmetic categories include:
- **Weapon skins are always individual to a specific weapon.** A skin designed for one weapon cannot be equipped on another weapon. There are no universal or cross-weapon skin patterns.
- Emotes and dances
- Victory and win animations
- Elimination and kill effects
- MVP and end-of-round celebrations
- Custom kill announcements and sounds
- Player banners
- Profile showcases

Dedicated collections currently exist for individual weapon skins (**AVENOR_Cosmetics.md**), elimination effects (**AVENOR_KillEffects.md**), victory effects (**AVENOR_WinEffects.md**), and emotes (**AVENOR_Emotes.md**). The remaining presentation categories, including MVP presentation, custom elimination announcements and sounds, player banners, and profile showcases, still need their own detailed specifications.

Cosmetics must not provide gameplay advantages or obscure important visual information.

### Universal Rarity System

Used for weapons, skins, effects, abilities, and other rarity-bearing content:

1. Commonplace
2. Altered
3. Evolved
4. Ascendant
5. Extraordinary
6. Singular

Higher rarity indicates greater exclusivity, uniqueness, or complexity. It does not automatically mean stronger combat stats.

## 16. Economy and Unlocks

Planned unlock routes:
- Shop purchases
- Account progression
- Challenges and achievements
- Events
- Cosmetic cases
- Direct unlocks
- Earnable currencies
- Robux as one possible purchase route

The default loadout is available immediately. The current intended direction is that gameplay weapons and abilities are earned through progression and clearly stated challenges, with a usable default loadout available immediately. The progression document recommends that every gameplay weapon remain earnable by everyone and never Robux-exclusive; this policy still requires final approval. Robux is reserved for optional cosmetic purchases and the premium cosmetic pass. Spending must never buy combat stats, competitive rating, or exclusive gameplay abilities.

The economy should make unlock paths clear and avoid making competitive viability depend on spending.

## 17. HUD, Feedback, and Accessibility

The interface should communicate important information without cluttering the screen.

Planned HUD information includes:
- Health and relevant player status.
- Current weapon and ammunition.
- Ability availability.
- Crosshair and aiming feedback.
- Hit, damage, and elimination feedback.
- Objective, score, round, and timer information.
- Teammate information where relevant.

Combat feedback should be readable and consistent. Audio and visual effects should communicate useful information without overwhelming the player.

Controls must support keyboard and mouse, controller, and mobile. Proposed HUD regions, default keyboard/mouse bindings, input abstraction, mobile customization, audio priorities, and accessibility requirements are documented in `AVENOR_HUD_Audio.md`. Exact layouts, remapping options, and platform tuning remain subject to implementation and playtesting.

## 18. Visual and Audio Direction

### Visuals
- Clean, simple, low-to-mid-poly 3D models.
- Strong, instantly readable weapon silhouettes.
- Bright, readable materials and clear visual feedback.
- Roblox-native proportions and performance-aware environments.
- Not Minecraft-blocky and not hyperrealistic.
- RIVALS is a presentation reference only, not an asset or design source to copy.

### Audio

Weapon sounds, movement sounds, ability cues, and elimination feedback should be distinctive and useful. Audio should help players understand what is happening without becoming confusing or excessively noisy.

The proposed audio identity, gameplay-versus-cosmetic priority mix, weapon and movement sound requirements, music direction, and accessibility controls are documented in `AVENOR_HUD_Audio.md`. Final sound assets, mix values, and platform-specific tuning remain TBD.

## 19. Brand Identity

- **Primary palette:** Deep blue, navy, ice blue, white, graphite.
- **Accent:** Soft violet.
- **Working colours:**
  - Deep navy: #172B43
  - Ice blue: #8DBDEB
  - White: #F4F6FA
  - Graphite: #343B48
  - Soft violet: #A58BFF
- **Logo direction:** Custom standalone symbol plus AVENOR wordmark.
- **Typography:** Geometric and modern.
- **Personality:** Competitive and polished, energetic in matches, welcoming socially.

## 20. Development Principles

1. Distinct gameplay comes before quantity.
2. Every weapon and ability must have a clear identity and reason to exist.
3. Movement should be expressive, responsive, and readable.
4. Avoid filler mechanics and generic ability names.
5. Keep the game readable and responsive.
6. Cosmetics never grant combat advantages.
7. Competitive fairness must be tested, not assumed.
8. Server validation is essential for competitive outcomes.
9. Build systems that support future content without making every item feel the same.
10. Prototype and playtest core systems before scaling up content.
11. Do not lock balance values based on guesses; validate them through testing.

## 21. Related Planning Documents

- **AVENOR_Weapons.md** — weapon roster, slot classification, and individual weapon concepts.
- **AVENOR_Abilities.md** — ability system rules, approved ability concepts, rarity assignments, and individual ability designs.
- **AVENOR_Gameplay.md** — detailed proposed gameplay rules, movement, combat, match flow, HUD, and first playable prototype.
- **AVENOR_GameModes.md** — classic and original modes, including AVENOR ORIGIN, with proposed match formats and rules.
- **AVENOR_Maps.md** — map design standards, eight map concepts, visual direction, mode candidates, performance, and the individual map specification template.
- **AVENOR_MapLayouts.md** — proposed greybox footprints, route structures, vertical layers, spawn regions, pickup rules, and mode overlays for all eight maps.
- **AVENOR_Progression.md** — account XP, levels, unlocks, weapon mastery, ranked progression, seasons, currencies, challenges, economy, and player profile progression.
- **AVENOR_Technical.md** — proposed Roblox architecture, server/client responsibilities, networking, persistence, matchmaking, security, testing, and implementation order.
- **AVENOR_Roadmap.md** — ordered milestones from project foundation through release candidate.
- **AVENOR_Cosmetics.md** — individual weapon skins for the weapon roster.
- **AVENOR_KillEffects.md** — elimination effect collection and presentation rules.
- **AVENOR_WinEffects.md** — victory effect collection and presentation rules.
- **AVENOR_Emotes.md** — character emote collection and presentation rules.
- **AVENOR_Presentation.md** — MVP selection and showcases, elimination announcements, player banners, titles, and profile showcases.
- **AVENOR_HUD_Audio.md** — HUD layout, control defaults, cross-platform input, combat feedback, audio direction, music, and accessibility.

## 22. Remaining Open Decisions

The following areas are designed at proposal level and still need approval, implementation, or playtesting:
- Final movement tuning and any advanced movement additions after prototype testing.
- Final health value, damage model, regeneration, and elimination rules after prototype testing.
- Weapon balance validation and implementation priorities.
- Ability prototype values and implementation priorities after playtesting.
- Final approval and playtest tuning of the proposed mode roster, player counts, scoring, timers, respawns, and overtime.
- Greybox validation and iteration for the eight proposed map layouts, including dimensions, routes, sightlines, spawns, interactions, pickup placements, and tested mode compatibility.
- Respawn, spectating, overtime, and round-transition behavior.
- Approval and simulation of the proposed rating bands, placement matches, hidden rating model, and seasonal reset.
- Approval and economy testing of the proposed 40-tier season pass.
- Approval and simulation of account XP, mastery XP, AVENOR Credits, shop prices, and unlock pacing.
- Final approval of the recommended all-gameplay-weapons-earnable policy and ranked ability access.
- HUD, controls, accessibility, and platform-specific implementation after testing the proposed `AVENOR_HUD_Audio.md` specification.
- Implementation and profiling of the proposed technical architecture, including latency tolerances and exploit monitoring.
- Final MVP contribution weights, presentation unlock distribution, profile privacy defaults, and announcement audio defaults.
- Final HUD coordinates, control layouts, audio assets, mix values, and platform-specific accessibility tuning.
- Final development scope adjustments based on prototype results and available production capacity.
