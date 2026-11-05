# 07 — QA, Launch and Live Operations

**Status:** PROPOSED plan. The quality gates are derived from `06_Production/Quality_Gates.md` and the technical standards; the device matrix, bug bars and launch runbook are production proposals.

---

## 1. Quality model

A feature is not done because it works once on the developer's desktop. It is done when it passes the gate that matches its risk.

| Gate | Question | Evidence |
|---|---|---|
| Design | Is the player value clear, and is the decision labelled? | One-page brief, links, status |
| Gameplay | Is it understandable, useful and counterable? | Recorded playtest, not an opinion |
| Presentation | Does it read at gameplay distance and at low quality? | Screenshot set + mobile capture |
| Technical | Is authority correct, is state recoverable, is it in budget? | Validation checklist + budget sheet |
| Accessibility | Can a player with reduced motion, colour vision deficiency or text scaling use it? | Settings matrix pass |
| Live | Can it be monitored, hotfixed and rolled back? | Runbook entry + telemetry event |

**Honesty rule:** a check that was not run is reported as not run. "Compiled" is not "tested". "Tested on desktop" is not "tested on mobile". "Looked correct in Studio" is not "verified in a live server".

---

## 2. Test matrix

### Devices and quality

| Device class | Example | Quality levels | Required tests |
|---|---|---|---|
| Desktop mid | Integrated GPU laptop | 1, 4, 7, 10 | All functional + performance |
| Desktop high | Discrete GPU | 10 | Visual reference, capture |
| Mid-tier phone | iPhone 11 / equivalent | 1, 4 | All functional + performance |
| Low-end phone | 4–6 GB Android | 1, 2 | Performance, readability, crash |
| Controller | Roblox-supported gamepad | Any | Full input parity |
| Touch | Phone/tablet | 1, 4 | Full input parity |

**Minimum launch evidence:** one real mid-tier phone, one low-end phone, one desktop, one controller. Emulators are useful for iteration, not for sign-off.

### Session and network conditions

| Condition | Test |
|---|---|
| Solo | Full loop, save/rejoin |
| 4 players | Encounter, scanning, ability readability |
| 8 players | Server load, replication, encounter scaling |
| 12 players (if server size allows) | Worst-case replication and physics |
| 150 ms latency | Scan, ability, encounter |
| 5% packet loss | Ability activation, save, teleport |
| Reconnect mid-encounter | State recovery, reward eligibility |
| Rejoin after world travel | Profile integrity |
| Server shutdown during save | No corruption, retry path |
| Save backend failure | Read-only state, clear message, no false ownership |

### Content states

Every test pass must cover these player states:

- Brand-new profile, no plants.
- One plant owned, zero abilities unlocked.
- One ability unlocked.
- Full set unlocked.
- Maximal archive (all launch plants).
- Loadout with three sets.
- In combat, in water, gliding (if present), in a streamed boundary.
- Dead, respawning, disconnecting.
- Returning after a content update with an older save schema.

---

## 3. Test suites

| Suite | Scope | When |
|---|---|---|
| Smoke | Join, move, scan one plant, open archive, leave | Every build |
| Progression | Scan → own → research → unlock → use → save → rejoin | Every build touching progression |
| Persistence | Save failure injection, migration fixture, concurrent session | Every schema change |
| Combat/encounter | Telegraph, damage, defeat, completion, reward, disconnect | Every encounter change |
| Streaming | Walk, sprint, traversal, respawn at boundary, teleport | Every region change |
| Performance | Eight required scenes, four quality levels, two devices | Every region acceptance |
| Security | Remote fuzzing, rate limits, ownership spoofing, teleport abuse | Every networked feature |
| Accessibility | Text scale, reduced motion, colour-independent cues, subtitles | Every UI/cinematic change |
| Soak | 60-minute session, memory growth, leak check | Weekly and before RC |
| Regression | The launch checklist, automated where possible | Before every release candidate |

### Security test cases (minimum)

1. Send a scan request for a plant that is not spawned or is 500 studs away.
2. Send a research request out of order.
3. Send an ability request for an unowned or locked ability.
4. Spam an ability remote 100 times in one second.
5. Send a malformed payload with the wrong type, nil, NaN or a huge table.
6. Equip a set the player does not own.
7. Claim an encounter reward twice.
8. Teleport with a forged destination or party payload.
9. Open two sessions on one profile and attempt conflicting writes.
10. Trigger a save failure and verify no ownership was granted.

