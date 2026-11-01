# AVENOR — Equipment System

> **Roster status: 20 selected concepts from 30 reviewed.** This is a curated design roster, not a promise that all 20 ship at launch. All numerical values, charges, durations, ranges, deployment limits, and balance remain TBD until prototypes and playtests. Equipment concepts are separate from player abilities and weapon actions.

## 1. Equipment Identity

Equipment is the player's **physical tactical tool slot**. It represents gadgets, consumables, deployables, and support devices that create temporary opportunities or change a small part of the arena.

### The five loadout slots

1. **Primary** — main damage-dealing weapon.
2. **Secondary** — utility or non-primary damage weapon/tool.
3. **Melee** — dedicated close-combat weapon.
4. **Ability (Q)** — character-level power, generally cooldown-driven.
5. **Equipment (G)** — selected tactical item with limited uses.

### Ability vs. Equipment vs. Weapon Action

| System | What it represents | Typical availability |
|---|---|---|
| Weapon Action (X) | A special behaviour belonging to the equipped weapon | Weapon-specific cooldown or condition |
| Player Ability (Q) | A character-level power | Cooldown or defined ability resource |
| Equipment (G) | A physical gadget, consumable, or deployable | Limited charges, replenished by life/round rules |

Equipment must not become a second ability roster. A concept that is mainly a repeatable personal superpower belongs in Abilities, not Equipment. A concept that is simply another weapon attack belongs in Weapons.

## 2. Core System Rules

### Loadout and activation
- Each player equips exactly **one equipment item**.
- Default activation input is **G**, remappable on keyboard/mouse, controller, and mobile.
- The selected item must have a clear inventory icon, name, charge count, and activation state.
- Players spawn with their selected equipment available, subject to the mode's rules.
- Equipment selection and loadout changes happen only at permitted loadout points, not freely during an active life.
- Equipment does not occupy or replace a weapon slot.

### Charges and replenishment
- Equipment uses limited charges rather than a normal ability cooldown as its primary availability system.
- The default design target is **one meaningful deployment or use per life**, with item-specific exceptions only where justified.
- In respawn modes, charges are restored on respawn.
- In round-based modes, charges are restored at the start of each round.
- A charge is consumed when the item is successfully deployed or activated, not when an invalid placement is attempted.
- Equipment is not automatically replenished by waiting. Any map pickup or special refill rule must be explicitly designed and balanced.
- Exact charge counts and any exceptions remain TBD.

### Deployables and persistence
- Deployed equipment must have clear ownership, a visible state, and a predictable lifetime.
- A deployable must be removable, destructible, avoidable, or limited by duration where appropriate.
- Proposed baseline: one active persistent deployable per player. Deploying another persistent item replaces the player's previous persistent deployable, unless a specific item rule says otherwise.
- Team-wide deployment caps may be added if stacking becomes oppressive.
- Deployed equipment is cleaned up when its lifetime ends, its owner leaves the match, or the round ends.
- Equipment cannot create permanent map changes.

### Fairness and readability
- Equipment must have clear activation feedback and readable effects.
- Strong effects need a warning, counterplay, and a reasonable response window.
- Equipment must not guarantee an elimination or make a player invulnerable.
- No equipment may grant permanent health, damage, movement, or accuracy advantages.
- Equipment effects must not make opponents, projectiles, objectives, or pickups unreadable.
- Equipment must be server-authoritative for placement, charges, effects, ownership, damage interactions, and cleanup.
- Cosmetics and rarity never improve equipment performance.

## 3. Rarity Hierarchy

The universal AVENOR rarity hierarchy applies:

1. Commonplace
2. Altered
3. Evolved
4. Ascendant
5. Extraordinary
6. Singular

Rarity communicates originality, uniqueness, complexity, presentation, or exclusivity. It does **not** mean an item is automatically stronger. Not every rarity tier needs to be represented in every content category.

## 4. Active Equipment Roster

The 20 concepts below survived the first design filter. They are selected for distinct match value, not because the roster needs to hit a number.

### Commonplace

