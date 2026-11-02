> **Current AVENOR integration rules (2026 direction):** Abilities are part of the shared player combat kit for the Open World and eligible competitive playlists. They remain separate from weapon unlocks. No ability unlock may grant a weapon; all weapon ownership comes from Open World discovery. Abilities must work with unrestricted sprinting, jumping, sliding and slide-jumping, and must not depend on stamina. Cooldowns, clear activation feedback, counterplay and platform parity remain mandatory. This existing ability catalogue is a content library, not a promise that every entry ships at launch. The main game identity and shared rules in `AVENOR_Main.md` take precedence if any older wording conflicts.

---

# AVENOR — Player Abilities

> **Roster status: 50 curated concepts.** This roster was rebuilt from a 100-concept evaluation pool. The target was not to keep 50 names; it was to keep 50 abilities with distinct, repeatable match value. The rejected half is recorded in the review section. The proposed prototype specifications are documented in Section 6. Values remain subject to playtesting.

## 1. Ability System Rules

- Each player equips exactly **one player ability**.
- Player abilities are separate from weapon actions.
- An ability must create a meaningful decision in a real match: movement, information, deception, defence, disruption, or team coordination.
- Every ability needs a clear activation cue, readable outcome, counterplay, and a use case that works across multiple maps.
- No ability exists solely for a visual gag, convenience, or interaction with a special map prop.
- Abilities must not guarantee eliminations, hide unavoidable effects, or erase successful combat outcomes.
- Rarity communicates originality, uniqueness, complexity, presentation, or exclusivity. It does **not** automatically mean stronger.
- Exact cooldowns, durations, ranges, charges, and values remain **TBD** until prototyping and playtesting.
- Server validation is required for every ability effect that changes position, movement, information, or combat outcomes.
- The roster is not a promise that all 50 ship in the first release. Prototype and balance testing may still remove or merge concepts.

## 2. Active Ability Roster

### Commonplace

#### 01. JUST CHECKING
- **Role:** Safe information peek.
- **Concept:** Deploy a brief camera peek around the nearest eligible corner while the player's body stays in place. The view cannot pass through walls or inspect multiple rooms.
- **Why it earns a slot:** Offers deliberate information gathering without granting free wall vision.
- **Counterplay:** The camera has a visible indicator and distinct sound. The user remains stationary and vulnerable; the peek has a strict angle and duration limit.

#### 02. STAY THERE
- **Role:** Jump setup / movement.
- **Concept:** Place a visible marker on a valid surface. The player's next jump receives a controlled directional boost toward that marker.
- **Why it earns a slot:** Rewards route planning and lets players prepare a movement option before committing.
- **Counterplay:** The marker is visible, only one jump is affected, and the boost cannot pass through solid geometry or exceed movement limits.

#### 03. PERSONAL SPACE
- **Role:** Close-range disruption.
- **Concept:** Release a short-range directional pulse that pushes nearby players away from the user. It deals no damage.
- **Why it earns a slot:** Creates a timing-based answer to an opponent entering close range.
- **Counterplay:** Short range, clear wind-up, directional effect, and no protection from incoming fire.

#### 04. SOFT LANDING
- **Role:** Fall recovery.
- **Concept:** Briefly suppress landing slowdown and camera jolt from a fall, allowing the player to keep moving smoothly after dropping from height.
- **Why it earns a slot:** Turns vertical route choices into a deliberate movement decision without granting extra jump height or flight.
- **Counterplay:** Must be activated before landing, has a clear activation cue, and does not reduce damage from any fall-damage system if one exists.

#### 05. SPOT CHECK
- **Role:** Recent-threat information.
- **Concept:** Briefly highlights the direction of the most recent nearby non-weapon gameplay sound, such as a jump, landing, slide, or ability activation.
- **Why it earns a slot:** Gives a useful clue in quiet moments without revealing exact enemy locations.
- **Counterplay:** Reports one recent event only, gives approximate direction, and cannot identify the source or track it.

#### 06. COVER CALL
- **Role:** Team communication.
- **Concept:** Send a short, unmistakable team-only directional callout toward the point the user is currently looking at. Teammates see a brief world marker, not an enemy outline.
- **Why it earns a slot:** Makes coordinated play easier without giving solo players extra information.
- **Counterplay:** The marker identifies the called direction/area, not a confirmed enemy; it can be stale or inaccurate if the situation changes.

#### 07. DEAD STOP
- **Role:** Movement control.
- **Concept:** Instantly cancel the user's slide or sprint momentum and enter a controlled stop. It does not grant invulnerability or change the player's hitbox.
- **Why it earns a slot:** A precise movement tool for players who want to stop at a corner or avoid overshooting.
- **Counterplay:** The stop is audible, does not hide the player, and sacrifices momentum rather than creating speed.

#### 08. SECOND OPINION
- **Role:** Directional threat information.
- **Concept:** Send a pulse that reports the approximate direction of the nearest opponent within a limited radius. It never reveals exact position, distance, outline, or a through-wall marker.
- **Why it earns a slot:** Helps decide whether to push, hold, or rotate while leaving the actual engagement to player skill.
- **Counterplay:** Imprecise direction, limited range, activation sound, and a cooldown. It does not update continuously.

### Altered

#### 09. WRONG WAY
- **Role:** Audio deception.
- **Concept:** Place a short-lived false footstep trail that travels along a chosen route away from the user's actual position.
- **Why it earns a slot:** Can bait a rotation or make an opponent hesitate without hiding the real player.
- **Counterplay:** Brief duration, distinct subtle audio texture, and cannot imitate gunfire or ability activations.

#### 10. NOT INCLUDED
- **Role:** Quiet repositioning.
- **Concept:** Temporarily suppress the user's footstep and landing audio. Weapon sounds, reloads, visual cues, and the character remain detectable.
- **Why it earns a slot:** Supports a deliberate flank without making the player invisible or completely silent.
- **Counterplay:** Short duration, activation cue, and unchanged weapon/interaction sounds.

#### 11. RECEIPT
- **Role:** Route warning.
- **Concept:** Attach a small sensor to a valid surface. The first opponent to cross its narrow detection line triggers a directional alert to the owner. The sensor then burns out.
- **Why it earns a slot:** Provides one useful piece of route information without continuously tracking an opponent.
- **Counterplay:** Visible device, one trigger only, limited placement surfaces, and no exact live position.

#### 12. FALSE START
- **Role:** Audio bait.
- **Concept:** Emit one short burst of convincing movement audio from a chosen nearby point, as if a player had started sprinting and sliding away.
- **Why it earns a slot:** A simple, deliberate bait that can draw attention away from a real rotation.
- **Counterplay:** One short event only, no repeated footsteps, no visual decoy, and experienced players can recognise its limited pattern.

#### 13. STATIC CLING
- **Role:** Vertical repositioning.
- **Concept:** Briefly attach the user to a valid vertical surface, allowing a controlled sideways move before dropping. It cannot attach to ceilings or pass through geometry.
- **Why it earns a slot:** Adds a compact wall-route option without turning the game into unrestricted wall-running.
- **Counterplay:** Attachment point is visible, duration is short, the user cannot fire while attached, and the move has a distinct sound.

#### 14. TAG, YOU'RE IT
- **Role:** Short-lived team mark.
- **Concept:** After directly seeing an opponent, activate a brief mark on that opponent. The mark is shared with teammates but fades quickly and does not follow the target through walls.
- **Why it earns a slot:** Rewards a player for confirming visual contact and sharing it with the team.
- **Counterplay:** Requires direct line of sight at activation, short duration, visible mark effect, and breaks when the target is fully occluded.

#### 15. GHOST NOTE
- **Role:** Sound masking.
- **Concept:** Create a brief sound decoy at the activation point that masks the sound of the user's next movement burst. It does not silence weapons or other actions.
- **Why it earns a slot:** Combines a limited audio feint with a real reposition, creating a timing decision.
- **Counterplay:** The decoy is local and brief; the user's movement remains visible and later sounds are normal.

#### 16. CUT THE FEED
- **Role:** Anti-tracking.
- **Concept:** Remove active enemy ability-generated marks from the user and one nearby teammate. It does not remove ordinary visual information or undo a scan that has already reported an area.
- **Why it earns a slot:** A direct, understandable answer to mark-based information abilities.
- **Counterplay:** Must be timed after a mark is applied, has a limited radius, and does not make players immune to future scans.

#### 17. OVERDRAFT
- **Role:** Burst movement with a cost.
- **Concept:** Gain a short sprint acceleration burst. When it ends, the user has a brief acceleration penalty, but normal movement and weapon use remain available.
- **Why it earns a slot:** A clear choice between winning space now and accepting a predictable recovery window.
- **Counterplay:** Audible activation, visible movement trail, limited burst, and a defined recovery penalty.

### Evolved

#### 18. KEEP THE CHANGE
- **Role:** Momentum control.
- **Concept:** Store a capped portion of the user's current horizontal momentum for a short window, then release it in a chosen direction. It cannot store momentum indefinitely or exceed the game's movement speed ceiling.
- **Why it earns a slot:** A skill-based movement tool with timing, route planning, and a mastery curve.
- **Counterplay:** Stored charge is visible, release has a readable cue, and a speed ceiling prevents impossible launches.

#### 19. STICK AROUND
- **Role:** Grapple / recovery movement.
- **Concept:** Fire a tether at a valid surface and pull the user toward the anchor. The tether cannot attach to players.
- **Why it earns a slot:** Lets players recover a route, cross a gap, or reach a planned position.
- **Counterplay:** Visible tether line, limited range, brief attachment window, and no damage or enemy displacement.

