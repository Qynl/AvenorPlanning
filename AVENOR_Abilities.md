# AVENOR — Player Abilities

> **Approved concepts** are accepted into the design roster. Approval confirms the concept and identity, not final balance values or implementation details. Cooldowns, durations, ranges, exact interaction rules, animations, audio, and technical constraints remain **TBD** until individual design and playtesting.

## 1. Ability System Rules

- Each player equips exactly **one player ability**.
- Player abilities are separate from weapon actions and equipment.
- Abilities use the universal AVENOR rarity hierarchy:
  1. Commonplace
  2. Altered
  3. Evolved
  4. Ascendant
  5. Extraordinary
  6. Singular
- Rarity communicates originality, uniqueness, complexity, presentation, or exclusivity. It does **not** automatically indicate stronger combat power.
- Every ability needs a distinct gameplay purpose, clear communication, meaningful counterplay, and a reason to exist.
- Abilities must not create unavoidable wins or undermine server-authoritative combat.
- Exact cooldowns, durations, ranges, charges, restrictions, and balance values are **TBD** and must be established through prototyping and playtesting.
- Default visual effects, animation, sound cues, readability, and accessibility requirements must be specified individually during detailed design.
- Ability-created objects and effects must be validated by the server where they affect competitive outcomes.

## 2. Approved Ability Roster — Batch 02

The following 50 concepts were approved as a batch. Their core identities and proposed mechanics are recorded below. Details may be refined during individual design, but changes should preserve each ability's defining idea.

### Commonplace

#### 31. SMALL TALK
- **Role:** Nearby information.
- **Concept:** Send out a short-range pulse that indicates whether an opponent is nearby without revealing their exact location.
- **Counterplay / limits:** Limited range and a deliberately imprecise result. Exact pulse behavior and frequency are TBD.

#### 32. BAD TIMING
- **Role:** Area denial.
- **Concept:** Place a visible marker that activates after a short delay and briefly slows anyone standing directly on it.
- **Counterplay / limits:** Visible warning and a delay give players time to move away.

#### 33. JUST CHECKING
- **Role:** Reconnaissance.
- **Concept:** Briefly peek around the nearest corner without moving the player's character. The player's actual position remains visible to opponents.
- **Counterplay / limits:** Does not move the player or make them safe; the view's range and obstruction rules are TBD.

#### 34. PERSONAL ASSISTANT
- **Role:** Pickup utility.
- **Concept:** Automatically collect nearby dropped ammunition and compatible pickups within a small radius.
- **Counterplay / limits:** Only affects eligible pickups; it does not create or duplicate resources.

#### 35. STAY THERE
- **Role:** Jump setup.
- **Concept:** Place a temporary marker on a surface. The player's next jump receives a small directional boost toward that marker.
- **Counterplay / limits:** The marker is visible and the boost applies only to the next jump.

#### 36. OUT OF STOCK
- **Role:** Pickup denial.
- **Concept:** Temporarily prevent nearby pickups from being collected. Existing weapons and equipment are unaffected.
- **Counterplay / limits:** Temporary and localized; does not disable equipment already owned by players.

#### 37. NICE TRY
- **Role:** Ability feedback / deception.
- **Concept:** When an opponent's ability targets the user, leave behind a harmless visual burst. It does not cancel the ability or hide the player's position.
- **Counterplay / limits:** Purely a visual response; the incoming ability still functions normally.

#### 38. QUICK QUESTION
- **Role:** Environmental information.
- **Concept:** Send a visible pulse that briefly highlights nearby interactive map objects, such as doors, switches, and moving platforms.
- **Counterplay / limits:** Reveals interactive objects, not enemies or hidden player positions.

### Altered

#### 39. LOST PROPERTY
- **Role:** Delayed proximity alert.
- **Concept:** Drop a copy of the player's position marker. If an opponent interacts with it, the owner receives a notification.
- **Counterplay / limits:** Does not reveal the opponent's exact location; the marker can be noticed and avoided.

#### 40. FREE SAMPLE
- **Role:** Pickup deception.
- **Concept:** Create a temporary copy of a nearby map pickup. It disappears after being collected and cannot duplicate weapons.
- **Counterplay / limits:** The copy is temporary and cannot grant weapons or duplicate valuable resources.