#### 01. SMOKE CAPSULE
- **Role:** Temporary visual obstruction.
- **Concept:** Throw a capsule that creates a clearly bounded smoke cloud for a short period. It blocks ordinary sight through the cloud but does not reveal, damage, or move players.
- **Why it earns a slot:** Creates a temporary crossing, escape, or objective approach without directly winning a fight.
- **Counterplay:** The cloud is visible from a distance, has a clear duration, and can be waited out or bypassed. Players inside remain vulnerable.
- **Prototype values:** Cloud size, duration, deployment arc, and charge count TBD.

#### 02. MEDKIT
- **Role:** Personal recovery.
- **Concept:** Use a short, interruptible recovery item to restore a limited amount of missing health. It cannot exceed the player's normal maximum health.
- **Why it earns a slot:** Gives players a deliberate recovery option after surviving an engagement.
- **Counterplay:** Using it takes time, creates a clear audio/visual cue, and leaves the player unable to fire normally during the use. It cannot rescue a player from an already-confirmed elimination.
- **Prototype values:** Heal amount, use time, interruption rules, and charge count TBD.

#### 03. AMMO CACHE
- **Role:** Team ammunition support.
- **Concept:** Deploy a small resupply station that allows nearby teammates to replenish a limited amount of ammunition. It does not grant health, equipment charges, or ability cooldown resets.
- **Why it earns a slot:** Gives a team a reason to control and defend a location without directly increasing damage.
- **Counterplay:** The station is visible, stationary, has limited total supply, and can be destroyed or allowed to expire.
- **Prototype values:** Total supply, per-player refill, interaction time, lifetime, and charge count TBD.

#### 04. FLASH CHARGE
- **Role:** Brief visual disruption.
- **Concept:** A thrown device creates a short, clearly telegraphed visual disruption for opponents who are looking toward its effect. It does not deal damage.
- **Why it earns a slot:** Creates a brief timing opportunity for a push or disengagement.
- **Counterplay:** The activation has a readable warning, effect depends on facing/visibility, duration is short, and players can turn away or use cover.
- **Prototype values:** Warning time, effect duration, radius, and charge count TBD.

### Altered

#### 05. COVER PANEL
- **Role:** Temporary deployable cover.
- **Concept:** Place a waist-high energy panel on a valid surface. It blocks movement and ordinary shots through its covered area, but has limited durability and a clear silhouette.
- **Why it earns a slot:** Lets a team create a temporary position or cross an exposed gap, changing the local fight without granting invulnerability.
- **Counterplay:** The panel can be destroyed, bypassed, or outlasted. It has a visible deployment animation and cannot be placed in invalid or spawn-blocking locations.
- **Prototype values:** Durability, width, height, lifetime, placement rules, and charge count TBD.

#### 06. FOAM SEAL
- **Role:** Temporary route denial.
- **Concept:** Fire a canister at a valid doorway or narrow opening to fill it with temporary hardened foam. The foam blocks passage but is visibly destructible.
- **Why it earns a slot:** Temporarily changes a route and creates a choice between breaking through and rotating elsewhere.
- **Counterplay:** The placement is visible, the blocked opening is obvious, the foam can be removed, and alternate routes remain available.
- **Prototype values:** Valid surface rules, durability, lifetime, and charge count TBD.

#### 07. EMP DISC
- **Role:** Anti-deployable counter.
- **Concept:** Throw a disc that emits one short pulse, disabling or destroying eligible enemy deployable equipment in its limited area. It does not disable player abilities, weapons, or ordinary map systems.
- **Why it earns a slot:** Gives teams a direct answer to equipment-heavy defensive setups.
- **Counterplay:** The disc has a visible travel path and pulse cue, limited range, and no effect on players themselves. Deployables outside the pulse area remain active.
- **Prototype values:** Pulse radius, travel behaviour, affected item list, and charge count TBD.