#### 20. READ THE ROOM
- **Role:** Sound intelligence.
- **Concept:** Convert recent eligible sound events in a limited area into brief directional indicators. Each indicator fades quickly and represents an event that already happened.
- **Why it earns a slot:** Rewards listening and gives a useful read after a noisy fight without exposing live enemy positions.
- **Counterplay:** Only recent events, approximate direction, no identity or exact location, and quiet opponents may leave little information.

#### 21. COVER ME
- **Role:** Decoy / attention split.
- **Concept:** Create one holographic copy that replays a short, recent segment of the user's movement. It cannot shoot, collide, collect items, or trigger interactions. The real player remains vulnerable.
- **Why it earns a slot:** Creates uncertainty in a duel without producing fake damage or fake hit feedback.
- **Counterplay:** One copy, short replay, clear holographic tells at close range, and no physical collision.

#### 22. INVENTORY CHECK
- **Role:** Tactical loadout intelligence.
- **Concept:** Scan a small area and report which broad ability categories are represented among nearby opponents. It does not identify players or reveal their positions.
- **Why it earns a slot:** Helps a team make a tactical decision before committing, rather than acting as a wallhack.
- **Counterplay:** Category-level information only, limited radius, no individual loadout reveal, and a clear scan cue.

#### 23. SIDE STEP
- **Role:** Evasive repositioning.
- **Concept:** Perform a sharp, fixed-distance lateral burst in the direction chosen at activation. It cannot pass through walls, players, or other solid geometry.
- **Why it earns a slot:** A fast, readable reposition that rewards timing and direction choice.
- **Counterplay:** Fixed distance, clear start/end animation, no invulnerability frames, and a cooldown.

#### 24. LAST KNOWN
- **Role:** Information memory.
- **Concept:** Briefly place a marker at the last position where the user personally saw an opponent. The marker represents stale information and does not update if the opponent moves.
- **Why it earns a slot:** Helps communicate a last-seen location without turning it into live tracking.
- **Counterplay:** Marker visibly ages and fades; it is not an enemy outline and can become inaccurate immediately.

#### 25. COUNTERWEIGHT
- **Role:** Anti-displacement defence.
- **Concept:** Anchor the user's movement for a short window, reducing pushes and forced movement while leaving ordinary movement and incoming damage unchanged.
- **Why it earns a slot:** Gives players a deliberate way to hold a position against displacement-focused abilities.
- **Counterplay:** Activation cue, short duration, no damage reduction, and the user gives up the ability to use a movement burst while anchored.

#### 26. CROSSFADE
- **Role:** Decoy-assisted reposition.
- **Concept:** Leave a visible holographic afterimage at the activation point, then make a short lateral or backward dash. The afterimage remains still and cannot interact.
- **Why it earns a slot:** Creates a clean split-second choice for an opponent: track the real movement or check the decoy.
- **Counterplay:** Short dash, obvious activation cue, no wall traversal, and the decoy does not mimic firing.

#### 27. HARD RESET
- **Role:** Self-cleanse.
- **Concept:** Remove one active non-damaging movement or information debuff from the user, such as a slow or enemy tracking mark. It cannot restore health, undo damage, or cancel an incoming attack.
- **Why it earns a slot:** Gives players one timely answer to control effects without becoming a universal escape button.
- **Counterplay:** Limited to eligible status effects, has no effect if none are active, and has a clear activation cue.

#### 28. BACKLINE
- **Role:** Team reposition.
- **Concept:** Create a visible short-lived tether to one consenting teammate. The user can pull themselves toward that teammate once, but cannot move the teammate or interrupt their actions.
- **Why it earns a slot:** Enables a coordinated regroup or recovery without forcibly moving another player.
- **Counterplay:** Teammate must be within range and in a valid position; tether is visible, can be broken by distance/obstruction, and does not grant invulnerability.

### Ascendant

#### 29. BACK SEAT DRIVER
- **Role:** Remote reconnaissance.
- **Concept:** Deploy a small camera drone and temporarily operate its view to inspect nearby sightlines. The player's body stays stationary and vulnerable. The drone cannot mark, damage, block, or interact.
- **Why it earns a slot:** A high-commitment information tool. The user trades personal safety and weapon readiness for a better view.
- **Counterplay:** Audible deployment, visible drone, limited battery/range, destructible device, and the user's body remains exposed.

#### 30. NO SIGNAL
- **Role:** Anti-recon protection.
- **Concept:** Create a brief field around the user that prevents enemy ability-generated tracking and scan markers from attaching to players inside it. It does not block normal vision, sound, bullets, or map information.
- **Why it earns a slot:** A direct counter-pick to information-heavy strategies, with a narrow and understandable job.
- **Counterplay:** Field is visible, short-lived, and does not hide players from ordinary sight.

#### 31. THE USUAL SUSPECT
- **Role:** Multi-decoy deception.
- **Concept:** Create two holographic copies that briefly move away from the user along separate, preselected paths. They cannot shoot, collide, collect items, or interact.
- **Why it earns a slot:** A meaningful mind-game that creates uncertainty without faking combat events.
- **Counterplay:** Short duration, clear holographic tells at close range, no fake muzzle flashes or hit reactions, and the real player remains visible.

#### 32. GRAND ENTRANCE
- **Role:** Committed vertical reposition.
- **Concept:** Select a valid nearby landing surface. A visible marker appears, followed by a brief launch-and-travel sequence that moves the user to that location.
- **Why it earns a slot:** Offers a dramatic route change that requires commitment and can be read by opponents.
- **Counterplay:** Destination is announced, travel is interruptible, landing zone is restricted, and the user cannot fire during the sequence.

#### 33. BORROWED EYES
- **Role:** Team sightline sharing.
- **Concept:** Link the user's view to one consenting teammate for a short period. The user can see only what that teammate currently sees, while their own character remains stationary and vulnerable.
- **Why it earns a slot:** Creates a high-coordination information play without revealing anything beyond a teammate's actual line of sight.
- **Counterplay:** Both players receive a clear link indicator; either can end it, and the stationary user remains vulnerable.

#### 34. SAFE BET
- **Role:** Defensive timing.
- **Concept:** Deploy a compact personal guard that absorbs one instance of ability-caused displacement or one non-damaging control effect, then breaks. It does not block bullets or reduce damage.
- **Why it earns a slot:** A narrow defensive answer with a clear trigger and finite value.
- **Counterplay:** Visible guard state, one trigger only, does not stop damage, and can be waited out.

#### 35. SECOND WIND
- **Role:** Recovery movement.
- **Concept:** After taking damage, the user may activate a short movement burst. It does not heal, reduce damage, or activate automatically.
- **Why it earns a slot:** Gives a player a choice to disengage or reposition after losing an exchange, without undoing the opponent's hit.
- **Counterplay:** Requires a recent damage event, has a clear activation cue, fixed movement limit, and no damage protection.

#### 36. DEAD RECKONING
- **Role:** Directional sound analysis.
- **Concept:** For a brief window, show the direction and age of the two loudest eligible enemy movement sounds heard by the user. No exact position or identity is shown.
- **Why it earns a slot:** A more deliberate sound-reading tool for players who want to interpret multiple cues.
- **Counterplay:** Only sounds the user could plausibly hear, old events fade, and it cannot reveal silent or distant players.

#### 37. TRADE PLACES
- **Role:** Coordinated teammate reposition.
- **Concept:** Swap positions with one consenting teammate within a limited range. Both positions are checked for valid space before the swap; if either is invalid, the ability fails without moving either player.
- **Why it earns a slot:** A high-skill team play for rescuing a teammate from a bad angle or changing who holds a lane.
- **Counterplay:** Both players receive a clear pre-swap cue, require consent, have a range limit, and the swap cannot pass through walls or occupied geometry.

### Extraordinary

#### 38. MY BAD
- **Role:** Mobility / repositioning.
- **Concept:** Rewind only the user's position along their recent valid movement path by a short duration. Health, damage, ammunition, eliminations, enemy actions, and objective progress are not undone.
- **Why it earns a slot:** A distinctive escape and reposition tool with a strong skill ceiling, but no combat-state reset.
- **Counterplay:** The rewind path is visible through fragmented afterimages; it cannot pass through solid geometry or end in an occupied/invalid position. Activation has a clear audio-visual cue.

#### 39. THE LONG LOOK
- **Role:** Delayed reconnaissance.
- **Concept:** Place a small remote lens on a valid surface. After a short setup, it provides a narrow live view to the user for a limited time. The user's body remains stationary while viewing.
- **Why it earns a slot:** Provides a deliberate, placeable sightline tool that differs from a mobile drone.
- **Counterplay:** Visible lens, distinct setup sound, narrow field of view, limited lifetime, and vulnerable user.

#### 40. DOUBLE TAKE
- **Role:** Deception / timing.
- **Concept:** Create a decoy that repeats the user's last visible movement burst once, then immediately freezes and dissolves. It cannot fire, collide, or interact.
- **Why it earns a slot:** Lets a player fake a quick peek or rotation, with a short and readable trick.
- **Counterplay:** One replay only, obvious dissolve, no fake weapon fire, and it cannot imitate a full player session.

#### 41. DEAD LETTER
- **Role:** Scan redirection.
- **Concept:** If an enemy ability scan targets the user during a short active window, the scan receives a false, preselected direction instead of the user's direction. The user is not hidden from normal sight or sound.
- **Why it earns a slot:** A timing-based counter to one category of information ability, rather than a permanent anti-scan shield.
- **Counterplay:** Requires precise activation, only affects eligible scans, and the visual effect tells opponents that a scan was interfered with.

#### 42. NO VACANCY
- **Role:** Temporary defensive hold.
- **Concept:** Deploy a small, visible frontal energy guard that blocks one brief burst of non-explosive projectile damage from the front, then collapses. The user cannot fire while the guard is active.
- **Why it earns a slot:** Creates a deliberate hold-or-advance decision, with clear directional limits and a real opportunity cost.
- **Counterplay:** Side and rear remain exposed, guard has visible integrity, duration is short, and the user cannot shoot through it.

