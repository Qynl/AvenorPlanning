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
- **Slot:** Primary
- **Role:** Versatile mid-range duelling built around sustained target pressure.
- **Core mechanic: Compound Interest**

Consecutive hits on the same opponent build a visible mark. Missing or switching targets resets the progress.

- **Weapon Action: Collection Day**

Activate to cash in the mark. The next shot that hits the marked opponent deals bonus damage based on the accumulated mark.

**Rules and counterplay:**
- The bonus is capped.
- The mark is visible to the affected opponent.
- Breaking line of sight for a short period clears the mark.
- The action does not aim, track, or guarantee a hit.

**Prototype values:** Damage, mark progression, mark duration, bonus cap, and cooldown are TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.### Weapon 002 — POCKET ROCKET
- **Internal ID:** POCKET-ROCKET
- **Category:** Submachine Gun
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Aggressive close-range movement combat.
- **Core mechanic: Runaway**

The longer the player continuously fires, the faster the weapon cycles, up to a defined limit. Releasing the trigger resets the acceleration.

- **Weapon Action: Hot Pursuit**

Perform a short forward movement burst while keeping the weapon ready.

**Rules and counterplay:**
- The movement burst has a fixed distance and brief recovery.
- It can be activated during a jump.
- It cannot be chained repeatedly.
- The weapon's accelerating fire rate still requires ammunition management.

**Prototype values:** Base and maximum fire rate, acceleration time, magazine, movement distance, recovery, and cooldown are TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.### Weapon 003 — DOORBELL
- **Internal ID:** DOORBELL
- **Category:** Shotgun
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Close-range combat and distance control.
- **Core mechanic: Knock Knock**

The shotgun has two firing modes:
- **Normal shot:** Wider pellet spread.
- **Focused shot:** Tighter pellet spread with a short firing delay.

- **Weapon Action: House Call**

Fire a special blast that launches the user backwards and pushes opponents caught in its impact area away.

**Rules and counterplay:**
- House Call consumes one shell.
- Its push direction and area are clearly telegraphed.
- It deals limited or no damage compared with a normal shot; its primary purpose is repositioning and spacing.
- Opponents can avoid the blast area.

**Prototype values:** Pellet count, damage, spread profiles, magazine, reload, push strength, and cooldown are TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.### Weapon 004 — LONG STORY
- **Internal ID:** LONG-STORY
- **Category:** Sniper Rifle
- **Rarity:** Altered
- **Slot:** Primary
- **Role:** Long-range precision and planned angle manipulation.
- **Core mechanic: Follow Through**

A successful hit briefly stabilizes the next shot, reducing the time required to reach full accuracy.

- **Weapon Action: Long Distance**

Place a visible marker on a valid surface within range. The next scoped shot can travel through the marker and emerge from its position, creating an alternate firing angle.

**Rules and counterplay:**
- Only one marker can be active.
- The marker is visible and can be removed by opponents.
- The shot's exit direction is clearly indicated.
- The shot still requires normal aim and can be dodged or blocked.
- The marker cannot be placed through solid geometry.

**Prototype values:** Stabilization duration, marker range and lifetime, shot redirection rules, and cooldown are TBD.

**Status:** Accepted redesign concept, pending competitive testing.### Weapon 005 — LOOSE CHANGE
- **Internal ID:** LOOSE-CHANGE
- **Category:** Pistol
- **Rarity:** Commonplace
- **Slot:** Secondary
- **Role:** Precision sidearm built around creative trick shots.
- **Core mechanic: Spare Change**

The pistol fires projectiles that can ricochet once from suitable arena surfaces.

- **Weapon Action: Make It Count**

Toss a special metal token into the arena. Shooting the token redirects the next projectile along a clearly indicated ricochet toward the token's position.

**Rules and counterplay:**
- Only one token can exist at a time.
- The token has a visible, readable trajectory and can be destroyed by opponents.
- The redirected shot does not home in after the ricochet.
- The player must still line up the initial shot.
- Token placement and use have a limited duration.

**Prototype values:** Damage, magazine, projectile speed, ricochet rules, token lifetime, and cooldown are TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.### Weapon 006 — THREE'S COMPANY
- **Internal ID:** THREES-COMPANY
- **Category:** Burst Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Mid-range burst control and firing-rhythm mastery.
- **Core mechanic: Third Shot**

