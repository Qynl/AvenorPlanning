# AVENOR — Player Abilities

> **Roster status: 50 curated concepts.** This roster was rebuilt from a 100-concept evaluation pool. The target was not to keep 50 names; it was to keep 50 abilities with distinct, repeatable match value. The rejected half is recorded in the review section. All numerical balance values remain TBD until prototypes exist.

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