#### 41. NO REFUNDS
- **Role:** Movement consistency.
- **Concept:** Temporarily prevent the player's own movement ability from being interrupted by environmental effects. It does not protect against damage.
- **Counterplay / limits:** Does not grant damage resistance or immunity to player attacks.

#### 42. WRONG FLOOR
- **Role:** Route manipulation.
- **Concept:** Create a temporary floor panel that resembles the surrounding floor but acts as a one-way drop-through surface. Its outline becomes visible when approached.
- **Counterplay / limits:** The approach cue provides warning; it only affects the marked panel.

#### 43. GOOD QUESTION
- **Role:** Attention detection.
- **Concept:** Place a floating question mark. When an opponent looks directly at it, it changes colour and notifies its owner.
- **Counterplay / limits:** The object is visible and can be ignored; it does not reveal the opponent's position beyond the trigger event.

#### 44. SPARE CHANGE
- **Role:** Sound distraction.
- **Concept:** Throw a small bouncing device that makes increasingly loud sounds before disappearing.
- **Counterplay / limits:** Deals no damage. Its sound and bounce provide clues to its location.

#### 45. HOUSEKEEPING
- **Role:** Door control.
- **Concept:** Temporarily close one ordinary map door or passage. The door visibly displays a warning and can be reopened after the effect ends.
- **Counterplay / limits:** Only valid ordinary doors or passages; the warning communicates the temporary closure.

#### 46. LATE ARRIVAL
- **Role:** Delayed visual deception.
- **Concept:** Leave a temporary marker where the ability was activated. After a delay, a harmless visual copy of the character appears there.
- **Counterplay / limits:** The copy is visual only and cannot interact, attack, or deal damage.

#### 47. NOT INCLUDED
- **Role:** Audio stealth.
- **Concept:** Temporarily suppress the user's footsteps and landing sounds. The character remains fully visible and other sounds remain unchanged.
- **Counterplay / limits:** Does not hide the character, weapon sounds, or other gameplay cues.

### Evolved

#### 48. FRESH COAT
- **Role:** Visual deception.
- **Concept:** Temporarily change the player's outline colour to match one of the arena's environmental colours.
- **Counterplay / limits:** Cosmetic deception only; the player remains visible and their name and position are not hidden.

#### 49. ESCALATOR
- **Role:** Traversal / map utility.
- **Concept:** Create a temporary moving walkway on a flat surface. Its direction can be reversed by interacting with it.
- **Counterplay / limits:** The walkway is visible and usable by opponents too.

#### 50. THIRD WHEEL
- **Role:** Mobile platform.
- **Concept:** Create a small floating platform that follows the player at a fixed distance. The owner and opponents can stand on it.
- **Counterplay / limits:** Shared utility; it does not selectively carry only its owner.

#### 51. KEEP THE CHANGE
- **Role:** Momentum management.
- **Concept:** Store a portion of the player's current horizontal movement momentum, then release it in a chosen direction.
- **Counterplay / limits:** The stored momentum is limited; exact cap and release behavior are TBD.

#### 52. OPEN HOUSE
- **Role:** Map interaction.
- **Concept:** Temporarily unlock every ordinary door in a small surrounding area, including doors that were previously closed.
- **Counterplay / limits:** Only affects designated ordinary doors and only for a limited duration.

#### 53. WRONG EXIT
- **Role:** Visual deception.
- **Concept:** Place a temporary fake exit marker that resembles a real map exit indicator but cannot interact with actual exits.
- **Counterplay / limits:** Purely visual; does not alter real exits or objectives.

#### 54. FINE, I'LL DO IT
- **Role:** Environmental interaction.
- **Concept:** Automatically complete one nearby neutral map interaction, such as pressing a switch or activating a lift.
- **Counterplay / limits:** Only valid neutral map interactions; cannot operate player-owned or combat-critical systems unless explicitly approved for that map.

#### 55. THE LONG WAY
- **Role:** Route creation.
- **Concept:** Create a temporary curved walkway between two nearby valid surfaces.
- **Counterplay / limits:** The walkway is visible and usable by everyone; placement and structural limits are TBD.