#### 43. SPLIT DECISION
- **Role:** Multi-route deception.
- **Concept:** Create two short-lived holographic copies that move along different directions from the activation point while the real player can move normally. Copies cannot shoot, collide, or interact.
- **Why it earns a slot:** Creates a readable but challenging target-priority decision in a contested area.
- **Counterplay:** Copies have visible holographic artifacts, no fake weapon effects, short lifetime, and do not hide the real player.

#### 44. OVER THE SHOULDER
- **Role:** Team awareness.
- **Concept:** For a short period, a teammate who accepts the link can send the user a simple directional alert when they directly see an opponent. No outline, exact position, or automatic tracking is shared.
- **Why it earns a slot:** Rewards communication and coordinated pairs without giving a free spectator camera.
- **Counterplay:** Requires a teammate, direct visual confirmation, clear link indicators, and brief directional-only alerts.

#### 45. LAST WORD
- **Role:** Information denial / counterplay.
- **Concept:** Activate a short field that prevents new enemy ability marks from attaching to the user. Existing marks remain and ordinary vision is unaffected.
- **Why it earns a slot:** A proactive timing-based alternative to NO SIGNAL's area protection.
- **Counterplay:** Self-only, short duration, visible activation, and does not remove marks already applied.

### Singular

#### 46. THE CLEAN EXIT
- **Role:** Escape route.
- **Concept:** Mark the user's current position and one valid nearby destination. After a visible charge-up, the user makes a one-way transfer between the two points. The original point remains as a fading marker.
- **Why it earns a slot:** A high-commitment reposition with strong planning and counterplay, not an instant panic button.
- **Counterplay:** Both endpoints are announced, charge-up can be interrupted, destination must be valid and unoccupied, and the user cannot attack during transfer.

#### 47. OPEN SECRET
- **Role:** Temporary information advantage.
- **Concept:** For a short window, the user can see brief silhouettes of opponents only when those opponents produce a loud movement sound within a limited radius. Silhouettes appear for a moment at the sound's origin and never update live.
- **Why it earns a slot:** Combines sound awareness and visual confirmation without providing continuous wall vision.
- **Counterplay:** Loud actions only, brief stale silhouettes, strict range, clear activation cue, and no information on quiet players.

#### 48. THE LAST KNOWN
- **Role:** Team information archive.
- **Concept:** Record the last directly observed position of up to two opponents the user personally saw during a short recording window. On activation, show those old positions to the user's team with a clear age indicator.
- **Why it earns a slot:** Turns the user's own observations into a deliberate team callout rather than generating new enemy information.
- **Counterplay:** Only personally observed opponents, positions become stale, age is explicit, and no tracking occurs after the record.

#### 49. SECOND CHANCE
- **Role:** Movement recovery.
- **Concept:** Place a return marker at the user's current position. Within a short window, the user may trigger a one-time return to that marker if it remains valid. It does not restore health, ammo, or undo combat events.
- **Why it earns a slot:** A planned escape option that rewards preparation and can be baited or pressured.
- **Counterplay:** Marker is visible and destructible, return has a clear cue, the position must remain valid, and the user cannot attack during the return.

#### 50. THE HANDOFF
- **Role:** Coordinated team reposition.
- **Concept:** Link to one consenting teammate. Either player can trigger a one-time swap of their positions after a short visible countdown. Both must remain within range and neither can be in an invalid destination.
- **Why it earns a slot:** Enables a planned team rotation or emergency role swap with meaningful communication and timing.
- **Counterplay:** Both players are warned, countdown is interruptible by breaking range or line of sight, and the swap cannot pass through walls or occupied space.

## 3. Roster Quality Review

The 50 active concepts were selected from a larger 100-concept pool. The review favoured abilities that:
- Work on ordinary competitive maps rather than requiring special rooms, doors, lifts, or moving platforms.
- Have value in more than one narrow situation.
- Create a decision for both the user and the opponent.
- Offer a distinct role instead of being a renamed version of another ability.
- Communicate their effect clearly enough to be fair in a fast FPS.

### Concepts retained from the previous curated roster
JUST CHECKING, STAY THERE, PERSONAL SPACE, WRONG WAY, NOT INCLUDED, RECEIPT, KEEP THE CHANGE, STICK AROUND, SECOND OPINION, INVENTORY CHECK, COVER ME, READ THE ROOM, BACK SEAT DRIVER, NO SIGNAL, THE USUAL SUSPECT, GRAND ENTRANCE, and MY BAD were retained and refined.

### Concepts rejected during the 100-concept review

These ideas were not retained as active abilities. Some could be revisited only if a prototype proves a strong use case.

- **Moving-platform family:** ESCALATOR, THIRD WHEEL, PUBLIC TRANSPORT, SECOND HAND, FLOOR MANAGER, WHO'S DRIVING?, THE FLOOR IS YOURS, SHORT NOTICE, SHIFT CHANGE, YOU FIRST, RENT CONTROL, THE COMMITTEE, GROUND FLOOR, LOCAL TIME, THE BUILDING MOVED.
  - **Reason:** Too dependent on map geometry; spectacle without reliable fight value; difficult to keep readable in a competitive arena.
- **Room and geometry gimmicks:** THE FLOOR PLAN WAS WRONG, JUST PASSING THROUGH, UNDER CONSTRUCTION, THE LONG WAY, MEASURE TWICE, ROOM SERVICE, SMOKE BREAK, OUT OF POCKET, PLEASE USE OTHER DOOR, TERMS OF LEASE.
  - **Reason:** Require bespoke map logic, create inconsistent sightlines, or turn an ability slot into a level-editing tool.
- **Door and mechanism maintenance:** SPARE KEY, HOUSEKEEPING, OPEN HOUSE, FINE, I'LL DO IT, CHECK ENGINE, DO NOT DISTURB, GOOD AS NEW, OUT OF ORDER, TIME SHARE, NOT MY DEPARTMENT.
  - **Reason:** Too map-specific and rarely useful in the actual duel or team fight.
- **Weak cosmetic-only deception:** NICE TRY, GOOD QUESTION, LATE ARRIVAL, FRESH COAT, THAT'S NOT MINE, PUBLIC APOLOGY, STAND-IN, THIS IS A TEST, ONE MORE THING.
  - **Reason:** Visual novelty alone is not enough to justify the ability slot.
- **Weak pickup and convenience effects:** PERSONAL ASSISTANT, FREE SAMPLE, OUT OF STOCK, WINDOW SHOPPING, ON THE HOUSE.
  - **Reason:** Convenience or pickup manipulation lacks enough competitive depth and can interfere with the weapon economy.
- **Weak or frustrating control effects:** BAD TIMING, WRONG FLOOR, TERMS AND CONDITIONS, FLOOR IS LAVA, PLEASE HOLD, NO CUTTING, THE USHER, EVERYBODY OUT.
  - **Reason:** Too easy to become passive traps, forced movement, or arbitrary control that opponents cannot meaningfully answer.
- **Redundant or too narrow information effects:** SMALL TALK, QUICK QUESTION, FLOOR PLAN, OPEN SECRET (old map-secret version), SAFETY INSPECTION, THE BUILDING INSPECTOR, WINDOW SHOPPING, STICKER PRICE.
  - **Reason:** Either too vague, too map-dependent, or inferior to a more useful retained information ability.
- **Redundant traversal and audio effects:** LOOSE THREAD, THE SHORTCUT, WEIGHT LIMIT, NO WORRIES, DEAD AIR, QUIET HOURS, PASSING LANE, GOOD NEIGHBOURS.
  - **Reason:** Overlap with stronger movement/audio concepts or provide too little practical value for a full slot.
- **Redundant camera and room concepts:** SECOND SHIFT, BACK SEAT DRIVER duplicate camera variants, and static observation rooms.
  - **Reason:** Keep one strong remote reconnaissance concept rather than multiple variations.
- **Other low-value concepts:** FINAL NOTICE, FLOOR SERVICE, UNDER THE TABLE, LOST IN TRANSIT, THE BUILDING INSPECTOR, THE FLOOR PLAN WAS WRONG, MIND THE GAP, GROUND FLOOR, FINAL NOTICE.
  - **Reason:** Either better suited to map design, too situational, or not worth the complexity.

## 4. Similarity and balance watchlist

These are intentionally different concepts, but must be tested side by side:
- **WRONG WAY / FALSE START / GHOST NOTE:** Three audio deception approaches. If playtests show one dominates, merge or remove the weakest.
- **COVER ME / THE USUAL SUSPECT / DOUBLE TAKE / SPLIT DECISION:** Four decoy approaches. Their movement patterns and decision value must remain distinct; do not ship all four if they feel interchangeable.
- **SECOND OPINION / SPOT CHECK / READ THE ROOM / DEAD RECKONING / LAST KNOWN / THE LAST KNOWN:** Information tools must not stack into wallhack-like coverage. Keep outputs approximate, time-limited, and based on events the user could plausibly perceive.
- **NO SIGNAL / CUT THE FEED / HARD RESET / LAST WORD / DEAD LETTER:** Anti-information effects need separate timing and scope. Avoid making scan abilities useless.
- **STICK AROUND / BACKLINE / TRADE PLACES / THE HANDOFF / THE CLEAN EXIT / SECOND CHANCE / MY BAD:** Repositioning tools need different commitment, preparation, and team requirements. Test for excessive escape chaining.
- **SAFE BET / COUNTERWEIGHT / PERSONAL SPACE / NO VACANCY:** Defensive effects must not combine into long periods of safety. No damage immunity or invulnerability windows.

## 5. Approval Standard for Future Abilities

A new ability must answer **yes** to all of these before entering the active roster:

