# AVENOR — Game Modes & Match Rules

> **Status: Proposed for approval.** This document establishes the first mode roster and draft rules. The player counts, score limits, round counts, and target durations below are starting values for playtesting, not locked balance decisions. AVENOR ORIGIN is the signature original mode and requires its own focused prototype.

## 1. Mode Design Principles

Every mode must have:
- A clear objective that players can understand quickly.
- A distinct reason to exist; avoid modes that differ only by a small score-limit change.
- A match length that respects players' time while allowing comebacks.
- Fair spawn, respawn, and overtime rules.
- A HUD that makes the current objective and win condition obvious.
- Maps designed or adapted specifically for its player count and objective.

The initial playlist should offer both familiar FPS formats and original AVENOR identity. The classic modes provide immediate familiarity; AVENOR ORIGIN should become the signature experience.

## 2. Initial Mode Roster

All values in this table are **proposed**.

| Mode | Players | Format | Win condition | Target duration |
|---|---:|---|---|---:|
| DUEL | 1v1 | Round-based | First to 5 round wins | 5–8 min |
| DUOS | 2v2 | Round-based | First to 5 round wins | 6–9 min |
| TEAM DEATHMATCH | 4v4 | Continuous respawn | First to 50 team eliminations | 6–8 min |
| FREE FOR ALL | 8 players | Continuous respawn | First to 25 eliminations | 5–7 min |
| HARDPOINT | 4v4 | Continuous respawn | First to 150 objective points | 7–9 min |
| CAPTURE THE FLAG | 4v4 | Continuous respawn | First to 3 captures | 7–10 min |
| AVENOR ORIGIN | 4v4 | Continuous objective | Complete the Origin objective's scoring condition | 8–10 min |

Target durations are goals, not hard guarantees. Actual match lengths depend on map size, player skill, objective pace, and playtesting.

## 3. Shared Match Rules

### Match start
1. Players are assigned to the match and mode.
2. Teams and starting sides are assigned where applicable.
3. Players receive their permitted loadouts.
4. A short pre-match countdown gives players time to orient themselves.
5. The server starts the match and enables the mode's scoring rules.

### Match end
- The server determines the winner from the mode's defined win condition.
- If the timer expires, the mode's time-expiry rule decides the result.
- A tie triggers the mode's overtime rule where one is defined.
- Results and rewards are recorded once by the server.

### Respawns and round resets
- Round-based modes: eliminated players remain out until the round ends.
- Continuous modes: eliminated players respawn after a mode-specific delay.
- Respawn locations must avoid obvious immediate line-of-sight eliminations where practical.
- Spawn protection, if used, must be brief and end when the player attacks.
- Exact respawn delays and spawn logic must be tuned per map and mode.

### Loadouts
- Players use their selected loadout unless a mode-specific restriction is clearly stated.
- Loadout changes are allowed between rounds in round-based modes, unless competitive testing identifies a reason to restrict them.
- Mid-match weapon pickups follow the shared pickup rules and cannot silently replace the player's Ability slot.

## 4. Classic Modes

### 4.1 DUEL

- **Players:** 1v1.
- **Format:** Round-based.
- **Proposed win condition:** First player to win 5 rounds.
- **Round length:** 90 seconds maximum.
- **Round objective:** Eliminate the opponent. If time expires, the player with more remaining health wins the round.
- **Respawns:** None during a round.
- **Overtime:** If both players have equal health when time expires, a short sudden-death extension begins. If still tied, use a clearly communicated neutral tiebreak rule rather than an arbitrary winner.
- **Target match length:** 5–8 minutes.

DUEL is the cleanest test of aim, movement, weapon knowledge, and individual decision-making.

### 4.2 DUOS

- **Players:** 2v2.
- **Format:** Round-based.
- **Proposed win condition:** First team to win 5 rounds.
- **Round length:** 100 seconds maximum.
- **Round objective:** Eliminate the opposing team.
- **Respawns:** None during a round.
- **Overtime:** If the round timer expires with players alive on both teams, the team with more combined remaining health wins. If tied, use a short sudden-death extension.
- **Target match length:** 6–9 minutes.

DUOS should reward coordination without making either player feel like a passenger.

### 4.3 TEAM DEATHMATCH

- **Players:** 4v4.
- **Format:** Continuous respawn.
- **Proposed win condition:** First team to 50 eliminations, or the team with the higher score when the timer expires.
- **Time limit:** 8 minutes.
- **Respawn delay:** Proposed 3 seconds.
- **Overtime:** If tied at the time limit, the next team elimination wins.
- **Target match length:** 6–8 minutes.

TDM is the straightforward team-combat mode. It should be the easiest mode to understand and a reliable warm-up playlist.

### 4.4 FREE FOR ALL

- **Players:** 8.
- **Format:** Continuous respawn.
- **Proposed win condition:** First to 25 eliminations, or the highest score when the timer expires.
- **Time limit:** 7 minutes.
- **Respawn delay:** Proposed 3 seconds.
- **Overtime:** If tied, the next elimination by a tied player wins.
- **Target match length:** 5–7 minutes.

