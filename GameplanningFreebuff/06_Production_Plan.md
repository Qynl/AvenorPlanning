# 06 — 18-Month Production Plan

**Status:** PROPOSED schedule, team and budget. Dates are targets derived from the scope math, not commitments.
**Launch scope assumption:** two worlds, Auralis and Myrrwood. This requires owner approval (decision D1).
**Planning date:** November 2026. Week 1 is the first week after the decision gate closes.

---

## 1. The scope math first

A schedule is only realistic if the content is counted. The estimates below are bottom-up planning bands, not quotes.

### Environment

| Work | Unit | Hours per unit | Launch (12 regions) | Full program (60 regions) |
|---|---|---:|---:|---:|
| Layout brief + greybox | Region | 60–90 | 720–1,080 | 3,600–5,400 |
| Art pass + kit + foliage | Region | 140–220 | 1,680–2,640 | 8,400–13,200 |
| Lighting/atmosphere/polish | Region | 24–40 | 288–480 | 1,440–2,400 |
| Gameplay anchors + encounter space | Region | 24–40 | 288–480 | 1,440–2,400 |
| **Environment subtotal** | — | **248–390** | **~2,976–4,680** | **~14,880–23,400** |

The build book's world totals (Auralis ~1,800 h, Myrrwood ~2,280 h) sit inside this band.

### Content

| Work | Unit | Hours per unit | Launch (10 plants / 30 abilities / 4 creatures) | Full program (50 / 162 / 10) |
|---|---|---:|---:|---:|
| Plant model, materials, archive render | Plant | 40–60 | 400–600 | 2,000–3,000 |
| Ability design finalisation | Ability | 8–12 | 240–360 | 1,296–1,944 |
| Ability implementation + VFX + audio | Ability | 25–35 | 750–1,050 | 4,050–5,670 |
| Creature model, rig, animation, encounter | Creature | 120–160 | 480–640 | 1,200–1,600 |
| **Content subtotal** | — | — | **~1,870–2,650** | **~8,546–12,214** |

### Systems, presentation and QA

| Work | Launch estimate | Full program estimate | Notes |
|---|---:|---:|---|
| Core services, save, security | 1,500–2,000 | 3,000–4,000 | Player data, discovery, research, world state |
| Ability runtime + encounter framework | 900–1,200 | 1,500–2,000 | Generic shell, then encounter expansion |
| Hub, travel, loadout, archive UI | 900–1,200 | 1,200–1,600 | Includes controller and mobile layouts |
| Audio production and mix | 500–700 | 1,800–2,600 | 2 worlds vs 10 worlds, all sets and creatures |
| Cinematics and onboarding | 250–400 | 700–1,000 | Discovery beat, first-unlock beat, world intros |
| QA, playtests, performance, certification | 1,000–1,400 | 5,000–7,000 | 18 months vs multi-year live program |
| Production/management overhead | 15% | 15% | Schedules, reviews, hiring, vendor management |
| **Non-environment subtotal** | **~5,050–6,900 before overhead** | **~13,200–18,200 before overhead** | — |

### Total

| Scope | Low | High |
|---|---:|---:|
| Launch (2 worlds), before 15% overhead | ~9,900 h | ~14,200 h |
| Launch (2 worlds), with overhead | **~11,400 h** | **~16,400 h** |
| Full 10-world program, before 15% overhead | ~36,600 h | ~53,800 h |
| Full 10-world program, with overhead | **~42,100 h** | **~61,900 h** |

Using 2,000 productive hours per person-year (40 hours × 50 weeks), the launch plan is **5.7–8.2 person-years** of work. Eight FTE over 78 weeks provides **12.0 person-years** of gross capacity. The difference is the buffer for ramp-up, reviews, rework, hiring and the inevitable underestimation of ability content.

**The full program is 21–31 person-years.** At eight FTE that is **2.6–3.9 years**; with a ten-person team and less overtime, it lands in the intended **three-to-four-year** band. Do not put all ten worlds in a launch plan.