1. Can a player name realistic situations where they would choose it over another ability?
2. Does it create a meaningful decision during a match, not just a visual event?
3. Can opponents understand what happened and respond fairly?
4. Does it work across multiple maps without bespoke geometry or special room rules?
5. Does it offer something the active roster does not already do?
6. Does it have enough depth to justify one of the player's limited loadout slots?

If not, cut it or redesign it before approval. Do not inflate the roster to hit a number.


---

## 6. Prototype Ability Specifications

> **Status: Proposed prototype values.** These specifications turn all 50 active concepts into testable mechanics. Cooldowns, durations, distances, and limits are starting values for the first playable ability tests, not locked final balance. Rarity does not set power or cooldown by itself.

### 6.1 Shared activation and balance rules

- **One equipped ability:** A player equips one ability in the Ability slot. Weapon Actions remain separate.
- **Input:** Tap the Ability input (default F) to activate. Any ability that requires a target, direction, placement point, or teammate uses a short, clearly displayed targeting step before confirmation. Controls must be remappable and supported on controller and mobile.
- **Cooldown start:** Cooldown begins when the server confirms a successful activation, not when the player opens or cancels a targeting preview. A failed validation does not consume the ability unless the ability explicitly states that a committed attempt can fail.
- **Cooldown display:** Show remaining cooldown and charges, if a future ability uses charges, on the HUD. The player must never need to guess whether the ability is ready.
- **No free cancellation exploit:** Once an ability has committed and its effect has begun, cancelling its animation or switching weapons does not refund cooldown or reverse already-resolved effects.
- **Movement ceiling:** Ability movement is validated by the server and respects collision, valid destinations, and the movement system's approved speed/impulse limits. An ability may define a temporary exception only where its specification explicitly says so.
- **No invulnerability by default:** Repositioning, decoys, camera use, and defensive effects do not grant invulnerability, damage immunity, smaller hitboxes, or hidden damage reduction unless an ability explicitly defines a capped defensive effect.
- **Information standard:** No ability provides unrestricted live wall vision. Information must be approximate, delayed, based on a valid source, time-limited, and clearly communicated.
- **Decoy standard:** Holograms cannot deal damage, block shots, collide, collect pickups, trigger objectives, activate devices, or generate fake hit/kill feedback. They must be distinguishable at close inspection.
- **Team consent:** Abilities that link, swap, or use a teammate's view require the teammate's consent or an explicit opt-in interaction. A teammate cannot be forcibly moved or made to reveal information.
- **Server authority:** The server validates ownership, cooldown, state, range, line of sight, target eligibility, placement, collision, and final effect. Clients may predict only non-authoritative presentation.
- **Death and round transitions:** An active ability ends when its owner is eliminated unless its entry explicitly says otherwise. Cooldowns persist through a round transition unless the selected mode's reset rules explicitly restore them. Respawn modes use the mode's documented ability-reset policy.
- **Counterplay readability:** Every deployed object, field, mark, tether, decoy, and committed movement has a distinct cue. Friendly and enemy versions must be visually distinguishable.
- **Stacking:** A player cannot have multiple copies of the same ability effect active. Reapplying a mark, slow, field, or other status refreshes it only if that ability explicitly permits refresh. Different abilities do not combine to exceed their stated movement or protection limits.

### 6.2 Finalized prototype tuning sheet

All distances are in Roblox studs. Durations begin when the effect becomes active unless stated otherwise. Cooldowns are measured from successful server-confirmed activation.

| ID | Ability | Cooldown | Active duration / window | Range / limit |
|---:|---|---:|---:|---|
| 01 | JUST CHECKING | 32s | 1.8s view | 24 studs |
| 02 | STAY THERE | 28s | 4s marker window; next jump only | Marker within 30 studs |
| 03 | PERSONAL SPACE | 22s | Instant pulse | 9 studs; 110° forward cone |
| 04 | SOFT LANDING | 24s | 4s trigger window | Self |
| 05 | SPOT CHECK | 22s | 1.5s directional cue | 22 studs; sound no older than 3s |
| 06 | COVER CALL | 28s | 3s team marker | 100 studs |
| 07 | DEAD STOP | 20s | Instant stop | Self |
| 08 | SECOND OPINION | 26s | One directional pulse | 35 studs |
| 09 | WRONG WAY | 28s | 2.2s false trail | 30 studs |
| 10 | NOT INCLUDED | 26s | 3s quiet movement | Self |
| 11 | RECEIPT | 30s | 20s sensor lifetime; one trigger | Placement within 18 studs; 12-stud line |
| 12 | FALSE START | 24s | 1.2s audio event | Chosen point within 30 studs |
| 13 | STATIC CLING | 30s | 2.5s attachment maximum | Valid wall within 2 studs; 8-stud lateral travel |
| 14 | TAG, YOU'RE IT | 30s | 2s mark | 70 studs; direct line of sight |
| 15 | GHOST NOTE | 30s | 2.5s decoy; masks one movement burst | Decoy within 20 studs |
| 16 | CUT THE FEED | 34s | Instant cleanse | Self and ally within 12 studs |
| 17 | OVERDRAFT | 30s | 1.2s acceleration burst; 1.5s recovery | Self |
| 18 | KEEP THE CHANGE | 32s | 1s store window; one release | Self; capped stored momentum |
| 19 | STICK AROUND | 34s | 1.5s tether window | Anchor within 45 studs |
| 20 | READ THE ROOM | 32s | 1.8s indicators | 35 studs; up to 3 recent events |
| 21 | COVER ME | 34s | 2s replay | 1.25s recorded movement |
| 22 | INVENTORY CHECK | 38s | 1.5s report | 35 studs |
| 23 | SIDE STEP | 26s | 0.22s burst | 8 studs maximum |
| 24 | LAST KNOWN | 30s | 3s fading marker | Last-seen point no older than 5s |
| 25 | COUNTERWEIGHT | 30s | 3s anchor | Self |
| 26 | CROSSFADE | 32s | 1.2s afterimage; 0.22s dash | 6 studs maximum |
| 27 | HARD RESET | 36s | Instant cleanse | Self; one eligible effect |
| 28 | BACKLINE | 38s | 1.5s link window; 0.35s pull | Teammate within 35 studs |
| 29 | BACK SEAT DRIVER | 44s | 5s camera battery | Drone within 60 studs |
| 30 | NO SIGNAL | 44s | 3s field | 10-stud radius |
| 31 | THE USUAL SUSPECT | 42s | 2.2s decoys | Two paths, 12 studs each |
| 32 | GRAND ENTRANCE | 44s | 0.8s warning; 0.45s travel | Landing point within 35 studs |
| 33 | BORROWED EYES | 44s | 4s view link | Consenting teammate within 80 studs |
| 34 | SAFE BET | 38s | 5s guard window; one trigger | Self |
| 35 | SECOND WIND | 40s | 1s movement burst | Damage received within previous 2.5s |
| 36 | DEAD RECKONING | 40s | 2s indicators | 30 studs; two recent sounds |
| 37 | TRADE PLACES | 50s | 0.7s warning / validation | Consenting teammate within 22 studs |
| 38 | MY BAD | 52s | 1.25s movement history; 0.35s rewind | 18 studs maximum rewind |
| 39 | THE LONG LOOK | 50s | 5s camera view | Lens placement within 35 studs |
| 40 | DOUBLE TAKE | 40s | 1.4s replay | 0.8s recorded movement |
| 41 | DEAD LETTER | 44s | 1.5s scan-interference window | Self; eligible scan only |
| 42 | NO VACANCY | 48s | 1s guard; 35 damage capacity | 100° forward arc |
| 43 | SPLIT DECISION | 48s | 1.8s decoys | Two paths, 8 studs each |
| 44 | OVER THE SHOULDER | 52s | 4s link; up to 3 alerts | Consenting teammate within 80 studs |
| 45 | LAST WORD | 42s | 2.5s anti-mark window | Self |
| 46 | THE CLEAN EXIT | 60s | 1.2s charge; one transfer | Destination within 30 studs |
| 47 | OPEN SECRET | 56s | 1.5s sound silhouettes | 24 studs; loud eligible sounds only |
| 48 | THE LAST KNOWN | 56s | 2s team archive display | Up to 2 personally seen opponents |
| 49 | SECOND CHANCE | 58s | 4s return window; 0.6s return | Marker within 20 studs |
| 50 | THE HANDOFF | 62s | 1s countdown; one swap | Consenting teammate within 22 studs |

### 6.3 Individual ability specifications

#### 01. JUST CHECKING
- **Activation:** Tap Ability while grounded or standing still enough to enter the camera state. The player remains at their current position and controls a compact peek camera.
- **Effect:** Camera may move up to 24 studs from the player's view origin, but only through open, physically valid space. It cannot pass through walls, doors, or closed geometry. The player's weapon is unavailable while viewing.
- **Cooldown / duration:** 32s cooldown; 1.8s maximum view.
- **Counterplay:** Visible camera indicator and a distinct deployment sound; the user's body remains stationary, vulnerable, and visible.
- **Technical rules:** Server validates camera origin, movement envelope, obstruction, and duration. Camera input never changes the player's character position or grants information outside the camera's valid line of sight.
- **Identity:** A tiny, committed corner check, not a remote scouting drone.

#### 02. STAY THERE
- **Activation:** Aim at a valid surface within 30 studs and place a visible jump marker. The next jump within 4s consumes it.
- **Effect:** The next jump receives a directional impulse toward the marker. The boost changes horizontal travel only; it does not increase the standard jump-height target. The resulting speed remains within the approved ability movement ceiling.
- **Cooldown / duration:** 28s cooldown; 4s to use the marker; one jump.
- **Counterplay:** Marker is visible to opponents, can be avoided or watched, and does not protect the player during the jump.
- **Technical rules:** Server validates surface, marker distance, jump state, collision path, and final velocity. Invalid geometry cancels the marker without launching the player.
- **Identity:** Pre-planned jump routing, not an emergency dash.

