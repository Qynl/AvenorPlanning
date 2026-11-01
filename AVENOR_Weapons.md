# AVENOR — Weapon Design

> This document owns the weapon roster and individual weapon designs. Accepted concepts are marked **Accepted**. Prototype values are not final balance values.

## 1. Weapon Design Philosophy
AVENOR is planned to launch with **167 weapons**.

The goal is not to fill a spreadsheet with generic versions of familiar guns. Every weapon should feel recognizably different in the player's hands.

### Core Rules
- Every weapon needs a distinct identity, silhouette, sound, handling, and gameplay purpose.
- Weapon abilities should create interesting decisions or memorable moments, not merely provide generic damage or recoil buffs.
- Names should sound like actual weapon names or distinctive in-world names.
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
There are 167 planned weapons. The entries below record the designs established so far. IDs are internal references, not final player-facing weapon names.

### Weapon 001 — Assault Rifle
- **Internal ID:** AR-01
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

### Weapon 002 — Submachine Gun
- **Internal ID:** SMG-01
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

### Weapon 003 — Shotgun
- **Internal ID:** SG-01
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

### Weapon 004 — Sniper Rifle
- **Internal ID:** SR-01
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

### Weapon 005 — Pistol
- **Internal ID:** P-01
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

### Weapon 006 — Burst Rifle
- **Internal ID:** BR-01
- **Category:** Burst Rifle
- **Rarity:** Commonplace
- **Role:** Burst-fire rifle with a temporary high-tempo firing mode.
- **Weapon Action: Rapid Burst**

Temporarily increases firing speed so the rifle can deliver its four-shot bursts much faster than usual.

**Status:** Accepted concept. Duration, cooldown, and exact firing cadence are TBD.

### Weapon 007 — Minigun
- **Working name:** Minigun
- **Category:** Light Machine Gun
- **Rarity:** Commonplace (provisional)
- **Role:** Heavy sustained-fire weapon.
- **Design direction:** A rotating-barrel weapon with a recognizable firing rhythm and a playstyle distinct from assault rifles and SMGs.
- **Weapon Action:** TBD.

**Status:** Selected as the next weapon concept. Its ability has not yet been designed or approved.

## 5. Remaining Roster
Weapons 008–167 are TBD.

Do not fill the remaining roster with generic category variants just to reach 167. Each new weapon should be designed around a memorable central mechanic and a clear gameplay role.

## 6. Weapon Design Checklist
Before a weapon is accepted, define:
1. Player-facing weapon name.
2. Category and rarity.
3. Distinct visual silhouette.
4. Core firing behaviour and handling.
5. Intended combat range and role.
6. Unique Weapon Action and its exact rules.
7. Counterplay and limitations.
8. Prototype balance values.
9. Sound and visual feedback.
10. Mastery progression and possible cosmetic opportunities.

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
