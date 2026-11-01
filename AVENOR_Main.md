# AVENOR — Main Game Design

> **Locked** decisions are confirmed. **Planned** features are part of the current direction but may still be refined. **TBD** means the exact implementation or values have not yet been decided.

## 1. Game Identity

- **Name:** AVENOR
- **Genre:** Competitive Roblox first-person shooter.
- **Goal:** A polished, full-scale FPS built around distinct weapons, mechanical skill, tactical outplays, expressive movement, and exciting matches.
- **Presentation:** Clean, readable, low-to-mid-poly Roblox FPS visuals. RIVALS is a presentation reference, not something to copy.
- **Core promise:** Players should win through aim, movement, decisions, weapon knowledge, teamwork, and smart use of the map. Equipment and abilities create opportunities, not automatic victories.

## 2. Core Gameplay

AVENOR combines:
- Fast-paced, skill-based gunfights.
- Responsive movement with room for mechanical expression.
- Distinct weapons with their own handling, strengths, weaknesses, and mastery.
- Tactical outplays through abilities, equipment, pickups, positioning, and map control.
- Casual and competitive play.
- Multiple match formats, from duels to larger team modes.
- Clear combat feedback and fair, consistent rules.

### Planned game modes

- Duels / 1v1
- Team modes
- Free-for-all
- Objective-based modes
- Additional modes as development progresses.

Match rules vary by mode. Duels may use rounds or limited lives; team and FFA modes may use respawns. Exact rules, player counts, round lengths, and scoring are **TBD** per mode.

## 3. Player Perspective and Camera

<badge>Locked</badge>

- **During matches:** First-person perspective.
- **In the lobby:** Third-person perspective.

The match camera should keep aiming precise and combat readable. The lobby camera should let players see their character, cosmetics, and social surroundings.

Camera details such as field of view, viewmodel positioning, camera effects, and accessibility options are **TBD** and must be tuned for comfort, clarity, and competitive consistency.

## 4. Movement

<badge>Movement direction locked</badge>

Movement is a major part of AVENOR's skill ceiling. It should feel responsive, deliberate, and satisfying, with enough options for players to outmaneuver opponents without making combat unreadable.

### Confirmed movement features

- Sprint
- Slide
- Jump
- Responsive ground movement
- Air control

The movement system may include further advanced options where they improve the game. Potential additions and their exact behavior are **TBD** and must be tested rather than added just for spectacle.

### Movement design principles

- Movement should reward timing, control, and good decisions.
- Players should be able to combine movement with weapon use in interesting ways.
- Movement must remain readable to opponents.
- No movement option should make aiming, hit registration, or server performance unreliable.
- Maps should support movement routes, verticality, escapes, and alternate approaches.
- Movement abilities and weapon actions must have clear counterplay where appropriate.

Exact sprint speed, acceleration, slide duration, slide recovery, jump height, air control, and other movement values are **TBD** until prototyping and playtesting.

## 5. Health, Damage, and Combat Fairness

<badge>Locked</badge>

- All players have the same baseline health.
- No player receives more base health because of account level, rank, purchases, or cosmetic rarity.
- Weapons, abilities, and equipment may interact with health and damage through their own defined mechanics, but must be balanced and clearly communicated.

The exact health value, regeneration rules, damage model, headshot rules, and protection mechanics are **TBD**.

Combat should be understandable and consistent. Players need clear feedback when they hit, damage, eliminate, or are affected by another player.

## 6. Loadouts and Weapon Slots

Each player has five loadout slots:

1. **Primary** — a damage-dealing weapon.
2. **Secondary** — a weapon or tool whose primary purpose is not dealing damage, such as utility, disruption, movement, information, or deception. Damage-dealing sidearms may still be classified as Primary.
3. **Melee** — a dedicated close-combat weapon.
4. **Ability** — the player's selected ability.
5. **Equipment** — a selected tactical item or tool.

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

Weapon-specific actions are separate from player abilities and equipment. They should create interesting decisions and memorable moments without becoming generic buffs.

The roster is a design target, not a requirement to implement all weapons before the game is playable. Weapons will be prototyped, tested, refined, and added in sensible development batches.

## 8. Abilities and Equipment

Each loadout contains:
- One player ability.
- One equipment item.

### Player abilities

- Abilities are distinct from weapon actions and equipment.
- Each player equips exactly one ability.
- Abilities use cooldowns or another clearly defined availability system.
- Abilities should create tactical opportunities, movement options, information, protection, deception, map interaction, or other meaningful decisions.
- Every ability must have understandable effects and reasonable counterplay.
- Abilities use the universal six-tier rarity system: Commonplace, Altered, Evolved, Ascendant, Extraordinary, and Singular.
- Rarity communicates originality, uniqueness, complexity, presentation, or exclusivity. It does not automatically indicate combat strength.
- Abilities have individual visual effects, animations, and sound cues that communicate their mechanics clearly.
- Exact cooldowns, durations, ranges, charges, restrictions, and balance values remain **TBD** until detailed design and playtesting.
- The approved ability concepts and their current rarity assignments are documented in **AVENOR_Abilities.md**.