#### 03. PERSONAL SPACE
- **Activation:** Tap Ability to emit a short forward-facing pulse.
- **Effect:** Opponents inside 9 studs and a 110° forward cone receive a brief outward push. It deals no damage and does not affect teammates.
- **Cooldown / duration:** 22s cooldown; pulse resolves instantly.
- **Counterplay:** A short wind-up and unmistakable audio-visual cue; opponents outside the cone are unaffected, and the user receives no protection from incoming fire.
- **Technical rules:** Server checks cone, distance, line of sight, team, and valid displacement. Push is capped and cannot throw players through geometry or outside the playable arena.
- **Identity:** Close-range spacing tool. It creates room but does not win the fight.

#### 04. SOFT LANDING
- **Activation:** Tap Ability while airborne, before landing.
- **Effect:** The next landing within 4s suppresses the ordinary landing slowdown and camera jolt. It does not add speed beyond the player's pre-landing horizontal velocity.
- **Cooldown / duration:** 24s cooldown; 4s trigger window; one landing.
- **Counterplay:** Activation cue is audible; opponents can still track and hit the player normally.
- **Technical rules:** Server records the armed landing state and consumes it on the first valid landing. If the player is eliminated or the window expires, the effect ends. If a fall-damage system is added later, this ability does not reduce that damage.
- **Identity:** Preserves flow after a drop, not a damage-reduction or fall-immunity tool.

#### 05. SPOT CHECK
- **Activation:** Tap Ability to inspect the most recent eligible nearby non-weapon gameplay sound.
- **Effect:** Shows one brief directional cue toward the sound's origin if it occurred within 3s and within 22 studs. It does not identify the source or show an enemy marker.
- **Cooldown / duration:** 22s cooldown; cue lasts 1.5s.
- **Counterplay:** Only one past event is reported; quiet movement or distance can leave no result. The cue is approximate and can already be stale.
- **Technical rules:** Server filters eligible sound events by range, age, and source category. No exact coordinates, player identity, or live tracking are sent.
- **Identity:** A quick reaction to one nearby sound, not a general-purpose scan.

#### 06. COVER CALL
- **Activation:** Aim at a point within 100 studs and tap Ability.
- **Effect:** Sends a team-only marker at the selected point for 3s. The marker communicates the caller's attention, not a confirmed enemy location.
- **Cooldown / duration:** 28s cooldown; 3s marker.
- **Counterplay:** Opponents do not receive a false enemy outline; teammates know it is a player callout and should verify it.
- **Technical rules:** Server validates aim ray, maximum distance, map bounds, and team membership. Marker is removed when its timer expires or the match state ends.
- **Identity:** Fast team communication, not automatic enemy detection.

#### 07. DEAD STOP
- **Activation:** Tap Ability while sprinting or sliding.
- **Effect:** Cancels the user's current horizontal movement burst and enters normal grounded movement. It does not freeze other players or grant a defensive state.
- **Cooldown / duration:** 20s cooldown; immediate effect.
- **Counterplay:** The stop has a distinct audio cue and sacrifices momentum. The user remains fully hittable.
- **Technical rules:** Server accepts the stop only from a valid sprint/slide state, clamps velocity to the defined stopping envelope, and does not reset unrelated movement cooldowns.
- **Identity:** Precision braking and corner control, not an escape burst.

#### 08. SECOND OPINION
- **Activation:** Tap Ability to request one directional pulse.
- **Effect:** If an opponent is within 35 studs, the server reports the approximate direction of the nearest eligible opponent at activation time. No distance, outline, identity, or through-wall location is revealed.
- **Cooldown / duration:** 26s cooldown; one pulse.
- **Counterplay:** The result is approximate, one-time, and accompanied by a clear pulse cue. Moving immediately can make the information stale.
- **Technical rules:** Server performs one range-limited query and returns a coarse direction sector only. It does not continuously update or reveal a precise target vector.
- **Identity:** A single nearby-threat check, distinct from event-based sound abilities.

#### 09. WRONG WAY
- **Activation:** Aim at a route point within 30 studs and tap Ability.
- **Effect:** Creates a false footstep trail that travels along the selected route for 2.2s, suggesting movement away from the user's actual position.
- **Cooldown / duration:** 28s cooldown; 2.2s trail.
- **Counterplay:** The trail has a subtle, consistent audio signature and cannot imitate weapon fire, reloads, jumps, or ability activations.
- **Technical rules:** Server validates route points and plays the decoy audio at those points. It creates no character, collision, hitbox, or replicated player state.
- **Identity:** A moving audio trail that sells a route, not a single fake sprint start.

#### 10. NOT INCLUDED
- **Activation:** Tap Ability to begin a quiet-movement window.
- **Effect:** Suppresses the user's footstep and landing audio for 3s. Weapon fire, reloads, interactions, ability cues, and visible character movement remain normal.
- **Cooldown / duration:** 26s cooldown; 3s.
- **Counterplay:** Activation is audible; the player remains visible and all non-movement sounds remain detectable.
- **Technical rules:** Server applies a temporary audio category modifier to the owner's movement events only. It cannot mute another player's sounds or suppress gameplay-critical cues.
- **Identity:** Quiet footwork, not invisibility or total silence.

#### 11. RECEIPT
- **Activation:** Aim at a valid surface within 18 studs and place a sensor.
- **Effect:** The sensor projects a narrow 12-stud detection line. The first opponent to cross it triggers one directional alert to the owner, then the sensor burns out. It expires after 20s if unused.
- **Cooldown / duration:** 30s cooldown; 20s maximum lifetime; one trigger.
- **Counterplay:** Device is visible and can be destroyed; its narrow line can be bypassed. It does not reveal a live position after triggering.
- **Technical rules:** Server validates surface, placement distance, collision, line width, team, and one-use state. Sensor cannot attach to players, moving characters, or invalid geometry.
- **Identity:** A one-use tripwire for a route, not a persistent radar.

#### 12. FALSE START
- **Activation:** Aim at a point within 30 studs and tap Ability.
- **Effect:** Plays one short sprint-to-slide audio event at the selected point, lasting approximately 1.2s. No character or movement trail appears.
- **Cooldown / duration:** 24s cooldown; one 1.2s audio event.
- **Counterplay:** It is a single, non-repeating sound event and cannot imitate gunfire, reloads, footsteps after the initial burst, or ability audio.
- **Technical rules:** Server validates point and range, then emits one decoy sound event. It must not be registered as a real player movement event by information abilities.
- **Identity:** A one-shot sound bait, unlike WRONG WAY's moving trail or GHOST NOTE's sound masking.

#### 13. STATIC CLING
- **Activation:** Tap Ability while within 2 studs of a valid vertical wall.
- **Effect:** Briefly attaches the player to that wall, allowing controlled sideways movement up to 8 studs before dropping. The player cannot fire while attached.
- **Cooldown / duration:** 30s cooldown; 2.5s maximum attachment.
- **Counterplay:** Attachment has a visible tell and distinct sound; the player is stationary vertically, cannot fire, and can be watched or challenged.
- **Technical rules:** Server validates wall angle, surface, collision, attachment point, and lateral travel. Ceilings, moving players, thin invalid geometry, and traversal through corners are rejected.
- **Identity:** A short lateral wall route, not universal wall-running or wall-climbing.

#### 14. TAG, YOU'RE IT
- **Activation:** Aim at an opponent within 70 studs with direct line of sight and tap Ability.
- **Effect:** Applies a team-visible mark for 2s. The mark is visible only while the target remains directly exposed; full occlusion breaks it.
- **Cooldown / duration:** 30s cooldown; 2s maximum mark.
- **Counterplay:** Requires direct visual confirmation; target can break line of sight and the mark does not follow through walls.
- **Technical rules:** Server validates target, range, line of sight, and team. No mark can be applied through smoke or solid geometry unless the game rules explicitly treat that surface as transparent.
- **Identity:** A brief confirmed visual tag, unlike approximate directional information.

#### 15. GHOST NOTE
- **Activation:** Tap Ability to place a sound decoy at the activation point, then perform one movement burst within 2s.
- **Effect:** A 2.5s local sound event masks the audio of that one movement burst. It does not mute the player's weapon, reload, or later actions.
- **Cooldown / duration:** 30s cooldown; one movement burst during the 2s trigger window; decoy lasts 2.5s.
- **Counterplay:** The decoy stays at the activation point while the real player moves; visual movement remains visible and later audio is normal.
- **Technical rules:** Server pairs one eligible movement event with the decoy window. If no movement occurs before expiry, the decoy simply ends; no second burst can be masked.
- **Identity:** A timed sound cover for one real reposition, not a fake route.

#### 16. CUT THE FEED
- **Activation:** Tap Ability while the user or a teammate within 12 studs has an active enemy-generated mark.
- **Effect:** Removes one active ability-generated mark from the user and one nearby teammate. It does not undo an area scan that has already reported information or prevent future scans.
- **Cooldown / duration:** 34s cooldown; instant cleanse.
- **Counterplay:** Must be used after a mark is applied; it has a short radius and cannot prevent a new mark.
- **Technical rules:** Server checks team, distance, mark ownership/type, and status expiry. It removes only eligible mark effects, not ordinary visual contact, damage, or unrelated status effects.
- **Identity:** A reactive two-person mark removal, distinct from proactive anti-scan fields.

#### 17. OVERDRAFT
- **Activation:** Tap Ability while grounded and moving.
- **Effect:** For 1.2s, increases acceleration toward the normal sprint speed ceiling by 35%. Afterward, acceleration is reduced by 25% for 1.5s. Maximum movement speed does not exceed the approved ability movement ceiling.
- **Cooldown / duration:** 30s cooldown; 1.2s boost followed by 1.5s recovery.
- **Counterplay:** Audible activation and visible movement trail; the recovery penalty creates a predictable period where the user cannot accelerate as quickly.
- **Technical rules:** Server applies a bounded acceleration modifier, not an unrestricted velocity grant. It cannot stack with itself or another acceleration buff.
- **Identity:** Wins acceleration to reach space sooner, then pays a handling cost. It does not provide a long-distance teleport or instant speed.

