# AVENOR — Weapon Design

> This document owns the weapon roster and individual weapon designs. Accepted concepts are marked **Accepted**. Proposed concepts are marked **Proposed**. Prototype values are not final balance values.

## 1. Weapon Design Philosophy

AVENOR's active launch target is **113 weapon concepts: 40 damage-dealing firearms and launchers, 43 utility weapons and tools, and 30 melee weapons**. The other 54 firearm concepts are archived and are not launch content.

The goal is not to fill a spreadsheet with generic versions of familiar guns. Every weapon should feel recognizably different in the player's hands.

### Core Rules
- **Slot rule:** Primary is for the main damage-dealing weapons. A weapon whose main purpose is utility, movement, information, deception, or arena control belongs in Secondary, even if it has incidental damage. Secondary can also contain damaging sidearms.
- Every weapon needs a distinct identity, silhouette, sound, handling, and gameplay purpose.
- Weapon abilities should create interesting decisions or memorable moments, not merely provide generic damage or recoil buffs.
- Player-facing names should feel natural, memorable, and distinctive. The naming style can mix everyday words, objects, surnames, nicknames, and understated humor.
- Avoid generic category labels as player-facing weapon names and avoid excessive futuristic jargon.
- The internal weapon ID must match the weapon's unique name. Category prefixes such as AR-01 or SMG-01 are not used as weapon IDs.
- Weapon categories are useful for organization, but category alone must not determine how a weapon plays.
- Rarity reflects exclusivity, uniqueness, and design complexity. It does not automatically mean better combat stats.
- No weapon should be a simple reskin or a tiny stat variation of another.
- Weapons should be fun to learn, recognize, counter, and master.

### Active firearm standard

The active launch firearm roster is limited to 40 weapons. A firearm is active only if it has a genuinely distinct projectile, firing pattern, travel behaviour, impact behaviour, and handling rhythm. The detailed specifications and acceptance checklist are in `AVENOR_FiringIdentities.md`. Archived firearm concepts are not part of the launch roster and must not be used as active unlocks or shop content.

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
- One Primary weapon
- One Secondary weapon
- One close-combat weapon
- One player ability

Weapon-specific actions share one universal **Weapon Action** input across the entire roster.

Default key: **X** (remappable).

### Proposed Default Controls
- Left click: Fire
- Right click: Aim / zoom
- R: Reload
- X: Weapon Action
- F: Player ability

All controls should be remappable, including keyboard and mouse, controller, and mobile layouts. Mobile players should be able to adjust button position and size.

Weapon abilities use cooldowns. The cooldown begins after activation or after the relevant action completes, depending on the weapon's mechanic.

## 4. Weapon Roster

The catalogue retains 167 concepts for reference, but only 113 are currently active for launch: 40 firearms/launchers, 43 utility tools, and 30 melee weapons. The remaining 54 firearms are archived. Each entry is explicitly labelled with its roster status. The authoritative firing behaviour for the 40 active firearms is in `AVENOR_FiringIdentities.md`.

### Weapon 001 — TAXMAN
- **Internal ID:** TAXMAN
- **Roster status:** Active launch firearm
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

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: mark progression, mark duration, bonus cap, and cooldown are TBD remain TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 002 — POCKET ROCKET
- **Internal ID:** POCKET-ROCKET
- **Roster status:** Active launch firearm
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

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: acceleration time, movement distance, recovery, and cooldown are TBD remain TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 003 — DOORBELL
- **Internal ID:** DOORBELL
- **Roster status:** Active launch firearm
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

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Pellet count, spread profiles, push strength, and cooldown are TBD remain TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 004 — LONG STORY
- **Internal ID:** LONG-STORY
- **Roster status:** Active launch firearm
- **Category:** Sniper Rifle
- **Rarity:** Extraordinary
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

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Stabilization duration, marker range and lifetime, shot redirection rules, and cooldown are TBD remain TBD.

**Status:** Accepted redesign concept, pending competitive testing.

### Weapon 005 — LOOSE CHANGE
- **Internal ID:** LOOSE-CHANGE
- **Roster status:** Active launch firearm
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

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: projectile speed, ricochet rules, token lifetime, and cooldown are TBD remain TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 006 — THREE'S COMPANY
- **Internal ID:** THREES-COMPANY
- **Roster status:** Active launch firearm
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

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Burst interval, third-shot trajectory, fourth-shot trajectory, ammunition cost, recovery, and cooldown are TBD remain TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 007 — LAWNMOWER
- **Internal ID:** LAWNMOWER
- **Roster status:** Active launch firearm
- **Category:** Light Machine Gun
- **Rarity:** Commonplace
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

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Spin-up time, fire-rate curve, movement speed during Grass Cutter, duration, and cooldown are TBD remain TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 008 — RETURN TO SENDER
- **Internal ID:** RETURN-TO-SENDER
- **Roster status:** Active launch firearm
- **Category:** Returning Disc Launcher
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** Mid-range pressure, route prediction, and creative angle control.
- **Core mechanic: Boomerang**

Fires a flat spinning disc that travels forward, reaches its maximum range, then curves back toward the player. Both the outbound and return paths can threaten opponents, but each opponent can be hit only once per throw.

- **Weapon Action: Forwarding Address**

While the disc is travelling outward, aim at a valid surface and press Weapon Action to designate a return point. The disc immediately turns toward that point, banks off it, and then returns to the player.

**Rules and counterplay:**
- Only one return point can be designated per throw.
- The point must be visible, within range, and on a valid surface.
- The planned route is visibly indicated before the disc reaches the point.
- The disc cannot travel through solid geometry.
- Opponents can read the route and dodge, take cover, or move away from the return lane.
- If no point is designated, the disc follows its normal return path.

**Visual identity:** A chunky industrial throwing disc with a distinctive spinning animation and a clear route indicator when its return path is changed.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: travel speed, maximum range, return-point range, and cooldown are TBD remain TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 009 — THE RENTAL
- **Internal ID:** THE-RENTAL
- **Roster status:** Active utility/melee concept
- **Category:** Utility Launcher
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Arena manipulation, creative movement, and team repositioning.
- **Core mechanic: Temporary Lease**

Fires a compact puck that attaches to a valid surface and unfolds into a temporary spring panel. Players who touch the panel are launched in the direction it faces.

The panel can be placed on floors, walls, and other suitable surfaces to create unexpected routes, quick escapes, or new ways to reach elevated areas.

- **Weapon Action: Change of Address**

While a panel is active, press Weapon Action to rotate its launch direction by 90 degrees. The new direction is shown clearly, allowing the player to alter an upcoming launch rather than simply placing another panel.

**Rules and counterplay:**
- Only one panel can be active at a time.
- Panels expire after a short duration or after a limited number of launches.
- Any player can use an active panel, including opponents.
- The panel is visible and can be destroyed.
- The direction change has a clear visual warning.
- The launcher has modest direct-hit impact, but its main value comes from creating movement opportunities.

**Visual identity:** A sturdy construction-style launcher with a bright folding panel, mechanical hinges, and a spring-loaded deployment animation.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: panel lifetime, launch strength, launch count, placement range, and cooldown are TBD remain TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 010 — BAD HABIT
- **Internal ID:** BAD-HABIT
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Hand Cannon
- **Rarity:** Altered
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

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: movement impulse, and cooldown are TBD remain TBD.

**Status:** Proposed concept. Not yet accepted.

### Weapon 011 — DEAD WEIGHT
- **Internal ID:** DEAD-WEIGHT
- **Roster status:** Active launch firearm
- **Category:** Heavy Launcher
- **Rarity:** Altered
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

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: blast radius, projectile speed, and action cooldown are TBD remain TBD.

**Status:** Proposed concept. Not yet accepted.

### Weapon 012 — BAD RECEPTION
- **Internal ID:** BAD-RECEPTION
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Pulse Rifle
- **Rarity:** Evolved
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

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: burst spacing, effect duration, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 013 — CALL WAITING
- **Internal ID:** CALL-WAITING
- **Roster status:** Active launch firearm
- **Category:** Charge Rifle
- **Rarity:** Altered
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

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Charge time, damage curve, mobility penalty, storage duration, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 014 — SHORT NOTICE
- **Internal ID:** SHORT-NOTICE
- **Roster status:** Active launch firearm
- **Category:** Repeater Crossbow
- **Rarity:** Altered
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

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Bolt speed, split distance, spread, anchor lifetime, pull strength, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 015 — BAD NEIGHBOR
- **Internal ID:** BAD-NEIGHBOR
- **Roster status:** Active launch firearm
- **Category:** Nail Driver
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Mid-range setup and information control.
- **Core mechanic: Property Damage**

Fires individual heavy bolts. When a bolt hits a suitable surface, it remains embedded briefly as a visible marker. Markers do not deal damage by themselves; they prepare the weapon's action.

- **Weapon Action: Noise Complaint**

Activate all existing markers. Each marker emits a short-range pulse that briefly reveals nearby opponents through a visual outline.

**Rules and counterplay:**
- Maximum of three active markers.
- Markers expire after a short duration.
- Each pulse has a limited radius.
- Opponents can see and destroy markers.
- The reveal is brief and does not provide permanent tracking.
- Markers cannot be placed through solid geometry.

**Visual identity:** A chunky construction-tool-inspired launcher with exposed mechanical parts, an oversized bolt magazine, and a warning light that flashes when markers are active.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: marker lifetime, pulse radius, reveal duration, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 016 — TAXI
- **Internal ID:** TAXI
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Impact Launcher
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Mid-range pressure and movement disruption.
- **Core mechanic: Fare Meter**

Fires compact impact projectiles that deal direct-hit damage. Consecutive hits on the same opponent increase a visible fare counter above them. Missing a shot or hitting another opponent resets the counter.

- **Weapon Action: Final Stop**

Activate to make the next projectile create a short-lived circular bounce field on impact. Players who enter the field are pushed outward. The field deals no damage.

**Rules and counterplay:**
- The fare counter is visible to the affected opponent.
- The counter resets on a miss or when switching targets.
- The bounce field is temporary and clearly visible.
- Opponents can avoid the field or use its predictable push to reposition.
- The weapon still requires accurate projectile placement.

**Visual identity:** A compact launcher with a mechanical fare display that increments with consecutive hits, yellow details, dark metal, and a distinctive meter sound.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: projectile speed, fare progression, counter reset timing, field radius, push strength, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 017 — FALSE ALARM
- **Internal ID:** FALSE-ALARM
- **Roster status:** Active utility/melee concept
- **Category:** Signal Launcher
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Deception, distraction, and creating openings.
- **Core mechanic: Wrong Place, Wrong Time**

Fires a bright signal projectile that sticks to a surface and deploys a temporary holographic decoy of the player. The decoy performs a short firing animation and produces an imitation of the player's weapon audio, but deals no damage.

- **Weapon Action: Panic Button**

Activate the decoy early. It performs a fake attack animation and creates a brief, visible flash before disappearing.

**Rules and counterplay:**
- Decoys are visibly artificial at close range.
- They cannot move or deal damage.
- Only one decoy can exist at a time.
- Opponents can destroy the decoy.
- Deployment has a noticeable visual cue.

**Visual identity:** A compact signal pistol with an oversized flare chamber, orange-red accents, and a blinking indicator.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Projectile speed, decoy lifetime, imitation range, activation flash duration, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 018 — SECOND OPINION
- **Internal ID:** SECOND-OPINION
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Twin-Barrel Rifle
- **Rarity:** Altered
- **Slot:** Primary
- **Role:** Mid-range duelling and deliberate shot timing.
- **Core mechanic: Follow-Up**

The weapon has two barrels that fire alternately. Each shot comes from a slightly different barrel position, creating a distinct left-right firing rhythm. The two shots have identical base damage, but the second shot has a slightly tighter spread. Continuous firing alternates between barrels.

- **Weapon Action: Objection**

Press and hold Weapon Action to hold the next shot instead of firing immediately. Releasing the action input fires it with perfect weapon accuracy, but does not improve projectile speed or remove the need to aim.

**Rules and counterplay:**
- The stored shot expires after a short window.
- Switching weapons cancels the stored shot.
- Holding a shot reduces immediate firing pressure.
- The tighter second-shot spread is limited and does not guarantee a hit.

**Visual identity:** An offset twin-barrel rifle with two distinct barrel housings and a mechanical indicator that switches sides after every shot.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: spread profiles, stored-shot window, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 019 — PAPER TRAIL
- **Internal ID:** PAPER-TRAIL
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Marker Rifle
- **Rarity:** Altered
- **Slot:** Primary
- **Role:** Route reading and punishing predictable movement.
- **Core mechanic: Marked For Later**

Fires precise, damaging single projectiles. A direct hit attaches a visible paper tag to the opponent for a short time. The tag does not reveal the opponent through walls; instead, it leaves a short-lived trail of visible markers on the ground as they move.

- **Weapon Action: Return Address**

Make the next shot attach a tag to a surface instead of an opponent. If an opponent passes near that tag, it briefly reveals their position with a visual ping.

**Rules and counterplay:**
- Player tags and their ground trails are temporary.
- The trail does not reveal positions through walls.
- Surface tags can be destroyed.
- Opponents can change routes or wait out the effect.
- The surface tag has a limited trigger radius and duration.

**Visual identity:** A slim precision rifle with a paper-feed mechanism, visible tag cartridges, and a mechanical stamping sound.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: tag duration, trail lifetime, surface-tag trigger radius, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 020 — WET FLOOR
- **Internal ID:** WET-FLOOR
- **Roster status:** Active utility/melee concept
- **Category:** Pressure Sprayer
- **Rarity:** Evolved
- **Slot:** Secondary
- **Role:** Area control, movement disruption, and route manipulation.
- **Core mechanic: Slippery When Wet**

Fires short-range bursts of liquid that leave temporary slick patches on the floor. Players crossing a patch retain more of their existing momentum and have less control when changing direction. The effect does not stun players or automatically knock them over.

- **Weapon Action: Mopping Service**

Pull all active patches together into one longer slick strip between their positions. This reshapes scattered patches into a deliberate movement lane.

**Rules and counterplay:**
- Patches are clearly visible.
- The effect applies only while crossing a patch.
- Opponents can jump over patches or take another route.
- The number of active patches is limited.
- Mopping Service removes the scattered coverage to create one strip.

**Visual identity:** A chunky industrial pressure sprayer with a small liquid tank, yellow caution markings, and a distinctive spray sound.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Patch lifetime, patch size, movement effect strength, maximum active patches, spray range, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.


### Weapon 021 — CROSSWALK
- **Internal ID:** CROSSWALK
- **Roster status:** Active utility/melee concept
- **Category:** Tactical Rifle
- **Rarity:** Evolved
- **Slot:** Secondary
- **Role:** Lane control and route denial.
- **Core mechanic: Right of Way**

Fires accurate marker rounds that stick to suitable surfaces. Two active markers create a visible line between them. Opponents crossing the line trigger a brief damaging pulse.

- **Weapon Action: Road Closed**

Temporarily expands the connected line into a wider, clearly marked hazard zone.

**Rules and counterplay:**
- A maximum of two markers can be active.
- The connecting line is visible to everyone.
- Markers can be destroyed, and opponents can avoid crossing the line.
- The expanded zone is temporary and clearly telegraphed.
- The weapon's main purpose is controlling routes rather than serving as a conventional damage dealer.

**Visual identity:** Compact tactical marker rifle with construction-yellow details, glowing marker rounds, and a small crossing-signal display.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Marker lifetime, line width, trigger damage, expanded-zone size and duration, placement range, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 022 — LAST CALL
- **Internal ID:** LAST-CALL
- **Roster status:** Active launch firearm
- **Category:** Sonic Projector
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Close-range disruption and emergency spacing.
- **Core mechanic: Bad Connection**

Emits short-range sonic pulses that deal modest damage and briefly disrupt an opponent's movement momentum. Each pulse has a short recovery period.

- **Weapon Action: Hang Up**

Release a stronger forward pulse that pushes nearby opponents away and interrupts their current movement direction.

**Rules and counterplay:**
- Effective range is short.
- Pulses have clear audio and visual telegraphs.
- The weapon is not designed to compete with primary weapons at range.
- Hang Up has a noticeable recovery window.
- Opponents can stay outside its effective range or bait its stronger pulse.

**Visual identity:** Chunky handheld speaker-projector with a telephone-receiver grip and oversized volume dial.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Pulse damage, range, disruption duration, push strength, recovery, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 023 — TWO CENTS
- **Internal ID:** TWO-CENTS
- **Roster status:** Active launch firearm
- **Category:** Precision Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Precision duelling and controlled firing rhythm.
- **Core mechanic: Exact Change**

Fires accurate individual shots. Every second shot is a heavier round with a distinct sound and slightly different projectile speed. The alternating rhythm is consistent and learnable.

- **Weapon Action: My Two Cents**

Load one special round into the next available shot. A hit deals normal damage but briefly disrupts the opponent's aim position.

**Rules and counterplay:**
- The alternating shot pattern is predictable.
- The special round requires a direct hit.
- The aim disruption is brief and does not remove player control.
- The weapon has a limited magazine and still rewards accurate aim.

**Visual identity:** Long, slim precision weapon with a two-position chamber indicator and a crisp mechanical firing sound.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: projectile speeds, aim-disruption duration, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 024 — OPEN HOUSE
- **Internal ID:** OPEN-HOUSE
- **Roster status:** Active utility/melee concept
- **Category:** Deployable Launcher
- **Rarity:** Evolved
- **Slot:** Secondary
- **Role:** Temporary cover and defensive repositioning.
- **Core mechanic: Viewing Appointment**

Fires a compact device that unfolds into a temporary waist-high cover panel when it reaches a valid surface. The panel blocks incoming projectiles and can be destroyed.

- **Weapon Action: Under New Management**

Fold the active panel down and redeploy it at a new valid surface within a limited range. The player is briefly left without the panel's protection while it moves.

**Rules and counterplay:**
- Only one panel can be active.
- The panel has a visible health state and can be destroyed.
- Placement and redeployment have clear visual cues.
- Moving the panel creates a temporary opening opponents can exploit.
- The panel cannot be placed through solid geometry.

**Visual identity:** Construction-style launcher with a folding rectangular panel, warning stripes, and visible hinges.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Panel health, lifetime, placement range, redeployment time, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 025 — HOLD MUSIC
- **Internal ID:** HOLD-MUSIC
- **Roster status:** Active launch firearm
- **Category:** Repeater
- **Rarity:** Extraordinary
- **Slot:** Primary
- **Role:** Sustained pressure and target commitment.
- **Core mechanic: On The Line**

Fires a sequence of small damaging projectiles. Each hit adds a brief note marker to the target. Completing the sequence on one opponent triggers a final, stronger projectile.

- **Weapon Action: Please Stay On The Line**

Pause the sequence timer briefly, allowing the player to maintain progress while repositioning or briefly changing focus.

**Rules and counterplay:**
- Missing shots interrupts the sequence.
- Switching targets normally resets the active sequence.
- The final projectile must still connect to deal its damage.
- Note markers are visible to the affected opponent.
- The action only pauses the timer briefly; it does not preserve progress indefinitely.

**Visual identity:** Clean repeater with a scrolling display and small musical indicator lights that add a note for each successful hit.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Projectile damage, sequence length, final-shot damage, marker lifetime, pause duration, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 026 — SPLIT DECISION
- **Internal ID:** SPLIT-DECISION
- **Roster status:** Active launch firearm
- **Category:** Split-Feed Rifle
- **Rarity:** Altered
- **Slot:** Primary
- **Role:** Mid-range duelling with adaptable shot patterns.
- **Core mechanic: Two Minds**

The rifle alternates between two consistent shot types:
- **Single:** One accurate, stronger projectile.
- **Split:** Two weaker projectiles that separate after travelling a short distance.

The sequence is fixed and learnable.

- **Weapon Action: Make Your Choice**

Skip the upcoming pattern and select which shot type fires next. The normal alternating sequence resumes afterward.

**Rules and counterplay:**
- The upcoming shot type is clearly indicated.
- Split projectiles become easier to avoid at longer distances.
- The action changes the next shot only; it does not provide automatic targeting.
- The weapon's rhythm can be learned and anticipated.

**Visual identity:** Compact rifle with two distinct feed chambers and a mechanical indicator showing the next shot type.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Damage per shot, split distance, projectile spread, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 027 — SHORTCUT
- **Internal ID:** SHORTCUT
- **Roster status:** Active utility/melee concept
- **Category:** Traversal Launcher
- **Rarity:** Extraordinary
- **Slot:** Secondary
- **Role:** Team movement and route creation.
- **Core mechanic: No Walking Required**

Fires two compact anchors onto valid surfaces. Once both are placed, a temporary traversable cable connects them. Players can attach to the cable and travel along it.

- **Weapon Action: Express Lane**

Temporarily increases travel speed along the active cable. The boost is visible and applies to anyone using the cable.

**Rules and counterplay:**
- Both anchors must attach to valid surfaces.
- Only one cable can be active.
- Anchors and cable are visible and can be removed.
- The cable expires after a limited duration.
- The weapon does not deal damage; its purpose is traversal and team utility.

**Visual identity:** Compact industrial launcher with anchor cartridges, a retractable cable, and a bright deployment indicator.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Anchor range, cable lifetime, travel speed, boost duration, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 028 — SLOW BURN
- **Internal ID:** SLOW-BURN
- **Roster status:** Active launch firearm
- **Category:** Heat Rifle
- **Rarity:** Altered
- **Slot:** Primary
- **Role:** Sustained mid-range pressure and heat management.
- **Core mechanic: Getting Warmer**

Every shot builds heat. As heat rises, projectile damage gradually increases up to a cap. Firing for too long causes the weapon to overheat and enter a forced cooling period.

- **Weapon Action: Let It Breathe**

Vent accumulated heat in a short-range burst that deals modest damage and pushes nearby opponents away. The vent reduces the weapon's heat level.

**Rules and counterplay:**
- Heat level is clearly displayed.
- Overheating interrupts normal firing temporarily.
- The vent has a limited radius and a clear warning.
- Players can pressure the user during the cooling window.
- The damage increase has a defined cap.

**Visual identity:** Industrial rifle with visible heat vents, a temperature gauge, and increasingly bright internal components.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Heat per shot, damage curve, overheat threshold, cooling time, vent damage and push strength, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 029 — WRONG NUMBER
- **Internal ID:** WRONG-NUMBER
- **Roster status:** Active utility/melee concept
- **Category:** Signal Pistol
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Distraction and information manipulation.
- **Core mechanic: You've Got Mail**

Fires a signal that attaches to a surface and creates a temporary false audio cue at that location. It can imitate selected sounds such as footsteps, a reload, or a weapon action.

- **Weapon Action: Call Back**

Trigger the signal early to produce a second, different sound cue before it disappears.

**Rules and counterplay:**
- The signal does not deal damage.
- Only one active signal can exist.
- The device is visible and can be destroyed.
- Audio cues have a limited range and duration.
- Repeated cues can be recognised as artificial.

**Visual identity:** Compact signal pistol with a small screen, antenna, and rotating channel selector.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: Signal lifetime, audio range, available sound cues, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 030 — NO REFUNDS
- **Internal ID:** NO-REFUNDS
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Heavy Revolver
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** High-impact precision duelling.
- **Core mechanic: Final Sale**

The revolver has a small cylinder. Consecutive misses gradually increase the recovery time between shots. Landing a hit resets the penalty, rewarding accuracy and deliberate firing.

- **Weapon Action: No Takebacks**

Load one special round. If it hits an opponent, it briefly prevents them from using their Weapon Action. It deals normal damage rather than bonus damage.

**Rules and counterplay:**
- The miss penalty has a defined cap.
- The special round must be aimed and hit normally.
- Weapon Action lockout is brief and clearly communicated.
- The small cylinder requires careful ammunition management.
- Opponents can use cover and avoid predictable peeks.

**Visual identity:** Heavy, slightly oversized revolver with a visible cylinder and a small red SALE indicator.

