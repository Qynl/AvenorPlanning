> **Current AVENOR integration rules (2026 direction):** These rebuilt firing identities remain the authoritative mechanical design library for the active firearm concepts. They must support both the Open World and separate competitive playlists. Weapon unlocks are granted only through Open World discovery; competitive modes use already-owned weapons and never unlock them. The new magazine/backpack reload concept must be applied per weapon without flattening its unique firing identity. Exact reload values are TBD and must be tested. Fast movement has no stamina dependency.

---

# AVENOR — Complete Firearm Rebuild

> **Status: New design foundation.** This document replaces every previous firing identity for the 40 active firearms. The old concepts are superseded, not layered on top. Weapon names and catalogue IDs are retained for continuity; their mechanics, firing loops, weapon actions, and gameplay identities are rebuilt here.
>
> **Core promise:** even a Commonplace weapon must make a player say, "Wait, what does this thing do?" Rarity raises creative ambition and spectacle, never basic quality or combat power.
>
> All mechanics are fictional Roblox gameplay abstractions. Every value is a prototype placeholder until tested in-game.

## 1. The AVENOR weapon standard

A weapon is not distinct because it has different damage, cadence, recoil, magazine size, or reload time. It must have a different *interaction loop*.

Every weapon specification must define:
1. **What leaves the weapon:** its actual projectile, wave, field, object, or sequence.
2. **What happens in flight:** a distinctive path, transformation, timing rule, or interaction.
3. **What happens on contact:** a recognisable and bounded result.
4. **What the player actively learns:** timing, sequencing, placement, state management, prediction, or another skill.
5. **What the opponent can read and answer:** visible tells, bounded effects, and meaningful counterplay.
6. **Why it deserves its own slot:** removing it would remove a genuinely different experience.

### Rarity is creative ambition, not quality

- **Commonplace:** immediately distinctive, intuitive, satisfying, and complete. Never a generic gun.
- **Altered:** a strong mechanic with an unusual second layer or interaction.
- **Evolved:** multiple behaviours combine into a deeper mastery loop.
- **Ascendant:** the weapon changes how players think about space, timing, or sequencing.
- **Extraordinary:** unusually expressive systems with multiple readable states or interactions.
- **Singular:** rare, spectacular, unmistakable concepts with a signature play pattern.

A Commonplace weapon must be just as polished, responsive, readable, and worth mastering as a Singular weapon. Higher rarity must not mean higher damage, easier eliminations, or weaker counterplay.

## 2. Rebuilt active roster

| ID | Weapon | Rarity | Signature experience |
|---|---|---|---|
| 001 | Marking Assault Rifle | Commonplace | Collectible impact stamps that can be cashed into a deliberate follow-up |
| 002 | Momentum SMG | Commonplace | Shots that accelerate only while travelling through the player's marked wake |
| 003 | Resonance Shotgun | Commonplace | A surface-bouncing bell projectile that releases a timed radial pulse |
| 004 | Charged Rail Rifle | Extraordinary | A charged rail lance that pierces targets and leaves a brief, visible afterline |
| 005 | Orbit Sidearm | Commonplace | A fan of metal tokens that orbit a chosen point before snapping outward |
| 006 | Tri-Volley Rifle | Commonplace | Three orbiting shots released one at a time by separate trigger taps |
| 007 | Wave Launcher | Altered | A low travelling blade-wave that climbs over small arena geometry |
| 008 | Return Disc Launcher | Evolved | A thrown disc whose return route is chosen by the player's movement |
| 011 | Gravity Launcher | Altered | A heavy falling payload that creates a temporary low-gravity pocket |
| 013 | Stasis Sidearm | Altered | A bolt that can be parked in flight and released later |
| 014 | Split-Bolt Crossbow | Evolved | A bolt that divides according to the direction it is struck from |
| 015 | Rebound Launcher | Commonplace | Surface pins that create a visible temporary rebound line |
| 022 | Sonic Projector | Evolved | A travelling sound-ring that expands, contracts, then expands again |
| 023 | Dual-Path Pistol | Commonplace | Two alternating shots with different paths that combine when timed |
| 025 | Sequence Pulse Rifle | Altered | A three-note sequence whose next projectile changes with the previous hit |
| 026 | Forking Launcher | Evolved | A projectile that can be split manually into two controllable branches |
| 028 | Plasma Projector | Altered | A plasma globule that changes shape and speed as it cools |
| 033 | Pressure Wave Launcher | Commonplace | A compressed-air ring that carries objects and players a short distance |
| 038 | Kinetic Disc Launcher | Altered | A rolling puck that changes direction when struck again |
| 039 | Impact Ball Launcher | Commonplace | A kinetic ball that grows its impact zone the longer it travels |
| 041 | Twin-Shot Pistols | Commonplace | Twin shots that begin apart and cross at a chosen distance |
| 045 | Fragment Launcher | Altered | A break-shell that fractures into a controllable arc of pieces on command |
| 049 | Arc Launcher | Evolved | A projectile that climbs vertically before the player redirects its descent |
| 053 | Echo Rifle | Altered | A delayed copy that repeats the first projectile's path with a visible offset |
| 055 | Timing Rifle | Commonplace | A shot that must be released on a moving timing window for its full pattern |
| 059 | Linked-Charge Launcher | Evolved | Two linked charges that share one countdown and can exchange positions |
| 064 | Fan Launcher | Altered | A braced multi-shot fan whose shape is set by the player's movement |
| 069 | Wave Shotgun | Commonplace | A broad horizontal wave that folds inward at its maximum range |
| 074 | Ceiling Launcher | Altered | A lobbed capsule that sticks to ceilings and drops a marked pulse |
| 082 | Sequence Rifle | Evolved | A counted sequence that changes the next shot's geometry, not its damage |
| 083 | Arc-Link Rifle | Evolved | A pulse that travels between player-placed conductive markers |
| 085 | Paired-Shot Rifle | Commonplace | A paired projectile: one visible lead shot and one delayed, clearly signalled partner |
| 097 | Convergence Launcher | Extraordinary | A spiral of projectiles that converges on a point selected during flight |
| 100 | Adaptive Shell Launcher | Altered | A rotating chamber that cycles through three visibly different shell behaviours |
| 105 | Dual-Feed Launcher | Extraordinary | Two distinct projectile feeds that can be cross-combined mid-sequence |
| 109 | Sidecar Rifle | Altered | A main projectile accompanied by a sidecar that takes the opposite route |
| 148 | Pathing Bolt Launcher | Extraordinary | A path-drawing bolt that follows a short route the player sketches in open space |
| 153 | Barrier Launcher | Evolved | A canister that creates a moving, temporary row of slow rotating barriers |
| 157 | Return-Path Launcher | Ascendant | A capsule that records its outbound route and returns along a parallel lane |
| 161 | Mirror Pulse Rifle | Singular | A pulse that creates a temporary mirrored firing lane with a clearly marked origin |