### Sensitivity

| If this is worse than planned | Consequence |
|---|---|
| Ability implementation averages 50 h instead of 30 h | +600 h at launch, +3,240 h full program |
| Each region needs 350 h instead of 300 h | +600 h at launch, +3,000 h full program |
| Myrrwood canopy requires a second streaming redesign | +4–6 weeks |
| Water spike fails in Pelagora | Pelagora moves out of Wave 2; launch scope unchanged |
| One environment artist instead of two | Launch slips 4–6 months or drops to one world |

---

## 2. Team

**PROPOSED launch team: 8 FTE plus two part-time roles.**

| Role | FTE | Owns | Must not be split across |
|---|---:|---|---|
| Creative director / game designer | 1.0 | Vision, decisions, ability roles, encounter design, content sign-off | Engineering delivery |
| Lead engineer | 1.0 | Architecture, save, security, performance, code review | Content production |
| Gameplay engineer | 1.0 | Scanner, research, abilities, encounters, loadout | UI art |
| Systems/backend engineer | 1.0 | Persistence, teleport, world state, telemetry, tooling | Environment art |
| Environment artist A | 1.0 | Auralis kit and regions, shared kit library | UI |
| Environment artist B | 1.0 | Myrrwood kit and regions, foliage library | Character art |
| Technical artist / VFX | 1.0 | Materials, lighting, VFX, performance budgets, asset pipeline | Level layout |
| Character / plant artist | 1.0 | 10 plants, 4 creatures, rigs, archive renders | Environment kit |
| Producer | 0.5 | Schedule, risk, vendor management, milestone evidence | Creative decisions |
| QA / community | 0.5 | Test passes, playtest coordination, bug triage, store page | Engineering |

**Contractors, not headcount:** composer/sound designer, UI illustrator, additional environment artist for launch crunch, localization vendor if needed.

**Critical pair rules:**

- One environment artist must own the shared kit. Two artists inventing parallel kits is how a world doubles its asset count.
- One engineer must own the save schema. Shared ownership of persistence is how profiles corrupt.
- The creative director owns ability roles. Engineers must not fill `TBD` with a guess to unblock a build.

---

## 3. Phase overview

| Phase | Weeks | Sprints | Theme | Exit gate |
|---|---:|---:|---|---|
| 0 — Foundations | 1–4 | 2 | Decisions, tooling, test region | Theme proof + measured baseline |
| 1 — Vertical slice | 5–16 | 6 | Sunthread Fields + Whispering Hollows | Loop works end-to-end on mobile |
| 2 — Auralis | 17–38 | 11 | Full first world + production pipeline | Auralis content-complete |
| 3 — Myrrwood | 39–58 | 10 | Second world, verticality, launch content | Launch candidate content-complete |
| 4 — Hardening | 59–72 | 7 | Beta, performance, accessibility, security | Release candidate |
| 5 — Launch | 73–78 | 3 | Open beta, launch, live handover | Live build + operations runbook |

**Twenty percent schedule buffer is built into the phase boundaries, not added at the end.** If a phase overruns, cut polish or defer a creature — do not cut the performance gate or the save test.

---

## 4. Phase 0 — Foundations (weeks 1–4)

**Goal:** remove every ambiguity that would cause rework, and prove the visual baseline on a real device.

| Sprint | Work | Deliverable |
|---|---|---|
| S1 | Close decisions D1–D3; choose place topology; stand up repository/place skeleton; generate Luau configs from JSON; define save schema v1; agree code review and branch rules | Signed decision record; place opens; config validates |
| S2 | Build 400 × 400 stud test region: dense foliage, water edge, cave pocket, light cluster; apply Auralis theme; profile on mid-tier phone; write budget sheet; establish screenshot protocol | Theme proof, baseline numbers, accepted test region |

**Exit criteria:**

