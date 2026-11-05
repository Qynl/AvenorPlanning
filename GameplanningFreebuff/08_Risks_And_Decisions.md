# 08 — Risks and Decisions

**Status:** PROPOSED register. Risks are real; mitigations are recommendations. Decisions require the owner.
**Review cadence:** monthly, and at every phase gate.

---

## 1. The five risks that can end the project

| # | Risk | Why it is existential | The move |
|---|---|---|---|
| R1 | The ten-world scope is treated as a launch requirement | The team spends three years building breadth and never proves the loop | Approve a two-world launch (D1). Treat worlds 3–10 as a post-launch program |
| R2 | 72 abilities have no confirmed gameplay role | Engineers build a runtime with nothing coherent to run; combat feels generic | Role pass before Phase 1 (D5), then per world before its abilities are implemented |
| R3 | No encounter roster or target model | The confirmed combat pillar cannot be tested, balanced or marketed | PvE-only launch direction with four creature encounters + environmental challenges (D6) |
| R4 | Mobile performance fails under real foliage, water and VFX | The mass-market audience cannot play it; the art direction collapses to flat and empty | Measure in Phase 0; kill criteria after Phase 1; water spike before Pelagora |
| R5 | Save loss or duplication | Players lose hours of discovery; trust never recovers | Server-authoritative schema, session lease, migration fixtures, failure injection from S5 |

If only one thing is protected, protect the save. A beautiful game that loses progress is dead.

---

## 2. Risk register

Likelihood and impact: **H** high, **M** medium, **L** low.

| ID | Risk | Category | L | I | Severity | Mitigation | Early trigger | Owner |
|---|---|---|---|---|---|---|---|---|
| R1 | Ten-world scope exceeds team capacity | Production | H | H | Critical | Two-world launch; waves post-launch; monthly scope review | Schedule slip > 15% in Phase 2 | Owner + producer |
| R2 | Ability roles and mechanics incomplete | Design | H | H | Critical | Role pass; content validation; no implementation of `TBD` | Slice needs roles that do not exist | Creative director |
| R3 | Encounter roster and health model undefined | Design | H | H | Critical | PvE-only launch decision; one encounter framework; four definitions | Combat pillar cannot be playtested | Creative director |
| R4 | Mobile performance below 30 FPS | Technical | M | H | High | Phase 0 baseline; quality tiers; foliage/VFX budgets; kill criteria | Test region misses envelope twice | Lead engineer |
| R5 | Save corruption or duplication | Technical | M | H | High | Versioned schema, session lease, idempotent writes, failure injection | Any save failure in playtest | Lead engineer |
| R6 | Streaming holes during fast traversal | Technical | M | H | High | Compact models, boundary tests, traversal speed caps, preload | Visible hole at sprint/glide | Lead engineer |
| R7 | Exploit grants ownership or rewards | Security | M | H | High | Server validation, rate limits, exploit pass, telemetry | Anomalous scan/ability rate | Gameplay engineer |
| R8 | Default Roblox presentation returns | Art | M | M | High | Theme applier, audit checklist, screenshot gate | Flat terrain or Plastic in review | Technical artist |
| R9 | Art gaps delay final pass | Art | H | M | High | Prompts exist; produce only after kit is stable; prioritize launch worlds | Region cannot be art-passed | Environment lead |
| R10 | Ability content cost underestimated | Production | H | M | High | Cap launch at 30 abilities; reuse handlers; measure first three | Average > 50 h per ability | Producer |
| R11 | Water subsystem fails or overruns | Technical | M | H | High | Spike before Pelagora; launch scope excludes it | Spike misses frame/readability | Lead engineer |
| R12 | Key-person dependency | Production | M | H | High | Pair on save, kit and ability runtime; document decisions | One person unavailable blocks a phase | Producer |
| R13 | Canopy/cave occlusion hides routes | Art | M | M | Medium | Navigation read before density; low-quality screenshots | Playtesters miss the route | Environment lead |
| R14 | Place split and teleport complexity | Technical | M | M | Medium | Prototype single place; split only after proof | Teleport/save bugs in hub test | Lead engineer |
| R15 | Rotation or FOMO pressure harms fairness | Design/Live | M | H | High | No rotation at 1.0; fairness rules before any schedule | A world leaves before archive is proven | Owner |
| R16 | Monetization added before the loop is proven | Business | M | H | High | Explicit non-goal; no economy code in 1.0 | Shop UI appears in a sprint | Owner |
| R17 | Store page overpromises | Marketing | M | M | Medium | Capture only from the launch build | Thumbnail uses unavailable content | Producer |
| R18 | Crunch and burnout | People | H | H | Critical | 20% buffer; no content freeze crunch; scope cuts over overtime | Two consecutive 50-hour weeks | Producer |
| R19 | Asset licensing or provenance issue | Legal | L | H | High | Record source IDs; keep originals; do not use unlicensed assets | Asset with unknown origin | Owner |
| R20 | Platform policy or API change | External | L | M | Medium | Use supported APIs; avoid exotic dependencies; monitor release notes | Deprecation notice | Lead engineer |