**Prototype values:** Core damage, cadence, ammunition, reload, range, and falloff are defined in Section 7. Remaining mechanic-specific values: cylinder capacity, recovery penalty, reload time, lockout duration, and cooldown are TBD remain TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 031 — OVERDUE
- **Internal ID:** OVERDUE
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Marksman Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Deliberate mid-range duelling that rewards maintaining pressure on one opponent.
- **Core mechanic: Interest Rate**
  
  Consecutive hits on the same opponent make the next shot cycle slightly faster, up to a modest cap. Missing or changing targets resets the sequence.
- **Weapon Action: Final Notice**
  
  The next successful hit briefly displays a clear impact marker at the opponent's position, visible to their team but not through walls.
- **Rules and counterplay:** The fire-rate benefit is capped and never increases damage; the sequence resets on a miss; the action requires a normal hit and gives no tracking.
- **Visual identity:** A compact marksman rifle with a numbered mechanical counter that advances with consecutive hits.
- **Prototype values:** Damage, fire interval, stack cap, reset window, marker duration, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 032 — SPARE KEY
- **Internal ID:** SPARE-KEY
- **Roster status:** Active utility/melee concept
- **Category:** Traversal Tool
- **Rarity:** Singular
- **Slot:** Secondary
- **Role:** Creating temporary alternate routes through an arena.
- **Core mechanic: Open Door Policy**
  
  Place two linked doorway frames on valid surfaces. Players can pass through one and emerge from the other, preserving their general movement direction.
- **Weapon Action: Deadbolt**
  
  Temporarily disable one entrance. The exit remains visible, and the player can reopen the link before it expires.
- **Rules and counterplay:** Only one pair can exist; both frames are visible and destructible; the pair has a short lifetime; the route cannot pass through blocked geometry or be placed inside spawn areas.
- **Visual identity:** A chunky locksmith's tool that unfolds into two bright, rectangular doorframes.
- **Prototype values:** Placement range, pair lifetime, frame health, traversal delay, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 033 — BOUNCER
- **Internal ID:** BOUNCER
- **Roster status:** Active launch firearm
- **Category:** Impact Shotgun
- **Rarity:** Altered
- **Slot:** Primary
- **Role:** Close-range damage with deliberate knockback positioning.
- **Core mechanic: House Rules**
  
  A compact shotgun fires a tight, heavy spread. Hits build a small pressure meter that increases the push of the next ordinary shot, not its damage.
- **Weapon Action: Out You Go**
  
  Fire a clearly telegraphed blast that launches the user backward while pushing nearby opponents away.
- **Rules and counterplay:** Pressure has a low cap and decays; the action consumes ammunition; its area and direction are readable; opponents can maintain distance and bait the blast.
- **Visual identity:** A short, sturdy shotgun with a spring-loaded stock and oversized pressure gauge.
- **Prototype values:** Pellet damage, spread, pressure cap, push strength, ammunition, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 034 — GOOD MEASURE
- **Internal ID:** GOOD-MEASURE
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Precision Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Precision duelling at a deliberately chosen engagement distance.
- **Core mechanic: Just Right**
  
  The rifle has a clearly indicated preferred distance band. Shots within that band deal standard damage with consistent handling; shots outside it deal reduced damage.
- **Weapon Action: Take Measure**
  
  Briefly projects a visible range guide from the muzzle, showing the preferred distance band against the arena.
- **Rules and counterplay:** The band is fixed and visible on the weapon display; the action gives distance information, not enemy tracking; close-range opponents can rush inside the preferred band.
- **Visual identity:** A long, clean rifle with a measuring-wheel motif and a sliding distance scale.
- **Prototype values:** Preferred range, damage falloff, guide duration, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 035 — OFF THE CLOCK
- **Internal ID:** OFF-THE-CLOCK
- **Roster status:** Active utility/melee concept
- **Category:** Decoy Projector
- **Rarity:** Singular
- **Slot:** Secondary
- **Role:** Misdirection and drawing attention away from a real rotation.
- **Core mechanic: Clock Out**
  
  Deploys a small recorder that stores a short sample of the user's recent movement path and then projects a harmless moving silhouette replaying that route.
- **Weapon Action: Early Finish**
  
  Starts the recorded playback immediately, even if the recorder has not reached its normal trigger condition.
- **Rules and counterplay:** The projection cannot deal damage or interact with objectives; it follows a fixed recorded path; it is visibly artificial at close range and can be disabled.
- **Visual identity:** A pocket-sized time recorder with a translucent projected runner.
- **Prototype values:** Recording window, projection lifetime, trigger distance, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 036 — BACKFILL
- **Internal ID:** BACKFILL
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Magazine Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Reliable mid-range damage with a tactical reserve-round decision.
- **Core mechanic: One in the Chamber**
  
  When the magazine empties, one reserve round is automatically loaded into a separate chamber and can be fired as a normal shot.
- **Weapon Action: Move It Up**
  
  Transfer the reserve round into the magazine immediately, allowing it to be used before the magazine is empty.
- **Rules and counterplay:** The reserve round is not extra ammunition; transferring it takes a brief, interruptible action; the weapon has ordinary damage and no bonus headshot or hidden multiplier.
- **Visual identity:** A practical rifle with a visible single-round side chamber and a mechanical loading indicator.
- **Prototype values:** Magazine size, reload time, transfer time, and fire interval are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 037 — SIDE EYE
- **Internal ID:** SIDE-EYE
- **Roster status:** Active utility/melee concept
- **Category:** Recon Tool
- **Rarity:** Ascendant
- **Slot:** Secondary
- **Role:** Checking exposed lanes without revealing opponents through walls.
- **Core mechanic: Peripheral Vision**
  
  A directional optical sensor gives a brief visual tick when an opponent crosses its unobstructed field of view. It does not identify the opponent or maintain a marker.
- **Weapon Action: Look Alive**
  
  Rotate the sensor's scan direction to a chosen angle and perform one short scan.
- **Rules and counterplay:** The sensor only detects visible movement; it has a narrow field and short range; opponents can use cover, remain still, or approach from another direction.
- **Visual identity:** A compact surveyor's monocular with a swivelling lens and a small side display.
- **Prototype values:** Scan angle, range, detection delay, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 038 — TIN CAN
- **Internal ID:** TIN-CAN
- **Roster status:** Active launch firearm
- **Category:** Ricochet Launcher
- **Rarity:** Altered
- **Slot:** Primary
- **Role:** Predictive area pressure using heavy, readable bouncing shots.
- **Core mechanic: Empty Return**
  
  Launches a chunky projectile that bounces from suitable arena surfaces. Each bounce reduces its remaining damage and speed until it expires.
- **Weapon Action: One More Time**
  
  The next projectile gains one additional bounce before its normal expiry.
- **Rules and counterplay:** The projectile never homes; its path is visible and predictable; damage falls with every bounce; open areas and movement make it easier to avoid.
- **Visual identity:** A dented canister launcher with a rattling projectile and clear bounce sparks.
- **Prototype values:** Initial damage, bounce count, speed loss, damage loss, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 039 — HOME RUN
- **Internal ID:** HOME-RUN
- **Roster status:** Active launch firearm
- **Category:** Heavy Ball Launcher
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** Long-lane pressure that rewards predicting where an opponent will be.
- **Core mechanic: Long Drive**
  
  Fires a heavy ball that gains a modest damage increase over distance travelled, up to a strict cap. It does not gain damage from bouncing.
- **Weapon Action: Curveball**
  
  The next ball makes one broad, clearly visible curve toward the direction selected at launch, then continues on a straight path.
- **Rules and counterplay:** The projectile is slow and visible; the distance bonus is capped; the curve is telegraphed and cannot bend around solid cover.
- **Visual identity:** A sporting launcher with a padded barrel and oversized rotating ball chamber.
- **Prototype values:** Projectile speed, range, distance scaling, damage cap, curve angle, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 040 — GUEST LIST
- **Internal ID:** GUEST-LIST
- **Roster status:** Active utility/melee concept
- **Category:** Entry Sensor
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Reading a doorway or narrow route without giving permanent wall information.
- **Core mechanic: RSVP**
  
  Place a small floor sensor that records the direction of the first opponent who crosses it. The sensor then goes dormant.
- **Weapon Action: Read It Back**
  
  Replay the recorded entry direction as a brief directional indicator for the user's team.
- **Rules and counterplay:** One trigger per placement; the sensor is visible and can be removed; it does not reveal exact location or track anyone after crossing; wide routes can bypass it.
- **Visual identity:** A small brass entry plate with a guest-counter display.
- **Prototype values:** Trigger radius, sensor lifetime, indicator duration, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 041 — DOUBLE PARKED
- **Internal ID:** DOUBLE-PARKED
- **Roster status:** Active launch firearm
- **Category:** Dual Pistols
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Close-to-mid-range pressure through alternating shots.
- **Core mechanic: Alternating Ticket**
  
  The pistols fire one at a time, alternating hands. Each has its own small magazine, so the player manages two independent ammunition counts.
- **Weapon Action: Both Lanes**
  
  Fire both loaded pistols together in a wide, short-range volley with a substantial recovery period.
- **Rules and counterplay:** The volley consumes one round from each pistol; its spread is wide; the normal alternating rhythm is predictable; reloads expose a clear downtime.
- **Visual identity:** A mismatched pair of compact pistols with separate ammunition counters.
- **Prototype values:** Damage, spread, magazine sizes, alternating interval, reload, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 042 — STATIC CLING
- **Internal ID:** STATIC-CLING
- **Roster status:** Active utility/melee concept
- **Category:** Magnetic Traversal Tool
- **Rarity:** Singular
- **Slot:** Secondary
- **Role:** Briefly changing the routes available on metal arena surfaces.
- **Core mechanic: Stick Around**
  
  Deploys a pair of magnetic pads on suitable metal surfaces. A player touching a pad can briefly cling to that surface, including suitable walls or ceilings.
- **Weapon Action: Let Go**
  
  Deactivate the pads early and release anyone attached with a small, predictable outward movement.
- **Rules and counterplay:** Only marked surfaces accept pads; the effect is brief; pads are visible and destructible; it does not grant free movement across arbitrary geometry.
- **Visual identity:** A magnetic tool with two bright clamp-shaped pads and a pulsing polarity indicator.
- **Prototype values:** Pad lifetime, cling duration, placement range, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 043 — PAYPHONE
- **Internal ID:** PAYPHONE
- **Roster status:** Active utility/melee concept
- **Category:** Team Relay Tool
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Helping teammates coordinate positions without revealing enemies.
- **Core mechanic: Local Line**
  
  Place a small relay beacon. Friendly players near another active PAYPHONE beacon receive a simple direction indicator pointing toward it.
- **Weapon Action: Switchboard**
  
  Change which friendly beacon the user's relay is connected to.
- **Rules and counterplay:** It only connects friendly beacons; it never reveals enemy positions; the relay has limited range and lifetime; opponents can see and destroy it.
- **Visual identity:** A portable payphone handset with a cable spool and glowing connection lights.
- **Prototype values:** Beacon range, connection limit, lifetime, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 044 — GOOD GRIEF
- **Internal ID:** GOOD-GRIEF
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Heavy Repeater
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Sustained close-to-mid-range pressure that changes opponent positioning.
- **Core mechanic: Heavy Feelings**
  
  Consecutive hits build a knockback meter. Damage remains constant; the meter only affects the push of the next hit.
- **Weapon Action: Let It Out**
  
  Spend the stored meter on one clearly telegraphed shot with increased knockback and a slower recovery.
- **Rules and counterplay:** The meter decays when not firing; knockback is capped; the action does not increase damage; opponents can use cover and avoid predictable follow-up shots.
- **Visual identity:** A bulky repeater with a pressure gauge and oversized recoil springs.
- **Prototype values:** Damage, meter gain, decay, knockback cap, recovery, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 045 — CLEAN BREAK
- **Internal ID:** CLEAN-BREAK
- **Roster status:** Active launch firearm
- **Category:** Break-Action Shotgun
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Close-range burst damage with a meaningful two-shell decision.
- **Core mechanic: Two Different Stories**
  
  The two barrels have distinct fixed spread patterns: one compact and one wide. The player alternates between them with each shot.
- **Weapon Action: Double Down**
  
  Fire both barrels together, combining their patterns and consuming both shells.
- **Rules and counterplay:** The active barrel is clearly indicated; the combined shot has a long recovery; ammunition is limited; opponents can bait the double shot and punish the reload.
- **Visual identity:** A sturdy side-by-side shotgun with two differently marked barrels and a large break-open hinge.
- **Prototype values:** Damage, spread patterns, shell count, reload, recovery, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 046 — SUNDAY DRIVER
- **Internal ID:** SUNDAY-DRIVER
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Automatic Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Mobile mid-range combat with a distinctive movement-and-fire rhythm.
- **Core mechanic: Cruise Control**
  
  Firing while moving in a straight line gradually tightens hip-fire spread. Sharp direction changes reset the benefit.
- **Weapon Action: Easy Does It**
  
  Briefly preserve the current spread level while changing direction, allowing one controlled reposition without rebuilding the benefit.
- **Rules and counterplay:** The accuracy bonus is capped; aiming normally is unaffected; abrupt movement resets the ordinary benefit; the action does not increase damage or fire rate.
- **Visual identity:** A clean, slightly retro carbine with a speedometer-style spread display.
- **Prototype values:** Spread curve, movement threshold, reset delay, action duration, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 047 — FINE PRINT
- **Internal ID:** FINE-PRINT
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Precision Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Rewarding varied, deliberate shot placement without relying on inconsistent avatar anatomy.
- **Core mechanic: Different Paragraph**
  
  Each successful hit adds a visible stamp to the target. Consecutive hits from meaningfully different directions complete a three-stamp sequence and grant one modest bonus-damage shot.
- **Weapon Action: Read the Terms**
  
  The next hit briefly marks the target's last visible position with a paper tag on the ground, without tracking through walls.
- **Rules and counterplay:** Direction sectors are broad and consistent; repeating the same angle does not advance the sequence; the stamps are visible to the target; the bonus shot still requires aim.
- **Visual identity:** A slim rifle with a paper-feed slot and a three-part clause display.
- **Prototype values:** Direction sectors, stamp duration, bonus damage, marker lifetime, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 048 — BREADCRUMBS
- **Internal ID:** BREADCRUMBS
- **Roster status:** Active utility/melee concept
- **Category:** Navigation Tool
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Giving a team a simple, shared route through a complicated arena.
- **Core mechanic: Trail Mix**
  
  Place up to three visible route markers that teammates can follow. Each marker shows the direction to the next marker, not enemy information.
- **Weapon Action: Sweep Up**
  
  Remove the oldest marker and move the route's starting point to the user's current position.
- **Rules and counterplay:** Markers are visible to both teams and can be destroyed; they do not grant movement speed or reveal opponents; the route expires.
- **Visual identity:** A compact marker dispenser that fires small luminous breadcrumb discs.
- **Prototype values:** Marker count, placement range, lifetime, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 049 — HIGH HORSE
- **Internal ID:** HIGH-HORSE
- **Roster status:** Active launch firearm
- **Category:** Charge Launcher
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** Aerial combat with a deliberate risk-reward for leaving cover.
- **Core mechanic: Above Yourself**
  
  The launcher fires ordinary damaging projectiles. Shots made while the user is airborne receive a small, capped damage bonus.
- **Weapon Action: Come Down to Earth**
  
  Fire a downward burst that deals modest area damage and gives the user a controlled upward boost.
- **Rules and counterplay:** The aerial bonus is small and capped; the user is exposed while airborne; the action has a clear warning and cannot be chained; grounded opponents retain normal damage.
- **Visual identity:** A tall launcher with a horse-head sight and a visible altitude gauge.
- **Prototype values:** Base damage, aerial bonus, burst radius, boost strength, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 050 — TAKE A NUMBER
- **Internal ID:** TAKE-A-NUMBER
- **Roster status:** Active utility/melee concept
- **Category:** Team Queue Tool
- **Rarity:** Ascendant
- **Slot:** Secondary
- **Role:** Coordinating a controlled team rotation through a dangerous lane.
- **Core mechanic: Your Turn**
  
  Place a queue beacon. Teammates who interact with it are placed in a visible order, with one active movement window at a time.
- **Weapon Action: Next Please**
  
  End the current window early and activate the next teammate's turn.
- **Rules and counterplay:** The queue grants no invulnerability or damage; only a limited number of teammates can join; the beacon is visible and destructible; players can choose not to use it.
- **Visual identity:** A portable ticket dispenser with numbered lights and a little flip display.
- **Prototype values:** Queue capacity, interaction time, movement-window duration, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 051 — COLD SHOULDER
- **Internal ID:** COLD-SHOULDER
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Precision Repeater
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Accurate follow-up fire against a target who keeps exposing the same angle.
- **Core mechanic: Same Again**
  
  Consecutive hits on the same opponent tighten the weapon's spread slightly. The benefit resets on a miss or target switch and never increases damage.
- **Weapon Action: Turn Away**
  
  The next successful hit briefly reduces the target's acceleration when changing direction, without stopping movement or disabling control.
- **Rules and counterplay:** Spread improvement is capped; the target receives a clear status cue; the effect is short and does not stack; breaking line of sight or changing movement rhythm counters the weapon.
- **Visual identity:** A narrow precision repeater with a frost-coloured barrel shroud and a small focus indicator.
- **Prototype values:** Spread reduction, stack cap, effect duration, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 052 — DO NOT DISTURB
- **Internal ID:** DO-NOT-DISTURB
- **Roster status:** Active utility/melee concept
- **Category:** Defensive Projector
- **Rarity:** Ascendant
- **Slot:** Secondary
- **Role:** Temporarily slowing incoming projectile pressure to create a repositioning window.
- **Core mechanic: Quiet Zone**
  
  Deploys a visible bubble that reduces the speed of projectiles passing through it. It does not stop projectiles or protect players from hits.
- **Weapon Action: Check Out**
  
  Collapse the bubble early, producing a short outward push that creates space but deals no damage.
- **Rules and counterplay:** The bubble is stationary, temporary, and destructible; it affects projectiles from both teams; opponents can shoot around it or wait it out.
- **Visual identity:** A small hotel-style projector with a translucent circular field and a hanging DO NOT DISTURB sign.
- **Prototype values:** Bubble size, projectile slowdown, lifetime, health, push strength, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 053 — DOUBLE TAKE
- **Internal ID:** DOUBLE-TAKE
- **Roster status:** Active launch firearm
- **Category:** Burst Rifle
- **Rarity:** Ascendant
- **Slot:** Primary
- **Role:** Mid-range pressure through delayed, predictable follow-up shots.
- **Core mechanic: Echo Shot**
  
  Each trigger fires one normal projectile and schedules a weaker second projectile along the same initial direction after a short, fixed delay.
- **Weapon Action: Save It**
  
  Hold the scheduled second projectile instead of releasing it immediately. Press again to release it along the stored direction.
- **Rules and counterplay:** The second shot is weaker and visibly telegraphed; it cannot adjust direction after being stored; switching weapons cancels it; opponents can move after the first shot.
- **Visual identity:** A twin-chamber rifle with a split timing display and a distinctive double-click sound.
- **Prototype values:** Damage split, delay, magazine cost, storage window, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 054 — LOST PROPERTY
- **Internal ID:** LOST-PROPERTY
- **Roster status:** Active utility/melee concept
- **Category:** Retrieval Tool
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Weapon-pickup awareness.
- **Core mechanic: Claim Ticket**
  
  Mark one map weapon pickup that the user has directly seen. Its location remains highlighted on the user's HUD while it is available.
- **Weapon Action: Found It**
  
  Briefly refresh the marked pickup's locator, helping the user relocate it during a rotation. It does not move the pickup, reserve it, or change who can collect it.
- **Rules and counterplay:** Only one pickup can be marked; the mark ends when the pickup is collected or despawns; it cannot reveal unseen pickups or opponents.
- **Visual identity:** A handheld lost-property scanner with a ticket slot and blinking locator light.
- **Prototype values:** Mark duration, locator refresh duration, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 055 — BAD TIMING
- **Internal ID:** BAD-TIMING
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Automatic Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Rhythm-based sustained damage with a deliberate firing pattern.
- **Core mechanic: Wrong Moment**
  
  The rifle fires a fixed repeating rhythm: a short fast sequence followed by a clearly signalled pause. The pattern never randomises.
- **Weapon Action: Skip the Beat**
  
  Skip the next pause, then enter a longer recovery period before the normal rhythm resumes.
- **Rules and counterplay:** The rhythm is shown on the weapon; the action trades immediate output for later downtime; no shot is automatically aimed; opponents can time pushes around the pause.
- **Visual identity:** A boxy rifle with a metronome-like side indicator and a mechanical click before each pause.
- **Prototype values:** Sequence length, fire intervals, pause length, recovery, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 056 — HUSH MONEY
- **Internal ID:** HUSH-MONEY
- **Roster status:** Active utility/melee concept
- **Category:** Sound Field Projector
- **Rarity:** Ascendant
- **Slot:** Secondary
- **Role:** Sound management for a temporary team rotation or defensive hold.
- **Core mechanic: Keep It Down**
  
  Deploys a stationary quiet zone that reduces the volume and distance of movement sounds for every player inside it.
- **Weapon Action: Loose Lips**
  
  End the zone early and emit a brief false footstep cue at its edge.
- **Rules and counterplay:** The zone affects both teams; it does not hide visuals or remove weapon impacts; its boundary is visible; the false cue is short and can be recognised.
- **Visual identity:** A compact audio mixer with a padded speaker dish and a moving sound-level meter.
- **Prototype values:** Zone radius, sound reduction, lifetime, cue range, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 057 — LAST RESORT
- **Internal ID:** LAST-RESORT
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Heavy Pistol
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** High-stakes precision shooting with a clearly signalled final round.
- **Core mechanic: One Left**
  
  The final round in the cylinder deals a modest bonus to body damage. The weapon's cylinder display makes the final round obvious to everyone nearby.
- **Weapon Action: Make It Count**
  
  Chamber the final round early, leaving the remaining cylinder empty and readying the special shot.
- **Rules and counterplay:** The bonus is modest and never a one-hit guarantee; the action sacrifices remaining ammunition; the special shot still requires a normal hit; reloading resets the chamber.
- **Visual identity:** An oversized heavy pistol with a bright final-round indicator.
- **Prototype values:** Damage, cylinder size, bonus cap, chamber time, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 058 — OPEN SECRET
- **Internal ID:** OPEN-SECRET
- **Roster status:** Active utility/melee concept
- **Category:** Team Beacon
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Helping separated teammates regroup without providing enemy intelligence.
- **Core mechanic: All Together**
  
  Deploys a friendly beacon that displays the approximate direction of connected teammates to one another while they remain within range.
- **Weapon Action: Roll Call**
  
  Sends a visible pulse to connected teammates, asking them to regroup at the beacon. It does not teleport or force movement.
- **Rules and counterplay:** Only friendly positions are shared; the beacon has a limited range and lifetime; it is visible and destructible; no enemy is revealed.
- **Visual identity:** A clean signal lantern with a circular team display and a bright regroup pulse.
- **Prototype values:** Connection range, beacon lifetime, update interval, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 059 — SHORT FUSE
- **Internal ID:** SHORT-FUSE
- **Roster status:** Active launch firearm
- **Category:** Explosive Repeater
- **Rarity:** Ascendant
- **Slot:** Primary
- **Role:** Area pressure through multiple visible, short-lived impact charges.
- **Core mechanic: Stick Around**
  
  Fires small charges that attach to valid surfaces and automatically burst after a short fixed delay. A direct hit causes a smaller impact burst.
- **Weapon Action: All at Once**
  
  Detonate all active charges early.
- **Rules and counterplay:** Charges are visible and can be removed; only a small number can exist; the timer is clearly indicated; the action cannot detonate charges through blocked geometry.
- **Visual identity:** A compact launcher with bright fuse caps and a visible charge counter.
- **Prototype values:** Damage, blast radius, fuse time, active-charge limit, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 060 — THE USUAL
- **Internal ID:** THE-USUAL
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Adaptive Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Flexible mid-range damage that rewards switching between two firing rhythms.
- **Core mechanic: Same Order**
  
  The rifle has two modes: controlled single shots and a short automatic burst. Repeated use of one mode gradually makes the other mode's next activation more efficient, within a small cap.