### Equipment

Equipment can include:
- Grenades and other throwables.
- Traps.
- Deployables.
- Tactical tools.
- Information or disruption tools.

Equipment replenishment may come from pickups or designated map locations. Exact replenishment rules are **TBD** and may differ by item or mode.

Abilities and equipment may be unlocked through progression, the shop, challenges, achievements, and events. Unlock methods must not create an unfair combat advantage.

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

Map sizes, themes, interactive objects, pickup placement rules, and mode-specific map pools are **TBD**.

## 10. Match Flow and Player States

A match should have a clear, consistent flow:
1. Players enter a match and receive the correct mode rules and loadout.
2. The match begins with a clear start signal.
3. Players fight, use movement, weapons, abilities, equipment, and map features.
4. The mode tracks its objective, score, time, rounds, or lives.
5. The match ends when its win condition is met.
6. Players see the result and relevant performance information.
7. Players can continue, queue again, or return to the lobby.

The exact flow differs by mode. Round-based modes and respawn modes must have rules suited to their format.

Death, respawn timing, spectating, round transitions, overtime, ties, and rematch behavior are **TBD** per mode.

## 11. Competitive Integrity and Networking

<badge>Locked</badge>

**Combat is server-authoritative.**

The server is responsible for validating important competitive outcomes, including:
- Damage and eliminations.
- Weapon firing and ammunition state.
- Cooldowns and ability use.
- Projectile and relevant equipment outcomes.
- Match rules, scoring, and results.
- Ability-created objects and interactions that can affect player movement, map state, information, or match outcomes.

The client may handle responsive presentation and input feedback, but it must not be trusted as the final authority for competitive outcomes.

The implementation should aim for responsive combat while protecting consistency and fairness. Latency handling, hit validation details, replication strategy, and exploit prevention are part of the technical design and are **TBD** at the implementation level.

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

There are two separate progression tracks.

### Account Progression

Account XP and levels can unlock:
- Weapons
- Abilities and equipment
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
- One universal rank.
- Competitive modes contribute to the overall rank.
- Monthly ranked seasons.
- A season pass.

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
- Weapon skins
- Emotes and dances
- Victory and win animations
- Elimination and kill effects
- Match intros
- MVP and end-of-round celebrations
- Custom kill announcements and sounds
- Player banners
- Profile showcases

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

The default loadout is available immediately. Whether any weapon access can be paid-exclusive remains **TBD**. Paid options must not create a gameplay-stat advantage.

The economy should make unlock paths clear and avoid making competitive viability depend on spending.

## 17. HUD, Feedback, and Accessibility

The interface should communicate important information without cluttering the screen.

Planned HUD information includes:
- Health and relevant player status.
- Current weapon and ammunition.
- Ability and equipment availability.
- Crosshair and aiming feedback.
- Hit, damage, and elimination feedback.
- Objective, score, round, and timer information.
- Teammate information where relevant.

Combat feedback should be readable and consistent. Audio and visual effects should communicate useful information without overwhelming the player.

Controls must support the intended platforms. Keyboard and mouse, controller, and mobile layouts are planned. Mobile button size and position should be adjustable where practical. Exact layouts, remapping options, accessibility settings, and HUD customization are **TBD**.

## 18. Visual and Audio Direction

### Visuals
- Clean, simple, low-to-mid-poly 3D models.
- Strong, instantly readable weapon silhouettes.
- Bright, readable materials and clear visual feedback.
- Roblox-native proportions and performance-aware environments.
- Not Minecraft-blocky and not hyperrealistic.
- RIVALS is a presentation reference only, not an asset or design source to copy.

### Audio

Weapon sounds, movement sounds, ability cues, equipment cues, and elimination feedback should be distinctive and useful. Audio should help players understand what is happening without becoming confusing or excessively noisy.

The final sound identity and detailed audio rules are **TBD**.

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
- Future documents may define maps, technical architecture, progression, ranked systems, and the economy in greater detail.

## 22. Remaining Open Decisions

The following areas still need detailed design or testing:
- Exact movement values and the final advanced movement feature set.
- Health value, damage model, regeneration, and elimination rules.
- Weapon statistics, balance, and implementation priorities.
- Ability cooldowns, durations, ranges, charges, restrictions, and implementation priorities.
- Equipment roster, cooldowns, and replenishment.
- Full mode list, player counts, scoring, and match rules.
- Map roster, layouts, interactions, and pickup rules.
- Respawn, spectating, overtime, and round-transition behavior.
- Ranked tiers, rating, placements, matchmaking, and resets.
- Season pass structure.
- Economy and paid unlock boundaries.
- HUD, controls, accessibility, and platform-specific implementation.
- Detailed networking, latency handling, and technical architecture.
- Development roadmap and release scope.