#### 18. KEEP THE CHANGE
- **Activation:** Tap Ability while moving to store the current horizontal momentum for up to 1s; tap again during that window to release it in the chosen direction.
- **Effect:** Stores a capped portion of the player's current horizontal speed, then redirects that stored momentum once. It cannot store momentum while stationary or exceed the approved movement ceiling.
- **Cooldown / duration:** 32s cooldown; 1s store window; one release.
- **Counterplay:** A visible charge indicator and release cue reveal the setup; opponents can pressure the user before the release.
- **Technical rules:** Server records a capped velocity vector, validates the release direction and collision path, and clears stored momentum on expiry, elimination, or invalid state.
- **Identity:** Redirects momentum already earned by movement; unlike OVERDRAFT, it does not create extra acceleration.

#### 19. STICK AROUND
- **Activation:** Aim at a valid world surface within 45 studs and fire a tether.
- **Effect:** On a valid attachment, pulls the user toward the anchor for up to 1.5s. It cannot attach to players or pull opponents.
- **Cooldown / duration:** 34s cooldown; 1.5s tether window.
- **Counterplay:** Tether line is visible; attachment can be blocked by geometry; the user cannot fire during the pull.
- **Technical rules:** Server validates anchor type, range, line of sight, collision path, and final landing space. The pull stops at the first obstruction and never moves through solid geometry.
- **Identity:** A direct surface grapple, distinct from teammate tethers and short lateral dodges.

#### 20. READ THE ROOM
- **Activation:** Tap Ability to review eligible recent sounds in a 35-stud radius.
- **Effect:** Shows up to three brief directional indicators for eligible events that occurred within the previous 2.5s. Each indicator represents a past event and fades after 1.8s.
- **Cooldown / duration:** 32s cooldown; 1.8s indicators.
- **Counterplay:** No exact position or identity; quiet opponents may leave no useful information and old cues can be stale.
- **Technical rules:** Server selects a maximum of three sound events by recency and eligibility. The ability never queries current enemy positions.
- **Identity:** A compact post-noise sound summary, unlike SPOT CHECK's single newest event or DEAD RECKONING's two loudest events.

#### 21. COVER ME
- **Activation:** Tap Ability to create one holographic copy at the player's current position.
- **Effect:** Copy replays up to 1.25s of the user's recent visible movement for 2s, then dissolves. The real player remains fully controllable and vulnerable.
- **Cooldown / duration:** 34s cooldown; 2s copy lifetime.
- **Counterplay:** One copy only, with close-range holographic artifacts; no weapon fire, muzzle flash, hit reaction, collision, or objective interaction is reproduced.
- **Technical rules:** Server uses a short recorded transform path, checks map collision, and destroys the copy at the end of playback. It does not replay current or future player state.
- **Identity:** A short backward-looking movement replay, unlike THE USUAL SUSPECT's newly authored diverging paths.

#### 22. INVENTORY CHECK
- **Activation:** Tap Ability to scan the area around the user.
- **Effect:** Reports which broad ability categories are represented among opponents within 35 studs, without identifying players, exact counts, positions, or individual abilities. The report lasts 1.5s.
- **Cooldown / duration:** 38s cooldown; 1.5s report.
- **Counterplay:** Category-level information only; no player-specific reveal, no exact loadout, and a clear scan cue.
- **Technical rules:** Server evaluates eligible opponents once at activation and returns only the allowed category set. It does not inspect or reveal weapon ammunition, cooldown state, or hidden player statistics.
- **Identity:** A composition read before a push, not a location scan.

#### 23. SIDE STEP
- **Activation:** Tap Ability while grounded or airborne; choose left or right.
- **Effect:** Moves the user up to 8 studs laterally over 0.22s, stopping early at collision. It does not pass through players or geometry.
- **Cooldown / duration:** 26s cooldown; 0.22s movement.
- **Counterplay:** Clear start/end animation, no invulnerability frames, no hitbox change, and fixed travel distance.
- **Technical rules:** Server validates direction, available space, state, and velocity. If the path is obstructed, travel ends at the collision boundary rather than teleporting through it.
- **Identity:** A short lateral dodge, unlike CROSSFADE's decoy-assisted dash or BACKLINE's teammate-directed pull.

#### 24. LAST KNOWN
- **Activation:** Tap Ability after personally seeing an opponent.
- **Effect:** Places a marker at the last position where the user directly saw the selected opponent, provided that observation is no older than 5s. The marker visibly ages and fades after 3s.
- **Cooldown / duration:** 30s cooldown; 3s marker.
- **Counterplay:** The marker is explicitly stale and does not update when the opponent moves. It can be misleading after a quick rotation.
- **Technical rules:** Server accepts only a position from the user's validated direct-visibility history. It cannot use teammate vision, scans, or hidden target coordinates.
- **Identity:** A personal last-seen pin, unlike THE LAST KNOWN's team archive of two observations.

#### 25. COUNTERWEIGHT
- **Activation:** Tap Ability to anchor the user's movement for 3s.
- **Effect:** Reduces ability-caused displacement by 80%. Normal movement, incoming damage, weapon handling, and ordinary collision remain unchanged. The user cannot activate a movement-burst ability while anchored.
- **Cooldown / duration:** 30s cooldown; 3s.
- **Counterplay:** Visible activation cue; it does not stop bullets or damage, and it prevents the user from using a movement burst during its duration.
- **Technical rules:** Server applies the resistance only to tagged displacement effects. It does not modify damage, hitboxes, gravity, or ordinary player movement.
- **Identity:** A predictable anti-knockback stance, not a shield.

#### 26. CROSSFADE
- **Activation:** Tap Ability and choose a lateral or backward direction.
- **Effect:** Leaves a stationary holographic afterimage at the activation point while the real player dashes up to 6 studs over 0.22s. Afterimage lasts 1.2s.
- **Cooldown / duration:** 32s cooldown; 0.22s dash and 1.2s afterimage.
- **Counterplay:** Dash has a clear cue and fixed short distance; afterimage cannot fire or move, and the real player remains hittable throughout.
- **Technical rules:** Server validates dash path and collision; the afterimage is cosmetic-only and has no hitbox or interaction.
- **Identity:** A short real dash with a stationary decoy, unlike SIDE STEP's clean dodge or decoy-only abilities.

#### 27. HARD RESET
- **Activation:** Tap Ability while affected by an eligible non-damaging movement or information debuff.
- **Effect:** Removes one eligible slow or enemy-generated tracking mark from the user. If no eligible effect is active, the ability does not activate and consumes no cooldown.
- **Cooldown / duration:** 36s cooldown; instant cleanse.
- **Counterplay:** Can only remove one eligible effect and does nothing against damage, incoming attacks, ordinary visual contact, or future scans.
- **Technical rules:** Server checks the source and type of the active status, removes exactly one eligible effect, and records the cleanse. It cannot rewind or cancel an already-resolved hit.
- **Identity:** A broad self-cleanse for one existing status, unlike CUT THE FEED's narrow team mark removal or LAST WORD's proactive protection.

#### 28. BACKLINE
- **Activation:** Aim at a consenting teammate within 35 studs and establish a tether for up to 1.5s.
- **Effect:** The user pulls themselves up to 10 studs toward the teammate over 0.35s. The teammate is not moved or interrupted.
- **Cooldown / duration:** 38s cooldown; 1.5s link window and 0.35s pull.
- **Counterplay:** Teammate must consent; tether is visible and breaks on obstruction, invalid destination, or range failure. The user receives no protection during the pull.
- **Technical rules:** Server validates teammate consent, team, range, line of sight, destination collision, and pull distance. It moves only the activating player.
- **Identity:** Self-pull toward an ally, not a position swap or shared movement effect.

#### 29. BACK SEAT DRIVER
- **Activation:** Deploy a small camera drone to a valid point within 60 studs, then enter its view.
- **Effect:** The drone provides a remote view for up to 5s. The player's body remains stationary, visible, vulnerable, and unable to fire while viewing. Drone cannot mark, damage, block, or interact.
- **Cooldown / duration:** 44s cooldown; 5s battery.
- **Counterplay:** Audible deployment, visible and destructible drone, limited range and battery; the owner's body remains exposed.
- **Technical rules:** Server validates drone path, range, collision, battery, and destruction. Drone view cannot pass through geometry or reveal information beyond its actual camera view.
- **Identity:** Mobile remote reconnaissance with a vulnerable body, unlike JUST CHECKING's tiny corner peek or THE LONG LOOK's fixed lens.

#### 30. NO SIGNAL
- **Activation:** Tap Ability to create a field centered on the user.
- **Effect:** For 3s, enemy ability-generated tracking and scan marks cannot attach to players inside a 10-stud radius. Existing marks remain.
- **Cooldown / duration:** 44s cooldown; 3s field.
- **Counterplay:** Field is visible, short-lived, and does not block ordinary vision, sound, bullets, or non-ability map information. Existing marks are not removed.
- **Technical rules:** Server checks mark source and player position at the moment a mark would attach. It does not erase prior scan results or prevent attacks.
- **Identity:** A brief area denial against new marks, unlike LAST WORD's self-only timing window or CUT THE FEED's cleanse.

