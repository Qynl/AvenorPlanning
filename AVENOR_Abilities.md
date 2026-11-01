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


## 3. Approved Ability Roster — Batch 03

The following 50 concepts (81–130) were approved as a batch. Approval confirms their core identity and concept rarity, not final implementation or balance values.

### Commonplace

#### 81. SPARE KEY
- **Role:** Door access.
- **Concept:** Create a temporary keyhole on one designated locked map door. Interacting with it opens that door briefly, even if it was previously locked.
- **Counterplay / limits:** Only designated doors; the temporary access point is visible.

#### 82. QUIET HOURS
- **Role:** Audio utility.
- **Concept:** Create a small sound-dampening zone. Sounds produced inside are harder to hear from outside, while visual information remains unchanged.
- **Counterplay / limits:** Does not conceal players or suppress visual cues.

#### 83. GOOD AS NEW
- **Role:** Map maintenance.
- **Concept:** Repair one damaged neutral map mechanism, restoring it to its original working state.
- **Counterplay / limits:** Cannot repair player equipment or weapons; only designated mechanisms.

#### 84. CHECK ENGINE
- **Role:** Mechanism information.
- **Concept:** Inspect a nearby moving map mechanism to see its next movement direction and approximate arrival time.
- **Counterplay / limits:** Reveals mechanism behavior, not enemy locations.

#### 85. DO NOT DISTURB
- **Role:** Door control.
- **Concept:** Temporarily prevent ordinary map doors within a small radius from being opened. Doors already open remain open.
- **Counterplay / limits:** Only designated ordinary doors; visible and temporary.

#### 86. ON THE HOUSE
- **Role:** Teammate support.
- **Concept:** Give one nearby teammate a temporary extra charge of their equipment, if that equipment supports charges.
- **Counterplay / limits:** Does not affect abilities; only works with charge-based equipment and must respect item charge caps.

#### 87. PAPER TRAIL
- **Role:** Route communication.
- **Concept:** Leave visible paper markers along the user's movement route. Teammates can follow them, and opponents can see them too.
- **Counterplay / limits:** Markers are visible to both teams and fade after a limited time.

#### 88. NO WORRIES
- **Role:** Movement control.
- **Concept:** Cancel the user's current slide early and transition into controlled standing movement while preserving some horizontal momentum.
- **Counterplay / limits:** Does not grant invulnerability or additional speed beyond the retained momentum.

### Altered

#### 89. RECEIPT
- **Role:** Directional trip sensor.
- **Concept:** Place a small scanner on a surface. It records the time and direction of the first player who passes it, then displays that information to its owner.
- **Counterplay / limits:** Limited to one trigger and reports direction/time rather than exact identity or location.

#### 90. DEAD AIR
- **Role:** Audio distortion.
- **Concept:** Create a temporary audio bubble where sound cues are delayed slightly before being heard. Actual game events and visual information are unchanged.
- **Counterplay / limits:** Does not delay gameplay events or alter player movement; only affects audio presentation within the field.

#### 91. OPEN SECRET
- **Role:** Environmental reconnaissance.
- **Concept:** Briefly reveal hidden map passages and secret environmental interactions within a limited radius.
- **Counterplay / limits:** Reveals designated map features only, not enemies or player-created traps unless explicitly tagged as environmental secrets.

#### 92. OUT OF ORDER
- **Role:** Mechanism denial.
- **Concept:** Temporarily disable one designated neutral map mechanism. It displays a clear out-of-order sign while inactive.
- **Counterplay / limits:** Only affects approved neutral mechanisms; the warning is visible.

#### 93. ONE MORE THING
- **Role:** Delayed visual effect.
- **Concept:** Leave behind a delayed second activation that repeats the ability's harmless visual effect.
- **Counterplay / limits:** Cannot repeat damage, movement-affecting effects, or other gameplay outcomes.

#### 94. LOOSE THREAD
- **Role:** Traversal.
- **Concept:** Attach a visible temporary cable between two valid surfaces. Players can slide along it in either direction.
- **Counterplay / limits:** The cable is visible and usable by both teams; attachment points and capacity are limited.

#### 95. WINDOW SHOPPING
- **Role:** Pickup information.
- **Concept:** Temporarily display available weapon pickups in a nearby section of the map, including their categories, without revealing player locations.
- **Counterplay / limits:** Shows pickup information only, not who is carrying a weapon or where opponents are.

#### 96. UNDER THE TABLE
- **Role:** Temporary concealment.
- **Concept:** Create a small temporary hiding space beneath a specially designated map object. Players inside remain visible from certain angles and cannot attack while concealed.
- **Counterplay / limits:** Only designated locations; concealment is incomplete and attacking is disabled.

### Evolved

#### 97. SHORT NOTICE
- **Role:** Temporary platform.
- **Concept:** Mark a location. After a delay, a temporary platform appears there and remains for a limited time.
- **Counterplay / limits:** The marker telegraphs the location; platform is usable by everyone.