#### 56. BUFFERING
- **Role:** Movement deception.
- **Concept:** The player's character briefly freezes in place while a holographic copy continues the previous movement animation. The copy cannot interact with anything.
- **Counterplay / limits:** The real player remains at the starting position; the hologram cannot attack or interact.

### Ascendant

#### 57. TERMS AND CONDITIONS
- **Role:** Area control.
- **Concept:** Create a small zone with a clear warning. Anyone entering it has their current movement speed temporarily set to the zone's fixed speed.
- **Counterplay / limits:** The zone is clearly marked and can be left; it affects all players inside.

#### 58. DOUBLE BOOKED
- **Role:** Traversal / launch pads.
- **Concept:** Create two linked pads. Activating either pad switches which one is active. Players can use the active pad to launch themselves in a set direction.
- **Counterplay / limits:** The active pad is identifiable; both teams can use the pads.

#### 59. FLOOR IS LAVA
- **Role:** Area denial.
- **Concept:** Temporarily mark selected floor sections as unsafe. Players can cross them, but receive a clear warning and a brief movement penalty.
- **Counterplay / limits:** The marked sections are visible and affect both teams.

#### 60. PUBLIC TRANSPORT
- **Role:** Shared traversal.
- **Concept:** Summon a small autonomous platform that travels along a fixed route. Anyone can board it; players cannot control its route.
- **Counterplay / limits:** Fixed, readable route and shared access.

#### 61. NO SIGNAL
- **Role:** Ability-information denial.
- **Concept:** Create a field that blocks enemy ability-generated visual markers inside its radius. It does not block normal vision, player models, or weapon fire.
- **Counterplay / limits:** Only suppresses specified ability-generated markers; it does not provide general concealment.

#### 62. GOOD NEIGHBOURS
- **Role:** Shared movement support.
- **Concept:** Create a temporary movement field. Teammates inside receive a small movement boost, but opponents receive the same boost.
- **Counterplay / limits:** The benefit is shared by both teams and the field is visible.

#### 63. JUST PASSING THROUGH
- **Role:** Map route manipulation.
- **Concept:** Temporarily turn one selected ordinary wall section into a visible passage. Both teams can use it.
- **Counterplay / limits:** Only designated valid wall sections; the opening is visible and temporary.

#### 64. BACK SEAT DRIVER
- **Role:** Remote reconnaissance.
- **Concept:** Deploy a controllable camera drone to inspect a nearby area. The player's character remains stationary and vulnerable while using it.
- **Counterplay / limits:** The player cannot move or fight normally while operating the drone; range and drone vulnerability are TBD.

#### 65. UNDER CONSTRUCTION
- **Role:** Temporary structure.
- **Concept:** Build a temporary staircase from a valid surface. The staircase has a limited number of steps and can be used by anyone.
- **Counterplay / limits:** Limited size and duration; shared access.

### Extraordinary

#### 66. THAT'S NOT MINE
- **Role:** Deployable deception.
- **Concept:** Copy the appearance of one nearby active deployable object. The copy is purely visual and cannot reproduce its function.
- **Counterplay / limits:** The copy cannot perform the original object's gameplay function.

#### 67. FLOOR PLAN
- **Role:** Local map information.
- **Concept:** Temporarily display a simplified overhead map of the nearby arena, including the player's own position and major map geometry.
- **Counterplay / limits:** Does not reveal enemies or hidden player positions.

#### 68. SECOND HAND
- **Role:** Moving platform / route replay.
- **Concept:** Create a temporary object that repeats the player's last movement input sequence as a moving physical platform. It can carry players but cannot interact with other objects.
- **Counterplay / limits:** The replay is limited to the recorded sequence; the platform is shared and cannot manipulate other map objects.

#### 69. GRAND ENTRANCE
- **Role:** Telegraphing traversal.
- **Concept:** Select a valid nearby landing surface. A large holographic arrival marker appears there; after a delay, the player launches upward before landing at the marked spot.
- **Counterplay / limits:** The full sequence is visible and interruptible. Landing surfaces and interruption rules are TBD.

#### 70. THE USUAL SUSPECT
- **Role:** Multi-decoy deception.
- **Concept:** Create three harmless holographic copies of the character at nearby positions. They perform different idle animations and disappear after a short time.
- **Counterplay / limits:** Copies are visual only and cannot attack or interact.