#### 31. THE USUAL SUSPECT
- **Activation:** Tap Ability and choose two separate valid directions.
- **Effect:** Creates two holographic copies that travel 12 studs along the selected paths over 2.2s, then dissolve. The real player remains where they are and can move normally.
- **Cooldown / duration:** 42s cooldown; 2.2s decoy lifetime.
- **Counterplay:** Two copies have clear holographic tells at close range; no fake muzzle flashes, damage, collision, or interaction. The real player is not hidden.
- **Technical rules:** Server validates both paths against geometry and spawns two non-interactive cosmetic entities. Invalid paths are rejected before activation commits.
- **Identity:** Two newly diverging routes, unlike COVER ME's one recorded path or SPLIT DECISION's decoys launched while the real player moves.

#### 32. GRAND ENTRANCE
- **Activation:** Select a valid landing surface within 35 studs. A destination marker appears for 0.8s before the transfer.
- **Effect:** The user travels to the selected landing point over 0.45s. The user cannot fire during warning or travel. The move is not instant and does not pass through geometry.
- **Cooldown / duration:** 44s cooldown; 0.8s warning and 0.45s travel.
- **Counterplay:** Destination is announced; the warning can be interrupted by elimination or invalidation, and opponents can aim at the landing area.
- **Technical rules:** Server validates destination, free space, path, and movement state both before and at transfer. If destination becomes invalid, the transfer cancels safely; cooldown is consumed only if travel begins.
- **Identity:** A committed, announced vertical or route change, not a panic teleport.

#### 33. BORROWED EYES
- **Activation:** Request a view link to a consenting teammate within 80 studs.
- **Effect:** For 4s, the user sees only the teammate's current camera view. The user's own character remains stationary, visible, vulnerable, and unable to fire.
- **Cooldown / duration:** 44s cooldown; 4s link.
- **Counterplay:** Both players receive a clear link indicator; either can end it. The user is exposed and the teammate can choose not to consent.
- **Technical rules:** Server validates consent, team, range, and link state. Only the teammate's actual rendered view is shared; no extra enemy data or hidden camera is provided.
- **Identity:** A live teammate sightline, unlike BACK SEAT DRIVER's independent drone or OVER THE SHOULDER's brief alerts.

#### 34. SAFE BET
- **Activation:** Tap Ability to arm a compact personal guard for 5s.
- **Effect:** The first eligible ability-caused displacement or non-damaging control effect is absorbed, then the guard breaks. It does not block bullets, explosions, damage, or ordinary collision.
- **Cooldown / duration:** 38s cooldown; 5s guard window; one trigger.
- **Counterplay:** Guard state is visible; opponents can wait out the window or use ordinary weapon damage.
- **Technical rules:** Server tags eligible displacement/control effects and consumes the guard on the first valid trigger. It cannot stack with COUNTERWEIGHT to exceed either ability's stated protection.
- **Identity:** A one-use reactive answer to one control effect, not a general defensive shield.

#### 35. SECOND WIND
- **Activation:** Tap Ability within 2.5s after taking valid damage.
- **Effect:** Grants a 1s movement burst with 20% stronger acceleration, while respecting the approved movement speed ceiling. It does not heal, reduce damage, or automatically activate.
- **Cooldown / duration:** 40s cooldown; 1s burst; requires a recent damage event.
- **Counterplay:** Activation cue and visible movement trail; fixed short duration, no damage protection, and the player can still be hit.
- **Technical rules:** Server verifies a recent damage event against the activating player and applies bounded acceleration. Multiple hits do not extend or stack the window.
- **Identity:** A deliberate reposition after being hit, unlike OVERDRAFT's proactive acceleration trade-off.

#### 36. DEAD RECKONING
- **Activation:** Tap Ability to review eligible loud enemy movement sounds.
- **Effect:** Displays the direction and age of the two loudest eligible enemy movement sounds heard within 30 studs during the previous 3s. Indicators last 2s.
- **Cooldown / duration:** 40s cooldown; 2s indicators.
- **Counterplay:** Only sounds the user could plausibly hear are eligible; silent or distant players leave no cue. Indicators are stale and approximate.
- **Technical rules:** Server filters by audibility, source team, sound class, age, and range. It returns no exact position, identity, or live update.
- **Identity:** Prioritizes the two loudest sounds, unlike READ THE ROOM's up-to-three most recent events.

#### 37. TRADE PLACES
- **Activation:** Request a swap with a consenting teammate within 22 studs and direct line of sight. Both receive a 0.7s warning.
- **Effect:** Swaps the two players' positions once both destination spaces are validated. Neither player is moved if either destination is invalid.
- **Cooldown / duration:** 50s cooldown; 0.7s warning.
- **Counterplay:** Both players are warned; either can decline before confirmation. Range, obstruction, and invalid space cancel the swap.
- **Technical rules:** Server validates consent, team, range, line of sight, both destination capsules, and match state at the end of the warning. The swap cannot move either player through solid geometry.
- **Identity:** A quick, close-range tactical swap with a short warning, unlike THE HANDOFF's longer linked countdown and broader coordination window.

#### 38. MY BAD
- **Activation:** Tap Ability to rewind along the user's own recent valid movement path.
- **Effect:** Reverses the user's position along up to 1.25s of recorded movement, capped at 18 studs, over 0.35s. Health, damage, ammunition, cooldowns, enemy actions, eliminations, and objective progress are not rewound.
- **Cooldown / duration:** 52s cooldown; 1.25s history window and 0.35s rewind.
- **Counterplay:** The path is shown by fragmented afterimages; destination is constrained to valid space. The user remains vulnerable and cannot attack during the rewind.
- **Technical rules:** Server records a short validated transform history and replays only the owner's path with collision checks. Rewind stops at obstruction and cannot restore an earlier life or cross a closed door.
- **Identity:** Reverses recent movement already taken, unlike SECOND CHANCE's pre-placed return marker.

#### 39. THE LONG LOOK
- **Activation:** Place a remote lens on a valid surface within 35 studs, then enter its view.
- **Effect:** The fixed lens provides a narrow live view for 5s. The player's body remains stationary, vulnerable, and unable to fire. Lens has no marking or interaction function.
- **Cooldown / duration:** 50s cooldown; 5s view.
- **Counterplay:** Visible lens, distinct setup sound, narrow field of view, destructible device, and exposed user.
- **Technical rules:** Server validates placement, line of sight, view cone, lifetime, and destruction. The lens cannot rotate through walls or report anything outside its real view.
- **Identity:** A fixed, prepared sightline, unlike BACK SEAT DRIVER's mobile drone.

#### 40. DOUBLE TAKE
- **Activation:** Tap Ability after a visible movement burst.
- **Effect:** Creates one decoy that repeats up to 0.8s of the user's last visible movement once, then freezes and dissolves. Total lifetime is 1.4s.
- **Cooldown / duration:** 40s cooldown; 1.4s.
- **Counterplay:** One replay only; the copy visibly dissolves and cannot fire, collide, or interact.
- **Technical rules:** Server uses a short transform recording, validates the path, and creates a cosmetic-only copy. It cannot replay weapon fire, damage, hit reactions, or future state.
- **Identity:** A single short replay of a just-completed burst, unlike COVER ME's longer replay or THE USUAL SUSPECT's two authored routes.

#### 41. DEAD LETTER
- **Activation:** Tap Ability to arm scan redirection for 1.5s.
- **Effect:** If an eligible enemy ability scan targets the user during the window, the scan receives one false directional sector selected at activation instead of the user's direction. The user is not hidden from normal sight or sound.
- **Cooldown / duration:** 44s cooldown; 1.5s active window; one eligible scan interaction.
- **Counterplay:** Requires precise timing; only eligible ability scans are affected. A clear interference cue tells opponents their scan was disrupted.
- **Technical rules:** Server validates scan source, target, timing, and redirection sector. It does not alter ordinary player visibility, sound, damage, or other scan targets.
- **Identity:** A timed counter that misdirects one incoming scan, unlike NO SIGNAL's area field or LAST WORD's self-only mark prevention.

#### 42. NO VACANCY
- **Activation:** Tap Ability to raise a frontal energy guard.
- **Effect:** For up to 1s, the guard blocks incoming non-explosive projectile damage from a 100° forward arc, up to 35 total damage, then collapses. The user cannot fire while it is active. Damage from sides, rear, explosions, and melee is unaffected.
- **Cooldown / duration:** 48s cooldown; 1s maximum; 35 damage capacity.
- **Counterplay:** Side and rear remain exposed; guard direction and integrity are visible; opponents can wait, flank, or exceed its limited capacity.
- **Technical rules:** Server validates incoming hit direction, projectile category, remaining guard capacity, and active state. It never blocks damage beyond the stated capacity or reflects shots.
- **Identity:** A brief directional projectile guard, unlike SAFE BET's one non-damaging control counter.

#### 43. SPLIT DECISION
- **Activation:** Tap Ability while moving; choose two different directions for the decoys.
- **Effect:** Creates two holographic copies at the activation point. They travel up to 8 studs along separate paths over 1.8s while the real player continues normal movement.
- **Cooldown / duration:** 48s cooldown; 1.8s decoy lifetime.
- **Counterplay:** Two copies have clear holographic artifacts; neither fires, collides, or interacts. The real player is not hidden.
- **Technical rules:** Server validates both paths and spawns non-interactive cosmetic entities. The real player's movement is not altered by the decoys.
- **Identity:** Decoys split in two directions while the real player moves, unlike THE USUAL SUSPECT's copies that leave along separate routes while the user remains at the activation point.

#### 44. OVER THE SHOULDER
- **Activation:** Request a link to a consenting teammate within 80 studs.
- **Effect:** For 4s, the teammate may send up to three simple directional alerts when they directly see an opponent. Alerts indicate a broad direction sector only; no outline, exact position, identity, or tracking is shared.
- **Cooldown / duration:** 52s cooldown; 4s link; up to 3 alerts.
- **Counterplay:** Requires teammate consent and direct visual confirmation; clear link indicators; alerts are brief and approximate.
- **Technical rules:** Server validates teammate visibility and sends only a coarse direction sector. It does not share the teammate's camera, target coordinates, or information obtained through another scan.
- **Identity:** A small number of teammate callouts, unlike BORROWED EYES's live camera feed.