## 3. Individual weapon designs

### 001 — Assault Rifle
- **Rarity:** Commonplace
- **Category / slot:** Precision auto-rifle / Primary
- **Core identity:** Collectible impact stamps.
- **Normal firing loop:** Each shot launches a small, bright stamp-dart. A hit leaves a visible stamp on the target for a short time. A second hit adds another stamp, up to a small cap. Stamps do not reveal the target through walls and expire normally.
- **Weapon Action — AUDIT:** The next shot collects all active stamps from that target and sends them back as a short, straight line of returning chips. The chips are a follow-up projectile, not automatic damage: the player must line up the return lane.
- **Mastery:** Maintain a stamp sequence, choose when to cash it in, and position so the return lane matters.
- **Counterplay:** Stamps are visible; breaking line of sight clears them; the cash-out has a distinct wind-up and readable return path.
- **Why it stays:** A straightforward rifle becomes a target-sequencing weapon from its very first match.

### 002 — Momentum SMG
- **Rarity:** Commonplace
- **Category / slot:** Compact SMG / Primary
- **Core identity:** Wake-accelerated shots.
- **Normal firing loop:** The weapon fires small projectiles at a steady starting pace. Each shot leaves a short-lived trail behind the player. Shots fired through the player's own recent trail accelerate briefly, so moving while firing changes projectile travel rather than simply increasing damage or fire rate.
- **Weapon Action — AFTERBURN:** Place a short, visible dash-wake at the player's current position. Shots crossing it gain one additional, capped speed boost.
- **Mastery:** Build a firing lane through movement, then use the wake to change the timing of the stream.
- **Counterplay:** The wake is visible, short-lived, and fixed in place; opponents can leave its lane or use cover.
- **Why it stays:** Movement and firing are physically linked in a way that is easy to understand and rewarding to master.

### 003 — Resonance Shotgun
- **Rarity:** Commonplace
- **Category / slot:** Impact shotgun / Primary
- **Core identity:** A bouncing bell-shell with a timed pulse.
- **Normal firing loop:** Each shell is a compact bell-shaped projectile. It bounces once from a valid surface, rings audibly, then releases a short radial pulse after a clear delay. A direct player hit triggers the pulse immediately at the point of contact.
- **Weapon Action — SECOND RING:** The next shell rings twice: a small first pulse followed by a larger, slower pulse. Both are clearly telegraphed.
- **Mastery:** Place the first bounce so the delayed pulse reaches a route at the right moment.
- **Counterplay:** The shell is visible, the ring gives a timing cue, and players can move away before the pulse.
- **Why it stays:** It turns a shotgun into a timing-and-surface tool, not another pellet spread.

### 004 — Rail Rifle
- **Rarity:** Extraordinary
- **Category / slot:** Precision rail rifle / Primary
- **Core identity:** Charged piercing rail lance with a persistent afterline.
- **Normal firing loop:** Holding fire builds one narrow energy lance through three readable charge stages. Release fires a fast, straight projectile that can pass through a limited number of targets. Its path remains as a thin, fading afterline for a moment; the afterline is visual only and cannot deal damage.
- **Weapon Action — FOOTNOTE:** The player may mark one point on the visible afterline. The next shot can be released from the marked point only if the point is still in open line of sight; it cannot pass through walls or bend around cover.
- **Mastery:** Charge discipline, lining up targets, and deciding whether to use the normal rail or the marked release.
- **Counterplay:** Charge stages are audible and visible; the rail is narrow; the mark is visible and temporary.
- **Why it stays:** It offers an iconic precision experience with a second layer that rewards planning rather than granting wall shots.