- **Weapon Action: Change It Up**
  
  Switch modes instantly and consume the stored efficiency bonus.
- **Rules and counterplay:** The bonus never increases damage; the mode and bonus are clearly displayed; switching modes does not improve accuracy or aim; players can read and anticipate the chosen rhythm.
- **Visual identity:** A practical rifle with a rotating selector and two distinct chamber indicators.
- **Prototype values:** Mode fire rates, efficiency cap, bonus duration, and cooldown are TBD.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 061 — BAD PENNY
- **Internal ID:** BAD-PENNY
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Burst Pistol
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Close-to-mid-range damage with a distinctive returning firing rhythm.
- **Core mechanic: Turns Up Again**
  
  Fires a three-shot burst. After each burst, the next burst begins with a short delay that becomes slightly shorter if all three shots hit, up to a fixed cap.
- **Weapon Action: Spend It**
  
  Fire one deliberately slower, more accurate single shot that resets the burst rhythm.
- **Rules and counterplay:** The rhythm bonus is capped; misses do not grant the benefit; the action trades burst output for a single shot; the weapon has no automatic target correction.
- **Visual identity:** A chunky pistol with a coin-shaped burst counter that flips after each trigger pull.
- **Prototype values:** Burst damage, shot spacing, rhythm cap, single-shot accuracy, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 062 — MILE MARKER
- **Internal ID:** MILE-MARKER
- **Roster status:** Active utility/melee concept
- **Category:** Route Beacon
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Setting a clear team rally point and guiding rotations.
- **Core mechanic: You Are Here**
  
  Place a tall, visible marker that displays a simple direction arrow for friendly players within range. It shares no enemy information.
- **Weapon Action: Move the Pin**
  
  Relocate the active marker to the user's current position after a short, interruptible setup.
- **Rules and counterplay:** Only one marker can be active; it is visible and destructible; the direction indicator is approximate; it does not grant speed or reveal opponents.
- **Visual identity:** A fold-out survey marker with a rotating arrow and bright map-pin head.
- **Prototype values:** Range, lifetime, relocation time, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 063 — SQUARE DEAL
- **Internal ID:** SQUARE-DEAL
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Precision Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Rewarding clean, deliberate shots with a stable firing cycle.
- **Core mechanic: Fair and Square**
  
  The rifle fires accurate single rounds. A hit near the centre of the visible target silhouette slightly reduces the next shot's recovery; edge hits deal normal damage but do not grant the handling benefit.
- **Weapon Action: Draw a Line**
  
  The next shot projects a short, visible horizontal guide on the surface behind its impact, helping the player judge alignment without marking opponents.
- **Rules and counterplay:** The centre zone is generous and consistent; the benefit affects handling only; the guide is visible to both teams and short-lived.
- **Visual identity:** A squared-off rifle with a clean alignment sight and a small balance level.
- **Prototype values:** Damage, centre-zone size, recovery reduction, guide length, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 064 — BULLPEN
- **Internal ID:** BULLPEN
- **Roster status:** Active launch firearm
- **Category:** Heavy Shotgun
- **Rarity:** Ascendant
- **Slot:** Primary
- **Role:** Close-range damage with a commitment-based firing stance.
- **Core mechanic: Hold the Line**
  
  A normal shot has a broad spread. Remaining still briefly before firing tightens the spread, but moving cancels the preparation.
- **Weapon Action: Step Up**
  
  Take a short, controlled forward step while firing a wider, lower-damage blast.
- **Rules and counterplay:** The tighter shot requires a visible preparation window; the action does not grant invulnerability; the weapon is weak at range and vulnerable while preparing.
- **Visual identity:** A broad, squared shotgun with a flip-out foregrip and a stance indicator.
- **Prototype values:** Damage, spread profiles, preparation time, step distance, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 065 — PAPER CUT
- **Internal ID:** PAPER-CUT
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Light Marksman Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Sustained precision pressure through a readable shot cadence.
- **Core mechanic: Thin Margin**
  
  Each hit leaves a short-lived visible edge mark on the target. Hitting the opposite side of the target on the next shot deals a small bonus; repeating the same side deals standard damage.
- **Weapon Action: Fold Here**
  
  The next projectile splits into two weaker parallel shots at a fixed distance.
- **Rules and counterplay:** The edge zones are broad and consistent; marks expire quickly; the split is telegraphed and spreads predictably; no shot tracks a target.
- **Visual identity:** A slim paper-feed rifle with a folding sight and crisp stamping audio.
- **Prototype values:** Damage, edge-zone width, mark duration, split distance, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 066 — PARKING METER
- **Internal ID:** PARKING-METER
- **Roster status:** Active utility/melee concept
- **Category:** Zone Utility
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Temporarily claiming a small piece of arena space for a planned hold.
- **Core mechanic: Paid Time**
  
  Place a meter on the floor. Its visible ring gradually shrinks; while active, friendly players standing inside receive a clear countdown showing how long the zone remains.
- **Weapon Action: Expired**
  
  End the zone early and convert its remaining duration into a brief, team-wide movement ping toward the nearest objective.
- **Rules and counterplay:** The zone grants no damage reduction or invulnerability; it is visible and destructible; opponents can occupy or contest the area; the action provides information only.
- **Visual identity:** A comically serious parking meter with a glowing circular timer and striped base.
- **Prototype values:** Zone radius, lifetime, meter health, ping duration, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 067 — SLOW CLAP
- **Internal ID:** SLOW-CLAP
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Semi-Automatic Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Mid-range damage that rewards a measured trigger rhythm.
- **Core mechanic: Build the Applause**
  
  Firing within a steady timing window keeps the rifle's recoil predictable. Firing too quickly increases recoil; waiting too long resets the rhythm.
- **Weapon Action: Encore**
  
  The next shot has reduced recoil and a distinct report, but its recovery is longer.
- **Rules and counterplay:** The rhythm is shown with a simple indicator; no damage bonus is granted for timing; the weapon remains aim-dependent; the encore shot has a clear delay.
- **Visual identity:** A clean semi-auto rifle with a small tempo dial and paired sound ports.
- **Prototype values:** Timing window, recoil curve, recovery, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 068 — BACKUP PLAN
- **Internal ID:** BACKUP-PLAN
- **Roster status:** Active utility/melee concept
- **Category:** Return Beacon
- **Rarity:** Singular
- **Slot:** Secondary
- **Role:** Giving a player one planned fallback point during a push.
- **Core mechanic: Just in Case**
  
  Place a personal return beacon. Interacting with it later recalls the player to that exact location after a visible channel, provided the beacon remains active.
- **Weapon Action: Cancel the Plan**
  
  Recall the beacon to the user without teleporting, allowing it to be placed again elsewhere after its normal cooldown.
- **Rules and counterplay:** The recall is interruptible; the beacon is visible and destructible; it cannot be used while carrying an objective or inside restricted zones; it does not restore health or ammunition.
- **Visual identity:** A compact emergency marker with a folding antenna and a clear return countdown.
- **Prototype values:** Beacon lifetime, recall channel, placement range, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 069 — WIDE OPEN
- **Internal ID:** WIDE-OPEN
- **Roster status:** Active launch firearm
- **Category:** Fan Shotgun
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Close-range damage across a broad horizontal lane.
- **Core mechanic: Open Invitation**
  
  Fires a flat horizontal fan of projectiles. The spread is wide but shallow, making it effective against lateral movement and less effective against distant targets.
- **Weapon Action: Close the Gap**
  
  The next shot uses a narrow vertical fan, trading lane coverage for a taller target window.
- **Rules and counterplay:** The two patterns are clearly indicated; damage per projectile is modest; range is limited; opponents can change elevation or keep distance.
- **Visual identity:** A broad-barrel shotgun with a fan-shaped muzzle shroud and a two-pattern selector.
- **Prototype values:** Pellet count, fan dimensions, damage, range, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 070 — DEAD CERT
- **Internal ID:** DEAD-CERT
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Bolt-Action Rifle
- **Rarity:** Altered
- **Slot:** Primary
- **Role:** Long-range precision with a deliberate commitment after each shot.
- **Core mechanic: Signed and Sealed**
  
  After firing, the bolt must be cycled manually before the next shot. Cycling can be done at any time, including before the magazine is empty.
- **Weapon Action: Hold the Paper**
  
  Delay the next bolt cycle to preserve the current scope view and movement speed, then cycle instantly when the player chooses.
- **Rules and counterplay:** The rifle has a low firing rate; the cycle is audible and visible; delaying the cycle leaves the weapon unable to fire; no shot is guaranteed.
- **Visual identity:** A classic, clean bolt-action rifle with a large exposed bolt and paper-seal chamber indicator.
- **Prototype values:** Damage, cycle time, magazine, movement penalty, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 071 — RED TAPE
- **Internal ID:** RED-TAPE
- **Roster status:** Active utility/melee concept
- **Category:** Tripwire Sensor
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Warning teammates when an opponent crosses a chosen route.
- **Core mechanic: Restricted Area**
  
  Place a visible tripwire between two valid surfaces. Crossing it triggers a brief warning ping for the placing team, but deals no damage.
- **Weapon Action: Re-route**
  
  Retract one end of the wire and place it at a new valid surface within a short range.
- **Rules and counterplay:** The wire is visible at close range and can be destroyed; it has a limited span and lifetime; jumping or taking another route avoids it; the ping is brief and not a tracking marker.
- **Visual identity:** A red spool tool with a bright ribbon-like sensor line and a warning flag.
- **Prototype values:** Wire span, visibility, lifetime, trigger radius, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 072 — HARD RESET
- **Internal ID:** HARD-RESET
- **Roster status:** Active utility/melee concept
- **Category:** Momentum Brake
- **Rarity:** Extraordinary
- **Slot:** Secondary
- **Role:** Giving players precise control over momentum during complex jumps and movement routes.
- **Core mechanic: Full Stop**
  
  The device emits a short field around the user that reduces their own horizontal momentum, allowing a controlled landing or stopping point.
- **Weapon Action: Reboot**
  
  Store the next momentum-brake use for a brief window, allowing the player to trigger it at the chosen moment.
- **Rules and counterplay:** It affects only the user; it does not freeze opponents or grant invulnerability; the stored use expires; it cannot cancel fall damage or bypass map boundaries.
- **Visual identity:** A small industrial controller with a large red reset switch and a velocity display.
- **Prototype values:** Momentum reduction, radius, stored window, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 073 — FIRST CLASS
- **Internal ID:** FIRST-CLASS
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Compact Automatic Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Dependable close-to-mid-range damage with a controlled magazine economy.
- **Core mechanic: Priority Boarding**
  
  The first half of the magazine fires at a steady rate. The final portion fires slightly faster but with increased spread, creating a predictable end-of-magazine pressure window.
- **Weapon Action: Upgrade Seat**
  
  Hold the next magazine's final portion at the normal fire rate, trading speed for tighter spread.
- **Rules and counterplay:** The magazine phase is clearly displayed; the action does not increase damage; reloading resets the sequence; opponents can exploit the predictable end phase.
- **Visual identity:** A compact, polished carbine with a boarding-pass magazine counter.
- **Prototype values:** Magazine size, fire rates, spread, phase length, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 074 — OVERHEAD
- **Internal ID:** OVERHEAD
- **Roster status:** Active launch firearm
- **Category:** Arc Launcher
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** Damage and pressure against opponents using predictable cover positions.
- **Core mechanic: Coming Through**
  
  Fires a slow projectile in a high, fixed arc that lands at the point indicated by a ground shadow. It deals modest area damage on impact.
- **Weapon Action: Short Route**
  
  The next projectile uses a lower, faster arc with reduced area damage.
- **Rules and counterplay:** The landing shadow is visible; the projectile is slow and can be avoided; ceilings and solid geometry block it; the lower arc trades area for speed.
- **Visual identity:** A compact lobber with an elevated barrel and a clear trajectory sight.
- **Prototype values:** Arc height, projectile speed, impact radius, damage, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 075 — TIGHTROPE
- **Internal ID:** TIGHTROPE
- **Roster status:** Active utility/melee concept
- **Category:** Traversal Cable Tool
- **Rarity:** Singular
- **Slot:** Secondary
- **Role:** Creating a temporary, risky crossing between two separated platforms.
- **Core mechanic: Walk the Line**
  
  Attach two anchors to valid surfaces and create a narrow traversable cable. Players move across it at a controlled speed and cannot fire while attached.
- **Weapon Action: Safety Net**
  
  Add a short-lived safety catch beneath the cable that prevents a fall once, then disappears.
- **Rules and counterplay:** Only one cable exists; both anchors and the cable are visible and removable; traversal is slower than normal running; opponents can guard the endpoints.
- **Visual identity:** A spool launcher with bright anchor clamps and a taut cable indicator.
- **Prototype values:** Cable span, lifetime, traversal speed, safety-catch duration, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 076 — TIME CARD
- **Internal ID:** TIME-CARD
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Precision Repeater
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Timing-based mid-range damage with a predictable reload rhythm.
- **Core mechanic: Clock In**
  
  The weapon records the interval between the player's last two shots. Matching that interval on the next shot slightly improves handling; firing too early or too late clears the rhythm.
- **Weapon Action: Overtime**
  
  The next shot can be fired outside the timing window with normal handling, preventing a forced wait during an urgent duel.
- **Rules and counterplay:** The timing window is visible; the benefit is handling only; the action has a long recovery and cannot be chained.
- **Visual identity:** A work-clock themed rifle with a punch-card side panel and a rotating time dial.
- **Prototype values:** Timing tolerance, handling bonus, rhythm reset, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 077 — SPOT CHECK
- **Internal ID:** SPOT-CHECK
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Burst Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Mid-range damage that rewards controlled bursts at a chosen target.
- **Core mechanic: Inspection**
  
  The rifle fires a fixed four-shot burst. If all four shots hit the same opponent, the next burst has a shorter delay before its first shot, not increased damage.
- **Weapon Action: Second Look**
  
  Pause the next burst before its final shot, allowing the player to adjust aim before releasing it.
- **Rules and counterplay:** The burst is fixed and readable; the benefit is capped; the pause leaves the user exposed; switching targets or missing resets the sequence.
- **Visual identity:** A compact inspection-style rifle with a four-light burst counter.
- **Prototype values:** Burst spacing, damage, delay bonus, pause window, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 078 — LATCHKEY
- **Internal ID:** LATCHKEY
- **Roster status:** Active utility/melee concept
- **Category:** Door Utility
- **Rarity:** Extraordinary
- **Slot:** Secondary
- **Role:** Temporarily changing access through designated arena doors and gates.
- **Core mechanic: Your Way In**
  
  Interact with a compatible map door to temporarily unlock or open it. The tool works only on designated doors built for this mechanic.
- **Weapon Action: Lock Up**
  
  Close and temporarily lock the same door, with a visible countdown and warning indicator.
- **Rules and counterplay:** It cannot create doors or pass through solid geometry; only specific map doors are compatible; the state is visible to all players; the door returns to its normal state after a short duration.
- **Visual identity:** A large electronic key fob with a flip-out metal key and a simple lock display.
- **Prototype values:** Interaction range, open duration, lock duration, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 079 — FENDER BENDER
- **Internal ID:** FENDER-BENDER
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Impact Launcher
- **Rarity:** Ascendant
- **Slot:** Primary
- **Role:** Close-range damage and deliberate displacement.
- **Core mechanic: Bumper to Bumper**
  
  Fires a short-range impact slug. Damage is consistent, but hitting an opponent while they are moving toward the player adds a small, capped knockback effect.
- **Weapon Action: Reverse Gear**
  
  Fire a low-damage shot that pushes the user backward and opponents in front of the muzzle away.
- **Rules and counterplay:** The movement-read bonus affects knockback only; the action consumes ammunition; range is short; opponents can change direction or attack from outside its effective range.
- **Visual identity:** A compact industrial blaster with a rubber bumper muzzle and a reverse-light indicator.
- **Prototype values:** Damage, range, knockback, ammunition, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 080 — GOOD SPORT
- **Internal ID:** GOOD-SPORT
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Sports Launcher
- **Rarity:** Altered
- **Slot:** Primary
- **Role:** Mid-range damage through predictable bouncing and catching opportunities.
- **Core mechanic: Fair Play**
  
  Fires a soft, fast-moving ball that deals modest impact damage and rebounds once from arena surfaces. The rebound angle is consistent and readable.
- **Weapon Action: Catch and Release**
  
  Catch the next returning ball if it comes within a short frontal range, then throw it again with a fresh trajectory but reduced damage.
- **Rules and counterplay:** The ball never homes; the catch requires facing it and timing the action; missed catches leave the player exposed; damage is modest.
- **Visual identity:** A playful launcher with a padded cup muzzle and a ball-shaped chamber.
- **Prototype values:** Damage, speed, rebound angle, catch window, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 081 — NIGHTCAP
- **Internal ID:** NIGHTCAP
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Compact Shotgun
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Close-range damage with a deliberate last-shell decision.
- **Core mechanic: Lights Out**
  
  The shotgun fires a compact spread. Its final shell has a tighter spread but a slower pump cycle, clearly indicated by a chamber light.
- **Weapon Action: One for the Road**
  
  Fire the final shell immediately, even if the magazine is not empty, then begin a full reload.
- **Rules and counterplay:** The final-shell benefit is accuracy only; the action sacrifices remaining shells; the weapon is weak at range; the pump cycle is visible and audible.
- **Visual identity:** A short shotgun with a flip-up chamber light and a dark polished receiver.
- **Prototype values:** Pellet damage, spread, shell count, pump time, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 082 — TALLY HO
- **Internal ID:** TALLY-HO
- **Roster status:** Active launch firearm
- **Category:** Light Machine Gun
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Sustained damage with an ammunition-counting mechanic.
- **Core mechanic: Keep Score**
  
  Every fifth shot is a heavier, slower projectile with the same total damage budget as a small portion of the preceding sequence. The pattern is fixed and shown on the ammo counter.
- **Weapon Action: Make It Even**
  
  Skip the next marked shot to reload a small number of rounds into the belt, trading immediate pressure for ammunition.
- **Rules and counterplay:** The heavy shot is predictable; the action cannot create ammunition beyond the weapon's reserve; the weapon has a long reload and high sustained spread.
- **Visual identity:** A compact belt-fed LMG with a rotating tally counter and visible feed belt.
- **Prototype values:** Damage, sequence interval, belt size, reload time, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 083 — STATIC SHOCK
- **Internal ID:** STATIC-SHOCK
- **Roster status:** Active launch firearm
- **Category:** Arc Rifle
- **Rarity:** Ascendant
- **Slot:** Primary
- **Role:** Mid-range damage against grouped opponents without automatic chain targeting.
- **Core mechanic: Charge Transfer**
  
  Direct hits leave a short-lived charge on the target. A later shot at a charged target creates a small, fixed-radius arc to one nearby opponent, dealing reduced secondary damage.
- **Weapon Action: Ground Wire**
  
  The next hit consumes the charge without chaining and instead briefly interrupts the target's active weapon action.
- **Rules and counterplay:** The arc only reaches one nearby opponent; the charge is visible and expires quickly; secondary damage is low; opponents can spread out or wait for the charge to fade.
- **Visual identity:** An insulated rifle with a visible coil and a charge meter.
- **Prototype values:** Direct damage, arc radius, secondary damage, charge duration, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 084 — QUIET HOURS
- **Internal ID:** QUIET-HOURS
- **Roster status:** Active utility/melee concept
- **Category:** Team Utility Projector
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Helping a team coordinate a temporary hold without revealing enemy positions.
- **Core mechanic: Closed for the Night**
  
  Deploys a small lamp that gives friendly players inside its radius a clear visual cue when another teammate enters the zone. It provides no enemy detection.
- **Weapon Action: Lights On**
  
  Send a short visible pulse that lets connected teammates know the zone is active.
- **Rules and counterplay:** The lamp is visible and destructible; the radius is limited; it does not silence footsteps or weapons; it does not reveal opponents.
- **Visual identity:** A folding desk lamp with a circular team-status display.
- **Prototype values:** Radius, lifetime, entry cue duration, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 085 — BLIND DATE
- **Internal ID:** BLIND-DATE
- **Roster status:** Active launch firearm
- **Category:** Close-Range Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Close-range damage through controlled hip-fire and a risky aiming trade-off.
- **Core mechanic: No Introductions**
  
  Hip-fired shots have a tight, fixed pattern. Aiming down sights widens the pattern but increases projectile speed, creating a choice between spread control and faster shots.
- **Weapon Action: Make It Official**
  
  Lock the weapon into its current firing mode for a short duration, preventing accidental mode changes while maintaining normal damage.
- **Rules and counterplay:** Both modes are clearly shown; the action provides no damage bonus; the weapon has limited effective range; opponents can use distance and cover.
- **Visual identity:** A compact rifle with a two-position sight and a bright mode indicator.
- **Prototype values:** Spread profiles, projectile speed, range, lock duration, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 086 — HIGH BEAMS
- **Internal ID:** HIGH-BEAMS
- **Roster status:** Active utility/melee concept
- **Category:** Illumination Tool
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Making dark or visually cluttered corners easier for teammates to inspect.
- **Core mechanic: Full Visibility**
  
  Fires a bright light puck that illuminates a small area and casts clear silhouettes of players moving through the lit space. It does not reveal players through walls.
- **Weapon Action: Dip the Lights**
  
  Reduce the puck's brightness and switch it to a short-range pulse, useful for checking a nearby corner without maintaining a constant glow.
- **Rules and counterplay:** The puck is visible and destructible; it does not mark targets; the area is small; opponents can leave the light or use cover.
- **Visual identity:** A compact headlamp-style launcher with twin adjustable reflectors.
- **Prototype values:** Light radius, lifetime, pulse range, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 087 — HARD COPY
- **Internal ID:** HARD-COPY
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Heavy Precision Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Long-range damage through a deliberate, repeatable shot pattern.
- **Core mechanic: Carbon Copy**
  
  The rifle's second shot repeats the first shot's exact firing offset and recoil pattern. The player can use the repeat to maintain a consistent angle, but must correct aim manually.
- **Weapon Action: Duplicate**
  
  Store the current recoil offset and apply it to the next shot after switching position, creating a predictable but not automatically aimed follow-up.
- **Rules and counterplay:** The repeated offset is not target tracking; the stored pattern expires; the weapon has a slow cycle; opponents can change position.
- **Visual identity:** A long precision rifle with a twin-feed receiver and a carbon-paper chamber window.
- **Prototype values:** Damage, cycle time, stored-pattern duration, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 088 — BOTTOM LINE
- **Internal ID:** BOTTOM-LINE
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Heavy Automatic Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Mid-range damage with a firm commitment to finishing a magazine.
- **Core mechanic: No Negotiation**
  
  The weapon's recoil pattern becomes more predictable as the magazine empties, while its fire rate remains constant. Reloading early gives up the handling benefit.
- **Weapon Action: Final Offer**
  
  The next magazine starts with the improved recoil pattern but has fewer rounds available.
- **Rules and counterplay:** The benefit is handling only; magazine size is reduced when the action is used; the recoil pattern is fixed and learnable; opponents can exploit reload windows.
- **Visual identity:** A heavy rifle with a large descending magazine gauge and a squared receiver.
- **Prototype values:** Damage, recoil curve, magazine reduction, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 089 — UNDERSTUDY
- **Internal ID:** UNDERSTUDY
- **Roster status:** Active utility/melee concept
- **Category:** Decoy Tool
- **Rarity:** Ascendant
- **Slot:** Secondary
- **Role:** Creating a brief visual distraction during a rotation.
- **Core mechanic: Stand-In**
  
  Deploys a stationary holographic teammate silhouette that copies the user's current stance and facing direction. It does not move, fire, or imitate audio.
- **Weapon Action: Take the Stage**
  
  Switch the decoy to a different preset stance and facing direction, allowing a quick change in the visual clue it presents.
