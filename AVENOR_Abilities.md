# AVENOR — Player Abilities

> **Roster status: CURATED.** The previous concept dump was too large and contained too many map toys, cosmetic gags, and mechanics that would rarely matter in a competitive match. This document replaces that dump with a smaller, gameplay-first roster. Cut concepts are archived at the end so they are not mistaken for active designs.

## 1. Ability System Rules

- Each player equips exactly **one player ability**.
- Player abilities are separate from weapon actions and equipment.
- An ability must create a meaningful combat, movement, information, deception, or team-play decision.
- An ability must have a clear use case in a real match, readable activation and outcome, and practical counterplay.
- No ability should exist solely because its visual effect is funny or technically possible.
- Abilities must not grant unavoidable kills, erase an opponent's successful actions, or undermine server-authoritative combat.
- Rarity communicates originality, uniqueness, complexity, presentation, or exclusivity. It does **not** automatically mean stronger.
- Exact cooldowns, durations, ranges, charges, and values remain **TBD** until prototyping and playtesting.
- Server validation is required for every ability effect that changes position, movement, information, or combat outcomes.

## 2. Active Ability Roster

<small>Only the abilities below are currently retained. Each has a defined match purpose. The roster is intentionally small until these concepts are prototyped and proven.</small>

### Commonplace

#### JUST CHECKING
- **Role:** Safe information peek.
- **Concept:** Deploy a brief camera peek around the nearest eligible corner while the player's body stays in place. The view cannot pass through walls or inspect multiple rooms.
- **Why it stays:** Gives a player a deliberate information option without granting free wall vision.
- **Counterplay:** The camera has a visible indicator and distinct sound. The user remains stationary and vulnerable; the peek has a strict angle and duration limit.

#### STAY THERE
- **Role:** Movement setup.
- **Concept:** Place a visible marker on a valid surface. The player's next jump receives a controlled directional boost toward that marker.
- **Why it stays:** Rewards planning routes and creates a useful movement choice rather than a passive stat bonus.
- **Counterplay:** The marker is visible, only one jump is affected, and the boost cannot carry the player through solid geometry or outside valid map bounds.

#### PERSONAL SPACE
- **Role:** Close-range disruption.
- **Concept:** Release a short-range directional pulse that pushes nearby players away from the user. It deals no damage.
- **Why it stays:** Creates a clear defensive answer when an opponent gets too close, with timing and facing direction mattering.
- **Counterplay:** Short range, clear wind-up, directional effect, and no protection from gunfire. Opponents outside the pulse area are unaffected.

### Altered

#### WRONG WAY
- **Role:** Audio deception.
- **Concept:** Place a short-lived false footstep trail that travels along a chosen route away from the user's actual position.
- **Why it stays:** Can bait a rotation or make an opponent hesitate without hiding the real player.
- **Counterplay:** The trail is brief, cannot imitate gunfire or ability activations, and attentive players can compare it with other information.

#### NOT INCLUDED
- **Role:** Quiet repositioning.
- **Concept:** Temporarily suppress the user's footstep and landing audio. Weapon sounds, reloads, jumps' visual cues, and the character remain fully detectable.
- **Why it stays:** Supports a deliberate flank or reposition, but does not make the player invisible or silent in every respect.
- **Counterplay:** Short duration, activation cue, and unchanged weapon/interaction sounds.

#### RECEIPT
- **Role:** Route warning.
- **Concept:** Attach a small sensor to a valid surface. The first opponent to cross its narrow detection line triggers a directional alert to the owner. The sensor then burns out.
- **Why it stays:** Provides one useful piece of route information without tracking an opponent continuously.
- **Counterplay:** Visible device, one trigger only, limited placement surfaces, and no exact live position.

### Evolved

#### KEEP THE CHANGE
- **Role:** Momentum control.
- **Concept:** Store a capped portion of the user's current horizontal momentum for a short window, then release it in a chosen direction. It cannot store momentum indefinitely or exceed the game's movement speed ceiling.
- **Why it stays:** A skill-based movement tool with timing, route planning, and a clear mastery curve.
- **Counterplay:** The stored charge is visible, the release has a readable cue, and the speed ceiling prevents impossible launches.