Every case must fail closed and log a bounded warning.

---

## 4. Performance evidence

For each of the eight required scenes, record:

- Device and quality level.
- 95th-percentile frame time and FPS band.
- Draw calls, typical and peak.
- Client memory by category.
- Server script time.
- Network send/receive.
- Time to stream the region at sprint/traversal speed.
- Screenshot or capture.

**Acceptance:** the scene meets the working envelope in document 4, or the envelope was explicitly revised with evidence and owner sign-off. "It feels fine" is not evidence.

**Regression:** compare against the previous accepted capture for the same scene. A 10% frame-time regression requires a trade-off note.

---

## 5. Playtest scripts

### First 20 minutes

1. New player joins. Do not explain controls beyond the minimum.
2. Observe: do they move, look around, approach a plant, understand the scan prompt?
3. Time to first scan, time to first research completion, time to first ability use.
4. Ask: "What do you think you are supposed to do next?" Do not correct them.
5. Note every moment of confusion with a timestamp.

**Pass:** ≥ 70% scan without help; ≥ 50% unlock an ability within 20 minutes; no one asks "what is the point?".

### Discovery comprehension

Show the player a region for 30 seconds with no UI. Ask them to point to:

- The route they would take.
- The landmark they would navigate by.
- The thing that looks interactive.
- The place that looks dangerous.

**Pass:** ≥ 80% agree on route and landmark; the interactive object is not mistaken for scenery.

### Encounter readability

Run the encounter with four players and effects at maximum. Ask after:

- What telegraphed the attack?
- What told you the encounter was over?
- Which ability felt useful, and why?
- Could you see the hazard at low quality?

**Pass:** every player can name the telegraph and the completion state.

### Archive and research clarity

Ask a player with two owned plants and one locked ability to explain the difference between owning a plant, unlocking an ability and mastering it.

**Pass:** they can explain all three without reading a tooltip.

---

## 6. Bug severity and launch bar

| Severity | Definition | Response | Launch bar |
|---|---|---|---|
| P0 | Save corruption, lost progression, exploit, crash on join, unplayable region | Stop content work; fix immediately | Zero open |
| P1 | Progression blocker, encounter unwinnable, ability unusable, streaming hole on main route, severe mobile performance | Fix within sprint | Zero open |
| P2 | Visual defect, audio glitch, minor UI confusion, non-blocking perf issue | Batch into polish | ≤ 20 open, none on the critical path |
| P3 | Nice-to-have, polish, low-impact edge case | Backlog | Unlimited |

**Content freeze:** four weeks before launch, only P0/P1 fixes and approved polish. Final 72 hours: P0 only.

---

## 7. Release candidate checklist

### Content

- [ ] 12 regions complete, each with a budget sheet and screenshot set.
- [ ] 10 plants complete with art, archive render and research path.
- [ ] 30 abilities complete with role, counterplay note, VFX and low-quality fallback.
- [ ] 4 creatures complete with rig, animation, telegraph and encounter.
- [ ] All launch plants placed in at least two habitat anchors or a documented exception.
- [ ] The three previously art-less regions in the launch worlds — Windstep Prairie, Rainmirror Pools and The Still Canopy — have approved art. The other three are deferred to their release waves.
- [ ] No `TBD` in any launch ability's activation, target or role fields.

### Systems

- [ ] Scan, research, unlock, loadout, encounter and archive pass the full progression suite.
- [ ] Save migration fixture passes from the oldest supported schema.
- [ ] Duplicate scan, out-of-order research and double reward are rejected.
- [ ] Teleport loads authoritative progression.
- [ ] Rate limits and malformed payloads fail closed.
- [ ] Reconnect mid-encounter recovers a coherent state.

### Presentation

- [ ] No default materials, sky, lighting or flat terrain in any launch region.
- [ ] Every region passes the low-quality readability check.
- [ ] Discovery cinematic is skippable and respects reduced motion.
- [ ] Audio mix passes a four-player encounter.
- [ ] UI text scales to 150% without clipping.
- [ ] Colour-independent cues exist for scan, hazard, rarity and cooldown.

### Operations

- [ ] Telemetry events fire and are visible in the dashboard.
- [ ] Store page, icon, thumbnails and trailer use actual gameplay capture.
- [ ] Rollback procedure rehearsed on a copy of the place.
- [ ] Support macros and known-issues page ready.
- [ ] On-call rotation and escalation contacts defined.
- [ ] Launch build tagged and archived.