- **Rules and counterplay:** The decoy is visibly artificial at close range; it cannot deal damage or interact; only one can exist; it is destructible and short-lived.
- **Visual identity:** A slim projector with a folding theatre-mask lens and a pale hologram.
- **Prototype values:** Lifetime, placement range, stance options, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 090 — QUICK FIX
- **Internal ID:** QUICK-FIX
- **Roster status:** Active utility/melee concept
- **Category:** Service Tool
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Emergency ammunition management.
- **Core mechanic: Patch Job**
  
  When the currently held weapon is below its magazine capacity, activate Patch Job to transfer a small, fixed amount of reserve ammunition directly into its magazine.
- **Weapon Action: Temporary Support**
  
  Temporarily improves the next reload's speed. The effect ends after that reload and cannot stack with itself.
- **Rules and counterplay:** Both actions consume reserve ammunition where applicable; neither creates ammunition; the transfer has a clear animation and can be interrupted; normal magazine and reserve limits still apply.
- **Visual identity:** A compact service tool with a folding clamp and a visible ammunition meter.
- **Prototype values:** Ammo transfer amount, reload speed modifier, duration, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 091 — HEADCOUNT
- **Internal ID:** HEADCOUNT
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Precision Repeater
- **Rarity:** Ascendant
- **Slot:** Primary
- **Role:** Precision damage with a clear reward for changing targets rather than tunnel vision.
- **Core mechanic: Roll Call**
  
  Consecutive hits on different opponents build a small handling bonus. Hitting the same opponent twice in a row resets the sequence.
- **Weapon Action: Present**
  
  The next hit briefly places a visible confirmation marker on the target's screen, indicating that the weapon has registered the hit.
- **Rules and counterplay:** The bonus affects handling only; the sequence is capped; the marker does not reveal position through walls; the weapon remains aim-dependent.
- **Visual identity:** A precision rifle with a numbered rotating target counter and a clean confirmation light.
- **Prototype values:** Damage, sequence length, handling bonus, marker duration, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 092 — LATE FEE
- **Internal ID:** LATE-FEE
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Pump Shotgun
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Close-range damage that rewards patient timing rather than rapid follow-up.
- **Core mechanic: Payment Due**
  
  The shotgun deals consistent damage. If the player waits until the pump indicator fully settles before firing again, the next shot has a tighter spread.
- **Weapon Action: Grace Period**
  
  Hold the next pump cycle open briefly, allowing the player to choose when to finish cycling and fire.
- **Rules and counterplay:** The spread benefit is modest; the indicator is visible; firing early forfeits the benefit; the weapon's slow cycle creates a clear punish window.
- **Visual identity:** A pump shotgun with a receipt-like cycle indicator and a chunky sliding fore-end.
- **Prototype values:** Damage, spread, pump duration, grace window, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 093 — PIN DROP
- **Internal ID:** PIN-DROP
- **Roster status:** Active utility/melee concept
- **Category:** Position Marker
- **Rarity:** Evolved
- **Slot:** Secondary
- **Role:** Giving teammates a precise shared destination for a coordinated push.
- **Core mechanic: Mark the Spot**
  
  Place a small pin on a visible surface. Friendly players receive a simple direction indicator toward it while it remains active.
- **Weapon Action: Pull the Pin**
  
  Recall the marker to the user's current position and set a new destination without waiting for the original lifetime to expire.
- **Rules and counterplay:** The marker gives no teleport or speed boost; it is visible and destructible; the indicator is approximate and expires; it does not reveal opponents.
- **Visual identity:** A small survey pin launcher with a bright pinhead and folding rangefinder.
- **Prototype values:** Placement range, lifetime, indicator range, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 094 — SAFE BET
- **Internal ID:** SAFE-BET
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Semi-Automatic Hand Cannon
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Consistent mid-range damage with a predictable risk-reward shot.
- **Core mechanic: House Edge**
  
  Every third shot is a lower-damage, faster projectile. The pattern is fixed and clearly shown, letting players use it to pressure moving targets without increasing total damage output.
- **Weapon Action: Double or Nothing**
  
  Skip the next fast shot and fire a slower, heavier round with a longer recovery.
- **Rules and counterplay:** The pattern is visible; the heavier shot has no guaranteed critical effect; the action is a trade-off, not a damage multiplier; opponents can read the cycle.
- **Visual identity:** A clean hand cannon with a three-position cylinder display and a small card-suit indicator.
- **Prototype values:** Damage values, projectile speeds, shot interval, recovery, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 095 — BACK CHAT
- **Internal ID:** BACK-CHAT
- **Roster status:** Active utility/melee concept
- **Category:** Defensive Relay
- **Rarity:** Ascendant
- **Slot:** Secondary
- **Role:** Giving a team a short warning when opponents pressure a defended position.
- **Core mechanic: Talk Back**
  
  Place a relay on a wall. When an opponent damages the relay, it emits a brief directional warning for the owner and nearby teammates.
- **Weapon Action: Repeat That**
  
  Trigger one final warning pulse manually, then the relay shuts down.
- **Rules and counterplay:** The relay does not damage or reveal opponents; it only reports the direction of the hit; it is visible and destructible; the warning is brief.
- **Visual identity:** A wall-mounted intercom puck with a small speaker grille and red indicator.
- **Prototype values:** Relay health, warning radius, lifetime, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 096 — ALL CLEAR
- **Internal ID:** ALL-CLEAR
- **Roster status:** Active utility/melee concept
- **Category:** Utility Cleaner
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Removing temporary arena clutter and opening a route for teammates.
- **Core mechanic: Sweep Through**
  
  Emits a short-range pulse that disables eligible temporary utility objects in a narrow cone. It does not affect players, map geometry, or permanent objectives.
- **Weapon Action: Leave Nothing**
  
  Expand the next pulse into a wider but shorter-range sweep.
- **Rules and counterplay:** The pulse has limited charges and a clear warning; it cannot destroy weapons or permanent map objects; affected objects are clearly identified in the UI; opponents can place objects outside the cone.
- **Visual identity:** A compact industrial sweeper with a rotating brush head and a clean status lamp.
- **Prototype values:** Compatible object list, cone width, range, charge count, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 097 — BIG PICTURE
- **Internal ID:** BIG-PICTURE
- **Roster status:** Active launch firearm
- **Category:** Heavy Burst Rifle
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** Mid-range damage with a deliberate wide-to-tight shot sequence.
- **Core mechanic: Frame by Frame**
  
  Fires a three-shot sequence whose spread narrows with each shot. The first shot covers a broad area; the final shot is the most accurate.
- **Weapon Action: Zoom Out**
  
  Reverse the next sequence, starting with the tightest shot and widening on subsequent shots.
- **Rules and counterplay:** The pattern is fixed and visible; the action changes spread order, not damage; the sequence has a recovery window; opponents can reposition between shots.
- **Visual identity:** A boxy rifle with a three-frame display and a sliding lens assembly.
- **Prototype values:** Damage, spread stages, shot intervals, recovery, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 098 — SMALL TALK
- **Internal ID:** SMALL-TALK
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Compact SMG
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** Close-range damage with a short, controlled firing window.
- **Core mechanic: Conversation Starter**
  
  The first part of a continuous burst has a tight spread. As firing continues, spread gradually increases, then resets after a short release.
- **Weapon Action: Change the Subject**
  
  Instantly reset the spread but discard a small amount of ammunition from the magazine.
- **Rules and counterplay:** The spread curve is predictable; the reset costs ammunition; damage does not increase over time; opponents can disengage during sustained fire.
- **Visual identity:** A tiny SMG with a folding stock and a small conversation-bubble heat indicator.
- **Prototype values:** Fire rate, spread curve, reset cost, magazine, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 099 — ON THE HOUSE
- **Internal ID:** ON-THE-HOUSE
- **Roster status:** Active utility/melee concept
- **Category:** Team Mobility Utility
- **Rarity:** Ascendant
- **Slot:** Secondary
- **Role:** Creating a one-use launch opportunity for a teammate.
- **Core mechanic: Complimentary Ride**
  
  Place a visible launch pad that gives the first friendly player who steps on it a controlled upward-and-forward boost. Opponents can also use it.
- **Weapon Action: No Charge**
  
  Remove the active pad early and return it to the user's inventory after a short cooldown.
- **Rules and counterplay:** One pad can exist; it is visible and destructible; it can be used by either team; the boost direction is fixed and shown before use.
- **Visual identity:** A small folding hospitality mat with a bright arrow and spring-loaded base.
- **Prototype values:** Pad lifetime, boost strength, launch angle, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 100 — OVERBOOKED
- **Internal ID:** OVERBOOKED
- **Roster status:** Active launch firearm
- **Category:** Automatic Shotgun
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** Close-range damage with a riskier, overfilled firing mode.
- **Core mechanic: No Vacancies**
  
  The shotgun fires a controlled automatic sequence. The final shot in a continuous sequence has wider spread and increased recoil, making prolonged fire less reliable.
- **Weapon Action: Squeeze In**
  
  Load one additional shell beyond the normal magazine capacity, but the next reload takes longer.
- **Rules and counterplay:** The extra shell is not bonus damage; the action creates a clear reload penalty; spread increases predictably; the weapon is ineffective at long range.
- **Visual identity:** A bulky shotgun with an over-capacity shell window and a red FULL sign.
- **Prototype values:** Damage, fire rate, magazine, extra-shell cost, spread, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 101 — ROLL CALL
- **Internal ID:** ROLL-CALL
- **Roster status:** Active utility/melee concept
- **Category:** Team Rally Tool
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** Helping a scattered team synchronise a push.
- **Core mechanic: Present and Accounted For**
  
  Send a short-range team signal. Friendly players who acknowledge it appear on a simple local roster, showing who is ready to move.
- **Weapon Action: Dismissed**
  
  End the roster and send a clear visual go-signal to acknowledged teammates.
- **Rules and counterplay:** It gives no enemy information, movement boost, or invulnerability; acknowledgement is optional; the signal has limited range and a cooldown.
- **Visual identity:** A compact field clipboard with a row of illuminated team slots.
- **Prototype values:** Signal range, roster duration, acknowledgement window, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 102 — HOUSE RULES
- **Internal ID:** HOUSE-RULES
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Precision Carbine
- **Rarity:** Altered
- **Slot:** Primary
- **Role:** Reliable damage when defending a clearly chosen angle.
- **Core mechanic: Stay in Your Lane**
  
  Shots fired while the player remains inside a small, visible stance zone around their starting point have reduced recoil. Leaving the zone resets the benefit.
- **Weapon Action: New Rule**
  
  Move the stance zone to the player's current position, beginning a new setup window.
- **Rules and counterplay:** The zone is visible to the user; the benefit affects recoil only; the user must remain stationary and can be flanked; the action has a setup delay.
- **Visual identity:** A compact carbine with a folding floor marker and a simple rulebook-style selector.
- **Prototype values:** Zone radius, setup time, recoil reduction, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 103 — NO SHOW
- **Internal ID:** NO-SHOW
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Heavy Marksman Rifle
- **Rarity:** Extraordinary
- **Slot:** Primary
- **Role:** Precision damage with a delayed firing commitment.
- **Core mechanic: Missed Appointment**
  
  After aiming for a short uninterrupted period, the rifle prepares one accurate shot with a distinct chamber sound. Moving or firing early cancels the preparation.
- **Weapon Action: Reschedule**
  
  Preserve the prepared shot for a brief period while switching to the secondary weapon; switching back releases the preparation state but does not fire automatically.
- **Rules and counterplay:** The charge-up is audible and visible; the shot still requires aim; the stored state expires; the user is vulnerable while preparing.
- **Visual identity:** A long rifle with a clock-face chamber and a sliding appointment marker.
- **Prototype values:** Preparation time, damage, storage duration, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 104 — NIGHT OWL
- **Internal ID:** NIGHT-OWL
- **Roster status:** Active utility/melee concept
- **Category:** Night Vision Utility
- **Rarity:** Ascendant
- **Slot:** Secondary
- **Role:** Improving visibility through smoke, shadows, and visual clutter without revealing hidden opponents.
- **Core mechanic: Late Shift**
  
  Activate a short-duration visor overlay that increases contrast on visible surfaces and friendly markers. It does not highlight enemies or see through walls.
- **Weapon Action: Dim the Screen**
  
  Narrow the overlay to a small central area for a shorter duration, preserving peripheral normal vision.
- **Rules and counterplay:** The overlay is personal and temporary; it does not reveal opponents; it can be disrupted by bright effects; it has a clear battery meter and cooldown.
- **Visual identity:** A fold-out visor tool with twin green lenses and a compact battery display.
- **Prototype values:** Duration, contrast level, central area size, disruption time, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 105 — DOUBLE SHIFT
- **Internal ID:** DOUBLE-SHIFT
- **Roster status:** Active launch firearm
- **Category:** Dual-Feed Rifle
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** Mid-range damage with a deliberate choice between two ammunition feeds.
- **Core mechanic: Two Jobs**
  
  The rifle alternates between two feeds: a steady, accurate round and a faster, lighter round with reduced damage. The order is fixed and visible.
- **Weapon Action: Swap Shifts**
  
  Skip the next feed and choose which ammunition type fires next, then return to the standard sequence.
- **Rules and counterplay:** Neither feed is strictly stronger; the pattern is visible; the action only changes order; the rifle requires the player to manage the firing rhythm.
- **Visual identity:** A clean rifle with two visible feed tubes and a rotating shift selector.
- **Prototype values:** Damage, projectile speed, feed interval, magazine, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 106 — OPEN TAB
- **Internal ID:** OPEN-TAB
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Burst Sidearm
- **Rarity:** Altered
- **Slot:** Primary
- **Role:** Close-range damage through a controlled sequence of delayed follow-up shots.
- **Core mechanic: Put It on My Tab**
  
  Each trigger pull fires one normal projectile and queues a second, weaker shot after a fixed delay. The player can continue moving while the second shot resolves.
- **Weapon Action: Settle Up**
  
  Cancel the queued shot and immediately begin reloading a small amount of ammunition.
- **Rules and counterplay:** The follow-up is weaker and visibly indicated; it travels along the original firing direction; cancelling it gives up damage; opponents can reposition after the first shot.
- **Visual identity:** A compact sidearm with a two-part chamber and a small running-total display.
- **Prototype values:** Damage split, delay, magazine, reload amount, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 107 — DEAD END
- **Internal ID:** DEAD-END
- **Roster status:** Active utility/melee concept
- **Category:** Route Blocker
- **Rarity:** Ascendant
- **Slot:** Secondary
- **Role:** Temporarily closing a narrow passage to force a different rotation.
- **Core mechanic: Roadblock**
  
  Deploys a visible, waist-high barrier across a narrow opening. It blocks movement but can be vaulted by players who commit to a short climb.
- **Weapon Action: Open Passage**
  
  Fold the barrier flat early, reopening the route for either team.
- **Rules and counterplay:** The barrier is destructible and temporary; it does not block projectiles; players can vault it or take another route; only suitable openings accept it.
- **Visual identity:** A folding road barrier with reflective stripes and a large red stop panel.
- **Prototype values:** Barrier health, lifetime, vault time, placement restrictions, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 108 — BAIL OUT
- **Internal ID:** BAIL-OUT
- **Roster status:** Active utility/melee concept
- **Category:** Emergency Mobility Tool
- **Rarity:** Ascendant
- **Slot:** Secondary
- **Role:** A single, deliberate escape option when a player commits too far into a fight.
- **Core mechanic: Exit Strategy**
  
  Deploys a small emergency tether behind the player. After a brief visible delay, it pulls the user a short distance back toward the point where it was deployed.
- **Weapon Action: Pull the Cord**
  
  Trigger the return early, shortening the delay but reducing the travel distance.
- **Rules and counterplay:** The tether is visible; the pull can be interrupted; it cannot pass through solid geometry; it does not grant invulnerability or restore health.
- **Visual identity:** A compact safety harness launcher with a bright cord spool and a countdown light.
- **Prototype values:** Tether lifetime, pull distance, delay, interruption rules, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 109 — SIDE DISH
- **Internal ID:** SIDE-DISH
- **Roster status:** Active launch firearm
- **Category:** Compact Launcher
- **Rarity:** Ascendant
- **Slot:** Primary
- **Role:** Mid-range damage with a secondary projectile that changes the main shot's path.
- **Core mechanic: Comes With It**
  
  Fires a main projectile followed by a smaller companion projectile at a fixed offset. The two paths remain separate and can hit different opponents.
- **Weapon Action: Swap Sides**
  
  Reverse the companion projectile's offset for the next shot, allowing the player to choose which side of cover to pressure.
- **Rules and counterplay:** Both paths are visible; the companion deals reduced damage; the action changes direction only; the weapon does not bend shots around solid geometry.
- **Visual identity:** A compact launcher with twin offset barrels and a rotating side selector.
- **Prototype values:** Main and companion damage, offset, projectile speed, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

### Weapon 110 — CLEAN SLATE
- **Internal ID:** CLEAN-SLATE
- **Roster status:** Active utility/melee concept
- **Category:** Status Utility
- **Rarity:** Ascendant
- **Slot:** Secondary
- **Role:** Clearing a limited set of temporary movement or information effects from the user.
- **Core mechanic: Start Fresh**
  
  Activate a short self-pulse that removes one eligible temporary status effect, such as a slow or a brief reveal marker. It does not restore health, ammunition, or ability charges.
- **Weapon Action: Wipe Down**
  
  Expand the pulse to a nearby friendly teammate, but consume the tool's full charge and require close range.
- **Rules and counterplay:** Only specifically tagged removable effects are cleared; the action has a visible wind-up; it cannot remove damage or permanent match states; it has a long cooldown.
- **Visual identity:** A clean, white handheld scanner with a sweeping blue status bar.
- **Prototype values:** Eligible effect list, range, wind-up, charge count, and cooldown are TBD.
- **Status:** Proposed concept. Prototype values are TBD.

## 5. New Weapons 111–167

The roster now uses three distinct weapon slots: **Primary**, **Secondary**, and **Melee**. Melee weapons occupy the dedicated close-combat slot in the loadout; they are not classified as Primary or Secondary. Primary and Secondary continue to follow the existing damage-dealer versus utility rule.
The roster now uses three distinct weapon slots: **Primary**, **Secondary**, and **Melee**. Melee weapons occupy the dedicated close-combat slot in the loadout; they are not classified as Primary or Secondary. Primary and Secondary continue to follow the existing damage-dealer versus utility rule.