#### 08. BOUNCE PAD
- **Role:** Team movement utility.
- **Concept:** Place a visible launch pad on a valid surface. Players who step onto it receive a consistent upward-and-forward boost along a fixed direction.
- **Why it earns a slot:** Creates a shared movement route and lets teams access or contest elevated areas in a deliberate way.
- **Counterplay:** The pad is visible and can be destroyed. Its launch direction is fixed, its landing area is predictable, and it does not grant damage protection.
- **Prototype values:** Launch strength, direction controls, durability, lifetime, and charge count TBD.

#### 09. CLEANSE CANISTER
- **Role:** Status-effect removal.
- **Concept:** Throw a canister that creates a small friendly-use field, removing eligible temporary movement or vision impairments from teammates inside it. It does not heal or grant immunity.
- **Why it earns a slot:** Gives teams a situational answer to disruptive effects while requiring positioning and timing.
- **Counterplay:** The field is visible, brief, and stationary. It only removes eligible effects already applied; it does not prevent future effects.
- **Prototype values:** Eligible effects, radius, duration, and charge count TBD.

### Evolved

#### 10. ZIPLINE KIT
- **Role:** Temporary team traversal.
- **Concept:** Attach two visible anchors to valid surfaces to create a short, one-way zipline between them. The line remains for a limited time and can be used by either team.
- **Why it earns a slot:** Creates a new route that can change rotations and map access without being a personal teleport.
- **Counterplay:** Both anchors and the line are visible, the route is exposed, and opponents can use or contest the same line. Placement requires valid geometry and cannot cross forbidden boundaries.
- **Prototype values:** Maximum span, setup time, lifetime, travel speed, and charge count TBD.

#### 11. KINETIC MINE
- **Role:** Non-lethal area displacement.
- **Concept:** Place a visible proximity device that triggers once when an opponent enters its small activation area, pushing them away from the device without dealing damage.
- **Why it earns a slot:** Can interrupt a push or protect a route through displacement rather than damage.
- **Counterplay:** The mine is visible, can be destroyed or avoided, has a clear trigger cue, and cannot launch players into unavoidable elimination zones.
- **Prototype values:** Trigger radius, push strength, lifetime, and charge count TBD.

#### 12. GRAVITY CLAMP
- **Role:** Temporary movement restriction.
- **Concept:** Throw a device that creates a small marked field. Opponents inside have reduced movement acceleration for a brief period; it does not root, stun, or prevent jumping entirely.
- **Why it earns a slot:** Temporarily changes the pace of a contested area and rewards teams that coordinate around the field.
- **Counterplay:** The field has a visible boundary, short duration, and can be exited. It does not affect aim, fire rate, or weapon damage.
- **Prototype values:** Radius, movement reduction, duration, and charge count TBD.

#### 13. PROJECTILE INTERCEPTOR
- **Role:** Defensive area protection.
- **Concept:** Deploy a small device that intercepts eligible incoming simulated projectiles within a limited radius for a short time. It does not block hitscan shots or player movement.
- **Why it earns a slot:** Offers a situational defensive answer to projectile-focused pressure without becoming a universal shield.
- **Counterplay:** The device is visible and destructible, has limited coverage and lifetime, and does not stop ordinary instant-hit fire.
- **Prototype values:** Eligible projectile list, radius, interception limit, lifetime, and charge count TBD.

#### 14. SMOKE VENT
- **Role:** Smoke counter.
- **Concept:** Deploy a compact fan device that clears smoke in a small, clearly marked radius while active. It does not reveal players or remove other visual effects.
- **Why it earns a slot:** Creates a direct counter to smoke-based obstruction and prevents smoke from becoming a one-sided answer.
- **Counterplay:** The vent is stationary, visible, destructible, and only clears a limited area. Smoke outside its radius remains.
- **Prototype values:** Clear radius, lifetime, durability, and charge count TBD.

### Ascendant

#### 15. FLASH GUARD
- **Role:** Team protection from visual disruption.
- **Concept:** Deploy a small beacon that reduces the effect of eligible visual-disruption equipment on nearby teammates for a short time. It does not block damage or grant general status immunity.
- **Why it earns a slot:** Rewards coordinated setup and offers a specialised defensive choice against disruption-heavy teams.
- **Counterplay:** The beacon is visible and destructible, protects only a limited area, and has a short lifetime. It does not protect teammates who are outside its field.
- **Prototype values:** Protection strength, radius, lifetime, and charge count TBD.