#### 98. WEIGHT LIMIT
- **Role:** Fall control.
- **Concept:** Temporarily reduce the user's falling speed, allowing controlled long descents.
- **Counterplay / limits:** Does not allow flight or upward movement.

#### 99. INVENTORY CHECK
- **Role:** Loadout intelligence.
- **Concept:** Send out a pulse that reveals the ability and equipment categories currently equipped by nearby opponents, without revealing their exact positions.
- **Counterplay / limits:** Gives category-level information only and is limited by range.

#### 100. FLOOR SERVICE
- **Role:** Deployable cover.
- **Concept:** Deploy a temporary piece of waist-high cover on a valid flat surface.
- **Counterplay / limits:** Usable by both teams; placement is limited to valid surfaces and must remain readable.

#### 101. STAND-IN
- **Role:** Static deception.
- **Concept:** Create a stationary holographic copy of the user's current weapon and character silhouette at a selected position. It performs no actions.
- **Counterplay / limits:** Visual only; cannot move, attack, or interact.

#### 102. EARLY ACCESS
- **Role:** Alternate route.
- **Concept:** Temporarily activate one designated alternative route in the map. It closes automatically when the effect expires.
- **Counterplay / limits:** Only approved map routes; opening and closure are clearly communicated.

#### 103. THE SHORTCUT
- **Role:** Shared traversal.
- **Concept:** Create a temporary one-way launch ramp that sends players toward a selected nearby landing area.
- **Counterplay / limits:** Both teams can use it; trajectory and landing area are telegraphed.

#### 104. STICKER PRICE
- **Role:** Interaction marking.
- **Concept:** Mark one neutral map object. The next player to interact with it receives a temporary visual indicator visible to everyone.
- **Counterplay / limits:** Only triggers on the next interaction and does not reveal additional information about the player.

#### 105. NO RUSH
- **Role:** Mechanism control.
- **Concept:** Create a field that reduces the speed of moving map mechanisms inside it. Player movement remains unaffected.
- **Counterplay / limits:** Only designated moving mechanisms; field is visible and temporary.

### Ascendant

#### 106. READ THE ROOM
- **Role:** Sound reconnaissance.
- **Concept:** Temporarily visualize recent sound events in a nearby area as fading directional waves.
- **Counterplay / limits:** Does not reveal exact enemy positions; visualized events fade and are limited by range/time.

#### 107. MEASURE TWICE
- **Role:** Bridge construction.
- **Concept:** Project a straight line between two valid surfaces. After a short delay, a temporary narrow bridge forms along that line.
- **Counterplay / limits:** Both endpoints and the projected path are telegraphed; usable by both teams.

#### 108. SHIFT CHANGE
- **Role:** Platform control.
- **Concept:** Take control of one designated moving platform and reverse its direction for a short period. Its movement is clearly announced.
- **Counterplay / limits:** Only designated platforms; movement change is visible to all players.

#### 109. SAFETY INSPECTION
- **Role:** Hazard reconnaissance.
- **Concept:** Scan a nearby area and mark dangerous map hazards, unstable platforms, and active environmental traps.
- **Counterplay / limits:** Reveals environmental hazards only, not players or their equipment.

#### 110. PASSING LANE
- **Role:** Shared movement support.
- **Concept:** Create a temporary strip of accelerated movement on the floor. Players moving along it gain speed in the strip's direction.
- **Counterplay / limits:** Both teams benefit; the strip's direction and boundaries are visible.

#### 111. TIME SHARE
- **Role:** Mechanism pause.
- **Concept:** Temporarily pause one designated moving map mechanism. Players can still move normally around it.
- **Counterplay / limits:** Only designated mechanisms; does not freeze players or combat.

#### 112. NO CUTTING
- **Role:** Queue-based traversal.
- **Concept:** Create a visible single-file passage. Players entering it are arranged into a line and move through in order. They can leave at any time.
- **Counterplay / limits:** No player is trapped; queue is visible and applies equally to both teams.

#### 113. SECOND SHIFT
- **Role:** Remote reconnaissance.
- **Concept:** Deploy a second controllable camera device at another nearby location. The user can switch between views, but their character remains stationary while operating either.
- **Counterplay / limits:** The user remains vulnerable and stationary; camera range and vulnerability are TBD.

#### 114. ROOM SERVICE
- **Role:** Map layout manipulation.
- **Concept:** Temporarily rearrange designated movable map furniture or cover objects into a predefined alternative layout.
- **Counterplay / limits:** Only approved movable objects and predefined layouts; all changes are telegraphed and shared.

### Extraordinary

#### 115. YOU FIRST
- **Role:** Platform routing.
- **Concept:** Select a neutral moving platform and temporarily reverse its priority: it travels to the nearest waiting player before continuing its route.
- **Counterplay / limits:** Platform remains available to everyone; route changes are visible.

#### 116. SMOKE BREAK
- **Role:** Temporary room.
- **Concept:** Create a small temporary enclosed room made of translucent panels. Players can enter and leave freely, and everyone inside remains visible through the panels.
- **Counterplay / limits:** Not opaque or invulnerable; both teams can enter.