#### STICK AROUND
- **Role:** Grapple / recovery movement.
- **Concept:** Fire a tether at a valid surface and pull the user toward the anchor. The tether can attach only to approved geometry, not players.
- **Why it stays:** Gives players a direct way to recover a route, cross a gap, or reach a planned position.
- **Counterplay:** Visible tether line, limited range, brief attachment window, and no damage or enemy displacement.

#### SECOND OPINION
- **Role:** Directional threat information.
- **Concept:** Send a pulse that reports the approximate direction of the nearest opponent within a limited radius. It never reveals an exact position, distance, outline, or through-wall marker.
- **Why it stays:** Useful when deciding whether to push, hold, or rotate, while leaving the actual fight to player skill.
- **Counterplay:** Imprecise direction, limited range, activation sound, and a cooldown. It does not update continuously.

#### INVENTORY CHECK
- **Role:** Tactical loadout intelligence.
- **Concept:** Scan a small area and report the number of nearby opponents carrying each broad ability/equipment category. It does not identify players or reveal their positions.
- **Why it stays:** Helps a team make a tactical decision before committing, rather than acting as a wallhack.
- **Counterplay:** Category-level information only, no exact count for a specific player, limited radius, and a clear scan cue.

### Ascendant

#### COVER ME
- **Role:** Decoy / attention split.
- **Concept:** Create one holographic copy that replays a short, recent segment of the user's movement. It cannot shoot, collide, collect items, or trigger interactions. The real player remains fully visible and vulnerable.
- **Why it stays:** A decoy that can create a moment of uncertainty in a duel without producing fake damage or fake hit feedback.
- **Counterplay:** One copy, short replay, obvious holographic tells at close range, and no ability to block shots or occupy physical space.

#### READ THE ROOM
- **Role:** Sound intelligence.
- **Concept:** Convert recent eligible sound events in a limited area into brief directional indicators. Each indicator fades quickly and represents an event that already happened.
- **Why it stays:** Rewards listening and gives a player a useful read after a noisy fight without exposing live enemy positions.
- **Counterplay:** Only recent events, approximate direction, no identity or exact location, and quiet opponents may leave little information.

#### BACK SEAT DRIVER
- **Role:** Remote reconnaissance.
- **Concept:** Deploy a small camera drone and temporarily operate its view to inspect nearby sightlines. The player's body stays stationary and vulnerable. The drone cannot mark, damage, block, or interact.
- **Why it stays:** A high-commitment information tool. The user trades personal safety and weapon readiness for a better view.
- **Counterplay:** Audible deployment, visible drone, limited battery/range, destructible device, and the user's body remains exposed.

#### NO SIGNAL
- **Role:** Anti-recon protection.
- **Concept:** Create a brief field around the user that prevents enemy ability-generated tracking and scan markers from attaching to players inside it. It does not block normal vision, sound, bullets, or map information.
- **Why it stays:** A direct counter-pick to information-heavy strategies, with a narrow and understandable job.
- **Counterplay:** The field is visible, stationary or slow-moving, short-lived, and does not hide players from ordinary sight.

### Extraordinary

#### MY BAD
- **Role:** Mobility / repositioning.
- **Concept:** Rewind only the user's position along their recent valid movement path by a short duration. Health, damage, ammunition, eliminations, enemy actions, and objective progress are not undone.
- **Why it stays:** A distinctive escape and reposition tool with a strong skill ceiling, but no combat-state reset.
- **Counterplay:** The rewind path is visible through fragmented afterimages; it cannot pass through solid geometry or end in an occupied/invalid position. Activation has a clear audio-visual cue.

#### GRAND ENTRANCE
- **Role:** Committed vertical reposition.
- **Concept:** Select a valid nearby landing surface. A visible marker appears, followed by a brief launch-and-travel sequence that moves the user to that location.
- **Why it stays:** Offers a dramatic route change that requires commitment and can be read by opponents.
- **Counterplay:** The destination is announced, the travel is interruptible, the landing zone is restricted, and the user cannot fire during the sequence.

#### THE USUAL SUSPECT
- **Role:** Multi-decoy deception.
- **Concept:** Create two holographic copies that briefly move away from the user along separate, preselected paths. They cannot shoot, collide, collect items, or interact.
- **Why it stays:** A stronger mind-game than a static fake silhouette, but still only creates uncertainty rather than false combat events.
- **Counterplay:** Short duration, clear holographic tells at close range, no fake muzzle flashes or hit reactions, and the real player remains visible.