---

## 8. Launch runbook

### T-7 days

- Release candidate frozen.
- Final regression and security pass.
- Store assets approved.
- Live dashboard configured: join failure, save failure, crash rate, progression funnel, server FPS.
- Rollback copy verified.

### T-1 day

- Final smoke on production place.
- Confirm server size and region availability.
- Confirm support coverage for the first 72 hours.
- No code changes except P0.

### T-0 launch

- Publish the build.
- Watch: join success, crash-free sessions, save failures, first-scan completion, server frame time.
- One person communicates; one person investigates; one person decides rollback. Do not let the same person do all three.

### T+24 hours

- Review funnel: join → move → first scan → first research → first ability.
- Review crash and save-failure clusters.
- Hotfix only P0/P1.
- Publish a known-issues note if needed.

### T+72 hours

- First balance and bug patch.
- Review server performance at peak.
- Decide whether Wave 2 production starts.
- Post-launch review within one week.

### Rollback triggers

- Save corruption or mass progression loss.
- Crash rate above the agreed threshold.
- A progression blocker affecting a large share of new players.
- An exploit that grants ownership or rewards.
- Server instability that makes the game unplayable.

**Rollback is a place-version restore, not a data rollback.** Never restore player data to fix a code bug unless the data itself is corrupted and the owner explicitly approves.

---

## 9. Live operations

### Monitoring

| Signal | Alert threshold (PROPOSED) | Owner |
|---|---|---|
| Join failure rate | > 2% over 15 min | Live engineer |
| Save failure rate | > 0.5% over 15 min | Live engineer |
| Crash-free sessions | < 99% over 1 hour | Lead engineer |
| Server frame time | > 12 ms p95 over 15 min | Live engineer |
| Progression blocker reports | ≥ 3 in 1 hour | Producer |
| First-scan completion | Drop > 20% week over week | Designer |
| Ability-use error rate | > 1% of requests | Gameplay engineer |

### Cadence

| Cadence | Work |
|---|---|
| Daily | Dashboard review, bug triage, community signals |
| Weekly | Hotfix window, telemetry review, one playtest |
| Monthly | Balance patch, archive/UX improvements, performance review |
| Quarterly | World or system expansion review, roadmap update |
| Every content wave | Full regression, store asset refresh, launch checklist |

### Rotation fairness

If world rotation is approved later:

- Announce the schedule in advance.
- Preserve all discovery and research progress.
- Keep essential progression available through a return window or alternate route.
- Never require a player to be online at one exact hour.
- Test the archive after a world leaves the rotation.

Rotation is OPEN. Do not implement it for 1.0.

---

## 10. Analytics and privacy

- Collect only what changes a decision: funnel, performance bands, errors, encounter outcomes.
- Do not collect personal data, chat content or precise identifiers beyond what Roblox provides.
- Sample performance events; do not send one event per frame.
- Aggregate before sharing.
- Document every event and its fields in one schema file.
- Respect Roblox's platform policies and the experience's privacy settings.

**PROPOSED launch dashboard:** join success, first-scan completion, first-ability completion, D1/D7 retention, session length, crash-free rate, save failures, p95 server frame time, encounter completion rate, ability error rate.

---

## 11. Store and first impression

The store page is part of the product, not marketing decoration.

- **Icon:** one readable plant silhouette against the world palette; no text, no collage.
- **Thumbnails:** actual in-game captures of a hero vista, a discovery moment and a creature encounter. Do not use concept art that does not represent playable content.
- **Trailer:** 30–45 seconds: world reveal, plant scan, ability use, encounter, hidden region. Capture at launch quality on the target device.
- **Description:** the confirmed pitch, the three pillars, and an honest statement of what 1.0 contains. Do not promise ten worlds.
- **Screenshots:** at least one per launch world, one per major system, one mobile frame.

**Rule:** every store asset must be reproducible from the launch build. If it cannot be captured in-game, it does not go on the page.

---

## 12. Post-launch review

Within one week of launch, answer in writing:

1. What did the funnel actually do, and where did it leak?
2. Which region had the worst performance, and why?
3. Which ability had the highest error or lowest use rate?
4. Which research step caused the most support requests?
5. What did the schedule estimate get wrong by more than 20%?
6. What should Wave 2 change in the pipeline?
7. What should be cut from the live roadmap?

The answers go into the risk register, not into a celebratory retrospective that nobody reads.