### Weapon 111 — DOORJAM
- **Internal ID:** DOORJAM
- **Roster status:** Active utility/melee concept
- **Category:** Battering Baton
- **Rarity:** Altered
- **Slot:** Melee
- **Role:** A readable close-range dueller with a push-and-punish rhythm. The brace is stationary, brief, and visible; opponents can wait it out or attack from another angle.
- **Core attack behaviour:** A compact baton whose light hits build a short-lived pressure meter. A heavy hit spends the meter to push the target a controlled distance.
- **Weapon Action:** Plant the baton into the floor to create a brief brace. The next incoming push is reduced, but the player cannot move during the brace.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A squared maintenance baton with a sliding pressure gauge.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 112 — BELLHOP
- **Internal ID:** BELLHOP
- **Roster status:** Active utility/melee concept
- **Category:** Suitcase Maul
- **Rarity:** Commonplace
- **Slot:** Melee
- **Role:** A crowd-control melee pick for doorways. Its slow wind-up is easy to read and punish; the action is strongest when opponents group up.
- **Core attack behaviour:** A heavy suitcase-shaped club with slow, deliberate swings. A clean hit briefly interrupts an opponent's sprint, but does not stun or disable firing.
- **Weapon Action:** Swing the case in a broad horizontal arc that can hit multiple nearby opponents for reduced damage. The action has a long recovery.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A battered hard-shell travel case with reinforced corners and luggage tags.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 113 — PAPER TIGER
- **Internal ID:** PAPER-TIGER
- **Roster status:** Active utility/melee concept
- **Category:** Folding Fan Blade
- **Rarity:** Evolved
- **Slot:** Melee
- **Role:** A timing-focused dueller. The deflection only covers a small frontal window, cannot be held, and fails against attacks from the side or rear.
- **Core attack behaviour:** Quick light strikes build a three-step rhythm. Completing the rhythm with a correctly timed heavy strike adds a small lunge, not bonus damage.
- **Weapon Action:** Snap the fan open to deflect one incoming projectile from the front, then immediately close it. The timing window is narrow.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** An oversized lacquered folding fan with sharp geometric ribs and crisp snap audio.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 114 — LAST WORD
- **Internal ID:** LAST-WORD
- **Roster status:** Active utility/melee concept
- **Category:** Dueling Saber
- **Rarity:** Extraordinary
- **Slot:** Melee
- **Role:** A high-skill one-on-one weapon. The parry window is short, has a clear stance cue, and can be baited or approached from off-angle.
- **Core attack behaviour:** A precise thrust has short reach but a quick recovery. Landing it at the end of a brief movement burst grants a faster ready animation for the next strike.
- **Weapon Action:** Enter a short parry stance. A correctly timed frontal melee hit is deflected and creates a small opening; ranged shots are unaffected.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A clean single-edged practice saber with a bright guard and minimal ornament.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 115 — SHOPPING CART
- **Internal ID:** SHOPPING-CART
- **Roster status:** Active utility/melee concept
- **Category:** Twin Push Bars
- **Rarity:** Commonplace
- **Slot:** Melee
- **Role:** A mobile space-maker with modest reach. The shove is telegraphed, travels in a straight line, and cannot pass through walls.
- **Core attack behaviour:** Two compact bars deliver rapid alternating strikes. Holding attack repeats the sequence, but the final swing has a noticeable recovery.
- **Weapon Action:** Lock the bars together and perform a short forward shove that moves opponents without dealing extra damage.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** Two bright steel cart handles connected by a folding hinge.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 116 — NIGHT SHIFT
- **Internal ID:** NIGHT-SHIFT
- **Roster status:** Active utility/melee concept
- **Category:** Weighted Flashlight
- **Rarity:** Commonplace
- **Slot:** Melee
- **Role:** A visibility-and-melee hybrid. The flash has limited range, does no damage, and briefly blooms the user's own screen too.
- **Core attack behaviour:** A sturdy flashlight used for quick, short-range strikes. Consecutive hits on different opponents keep the attack rhythm steady; repeating one target does not increase damage.
- **Weapon Action:** Flash a brief cone of light that makes nearby enemy silhouettes easier to distinguish for the user, without revealing them through walls.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A chunky industrial torch with a rotating head and a warm beam.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 117 — THE BUTLER
- **Internal ID:** THE-BUTLER
- **Roster status:** Active utility/melee concept
- **Category:** Serving Tray
- **Rarity:** Altered
- **Slot:** Melee
- **Role:** A defensive melee choice for holding a tight corner. The guard is directional, brief, and does not stop bullets.
- **Core attack behaviour:** A broad tray delivers short-range swats with a wide hit arc and low reach. Hits from the side have the same damage as frontal hits.
- **Weapon Action:** Raise the tray as a brief frontal guard against one melee strike, then it drops and enters recovery.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A polished oval serving tray with a discreet crest and scuffed underside.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 118 — BAD FORM
- **Internal ID:** BAD-FORM
- **Roster status:** Active utility/melee concept
- **Category:** Fencing Foil
- **Rarity:** Evolved
- **Slot:** Melee
- **Role:** A spacing specialist, not an auto-hit. The marked thrust is predictable, cannot turn after starting, and can be sidestepped.
- **Core attack behaviour:** A long, narrow thrust rewards precise spacing. Missing leaves a brief recovery; landing at maximum reach gives the player a small backward step.
- **Weapon Action:** Mark a visible point on the floor. The next thrust from within a short radius is aimed along the player's current direction but starts with a tiny delay.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A lightweight training foil with a ring guard and a bright tape-wrapped grip.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 119 — PICKUP STICKS
- **Internal ID:** PICKUP-STICKS
- **Roster status:** Active utility/melee concept
- **Category:** Twin Batons
- **Rarity:** Commonplace
- **Slot:** Melee
- **Role:** A tempo weapon for players who stay close. It cannot chain endlessly; the recovery cancel is limited and readable.
- **Core attack behaviour:** Fast alternating strikes have very short reach. A successful pair of hits allows the next attack to come out slightly sooner, with no damage increase.
- **Weapon Action:** Cross both batons to cancel the current recovery early once, then the weapon enters a longer cooldown.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** Two matte batons with contrasting end caps and a clean crossed animation.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 120 — THE BIG KNIT
- **Internal ID:** THE-BIG-KNIT
- **Roster status:** Active utility/melee concept
- **Category:** Oversized Yarn Mallet
- **Rarity:** Evolved
- **Slot:** Melee
- **Role:** A lane-control melee weapon. The ripple is narrow, temporary, and avoidable by jumping or taking another route.
- **Core attack behaviour:** A soft-headed mallet has a slow, wide swing. Hits apply a brief movement drag rather than a stun, making follow-up spacing easier.
- **Weapon Action:** Plant the mallet and send a short, visible ripple across the floor that slightly slows opponents who cross it.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A comically oversized knitted mallet with a sturdy handle and stitched seams.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 121 — CLOSE CALL
- **Internal ID:** CLOSE-CALL
- **Roster status:** Active utility/melee concept
- **Category:** Hooked Rescue Tool
- **Rarity:** Evolved
- **Slot:** Melee
- **Role:** A mobility melee choice for route changes. The anchor must be visible and valid; the pull has a clear line and can be interrupted by geometry.
- **Core attack behaviour:** A short hooked tool has a quick jab and a slower pull-cut animation. The two attacks have different reach, encouraging deliberate timing.
- **Weapon Action:** Catch a nearby ledge or marked arena anchor and pull the player a short distance toward it. It cannot attach to opponents.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A compact rescue hook with a blunt safety tip and bright grip markings.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 122 — CLEAN SWEEP
- **Internal ID:** CLEAN-SWEEP
- **Roster status:** Active utility/melee concept
- **Category:** Push Broom
- **Rarity:** Commonplace
- **Slot:** Melee
- **Role:** An anti-setup melee tool. The clear strip is short and visibly telegraphed; it does not remove weapons or major deployables.
- **Core attack behaviour:** A long sweeping strike has a wide horizontal arc but modest damage and a slow turn rate during the swing.
- **Weapon Action:** Sweep the floor in front of the player, clearing eligible small temporary gadgets from a narrow strip without affecting players or permanent map objects.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A reinforced janitorial broom with a bright, replaceable brush head.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 123 — OFF LIMITS
- **Internal ID:** OFF-LIMITS
- **Roster status:** Active utility/melee concept
- **Category:** Crowbar
- **Rarity:** Commonplace
- **Slot:** Melee
- **Role:** A route-aware melee pick. Its action only works on marked map features and has no combat damage bonus.
- **Core attack behaviour:** A reliable two-stage melee: a quick tap followed by a slower overhead strike. The overhead has better reach but more recovery.
- **Weapon Action:** Pry open one designated breakable arena shortcut or temporary service hatch. The opening is map-authored and never bypasses locked objectives.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A classic red-handled crowbar with chipped paint and a small route icon.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 124 — BOUNCED CHECK
- **Internal ID:** BOUNCED-CHECK
- **Roster status:** Active utility/melee concept
- **Category:** Spring Hammer
- **Rarity:** Evolved
- **Slot:** Melee
- **Role:** A vertical repositioning tool. The launch has a strong sound cue, cannot be chained in midair, and leaves the player exposed on landing.
- **Core attack behaviour:** The hammer compresses slightly on a held attack. Releasing early gives a quick short hit; a full hold gives a slower, longer-reaching swing.
- **Weapon Action:** Strike the ground to launch the user a modest distance upward, with no area damage. The landing is controllable but briefly slows the next swing.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A compact mechanic's hammer with an exposed spring chamber.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 125 — SILENT PARTNER
- **Internal ID:** SILENT-PARTNER
- **Roster status:** Active utility/melee concept
- **Category:** Rubber Practice Knife
- **Rarity:** Commonplace
- **Slot:** Melee
- **Role:** A mind-game melee tool. The feint is visual only, cannot attack during the sidestep, and experienced opponents can simply hold their ground.
- **Core attack behaviour:** A light, quick melee with very short reach. Hitting an opponent who is already facing the player grants no extra damage; it is about reliable timing, not backstab bonuses.
- **Weapon Action:** Feint a strike: show a brief attack tell, then cancel into a short sidestep. The feint deals no damage and has a cooldown.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A blunt training knife with a rubberized blade and bright safety stripe.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 126 — TOLL BOOTH
- **Internal ID:** TOLL-BOOTH
- **Roster status:** Active utility/melee concept
- **Category:** Gatekeeper Staff
- **Rarity:** Altered
- **Slot:** Melee
- **Role:** A defensive lane holder. The zone does not block shots, lasts briefly, and leaves the user unable to attack while set.
- **Core attack behaviour:** A staff has a long reach and slow side swings. Its tip deals less damage than the central section, rewarding deliberate distance control.
- **Weapon Action:** Set the staff across the player's front for a moment, creating a narrow movement-check zone that opponents can walk around or jump over.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A striped gate arm redesigned as a compact collapsible staff.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 127 — SECOND HAND
- **Internal ID:** SECOND-HAND
- **Roster status:** Active utility/melee concept
- **Category:** Clockwork Gauntlet
- **Rarity:** Extraordinary
- **Slot:** Melee
- **Role:** A commitment-based brawler. The wind-up can be interrupted by moving out of range, and the faster strike is still aimable and dodgeable.
- **Core attack behaviour:** A pair of heavy gauntlets strike in a fixed left-right cadence. A hit with the second hand resets the cadence faster, but does not add damage.
- **Weapon Action:** Wind the gauntlet for a short time. The next melee strike starts faster, but the wind-up is audible and movement is reduced.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A brass-and-graphite gauntlet with a visible winding dial.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 128 — FLOOR MODEL
- **Internal ID:** FLOOR-MODEL
- **Roster status:** Active utility/melee concept
- **Category:** Display Stand Spear
- **Rarity:** Evolved
- **Slot:** Melee
- **Role:** A precision reach weapon with a small traversal trick. The vault point is fixed, visible, and cannot be reused immediately.
- **Core attack behaviour:** A straight thrust has long reach and a narrow hit area. A missed thrust briefly anchors the weapon, increasing recovery.
- **Weapon Action:** Plant the spear as a temporary pole vault point and hop over a nearby low obstacle. It cannot vault through walls or across large gaps.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A showroom display pole with a weighted base and polished tip.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 129 — NO RETURNS
- **Internal ID:** NO-RETURNS
- **Roster status:** Active utility/melee concept
- **Category:** Boomerang Club
- **Rarity:** Evolved
- **Slot:** Melee
- **Role:** A mid-range melee hybrid built around path prediction. The throw is visible, has a fixed arc, and leaves the player without a melee strike until it returns.
- **Core attack behaviour:** A short-range club has a normal swing and a charged returning throw. The thrown club follows a curved, visible path and can hit each opponent once.
- **Weapon Action:** Recall the club early along its current return lane. The recall does not home toward opponents and can be blocked by geometry.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A thick wooden club with a bright return ring and scuffed grip.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 130 — SOFT CLOSE
- **Internal ID:** SOFT-CLOSE
- **Roster status:** Active utility/melee concept
- **Category:** Padded Tonfa
- **Rarity:** Commonplace
- **Slot:** Melee
- **Role:** A dependable close-range defensive pick. The guard slows the user, covers only the front, and cannot be maintained indefinitely.
- **Core attack behaviour:** Compact paired tonfa deliver quick close-range strikes. Holding attack produces a three-hit sequence with increasing recovery, not increasing damage.
- **Weapon Action:** Enter a short guarded walk that reduces incoming melee knockback from the front. It does not reduce ranged damage.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A pair of padded training tonfa with clean angular guards.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 131 — PAPER SHIELD
- **Internal ID:** PAPER-SHIELD
- **Roster status:** Active utility/melee concept
- **Category:** Clipboard Shield
- **Rarity:** Altered
- **Slot:** Melee
- **Role:** A utility-minded duelling tool. The block is single-use per activation, directional, and has a clear crack animation.
- **Core attack behaviour:** The clipboard's reinforced edge delivers a short jab with modest reach. A clean hit briefly marks the target's direction on the user's HUD, not through walls.
- **Weapon Action:** Raise the clipboard to block one frontal melee strike or one low-damage projectile, then it breaks open into recovery.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A reinforced field clipboard with paper tabs and a transparent status window.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 132 — GARDEN VARIETY
- **Internal ID:** GARDEN-VARIETY
- **Roster status:** Active utility/melee concept
- **Category:** Pruning Shears
- **Rarity:** Commonplace
- **Slot:** Melee
- **Role:** A nimble close-range option. The hop has fixed distance and landing recovery; the attack itself remains short-ranged.
- **Core attack behaviour:** A quick snipping attack has very short reach and a crisp, fast recovery. It is strongest when used between movement bursts, not as a sustained combo.
- **Weapon Action:** Make a short forward hop with the shears closed. The hop deals no damage and can cross small floor hazards, but not gaps or barriers.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** Oversized garden shears with bright handles and a spring-loaded hinge.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 133 — MILESTONE
- **Internal ID:** MILESTONE
- **Roster status:** Active utility/melee concept
- **Category:** Surveyor's Pick
- **Rarity:** Altered
- **Slot:** Melee
- **Role:** A positional melee tool that rewards planning. The marker is visible, expires quickly, and the pull is small and never affects the target.
- **Core attack behaviour:** A sturdy pick has a slow downward strike with a narrow impact zone. Hitting a marked floor tile grants a brief movement-speed reset, not bonus damage.
- **Weapon Action:** Tap the ground to place a temporary personal marker. The next successful hit near that marker pulls the user a small step toward it after the hit resolves.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A surveyor's pick with a luminous measurement strip and compact head.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 134 — GOOD GRIP
- **Internal ID:** GOOD-GRIP
- **Roster status:** Active utility/melee concept
- **Category:** Climbing Gloves
- **Rarity:** Evolved
- **Slot:** Melee
- **Role:** A wall-route specialist. Only tagged climbable surfaces work; the grip is short, visible, and leaves the player stationary relative to the wall.
- **Core attack behaviour:** Gloved punches have short reach but almost no swing recovery. A hit does not interrupt an opponent's movement, so the player must maintain contact.
- **Weapon Action:** Grip a valid wall for a brief moment, allowing a controlled sideways shuffle before dropping. The player cannot attack while gripping.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** Chunky climbing gloves with rubber palms and bright knuckle pads.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 135 — THE PEACEMAKER
- **Internal ID:** THE-PEACEMAKER
- **Roster status:** Active utility/melee concept
- **Category:** Foam Mallet
- **Rarity:** Commonplace
- **Slot:** Melee
- **Role:** A close-range spacing tool for disengaging. The buffer is small, temporary, and does not protect from gunfire or stop opponents from leaving.
- **Core attack behaviour:** A soft mallet delivers a broad, low-damage swing. It pushes opponents slightly but never launches them or interrupts their weapon actions.
- **Weapon Action:** Plant a foam barrier marker that creates a short-lived no-melee buffer zone around the user. Ranged attacks pass through normally.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A bright toy-like foam mallet with a sturdy grip and oversized head.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 136 — BACKSTAGE PASS
- **Internal ID:** BACKSTAGE-PASS
- **Roster status:** Active utility/melee concept
- **Category:** Stage Cane
- **Rarity:** Altered
- **Slot:** Melee
- **Role:** A chase-and-route melee choice. The directional hint is brief and local; the vault is fixed and has a landing recovery.
- **Core attack behaviour:** A cane has a quick hook-swing with moderate reach. A successful hit on a moving opponent briefly reveals their direction to the user only.
- **Weapon Action:** Vault over a low obstacle with a short cane-assisted hop. The action cannot target or pull opponents.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A polished stage cane with a curved handle and hidden telescoping sections.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 137 — HOLD THE DOOR
- **Internal ID:** HOLD-THE-DOOR
- **Roster status:** Active utility/melee concept
- **Category:** Door Ram
- **Rarity:** Evolved
- **Slot:** Melee
- **Role:** A frontline anchor for objective modes. It does not grant invulnerability, blocks no bullets, and is vulnerable from the sides.
- **Core attack behaviour:** A heavy ram strike has a long wind-up and a broad frontal impact. It deals consistent damage but has no bonus against grouped opponents.
- **Weapon Action:** Brace the ram horizontally to resist one incoming push and hold position briefly. The brace ends if the player turns too far.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A compact padded breaching ram with two handles and a clear brace indicator.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 138 — SPARE PARTS
- **Internal ID:** SPARE-PARTS
- **Roster status:** Active utility/melee concept
- **Category:** Wrench Pair
- **Rarity:** Commonplace
- **Slot:** Melee
- **Role:** A support melee tool with a real trade-off in direct combat. Repair requires proximity and a brief stationary action; repaired objects remain destructible.
- **Core attack behaviour:** Two wrenches deliver alternating strikes. A hit against an opponent's active deployable does extra object damage but normal player damage.
- **Weapon Action:** Quickly repair one friendly temporary deployable in reach, restoring a small amount of its durability. Cannot repair players or permanent objectives.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** Two oversized workshop wrenches clipped together with a small repair light.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 139 — CROWN JEWEL
- **Internal ID:** CROWN-JEWEL
- **Roster status:** Active utility/melee concept
- **Category:** Ceremonial Scepter
- **Rarity:** Ascendant
- **Slot:** Melee
- **Role:** A team-tempo melee with a contestable pickup. Only one burst can be granted, the marker is visible to both teams, and the boost cannot stack.
- **Core attack behaviour:** The scepter's basic strike is deliberately plain: a measured, medium-reach swing with consistent recovery and no hidden damage bonus.
- **Weapon Action:** Place a visible crown marker on the floor. For a short time, the first friendly player to touch it gains a brief movement burst; the owner can claim it too. Opponents can contest the marker by touching it first.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** An elegant geometric scepter with a floating crown-shaped head and restrained light accents.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 140 — FINAL NOTICE
- **Internal ID:** FINAL-NOTICE
- **Roster status:** Active utility/melee concept
- **Category:** Judgment Gavel
- **Rarity:** Evolved
- **Slot:** Melee
- **Role:** A high-commitment finisher-style melee without execution effects. The ring is a warning and timing tool only; opponents can leave before the next strike.
- **Core attack behaviour:** A heavy gavel has a short, powerful swing with a clear wind-up. Landing a hit ends the player's current sprint, so the weapon rewards choosing the moment rather than chasing endlessly.
- **Weapon Action:** Strike a nearby surface to create a brief circular warning ring. Opponents inside hear and see the ring, but it deals no damage and gives the user no automatic hit.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A judge's gavel scaled into a compact combat tool, with a crisp wooden impact sound.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 141 — GOOD ENOUGH
- **Internal ID:** GOOD-ENOUGH
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Burst Carbine
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** A dependable mid-range primary with a timing skill ceiling. The delayed burst is slower overall and can be baited.
- **Core mechanic:** A two-shot burst rifle with a tight first shot and a slightly wider second shot. The fixed pattern rewards controlled tracking rather than holding the trigger.
- **Weapon Action:** Delay the next burst by a fraction of a second, letting the player correct aim before the second shot. The delay is visible in the chamber indicator.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A compact utilitarian carbine with a two-stage chamber light.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 142 — OUT OF OFFICE
- **Internal ID:** OUT-OF-OFFICE
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Compact SMG
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** An aggressive entry primary that rewards short bursts. The action is limited to the opening portion of one magazine and has clear feedback.
- **Core mechanic:** A close-range SMG starts with a tight opening burst, then gradually widens during sustained fire. A short release resets the spread.
- **Weapon Action:** The next magazine begins with a short, fixed strafe window during which firing spread is unchanged by movement. It does not increase movement speed or damage.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A squared SMG with a flip-down stock and a small out-of-office status tab.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 143 — SQUARE ONE
- **Internal ID:** SQUARE-ONE
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Semi-Auto Rifle
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** A rhythm-based precision primary. The beat is readable to opponents through audio and animation; the action cannot be spammed.
- **Core mechanic:** Each shot has a consistent cadence. Firing exactly on the weapon's visible beat keeps recoil predictable; firing early increases kick but not damage.
- **Weapon Action:** Reset the cadence indicator instantly, allowing the next shot to begin from the base rhythm. It does not reduce recoil beyond normal timing.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A clean rifle with a rotating four-step timing dial.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 144 — TWO-WAY STREET
- **Internal ID:** TWO-WAY-STREET
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Twin-Barrel Sidearm
- **Rarity:** Extraordinary
- **Slot:** Primary
- **Role:** A versatile secondary sidearm. The action changes recoil sequence, not damage, and the barrel state is visible.
- **Core mechanic:** Two barrels fire in alternating order. Each barrel has its own small recoil pattern, so alternating shots stay controllable while repeated same-side shots climb more.
- **Weapon Action:** Choose which barrel fires next and lock the order for the next two shots.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A compact twin-barrel pistol with distinct left/right chamber windows.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 145 — MIDDLE MANAGEMENT
- **Internal ID:** MIDDLE-MANAGEMENT
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Support Carbine
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** A team-oriented primary for coordinated pushes. Information is approximate, requires a recent hit, and never tracks movement.
- **Core mechanic:** A steady carbine deals standard damage. Hits on an opponent briefly show a small directional tick to nearby teammates, without revealing exact position through walls.
- **Weapon Action:** Send a short team ping toward the last opponent hit. The ping marks only the approximate direction and expires quickly.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A practical carbine with a small team-status display above the receiver.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 146 — SLOW NEWS
- **Internal ID:** SLOW-NEWS
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Precision Repeater
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** A patient mid-range primary with a deliberate fallback. The quick shot is visibly less accurate and cannot match the normal shot's range.
- **Core mechanic:** A low-rate rifle fires a clean, accurate shot followed by a slower cycling animation. The next shot becomes available sooner if the player remains aimed at the same lane, not the same opponent.
- **Weapon Action:** Cancel the current cycle and take a quick, weaker shot with increased spread.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A long, slim repeater with a sliding paper-strip chamber indicator.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 147 — PUNCHLINE
- **Internal ID:** PUNCHLINE
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Impact Pistol
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** A close-range secondary with spacing control. The push is modest, predictable, and the hop consumes a loaded round.
- **Core mechanic:** A heavy sidearm fires a short-range concussive round. Damage falls sharply with distance, while the impact has a small consistent push.
- **Weapon Action:** Fire a utility round that deals no damage but gives the user a small backward hop.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A chunky pistol with a broad muzzle shroud and a recoil indicator.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 148 — DETOUR
- **Internal ID:** DETOUR
- **Roster status:** Active launch firearm
- **Category:** Arc Launcher
- **Rarity:** Extraordinary
- **Slot:** Primary
- **Role:** A route-prediction primary. The altered path is previewed, has a limited bend, and can be dodged or blocked.
- **Core mechanic:** Fires a slow, visible projectile that follows a shallow curve. Direct hits deal damage; near misses do not create a blast.
- **Weapon Action:** Set the next projectile to take a wider arc around one visible corner marker, but it still cannot pass through walls.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A compact launcher with a curved guide rail and a bright trajectory lens.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 149 — WELL READ
- **Internal ID:** WELL-READ
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Burst Marksman
- **Rarity:** Altered
- **Slot:** Primary
- **Role:** A deliberate precision primary with manual timing. Holding the shot costs tempo and opponents can reposition during the delay.
- **Core mechanic:** A three-shot marksman sequence has a fixed vertical spacing. The player can fire each shot separately, but the cadence tightens when all three are fired on beat.
- **Weapon Action:** Hold the next shot for a brief moment after firing, then release it manually. The stored shot keeps its original aim direction and does not track.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A slim marksman rifle with three stacked chamber lights.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 150 — CASH ONLY
- **Internal ID:** CASH-ONLY
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Heavy Sidearm
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** A high-commitment secondary for players who plan reload timing. The action can waste ammunition and has no combat bonus.
- **Core mechanic:** A single-shot hand cannon has a large impact and a slow reload. Its final round is not stronger; the weapon's identity is its reliable shot-to-shot rhythm.
- **Weapon Action:** Eject the remaining rounds to perform a short reload immediately, sacrificing any ammunition still loaded.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A blocky hand cannon with a visible single-row ammunition counter.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 151 — WINDOW SEAT
- **Internal ID:** WINDOW-SEAT
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Compact Shotgun
- **Rarity:** Commonplace
- **Slot:** Primary
- **Role:** A close-range primary with a team callout tool. The outline is visible to both teams and gives no wall penetration or damage bonus.
- **Core mechanic:** A short-range shotgun fires a narrow horizontal pellet fan. Turning during the shot widens the fan slightly, rewarding steady aim.
- **Weapon Action:** Fire a low-power utility shell that briefly marks the impact surface with a bright window-shaped outline for teammates. It does not reveal opponents.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A compact shotgun with a rectangular muzzle and folding side grip.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 152 — NO COMMENT
- **Internal ID:** NO-COMMENT
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Silenced Marksman
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** A stealth-flavoured primary without invisibility. The action trades tempo for reduced shot cues and cannot hide the shooter's position after a hit.
- **Core mechanic:** A quiet semi-auto rifle has modest damage and a clear hit indicator. Its projectile trail is short but never fully invisible.
- **Weapon Action:** Suppress the next shot's visible tracer and impact sound at the cost of a longer firing delay. The hit remains visible to the target.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A matte marksman rifle with a simple integrated shroud and muted status light.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 153 — TRAFFIC JAM
- **Internal ID:** TRAFFIC-JAM
- **Roster status:** Active launch firearm
- **Category:** Scatter Launcher
- **Rarity:** Extraordinary
- **Slot:** Primary
- **Role:** A lane-pressure primary that chooses coverage or concentration. Projectiles are visible, slow, and individually avoidable.
- **Core mechanic:** Fires a cluster of slow foam-like impact rounds that spread slightly while travelling. Each projectile deals modest damage and has no lingering hazard.
- **Weapon Action:** Compress the next cluster into a tighter grouping with reduced total projectile count and a faster reload afterward.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A wide-bodied launcher with a folding cluster muzzle.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 154 — BETTER LUCK
- **Internal ID:** BETTER-LUCK
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Ricochet Sidearm
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** A trick-shot secondary. Only tagged surfaces reflect the projectile; the preview is approximate and the shot never homes.
- **Core mechanic:** A sidearm fires a single hard projectile that ricochets once from marked arena surfaces, losing damage after the bounce.
- **Weapon Action:** Choose the side of the next ricochet before firing. The bounce angle is previewed and cannot be changed after launch.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A polished sidearm with a rotating angle selector.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 155 — ON RECORD
- **Internal ID:** ON-RECORD
- **Roster status:** Active utility/melee concept
- **Category:** Combat Scanner
- **Rarity:** Ascendant
- **Slot:** Secondary
- **Role:** An information secondary for reading nearby fights. The reading expires quickly, has a limited radius, and can be confused by multiple simultaneous sounds.
- **Core mechanic:** A compact scanner has a weak emergency pulse that deals negligible damage and is not intended for duelling. Its main function is to record the direction of the last loud enemy action nearby.
- **Weapon Action:** Replay the latest directional reading as a short cone on the user's HUD. It reports direction only, not identity or exact location.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A handheld recorder with a spinning waveform display.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 156 — FRESH COAT
- **Internal ID:** FRESH-COAT
- **Roster status:** Active utility/melee concept
- **Category:** Paint Marker
- **Rarity:** Commonplace
- **Slot:** Secondary
- **Role:** A navigation and coordination secondary. It does not reveal enemies, block routes, or provide combat buffs; markings are temporary and visible to both teams.
- **Core mechanic:** Fires harmless paint markers that briefly colour a surface. Direct hits do not damage players.
- **Weapon Action:** Mark one surface with a team-coloured route stripe visible to allies. Weapon Action removes the oldest stripe and places a new one at the aim point.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A compact industrial paint marker with a bright canister and nozzle guard.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 157 — NARROW ESCAPE
- **Internal ID:** NARROW-ESCAPE
- **Roster status:** Active launch firearm
- **Category:** Compact Launcher
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** A timing-based primary for controlling a small patch of space. The projectile is slow and visible; the early burst is smaller and cannot pass through cover.
- **Core mechanic:** Fires a low-damage projectile that bursts into a small, short-lived ring on impact. The ring is a readable area-denial cue, not a persistent hazard.
- **Weapon Action:** Detonate the next projectile early while it is in open air, creating a smaller ring at its current position.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A compact launcher with a circular range gauge.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 158 — SAME PAGE
- **Internal ID:** SAME-PAGE
- **Roster status:** Active utility/melee concept
- **Category:** Team Relay
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** A coordination secondary for teams that split routes. The relay is visible and destructible, has limited range, and never reveals opponents.
- **Core mechanic:** Place a relay that shows nearby teammates the owner's current facing direction, but only while they are within a short radius.
- **Weapon Action:** Send a one-time regroup pulse that briefly displays the relay's location to allies. It gives no enemy information or movement bonus.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A folding map beacon with a simple arrow display.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 159 — FINE TUNING
- **Internal ID:** FINE-TUNING
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Precision Rifle
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** A precision primary that rewards understanding its recoil states. The action is announced by a visible selector and cannot improve damage or accuracy beyond the grounded baseline.
- **Core mechanic:** A semi-automatic rifle has two stable recoil states: grounded shots are steady, while airborne shots have a predictable upward kick. Damage is unchanged.
- **Weapon Action:** Lock the rifle into its airborne recoil profile for the next shot even while grounded, enabling a planned shot arc but not extra damage.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A precision rifle with a small two-position balance dial.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 160 — SPARE ROOM
- **Internal ID:** SPARE-ROOM
- **Roster status:** Active utility/melee concept
- **Category:** Deployable Launcher
- **Rarity:** Evolved
- **Slot:** Secondary
- **Role:** A vertical route tool. The platform is visible, destructible, and temporary; it cannot be placed through solid geometry or inside objectives.
- **Core mechanic:** Fires a puck that unfolds into a small one-way drop-through platform. Players can stand on it briefly, but it collapses after a short duration.
- **Weapon Action:** Fold the platform early to drop the user through it immediately. Other players standing on it are safely displaced to the nearest valid floor.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A compact construction launcher with a folding square platform.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 161 — BAD SIGNAL
- **Internal ID:** BAD-SIGNAL
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Pulse Sidearm
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** A disruption sidearm with limited combat impact. The effect is brief, non-disabling, and has strong visual feedback and cooldown.
- **Core mechanic:** A low-damage pulse sidearm briefly disrupts the target's HUD edge indicators on direct hit, without obscuring the centre of the screen or disabling controls.
- **Weapon Action:** Send a short pulse that removes the user's own HUD edge clutter for a moment, helping focus on a duel.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A small pulse pistol with a segmented signal bar.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 162 — DEADLINE
- **Internal ID:** DEADLINE
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Lever Rifle
- **Rarity:** Altered
- **Slot:** Primary
- **Role:** A deliberate mid-range primary. The faster shot is a trade-off and the recoil penalty is clearly indicated.
- **Core mechanic:** A lever-action rifle fires one accurate shot at a time. Cycling the lever manually between shots gives the player a stable firing rhythm.
- **Weapon Action:** Skip one lever cycle by ejecting the next round into the chamber early, but the following shot has increased recoil.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A classic lever rifle with a modern angular stock and exposed cycling lever.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 163 — PARKING FINE
- **Internal ID:** PARKING-FINE
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Tripod Carbine
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** A setup-oriented primary for holding angles. The rest is visible, stationary, and vulnerable to flanks; it does not increase damage.
- **Core mechanic:** A compact carbine has a folding foregrip. When the player briefly stops moving, the grip stabilizes the next shot; moving resets the benefit.
- **Weapon Action:** Deploy the grip against a nearby wall or floor edge to make a short, fixed firing rest. It improves recoil control only and can be left by moving.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A practical carbine with a folding three-point rest.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 164 — BETWEEN FRIENDS
- **Internal ID:** BETWEEN-FRIENDS
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Link Pistol
- **Rarity:** Altered
- **Slot:** Secondary
- **Role:** A support sidearm for managing team setups. It requires a placed friendly object, has no enemy tracking, and the link breaks at range.
- **Core mechanic:** A sidearm fires modest-damage shots. Hitting a friendly relay or marked teammate's nearby surface briefly refreshes the pistol's utility charge, not ammunition.
- **Weapon Action:** Link to one friendly deployable within range, showing its remaining lifetime on the user's HUD. It cannot extend that lifetime.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A compact pistol with a thin blue connection filament and status window.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 165 — LATE CHECKOUT
- **Internal ID:** LATE-CHECKOUT
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Automatic Rifle
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** A resource-management primary. The action does not create ammunition and requires planning; the reserve is capped and visible.
- **Core mechanic:** A full-auto rifle has a small, fixed magazine and fast reload. Reloading before the magazine is empty makes the next magazine start with one fewer round.
- **Weapon Action:** Begin a tactical reload immediately, but keep the current magazine's remaining rounds in reserve for the next reload.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A clean rifle with a split magazine counter and folding charging handle.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 166 — OPEN CIRCUIT
- **Internal ID:** OPEN-CIRCUIT
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Chain Pulse Rifle
- **Rarity:** Extraordinary
- **Slot:** Primary
- **Role:** A geometry-aware primary for pre-aimed lanes. The continuation path is fixed, visible, cannot bend around cover, and deals no bonus damage.
- **Core mechanic:** A pulse rifle fires a short burst. If the first shot hits a surface, the remaining pulses continue along a fixed shallow angle; if it hits an opponent, the burst stays on that line.
- **Weapon Action:** Flip the next burst's continuation angle left or right before firing.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A squared energy rifle with twin emitter rails and a simple angle switch.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