#### 16. DECOY BEACON
- **Role:** Visual deception.
- **Concept:** Deploy a stationary holographic player silhouette in a chosen direction. It does not move, fire, block shots, or imitate a real player's exact animations.
- **Why it earns a slot:** Can draw attention or prompt a brief check without creating a fake damage source.
- **Counterplay:** It can be identified through observation, disappears after a short time, and can be removed with one hit.
- **Prototype values:** Lifetime, projection range, visibility rules, and charge count TBD.

#### 17. SHIELD CELL
- **Role:** Temporary frontal protection.
- **Concept:** Activate a handheld device to project a small frontal energy shield for a brief period. The user moves more slowly while holding it and cannot fire until it is stowed or expires.
- **Why it earns a slot:** Provides a deliberate crossing or teammate-protection option with a meaningful offensive trade-off.
- **Counterplay:** The shield covers only a frontal area, has limited durability, slows its user, and leaves them unable to shoot while it is active. Flanking and waiting it out remain valid responses.
- **Prototype values:** Shield durability, movement penalty, active duration, and charge count TBD.

#### 18. JAMMER BEACON
- **Role:** Local equipment denial.
- **Concept:** Deploy a beacon that prevents enemy equipment from being activated inside a small radius while the beacon remains active. It does not affect weapons, player abilities, or equipment already deployed outside the field.
- **Why it earns a slot:** Creates a temporary area where teams must rely on positioning and weapon skill rather than deploying more gadgets.
- **Counterplay:** The beacon is visible and destructible, has limited range and lifetime, and can be bypassed by leaving the affected area.
- **Prototype values:** Radius, lifetime, durability, and affected equipment rules TBD.

#### 19. FIELD REPAIR KIT
- **Role:** Deployable maintenance.
- **Concept:** Restore a limited amount of durability to one eligible friendly deployable, such as a Cover Panel, Bounce Pad, Projectile Interceptor, or Ammo Cache. It cannot restore consumed charges, extend an expired item, or repair player health.
- **Why it earns a slot:** Rewards teams that invest in a coordinated equipment setup and gives damaged support devices a second chance.
- **Counterplay:** The user must interact with the friendly device, the repair takes time and can be interrupted, and the kit cannot exceed the device's original durability.
- **Prototype values:** Repair amount, interaction time, eligible item list, and charge count TBD.

### Singular

#### 20. GATEWAY PAIR
- **Role:** Limited team repositioning.
- **Concept:** Place two linked, visible gateways on valid surfaces. A player can pass through one and emerge from the other. The pair supports a limited number of total traversals before shutting down.
- **Why it earns a slot:** Creates a temporary route that can enable a coordinated rotation or a risky reposition, with a clear spatial commitment.
- **Counterplay:** Both gateways are visible and can be destroyed. Their placement is restricted, their total uses are limited, and opponents can watch or contest either exit. Gateways cannot be placed inside spawn rooms, through forbidden geometry, or in locations that create out-of-bounds access.
- **Prototype values:** Placement range, setup time, total traversals, lifetime, and valid surface rules TBD.

## 5. Rejected or Merged Concepts

Ten additional concepts were reviewed and removed from the active roster. They are not hidden extra equipment slots; they were rejected because they were redundant, weak, overly frustrating, or better suited to another system.