### 005 — Orbit Pistol
- **Rarity:** Commonplace
- **Category / slot:** Trick-shot sidearm / Secondary
- **Core identity:** Orbiting metal tokens.
- **Normal firing loop:** A trigger pull launches three small tokens in a shallow fan. They travel toward the reticle point, orbit that point once in a tight, visible circle, then snap outward along three fixed lanes. The player chooses the orbit point with aim; tokens do not home onto opponents.
- **Weapon Action — TIP JAR:** The next token fan orbits twice before snapping outward, giving the player a longer setup window and opponents a longer warning.
- **Mastery:** Place the orbit point around cover edges or across a route, then predict where the outward lanes will cross.
- **Counterplay:** The orbit point and outward lanes are clearly marked; the tokens have limited range and cannot pass through solid geometry.
- **Why it stays:** The sidearm asks players to aim at a point in space rather than directly at a target.

### 006 — Tri-Burst Rifle
- **Rarity:** Commonplace
- **Category / slot:** Sequencing rifle / Primary
- **Core identity:** Three orbiting shots released separately.
- **Normal firing loop:** The weapon holds three small projectiles in a visible rotating chamber. Each trigger tap releases the next projectile along the current reticle direction. The orbit changes the projectile's launch offset in a predictable cycle. Reload resets the sequence.
- **Weapon Action — ALL AT ONCE:** Release the remaining loaded orbiting shots together in a compact triangular formation, consuming them all.
- **Mastery:** Tap-fire to control the sequence, or commit to the full triangular volley when the timing is right.
- **Counterplay:** The chamber visibly shows how many shots remain and their release order; the combined volley has a clear tell.
- **Why it stays:** It makes every trigger tap part of a three-step decision rather than a conventional burst.

### 007 — Wave Launcher
- **Rarity:** Altered
- **Category / slot:** Heavy wave launcher / Primary
- **Core identity:** Low travelling blade-wave.
- **Normal firing loop:** Fires a flat energy blade along the floor. It travels forward and climbs over small steps and low arena geometry, but cannot climb walls or follow players vertically. Its height and width remain fixed and readable.
- **Weapon Action — CROSSCUT:** Fire a second blade-wave perpendicular to the first. The two waves meet at a visible crossing point and cancel each other there, creating a temporary safe gap.
- **Mastery:** Use floor routes and crossing waves to shape where opponents can safely move.
- **Counterplay:** Jumping, elevated routes, and solid cover avoid the wave; the crosscut's crossing point is marked.
- **Why it stays:** It controls the floor plane rather than behaving like a conventional bullet stream.

### 008 — Disc Launcher
- **Rarity:** Evolved
- **Category / slot:** Returning disc launcher / Primary
- **Core identity:** A disc whose return route is determined by the player's movement.
- **Normal firing loop:** Throws one spinning disc straight ahead. The disc travels outward while recording the player's movement path. At maximum range or when recalled, it returns along a parallel, simplified copy of that recorded route. It can hit each opponent at most once per throw.
- **Weapon Action — CHANGE OF ADDRESS:** While the disc is outbound, a brief movement input selects which side of the recorded route the returning disc uses.
- **Mastery:** Throw, reposition, and deliberately shape the return lane.
- **Counterplay:** The disc and return lane are visible; the return route is bounded; the disc cannot bend through walls.
- **Why it stays:** The player's own movement becomes part of the projectile's second half.

### 011 — Gravity Launcher
- **Rarity:** Altered
- **Category / slot:** Payload launcher / Primary
- **Core identity:** A heavy falling payload that creates a temporary low-gravity pocket.
- **Normal firing loop:** Lobs a slow, bright capsule in a shallow arc. On landing it creates a clearly outlined field where airborne movement becomes floatier for a short duration. The field does not pull players, deal damage over time, or affect projectiles.
- **Weapon Action — DROP ANCHOR:** Detonate the capsule early while it is airborne, creating a smaller field at its current position.
- **Mastery:** Place the field above or beside a route to change jump timing and aerial movement.
- **Counterplay:** The capsule's landing point is marked; players can leave the field; the field has a short lifetime and fixed radius.
- **Why it stays:** Its impact changes the movement feel of a small area instead of producing a generic explosion.

### 013 — Stasis Pistol
- **Rarity:** Altered
- **Category / slot:** Energy sidearm / Secondary
- **Core identity:** A bolt that can be parked in flight.
- **Normal firing loop:** Fires a medium-speed energy bolt. Pressing Weapon Action while it is travelling freezes it in place for a brief, visible pause. It then resumes along its original direction. Only one parked bolt can exist at a time.
- **Weapon Action — HOLD THE LINE:** The parked bolt can be released early with a second press, but cannot be redirected.
- **Mastery:** Time a pause to catch a movement route or create a delayed second threat.
- **Counterplay:** The frozen bolt glows and emits a clear pulse; it has a short timeout and can be avoided or blocked.
- **Why it stays:** It lets players manipulate projectile timing without turning the shot into a homing attack.