### Weapon 167 — THE LAST WORD
- **Internal ID:** THE-LAST-WORD
- **Roster status:** Archived firearm concept, not launch content
- **Category:** Precision Sidearm
- **Rarity:** Evolved
- **Slot:** Primary
- **Role:** A swap-combo secondary that rewards planning. The stored shot expires, retains its original aim direction, and cannot auto-fire or track.
- **Core mechanic:** A slow-firing sidearm has a clear, accurate first shot after switching to it. Subsequent shots use a slightly longer reset, keeping its opening advantage from becoming sustained superiority.
- **Weapon Action:** Store the next shot for up to a short window while swapping to the primary; switching back releases it only when the player fires.
- **Rules and counterplay:** All attack arcs, action ranges, timings, and active objects have readable cues. The weapon's central advantage is limited by its stated range, duration, recovery, or setup requirement; opponents can avoid, interrupt, or punish the commitment as described above.
- **Visual identity:** A refined sidearm with a single bright chamber indicator and a folding sight.
- **Prototype values:** Damage, range, timing, charges, recovery, object lifetime, and cooldown are TBD as applicable.
- **Status:** Accepted concept. Prototype values are TBD.

## 5A. Remaining Roster

All 167 launch weapon concepts are now defined. The 111–140 block is the dedicated Melee slot; 141–167 use Primary or Secondary according to the established slot rule.

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

## 10. Full-Roster Rarity and Default Presentation Audit

This section covers all **167 weapons**. Rarity presentation is part of each weapon's default model, materials, animation and effects. A player must see the weapon's tier without equipping a skin.

### 10.1 Rarity rules
- Rarity measures originality, execution, visual identity and mechanical distinctiveness, never raw damage, accuracy, fire rate or competitive superiority.
- The descending rarity distribution is a target, not a quota. A weak concept is redesigned or replaced; it is never promoted merely to fill a tier.
- Higher rarity means more craftsmanship and a more distinctive signature, not more visual noise.
- Effects must remain readable in first-person and at competitive distances. They cannot hide hitboxes, obscure opponents, disguise projectile paths or create misleading audio.
- Skins may replace or extend cosmetic features, but every base weapon already has its own rarity-appropriate finish and signature effect.

### 10.2 Default visual progression
| Tier | Base construction | Default effects |
|---|---|---|
| Commonplace | Satin metal, durable polymer, restrained paint | Simple mechanic indicator; minimal activation cue |
| Altered | Contrasting materials and distinctive accent details | Restrained emissive indicator; localized activation effect |
| Evolved | Layered premium materials and machined details | Animated mechanism; contained action trail or pulse |
| Ascendant | Bespoke material pairing and recognizable silhouette detail | Animated feature; custom action effect and brief aftermath |
| Extraordinary | Highly individual silhouette and signature moving component | Bespoke animated centerpiece; custom firing and action feedback |
| Singular | One-of-one construction and unique material language | Unique animated centerpiece, signature firing/action effects and dedicated inspect flourish |

### 10.3 Individual audit: all 167 weapons

Every entry below has an explicit rarity decision and a default presentation direction. These are design standards, not final rendered assets; each effect must be implemented and tested for competitive readability.

