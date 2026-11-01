# AVENOR — Weapon Design

> This document owns the weapon roster and individual weapon designs. Accepted concepts are marked **Accepted**. Proposed concepts are marked **Proposed**. Prototype values are not final balance values.

## 1. Weapon Design Philosophy

AVENOR is planned to launch with **167 weapons**.

The goal is not to fill a spreadsheet with generic versions of familiar guns. Every weapon should feel recognizably different in the player's hands.

### Core Rules
- Every weapon needs a distinct identity, silhouette, sound, handling, and gameplay purpose.
- Weapon abilities should create interesting decisions or memorable moments, not merely provide generic damage or recoil buffs.
- Player-facing names should feel natural, memorable, and distinctive. The naming style can mix everyday words, objects, surnames, nicknames, and understated humor.
- Avoid generic category labels as player-facing weapon names and avoid excessive futuristic jargon.
- The internal weapon ID must match the weapon's unique name. Category prefixes such as AR-01 or SMG-01 are not used as weapon IDs.
- Weapon categories are useful for organization, but category alone must not determine how a weapon plays.
- Rarity reflects exclusivity, uniqueness, and design complexity. It does not automatically mean better combat stats.
- No weapon should be a simple reskin or a tiny stat variation of another.
- Weapons should be fun to learn, recognize, counter, and master.

## 2. Rarity Hierarchy

1. Commonplace
2. Altered
3. Evolved
4. Ascendant
5. Extraordinary
6. Singular

Every weapon has one fixed rarity. Rarity can guide the complexity and uniqueness of its special mechanic, but it must not be used as a shortcut for making higher-rarity weapons objectively stronger.

## 3. Loadout and Weapon Controls

A loadout contains:
- Two guns
- One close-combat weapon
- One player ability
- One equipment item

Weapon-specific actions share one universal **Weapon Action** input across the entire roster.

Default key: **X** (remappable).

### Proposed Default Controls
- Left click: Fire
- Right click: Aim / zoom
- R: Reload
- X: Weapon Action
- Q: Player ability
- G: Equipment

All controls should be remappable, including keyboard and mouse, controller, and mobile layouts. Mobile players should be able to adjust button position and size.

Weapon abilities use cooldowns. The cooldown begins after activation or after the relevant action completes, depending on the weapon's mechanic.

## 4. Weapon Roster

There are 167 planned weapons. The entries below record the designs established so far. Weapon IDs are name-based internal references and match each weapon's unique name.

### Weapon 001 — TAXMAN
- **Internal ID:** TAXMAN
- **Category:** Assault Rifle
- **Rarity:** Commonplace
- **Role:** Balanced all-rounder.
- **Visual direction:** Modern-futuristic hybrid, with a clean and readable Roblox-style model.
- **Weapon Action: Precision Cycle**

Switches the rifle from automatic fire to controlled three-round bursts. Burst mode gives the player more controlled shot placement.

**Prototype stats:**
- Damage: 25
- Headshot multiplier: 1.5×
- Fire rate: 600 RPM
- Magazine: 30 rounds
- Reserve: 120 rounds
- Reload: 2.0 seconds
- Ability duration: 5 seconds
- Ability cooldown: 12 seconds

**Status:** Accepted concept. Stats are provisional.

### Weapon 002 — POCKET ROCKET
- **Internal ID:** POCKET-ROCKET
- **Category:** Submachine Gun
- **Rarity:** Commonplace
- **Role:** Fast close-range combat.
- **Weapon Action: Overdrive**

Temporarily increases fire rate by 30% for 4 seconds. Damage per bullet stays the same, so the weapon consumes ammunition faster.

**Prototype stats:**
- Damage: 18
- Headshot multiplier: 1.5×
- Fire rate: 800 RPM
- Magazine: 32 rounds
- Reserve: 128 rounds
- Reload: 1.8 seconds
- Ability cooldown: 14 seconds

**Status:** Accepted concept. Stats are provisional.

### Weapon 003 — DOORBELL
- **Internal ID:** DOORBELL
- **Category:** Shotgun
- **Rarity:** Commonplace
- **Role:** High-impact close-range combat.
- **Weapon Action: Double Tap**

Fires two consecutive shotgun shots in quick succession, consuming two shells. A short recovery delay follows before normal firing resumes.

**Prototype stats:**
- Damage: 10 per pellet
- Pellets per shot: 8
- Magazine: 6 shells
- Reload: 2.4 seconds
- Ability cooldown: 16 seconds