FFA maps need multiple routes and spawn protection against immediate repeat encounters. Spawn selection must avoid repeatedly placing players in the same fight.

### 4.5 HARDPOINT

- **Players:** 4v4.
- **Format:** Continuous respawn.
- **Proposed win condition:** First to 150 objective points, or the higher score when the time limit expires.
- **Time limit:** 9 minutes.
- **Objective:** One active zone awards points while controlled. The zone changes location on a predictable, clearly announced schedule.
- **Respawn delay:** Proposed 4 seconds.
- **Overtime:** If tied, the next team to score objective progress wins.
- **Target match length:** 7–9 minutes.

The active zone rotation must be learnable and fair. Maps need multiple approaches and enough room to contest without creating unavoidable spawn traps.

### 4.6 CAPTURE THE FLAG

- **Players:** 4v4.
- **Format:** Continuous respawn.
- **Proposed win condition:** First to 3 captures, or the team with more captures when the timer expires.
- **Time limit:** 10 minutes.
- **Objective:** Take the enemy flag and return it to the team's own base while the home flag is secured.
- **Respawn delay:** Proposed 4 seconds.
- **Overtime:** If tied, play a short sudden-death period; the first valid capture wins.
- **Target match length:** 7–10 minutes.

Flag status must be visible to both teams. The map must support attacking, defending, and alternate routes without allowing one side to trap the flag carrier indefinitely.

## 5. Signature Original Mode: AVENOR ORIGIN

<badge>Flagship mode concept</badge>

- **Players:** 4v4.
- **Format:** Continuous match with a two-stage evolving objective.
- **Target duration:** 8–10 minutes.
- **Respawn delay:** Proposed 4 seconds.
- **Proposed win condition:** First team to secure 3 ORIGIN claims, or the team with more claims when the match timer expires.
- **Time limit:** Proposed 9 minutes.
- **Status:** The direction is approved; the rules below are a complete prototype proposal, not locked balance.

### 5.1 Core identity

Both teams compete to awaken the central ORIGIN structure, then convert that control into a claim at one of two exposed claim sites.

The mode has two linked stages:

1. **AWAKEN:** Win control of the central ORIGIN to activate it.
2. **CLAIM:** Choose one of two revealed claim sites and hold it long enough to secure a point.

The team must win the centre fight and then make a second decision about where to commit. Simply standing on one objective for the whole match is not enough.

### 5.2 Arena layout

An ORIGIN map is built around three objective spaces:

- **The Core:** A central, highly visible structure where each cycle begins.
- **Claim Site A:** One possible claim location on a different route from the Core.
- **Claim Site B:** A second possible claim location, offering a distinct approach and defensive shape.

The two claim sites should not be identical rooms mirrored beside the Core. They should create different route choices, sightlines, cover patterns, and rotation times while remaining equally viable.

Only one claim site is active during a claim phase. The inactive site remains visible but cannot be captured.

### 5.3 Stage One: AWAKEN

- The Core begins each cycle neutral.
- A team starts awakening it by establishing control in the Core zone.
- Control is determined by team presence: a team must have more players inside the zone than the opponent.
- Equal presence, or no players inside, contests or pauses progress.
- The awakening meter fills over a proposed **10 seconds of uncontested control**. Progress is paused while contested.
- If the opposing team gains control, the meter begins moving toward neutral after a proposed **3-second grace period**. This prevents a tiny interruption from erasing an earned advantage while still allowing a real retake.
- The team that completes the awakening chooses which of the two claim sites becomes active.

The HUD must show the awakening meter, which team currently controls the Core, and whether progress is filling, paused, or returning to neutral.

### 5.4 Stage Two: CLAIM

After the Core is awakened:

- Both claim sites are revealed as possible destinations.
- The team that awakened the Core chooses Site A or Site B. The choice is made through a clear, short interaction or automatic selection if no choice is made before the selection timer expires.
- The selected site becomes the active Claim Site for both teams.
- The activating team must rotate from the Core and establish control at the selected site.
- A proposed **8 seconds of uncontested control** secures one claim for that team.
- Opponents can stop the claim by entering the zone and matching or exceeding the attacking team's presence.
- If the site is empty or contested, claim progress pauses. If the defending team takes control, claim progress returns toward zero after a proposed **3-second grace period**.
- Once a claim is secured, the structure resets and a new cycle begins after a short, clearly signalled transition.

The team that awakened the Core does not automatically receive the point. It must successfully convert its advantage at the chosen site.

### 5.5 Scoring, match end, and overtime

- Each successful Claim awards **1 point**.
- First team to **3 points** wins immediately.
- If the 9-minute timer expires, the team with more claims wins.
- If tied when time expires, the match enters **sudden-death ORIGIN**:
  - The Core immediately begins a final neutral cycle.
  - The first team to awaken the Core and complete a Claim wins.
  - The normal two-stage rules remain active; there is no instant point for simply touching the Core.
- If neither team completes a Claim before the sudden-death limit, the match continues in short, clearly announced extensions until a valid Claim is completed. The exact extension length is a playtest value.

### 5.6 Respawns and transitions