Each standard burst contains three shots. The third shot has a distinct, predictable trajectory, giving the weapon a recognizable rhythm and rewarding players who control the complete burst.

- **Weapon Action: Plus One**

The next burst fires a fourth projectile.

**Rules and counterplay:**
- The fourth projectile consumes additional ammunition.
- Its trajectory is distinct and predictable, not random.
- The extra shot adds a handling or recovery trade-off.
- The action cannot be activated repeatedly without its cooldown.

**Prototype values:** Burst interval, third-shot trajectory, fourth-shot trajectory, ammunition cost, recovery, and cooldown are TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.### Weapon 007 — LAWNMOWER
- **Internal ID:** LAWNMOWER
- **Category:** Light Machine Gun
- **Rarity:** Commonplace (provisional)
- **Slot:** Primary
- **Role:** Sustained fire and mobile area pressure.
- **Core mechanic: Spool Up**

The rotating barrel needs time to spin up before reaching full firing speed. Once running, it maintains a high firing rate.

- **Weapon Action: Grass Cutter**

Lock the barrel at maximum spin for a short period. During this window, the player can strafe faster than normal while firing.

**Rules and counterplay:**
- The weapon has a noticeable spin-up and spin-down period.
- Grass Cutter has a limited duration and a clear audio/visual cue.
- The action cannot be activated while the barrel is completely idle.
- Sustained fire consumes ammunition quickly.

**Prototype values:** Spin-up time, fire-rate curve, magazine, movement speed during Grass Cutter, duration, and cooldown are TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.### Weapon 008 — RETURN TO SENDER
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

### Weapon 012 — BAD RECEPTION
- **Internal ID:** BAD-RECEPTION
- **Category:** Pulse Rifle
- **Rarity:** Evolved (provisional)
- **Slot:** Primary
- **Role:** Mid-range duelling through controlled bursts and concealment of firing cues.
- **Core mechanic: Signal Burst**

Fires a three-projectile burst with a slight delay between projectiles, rewarding controlled tracking.

- **Weapon Action: Dead Air**

For a short duration, suppresses the weapon's distinctive firing audio and removes its visible projectile trails. Damage and fire rate remain unchanged.

**Rules and counterplay:**
- Opponents can still see impacts and identify the player's position through other cues.
- The effect does not make the player invisible.
- The duration is short and has clear activation feedback.
- The weapon still requires accurate burst placement.

**Prototype values:** Damage, burst spacing, effect duration, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 013 — CALL WAITING
- **Internal ID:** CALL-WAITING
- **Category:** Charge Rifle
- **Rarity:** Altered (provisional)
- **Slot:** Primary
- **Role:** Precision mid-to-long-range combat with weapon-switch combos.
- **Core mechanic: Charge and Release**

Hold fire to charge a shot. Releasing fires it. Longer charge increases damage up to a defined maximum. Charging temporarily reduces mobility. Releasing early still fires a weaker shot.

- **Weapon Action: Call Waiting**

Store the current charge and temporarily switch to the secondary weapon. The stored charge remains for four seconds. Switching back to CALL WAITING during that window releases the stored shot immediately.

**Rules and counterplay:**
- If the timer expires, the stored charge is lost.
- The charge state has clear visual and audio feedback.
- Switching to the secondary does not preserve the charge indefinitely.
- The shot still requires normal aim.

**Prototype values:** Charge time, damage curve, mobility penalty, storage duration, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 014 — SHORT NOTICE
- **Internal ID:** SHORT-NOTICE
- **Category:** Repeater Crossbow
- **Rarity:** Altered (provisional)
- **Slot:** Primary
- **Role:** Precision combat and creative movement.
- **Core mechanic: Split Bolt**

Fires a bolt that splits into three smaller projectiles after travelling a set distance. At close range it remains concentrated; at longer range the split creates a horizontal spread.

- **Weapon Action: Express Delivery**

Fire a special anchor bolt that attaches to the first valid solid surface it hits. Press Weapon Action again to pull yourself toward the anchor.

**Rules and counterplay:**
- Only one anchor can exist at a time.
- The anchor and connection are visible to opponents.
- The anchor expires after a short duration or after use.
- The pull requires a valid surface and can be interrupted by the anchor being removed.
- The bolt cannot attach through solid geometry.

**Prototype values:** Bolt speed, split distance, spread, anchor lifetime, pull strength, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

## 5. Remaining Roster

Weapons 015–167 are TBD.

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
