# 02 — Content Readiness Audit

**Status:** audit of the repository as it exists. All counts are generated from `07_Technical/Data/` and the concept-art library. Nothing here is aspirational.

**Regenerate the evidence:**

```bash
node 07_Technical/Data/generate.mjs
```

Then compare `07_Technical/Data/index.json` with the tables below.

---

## 1. The honest headline

The design is broad and unusually well structured. The game does not exist yet.

| Layer | Exists | Missing | Readiness |
|---|---|---|---|
| Game identity and pillars | Confirmed title, platform, camera, three pillars, rarity ladder | Launch scope, audience targets | **AMBER** — enough to start |
| Worlds | 10 specifications, 60 named regions with descriptions | Map layouts, dimensions, landmarks, routes, encounter spaces, streaming budgets | **AMBER** — prose, not places |
| Plants | 50 species with habitat, rarity, discovery clue and ordered ability set | All 50 art assets, research milestone definitions, numeric tuning | **AMBER** — design shells |
| Abilities | 162 ability specifications, 50 sets | Every file still has TBD fields; 66 have no confirmed role and 6 record none | **RED** — not implementable as written |
| Creatures | 10 identities, visual cues, signature abilities | Encounter roles, health/damage model, AI behaviours, boss structure | **AMBER** — art reference, not gameplay |
| Concept art | 78 images; 54/60 regions have a hero view | 6 regions with no art, no plant art, no maps, almost no alternate views | **AMBER** — enough for palette, not for asset production |
| Systems rules | Core loop, scanning, research, ability ownership, archive and ecology rules | Encounter roster, loadout slots, PvP, economy, co-op, rotation | **AMBER** — spine defined |
| Technical architecture | Proposed place layout, authority model, streaming, data schema | No project, no code, no asset IDs, no persistence implementation | **RED** — all ahead |
| Design data export | 7 JSON files, 78 assets, coverage gaps | Hand-authored visual themes are PROPOSED and need Studio verification | **GREEN** — usable now |
| Visual baseline | Materials/lighting spec + 10 per-world theme records | Studio verification and screenshots | **GREEN** — ready to apply |
| Maps and greyboxes | Nothing | 60 region layouts, 10 world maps | **RED** — the largest art blocker |

**What is genuinely buildable today:** the technical spine, the data loader, the scanner/research/save loop, greyboxes for any named region, and one complete plant set once its ability roles are decided.

**What is not buildable today:** a complete encounter system, a balanced ability roster, any final environment art, and the full 10-world game.

---

## 2. World and region inventory

| World | ID | Regions | Regions with art | Images | Plants | Abilities | Role gaps | Creature(s) |
|---|---|---:|---:|---:|---:|---:|---:|---|
| Auralis | WORLD_001 | 6 | 4 | 6 | 5 | 15 | 9 | Mossback, Thornrunner |
| Myrrwood | WORLD_002 | 6 | 5 | 7 | 5 | 15 | 6 | Canopy Glider, Rootmaw |
| Caldera Reach | WORLD_003 | 6 | 6 | 6 | 5 | 16 | 7 | Emberhorn |
| Pelagora | WORLD_004 | 6 | 6 | 8 | 5 | 15 | 6 | Tidewhisper |
| Veyr Peaks | WORLD_005 | 6 | 6 | 9 | 5 | 17 | 7 | Frostmane |
| Nacre Hollow | WORLD_006 | 6 | 5 | 5 | 5 | 16 | 7 | Mirecrawler |
| Sereglass | WORLD_007 | 6 | 5 | 7 | 5 | 16 | 6 | Dune Strider |
| Umbra Deep | WORLD_008 | 6 | 6 | 8 | 5 | 16 | 6 | — |
| Zephyr Crown | WORLD_009 | 6 | 5 | 6 | 5 | 17 | 10 | — |
| The First Garden | WORLD_010 | 6 | 6 | 7 | 5 | 19 | 8 | Origin Warden |
| **Total** | — | **60** | **54** | **78** | **50** | **162** | **72** | **10** |

**Notes:**

- 30 regions are major biomes and 30 are hidden sub-biomes.
- "Role gaps" counts abilities whose `role` is `TBD` or blank. The total is 72: 66 `TBD` plus 6 blank.
- Images include world-level originals and creature sheets, so a world's image count can exceed its region count.
- Umbra Deep and Zephyr Crown have no native creature in the initial ten. That is a content gap, not a licence to invent one.
- The First Garden has 19 abilities because four of its five plants are Origin rarity with four-ability sets.

**Six regions have no art at all:** Auralis `Windstep Prairie` and `Rainmirror Pools`; Myrrwood `The Still Canopy`; Nacre Hollow `Pearlreed Flats`; Sereglass `The Glasswind Vault`; Zephyr Crown `The Updraft Wells`. Prompts exist in `05_Presentation/Concept_Art/PROMPT_PACK.md`.