- Proposed respawn delay: **4 seconds**.
- Respawns remain enabled during both objective stages.
- Spawn selection must consider the active stage and avoid placing a player directly inside an active enemy-controlled zone or in immediate unavoidable line of sight.
- After a point, players receive a short transition signal before the next Core cycle begins.
- The next cycle starts neutral. No awakening or claim progress carries over.
- The previous scoring team does not receive a hidden advantage in the next cycle.
- Loadout changes are not allowed during an active cycle; use the normal mode loadout-change window between cycles only if testing shows it is needed.

### 5.7 Counterplay and fairness rules

- Both teams can contest either stage. The mode must never lock the losing team out of interacting with the objective.
- The chosen Claim Site is announced to both teams immediately. Site selection is a strategic commitment, not hidden information.
- The two claim sites must be balanced for travel time from the Core and must not create a guaranteed win for one side.
- Objective zones must be large and clearly marked enough to avoid confusing edge cases.
- Players outside the zone cannot contribute to objective control.
- Multiple players from one team increase control presence only up to the team's player count; there are no extra hidden multipliers.
- Objective progress is server-authoritative.
- Visual and audio cues must clearly communicate Core control, site selection, claim progress, interruption, and scoring.
- Objective effects must not obscure players, crosshairs, or incoming threats.

### 5.8 What makes ORIGIN distinct

ORIGIN is not simply a moving Hardpoint:

- **Two decisions per score:** First win the central fight, then choose where to convert it.
- **Attacking choice:** The team that awakens the Core selects the next objective location.
- **Defensive response:** The other team sees the selection and can rotate, intercept, or prepare a retake.
- **Changing map pressure:** Each cycle shifts the fight between the centre and one of two different routes.
- **No automatic score:** Winning the first fight creates an opportunity, not a guaranteed point.

### 5.9 Prototype tuning checklist

The first prototype should test:

1. Whether 10 seconds to awaken and 8 seconds to claim create enough opportunity for both teams to respond.
2. Whether the 3-second progress grace period feels fair or causes excessive progress loss.
3. Whether choosing between two sites creates meaningful decisions.
4. Whether either site is consistently safer, faster, or easier to defend.
5. Whether 4-second respawns create constant action without making objective control meaningless.
6. Whether a team that loses the Core fight still has a realistic chance to stop the Claim.
7. Whether a full cycle takes an appropriate amount of time and the match reaches its target duration.
8. Whether players understand the two stages without needing a long tutorial.

Record cycle duration, successful and failed claims, site selection frequency, contest frequency, comeback rate, spawn fairness, and player understanding. Tune from playtest evidence rather than treating these numbers as final.


## 6. Casual and Competitive Rules

**Recommended direction:** Keep the core mechanics and win conditions the same in Casual and Competitive. Competitive should differ through matchmaking, ranked scoring, stricter match integrity, and carefully selected settings rather than a completely different version of the mode.

Possible competitive-specific settings:
- More consistent team balancing and party restrictions.
- Stricter disconnect and remake rules.
- Reduced randomness where it could undermine competitive integrity.
- A defined map pool and map-veto process, if the ranked playlist needs it.
- Clearer penalties for leaving ranked matches.

Do not lengthen every competitive match automatically. Match duration should be based on the mode's pacing and tested player experience.

## 7. Mode and Map Compatibility

Not every map needs to support every mode.

- DUEL maps should be compact, symmetrical or demonstrably fair, and designed for 1v1 sightlines and movement.
- DUOS maps should support coordinated two-player pushes and readable routes.
- TDM and FFA maps need safe spawn logic and enough route variety for continuous respawns.
- HARDPOINT maps need carefully tested objective rotations and multiple approaches.
- CTF maps need legible bases, viable attack routes, and meaningful defensive options.
- ORIGIN maps should be designed around the evolving central structure and its surrounding decision space.

Each map should list its supported modes. A mode should not be forced onto a map simply to increase the playlist count.

## 8. Initial Playtest Priorities

Test a small number of modes before implementing the entire playlist.

1. **DUEL:** Validate core combat, round flow, and match reset.
2. **TEAM DEATHMATCH:** Validate respawns, spawn fairness, team scoring, and match pacing.
3. **AVENOR ORIGIN prototype:** Test whether its central mechanic is genuinely distinctive and understandable.
4. **DUOS and objective classics:** Add once the shared systems are stable.

Record match duration, score distribution, comeback frequency, spawn fairness, objective participation, and player understanding. Adjust proposed values from actual playtests rather than treating this draft as final balance.

## 9. Decisions and Status

### Confirmed direction
- AVENOR will include both familiar classic modes and original modes.
- **AVENOR ORIGIN** is the name of the signature original mode.
- AVENOR ORIGIN is team-based.
- AVENOR ORIGIN uses 4v4.

### Proposed, not yet locked
- The initial mode roster in Section 2.
- All player counts except AVENOR ORIGIN's 4v4.
- All score limits, round counts, timers, respawn delays, and overtime rules.
- The evolving central ORIGIN structure concept.
- Shared Casual/Competitive core rules.

Do not treat proposed numbers as final until approved and playtested.
