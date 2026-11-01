# AVENOR — Weapon Design

> This document owns the weapon roster and individual weapon designs. Accepted concepts are marked **Accepted**. Proposed concepts are marked **Proposed**. Prototype values are not final balance values.

## 1. Weapon Design Philosophy

AVENOR is planned to launch with **167 weapons**.

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

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 002 — POCKET ROCKET
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

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 003 — DOORBELL
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

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 004 — LONG STORY
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

**Status:** Accepted redesign concept, pending competitive testing.

### Weapon 005 — LOOSE CHANGE
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

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 006 — THREE'S COMPANY
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

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 007 — LAWNMOWER
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

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 008 — RETURN TO SENDER
- **Internal ID:** RETURN-TO-SENDER
- **Category:** Returning Disc Launcher
- **Rarity:** Altered (provisional)
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

**Prototype values:** Damage, travel speed, maximum range, return-point range, and cooldown are TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.

### Weapon 009 — THE RENTAL
- **Internal ID:** THE-RENTAL
- **Category:** Utility Launcher
- **Rarity:** Altered (provisional)
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

**Prototype values:** Direct-hit damage, panel lifetime, launch strength, launch count, placement range, and cooldown are TBD.

**Status:** Accepted redesign concept. Prototype values are TBD.

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

### Weapon 015 — BAD NEIGHBOR
- **Internal ID:** BAD-NEIGHBOR
- **Category:** Nail Driver
- **Rarity:** Altered (provisional)
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

**Prototype values:** Direct-hit damage, marker lifetime, pulse radius, reveal duration, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 016 — TAXI
- **Internal ID:** TAXI
- **Category:** Impact Launcher
- **Rarity:** Commonplace (provisional)
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

**Prototype values:** Direct-hit damage, projectile speed, fare progression, counter reset timing, field radius, push strength, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 017 — FALSE ALARM
- **Internal ID:** FALSE-ALARM
- **Category:** Signal Launcher
- **Rarity:** Altered (provisional)
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

**Prototype values:** Projectile speed, decoy lifetime, imitation range, activation flash duration, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 018 — SECOND OPINION
- **Internal ID:** SECOND-OPINION
- **Category:** Twin-Barrel Rifle
- **Rarity:** Altered (provisional)
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

**Prototype values:** Damage, firing interval, spread profiles, stored-shot window, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 019 — PAPER TRAIL
- **Internal ID:** PAPER-TRAIL
- **Category:** Marker Rifle
- **Rarity:** Altered (provisional)
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

**Prototype values:** Damage, fire rate, tag duration, trail lifetime, surface-tag trigger radius, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 020 — WET FLOOR
- **Internal ID:** WET-FLOOR
- **Category:** Pressure Sprayer
- **Rarity:** Altered (provisional)
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

**Prototype values:** Patch lifetime, patch size, movement effect strength, maximum active patches, spray range, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.


### Weapon 021 — CROSSWALK
- **Internal ID:** CROSSWALK
- **Category:** Tactical Rifle
- **Rarity:** Altered (provisional)
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

**Prototype values:** Marker lifetime, line width, trigger damage, expanded-zone size and duration, placement range, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 022 — LAST CALL
- **Internal ID:** LAST-CALL
- **Category:** Sonic Projector
- **Rarity:** Altered (provisional)
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

**Prototype values:** Pulse damage, range, disruption duration, push strength, recovery, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 023 — TWO CENTS
- **Internal ID:** TWO-CENTS
- **Category:** Precision Rifle
- **Rarity:** Commonplace (provisional)
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

**Prototype values:** Damage, projectile speeds, magazine, firing interval, aim-disruption duration, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 024 — OPEN HOUSE
- **Internal ID:** OPEN-HOUSE
- **Category:** Deployable Launcher
- **Rarity:** Altered (provisional)
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

**Prototype values:** Panel health, lifetime, placement range, redeployment time, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 025 — HOLD MUSIC
- **Internal ID:** HOLD-MUSIC
- **Category:** Repeater
- **Rarity:** Evolved (provisional)
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

**Prototype values:** Projectile damage, sequence length, final-shot damage, marker lifetime, pause duration, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 026 — SPLIT DECISION
- **Internal ID:** SPLIT-DECISION
- **Category:** Split-Feed Rifle
- **Rarity:** Altered (provisional)
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

**Prototype values:** Damage per shot, split distance, projectile spread, firing interval, magazine, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 027 — SHORTCUT
- **Internal ID:** SHORTCUT
- **Category:** Traversal Launcher
- **Rarity:** Evolved (provisional)
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

**Prototype values:** Anchor range, cable lifetime, travel speed, boost duration, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 028 — SLOW BURN
- **Internal ID:** SLOW-BURN
- **Category:** Heat Rifle
- **Rarity:** Altered (provisional)
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

**Prototype values:** Heat per shot, damage curve, overheat threshold, cooling time, vent damage and push strength, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 029 — WRONG NUMBER
- **Internal ID:** WRONG-NUMBER
- **Category:** Signal Pistol
- **Rarity:** Altered (provisional)
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

**Prototype values:** Signal lifetime, audio range, available sound cues, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

### Weapon 030 — NO REFUNDS
- **Internal ID:** NO-REFUNDS
- **Category:** Heavy Revolver
- **Rarity:** Evolved (provisional)
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

**Prototype values:** Damage, cylinder capacity, recovery penalty, reload time, lockout duration, and cooldown are TBD.

**Status:** Accepted concept. Prototype values are TBD.

## 5. Remaining Roster

Weapons 031–167 are TBD.

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