## 3. Removed and Rejected Concepts

The following concepts are **not active abilities**. They were removed because they were too situational, too dependent on special map geometry, too close to equipment, too cosmetic, too weak to justify a loadout slot, or too similar to a stronger retained concept.

### Removed from the documented batches 02–03

- **SMALL TALK** — Redundant with SECOND OPINION; the vague nearby/not-nearby result was not useful enough.
- **BAD TIMING** — A small slow patch is a weak trap and belongs, if anywhere, in equipment.
- **PERSONAL ASSISTANT** — Automatic ammo pickup is convenience, not a meaningful ability.
- **OUT OF STOCK** — Pickup denial creates awkward map rules and little reliable combat value.
- **NICE TRY** — Cosmetic reaction with no useful gameplay outcome.
- **LOST PROPERTY** — Delayed alert is weaker and less readable than a proper sensor.
- **FREE SAMPLE** — Fake pickups are a gimmick and risk confusing core map readability.
- **NO REFUNDS** — Too narrow and difficult to communicate as a loadout choice.
- **WRONG FLOOR** — Fake floor panels are map-dependent trap gimmicks.
- **GOOD QUESTION** — Attention detection has little practical value.
- **SPARE CHANGE** — Sound-only distraction is too weak as a full ability.
- **HOUSEKEEPING** — Door control is map-specific and can create frustrating route locks.
- **LATE ARRIVAL** — Delayed static copy is weaker than THE USUAL SUSPECT.
- **FRESH COAT** — Outline recolouring does not create reliable deception in a competitive shooter.
- **ESCALATOR** — Moving walkway has little combat value.
- **THIRD WHEEL** — Following platform is a novelty, not a meaningful tactical choice.
- **OPEN HOUSE** — Mass door unlocking depends too heavily on map layout.
- **WRONG EXIT** — Fake exit marker is a visual gag with no strong match purpose.
- **FINE, I'LL DO IT** — Automating a map switch is convenience, not player skill.
- **THE LONG WAY** — Temporary curved walkway is a construction gimmick.
- **BUFFERING** — Animation-only decoy is too easy to ignore and too weak for a slot.
- **TERMS AND CONDITIONS** — Global fixed-speed zone is disruptive and hard to balance cleanly.
- **DOUBLE BOOKED** — Launch-pad pair is a map toy and overlaps with traversal equipment.
- **FLOOR IS LAVA** — Slow zones are generic area denial and fit equipment better.
- **PUBLIC TRANSPORT** — Autonomous moving platform has little direct tactical value.
- **GOOD NEIGHBOURS** — Helping opponents at the same time makes the effect unreliable.
- **JUST PASSING THROUGH** — Creating wall openings requires bespoke map support and breaks route consistency.
- **UNDER CONSTRUCTION** — Temporary staircase is another map-building gimmick.
- **THAT'S NOT MINE** — Cosmetic deployable copy has no meaningful function.
- **FLOOR PLAN** — Static overhead map adds little to moment-to-moment play.
- **SECOND HAND** — Replaying a movement path as a platform is overcomplicated and low value.
- **FLOOR MANAGER** — Rotating map platforms is a gimmick.
- **TIME OFF** — A no-action bubble that only resists displacement is not worth a slot.
- **PUBLIC APOLOGY** — Deliberately revealing your own position is a joke, not a competitive ability.
- **THE FLOOR PLAN WAS WRONG** — Room-wide gravity rotation creates major movement, camera, and map-readability problems.
- **I'LL TAKE THAT** — Borrowing neutral mechanism functionality is too dependent on bespoke map objects.
- **WHO'S DRIVING?** — Autonomous vehicle is a moving-platform gimmick.
- **MIND THE GAP** — Removing part of a walkway is a map-specific trap.
- **THE FLOOR IS YOURS** — Moving floor sections create spectacle without a dependable tactical purpose.
- **PLEASE HOLD** — Queueing enemy players removes control in a frustrating and hard-to-read way.
- **FINAL NOTICE** — Deleting all ability objects in an area is mostly a maintenance button.
- **SPARE KEY** — Door access is map-dependent and not a strong competitive ability.
- **QUIET HOURS** — Sound dampening zone is too subtle and hard to read.
- **GOOD AS NEW** — Repairing neutral mechanisms is maintenance, not combat gameplay.
- **CHECK ENGINE** — Mechanism timing is too niche.
- **DO NOT DISTURB** — Door locking can create frustrating map locks.
- **ON THE HOUSE** — Giving equipment charges is better handled by equipment rules and team economy.
- **PAPER TRAIL** — Route breadcrumbs are communication clutter.
- **NO WORRIES** — Slide cancellation is a movement setting, not a full ability.
- **DEAD AIR** — Delaying audio cues risks confusing players about event timing.
- **OPEN SECRET** — Secret passage detection depends on map secrets that competitive maps should not require.
- **OUT OF ORDER** — Mechanism disabling is another map-specific denial tool.
- **ONE MORE THING** — Repeating a harmless visual effect has no meaningful purpose.
- **LOOSE THREAD** — Cable traversal overlaps with STICK AROUND and is better represented by one clear movement ability.
- **WINDOW SHOPPING** — Pickup inventory information is too situational.
- **UNDER THE TABLE** — Special hiding spaces encourage passive play and require bespoke map geometry.
- **SHORT NOTICE** — Temporary platform creation is another low-value map toy.
- **WEIGHT LIMIT** — Fall-speed reduction is too niche for a full ability slot.
- **FLOOR SERVICE** — Deployable cover belongs in equipment, not player abilities.
- **STAND-IN** — Static hologram is weaker than a moving decoy.
- **EARLY ACCESS** — Opening alternate map routes depends on bespoke map logic.
- **THE SHORTCUT** — Launch ramp overlaps with traversal equipment and map gimmicks.
- **STICKER PRICE** — Marking the next user of an object is too niche.
- **NO RUSH** — Slowing map mechanisms has little direct combat value.
- **MEASURE TWICE** — Temporary bridge construction is map-building, not combat utility.
- **SHIFT CHANGE** — Reversing map platforms is too map-dependent.
- **SAFETY INSPECTION** — Hazard scanning only matters on maps with hazards; competitive arenas should keep hazards obvious.
- **PASSING LANE** — Floor speed strip is a generic map buff.
- **TIME SHARE** — Pausing a moving mechanism is too niche.
- **NO CUTTING** — Queue-based movement control is awkward and removes player agency.
- **SECOND SHIFT** — A second camera is redundant with BACK SEAT DRIVER.
- **ROOM SERVICE** — Furniture rearrangement is a gimmick.
- **YOU FIRST** — Platform routing has low combat value.
- **SMOKE BREAK** — A transparent room has no clear tactical advantage.
- **THE USHER** — Softly steering players is frustrating and difficult to communicate.
- **LOST IN TRANSIT** — Paired map teleport points require bespoke map infrastructure.
- **RENT CONTROL** — Platform resizing is spectacle, not a reliable tactical choice.
- **OUT OF POCKET** — Deployable room is an oversized construction gimmick.
- **THE BUILDING INSPECTOR** — Revealing valid surfaces is editor/debug information, not player-facing gameplay.
- **NOT MY DEPARTMENT** — Resetting neutral mechanisms is maintenance.
- **THE COMMITTEE** — Three-platform staircase is another moving-platform gimmick.
- **EVERYBODY OUT** — Forced room evacuation removes control and depends on special room geometry.
- **GROUND FLOOR** — Moving a platform to its lowest point has little reliable combat value.
- **THIS IS A TEST** — Visual-only duplicate geometry is a cosmetic trick.
- **LOCAL TIME** — Mechanism speed control is too niche.
- **THE BUILDING MOVED** — Multi-platform rearrangement is a map gimmick.
- **PLEASE USE OTHER DOOR** — Paired doorway manipulation is map-dependent.
- **TERMS OF LEASE** — Room rule changes are complicated, inconsistent, and difficult to balance.

### Review rule for future concepts

A new ability must answer **yes** to all of these before it enters the active roster:

1. Can a player name a realistic situation where they would choose it over another ability?
2. Does it create a meaningful decision during a match, not just a visual event?
3. Can opponents understand what happened and respond fairly?
4. Does it work across multiple maps without bespoke geometry or special room rules?
5. Does it offer something the active roster does not already do?

If not, cut it or redesign it before approval. Do not inflate the roster to hit a target number.