- Launch scope approved in writing.
- Place topology approved.
- Ability roles approved for the three vertical-slice plants.
- Data → Luau generation is deterministic and checked.
- Test region holds the provisional mobile envelope, or the envelope is corrected with evidence.
- Every art task now has a palette, a screenshot protocol and a budget sheet.

**Do not start Phase 1 with unresolved role assignments for the slice plants.** That is the most expensive kind of rework.

---

## 5. Phase 1 — Vertical slice (weeks 5–16)

**Goal:** prove the entire loop in one region and one hidden pocket, on a phone, with a save that survives rejoin.

**Content:** Sunthread Fields, The Whispering Hollows, Driftleaf, Sunspool, Meadowflare, Mossback, 9 abilities, one discovery cinematic, one encounter.

| Sprint | Work | Deliverable |
|---|---|---|
| S3 | Movement, camera, input abstraction; controller/touch parity for traversal; greybox Sunthread | Playable traversal in greybox |
| S4 | Scanner interaction, specimen anchors, discovery record; first-scan ownership; archive write | Scan → own → rejoin persists |
| S5 | Research milestones for one plant; save schema v1 + migration fixture; archive UI shell | Research → unlock one ability |
| S6 | Ability runtime shell; three sets / nine abilities; VFX and audio placeholders; cooldown validation | Nine abilities playable, server-authoritative |
| S7 | Mossback encounter; loadout service and UI; ability input layout for keyboard/controller/touch | Encounter + loadout loop |
| S8 | Discovery cinematic; onboarding pass; performance/security pass; external playtest (5–8 players) | Slice gate evidence pack |

**Exit criteria:**

- A new player can scan, research and unlock without a written guide; ≥ 70% of playtesters do it in 20 minutes.
- Save survives rejoin, respawn, world exit and a simulated save failure.
- Duplicate scan is idempotent; out-of-order research is rejected; cooldown is server-owned.
- 30 FPS at quality 4 on the mid-tier phone during the Mossback encounter with three sets active.
- Four players can complete the encounter; late joiner sees a coherent state.
- The Whispering Hollows is discoverable from environmental cues in playtest.
- No default materials, sky or lighting in the slice.

**Kill criteria:** if the loop does not hold 30 FPS on the target phone after two optimisation passes, stop content production and fix the rendering/streaming architecture. Adding worlds will not fix it.

---

## 6. Phase 2 — Auralis (weeks 17–38)

**Goal:** turn the slice into a complete world and a repeatable pipeline.

**Content:** six regions, five plants, two creatures, 15 abilities, world audio, hub, travel, full archive and loadout.

| Sprint | Work | Deliverable |
|---|---|---|
| S9 | Auralis kit v1; Sunthread art pass; shared material library | Kit and first art-passed region |
| S10 | Whispering Hollows art + wind audio; hidden-route polish | Two regions complete |
| S11 | Windstep Prairie greybox + art; streaming boundary measurement | Long-sightline region accepted |
| S12 | Glasswater Basin water spike + shorelines; swim rules if approved | Water system proven or cut from scope |
| S13 | Rainmirror Pools weather state + reflection reuse | Weather-driven region |
| S14 | Buried Meadow underground pocket; cave kit; surface transition | Six regions playable |
| S15 | Cloudreed + Rainbell full production; Thornrunner model (art gap) | Five plants, two creatures |
| S16 | Hub place, archive terminal, loadout presets, world travel | Full navigation loop |
| S17 | All 15 abilities tuned and VFX-complete; encounter definitions for Mossback and Thornrunner | Auralis combat loop |
| S18 | Content pipeline handoff: a plant set produced without engineering help; performance and accessibility pass | Pipeline proven |
| S19 | Auralis content lock; bug bar; external beta with 20–50 players | World 1 beta |

**Exit criteria:**

- All six regions accepted against the budget sheet.
- Five plants and two creatures complete, including Thornrunner art.
- 15 abilities playable and readable in four-player encounters.
- Hub → world → archive → loadout → world round trip works with authoritative saves.
- A second plant set can be produced by the content team without an engineer writing a one-off system.
- World 1 beta has no P0 progression blockers.

