# 01 — Game Definition and Launch Scope

**Status:** mixed. The game identity is CONFIRMED. The launch scope, session shape and success metrics are PROPOSED and require owner approval.

---

## 1. The game in one paragraph

**FLORA: BEYOND THE ORIGINS** is a third-person Roblox exploration adventure across enormous, living botanical worlds. A player reads a landscape, finds a plant growing in its natural habitat, scans it to own its complete ability set, then researches it to unlock those abilities one by one. Exploration creates discoveries; research turns discoveries into powers; encounters give those powers a reason to be mastered. The visual direction is stylized realism: believable ecosystems with expressive, slightly exaggerated botanical silhouettes, strong natural light and readable colour.

This is not a collectible gallery with a map attached. The map is the game. The plants are the progression. The abilities are how the player moves through, changes and survives the world.

---

## 2. Player fantasy

**CONFIRMED by the source documents:**

- You are a field explorer in a world far larger than a tutorial.
- You notice a species because of how it behaves in its habitat, not because of a floating marker.
- Scanning a plant is a permanent acquisition, not a consumable loot drop.
- Research makes you understand the organism and earn its powers in sequence.
- A plant set gives you a coherent identity — movement, control, support, defence or world-shaping — not a single button.
- Rare plants are more spectacular and complex, but Natural plants remain useful.
- Hidden regions reward observation, not pixel hunting.

**PROPOSED interpretation for production:** the emotional target is *the first crest of a ridge*. The player should repeatedly experience a landscape opening up, a species behaving in a way they did not expect, and a power that changes how they read the next landscape. Every region should contain at least one moment worth stopping for.

---

## 3. Three pillars and what they demand

| Pillar | Confirmed intent | Production consequence |
|---|---|---|
| **Exploration** | Enormous worlds, hidden biomes, environmental mysteries, meaningful traversal. | Regions need long sightlines, readable landmarks, at least two routes and one discoverable hidden route. Streaming and navigation are first-class systems, not polish. |
| **Attacking and encounters** | Combat is a core pillar, not optional. Plant sets provide the combat identity. | An encounter framework and a target roster are required before content lock. Telegraphs, counterplay and readable state changes are acceptance criteria. |
| **Plant discovery and powers** | Every plant grants a complete multi-ability set; research unlocks it. | The scanner, research milestones, ability unlocks and save schema are the spine. Ability mechanics must be defined before they can be implemented. |

**Design test for every feature:** does it make the player leave the path, understand a plant, or use a power in a new way? If not, cut it from 1.0.

---

## 4. The loop, system by system

| Step | Player action | System | Authority | Content required |
|---|---|---|---|---|
| 1 | Prepare a loadout | Loadout service | Server validates ownership and slots | Equipped set UI, loadout presets |
| 2 | Enter a world | Teleport / world state | Server routes, loads profile | Hub, world place, spawn |
| 3 | Choose a lead | Exploration | Client presentation, server state | Landmark, route, habitat anchor |
| 4 | Find a plant | Plant ecology / spawn | Server-owned habitat records | Species habitat definition |
| 5 | Scan it | Scanner + discovery | Server validates distance, species, eligibility | Scan interaction, archive entry |
| 6 | Own the complete set | Discovery / archive | Server writes ownership | Ability set definition |
| 7 | Research the plant | Research | Server validates milestone transition | Plant-specific observations |
| 8 | Unlock abilities | Research / progression | Server writes unlock | Ordered ability list |
| 9 | Use the abilities | Ability runtime | Server validates and executes | Ability definition and VFX |
| 10 | Take on an encounter | Encounter state machine | Server owns state and rewards | Encounter definition, target |
| 11 | Follow a new clue deeper | Exploration / world state | Server owns unlocks and anchors | Hidden region, route gate |

The loop is intentionally a loop, not a ladder. A new ability should open a route that leads to another plant, which changes how the player handles the next encounter.