### 014 — Split-Bolt Crossbow
- **Rarity:** Evolved
- **Category / slot:** Split-bolt crossbow / Primary
- **Core identity:** A bolt that divides according to the direction it is struck from.
- **Normal firing loop:** Fires one heavy bolt. The player may shoot their own bolt once before it expires. The second hit splits it into two smaller bolts that travel away from the impact direction at fixed angles. The player cannot choose the split direction after firing; positioning the follow-up shot determines it.
- **Weapon Action — EARLY WARNING:** Highlight the bolt's split point and briefly widen the valid follow-up window, without changing damage or projectile count.
- **Mastery:** Fire, reposition, and hit the bolt from a deliberate angle.
- **Counterplay:** The bolt is visible; the split requires a second shot; both child paths are fixed and readable.
- **Why it stays:** The user is effectively setting up and hitting their own projectile.

### 015 — Rebound Launcher
- **Rarity:** Commonplace
- **Category / slot:** Pin launcher / Primary
- **Core identity:** Surface pins that form a temporary rebound line.
- **Normal firing loop:** Fires a pin that embeds in valid arena surfaces. A second pin placed within a limited distance connects to the first with a glowing line. Touching the line gives a small, predictable sideways rebound. The line affects all players equally.
- **Weapon Action — PROPERTY LINE:** Reorient the rebound direction of the active line once. The direction change is shown with an arrow before it takes effect.
- **Mastery:** Place two pins to create movement routes, escapes, or unexpected jumps.
- **Counterplay:** Pins and line are visible and destructible; only one line can exist; opponents can use it too.
- **Why it stays:** A firearm becomes a temporary movement-building tool with shared arena consequences.

### 022 — Sonic Projector
- **Rarity:** Evolved
- **Category / slot:** Sonic projector / Primary
- **Core identity:** A travelling sound-ring that expands, contracts, then expands again.
- **Normal firing loop:** Emits a visible circular wave travelling forward. It expands to a maximum width, contracts to a narrow band, then expands once more before fading. Each phase has a different distance and timing, but the wave deals one hit per player per shot.
- **Weapon Action — ENCORE:** Pause the wave's current expansion phase briefly, then let it continue. The pause is visible and cannot exceed a short fixed limit.
- **Mastery:** Predict which phase will cross a route or doorway and use the pause to alter timing.
- **Counterplay:** The wave is highly visible; solid cover blocks it; the pause produces a distinct cue.
- **Why it stays:** It is a travelling shape with a readable rhythm, not a conventional projectile.

### 023 — Dual-Path Pistol
- **Rarity:** Commonplace
- **Category / slot:** Dual-path sidearm / Secondary
- **Core identity:** Alternating high and low shots.
- **Normal firing loop:** Every other trigger pull changes the projectile path. One shot travels straight; the next follows a shallow arcing path. The chamber display clearly indicates which is next. The two shots have equal baseline damage and different travel timing.
- **Weapon Action — MAKE CHANGE:** Swap which path fires first, preserving the alternating sequence.
- **Mastery:** Learn to alternate shots to cover both a direct lane and a route above low cover.
- **Counterplay:** The chamber indicator is visible; the arc is slow and readable; cover blocks both paths.
- **Why it stays:** A simple sidearm creates a genuine two-shot rhythm with different geometry.

### 025 — Pulse Rifle
- **Rarity:** Altered
- **Category / slot:** Sequence pulse rifle / Primary
- **Core identity:** A three-note sequence that changes according to the previous hit.
- **Normal firing loop:** Fires three distinct pulse shapes in a repeating sequence: dot, ring, and bar. If a shot hits a surface, the next pulse keeps its normal form. If it hits an opponent, the next pulse changes its travel shape: dot becomes a narrow beamlet, ring becomes a slow disc, bar becomes a short wave. The sequence is fixed and visible.
- **Weapon Action — SKIP TRACK:** Skip the next pulse in the sequence and move to the following one.
- **Mastery:** Track the sequence and deliberately decide which projectile shape to use next.
- **Counterplay:** The weapon display shows the next pulse; all altered shapes have distinct trails and fixed limits.
- **Why it stays:** It creates a learnable firing language rather than random modes.

### 026 — Forking Launcher
- **Rarity:** Evolved
- **Category / slot:** Forking launcher / Primary
- **Core identity:** A projectile manually split into two controllable branches.
- **Normal firing loop:** Fires a slow central orb. Press Weapon Action once to split it into two smaller orbs that diverge left and right. While they travel, the player may aim to choose which branch receives a slight additional outward angle. The branches never home and cannot be split again.
- **Weapon Action — COMMIT:** The second press locks both branch paths immediately.
- **Mastery:** Decide when to split and how much space to cover without giving up control too early.
- **Counterplay:** The central orb and split cue are obvious; both branches are slower and smaller; cover blocks them.
- **Why it stays:** It turns one projectile into a short, player-shaped decision tree.

### 028 — Plasma Projector
- **Rarity:** Altered
- **Category / slot:** Plasma projector / Primary
- **Core identity:** A globule that changes shape and speed as it cools.
- **Normal firing loop:** Fires a bright plasma globule that begins compact and fast. As it travels, it cools, grows wider, and slows in three clear stages. Its damage does not increase as it grows; the trade is speed for a larger, slower collision profile. It dissipates after a fixed lifetime.
- **Weapon Action — VENT:** Immediately cool the next globule to its final wide state at the muzzle, producing a short-range, slow-moving disc.
- **Mastery:** Choose whether to use a fast early shot or let the projectile mature into a space-control shape.
- **Counterplay:** The colour and size stages are obvious; the mature globule is slow and avoidable.
- **Why it stays:** The projectile visibly evolves during flight, creating a timing choice without hidden power scaling.