**Review rule:** a risk with severity High or Critical gets a named mitigation owner and a review date. A risk without an owner is a wish.

---

## 3. Risk narratives for the top five

### R1 — The ten-world trap

The repository contains ten worlds because the design wanted a universe, not because a launch needs ten. Each world is six regions, five plants, roughly sixteen abilities and a creature. At the build book's own effort bands, one world is 2,000–2,500 environment hours before content. Ten worlds is a multi-year program.

The failure mode is not running out of ideas. It is spending eighteen months on world four while the first world still has no encounter, no save migration and no mobile proof. The mitigation is a two-world launch and a content cadence that starts only after retention is measured.

### R2 — The ability gap

Every one of the 162 ability files still contains `TBD`. Sixty-six have no confirmed role; six record none at all. A role is not a flavour label. It determines whether the ability is a projectile, a zone, a movement tool, a defensive state or a world interaction, and therefore what the runtime, VFX, audio and counterplay must be.

The failure mode is an engineer inventing a role to make the build run, then a designer changing it three weeks later. The mitigation is a role pass per launch world, recorded in the ability files, before the runtime content is authored.

### R3 — Combat without a target

Attacking is a confirmed pillar. The encounter roster, health model, defeat rules and boss structure are all open. A creature sheet is not an encounter. Without a target model, the team can build a beautiful ability sandbox with nothing to test it against.

The mitigation is not to design a hundred enemies. It is to approve a small PvE launch direction, build one encounter framework, and ship four readable creature encounters plus environmental challenges. Then measure whether combat is fun before expanding the roster.

### R4 — The phone is the real platform

Roblox's audience is overwhelmingly mobile. A dense forest with dynamic lights, transparent particles and a reflective river can look stunning on a desktop and run at 18 FPS on a mid-tier phone. The repository's technical documents explicitly require measurement on representative devices, not developer hardware.

The mitigation is Phase 0: a 400 × 400 stud test region with dense foliage, water, a cave and a light cluster, themed and measured on a real phone before any world production. If it fails, the art direction and streaming architecture change while they are still cheap to change.

### R5 — The save is the game

A player's archive is the product. Losing a rare plant is not a bug report; it is a reason to leave. Duplication is equally damaging: it destroys progression integrity and invites exploitation.

The mitigation is architectural: server-owned writes, one profile key per player, session lease, idempotent scan and reward writes, schema versioning with migration fixtures, and deliberate failure injection in the vertical slice. Test the failure paths before adding the second world.

---

## 4. Decision register

Twelve decisions unblock the plan. Each has a recommendation, but the owner decides. "Needed by" is the week after the decision gate closes.

### D1 — Launch scope

**Question:** Does 1.0 ship one world, two worlds, or three?
**Why it blocks:** team size, schedule, store promises and the definition of content-complete all depend on it.
**Options:** A) Auralis only; B) Auralis + Myrrwood; C) Auralis + Myrrwood + Caldera Reach.
**Recommendation:** **B.** Two worlds prove two different technical extremes and fit the 18-month plan. One world is a fallback if the team is four people. Three worlds needs three more people or three more months.
**If deferred:** the schedule cannot be baselined and the team builds without a finish line.
**Owner:** project owner. **Needed by:** week 1.

### D2 — Place topology