**Status:** Accepted concept. Stats are provisional.

### Weapon 004 — LONG STORY
- **Internal ID:** LONG-STORY
- **Category:** Sniper Rifle
- **Rarity:** Altered
- **Role:** Long-range precision.
- **Weapon Action: Hunter's Sight**

Briefly reveals subtle outlines of opponents through walls to the sniper user. The original concept also includes a very small increase to the visible head hit area.

**Prototype values:**
- Duration: 4 seconds
- Hit-area change: 5%
- Cooldown: 20 seconds

**Fairness note:** The hit-area change must be carefully tested. If it creates inconsistent hit registration or unfair advantages, use the reveal effect without changing hitboxes.

**Status:** Accepted concept, pending competitive testing.

### Weapon 005 — LOOSE CHANGE
- **Internal ID:** LOOSE-CHANGE
- **Category:** Pistol
- **Rarity:** Commonplace
- **Role:** Sidearm with a deliberate high-impact shot option.
- **Weapon Action: Charged Shot**

Hold Weapon Action to charge one amplified, instant-hit shot. Releasing fires the shot. It consumes one round and has a visible blue-violet charge cue and audio cue.

**Prototype values:**
- Charge time: 0.8 seconds
- Damage multiplier: 1.5× normal damage
- Cooldown: 12 seconds

**Constraints:**
- Switching weapons cancels the charge.
- The shot does not auto-hit or track opponents.

**Status:** Accepted concept. Numbers are provisional.

### Weapon 006 — THREE'S COMPANY
- **Internal ID:** THREES-COMPANY
- **Category:** Burst Rifle
- **Rarity:** Commonplace
- **Role:** Burst-fire rifle with a temporary high-tempo firing mode.
- **Weapon Action: Rapid Burst**

Temporarily increases firing speed so the rifle can deliver its four-shot bursts much faster than usual.

**Status:** Accepted concept. Duration, cooldown, and exact firing cadence are TBD.

### Weapon 007 — LAWNMOWER
- **Internal ID:** LAWNMOWER
- **Category:** Light Machine Gun
- **Rarity:** Commonplace (provisional)
- **Role:** Heavy sustained-fire weapon.
- **Design direction:** A rotating-barrel weapon with a recognizable firing rhythm and a playstyle distinct from assault rifles and SMGs.
- **Weapon Action:** TBD

**Possible action direction — Ricochet Feed:** A short temporary mode in which selected shots can bounce once from suitable arena surfaces. This remains an unapproved proposal; its exact rules and fairness need testing.

**Status:** Selected as a weapon concept. Weapon Action not accepted.

### Weapon 008 — RETURN TO SENDER
- **Internal ID:** RETURN-TO-SENDER
- **Category:** Returning Disc Launcher
- **Rarity:** Altered (provisional)
- **Role:** Mid-range area pressure and timing-based outplays.
- **Core firing behaviour:** Fires a flat spinning disc that travels forward and then returns to its owner after reaching its travel limit. The returning path is part of the weapon's normal firing loop.
- **Weapon Action: Early Return**

Recall the active disc early, causing it to reverse direction immediately instead of completing its normal travel. This lets the player choose when to bring the disc back and can create a second angle of pressure.

**Rules and counterplay:**
- The disc follows a readable, non-homing path.
- It cannot pass through solid walls.
- It can hit each opponent at most once per throw.
- Opponents can avoid the outbound or returning path using movement and cover.
- The player must consider the disc's travel and return timing rather than firing continuously without thought.

**Prototype values:** Damage, travel speed, maximum travel time, and action cooldown are TBD.

**Status:** Proposed concept. Not yet accepted.

### Weapon 009 — THE RENTAL
- **Internal ID:** THE-RENTAL
- **Category:** Special / Utility Firearm
- **Rarity:** Altered (provisional)
- **Role:** Mid-range, geometry-focused combat.
- **Core firing behaviour:** Fires projectiles that bounce from arena surfaces. Their paths are readable and predictable, rewarding players who anticipate movement and use the arena's geometry.
- **Weapon Action: One More Time**

The next projectile gains one additional bounce before disappearing.

**Rules and counterplay:**
- Bounces are visually readable.
- The projectiles do not home in on opponents.
- The weapon is more effective in enclosed spaces and less reliable in open areas.
- Opponents can reposition or use cover to avoid predicted paths.