**CONFIRMED rule:** the first successful scan grants the plant and ownership of its complete set. Research unlocks the individual abilities afterwards, in the order defined on the plant page. Research never re-acquires the plant.

---

## 5. What a session actually looks like

**PROPOSED session shapes — validate in the vertical slice, then confirm or change:**

| Session | Length | Content | Player outcome |
|---|---|---|---|
| Quick field run | 15–25 min | One region, one plant lead, one small encounter | One scan, one research milestone, one new route |
| Standard expedition | 35–50 min | Two regions, a hidden route, one full research step | One ability unlock, archive progress, a reason to return |
| Deep expedition | 75–120 min | A world's major loop plus a hidden sub-biome | A full set unlock or a rare discovery |

**OPEN:** exact session length, expedition structure and whether worlds are entered as free exploration or directed expeditions. The source documents mark these TBD. Do not build a mission structure until the owner decides.

---

## 6. Platform, audience and control surface

**CONFIRMED:** Roblox, third-person, cinematic framing for discoveries, stylized realism.

**PROPOSED device matrix for 1.0:**

| Tier | Example | Target | Why it matters |
|---|---|---|---|
| Desktop | Mid-range Windows laptop, integrated GPU | 60 FPS at quality 6–8 | Primary development and capture platform |
| Console-style controller | Roblox-supported gamepad | Full parity, no keyboard-only action | Menu, scan, ability and camera navigation |
| Mid-range phone | iPhone 11 / equivalent Android | 30 FPS at quality 4 | The actual mass market for a Roblox adventure |
| Low-end phone | 4–6 GB RAM Android | 30 FPS at quality 1–2, reduced foliage and VFX | Determines the real minimum spec |

**PROPOSED audience:** players who enjoy exploration, discovery and readable combat in Roblox's adventure audience; not a competitive PvP audience. The game must be comprehensible to a first-time Roblox player within five minutes without a wall of tutorial text.

**OPEN:** age rating, localization, console certification and accessibility requirements beyond the basics listed in document 5.

---

## 7. Launch scope

The repository plans ten enormous worlds. It does not state that all ten ship at launch, and `00_Overview/Overview` lists launch scope as TBD. The following is a **PROPOSED** scope, sized against the team and schedule in document 6.

### Recommendation: launch with two complete worlds

| Launch 1.0 | Auralis (WORLD_001) | Myrrwood (WORLD_002) | Total |
|---|---|---|---|
| Regions | 6 (3 major, 3 hidden) | 6 (3 major, 3 hidden) | 12 |
| Plants | 5 | 5 | 10 |
| Ability sets | 5 | 5 | 10 |
| Abilities | 15 | 15 | 30 |
| Creatures | 2 (Mossback, Thornrunner) | 2 (Canopy Glider, Rootmaw) | 4 |
| Art coverage now | 6 images, 4/6 regions | 7 images, 5/6 regions | 13 images |

**Why these two:** Auralis is the confirmed first expedition world and teaches the loop in open, readable terrain. Myrrwood immediately proves the opposite extreme — canopy verticality, dense occlusion, root interiors and a much darker palette — so the pipeline is validated on two genuinely different worlds rather than two versions of the same grassland.

**Why not three at launch:** adding Caldera Reach adds 6 regions, 5 plants, 16 abilities and one creature. By the scope math in document 6 that is roughly 12–16 additional weeks for environment art alone, plus ability design and VFX. It is a credible **first post-launch world**, not a free addition.

**PROPOSED 1.0 feature set:**

- Hub place with spawn, archive terminal, loadout preparation and world selection.
- Auralis and Myrrwood as separate world places with streaming enabled.
- Complete discovery → research → unlock → mastery loop for 10 plants.
- One encounter framework with at least four encounter definitions, one per creature plus one environmental challenge.
- Server-authoritative save with versioned schema and migration.
- Discovery Archive with filters, plant detail, research state and ability unlock state.
- Loadout presets with controller and mobile layouts.
- Cinematic discovery moment for first scan and first ability unlock.
- Accessibility baseline: text scaling, colour-independent cues, motion reduction, subtitles for cinematics.
- Telemetry for the funnel in document 7.