**Question:** Is the prototype one place, and is 1.0 a hub plus separate world places?
**Why it blocks:** teleport, persistence and world-state architecture differ.
**Options:** A) Single place for everything; B) single-place prototype, hub + world places for 1.0; C) hub + world places from day one.
**Recommendation:** **B.** Build the slice in one place. Commit to the split at the Phase 1 gate only if the streaming and memory evidence supports it. The canonical architecture documents recommend exactly this sequencing.
**If deferred:** the team either over-engineers teleports too early or hard-codes a single-place assumption into services.
**Owner:** lead engineer + owner. **Needed by:** week 1; confirm split at week 16.

### D3 — Implementation toolchain

**Question:** Does code live in this repository with Rojo, or in a Studio-only place file?
**Why it blocks:** review, branching, CI and data generation all depend on it.
**Options:** A) Rojo + Git; B) Studio-only with version history; C) hybrid (code in Git, place in Studio).
**Recommendation:** **A** if engineering capacity exists; otherwise **C**. The Explorer tree must match the canonical structure either way.
**If deferred:** two sources of truth and unreviewable changes.
**Owner:** lead engineer. **Needed by:** week 1.

### D4 — Loadout size and input

**Question:** How many plant sets can be equipped, how many abilities are on direct input, and do cooldowns persist when switching?
**Why it blocks:** UI, validation, balance and controller/mobile layout.
**Options:** A) 2 sets, ability wheel, cooldowns persist; B) 3 sets, direct slots; C) 1 set, swap only at stations.
**Recommendation:** **A** for the slice, then test B. Cooldowns must persist across switches; instant refresh is an exploit. Keep the number of equipped sets small enough that a phone screen is not a spreadsheet.
**If deferred:** the loadout UI cannot be built and the ability runtime cannot validate swaps.
**Owner:** creative director + gameplay engineer. **Needed by:** week 14 (S7).

### D5 — Ability roles

**Question:** What is the confirmed role, activation, target rule and counterplay for each launch ability?
**Why it blocks:** content cannot be implemented or balanced from names and concepts.
**Options:** A) role pass only, tuning later; B) full mechanics for all 162 now; C) full mechanics per world before production.
**Recommendation:** **C**, starting with the three slice plants in week 1 and the remaining launch sets by week 20. Record the role and mechanic in the canonical ability file, not in a spreadsheet.
**If deferred:** engineers invent mechanics, designers rewrite them, and the schedule absorbs the rework.
**Owner:** creative director. **Needed by:** week 1 for slice; week 20 for all launch sets.

### D6 — Encounter direction

**Question:** PvE only at launch, or PvP too? Is there a boss at launch? What is the target health model?
**Why it blocks:** the combat pillar, creature integration and encounter framework.
**Options:** A) PvE-only launch, four creature encounters + environmental challenges, no boss; B) PvE with one boss; C) PvE + PvP.
**Recommendation:** **A.** Prove readable PvE combat before adding bosses or PvP. A single boss is a Phase 4 stretch goal only if the framework is stable.
**If deferred:** no encounter can be built, and the confirmed combat pillar remains theoretical.
**Owner:** owner + creative director. **Needed by:** week 14 (S7).

### D7 — Persistence

**Question:** Is 1.0 built on Roblox DataStore with a session lease, or an external persistence service?
**Why it blocks:** save schema, failure handling, cross-place travel and operating cost.
**Options:** A) DataStore + session lease; B) external database/service; C) hybrid cache.
**Recommendation:** **A** for 1.0. It is sufficient for a two-world experience and avoids a new dependency before the loop is proven. Revisit only if cross-experience profiles or scale demand it.
**If deferred:** every progression feature is built against an unknown contract.
**Owner:** lead engineer. **Needed by:** week 10 (S5).

### D8 — Research pacing

**Question:** How many milestones per plant, what conditions, and how quickly does the first ability unlock?
**Why it blocks:** content authoring, UI, retention and the promise that research is not a chore.
**Options:** A) one milestone per ability, plant-specific conditions; B) a shared checklist per plant; C) a currency/XP track.
**Recommendation:** **A.** One milestone per ability, ordered, with conditions that make sense for that species. The slice target is first unlock within 20 minutes. Avoid a universal checklist or currency; both contradict the confirmed design.
**If deferred:** research cannot be authored and the loop has no second beat.
**Owner:** creative director. **Needed by:** week 10 (S5).