### 001 · TAXMAN
- **Rarity decision:** **Commonplace · Retain for now.** Versatile mid-range duelling built around sustained target pressure. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity must be developed around its assault rifle form and the compound interest mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Compound Interest** directly; **Collection Day** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 002 · POCKET ROCKET
- **Rarity decision:** **Commonplace · Retain for now.** Aggressive close-range movement combat. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity must be developed around its submachine gun form and the runaway mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Runaway** directly; **Hot Pursuit** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 003 · DOORBELL
- **Rarity decision:** **Commonplace · Retain for now.** Close-range combat and distance control. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity must be developed around its shotgun form and the knock knock mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Knock Knock** directly; **House Call** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 004 · LONG STORY
- **Rarity decision:** **Extraordinary · Retain for now.** Long-range precision and planned angle manipulation. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** a highly individual silhouette, premium material transitions and a signature moving component. Its physical identity must be developed around its sniper rifle form and the follow through mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a bespoke animated centerpiece, custom firing feedback and a distinctive action effect. The visual signature must communicate **Follow Through** directly; **Long Distance** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 005 · LOOSE CHANGE
- **Rarity decision:** **Commonplace · Retain for now.** Precision sidearm built around creative trick shots. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity must be developed around its pistol form and the spare change mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Spare Change** directly; **Make It Count** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 006 · THREE'S COMPANY
- **Rarity decision:** **Commonplace · Retain for now.** Mid-range burst control and firing-rhythm mastery. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity must be developed around its burst rifle form and the third shot mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Third Shot** directly; **Plus One** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 007 · LAWNMOWER
- **Rarity decision:** **Commonplace · Retain for now.** Sustained fire and mobile area pressure. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity must be developed around its light machine gun form and the spool up mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Spool Up** directly; **Grass Cutter** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 008 · RETURN TO SENDER
- **Rarity decision:** **Evolved · Retain for now.** Mid-range pressure, route prediction, and creative angle control. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity must be developed around its returning disc launcher form and the boomerang mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Boomerang** directly; **Forwarding Address** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 009 · THE RENTAL
- **Rarity decision:** **Altered · Retain for now.** Arena manipulation, creative movement, and team repositioning. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity must be developed around its utility launcher form and the temporary lease mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Temporary Lease** directly; **Change of Address** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 010 · BAD HABIT
- **Rarity decision:** **Altered · Retain for now.** High-impact close-to-mid-range sidearm. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity must be developed around its hand cannon form and the weapon identity mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Weapon identity** directly; **Recoil Therapy** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 011 · DEAD WEIGHT
- **Rarity decision:** **Altered · Retain for now.** Mid-range area pressure and timing-based combat. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity must be developed around its heavy launcher form and the weapon identity mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Weapon identity** directly; **Cut the Line** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 012 · BAD RECEPTION
- **Rarity decision:** **Evolved · Retain for now.** Mid-range duelling through controlled bursts and concealment of firing cues. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity must be developed around its pulse rifle form and the signal burst mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Signal Burst** directly; **Dead Air** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 013 · CALL WAITING
- **Rarity decision:** **Altered · Retain for now.** Precision mid-to-long-range combat with weapon-switch combos. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity must be developed around its charge rifle form and the charge and release mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Charge and Release** directly; **Call Waiting** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 014 · SHORT NOTICE
- **Rarity decision:** **Altered · Retain for now.** Precision combat and creative movement. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity must be developed around its repeater crossbow form and the split bolt mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Split Bolt** directly; **Express Delivery** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 015 · BAD NEIGHBOR
- **Rarity decision:** **Altered · Retain for now.** Mid-range setup and information control. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity must be developed around its nail driver form and the property damage mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Property Damage** directly; **Noise Complaint** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 016 · TAXI
- **Rarity decision:** **Commonplace · Retain for now.** Mid-range pressure and movement disruption. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity must be developed around its impact launcher form and the fare meter mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Fare Meter** directly; **Final Stop** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 017 · FALSE ALARM
- **Rarity decision:** **Altered · Retain for now.** Deception, distraction, and creating openings. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity must be developed around its signal launcher form and the wrong place, wrong time mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Wrong Place, Wrong Time** directly; **Panic Button** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 018 · SECOND OPINION
- **Rarity decision:** **Altered · Retain for now.** Mid-range duelling and deliberate shot timing. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity must be developed around its twin-barrel rifle form and the follow-up mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Follow-Up** directly; **Objection** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 019 · PAPER TRAIL
- **Rarity decision:** **Altered · Retain for now.** Route reading and punishing predictable movement. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity must be developed around its marker rifle form and the marked for later mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Marked For Later** directly; **Return Address** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 020 · WET FLOOR
- **Rarity decision:** **Evolved · Retain for now.** Area control, movement disruption, and route manipulation. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity must be developed around its pressure sprayer form and the slippery when wet mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Slippery When Wet** directly; **Mopping Service** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 021 · CROSSWALK
- **Rarity decision:** **Evolved · Retain for now.** Lane control and route denial. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity must be developed around its tactical rifle form and the right of way mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Right of Way** directly; **Road Closed** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 022 · LAST CALL
- **Rarity decision:** **Altered · Retain for now.** Close-range disruption and emergency spacing. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity must be developed around its sonic projector form and the bad connection mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Bad Connection** directly; **Hang Up** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 023 · TWO CENTS
- **Rarity decision:** **Commonplace · Retain for now.** Precision duelling and controlled firing rhythm. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity must be developed around its precision rifle form and the exact change mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Exact Change** directly; **My Two Cents** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 024 · OPEN HOUSE
- **Rarity decision:** **Evolved · Retain for now.** Temporary cover and defensive repositioning. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity must be developed around its deployable launcher form and the viewing appointment mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Viewing Appointment** directly; **Under New Management** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 025 · HOLD MUSIC
- **Rarity decision:** **Extraordinary · Retain for now.** Sustained pressure and target commitment. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** a highly individual silhouette, premium material transitions and a signature moving component. Its physical identity must be developed around its repeater form and the on the line mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a bespoke animated centerpiece, custom firing feedback and a distinctive action effect. The visual signature must communicate **On The Line** directly; **Please Stay On The Line** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 026 · SPLIT DECISION
- **Rarity decision:** **Altered · Retain for now.** Mid-range duelling with adaptable shot patterns. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity must be developed around its split-feed rifle form and the two minds mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Two Minds** directly; **Make Your Choice** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 027 · SHORTCUT
- **Rarity decision:** **Extraordinary · Retain for now.** Team movement and route creation. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** a highly individual silhouette, premium material transitions and a signature moving component. Its physical identity must be developed around its traversal launcher form and the no walking required mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a bespoke animated centerpiece, custom firing feedback and a distinctive action effect. The visual signature must communicate **No Walking Required** directly; **Express Lane** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 028 · SLOW BURN
- **Rarity decision:** **Altered · Retain for now.** Sustained mid-range pressure and heat management. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity must be developed around its heat rifle form and the getting warmer mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Getting Warmer** directly; **Let It Breathe** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 029 · WRONG NUMBER
- **Rarity decision:** **Altered · Retain for now.** Distraction and information manipulation. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity must be developed around its signal pistol form and the you've got mail mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **You've Got Mail** directly; **Call Back** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 030 · NO REFUNDS
- **Rarity decision:** **Evolved · Retain for now.** High-impact precision duelling. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity must be developed around its heavy revolver form and the final sale mechanic. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Final Sale** directly; **No Takebacks** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 031 · OVERDUE
- **Rarity decision:** **Commonplace · Retain for now.** Deliberate mid-range duelling that rewards maintaining pressure on one opponent. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a compact marksman rifle with a numbered mechanical counter that advances with consecutive hits.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Interest Rate** directly; **Final Notice** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 032 · SPARE KEY
- **Rarity decision:** **Singular · Retain for now.** Creating temporary alternate routes through an arena. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** one-of-one construction and a material language unique to this weapon. Its physical identity is built around a chunky locksmith's tool that unfolds into two bright, rectangular doorframes.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a unique animated centerpiece, signature firing/action effects and a dedicated inspect flourish. The visual signature must communicate **Open Door Policy** directly; **Deadbolt** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 033 · BOUNCER
- **Rarity decision:** **Altered · Retain for now.** Close-range damage with deliberate knockback positioning. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a short, sturdy shotgun with a spring-loaded stock and oversized pressure gauge.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **House Rules** directly; **Out You Go** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 034 · GOOD MEASURE
- **Rarity decision:** **Commonplace · Retain for now.** Precision duelling at a deliberately chosen engagement distance. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a long, clean rifle with a measuring-wheel motif and a sliding distance scale.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Just Right** directly; **Take Measure** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 035 · OFF THE CLOCK
- **Rarity decision:** **Singular · Retain for now.** Misdirection and drawing attention away from a real rotation. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** one-of-one construction and a material language unique to this weapon. Its physical identity is built around a pocket-sized time recorder with a translucent projected runner.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a unique animated centerpiece, signature firing/action effects and a dedicated inspect flourish. The visual signature must communicate **Clock Out** directly; **Early Finish** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 036 · BACKFILL
- **Rarity decision:** **Commonplace · Retain for now.** Reliable mid-range damage with a tactical reserve-round decision. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a practical rifle with a visible single-round side chamber and a mechanical loading indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **One in the Chamber** directly; **Move It Up** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 037 · SIDE EYE
- **Rarity decision:** **Ascendant · Retain for now.** Checking exposed lanes without revealing opponents through walls. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a compact surveyor's monocular with a swivelling lens and a small side display.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Peripheral Vision** directly; **Look Alive** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 038 · TIN CAN
- **Rarity decision:** **Altered · Retain for now.** Predictive area pressure using heavy, readable bouncing shots. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a dented canister launcher with a rattling projectile and clear bounce sparks.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Empty Return** directly; **One More Time** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 039 · HOME RUN
- **Rarity decision:** **Evolved · Retain for now.** Long-lane pressure that rewards predicting where an opponent will be. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a sporting launcher with a padded barrel and oversized rotating ball chamber.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Long Drive** directly; **Curveball** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 040 · GUEST LIST
- **Rarity decision:** **Altered · Retain for now.** Reading a doorway or narrow route without giving permanent wall information. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a small brass entry plate with a guest-counter display.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **RSVP** directly; **Read It Back** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 041 · DOUBLE PARKED
- **Rarity decision:** **Commonplace · Retain for now.** Close-to-mid-range pressure through alternating shots. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a mismatched pair of compact pistols with separate ammunition counters.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Alternating Ticket** directly; **Both Lanes** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 042 · STATIC CLING
- **Rarity decision:** **Singular · Retain for now.** Briefly changing the routes available on metal arena surfaces. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** one-of-one construction and a material language unique to this weapon. Its physical identity is built around a magnetic tool with two bright clamp-shaped pads and a pulsing polarity indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a unique animated centerpiece, signature firing/action effects and a dedicated inspect flourish. The visual signature must communicate **Stick Around** directly; **Let Go** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 043 · PAYPHONE
- **Rarity decision:** **Altered · Retain for now.** Helping teammates coordinate positions without revealing enemies. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a portable payphone handset with a cable spool and glowing connection lights.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Local Line** directly; **Switchboard** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 044 · GOOD GRIEF
- **Rarity decision:** **Commonplace · Retain for now.** Sustained close-to-mid-range pressure that changes opponent positioning. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a bulky repeater with a pressure gauge and oversized recoil springs.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Heavy Feelings** directly; **Let It Out** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 045 · CLEAN BREAK
- **Rarity decision:** **Commonplace · Retain for now.** Close-range burst damage with a meaningful two-shell decision. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a sturdy side-by-side shotgun with two differently marked barrels and a large break-open hinge.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Two Different Stories** directly; **Double Down** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 046 · SUNDAY DRIVER
- **Rarity decision:** **Commonplace · Retain for now.** Mobile mid-range combat with a distinctive movement-and-fire rhythm. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a clean, slightly retro carbine with a speedometer-style spread display.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Cruise Control** directly; **Easy Does It** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 047 · FINE PRINT
- **Rarity decision:** **Commonplace · Retain for now.** Rewarding varied, deliberate shot placement without relying on inconsistent avatar anatomy. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a slim rifle with a paper-feed slot and a three-part clause display.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Different Paragraph** directly; **Read the Terms** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 048 · BREADCRUMBS
- **Rarity decision:** **Altered · Retain for now.** Giving a team a simple, shared route through a complicated arena. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a compact marker dispenser that fires small luminous breadcrumb discs.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Trail Mix** directly; **Sweep Up** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 049 · HIGH HORSE
- **Rarity decision:** **Evolved · Retain for now.** Aerial combat with a deliberate risk-reward for leaving cover. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a tall launcher with a horse-head sight and a visible altitude gauge.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Above Yourself** directly; **Come Down to Earth** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 050 · TAKE A NUMBER
- **Rarity decision:** **Ascendant · Retain for now.** Coordinating a controlled team rotation through a dangerous lane. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a portable ticket dispenser with numbered lights and a little flip display.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Your Turn** directly; **Next Please** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 051 · COLD SHOULDER
- **Rarity decision:** **Commonplace · Retain for now.** Accurate follow-up fire against a target who keeps exposing the same angle. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a narrow precision repeater with a frost-coloured barrel shroud and a small focus indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Same Again** directly; **Turn Away** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 052 · DO NOT DISTURB
- **Rarity decision:** **Ascendant · Retain for now.** Temporarily slowing incoming projectile pressure to create a repositioning window. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a small hotel-style projector with a translucent circular field and a hanging DO NOT DISTURB sign.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Quiet Zone** directly; **Check Out** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 053 · DOUBLE TAKE
- **Rarity decision:** **Ascendant · Retain for now.** Mid-range pressure through delayed, predictable follow-up shots. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a twin-chamber rifle with a split timing display and a distinctive double-click sound.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Echo Shot** directly; **Save It** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 054 · LOST PROPERTY
- **Rarity decision:** **Altered · Retain for now.** Weapon-pickup awareness. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a handheld lost-property scanner with a ticket slot and blinking locator light.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Claim Ticket** directly; **Found It** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 055 · BAD TIMING
- **Rarity decision:** **Commonplace · Retain for now.** Rhythm-based sustained damage with a deliberate firing pattern. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a boxy rifle with a metronome-like side indicator and a mechanical click before each pause.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Wrong Moment** directly; **Skip the Beat** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 056 · HUSH MONEY
- **Rarity decision:** **Ascendant · Retain for now.** Sound management for a temporary team rotation or defensive hold. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a compact audio mixer with a padded speaker dish and a moving sound-level meter.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Keep It Down** directly; **Loose Lips** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 057 · LAST RESORT
- **Rarity decision:** **Commonplace · Retain for now.** High-stakes precision shooting with a clearly signalled final round. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around an oversized heavy pistol with a bright final-round indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **One Left** directly; **Make It Count** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 058 · OPEN SECRET
- **Rarity decision:** **Altered · Retain for now.** Helping separated teammates regroup without providing enemy intelligence. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a clean signal lantern with a circular team display and a bright regroup pulse.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **All Together** directly; **Roll Call** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 059 · SHORT FUSE
- **Rarity decision:** **Ascendant · Retain for now.** Area pressure through multiple visible, short-lived impact charges. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a compact launcher with bright fuse caps and a visible charge counter.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Stick Around** directly; **All at Once** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 060 · THE USUAL
- **Rarity decision:** **Commonplace · Retain for now.** Flexible mid-range damage that rewards switching between two firing rhythms. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a practical rifle with a rotating selector and two distinct chamber indicators.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Same Order** directly; **Change It Up** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 061 · BAD PENNY
- **Rarity decision:** **Commonplace · Retain for now.** Close-to-mid-range damage with a distinctive returning firing rhythm. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a chunky pistol with a coin-shaped burst counter that flips after each trigger pull.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Turns Up Again** directly; **Spend It** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 062 · MILE MARKER
- **Rarity decision:** **Altered · Retain for now.** Setting a clear team rally point and guiding rotations. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a fold-out survey marker with a rotating arrow and bright map-pin head.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **You Are Here** directly; **Move the Pin** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 063 · SQUARE DEAL
- **Rarity decision:** **Commonplace · Retain for now.** Rewarding clean, deliberate shots with a stable firing cycle. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a squared-off rifle with a clean alignment sight and a small balance level.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Fair and Square** directly; **Draw a Line** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 064 · BULLPEN
- **Rarity decision:** **Ascendant · Retain for now.** Close-range damage with a commitment-based firing stance. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a broad, squared shotgun with a flip-out foregrip and a stance indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Hold the Line** directly; **Step Up** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 065 · PAPER CUT
- **Rarity decision:** **Commonplace · Retain for now.** Sustained precision pressure through a readable shot cadence. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a slim paper-feed rifle with a folding sight and crisp stamping audio.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Thin Margin** directly; **Fold Here** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 066 · PARKING METER
- **Rarity decision:** **Altered · Retain for now.** Temporarily claiming a small piece of arena space for a planned hold. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a comically serious parking meter with a glowing circular timer and striped base.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Paid Time** directly; **Expired** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 067 · SLOW CLAP
- **Rarity decision:** **Commonplace · Retain for now.** Mid-range damage that rewards a measured trigger rhythm. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a clean semi-auto rifle with a small tempo dial and paired sound ports.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Build the Applause** directly; **Encore** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 068 · BACKUP PLAN
- **Rarity decision:** **Singular · Retain for now.** Giving a player one planned fallback point during a push. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** one-of-one construction and a material language unique to this weapon. Its physical identity is built around a compact emergency marker with a folding antenna and a clear return countdown.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a unique animated centerpiece, signature firing/action effects and a dedicated inspect flourish. The visual signature must communicate **Just in Case** directly; **Cancel the Plan** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 069 · WIDE OPEN
- **Rarity decision:** **Commonplace · Retain for now.** Close-range damage across a broad horizontal lane. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a broad-barrel shotgun with a fan-shaped muzzle shroud and a two-pattern selector.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Open Invitation** directly; **Close the Gap** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 070 · DEAD CERT
- **Rarity decision:** **Altered · Retain for now.** Long-range precision with a deliberate commitment after each shot. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a classic, clean bolt-action rifle with a large exposed bolt and paper-seal chamber indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Signed and Sealed** directly; **Hold the Paper** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 071 · RED TAPE
- **Rarity decision:** **Altered · Retain for now.** Warning teammates when an opponent crosses a chosen route. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a red spool tool with a bright ribbon-like sensor line and a warning flag.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Restricted Area** directly; **Re-route** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 072 · HARD RESET
- **Rarity decision:** **Extraordinary · Retain for now.** Giving players precise control over momentum during complex jumps and movement routes. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** a highly individual silhouette, premium material transitions and a signature moving component. Its physical identity is built around a small industrial controller with a large red reset switch and a velocity display.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a bespoke animated centerpiece, custom firing feedback and a distinctive action effect. The visual signature must communicate **Full Stop** directly; **Reboot** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 073 · FIRST CLASS
- **Rarity decision:** **Commonplace · Retain for now.** Dependable close-to-mid-range damage with a controlled magazine economy. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a compact, polished carbine with a boarding-pass magazine counter.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Priority Boarding** directly; **Upgrade Seat** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 074 · OVERHEAD
- **Rarity decision:** **Evolved · Retain for now.** Damage and pressure against opponents using predictable cover positions. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a compact lobber with an elevated barrel and a clear trajectory sight.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Coming Through** directly; **Short Route** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 075 · TIGHTROPE
- **Rarity decision:** **Singular · Retain for now.** Creating a temporary, risky crossing between two separated platforms. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** one-of-one construction and a material language unique to this weapon. Its physical identity is built around a spool launcher with bright anchor clamps and a taut cable indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a unique animated centerpiece, signature firing/action effects and a dedicated inspect flourish. The visual signature must communicate **Walk the Line** directly; **Safety Net** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 076 · TIME CARD
- **Rarity decision:** **Commonplace · Retain for now.** Timing-based mid-range damage with a predictable reload rhythm. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a work-clock themed rifle with a punch-card side panel and a rotating time dial.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Clock In** directly; **Overtime** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 077 · SPOT CHECK
- **Rarity decision:** **Commonplace · Retain for now.** Mid-range damage that rewards controlled bursts at a chosen target. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a compact inspection-style rifle with a four-light burst counter.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Inspection** directly; **Second Look** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 078 · LATCHKEY
- **Rarity decision:** **Extraordinary · Retain for now.** Temporarily changing access through designated arena doors and gates. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** a highly individual silhouette, premium material transitions and a signature moving component. Its physical identity is built around a large electronic key fob with a flip-out metal key and a simple lock display.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a bespoke animated centerpiece, custom firing feedback and a distinctive action effect. The visual signature must communicate **Your Way In** directly; **Lock Up** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 079 · FENDER BENDER
- **Rarity decision:** **Ascendant · Retain for now.** Close-range damage and deliberate displacement. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a compact industrial blaster with a rubber bumper muzzle and a reverse-light indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Bumper to Bumper** directly; **Reverse Gear** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 080 · GOOD SPORT
- **Rarity decision:** **Altered · Retain for now.** Mid-range damage through predictable bouncing and catching opportunities. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a playful launcher with a padded cup muzzle and a ball-shaped chamber.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Fair Play** directly; **Catch and Release** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 081 · NIGHTCAP
- **Rarity decision:** **Commonplace · Retain for now.** Close-range damage with a deliberate last-shell decision. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a short shotgun with a flip-up chamber light and a dark polished receiver.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Lights Out** directly; **One for the Road** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 082 · TALLY HO
- **Rarity decision:** **Commonplace · Retain for now.** Sustained damage with an ammunition-counting mechanic. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a compact belt-fed LMG with a rotating tally counter and visible feed belt.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Keep Score** directly; **Make It Even** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 083 · STATIC SHOCK
- **Rarity decision:** **Ascendant · Retain for now.** Mid-range damage against grouped opponents without automatic chain targeting. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around an insulated rifle with a visible coil and a charge meter.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Charge Transfer** directly; **Ground Wire** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 084 · QUIET HOURS
- **Rarity decision:** **Altered · Retain for now.** Helping a team coordinate a temporary hold without revealing enemy positions. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a folding desk lamp with a circular team-status display.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Closed for the Night** directly; **Lights On** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 085 · BLIND DATE
- **Rarity decision:** **Commonplace · Retain for now.** Close-range damage through controlled hip-fire and a risky aiming trade-off. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a compact rifle with a two-position sight and a bright mode indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **No Introductions** directly; **Make It Official** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 086 · HIGH BEAMS
- **Rarity decision:** **Altered · Retain for now.** Making dark or visually cluttered corners easier for teammates to inspect. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a compact headlamp-style launcher with twin adjustable reflectors.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Full Visibility** directly; **Dip the Lights** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 087 · HARD COPY
- **Rarity decision:** **Commonplace · Retain for now.** Long-range damage through a deliberate, repeatable shot pattern. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a long precision rifle with a twin-feed receiver and a carbon-paper chamber window.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Carbon Copy** directly; **Duplicate** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 088 · BOTTOM LINE
- **Rarity decision:** **Commonplace · Retain for now.** Mid-range damage with a firm commitment to finishing a magazine. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a heavy rifle with a large descending magazine gauge and a squared receiver.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **No Negotiation** directly; **Final Offer** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 089 · UNDERSTUDY
- **Rarity decision:** **Ascendant · Retain for now.** Creating a brief visual distraction during a rotation. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a slim projector with a folding theatre-mask lens and a pale hologram.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Stand-In** directly; **Take the Stage** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 090 · QUICK FIX
- **Rarity decision:** **Altered · Retain for now.** Restoring a damaged friendly deployable so a team can keep its setup. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a compact repair tool with a folding clamp and a visible service meter.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Patch Job** directly; **Temporary Support** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 091 · HEADCOUNT
- **Rarity decision:** **Ascendant · Retain for now.** Precision damage with a clear reward for changing targets rather than tunnel vision. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a precision rifle with a numbered rotating target counter and a clean confirmation light.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Roll Call** directly; **Present** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 092 · LATE FEE
- **Rarity decision:** **Commonplace · Retain for now.** Close-range damage that rewards patient timing rather than rapid follow-up. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a pump shotgun with a receipt-like cycle indicator and a chunky sliding fore-end.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Payment Due** directly; **Grace Period** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 093 · PIN DROP
- **Rarity decision:** **Evolved · Retain for now.** Giving teammates a precise shared destination for a coordinated push. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a small survey pin launcher with a bright pinhead and folding rangefinder.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Mark the Spot** directly; **Pull the Pin** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 094 · SAFE BET
- **Rarity decision:** **Commonplace · Retain for now.** Consistent mid-range damage with a predictable risk-reward shot. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a clean hand cannon with a three-position cylinder display and a small card-suit indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **House Edge** directly; **Double or Nothing** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 095 · BACK CHAT
- **Rarity decision:** **Ascendant · Retain for now.** Giving a team a short warning when opponents pressure a defended position. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a wall-mounted intercom puck with a small speaker grille and red indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Talk Back** directly; **Repeat That** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 096 · ALL CLEAR
- **Rarity decision:** **Altered · Retain for now.** Removing temporary arena clutter and opening a route for teammates. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a compact industrial sweeper with a rotating brush head and a clean status lamp.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Sweep Through** directly; **Leave Nothing** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 097 · BIG PICTURE
- **Rarity decision:** **Evolved · Retain for now.** Mid-range damage with a deliberate wide-to-tight shot sequence. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a boxy rifle with a three-frame display and a sliding lens assembly.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Frame by Frame** directly; **Zoom Out** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 098 · SMALL TALK
- **Rarity decision:** **Commonplace · Retain for now.** Close-range damage with a short, controlled firing window. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a tiny SMG with a folding stock and a small conversation-bubble heat indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Conversation Starter** directly; **Change the Subject** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 099 · ON THE HOUSE
- **Rarity decision:** **Ascendant · Retain for now.** Creating a one-use launch opportunity for a teammate. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a small folding hospitality mat with a bright arrow and spring-loaded base.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Complimentary Ride** directly; **No Charge** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 100 · OVERBOOKED
- **Rarity decision:** **Evolved · Retain for now.** Close-range damage with a riskier, overfilled firing mode. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a bulky shotgun with an over-capacity shell window and a red FULL sign.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **No Vacancies** directly; **Squeeze In** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 101 · ROLL CALL
- **Rarity decision:** **Altered · Retain for now.** Helping a scattered team synchronise a push. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a compact field clipboard with a row of illuminated team slots.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Present and Accounted For** directly; **Dismissed** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 102 · HOUSE RULES
- **Rarity decision:** **Altered · Retain for now.** Reliable damage when defending a clearly chosen angle. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a compact carbine with a folding floor marker and a simple rulebook-style selector.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Stay in Your Lane** directly; **New Rule** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 103 · NO SHOW
- **Rarity decision:** **Extraordinary · Retain for now.** Precision damage with a delayed firing commitment. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** a highly individual silhouette, premium material transitions and a signature moving component. Its physical identity is built around a long rifle with a clock-face chamber and a sliding appointment marker.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a bespoke animated centerpiece, custom firing feedback and a distinctive action effect. The visual signature must communicate **Missed Appointment** directly; **Reschedule** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 104 · NIGHT OWL
- **Rarity decision:** **Ascendant · Retain for now.** Improving visibility through smoke, shadows, and visual clutter without revealing hidden opponents. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a fold-out visor tool with twin green lenses and a compact battery display.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Late Shift** directly; **Dim the Screen** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 105 · DOUBLE SHIFT
- **Rarity decision:** **Evolved · Retain for now.** Mid-range damage with a deliberate choice between two ammunition feeds. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a clean rifle with two visible feed tubes and a rotating shift selector.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Two Jobs** directly; **Swap Shifts** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 106 · OPEN TAB
- **Rarity decision:** **Altered · Retain for now.** Close-range damage through a controlled sequence of delayed follow-up shots. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a compact sidearm with a two-part chamber and a small running-total display.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Put It on My Tab** directly; **Settle Up** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 107 · DEAD END
- **Rarity decision:** **Ascendant · Retain for now.** Temporarily closing a narrow passage to force a different rotation. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a folding road barrier with reflective stripes and a large red stop panel.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Roadblock** directly; **Open Passage** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 108 · BAIL OUT
- **Rarity decision:** **Ascendant · Retain for now.** A single, deliberate escape option when a player commits too far into a fight. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a compact safety harness launcher with a bright cord spool and a countdown light.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Exit Strategy** directly; **Pull the Cord** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 109 · SIDE DISH
- **Rarity decision:** **Ascendant · Retain for now.** Mid-range damage with a secondary projectile that changes the main shot's path. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a compact launcher with twin offset barrels and a rotating side selector.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Comes With It** directly; **Swap Sides** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 110 · CLEAN SLATE
- **Rarity decision:** **Ascendant · Retain for now.** Clearing a limited set of temporary movement or information effects from the user. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a clean, white handheld scanner with a sweeping blue status bar.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Start Fresh** directly; **Wipe Down** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 111 · DOORJAM
- **Rarity decision:** **Altered · Retain for now.** A readable close-range dueller with a push-and-punish rhythm. The brace is stationary, brief, and visible; opponents can wait it out or attack from another angle. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a squared maintenance baton with a sliding pressure gauge.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 112 · BELLHOP
- **Rarity decision:** **Commonplace · Retain for now.** A crowd-control melee pick for doorways. Its slow wind-up is easy to read and punish; the action is strongest when opponents group up. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a battered hard-shell travel case with reinforced corners and luggage tags.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 113 · PAPER TIGER
- **Rarity decision:** **Evolved · Retain for now.** A timing-focused dueller. The deflection only covers a small frontal window, cannot be held, and fails against attacks from the side or rear. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around an oversized lacquered folding fan with sharp geometric ribs and crisp snap audio.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 114 · LAST WORD
- **Rarity decision:** **Extraordinary · Retain for now.** A high-skill one-on-one weapon. The parry window is short, has a clear stance cue, and can be baited or approached from off-angle. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** a highly individual silhouette, premium material transitions and a signature moving component. Its physical identity is built around a clean single-edged practice saber with a bright guard and minimal ornament.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a bespoke animated centerpiece, custom firing feedback and a distinctive action effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 115 · SHOPPING CART
- **Rarity decision:** **Commonplace · Retain for now.** A mobile space-maker with modest reach. The shove is telegraphed, travels in a straight line, and cannot pass through walls. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around two bright steel cart handles connected by a folding hinge.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 116 · NIGHT SHIFT
- **Rarity decision:** **Commonplace · Retain for now.** A visibility-and-melee hybrid. The flash has limited range, does no damage, and briefly blooms the user's own screen too. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a chunky industrial torch with a rotating head and a warm beam.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 117 · THE BUTLER
- **Rarity decision:** **Altered · Retain for now.** A defensive melee choice for holding a tight corner. The guard is directional, brief, and does not stop bullets. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a polished oval serving tray with a discreet crest and scuffed underside.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 118 · BAD FORM
- **Rarity decision:** **Evolved · Retain for now.** A spacing specialist, not an auto-hit. The marked thrust is predictable, cannot turn after starting, and can be sidestepped. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a lightweight training foil with a ring guard and a bright tape-wrapped grip.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 119 · PICKUP STICKS
- **Rarity decision:** **Commonplace · Retain for now.** A tempo weapon for players who stay close. It cannot chain endlessly; the recovery cancel is limited and readable. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around two matte batons with contrasting end caps and a clean crossed animation.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 120 · THE BIG KNIT
- **Rarity decision:** **Evolved · Retain for now.** A lane-control melee weapon. The ripple is narrow, temporary, and avoidable by jumping or taking another route. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a comically oversized knitted mallet with a sturdy handle and stitched seams.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 121 · CLOSE CALL
- **Rarity decision:** **Evolved · Retain for now.** A mobility melee choice for route changes. The anchor must be visible and valid; the pull has a clear line and can be interrupted by geometry. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a compact rescue hook with a blunt safety tip and bright grip markings.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 122 · CLEAN SWEEP
- **Rarity decision:** **Commonplace · Retain for now.** An anti-setup melee tool. The clear strip is short and visibly telegraphed; it does not remove weapons or major deployables. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a reinforced janitorial broom with a bright, replaceable brush head.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 123 · OFF LIMITS
- **Rarity decision:** **Commonplace · Retain for now.** A route-aware melee pick. Its action only works on marked map features and has no combat damage bonus. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a classic red-handled crowbar with chipped paint and a small route icon.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 124 · BOUNCED CHECK
- **Rarity decision:** **Evolved · Retain for now.** A vertical repositioning tool. The launch has a strong sound cue, cannot be chained in midair, and leaves the player exposed on landing. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a compact mechanic's hammer with an exposed spring chamber.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 125 · SILENT PARTNER
- **Rarity decision:** **Commonplace · Retain for now.** A mind-game melee tool. The feint is visual only, cannot attack during the sidestep, and experienced opponents can simply hold their ground. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a blunt training knife with a rubberized blade and bright safety stripe.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 126 · TOLL BOOTH
- **Rarity decision:** **Altered · Retain for now.** A defensive lane holder. The zone does not block shots, lasts briefly, and leaves the user unable to attack while set. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a striped gate arm redesigned as a compact collapsible staff.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 127 · SECOND HAND
- **Rarity decision:** **Extraordinary · Retain for now.** A commitment-based brawler. The wind-up can be interrupted by moving out of range, and the faster strike is still aimable and dodgeable. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** a highly individual silhouette, premium material transitions and a signature moving component. Its physical identity is built around a brass-and-graphite gauntlet with a visible winding dial.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a bespoke animated centerpiece, custom firing feedback and a distinctive action effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 128 · FLOOR MODEL
- **Rarity decision:** **Evolved · Retain for now.** A precision reach weapon with a small traversal trick. The vault point is fixed, visible, and cannot be reused immediately. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a showroom display pole with a weighted base and polished tip.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 129 · NO RETURNS
- **Rarity decision:** **Evolved · Retain for now.** A mid-range melee hybrid built around path prediction. The throw is visible, has a fixed arc, and leaves the player without a melee strike until it returns. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a thick wooden club with a bright return ring and scuffed grip.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 130 · SOFT CLOSE
- **Rarity decision:** **Commonplace · Retain for now.** A dependable close-range defensive pick. The guard slows the user, covers only the front, and cannot be maintained indefinitely. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a pair of padded training tonfa with clean angular guards.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 131 · PAPER SHIELD
- **Rarity decision:** **Altered · Retain for now.** A utility-minded duelling tool. The block is single-use per activation, directional, and has a clear crack animation. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a reinforced field clipboard with paper tabs and a transparent status window.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 132 · GARDEN VARIETY
- **Rarity decision:** **Commonplace · Retain for now.** A nimble close-range option. The hop has fixed distance and landing recovery; the attack itself remains short-ranged. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around oversized garden shears with bright handles and a spring-loaded hinge.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 133 · MILESTONE
- **Rarity decision:** **Altered · Retain for now.** A positional melee tool that rewards planning. The marker is visible, expires quickly, and the pull is small and never affects the target. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a surveyor's pick with a luminous measurement strip and compact head.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 134 · GOOD GRIP
- **Rarity decision:** **Evolved · Retain for now.** A wall-route specialist. Only tagged climbable surfaces work; the grip is short, visible, and leaves the player stationary relative to the wall. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around chunky climbing gloves with rubber palms and bright knuckle pads.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 135 · THE PEACEMAKER
- **Rarity decision:** **Commonplace · Retain for now.** A close-range spacing tool for disengaging. The buffer is small, temporary, and does not protect from gunfire or stop opponents from leaving. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a bright toy-like foam mallet with a sturdy grip and oversized head.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 136 · BACKSTAGE PASS
- **Rarity decision:** **Altered · Retain for now.** A chase-and-route melee choice. The directional hint is brief and local; the vault is fixed and has a landing recovery. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a polished stage cane with a curved handle and hidden telescoping sections.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 137 · HOLD THE DOOR
- **Rarity decision:** **Evolved · Retain for now.** A frontline anchor for objective modes. It does not grant invulnerability, blocks no bullets, and is vulnerable from the sides. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a compact padded breaching ram with two handles and a clear brace indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 138 · SPARE PARTS
- **Rarity decision:** **Commonplace · Retain for now.** A support melee tool with a real trade-off in direct combat. Repair requires proximity and a brief stationary action; repaired objects remain destructible. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around two oversized workshop wrenches clipped together with a small repair light.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 139 · CROWN JEWEL
- **Rarity decision:** **Ascendant · Retain for now.** A team-tempo melee with a contestable pickup. Only one burst can be granted, the marker is visible to both teams, and the boost cannot stack. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around an elegant geometric scepter with a floating crown-shaped head and restrained light accents.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 140 · FINAL NOTICE
- **Rarity decision:** **Evolved · Retain for now.** A high-commitment finisher-style melee without execution effects. The ring is a warning and timing tool only; opponents can leave before the next strike. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a judge's gavel scaled into a compact combat tool, with a crisp wooden impact sound.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 141 · GOOD ENOUGH
- **Rarity decision:** **Commonplace · Retain for now.** A dependable mid-range primary with a timing skill ceiling. The delayed burst is slower overall and can be baited. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a compact utilitarian carbine with a two-stage chamber light.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 142 · OUT OF OFFICE
- **Rarity decision:** **Commonplace · Retain for now.** An aggressive entry primary that rewards short bursts. The action is limited to the opening portion of one magazine and has clear feedback. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a squared SMG with a flip-down stock and a small out-of-office status tab.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 143 · SQUARE ONE
- **Rarity decision:** **Commonplace · Retain for now.** A rhythm-based precision primary. The beat is readable to opponents through audio and animation; the action cannot be spammed. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a clean rifle with a rotating four-step timing dial.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 144 · TWO-WAY STREET
- **Rarity decision:** **Extraordinary · Retain for now.** A versatile secondary sidearm. The action changes recoil sequence, not damage, and the barrel state is visible. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** a highly individual silhouette, premium material transitions and a signature moving component. Its physical identity is built around a compact twin-barrel pistol with distinct left/right chamber windows.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a bespoke animated centerpiece, custom firing feedback and a distinctive action effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 145 · MIDDLE MANAGEMENT
- **Rarity decision:** **Evolved · Retain for now.** A team-oriented primary for coordinated pushes. Information is approximate, requires a recent hit, and never tracks movement. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a practical carbine with a small team-status display above the receiver.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 146 · SLOW NEWS
- **Rarity decision:** **Commonplace · Retain for now.** A patient mid-range primary with a deliberate fallback. The quick shot is visibly less accurate and cannot match the normal shot's range. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a long, slim repeater with a sliding paper-strip chamber indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 147 · PUNCHLINE
- **Rarity decision:** **Commonplace · Retain for now.** A close-range secondary with spacing control. The push is modest, predictable, and the hop consumes a loaded round. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a chunky pistol with a broad muzzle shroud and a recoil indicator.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 148 · DETOUR
- **Rarity decision:** **Extraordinary · Retain for now.** A route-prediction primary. The altered path is previewed, has a limited bend, and can be dodged or blocked. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** a highly individual silhouette, premium material transitions and a signature moving component. Its physical identity is built around a compact launcher with a curved guide rail and a bright trajectory lens.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a bespoke animated centerpiece, custom firing feedback and a distinctive action effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 149 · WELL READ
- **Rarity decision:** **Altered · Retain for now.** A deliberate precision primary with manual timing. Holding the shot costs tempo and opponents can reposition during the delay. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a slim marksman rifle with three stacked chamber lights.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 150 · CASH ONLY
- **Rarity decision:** **Commonplace · Retain for now.** A high-commitment secondary for players who plan reload timing. The action can waste ammunition and has no combat bonus. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a blocky hand cannon with a visible single-row ammunition counter.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 151 · WINDOW SEAT
- **Rarity decision:** **Commonplace · Retain for now.** A close-range primary with a team callout tool. The outline is visible to both teams and gives no wall penetration or damage bonus. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a compact shotgun with a rectangular muzzle and folding side grip.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 152 · NO COMMENT
- **Rarity decision:** **Evolved · Retain for now.** A stealth-flavoured primary without invisibility. The action trades tempo for reduced shot cues and cannot hide the shooter's position after a hit. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a matte marksman rifle with a simple integrated shroud and muted status light.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 153 · TRAFFIC JAM
- **Rarity decision:** **Extraordinary · Retain for now.** A lane-pressure primary that chooses coverage or concentration. Projectiles are visible, slow, and individually avoidable. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** a highly individual silhouette, premium material transitions and a signature moving component. Its physical identity is built around a wide-bodied launcher with a folding cluster muzzle.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a bespoke animated centerpiece, custom firing feedback and a distinctive action effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 154 · BETTER LUCK
- **Rarity decision:** **Evolved · Retain for now.** A trick-shot secondary. Only tagged surfaces reflect the projectile; the preview is approximate and the shot never homes. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a polished sidearm with a rotating angle selector.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 155 · ON RECORD
- **Rarity decision:** **Ascendant · Retain for now.** An information secondary for reading nearby fights. The reading expires quickly, has a limited radius, and can be confused by multiple simultaneous sounds. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** bespoke material pairing, refined surface treatment and an unmistakable silhouette detail. Its physical identity is built around a handheld recorder with a spinning waveform display.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a low-intensity animated feature and a custom action effect with a short aftermath. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 156 · FRESH COAT
- **Rarity decision:** **Commonplace · Retain for now.** A navigation and coordination secondary. It does not reveal enemies, block routes, or provide combat buffs; markings are temporary and visible to both teams. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** satin metal, durable polymer and restrained paint. Its physical identity is built around a compact industrial paint marker with a bright canister and nozzle guard.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** one simple mechanic indicator and a minimal activation cue. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 157 · NARROW ESCAPE
- **Rarity decision:** **Evolved · Retain for now.** A timing-based primary for controlling a small patch of space. The projectile is slow and visible; the early burst is smaller and cannot pass through cover. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a compact launcher with a circular range gauge.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 158 · SAME PAGE
- **Rarity decision:** **Altered · Retain for now.** A coordination secondary for teams that split routes. The relay is visible and destructible, has limited range, and never reveals opponents. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a folding map beacon with a simple arrow display.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 159 · FINE TUNING
- **Rarity decision:** **Evolved · Retain for now.** A precision primary that rewards understanding its recoil states. The action is announced by a visible selector and cannot improve damage or accuracy beyond the grounded baseline. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a precision rifle with a small two-position balance dial.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 160 · SPARE ROOM
- **Rarity decision:** **Evolved · Retain for now.** A vertical route tool. The platform is visible, destructible, and temporary; it cannot be placed through solid geometry or inside objectives. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a compact construction launcher with a folding square platform.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 161 · BAD SIGNAL
- **Rarity decision:** **Altered · Retain for now.** A disruption sidearm with limited combat impact. The effect is brief, non-disabling, and has strong visual feedback and cooldown. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a small pulse pistol with a segmented signal bar.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 162 · DEADLINE
- **Rarity decision:** **Altered · Retain for now.** A deliberate mid-range primary. The faster shot is a trade-off and the recoil penalty is clearly indicated. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a classic lever rifle with a modern angular stock and exposed cycling lever.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 163 · PARKING FINE
- **Rarity decision:** **Evolved · Retain for now.** A setup-oriented primary for holding angles. The rest is visible, stationary, and vulnerable to flanks; it does not increase damage. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a practical carbine with a folding three-point rest.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 164 · BETWEEN FRIENDS
- **Rarity decision:** **Altered · Retain for now.** A support sidearm for managing team setups. It requires a placed friendly object, has no enemy tracking, and the link breaks at range. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** contrasting materials, a deliberate accent colour and a distinctive manufactured detail. Its physical identity is built around a compact pistol with a thin blue connection filament and status window.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a restrained emissive indicator and localized activation effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 165 · LATE CHECKOUT
- **Rarity decision:** **Evolved · Retain for now.** A resource-management primary. The action does not create ammunition and requires planning; the reserve is capped and visible. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a clean rifle with a split magazine counter and folding charging handle.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 166 · OPEN CIRCUIT
- **Rarity decision:** **Extraordinary · Retain for now.** A geometry-aware primary for pre-aimed lanes. The continuation path is fixed, visible, cannot bend around cover, and deals no bonus damage. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** a highly individual silhouette, premium material transitions and a signature moving component. Its physical identity is built around a squared energy rifle with twin emitter rails and a simple angle switch.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a bespoke animated centerpiece, custom firing feedback and a distinctive action effect. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.