### 033 — Shockwave Launcher
- **Rarity:** Commonplace
- **Category / slot:** Air-pressure launcher / Primary
- **Core identity:** A compressed-air ring that carries objects and players a short distance.
- **Normal firing loop:** Launches a visible ring-shaped pressure wave. On contact with a player, it gives a short, fixed push in the ring's travel direction. On contact with a loose weapon pickup or compatible map object, it nudges that object along the same path. It deals little or no direct damage.
- **Weapon Action — REVERSE:** The next ring travels backward from the muzzle, pushing the user slightly while pushing other affected players in the opposite direction.
- **Mastery:** Use direction and timing to reposition, interrupt movement, or create escape opportunities.
- **Counterplay:** The ring is wide and visible; its push is short; players can use cover or avoid the lane.
- **Why it stays:** It is a weapon built around displacement and interaction, not damage output.

### 038 — Kinetic Disc Launcher
- **Rarity:** Altered
- **Category / slot:** Kinetic puck launcher / Primary
- **Core identity:** A rolling puck whose direction changes when struck again.
- **Normal firing loop:** Fires a metal puck that rolls along the floor and bounces off valid walls. Shooting the puck again changes its travel direction toward the new impact angle and refreshes its lifetime once. It can be redirected only a limited number of times.
- **Weapon Action — KICKSTAND:** Stop the puck in place for a brief moment, then let it resume rolling in its current direction.
- **Mastery:** Set a puck rolling, then use follow-up shots to route it through the arena.
- **Counterplay:** The puck is large and audible; each redirection has a bright spark; it cannot climb walls or pass through cover.
- **Why it stays:** Players manage a projectile after launch instead of simply firing and forgetting it.

### 039 — Impact Launcher
- **Rarity:** Commonplace
- **Category / slot:** Kinetic ball launcher / Primary
- **Core identity:** A ball whose impact zone grows with travel distance.
- **Normal firing loop:** Fires a dense ball that begins small and gains a wider impact radius as it travels, while its direct-hit damage remains capped. At maximum distance it bursts into a harmless-looking but gameplay-active ring that briefly pushes players outward. The ring is clearly marked.
- **Weapon Action — SWING:** Detonate the ball early into a narrow forward fan, sacrificing the large final ring for immediate lane pressure.
- **Mastery:** Judge distance and decide whether to let the ball travel or convert it early.
- **Counterplay:** The ball's growth is visible; the final ring has a clear warning; the early fan is narrow.
- **Why it stays:** Range changes the shape of the impact, not just damage falloff.

### 041 — Twin Pistols
- **Rarity:** Commonplace
- **Category / slot:** Twin-shot sidearm / Secondary
- **Core identity:** Two shots that begin apart and cross at a chosen distance.
- **Normal firing loop:** Fires two slim projectiles in parallel lanes. They gradually curve toward each other and cross at a distance determined by the player's aim hold before firing. The paths are mirrored and never home onto targets.
- **Weapon Action — PARKING BRAKE:** Freeze the crossing distance for the next pair, allowing a deliberate close or distant crossing.
- **Mastery:** Aim at the space where the lanes should meet, not simply at the target's current position.
- **Counterplay:** Both lanes are visible; the crossing point is telegraphed; moving before the crossing avoids the convergence.
- **Why it stays:** It is a dual-lane geometry pistol with a controllable meeting point.

### 045 — Fragment Launcher
- **Rarity:** Altered
- **Category / slot:** Break-shell launcher / Primary
- **Core identity:** A shell that fractures into a controllable arc.
- **Normal firing loop:** Fires one glassy shell that travels intact. Press Weapon Action while it is in flight to fracture it into five small pieces arranged in a shallow arc. The longer the shell travels before fracture, the wider the arc becomes, up to a fixed cap.
- **Weapon Action — BREAK POINT:** Fracture the shell immediately at the current position. The player can trigger only one fracture per shell.
- **Mastery:** Control the fracture distance to choose between a tight cluster and a broad sweep.
- **Counterplay:** The intact shell is visible; fracture produces a bright flash and audible crack; fragments travel on fixed paths.
- **Why it stays:** The player controls when a single projectile becomes a pattern.

### 049 — Arc Launcher
- **Rarity:** Evolved
- **Category / slot:** Vertical arc launcher / Primary
- **Core identity:** A projectile that climbs vertically before the player redirects its descent.
- **Normal firing loop:** Fires a compact orb that rises vertically above the muzzle, then pauses at its apex. During the pause, the player can aim once to set its descent direction within a limited forward-facing cone. The orb then drops in a straight line.
- **Weapon Action — TOP FLOOR:** Extend the apex pause slightly, but make the descent marker visible to everyone.
- **Mastery:** Use the vertical rise to reach over low cover, then choose a descent lane.
- **Counterplay:** The orb's ascent and apex are visible; the descent marker gives a warning; ceilings block the path.
- **Why it stays:** It creates a vertical firing arc with a deliberate mid-flight decision.