### D9 — Server and party size

**Question:** How many players per server, and what is the maximum co-op party?
**Why it blocks:** encounter scaling, replication budget, hub design and teleport routing.
**Options:** A) 12 players, party up to 4; B) 8 players, party up to 4; C) 20+ players, party up to 8.
**Recommendation:** **A** for launch, with encounter scaling tested at 1, 2 and 4 players. Roblox social play benefits from a populated server, but ability VFX and physics set a practical ceiling.
**If deferred:** performance tests have no target and encounter tuning is guesswork.
**Owner:** lead engineer + designer. **Needed by:** week 14 (S7).

### D10 — Art production strategy

**Question:** How are the 50 plants, 6 missing regions, 9 creature sheets and all environment meshes produced?
**Why it blocks:** schedule and budget; the concept library is reference, not production art.
**Options:** A) in-house artist + generated concept references; B) outsource environment kits; C) buy asset packs and restyle.
**Recommendation:** **A** for plants, creatures and hero landmarks; **B** for modular kits if the two environment artists are the bottleneck. Generated images are concept reference only and must not be used as textures or meshes. Record source and licence for every external asset.
**If deferred:** art production starts without a capacity plan and becomes the schedule's largest unknown.
**Owner:** owner + art lead. **Needed by:** week 2.

### D11 — Navigation UI

**Question:** Is there a minimap, compass, objective marker or none of the above at launch?
**Why it blocks:** exploration design and UI scope; the repository marks map UI and navigation assists OPEN.
**Options:** A) no minimap, diegetic landmarks and a compass; B) minimap with discovered regions; C) objective markers.
**Recommendation:** **A** for 1.0. The game's thesis is reading the world. A minimap can be added later if playtests show navigation failure, but it should not be the first answer.
**If deferred:** level design cannot commit to landmark readability and the HUD scope floats.
**Owner:** creative director. **Needed by:** week 8 (S3).

### D12 — Monetization and economy

**Question:** Does 1.0 have any monetization, currency or paid content?
**Why it blocks:** UI, save schema, live ops and player trust.
**Options:** A) none at launch; B) cosmetic-only; C) full economy.
**Recommendation:** **A.** The repository lists economy and long-term collection as OPEN. Prove retention and the loop first. Adding a shop before the game is fun is the fastest way to make the store page the product.
**If deferred:** no blocker for 1.0, but the owner should confirm "none" explicitly so it is not added silently.
**Owner:** owner. **Needed by:** week 60, before launch candidate.

---

## 5. Deferred beyond 1.0

These are deliberately not decisions for launch. Do not implement them.

- World rotation schedule and active-world count.
- PvP, trading, guilds, social hub beyond the preparation area.
- Plant cultivation, breeding or player-grown specimens.
- Economy, currency, shop, battle pass, paid content.
- Cross-experience profiles or a shared FLORA universe service.
- User-generated content or creator tools.
- Console certification beyond controller parity.
- Localization beyond the launch language.

Each one needs its own design pass, fairness review and technical estimate. None belongs in the vertical slice.

---

## 6. Decision log template

When a decision is made, record it in `00_Overview/Decisions.md` and copy this row into the table below.

| ID | Decision | Chosen option | Decided by | Date | Evidence / link |
|---|---|---|---|---|---|
| D1 | Launch scope | — | — | — | — |
| D2 | Place topology | — | — | — | — |
| D3 | Toolchain | — | — | — | — |
| D4 | Loadout | — | — | — | — |
| D5 | Ability roles | — | — | — | — |
| D6 | Encounter direction | — | — | — | — |
| D7 | Persistence | — | — | — | — |
| D8 | Research pacing | — | — | — | — |
| D9 | Server/party size | — | — | — | — |
| D10 | Art production | — | — | — | — |
| D11 | Navigation UI | — | — | — | — |
| D12 | Monetization | — | — | — | — |

**Rule:** a decision that is not written down is not a decision. A verbal "yes" in a meeting is a proposal with better lighting.
