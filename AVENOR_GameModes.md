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
- Mid-match weapon pickups follow the shared pickup rules and cannot silently replace Ability or Equipment.

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
- **Format:** Continuous match with an evolving central objective.
- **Target duration:** 8–10 minutes.
- **Core idea:** Both teams fight over the ORIGIN, a central structure whose state changes as the match progresses.
- **Status:** Concept direction approved; exact mechanics are not yet locked.

### Design goals
- Make ORIGIN recognisably AVENOR rather than a renamed Hardpoint or TDM.
- Give both teams meaningful decisions beyond standing inside a capture circle.
- Create changing priorities and opportunities for comebacks.
- Keep the objective understandable from the HUD and the arena itself.
- Reward coordinated pushes, defensive decisions, timing, and map control.
- Avoid excessive objective stages, unclear scoring, or long periods where players cannot meaningfully interact.

### Starting concept to prototype
The ORIGIN is a central structure that changes state during the match. The initial design exploration may combine:
1. **Activation:** Teams contest the central structure to activate it.
2. **Control:** The active ORIGIN creates or enables secondary control opportunities around the arena.
3. **Charge:** Team actions and control contribute to a visible team charge.
4. **Claim:** Reaching the required state creates a clear scoring opportunity.

This is a design hypothesis, not a final ruleset. The number of stages, how control works, how charge is earned, how the opponent can interrupt it, and the exact victory condition must be designed and playtested before approval.

### ORIGIN must not become
- A standard capture point with a futuristic model.
- A sequence of arbitrary buttons with no meaningful player choice.
- A mode where one early advantage makes the rest of the match inevitable.
- An objective that is so complicated that players need a tutorial to understand the basic goal.

### Questions still open
- Exact objective states and transitions.
- Whether teams can contest or interrupt each stage.
- How progress is earned, lost, paused, or stolen.
- Whether the mode has one scoring opportunity or multiple scoring cycles.
- Timer, overtime, and comeback rules.
- Respawn delay and spawn locations.
- Map layout and objective placement.

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