#### 71. FLOOR MANAGER
- **Role:** Map geometry manipulation.
- **Concept:** Temporarily rotate a selected movable map platform by 90 degrees. It returns to its original position when the effect ends.
- **Counterplay / limits:** Only explicitly designated movable platforms; the movement must be clearly telegraphed and safe.

#### 72. TIME OFF
- **Role:** Defensive positioning.
- **Concept:** Create a stationary personal bubble in which the player cannot move or take actions, but also cannot be affected by movement-displacing effects. The player can leave early.
- **Counterplay / limits:** The player cannot attack, move, or use other actions while inside; it does not grant damage immunity.

#### 73. PUBLIC APOLOGY
- **Role:** Social / psychological utility.
- **Concept:** Create a large holographic message above the player's position. It can be seen across the arena and stays visible for a few seconds.
- **Counterplay / limits:** Provides no combat protection or concealment; it openly gives away the user's position.

### Singular

#### 74. THE FLOOR PLAN WAS WRONG
- **Role:** Room-scale traversal manipulation.
- **Concept:** Temporarily rotate the orientation of gravity for everyone inside a clearly marked room. Players can walk on its walls while the room itself remains stationary.
- **Counterplay / limits:** The affected room is clearly marked and the effect applies to everyone inside. Technical feasibility, camera comfort, and movement readability require prototyping.

#### 75. I'LL TAKE THAT
- **Role:** Map mechanism control.
- **Concept:** Temporarily borrow the functionality of one nearby neutral map mechanism. The original mechanism becomes inactive until the borrowed version expires.
- **Counterplay / limits:** Only designated neutral mechanisms; cannot take control of players, weapons, or enemy equipment.

#### 76. WHO'S DRIVING?
- **Role:** Shared vehicle traversal.
- **Concept:** Summon a small autonomous vehicle that follows a fixed path through the arena. Players can ride it, jump off it, or use it as temporary moving cover.
- **Counterplay / limits:** Fixed route, shared access, and clearly communicated movement.

#### 77. MIND THE GAP
- **Role:** Route manipulation.
- **Concept:** Create a temporary gap between two sections of a walkway. Players can jump across it.
- **Counterplay / limits:** The affected walkway is clearly marked; the gap affects both teams.

#### 78. THE FLOOR IS YOURS
- **Role:** Vertical map manipulation.
- **Concept:** Select a small section of floor and temporarily make it move vertically. Anyone standing on it travels with it.
- **Counterplay / limits:** The moving section is visible and affects everyone on it; movement range and speed are TBD.

#### 79. PLEASE HOLD
- **Role:** Queue-based movement control.
- **Concept:** Create a visible temporary waiting zone. Players entering it are placed into a short queue and released one at a time. Nobody is trapped, and leaving cancels their place in the queue.
- **Counterplay / limits:** Players can leave freely; the zone is visible and applies to everyone.

#### 80. FINAL NOTICE
- **Role:** Ability-object cleanup.
- **Concept:** Mark a large area with a countdown. When the timer ends, all temporary ability-created objects inside the area disappear simultaneously.
- **Counterplay / limits:** Players and ordinary map geometry are unaffected; the countdown is visible.

## 3. Rarity and Naming Notes

- The names intentionally use understated humour, everyday phrases, and dry absurdity. Avoid forced memes, excessive gamer slang, and names that explain the mechanic too literally.
- The rarity of an ability is not a power ranking. Singular abilities should be unusual in concept and presentation, not automatically superior in combat.
- Rarity assignments for this batch follow the six section headings above. They are accepted as the current concept rarity assignments and can only be changed through an explicit design review.

## 4. Earlier Ability Concept

#### MY BAD
- **Rarity:** Extraordinary
- **Role:** Mobility / positioning.
- **Concept:** Rewind the player's own position by a few seconds. Health, damage, eliminations, and enemy actions are not undone. The player cannot rewind through solid walls.
- **Presentation direction:** Blue-white fragmented afterimages, reverse-motion animation, clock-like audio, and a brief temporal distortion.
- **Counterplay / limits:** Position only; no health restoration or reversal of combat outcomes. Cooldown and exact rewind duration are TBD.

MY BAD is explicitly **Extraordinary**, not Commonplace.