### 053 — Echo Rifle
- **Rarity:** Altered
- **Category / slot:** Echo rifle / Primary
- **Core identity:** A delayed copy that repeats the first projectile's path with a visible offset.
- **Normal firing loop:** Fires one normal projectile. A moment later, a smaller echo projectile repeats the exact path with a fixed lateral offset. The echo cannot hit the same opponent if the first projectile already hit them, preventing a guaranteed double hit.
- **Weapon Action — REPLAY:** Delay the echo for a little longer and move its offset to the opposite side. The selected offset is displayed before firing.
- **Mastery:** Lead a target with the first shot while anticipating where the echo lane will pass.
- **Counterplay:** The echo is clearly signalled by a second reticle line and a distinct sound; its route is fixed.
- **Why it stays:** Every shot has a second, predictable lane that creates interesting timing.

### 055 — Tempo Rifle
- **Rarity:** Commonplace
- **Category / slot:** Timing rifle / Primary
- **Core identity:** A moving release window controls the shot pattern.
- **Normal firing loop:** Holding fire starts a visible timing needle moving across a short meter. Releasing at the centre fires three tightly grouped projectiles; releasing early or late fires a wider, less consistent pattern. There is no random critical bonus and no damage multiplier beyond the fixed pattern differences.
- **Weapon Action — OFF BEAT:** Reverse the needle direction for the next shot.
- **Mastery:** Learn the release timing while tracking a moving opponent.
- **Counterplay:** The charge meter is visible to the user and the weapon has a distinct audio wind-up; the shot still travels along a normal, avoidable path.
- **Why it stays:** Accuracy is a deliberate timing skill rather than a passive stat.

### 059 — Linked-Charge Launcher
- **Rarity:** Evolved
- **Category / slot:** Linked-charge launcher / Primary
- **Core identity:** Two charges sharing one countdown and able to exchange positions.
- **Normal firing loop:** Fires two small sticky charges in sequence. The first begins a shared countdown; the second attaches to a different valid surface or the same surface nearby. When the timer ends, both release small outward pulse rings simultaneously. The charges do not create damaging explosions.
- **Weapon Action — SWAP:** Exchange the two charges' positions once before the countdown ends.
- **Mastery:** Place a pair, then swap them to alter the final pulse lanes.
- **Counterplay:** Both charges show the same visible timer; either can be destroyed; the pulse rings are telegraphed.
- **Why it stays:** It is a paired placement puzzle with a shared clock.

### 064 — Scatter Launcher
- **Rarity:** Altered
- **Category / slot:** Braced fan launcher / Primary
- **Core identity:** A fan pattern shaped by the player's movement.
- **Normal firing loop:** When stationary, fires a narrow vertical fan. While moving left or right, the fan rotates toward the direction of movement. While airborne, it fires a compact downward fan. The three patterns are fixed and shown on the weapon's front display.
- **Weapon Action — SET YOUR FEET:** Briefly lock the current fan orientation, even if the player changes movement direction.
- **Mastery:** Use movement to shape the spread and choose when to lock it.
- **Counterplay:** The weapon's orientation is visible; the fan is short-ranged; the lock has a clear activation cue.
- **Why it stays:** The player's movement direction directly changes the projectile geometry.

### 069 — Wave Shotgun
- **Rarity:** Commonplace
- **Category / slot:** Wave shotgun / Primary
- **Core identity:** A broad horizontal wave that folds inward at maximum range.
- **Normal firing loop:** Fires one flat horizontal energy sheet. It travels forward at a steady speed, then folds inward into a narrow vertical ribbon at its maximum range before disappearing. It hits each opponent once per shot.
- **Weapon Action — SHUTTER:** Fold the next wave inward early at the point currently marked by the reticle.
- **Mastery:** Control whether the wave covers a broad close lane or becomes a narrow distant lane.
- **Counterplay:** The wave is highly visible; jumping over or moving around its fixed height avoids it; solid cover blocks it.
- **Why it stays:** It changes shape across distance and rewards spatial prediction.

### 074 — Overhead Launcher
- **Rarity:** Altered
- **Category / slot:** Ceiling capsule launcher / Primary
- **Core identity:** A lobbed capsule that sticks to ceilings and drops a marked pulse.
- **Normal firing loop:** Fires a slow capsule in a high arc. If it reaches a valid ceiling, it attaches and projects a visible circle on the floor below. After a short delay, it drops a harmless physical marker that emits a single outward pulse. If no ceiling is reached, it lands and emits the same pulse at ground level.
- **Weapon Action — DROP NOW:** Release the capsule from its current attachment point early.
- **Mastery:** Use ceilings to position a delayed pulse over a route or objective.
- **Counterplay:** The floor marker shows the affected area; the capsule is visible and destructible; the delay is consistent.
- **Why it stays:** It uses vertical arena geometry and ceiling placement as its main skill.

### 082 — Sequence Rifle
- **Rarity:** Evolved
- **Category / slot:** Count-sequence rifle / Primary
- **Core identity:** A counted sequence changes the next shot's geometry.
- **Normal firing loop:** Fires four identical narrow darts. The fifth shot becomes a visible three-pronged fork that travels along fixed diverging lanes. The counter is shown on the weapon and HUD. Reloading resets the sequence.
- **Weapon Action — CARRY OVER:** Preserve the current count through one weapon swap, but the next shot fires at a slower cadence.
- **Mastery:** Track the sequence and prepare the fork shot for the right lane.
- **Counterplay:** The counter is readable; the fifth-shot fork has a unique muzzle cue and visible paths.
- **Why it stays:** The player manages a predictable sequence with a meaningful payoff in projectile geometry, not damage.