**Explicit non-goals for 1.0:**

- All ten worlds.
- PvP, trading, guilds or a social hub beyond the preparation area.
- Player economy, currencies, shops, battle passes or any monetization. These are OPEN.
- Plant cultivation, breeding or player-grown specimens. OPEN.
- World rotation with a live schedule. Rotation rules are OPEN; 1.0 can ship with both worlds permanently available.
- User-generated content, modding or creator tools.
- Cross-world party systems beyond joining the same server.

---

## 8. What success looks like

**PROPOSED metrics, to be instrumented from the first playtest and re-baselined after launch:**

| Metric | Target | Why |
|---|---|---|
| First-scan completion in first session | ≥ 70% of new players | If they do not scan, they have not played the game |
| First ability unlock within 20 minutes | ≥ 50% | The loop must pay off quickly, not after an hour |
| Median session length | 25–35 min | Long enough for a region, short enough for Roblox |
| Day-1 retention | ≥ 25% | Genre-typical for a well-performing Roblox adventure |
| Day-7 retention | ≥ 10% | Indicates the archive and world two are pulling players back |
| Crash-free sessions | ≥ 99.5% | Below this, retention data is noise |
| Mobile frame rate | ≥ 30 FPS at quality 4 on the mid-tier test device | The mass-market gate |
| Progression blockers per 100 sessions | < 2 | A player stuck on a research step is a content bug |

These are planning targets, not promises. The first vertical slice exists to replace guesses with measurements.

---

## 9. Tone and presentation guardrails

- **CONFIRMED:** stylized realism. Believable natural environments, expressive botanical silhouettes, vibrant but controlled colour, strong natural light and atmosphere.
- Ordinary environments must be beautiful and readable; rarity earns spectacle, not basic visibility.
- No default Roblox presentation: no Plastic on large surfaces, no default sky at the horizon, no Voxel lighting, no single flat terrain colour. Apply the world record in `07_Technical/Data/visual_themes.json`.
- The player must always be able to read the route, the interactable and the threat at gameplay distance and at low graphics quality.
- Cinematic framing is for discovery moments, not for taking control away during traversal or combat.

---

## 10. Confirmed, proposed, open

| Topic | State | Source |
|---|---|---|
| Title, platform, genre, camera | CONFIRMED | `00_Overview/README.md` |
| Three pillars | CONFIRMED | `00_Overview/README.md` |
| Ten worlds, each 3 major + 3 hidden regions | CONFIRMED | `00_Overview/Decisions.md` |
| Plants grant complete sets; research unlocks them | CONFIRMED | `00_Overview/Core_Loop.md` |
| Rarity ladder of seven tiers | CONFIRMED | `00_Overview/Rarity_Standard.md` |
| Attacking is a core pillar | CONFIRMED | `00_Overview/Decisions.md` |
| Launch scope | PROPOSED here | This document, section 7 |
| Session shape and expedition structure | OPEN | `00_Overview/Core_Loop.md` |
| Encounter roster, boss structure, PvP | OPEN | `00_Overview/Decisions.md` |
| Loadout slot count and input layout | OPEN | `04_Systems/Loadouts/README.md` |
| Research milestone counts and pacing | OPEN | `04_Systems/Scanning_Research/README.md` |
| Economy, monetization, collection systems | OPEN | `00_Overview/Decisions.md` |
| World rotation schedule | OPEN | `04_Systems/Worlds/README.md` |
| Co-op party size and rules | OPEN | `04_Systems/Coop_Multiplayer/README.md` |
| Map UI, navigation assists, fast travel | OPEN | `04_Systems/Exploration/README.md` |

The four decisions that block the most work are the launch scope, the encounter direction, the loadout rules and the ability roles. Document 8 gives each one an owner question, a recommendation and a deadline.