---

## 7. Phase 3 — Myrrwood (weeks 39–58)

**Goal:** produce the second launch world, prove verticality and finish the launch content set.

**Content:** six regions, five plants, two creatures, 15 abilities, 30 total launch abilities.

| Sprint | Work | Deliverable |
|---|---|---|
| S20 | Myrrwood kit v1; Fernfall Basin | Forest kit + entry region |
| S21 | The Underbough; layered route proof | Vertical map layer accepted |
| S22 | Rootbound Groves; hero trees and root collision | Hero landmark kit |
| S23 | Hush Canopy; canopy traversal + vertical streaming | Canopy region accepted |
| S24 | Hollowheart interior; compact landmark model | Unique interior region |
| S25 | The Still Canopy; silence audio and upper pocket | Six regions playable |
| S26 | Five Myrrwood plants + Canopy Glider + Rootmaw | World 2 content complete |
| S27 | 15 abilities tuned; forest combat readability; audio mix | Launch ability set complete |
| S28 | Performance pass on both worlds; mobile matrix; accessibility audit | Launch performance evidence |
| S29 | Content lock; closed beta 100+ players; bug bar | Launch candidate content-complete |

**Exit criteria:**

- 12 regions, 10 plants, 30 abilities, 4 creatures complete.
- Canopy and Underbough traversal never expose unstreamed geometry.
- Both worlds hold the mobile envelope during encounters.
- All 30 abilities have a role, a counterplay note and a low-quality fallback.
- The archive distinguishes owned plants, locked abilities and undiscovered species correctly.

---

## 8. Phase 4 — Hardening (weeks 59–72)

**Goal:** turn a content-complete build into a release candidate.

| Sprint | Work | Deliverable |
|---|---|---|
| S30 | Closed beta wave 2; telemetry review; funnel fixes | Retention and funnel baseline |
| S31 | Performance hardening: worst scenes, memory, join time, stream boundaries | Budget sheets accepted |
| S32 | Security/exploit audit: remotes, rate limits, save abuse, teleport abuse | Security checklist signed |
| S33 | Onboarding and first-session polish; accessibility settings complete | New-player test passes |
| S34 | Store page, thumbnails, trailer capture, icon, description | Store assets approved |
| S35 | Release candidate; regression suite; rollback rehearsal | RC1 |
| S36 | Launch readiness review; live ops runbook; support macros | Go/no-go |

**Exit criteria:**

- Crash-free sessions ≥ 99.5% in beta.
- No open P0 or P1 bugs.
- All 12 regions have a completed budget sheet and screenshot set.
- Remote validation and rate limits verified with a deliberate exploit pass.
- Store page and thumbnails represent the actual game, not concept art that does not exist in play.
- Rollback and hotfix paths tested.

---

## 9. Phase 5 — Launch (weeks 73–78)

| Sprint | Work | Deliverable |
|---|---|---|
| S37 | Open beta; live monitoring; hotfix cadence | Stable open beta |
| S38 | Final bug bar; launch build; announcement schedule | Launch build |
| S39 | Launch; 72-hour watch; first patch; post-launch review | Live game + handover |

**Launch week rules:**

- No content changes in the final 72 hours; only crash, exploit and progression-blocker fixes.
- One person owns the live dashboard, one owns the rollback decision, one owns community communication.
- Every hotfix is logged with cause, change, verification and rollback plan.
- Do not start Wave 2 production until launch stability is confirmed for two weeks.

---

## 10. Post-launch cadence

**PROPOSED, not confirmed:**

| Cadence | Content | Team |
|---|---|---|
| Weekly | Hotfixes, telemetry review, bug triage | Live engineer + producer |
| Monthly | Quality patch, balance pass, archive/UX improvements | Core team |
| Every 4 months | One new world (6 regions, 5 plants, ~16 abilities, 1 creature) | 4–5 person strike team |
| Every 6 months | System expansion (rotation, co-op features, mastery) | Depends on open decisions |