---

## 3. Plant and ability readiness

### Rarity distribution

| Rarity | Plants | Typical set size | Actual sets in repository |
|---|---:|---:|---|
| Natural | 4 | 2 | 3 abilities each |
| Unusual | 12 | 2–3 | 3 |
| Distinct | 7 | 3 | 3 |
| Ancient | 10 | 3 | 3 |
| Forgotten | 7 | 3–4 | 3 or 4 |
| Relic | 6 | 4 | 4 |
| Origin | 4 | 4+ | 4 |
| **Total** | **50** | — | **38 sets of 3, 12 sets of 4** |

The repository deviates from the rarity guidance at the low end: Natural plants have three abilities, where `00_Overview/Rarity_Standard.md` suggests two. This is not automatically a contradiction — the standard says set size is guidance, not a quota — but it is a balance question the owner should settle before implementation.

### Ability completeness

| Measure | Value |
|---|---|
| Ability files | 162 |
| Files containing at least one `TBD` | 162 |
| Total unresolved fields across all files | 1,545 |
| Average unresolved fields per ability | 9.5 (range 5–15) |
| Abilities with `role = TBD` | 66 |
| Abilities with no role recorded | 6 |
| Abilities with a confirmed role | 90 |

The 90 confirmed roles are concentrated in sets where every ability shares one role — for example all three Coralweave abilities are `Traversal`, all four Heart of Verdance abilities are `World shaping`. That is coherent for set identity but thin for moment-to-moment combat: a set with three traversal abilities has no answer to a threat. Role assignment is the single biggest design blocker.

**Do not implement the ability runtime against names and concepts alone.** The runtime can be built as a generic shell; the content cannot be tuned until each ability has a role, activation, target rule, cooldown envelope and counterplay.

### Plant content

Each plant page does contain: identity, rarity, home world, habitat, discovery clue, ability-set name, ordered ability list, ecology and research framing. What is missing:

- Art for all 50. The folders exist and are empty.
- Numeric research milestones and pacing.
- Habitat anchor placement in a real map.
- Spawn population rules per region.
- Balance envelopes per rarity.

---

## 4. Art coverage in detail

| Category | Images | What it means |
|---|---:|---|
| Region hero views | 54 | One image per region for 54 of 60 regions |
| Region alternate views | 8 | Only a handful of regions have more than one angle |
| Region landmarks | 2 | Almost no dedicated landmark reference |
| Region flora/fauna | 1 | Almost no habitat detail reference |
| World panoramas / moodboards / ecosystem | 4 | Auralis originals and world-level sheets |
| Creature sheets | 9 | One per creature except Thornrunner |
| Plant sheets | 0 | None |
| Maps and diagrams | 0 | None |
| UI, characters, props, cinematics, hub, events | 0 | Folders exist, no images |

**Consequence for production:** the existing art is a **palette and silhouette reference**, not an asset source. It cannot be tiled, projected or used as terrain texture. Every environment mesh, plant model, creature rig, VFX texture and UI icon still has to be authored or generated.

The six missing region images are not a blocker for greyboxing — the written region description is enough to block out terrain. They are a blocker for the final art pass, because there is no approved colour and silhouette target for that region.

---

## 5. Creature readiness

| Creature | ID | World | Art | Gameplay role | Encounter defined |
|---|---|---|---|---|---|
| Mossback | CRE-001 | Auralis | Yes | Peaceful large quadruped | No |
| Thornrunner | CRE-002 | Auralis | No | Fast agile quadruped | No |
| Canopy Glider | CRE-003 | Myrrwood | Yes | Aerial gliding | No |
| Rootmaw | CRE-004 | Myrrwood | Yes | Heavy powerful quadruped | No |
| Emberhorn | CRE-005 | Caldera Reach | Yes | Sturdy volcanic quadruped | No |
| Tidewhisper | CRE-006 | Pelagora | Yes | Graceful aquatic | No |
| Frostmane | CRE-007 | Veyr Peaks | Yes | Large mountain quadruped | No |
| Mirecrawler | CRE-008 | Nacre Hollow | Yes | Amphibious marsh | No |
| Dune Strider | CRE-009 | Sereglass | Yes | Tall desert quadruped | No |
| Origin Warden | CRE-010 | The First Garden | Yes | Rare ancient primordial | No |

Every creature has a visual identity, identification cues and a signature ability name. None has a health model, attack pattern, encounter arena, reward, or confirmed role in the combat roster. `00_Overview/Decisions.md` lists the PvE roster and boss structure as OPEN.

**Production reading:** the creatures are cast, not designed. A creature can be modelled and animated from its sheet, but it cannot be encountered until the encounter framework and roster are approved.

---

## 6. Systems readiness