| Candidate | Decision | Reason |
|---|---|---|
| Portable Med Station | Merge into MEDKIT / reject | Passive healing station overlaps the recovery role and risks making defensive setups too safe. |
| Ammo Drone | Merge into AMMO CACHE | A moving resupply source adds pathing and readability complexity without enough value over a clear station. |
| Wall Scanner | Reject | Through-wall information is too strong and overlaps the information ability category. |
| Footstep Emitter | Reject | Too close to audio-deception abilities and difficult to communicate reliably. |
| Auto-Turret | Reject | Passive damage can generate value without enough player skill or interaction. |
| Personal Cloak Device | Reject | Invisibility creates frustrating and difficult-to-read engagements. |
| Instant Teleport Grenade | Merge into GATEWAY PAIR / reject | Instant repositioning has too little spatial commitment and too much escape potential. |
| Permanent Barricade | Merge into COVER PANEL / reject | Permanent map obstruction can lock routes and distort the map's intended layout. |
| Full-Body Invulnerability Bubble | Reject | Removes too many normal combat responses and risks stalling objectives. |
| Randomized Gadget Box | Reject | Random outcomes undermine deliberate loadout choice and competitive consistency. |

## 6. Balance and Implementation Rules

### Global restrictions
- Equipment cannot directly modify weapon damage, accuracy, fire rate, or recoil.
- Equipment cannot grant permanent health or permanent movement bonuses.
- Equipment cannot reveal exact enemy positions through walls.
- Equipment cannot create an unavoidable stun, root, or elimination.
- Equipment cannot permanently block a route or alter the map.
- Equipment effects must be visible and server-authoritative.
- Equipment cannot be activated while the player is in an invalid state, such as eliminated, spectating, or in a restricted transition.

### Interaction with modes
- Round-based modes restore the selected equipment at each round start.
- Respawn modes restore charges on respawn.
- Objective modes may restrict or adjust specific items if they create unfair objective stalls, but changes must be explicit and consistent.
- FFA must be tested for equipment stacking and repeated area denial.
- DUEL and DUOS must be tested to ensure equipment does not decide a round without a reasonable response.
- AVENOR ORIGIN equipment rules must support objective play without replacing the objective itself.

### Technical requirements
- The server validates ownership, charges, placement, range, line of sight where relevant, active duration, effects, destruction, and cleanup.
- Clients may predict harmless placement previews and presentation, but cannot decide final effects.
- Invalid placements do not consume charges.
- Equipment cannot be placed inside spawn protection zones, out of bounds, inside blocked geometry, or in exploitative locations.
- Effects and physics must be performant on mobile and PC.
- Equipment must have accessible visual and audio cues; no critical counterplay may rely only on colour.

## 7. Prototype and Evaluation Plan

Do not implement all 20 at once. Prototype a small set that tests different equipment families:

1. SMOKE CAPSULE — throwable area effect.
2. MEDKIT — timed personal consumable.
3. COVER PANEL — persistent deployable.
4. EMP DISC — anti-deployable counter.
5. BOUNCE PAD — movement utility.
6. PROJECTILE INTERCEPTOR — projectile defence.
7. GATEWAY PAIR — advanced spatial utility, only after the basic placement system is stable.

Evaluate each prototype for:
- Clear purpose and readable activation.
- Frequency of meaningful use.
- Whether it creates decisions rather than automatic value.
- Strength of counterplay.
- Whether it overlaps an ability or weapon action.
- Performance and replication reliability.
- Fairness across PC, controller, and mobile.
- Whether it works in both respawn and round-based modes.

A concept should be removed or redesigned if it is rarely useful, oppressive when used well, confusing to opponents, or too similar to another item.

## 8. Current Decisions and Open Questions

### Current design direction
- One equipment slot per loadout.
- Equipment is activated with G by default.
- Equipment is distinct from player abilities and weapon actions.
- Equipment primarily uses limited charges rather than a normal cooldown.
- Respawns and round starts restore equipment according to mode rules.
- The active concept roster contains 20 selected items.
- The initial review removed 10 weaker or redundant concepts.

### Still open
- Final number of charges per item.
- Exact durations, ranges, durability, use times, and cooldown-like lockouts.
- Whether some equipment can be picked up from the map.
- Team-wide deployable caps.
- Whether players can destroy all enemy equipment or only specific categories.
- Final equipment pool for ranked modes.
- Which items ship in the first playable build.
- Exact rarity assignments after visual and content review.
- Full playtest results and final balance.