### 083 — Arc Rifle
- **Rarity:** Evolved
- **Category / slot:** Marker-linked pulse rifle / Primary
- **Core identity:** A pulse travels between player-placed conductive markers.
- **Normal firing loop:** The weapon can place two small conductive markers on valid surfaces. Firing through one marker sends a pulse along the straight line connecting the pair, then out from the second marker in the direction the player selected during placement. Without a pair, it fires a short direct pulse.
- **Weapon Action — REWIRE:** Rotate the outgoing direction at the second marker once. The new direction is previewed before the next shot.
- **Mastery:** Place a pair with a useful line and choose the exit direction to create an unusual firing lane.
- **Counterplay:** Markers and the connecting line are visible and destructible; the pulse cannot bend through walls.
- **Why it stays:** It lets players construct a temporary two-point firing route.

### 085 — Double-Tap Rifle
- **Rarity:** Commonplace
- **Category / slot:** Paired-shot rifle / Primary
- **Core identity:** A visible lead shot and a delayed, clearly signalled partner.
- **Normal firing loop:** Every trigger pull launches a bright lead projectile. A second projectile launches from the same muzzle after a fixed delay, but along the player's aim direction at the moment of the first shot. The second projectile is slightly offset vertically. It does not track the player's later aim.
- **Weapon Action — LATE ARRIVAL:** Increase the delay for the next pair and show the partner's lane as a ghost line.
- **Mastery:** Lead a target and predict where it will move before the partner arrives.
- **Counterplay:** The second shot has a distinct audio cue and visible ghost lane; both projectiles are avoidable.
- **Why it stays:** The weapon rewards prediction across a fixed time gap.

### 097 — Convergence Launcher
- **Rarity:** Extraordinary
- **Category / slot:** Spiral convergence launcher / Primary
- **Core identity:** A spiral of projectiles converges on a point selected during flight.
- **Normal firing loop:** Launches six small projectiles in a slow, visible spiral. During flight, the player selects a convergence point within a bounded radius. The projectiles curve gently toward that point and meet there, then dissipate. They can hit opponents along their paths but cannot all converge on a moving player automatically.
- **Weapon Action — FRAME IT:** Lock the convergence point early, tightening the spiral and shortening its travel time.
- **Mastery:** Place a convergence point in space, not on a target, and predict when the spiral will arrive.
- **Counterplay:** All six paths and the convergence point are visible; the curve is limited; cover blocks the projectiles.
- **Why it stays:** It is a spatial composition tool with a spectacular but readable projectile pattern.

### 100 — Adaptive Launcher
- **Rarity:** Altered
- **Category / slot:** Cycling shell launcher / Primary
- **Core identity:** A rotating chamber cycles through three shell behaviours.
- **Normal firing loop:** The chamber visibly cycles through three fixed shells: a short straight slug, a shallow arcing capsule, and a wide slow disc. Each trigger fires the next shell. The cycle is deterministic and reload resumes from the next shell rather than resetting.
- **Weapon Action — REORDER:** Swap the next two shells in the chamber. The new order is shown immediately.
- **Mastery:** Track the chamber and choose when to reorder for the next engagement.
- **Counterplay:** The chamber display is visible; each shell has a distinct silhouette and travel speed.
- **Why it stays:** It creates a weapon-management puzzle without random ammunition.

### 105 — Dual-Feed Launcher
- **Rarity:** Extraordinary
- **Category / slot:** Dual-feed launcher / Primary
- **Core identity:** Two distinct projectile feeds that can be cross-combined mid-sequence.
- **Normal firing loop:** The left feed launches a straight pulse; the right feed launches a slow returning crescent. The player can alternate feeds or fire one at a time. When one projectile from each feed is active, the player may trigger a cross-combine: they meet at a visible midpoint and form a brief, non-damaging barrier before both vanish.
- **Weapon Action — SHIFT GEARS:** Change which feed fires first and which side of the midpoint the barrier forms on.
- **Mastery:** Manage two projectile behaviours and deliberately create a temporary barrier at a useful point.
- **Counterplay:** Both feeds have separate visible ammo counters; the midpoint is telegraphed; the barrier is short-lived and blocks both teams equally.
- **Why it stays:** Its two ammunition systems interact with each other instead of simply offering two fire modes.

### 109 — Sidecar Rifle
- **Rarity:** Altered
- **Category / slot:** Companion-shard rifle / Primary
- **Core identity:** A main projectile accompanied by a sidecar taking the opposite route.
- **Normal firing loop:** Fires a main straight bolt and a smaller sidecar shard. The shard initially travels in the opposite lateral direction, then curves back toward the main bolt's original line at a fixed distance. The shard cannot home or retarget.
- **Weapon Action — SIDE ORDER:** Choose whether the sidecar begins left or right before the next shot.
- **Mastery:** Aim the main bolt while using the sidecar to cover a second lane.
- **Counterplay:** Both projectiles are visible; the sidecar's return point is predictable; cover blocks both.
- **Why it stays:** It provides two deliberately different lanes from one trigger pull.