#### 117. THE USHER
- **Role:** Directional movement influence.
- **Concept:** Create a directional guidance field that gently redirects players walking through it toward a selected exit. It does not take control of their movement.
- **Counterplay / limits:** Influence is limited and avoidable; players retain control.

#### 118. LOST IN TRANSIT
- **Role:** Paired transport.
- **Concept:** Enter a special map transport point and reappear at its paired exit after a short, visible travel sequence. Both points are announced.
- **Counterplay / limits:** Only designated paired points; transport is telegraphed and interruptibility is TBD.

#### 119. RENT CONTROL
- **Role:** Platform scale manipulation.
- **Concept:** Temporarily shrink or expand one designated movable map platform. Anyone standing on it moves with it.
- **Counterplay / limits:** Only designated platforms; size change is visible and safe movement boundaries are required.

#### 120. OUT OF POCKET
- **Role:** Deployable room.
- **Concept:** Deploy a small portable room that unfolds around a selected surface, creating a temporary enclosed space with two openings.
- **Counterplay / limits:** Both teams can enter; openings remain accessible and the structure is temporary.

#### 121. THE BUILDING INSPECTOR
- **Role:** Geometry information.
- **Concept:** Temporarily reveal the structural layout of nearby map geometry, showing which surfaces are valid for climbing, standing, or placing temporary structures.
- **Counterplay / limits:** Reveals map geometry rules only, not player positions.

#### 122. NOT MY DEPARTMENT
- **Role:** Mechanism reset.
- **Concept:** Redirect one active neutral map mechanism to its default automated behaviour, overriding any player-controlled setting.
- **Counterplay / limits:** Only designated neutral mechanisms; cannot control players or enemy equipment.

### Singular

#### 123. THE COMMITTEE
- **Role:** Multi-platform construction.
- **Concept:** Summon three small autonomous platforms that arrange themselves into a temporary staircase. They can be climbed by everyone.
- **Counterplay / limits:** Shared access; assembly is visible and takes time.

#### 124. EVERYBODY OUT
- **Role:** Room evacuation.
- **Concept:** Mark a designated room. After a visible countdown, all players inside are gently transported to the nearest valid exit.
- **Counterplay / limits:** Applies equally to both teams; countdown is visible and no damage is dealt.

#### 125. GROUND FLOOR
- **Role:** Platform positioning.
- **Concept:** Temporarily lower a designated movable platform to its lowest valid position, carrying everyone standing on it.
- **Counterplay / limits:** Only designated platforms; movement is visible and shared.

#### 126. THIS IS A TEST
- **Role:** Visual map deception.
- **Concept:** Create a temporary duplicate of a small section of neutral map geometry. The duplicate is purely visual and cannot be used as cover or for movement.
- **Counterplay / limits:** Visual only; cannot block shots, movement, or visibility in ways that affect combat.

#### 127. LOCAL TIME
- **Role:** Mechanism speed control.
- **Concept:** Select one moving map mechanism and change its speed for a short period. It can be slowed down or sped up, but cannot be stopped completely.
- **Counterplay / limits:** Only designated mechanisms; speed changes are visible and bounded.

#### 128. THE BUILDING MOVED
- **Role:** Multi-platform rearrangement.
- **Concept:** Temporarily shift a group of designated movable platforms into a different predefined arrangement.
- **Counterplay / limits:** Changes are announced and visible; only approved layouts are allowed.

#### 129. PLEASE USE OTHER DOOR
- **Role:** Paired doorway manipulation.
- **Concept:** Create a temporary doorway on a valid wall surface while simultaneously closing another designated doorway.
- **Counterplay / limits:** Both changes are visible and affect everyone; only approved wall and doorway locations.

#### 130. TERMS OF LEASE
- **Role:** Room rule-set transformation.
- **Concept:** Claim one designated neutral room for a short period. While claimed, its doors remain open, its lights change colour, and its interactive map objects operate according to a predefined alternative layout.
- **Counterplay / limits:** Everyone can enter and use the room; the alternative layout is predefined, visible, and temporary.

## 4. Rarity and Naming Notes

- Names should use understated humour, everyday phrases, and dry absurdity. Avoid forced memes, excessive gamer slang, and names that explain the mechanic too literally.
- Rarity communicates originality, uniqueness, complexity, presentation, or exclusivity, not automatic combat strength.
- The rarity of each concept is determined by its section heading. Assignments are accepted for this batch and require explicit design review to change.

## 5. Earlier Ability Concept

#### MY BAD
- **Rarity:** Extraordinary
- **Role:** Mobility / positioning.
- **Concept:** Rewind the player's own position by a few seconds. Health, damage, eliminations, and enemy actions are not undone. The player cannot rewind through solid walls.
- **Presentation direction:** Blue-white fragmented afterimages, reverse-motion animation, clock-like audio, and a brief temporal distortion.
- **Counterplay / limits:** Position only; no health restoration or reversal of combat outcomes. Cooldown and exact rewind duration are TBD.

MY BAD is explicitly **Extraordinary**, not Commonplace.