#### 45. LAST WORD
- **Activation:** Tap Ability to arm a self-only anti-mark window.
- **Effect:** For 2.5s, new enemy ability-generated marks cannot attach to the user. Existing marks remain active and ordinary vision is unaffected.
- **Cooldown / duration:** 42s cooldown; 2.5s.
- **Counterplay:** Self-only, short duration, visible activation, and does not remove an existing mark or prevent ordinary visual contact.
- **Technical rules:** Server rejects eligible mark applications to the owner only while the timer is active. It does not block scans from reporting an area or protect teammates.
- **Identity:** Proactive personal mark prevention, unlike NO SIGNAL's area field or CUT THE FEED's reactive cleanse.

#### 46. THE CLEAN EXIT
- **Activation:** Mark the current position, then select a valid destination within 30 studs. A 1.2s visible charge begins.
- **Effect:** If both endpoints remain valid, the player transfers once from the marked position to the destination. The original point remains as a fading marker. The user cannot attack during charge or transfer.
- **Cooldown / duration:** 60s cooldown; 1.2s charge; one transfer.
- **Counterplay:** Both endpoints are announced; charge-up can be interrupted by elimination or invalidation; destination can be watched.
- **Technical rules:** Server validates both endpoints, free space, collision, range, and player state at charge completion. If destination becomes invalid, transfer is cancelled safely. No transfer through solid geometry.
- **Identity:** A deliberate two-point transfer with a visible commitment, unlike MY BAD's recent path rewind or SECOND CHANCE's short return marker.

#### 47. OPEN SECRET
- **Activation:** Tap Ability to listen for loud eligible movement events.
- **Effect:** For a 1.5s window, brief silhouettes appear at the origin of loud enemy movement sounds produced within 24 studs. Each silhouette lasts only 0.3s and never updates live.
- **Cooldown / duration:** 56s cooldown; 1.5s listening window.
- **Counterplay:** Loud actions only; strict range; quiet players are not revealed; clear activation cue; silhouettes are brief and stale.
- **Technical rules:** Server uses audibility-qualified event origins and sends only a transient silhouette at the recorded event position. No continuous target tracking or exact live outline is provided.
- **Identity:** A rare sound-to-visual confirmation, not wall vision.

#### 48. THE LAST KNOWN
- **Activation:** Tap Ability after personally seeing opponents during the previous 4s.
- **Effect:** Records and shares with the user's team the last directly observed positions of up to two opponents. Markers display their age and remain for 2s; they do not update.
- **Cooldown / duration:** 56s cooldown; 4s personal observation window; 2s team display.
- **Counterplay:** Only personally observed positions; age is explicit; markers can become inaccurate immediately and never track targets.
- **Technical rules:** Server validates direct-visibility history, observation age, target eligibility, and team. It cannot use teammate vision, ability scans, or hidden coordinates.
- **Identity:** A two-target team memory archive, unlike LAST KNOWN's single personal marker.

#### 49. SECOND CHANCE
- **Activation:** Place a visible return marker at the user's current valid position.
- **Effect:** For 4s, the user may activate a one-time return to that marker. Return takes 0.6s and is cancelled if the marker is destroyed, obstructed, or no longer valid. Health, ammunition, damage, and combat events are never restored.
- **Cooldown / duration:** 58s cooldown; 4s return window; 0.6s return.
- **Counterplay:** Marker is visible and destructible; return has a clear cue and can be pressured; invalid destination cancels it.
- **Technical rules:** Server stores one valid transform anchor, checks collision at return time, and moves only the owner. It cannot rewind the path between marker and player.
- **Identity:** A pre-planned return to one fixed point, unlike MY BAD's path rewind or THE CLEAN EXIT's selected destination transfer.

#### 50. THE HANDOFF
- **Activation:** Link to a consenting teammate within 22 studs. Both players receive a 1s countdown and may cancel before completion.
- **Effect:** If both remain valid and within range, their positions swap once. Neither player is moved if either destination is invalid.
- **Cooldown / duration:** 62s cooldown; 1s countdown.
- **Counterplay:** Both players are warned; either may decline or break the link by leaving range or line of sight. No forced teammate movement.
- **Technical rules:** Server validates consent, team, range, line of sight, both destination capsules, and match state at countdown end. It cannot move players through geometry or into occupied space.
- **Identity:** A deliberate coordinated swap with a longer decision window, unlike TRADE PLACES's close-range, fast tactical exchange.

### 6.4 Overlap decisions and separation rules

The following concepts remain in the active roster, but their implementation must preserve these differences:

- **WRONG WAY / FALSE START / GHOST NOTE:** WRONG WAY creates a moving false footstep trail; FALSE START plays one isolated sprint-to-slide event at a chosen point; GHOST NOTE masks one real movement burst with a stationary sound decoy. They must not share the same audio sequence.
- **COVER ME / THE USUAL SUSPECT / DOUBLE TAKE / SPLIT DECISION:** COVER ME replays a longer recent path from the user's position; THE USUAL SUSPECT sends two copies away while the user stays at the activation point; DOUBLE TAKE replays one very short completed burst; SPLIT DECISION sends two copies away while the real player moves normally. No decoy can fake weapon fire or combat results.
- **SPOT CHECK / SECOND OPINION / READ THE ROOM / DEAD RECKONING / LAST KNOWN / THE LAST KNOWN / OPEN SECRET:** SPOT CHECK reports one newest nearby sound; SECOND OPINION reports one approximate nearest-opponent direction; READ THE ROOM reports up to three most recent eligible sound events; DEAD RECKONING reports the two loudest eligible sounds; LAST KNOWN pins one personally seen position; THE LAST KNOWN archives up to two personally seen positions for the team; OPEN SECRET briefly visualizes loud sound origins. These outputs must never become live wall tracking.
- **NO SIGNAL / CUT THE FEED / HARD RESET / LAST WORD / DEAD LETTER:** NO SIGNAL prevents new marks in a small area; CUT THE FEED removes one existing mark from the user and a nearby ally; HARD RESET removes one eligible slow or mark from the user; LAST WORD prevents new marks on the user for a short window; DEAD LETTER misdirects one eligible scan during a precise timing window. Their scope and timing must remain separate.
- **STICK AROUND / BACKLINE / TRADE PLACES / THE HANDOFF / THE CLEAN EXIT / SECOND CHANCE / MY BAD:** STICK AROUND pulls the user to a world anchor; BACKLINE pulls the user toward a consenting teammate; TRADE PLACES swaps two nearby consenting teammates quickly; THE HANDOFF performs a more deliberate linked swap; THE CLEAN EXIT transfers between two selected points after a charge; SECOND CHANCE returns to one pre-placed marker; MY BAD rewinds only the user's recent movement path. No health, ammo, damage, or objective state is rewound.
- **SAFE BET / COUNTERWEIGHT / PERSONAL SPACE / NO VACANCY:** SAFE BET absorbs one eligible non-damaging control effect; COUNTERWEIGHT reduces ability-caused displacement for a short period; PERSONAL SPACE pushes nearby opponents away without damage; NO VACANCY blocks a small, capped amount of frontal non-explosive projectile damage. They are not interchangeable shields.
- **JUST CHECKING / BACK SEAT DRIVER / THE LONG LOOK / BORROWED EYES:** JUST CHECKING is a very short, limited camera peek; BACK SEAT DRIVER is a mobile destructible drone; THE LONG LOOK is a fixed remote lens; BORROWED EYES shares a consenting teammate's actual live view. All leave the user's body vulnerable and unable to fire while viewing.

### 6.5 First-pass ability playtest protocol

Test abilities in controlled pairs before testing all 50 together:

1. **Movement test:** STAY THERE, SOFT LANDING, DEAD STOP, OVERDRAFT, KEEP THE CHANGE, STICK AROUND, SIDE STEP, STATIC CLING, CROSSFADE, BACKLINE, SECOND WIND, GRAND ENTRANCE, MY BAD, THE CLEAN EXIT, and SECOND CHANCE.
2. **Information test:** JUST CHECKING, SPOT CHECK, SECOND OPINION, COVER CALL, RECEIPT, TAG, YOU'RE IT, READ THE ROOM, INVENTORY CHECK, LAST KNOWN, BACK SEAT DRIVER, NO SIGNAL, BORROWED EYES, DEAD RECKONING, DEAD LETTER, LAST WORD, THE LONG LOOK, OVER THE SHOULDER, OPEN SECRET, and THE LAST KNOWN.
3. **Deception test:** WRONG WAY, NOT INCLUDED, FALSE START, GHOST NOTE, COVER ME, THE USUAL SUSPECT, DOUBLE TAKE, and SPLIT DECISION.
4. **Defence / disruption test:** PERSONAL SPACE, CUT THE FEED, COUNTERWEIGHT, HARD RESET, SAFE BET, NO VACANCY, and THE HANDOFF / TRADE PLACES in team scenarios.
5. **Record for every test:** activation success/failure, time unavailable, useful activations, wasted activations, opponent response, distance moved or information received, readability, and whether the ability changed the outcome without deciding it automatically.
6. **Do not tune cooldowns from win rate alone.** Record pick rate, successful use rate, failed/unused activations, counterplay rate, and the situations in which players choose the ability.
7. **Balance target:** Each ability should have a recognizable use case and meaningful counterplay. No rarity tier should dominate purely because its cooldown is shorter or its numerical effect is larger.
8. **Removal rule:** Keep all 50 for the first test pass. Merge or remove an ability only after recorded playtests show that its identity cannot be made distinct or fair.

**Status:** All 50 abilities now have complete proposed prototype specifications. Final balance and inclusion remain subject to implementation and playtesting.