**Prototype values:** Damage, projectile speed, magazine, bounce limits, and cooldown are TBD.

**Status:** Proposed concept. Not yet accepted.

### Weapon 010 — BAD HABIT
- **Internal ID:** BAD-HABIT
- **Category:** Hand Cannon
- **Rarity:** Altered (provisional)
- **Slot:** Secondary
- **Role:** High-impact close-to-mid-range sidearm.
- **Core firing behaviour:** A heavy two-round sidearm that fires two shots in quick succession. Both rounds must be managed carefully, followed by a deliberate reload.
- **Weapon Action: Recoil Therapy**

Fire one loaded round downward to launch the player in the opposite direction. This creates a sudden movement option for escaping, changing angles, or extending an aerial movement sequence.

**Rules and counterplay:**
- The action consumes one loaded round.
- The movement direction is based on the player's aim direction at activation.
- It can be used while airborne.
- The ability itself does not deal damage.
- Using it reduces the ammunition available for the next fight, so players must choose between mobility and keeping the round.

**Prototype values:** Damage, firing interval, magazine/reload values, movement impulse, and cooldown are TBD.

**Status:** Proposed concept. Not yet accepted.

### Weapon 011 — DEAD WEIGHT
- **Internal ID:** DEAD-WEIGHT
- **Category:** Heavy Launcher
- **Rarity:** Altered (provisional)
- **Slot:** Primary
- **Role:** Mid-range area pressure and timing-based combat.
- **Core firing behaviour:** Fires a heavy, relatively slow projectile in a straight line. On impact, it creates a small area effect.
- **Weapon Action: Cut the Line**

The next projectile can be detonated remotely while it is travelling by pressing Weapon Action again. The player chooses the timing of the detonation to catch opponents moving through an area or pressure a route before they reach cover.

**Rules and counterplay:**
- Only one projectile can be remotely detonated at a time.
- The projectile remains visible while travelling.
- Opponents can react to its trajectory and reposition before detonation.
- If not remotely detonated, it follows its normal impact behaviour.
- The remote detonation must have clear visual and audio feedback.

**Prototype values:** Damage, blast radius, projectile speed, magazine, reload, and action cooldown are TBD.

**Status:** Proposed concept. Not yet accepted.

## 5. Remaining Roster

Weapons 012–167 are TBD.

Do not fill the remaining roster with generic category variants just to reach 167. Each new weapon should be designed around a memorable central mechanic and a clear gameplay role.

## 6. Weapon Design Checklist

Before a weapon is accepted, define:
1. Player-facing weapon name.
2. Matching name-based internal ID.
3. Category and rarity.
4. Distinct visual silhouette.
5. Core firing behaviour and handling.
6. Intended combat range and role.
7. Unique Weapon Action and its exact rules.
8. Counterplay and limitations.
9. Prototype balance values.
10. Sound and visual feedback.
11. Mastery progression and possible cosmetic opportunities.

A weapon is not finished merely because it has a name and an ability label. Its complete gameplay loop must feel distinct from the rest of the arsenal.

## 7. Weapon Mastery

Every weapon has an independent mastery progression:
- Weapon XP and levels.
- Weapon-specific challenges.
- Exclusive skins.
- Titles and badges.
- Weapon-specific statistics.
- Unique mastery animations or effects.

Max mastery unlocks a dedicated completion collection, including an exclusive mastery skin, special title, badge, and unique effects or animations. There is no endless prestige after max mastery.

## 8. Skins and Weapon Cosmetics

- Every skin changes the weapon's appearance.
- Extra features vary by skin: sounds, effects, animations, kill effects, announcements, and other unique details.
- Some skins are appearance-only; others include multiple extras.
- Skins can be realistic, futuristic, animated, themed, funny, premium, or highly distinctive.
- Some skins may have subtle animation variations or unique animation sets.
- Every weapon has a standard inspection animation; selected skins may have their own inspection variants.

If a skin supplies a kill effect or another overlapping cosmetic feature, that skin's feature takes priority while the weapon is equipped. The player's normal equipped effect returns when using a weapon without that skin-provided feature.

## 9. Balance Principles

- Rarity is not a direct power ranking.
- Special mechanics need clear counterplay.
- Weapon abilities should not make normal weapon skill irrelevant.
- Strong effects should have readable visual and audio cues.
- Prototype stats must be tested in real matches before being treated as final.
- Avoid mechanics that quietly change hit registration or create confusing outcomes without strong justification.