### 167 · THE LAST WORD
- **Rarity decision:** **Evolved · Retain for now.** A swap-combo secondary that rewards planning. The stored shot expires, retains its original aim direction, and cannot auto-fire or track. The concept is retained at this tier for its defined gameplay identity, not because the roster needs a particular count. Revisit it if playtests show its mechanic overlaps another weapon.
- **Default finish:** layered premium materials, machined details and a recognizable secondary finish. Its physical identity is built around a refined sidearm with a single bright chamber indicator and a folding sight.. The finish is built into the base model, not locked behind a skin.
- **Default effects:** a subtle animated mechanism and a contained action trail or pulse. The visual signature must communicate **Weapon identity** directly; **Weapon Action** receives its own matching activation cue. Effects remain cosmetic and readable, with no damage, accuracy, tracking or visibility advantage.



## 7. Prototype Combat Stat Sheet

> **Status: Proposed for prototype testing, not locked balance.** These are deliberate starting values built around each weapon's stated role, firing pattern, special mechanic, and the 100 HP baseline in `AVENOR_Gameplay.md`. They are not random rolls and rarity does not increase damage. Playtests may adjust values, but changes should preserve each weapon's identity.

### How to read these values

- Damage is shown per hit/projectile unless a pellet, burst, splash, or sequence total is explicitly written.
- Headshot multipliers apply only to weapons whose design supports headshots. "No headshots" means all valid hit regions use the listed damage.
- Fire cadence is in rounds or trigger cycles per minute unless a burst/charge rhythm is written out.
- Magazine / reserve counts are rounds. Reload is a full reload unless the weapon uses a special reload cycle.
- Effective range is in Roblox studs. Falloff describes the distance band over which damage reduces. Splash damage reaches zero at the listed edge unless stated otherwise.
- Shotgun damage assumes every pellet connects. Real hits will usually deal less because of spread.
- Utility tools are not given fake gun damage. Their important balancing values are charges, cooldowns, placement range, and duration.
- Melee has its own reach, wind-up, recovery, and action timing. Melee attacks do not headshot.

### A. Damage-dealing firearms, launchers, and hybrids

| ID | Weapon | Roster status | Damage model (HP) | Headshot | Fire cadence | Mag / reserve | Reload | Effective range | Falloff |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| | 001 | TAXMAN | |001
| | 002 | POCKET ROCKET | |002
| | 003 | DOORBELL | |003
| | 004 | LONG STORY | |004
| | 005 | LOOSE CHANGE | |005
| | 006 | THREE'S COMPANY | |006
| | 007 | LAWNMOWER | |007
| | 008 | RETURN TO SENDER | |008
| | 010 | BAD HABIT | |010
| | 011 | DEAD WEIGHT | |011
| | 012 | BAD RECEPTION | |012
| | 013 | CALL WAITING | |013
| | 014 | SHORT NOTICE | |014
| | 015 | BAD NEIGHBOR | |015
| | 016 | TAXI | |016
| | 018 | SECOND OPINION | |018
| | 019 | PAPER TRAIL | |019
| | 022 | LAST CALL | |022
| | 023 | TWO CENTS | |023
| | 025 | HOLD MUSIC | |025
| | 026 | SPLIT DECISION | |026
| | 028 | SLOW BURN | |028
| | 030 | NO REFUNDS | |030
| | 031 | OVERDUE | |031
| | 033 | BOUNCER | |033
| | 034 | GOOD MEASURE | |034
| | 036 | BACKFILL | |036
| | 038 | TIN CAN | |038
| | 039 | HOME RUN | |039
| | 041 | DOUBLE PARKED | |041
| | 044 | GOOD GRIEF | |044
| | 045 | CLEAN BREAK | |045
| | 046 | SUNDAY DRIVER | |046
| | 047 | FINE PRINT | |047
| | 049 | HIGH HORSE | |049
| | 051 | COLD SHOULDER | |051
| | 053 | DOUBLE TAKE | |053
| | 055 | BAD TIMING | |055
| | 057 | LAST RESORT | |057
| | 059 | SHORT FUSE | |059
| | 060 | THE USUAL | |060
| | 061 | BAD PENNY | |061
| | 063 | SQUARE DEAL | |063
| | 064 | BULLPEN | |064
| | 065 | PAPER CUT | |065
| | 067 | SLOW CLAP | |067
| | 069 | WIDE OPEN | |069
| | 070 | DEAD CERT | |070
| | 073 | FIRST CLASS | |073
| | 074 | OVERHEAD | |074
| | 076 | TIME CARD | |076
| | 077 | SPOT CHECK | |077
| | 079 | FENDER BENDER | |079
| | 080 | GOOD SPORT | |080
| | 081 | NIGHTCAP | |081
| | 082 | TALLY HO | |082
| | 083 | STATIC SHOCK | |083
| | 085 | BLIND DATE | |085
| | 087 | HARD COPY | |087
| | 088 | BOTTOM LINE | |088
| | 091 | HEADCOUNT | |091
| | 092 | LATE FEE | |092
| | 094 | SAFE BET | |094
| | 097 | BIG PICTURE | |097
| | 098 | SMALL TALK | |098
| | 100 | OVERBOOKED | |100
| | 102 | HOUSE RULES | |102
| | 103 | NO SHOW | |103
| | 105 | DOUBLE SHIFT | |105
| | 106 | OPEN TAB | |106
| | 109 | SIDE DISH | |109
| | 141 | GOOD ENOUGH | |141
| | 142 | OUT OF OFFICE | |142
| | 143 | SQUARE ONE | |143
| | 144 | TWO-WAY STREET | |144
| | 145 | MIDDLE MANAGEMENT | |145
| | 146 | SLOW NEWS | |146
| | 147 | PUNCHLINE | |147
| | 148 | DETOUR | |148
| | 149 | WELL READ | |149
| | 150 | CASH ONLY | |150
| | 151 | WINDOW SEAT | |151
| | 152 | NO COMMENT | |152
| | 153 | TRAFFIC JAM | |153
| | 154 | BETTER LUCK | |154
| | 157 | NARROW ESCAPE | |157
| | 159 | FINE TUNING | |159
| | 161 | BAD SIGNAL | |161
| | 162 | DEADLINE | |162
| | 163 | PARKING FINE | |163
| | 164 | BETWEEN FRIENDS | |164
| | 165 | LATE CHECKOUT | |165
| | 166 | OPEN CIRCUIT | |166
| | 167 | THE LAST WORD | |167

### B. Utility weapons and tools

| ID | Weapon | Direct damage (HP) | Availability | Use / placement range | Duration / limit |
| --- | --- | --- | --- | --- | --- |
| 009 | THE RENTAL | 0 | 1 panel; 14s cooldown | 65 studs placement | 8s or 3 launches |
| 017 | FALSE ALARM | 0 | 1 decoy; 16s cooldown | 60 studs placement | 5s |
| 020 | WET FLOOR | 0 | 3 spray charges; 14s recharge per charge | 22 studs spray reach | Slick patch 5s |
| 021 | CROSSWALK | 16 trigger pulse | 2 markers; 16s cooldown | 60 studs per marker | 8s; one trigger per opponent per crossing |
| 024 | OPEN HOUSE | 0 | 1 cover panel; 16s cooldown | 60 studs placement | 8s or destroyed |
| 027 | SHORTCUT | 0 | 2 anchors; 18s cooldown | 80 studs per anchor | Cable 10s |
| 029 | WRONG NUMBER | 0 | 1 signal; 14s cooldown | 70 studs placement | False audio cue 5s |
| 032 | SPARE KEY | 0 | 2 doorway frames; 18s cooldown | 70 studs per frame | 10s |
| 035 | OFF THE CLOCK | 0 | 1 recorder; 18s cooldown | 55 studs placement | Replay 4s |
| 037 | SIDE EYE | 0 | 1 scan; 12s cooldown | 65-stud unobstructed cone | Detection tick 0.8s |
| 040 | GUEST LIST | 0 | 1 sensor; 15s cooldown | 50 studs placement | 12s or first trigger |
| 042 | STATIC CLING | 0 | 2 magnetic pads; 18s cooldown | 60 studs per pad | Cling 5s |
| 043 | PAYPHONE | 0 | 1 relay; 15s cooldown | 65 studs placement | 12s |
| 048 | BREADCRUMBS | 0 | 3 route markers; 12s cooldown | 75 studs per marker | 12s |
| 050 | TAKE A NUMBER | 0 | 1 queue beacon; 18s cooldown | 60 studs placement | 8s |
| 052 | DO NOT DISTURB | 0 | 1 bubble; 18s cooldown | 55 studs placement | 5s |
| 054 | LOST PROPERTY | 0 | 1 pickup mark; 12s cooldown | 90 studs line of sight | Until pickup is taken or 15s |
| 056 | HUSH MONEY | 0 | 1 quiet zone; 18s cooldown | 55 studs placement | 6s |
| 058 | OPEN SECRET | 0 | 1 team beacon; 16s cooldown | 70 studs placement | 12s |
| 062 | MILE MARKER | 0 | 1 rally marker; 16s cooldown | 90 studs placement | 14s |
| 066 | PARKING METER | 0 | 1 zone meter; 18s cooldown | 60 studs placement | 8s |
| 068 | BACKUP PLAN | 0 | 1 return beacon; 22s cooldown | 55 studs placement | 8s; recall channel 0.7s |
| 071 | RED TAPE | 0 | 1 tripwire pair; 16s cooldown | 60 studs between anchors | 10s |
| 072 | HARD RESET | 0 | 1 self-pulse; 12s cooldown | 12-stud self-radius | 0.6s momentum brake |
| 075 | TIGHTROPE | 0 | 2 cable anchors; 18s cooldown | 75 studs per anchor | Cable 10s |
| 078 | LATCHKEY | 0 | 1 door interaction; 20s cooldown | 12 studs interaction range | Door stays open 5s |
| 084 | QUIET HOURS | 0 | 1 lamp; 18s cooldown | 55 studs placement | 8s |
| 086 | HIGH BEAMS | 0 | 1 light puck; 14s cooldown | 60 studs launch range | 8s |
| 089 | UNDERSTUDY | 0 | 1 decoy; 16s cooldown | 55 studs placement | 6s |
| 090 | QUICK FIX | 0 | 1 ammo transfer; 20s cooldown | Self only | Transfers 5 reserve rounds; cannot exceed magazine capacity |
| 093 | PIN DROP | 0 | 1 team pin; 12s cooldown | 100 studs line of sight | 12s |
| 095 | BACK CHAT | 0 | 1 relay; 15s cooldown | 50 studs placement | 12s |
| 096 | ALL CLEAR | 0 | 1 clearing pulse; 18s cooldown | 18-stud cone | Immediate; disables eligible temporary utility only |
| 099 | ON THE HOUSE | 0 | 1 launch pad; 16s cooldown | 65 studs placement | 8s or first friendly launch |
| 101 | ROLL CALL | 0 | 1 team signal; 18s cooldown | 40-stud radius | 5s |
| 104 | NIGHT OWL | 0 | 1 visor activation; 20s cooldown | Self only | 6s |
| 107 | DEAD END | 0 | 1 barrier; 18s cooldown | 45 studs placement | 8s or destroyed |
| 108 | BAIL OUT | 0 | 1 tether; 20s cooldown | 35 studs anchor range | 0.5s warning, then short recall |
| 110 | CLEAN SLATE | 0 | 1 self-cleanse; 16s cooldown | Self only | Immediate; removes one eligible temporary status |
| 155 | ON RECORD | 0 | 1 directional replay; 16s cooldown | 45-stud listening radius | Reading lasts 2s |
| 156 | FRESH COAT | 0 | 6 paint rounds; 8 / 32 ammo | 60 studs | Mark lasts 8s; harmless to players |
| 158 | SAME PAGE | 0 | 1 relay; 16s cooldown | 50 studs placement | 12s |
| 160 | SPARE ROOM | 0 | 1 platform; 18s cooldown | 60 studs placement | 7s or destroyed |

### C. Melee weapons

| ID | Weapon | Damage (HP) | Reach | Attack interval | Wind-up / recovery | Weapon Action |
| --- | --- | --- | --- | --- | --- | --- |
| 111 | DOORJAM | 48 | 7.5 studs | 0.85s | 0.18s / 0.30s | Brace: 8s cooldown; stationary short guard |
| 112 | BELLHOP | 58 | 8 studs | 1.15s | 0.38s / 0.48s | Area shove: 10s cooldown; 4-stud radius, no extra damage |
| 113 | PAPER TIGER | 38 | 7 studs | 0.65s | 0.12s / 0.24s | Deflect: 9s cooldown; 0.22s frontal window |
| 114 | LAST WORD | 52 | 8 studs | 0.90s | 0.20s / 0.34s | Parry: 10s cooldown; 0.20s frontal window |
| 115 | SHOPPING CART | 34 | 7 studs | 0.80s | 0.20s / 0.30s | Push: 8s cooldown; fixed short knockback |
| 116 | NIGHT SHIFT | 40 | 7 studs | 0.95s | 0.20s / 0.34s | Flash: 12s cooldown; 12-stud radius, no damage |
| 117 | THE BUTLER | 42 | 7 studs | 0.90s | 0.18s / 0.34s | Directional guard: 8s cooldown; does not stop bullets |
| 118 | BAD FORM | 46 | 9 studs | 0.95s | 0.30s / 0.34s | Marked thrust: 9s cooldown; fixed straight-line lunge |
| 119 | PICKUP STICKS | 26 per hit | 6.5 studs | 0.45s | 0.10s / 0.20s | Two-hit rhythm; recovery cancel once, 7s cooldown |
| 120 | THE BIG KNIT | 54 | 8 studs | 1.05s | 0.28s / 0.40s | Ground ripple: 11s cooldown; narrow 8-stud lane, 14 damage |
| 121 | CLOSE CALL | 42 | 8 studs | 0.90s | 0.20s / 0.34s | Hook pull: 10s cooldown; 18-stud valid anchor range |
| 122 | CLEAN SWEEP | 34 | 8 studs | 0.80s | 0.18s / 0.30s | Clear strip: 9s cooldown; removes eligible small utility only |
| 123 | OFF LIMITS | 50 | 7.5 studs | 0.95s | 0.25s / 0.38s | Map-feature pry: 12s cooldown; designated objects only |
| 124 | BOUNCED CHECK | 48 | 7 studs | 0.95s | 0.20s / 0.36s | Self-launch: 10s cooldown; one launch, no midair chaining |
| 125 | SILENT PARTNER | 34 | 6 studs | 0.60s | 0.12s / 0.24s | Feint sidestep: 8s cooldown; no attack during sidestep |
| 126 | TOLL BOOTH | 42 | 10 studs | 1.00s | 0.25s / 0.36s | Lane zone: 12s cooldown; 3s duration, no bullet blocking |
| 127 | SECOND HAND | 60 | 6.5 studs | 1.20s | 0.40s / 0.45s | Charged strike: 10s cooldown; wind-up can be interrupted |
| 128 | FLOOR MODEL | 50 | 10.5 studs | 1.00s | 0.25s / 0.36s | Vault: 9s cooldown; fixed visible anchor |
| 129 | NO RETURNS | 44 melee / 32 thrown | 8.5 studs melee; 55 studs throw | 1.10s | 0.25s / 0.40s | Throw return: 8s cooldown; no melee strike while disc is away |
| 130 | SOFT CLOSE | 36 | 7 studs | 0.70s | 0.15s / 0.25s | Front guard: 8s cooldown; slows user while active |
| 131 | PAPER SHIELD | 38 | 6.5 studs | 0.85s | 0.20s / 0.30s | Single block: 9s cooldown; directional, one impact per activation |
| 132 | GARDEN VARIETY | 32 | 6.5 studs | 0.55s | 0.10s / 0.22s | Hop: 8s cooldown; fixed distance and landing recovery |
| 133 | MILESTONE | 46 | 8 studs | 0.85s | 0.18s / 0.30s | Marker pull: 10s cooldown; 12-stud self-pull, never moves target |
| 134 | GOOD GRIP | 30 per punch | 5.5 studs | 0.50s | 0.10s / 0.20s | Wall grip: 10s cooldown; tagged surfaces only, 2.5s max |
| 135 | THE PEACEMAKER | 40 | 7 studs | 0.80s | 0.18s / 0.30s | Spacing buffer: 10s cooldown; 3-stud push zone, no damage |
| 136 | BACKSTAGE PASS | 42 | 8.5 studs | 0.80s | 0.18s / 0.30s | Vault: 9s cooldown; fixed anchor and landing recovery |
| 137 | HOLD THE DOOR | 58 | 8 studs | 1.10s | 0.32s / 0.45s | Front brace: 12s cooldown; no invulnerability or bullet blocking |
| 138 | SPARE PARTS | 34 per strike | 6.5 studs | 0.65s | 0.12s / 0.25s | Repair: 12s cooldown; brief stationary interaction |
| 139 | CROWN JEWEL | 40 | 8 studs | 0.80s | 0.18s / 0.30s | Team tempo pulse: 14s cooldown; one non-stacking burst |
| 140 | FINAL NOTICE | 62 | 7.5 studs | 1.15s | 0.38s / 0.45s | Warning ring: 12s cooldown; no bonus damage or execution |

### Balance guardrails

1. The baseline opponent has 100 HP. A normal primary should not accidentally become a universal one-shot weapon through its base damage alone.
2. High-impact precision weapons may threaten a one-shot headshot only when their weapon entry explicitly supports it; their body damage, fire cadence, magazine, and reload must compensate.
3. Shotgun totals are theoretical maximums, not guaranteed damage. Pellet spread and range falloff are part of their identity.
4. Area damage is split into direct and splash damage. Splash must have a clear radius and falloff, and must not silently behave like a second direct hit.
5. Utility tools that deal no damage must remain useful through route control, information, coordination, or movement, not through hidden combat bonuses.
6. Special mechanics that alter damage are called out in the individual damage model. Mechanics that alter recoil, handling, movement, information, or positioning do not secretly increase damage.
7. Any change to a weapon's damage, cadence, magazine, reserve, reload, range, or falloff must be checked against its time-to-eliminate and the rest of the roster.
8. These numbers are a coherent first tuning pass. They must be validated in a 1v1 test arena and then rechecked in team modes and on mobile/controller.