### 148 — Pathing Launcher
- **Rarity:** Extraordinary
- **Category / slot:** Route-drawing bolt launcher / Primary
- **Core identity:** A bolt follows a short route the player sketches in open space.
- **Normal firing loop:** The player briefly draws up to two straight segments in open air using aim movement, then fires a slow bolt that follows that exact route. The route cannot pass through walls, cannot be edited after firing, and has a strict maximum length and turn count.
- **Weapon Action — SHORTCUT:** Remove the final segment before firing, producing a shorter route with a faster arrival.
- **Mastery:** Sketch a useful path through open space and predict where the bolt will emerge.
- **Counterplay:** The route preview is visible to opponents; the projectile is slow; walls and cover block it.
- **Why it stays:** It gives the player direct authorship over a projectile's path without allowing impossible wall-bending.

### 153 — Barrier Projector
- **Rarity:** Evolved
- **Category / slot:** Cluster barrier launcher / Primary
- **Core identity:** A canister creates a moving row of temporary rotating barriers.
- **Normal firing loop:** Fires a canister that bursts into three small floating panels arranged in a row. The panels rotate slowly while drifting forward together, briefly blocking projectiles from both teams. They do not block player movement or deal damage.
- **Weapon Action — CHANGE LANES:** Rotate the row by 90 degrees before it reaches its maximum travel distance.
- **Mastery:** Place a temporary moving obstruction across a firing lane, then rotate it to open or close a different angle.
- **Counterplay:** Panels are bright, destructible, short-lived, and block both teams equally.
- **Why it stays:** It is a moving, temporary piece of arena geometry rather than an explosive weapon.

### 157 — Return-Path Launcher
- **Rarity:** Ascendant
- **Category / slot:** Route-recording capsule / Primary
- **Core identity:** A capsule records its outbound route and returns along a parallel lane.
- **Normal firing loop:** Fires a capsule that travels along a straight path while recording the player's movement during a short recording window. On recall, it returns along a parallel lane offset from the outbound path by a fixed distance. The player chooses left or right offset before recall. It can hit each opponent once total per throw.
- **Weapon Action — EXIT PLAN:** End the recording early and recall immediately, trading route length for a faster return.
- **Mastery:** Use player movement to shape a return lane, then select the side that creates the better crossing.
- **Counterplay:** The capsule and its recorded route are visible; the return offset is announced; the route is bounded and cannot cross walls.
- **Why it stays:** It makes the user's movement trace part of a two-way projectile pattern.

### 161 — Mirror Rifle
- **Rarity:** Singular
- **Category / slot:** Mirrored-lane pulse weapon / Primary
- **Core identity:** A pulse creates a temporary mirrored firing lane with a clearly marked origin.
- **Normal firing loop:** Fires a pulse dart that attaches to a valid surface and projects a visible mirror line across open space. The next shot fired through that line appears from the mirrored point on the opposite side, travelling parallel to the original shot. The mirror line cannot cross walls, cannot create a shot behind solid cover, and expires quickly.
- **Weapon Action — STATIC FLIP:** Rotate the mirror line once by a limited angle before the next shot. The projected exit lane is previewed for everyone.
- **Mastery:** Place the origin, understand the mirrored lane, and fire through it while managing the short lifetime.
- **Counterplay:** The origin, mirror line, and exit lane are visible; the dart is destructible; the effect is short-lived and cannot bypass cover.
- **Why it stays:** It creates a second firing lane through a readable spatial rule, making it the roster's signature reality-bending weapon without granting hidden attacks.

## 4. Roster-wide implementation rules

- The server validates every shot, projectile state, split, redirect, return, pause, marker, field, and impact.
- Every spawned object has a strict lifetime, range, active-object cap, and cleanup rule.
- Any mechanic that changes movement or blocks projectiles must affect all players under the same rules unless a specific exception is explicitly approved.
- No weapon may silently track opponents, pass through solid cover, or create an unavoidable hit.
- All special states must be readable through silhouette, animation, HUD, sound, and world feedback.
- Cosmetic skins and effects may change appearance but never projectile count, collision size, travel speed, path, warning time, damage, duration, hit registration, or counterplay.
- Weapon actions use the universal Weapon Action input and have individual cooldowns or clearly defined availability limits.
- Prototype stats must be balanced only after the weapon's unique mechanic works and feels distinct.

## 5. Acceptance test for every weapon

A rebuilt weapon is not accepted until it passes all of these checks:

1. **Blind recognition:** a player can identify its signature behaviour from a short gameplay clip without reading its name.
2. **Hands-on distinction:** after a short test, players describe a different action or decision loop, not merely different damage or cadence.
3. **Commonplace quality:** even the simplest rarity tier feels complete, expressive, and satisfying.
4. **Opponent readability:** opponents can identify the threat and understand how to avoid, block, interrupt, or out-position it.
5. **No duplicate loop:** no other active weapon creates the same combination of projectile, travel, impact, timing, and mastery.
6. **Cosmetic safety:** every skin preserves the exact gameplay read and all competitive timings.
7. **Roblox performance:** projectile and temporary-object counts remain bounded and performant on supported devices.

If a weapon fails, redesign its mechanic. Do not rescue it with higher damage, a more dramatic skin, or a rarity upgrade.