**World production estimate post-launch:** ~3,700–4,500 h per world, or 4–5 months with a 4–5 person strike team. That is why ten worlds is a multi-year program.

**Rotation caution:** world rotation, limited-time availability and FOMO mechanics are OPEN. Do not ship a rotation schedule before the fairness rules are designed and the archive persistence is proven.

---

## 11. Budget

**PROPOSED planning range. Assumptions, not quotes.**

| Line | Calculation | Low | High |
|---|---|---:|---:|
| Core team | 8 FTE × 18 months = 144 person-months; $6k–$10k fully loaded per month | $864k | $1.44M |
| Contractors | Audio, UI illustration, extra environment art | $100k | $250k |
| Tools/services | Asset store, audio licenses, analytics, QA devices | $20k | $60k |
| Contingency | 10% | $98k | $175k |
| **Total** | — | **~$1.08M** | **~$1.93M** |

**What this buys:** two complete worlds, ten plants, thirty abilities, four creatures, the full loop, hub, save, archive, loadout, accessibility baseline and a launch.

**What it does not buy:** ten worlds, PvP, trading, a live economy, a large content team, or a marketing campaign beyond Roblox store assets.

**Lean scenario:** four FTE for 18 months (~$430k–$720k) delivers the vertical slice and Auralis only. Launch with one world or extend the schedule to 30+ months. This is a legitimate fallback, not a failure.

---

## 12. Production rituals

| Ritual | Frequency | Output |
|---|---|---|
| Standup | Daily, 15 min | Blockers, not status essays |
| Playtest | Weekly, recorded | One page: what felt good, what confused players, what broke |
| Sprint review | Every 2 weeks | Demo on a real device, not a desktop |
| Milestone gate | End of each phase | Evidence pack against exit criteria |
| Scope review | Monthly | Cut list ranked by player value |
| Art review | Per region | Screenshot set + budget sheet |
| Security review | Per networked feature | Validation checklist signed |
| Post-mortem | After each phase | What the estimate got wrong |

**Bug bar during production:**

- P0: progression lost, save corrupt, exploit, crash on join. Stop content work.
- P1: encounter unwinnable, ability unusable, streaming hole on main route. Fix within the sprint.
- P2: visual defect, audio glitch, minor UI. Batch into polish sprints.
- P3: nice-to-have. Do not touch before launch.

---

## 13. Scope guardrails

1. **No new worlds, plants, creatures or abilities before launch.** The roster is already larger than the team can produce.
2. **No monetization implementation.** Economy is OPEN.
3. **No PvP.** Roster and rules are OPEN.
4. **No additional platforms or input modes** beyond PC, mobile and controller parity.
5. **No engine or framework migration** after Phase 1 unless the performance gate fails.
6. **No bespoke art for non-landmark props.** Fix the kit.
7. **No ability without an approved role.** The content pipeline rejects `TBD` at content lock.
8. **No region without a budget sheet.** The gate is not optional because the schedule is tight.
9. **No feature that cannot be tested on the mid-tier phone.** If it only works on a desktop, it is not ready.
10. **No silent scope cuts.** If a creature, region or plant moves out of launch, record it in the decision register and tell the owner.

---

## 14. The one-slide version

- **Weeks 1–4:** decide, tool up, prove the look on a phone.
- **Weeks 5–16:** vertical slice in Auralis; loop, save, three sets, one creature, 30 FPS.
- **Weeks 17–38:** finish Auralis; prove the content pipeline.
- **Weeks 39–58:** build Myrrwood; finish launch content.
- **Weeks 59–72:** harden, secure, test, package.
- **Weeks 73–78:** beta, launch, live handover.
- **After launch:** one world every four months with a strike team.

If the team is smaller, cut the number of worlds, not the quality of the first one.