| System | Rule state | Implementation blockers |
|---|---|---|
| Exploration | Requirements defined; map UI, fast travel, dimensions OPEN | No map, no navigation design, no traversal tuning |
| Scanning and research | Clear acquisition and research rules; milestone counts OPEN | No research content per plant, no UI, no scan range |
| Ability ownership | Complete-set ownership and ordered unlocks CONFIRMED | 72 role gaps, numeric tuning absent |
| Abilities runtime | Flow and validation rules proposed | No project, no state machine implementation |
| Combat and encounters | Attacking CONFIRMED; roster, health, defeat, PvP OPEN | Cannot build encounters without a target model |
| Loadouts | Structure proposed; slot count and input OPEN | Cannot build UI or validation without slot count |
| Progression | Layers defined; economy and XP OPEN | Save schema can be designed, not tuned |
| Archive | Record structure and states defined | UI and persistence implementation |
| Ecology | Habitat-anchor model proposed; density and respawn OPEN | No maps, no population data |
| Weather | Compact authoritative state proposed; patterns OPEN | No per-world weather definitions |
| Co-op | Authority rules defined; party size OPEN | No party system scope |
| World rotation | Fairness rules defined; cadence OPEN | 1.0 can ship without rotation |

---

## 7. Data and documentation quality

**GREEN.** This is the strongest part of the repository.

- `worlds.json` — 10 worlds with identity, palette, biomes, native plants and open work.
- `regions.json` — 60 regions with descriptions and art coverage.
- `plants.json` — 50 species with rarity, habitat, discovery clue and ordered abilities.
- `abilities.json` — 162 abilities with stable IDs, set position, role and unresolved-field count.
- `creatures.json` — 10 creatures with visual identity and cues.
- `assets.json` — 78 images with path, dimensions, bytes and source IDs.
- `visual_themes.json` — 10 hand-authored lighting/atmosphere/terrain records.
- `index.json` — coverage gaps.

The JSON is derived and disposable. Markdown remains the source of truth. Do not hand-edit the JSON.

---

## 8. Readiness scoreboard by world

Scores are for **production readiness**, not concept quality.

| World | Design | Art | Technical risk | Build order | Verdict |
|---|---|---|---|---|---|
| Auralis | High | Medium (4/6) | Low — open terrain | 1 | Build first; vertical slice lives here |
| Myrrwood | High | Medium (5/6) | Medium — canopy occlusion, streaming | 2 | Build second; proves verticality |
| Caldera Reach | Medium | High (6/6) | Medium — emissive/particles | 3 | Strong first post-launch candidate |
| Pelagora | Medium | High (6/6) | High — underwater, transparency | 4 (tech spike early) | Do a water spike before committing |
| Veyr Peaks | Medium | High (6/6) | Medium — weather, long sightlines | 5 | Needs weather system first |
| Nacre Hollow | Medium | Medium (5/6) | Medium — fog, reflections | 6 | Fog and water reuse from Pelagora |
| Sereglass | Medium | Medium (5/6) | Low–Medium — dunes, heat shimmer | 7 | Cheapest desert pipeline |
| Umbra Deep | Medium | High (6/6) | High — caves, lights, occlusion | 8 | Requires lighting budget discipline |
| Zephyr Crown | Medium | Medium (5/6) | High — aerial traversal, streaming | 9 | Depends on traversal abilities |
| The First Garden | Low–Medium | High (6/6) | High — Origin sets, endgame | 10 | Needs the most ability design |

**Why Auralis first:** it is the confirmed first expedition world, it has the most open terrain (easiest streaming and mobile performance), and four of its five plants are already role-assigned. It is the cheapest place to prove the loop.

---

## 9. What must be true before each production stage

| Stage | Entry criteria | Evidence |
|---|---|---|
| Vertical slice starts | Launch scope approved; ability roles for three Auralis sets approved; scan/research/save rules signed off | Decision register entries D1, D2, D5, D7 |
| Vertical slice ends | 30 FPS on mid-tier phone; loop works end-to-end; 3 sets playable; save survives rejoin | Documented Studio playtest and performance capture |
| World 1 production starts | Region greybox pipeline proven; kit v1 approved; streaming boundaries measured | One region accepted against budget |
| World 2 production starts | World 1 feature-complete; content pipeline produces a plant set without engineering help | Two consecutive sets shipped through the pipeline |
| Launch candidate | 12 regions, 10 plants, 30 abilities, 4 creatures; crash-free ≥ 99.5%; all decisions closed or explicitly deferred | Launch checklist in document 7 |

---

## 10. The uncomfortable summary

The repository can answer "what is this plant called and where does it live?" for 50 species. It cannot yet answer "what does this ability do to a target, how often, at what range, and what beats it?" for 72 of them. It can describe 60 regions in one sentence each, but not one region's playable footprint. It has 78 beautiful reference images, but not a single production mesh, texture or rig.

That is not a criticism. It is the correct state for a design repository that refuses to invent. The production plan in this folder is built around closing those gaps in dependency order rather than pretending they are already closed.
