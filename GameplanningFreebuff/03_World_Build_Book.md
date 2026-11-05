# 03 — World Build Book

**Status:** PROPOSED production plan built on PROPOSAL world specifications.
**Source of truth:** each world's `01_Worlds/<world>/README.md`. Region names, identities, palettes and descriptions below are copied from those documents. Build order, effort bands, production emphasis, signature moments and scale envelopes are production proposals.

This is the book an environment lead opens on Monday morning. It answers: which world, which region, in what order, what must that region prove, how much time does it take, and when is it done.

---

## 1. How to read a world card

Each card contains:

- **Snapshot** — the canonical identity, palette and theme values that must be applied.
- **Scale envelope** — a planning estimate, not canonical geography. Region boundaries and playable scale are OPEN in every world specification. Use these numbers to staff and budget; replace them with measured layouts after the first greybox.
- **Region table** — every named region, its kind, its canonical one-line description and the production problem it exists to solve.
- **Build order** — the sequence that manages technical risk, not the order a player sees.
- **Signature moment** — a PROPOSED presentation beat for the region. It adds no lore and no named landmark.
- **Exit criteria** — what must be true before the region is called done.
- **Risk** — the thing most likely to go wrong in this world.

---

## 2. Production order

| Order | World | Why here | Release wave | Regions | Art now | Environment effort (PROPOSED) |
|---:|---|---|---|---:|---:|---:|
| 1 | Auralis | Confirmed first expedition world; open terrain; cheapest streaming and mobile validation | Launch | 6 | 4/6 | ~1,800 h |
| 2 | Myrrwood | Proves the opposite extreme: canopy, occlusion, roots, darkness | Launch | 6 | 5/6 | ~2,280 h |
| 3 | Caldera Reach | Strongest post-launch hook; tests emissive and particle discipline | Wave 2 | 6 | 6/6 | ~2,100 h |
| 4 | Pelagora | Water is the largest technical risk; spike early, ship after Caldera | Wave 2 | 6 | 6/6 | ~2,520 h |
| 5 | Veyr Peaks | Weather system reuse; long sightlines; altitude traversal | Wave 3 | 6 | 6/6 | ~2,280 h |
| 6 | Nacre Hollow | Reuses fog/water tech from Pelagora with a quieter palette | Wave 3 | 6 | 5/6 | ~1,980 h |
| 7 | Sereglass | Cheapest pipeline; dunes and heat shimmer | Wave 3 | 6 | 5/6 | ~1,800 h |
| 8 | Umbra Deep | Cave lighting and vertical occlusion; needs mature streaming | Wave 4 | 6 | 6/6 | ~2,280 h |
| 9 | Zephyr Crown | Depends on traversal abilities and aerial streaming | Wave 4 | 6 | 5/6 | ~2,400 h |
| 10 | The First Garden | Endgame; needs the most ability and encounter design | Wave 4 | 6 | 6/6 | ~2,160 h |

**Total environment effort:** roughly **21,600 hours** for greybox, art pass, lighting and polish across 60 regions. That is before plants, creatures, abilities, systems, audio, UI and QA. The scope consequence is in document 6.

**Release waves are PROPOSED.** The launch scope recommendation is two worlds. Waves 2–4 are a cadence plan, not a commitment.

---

## 3. Common region production recipe

Every region follows the same ten steps. Deviating costs more than it saves.

1. **Layout brief** — one page: entry, exit, landmark, main route, optional route, hidden route, vertical layer, encounter pocket, streaming boundary, plant habitats.
2. **Greybox** — anchored parts and terrain only. Walk it at normal, sprint and traversal speed. If it is not fun now, art will not fix it.
3. **Performance baseline** — measure draw calls, frame time and memory on the target mid-tier phone. Record it in the budget template.
4. **Terrain and large forms** — terrain editor for landforms, modular meshes for distinctive cliffs, arches, roots and ruins.
5. **Kit pass** — reuse the world kit. No one-off meshes unless the landmark requires it.
6. **Visual theme** — apply the exact record from `visual_themes.json`. No eyeballing.
7. **Gameplay anchors** — habitat, scan, encounter, safe zone, traversal link, cinematic camera. Named and separated from decoration.
8. **Foliage and detail** — clusters, not individual leaves. Ground cover must not hide navigation cues.
9. **Lighting and atmosphere polish** — screenshot at player eye height, compare with the world palette and hero art.
10. **Acceptance** — low graphics, mobile, multiplayer, fast traversal, ability VFX active. Sign the budget sheet.

**Definition of done for any region:** playable route works, identity is readable at a glance, at least one optional discovery exists, plant habitats make sense, streaming boundaries are measured, and the region has a screenshot set at low and high quality.

---

## 4. Auralis — WORLD_001

> A vast, welcoming world of open grasslands, warm light and enormous distant horizons.

**Palette:** fresh greens, warm gold, pale blue skies, soft white stone.
**Role:** the handshake. This world teaches reading wind, light, terrain and plant behaviour without feeling like a tutorial map.

### Snapshot

| Property | Value |
|---|---|
| Regions | 3 major, 3 hidden |
| Plants | Driftleaf (Natural), Sunspool (Natural), Cloudreed (Unusual), Meadowflare (Distinct), Rainbell (Ancient) |
| Creatures | Mossback (CRE-001), Thornrunner (CRE-002) |
| Abilities | 15 across 5 sets; 9 still lack a confirmed role |
| Art | 6 images; 4/6 regions; Windstep Prairie and Rainmirror Pools missing |
| Theme | Clock 8.9, brightness 2.4, latitude 15, fog 0.30, haze 1.6, bloom 0.25 |
| Water | `#5fb3c4`, transparency 0.22, wave size 0.10 |
| Terrain | Grass `#7d9c52`, LeafyGrass `#5b7d3c`, Ground `#7b6a4c`, Rock `#b8b3a4`, Sand `#d9c9a3`, Mud `#6a5842` |
| Accents | `#d9a84e` gold, `#e3ded0` stone, `#9cc6d8` sky |

**PROPOSED scale envelope:** 5,500 × 5,500 studs total; major regions 1,800–2,400 across; vertical range 350 studs. Planning estimate only.

### Regions

| Region | Kind | Canonical description | Production problem it solves | Effort |
|---|---|---|---|---|
| Sunthread Fields | Major | Bright meadows with spiral flower beds and scattered groves | The vertical slice. Proves the loop in the friendliest possible terrain | M |
| The Whispering Hollows | Hidden | Shallow valleys where wind creates unusual tones | Hidden-route readability and directional audio | M |
| Windstep Prairie | Major | Rolling grasslands, long ridges and wind-shaped vegetation | Long sightlines, wind-reactive foliage, cheapest streaming test | M |
| Glasswater Basin | Major | Shallow lakes, reed beds and reflective streams | Water edges, reflections and shoreline kit | L |
| Rainmirror Pools | Hidden | Small pools that appear after heavy rain and reflect distant landmarks | Weather-driven world state and reflection reuse | L |
| The Buried Meadow | Hidden | A hidden underground pocket beneath the prairie, reached through a collapsed root tunnel | Surface-to-underground transition, lighting contrast | L |

### Build order

1. **Sunthread Fields** — vertical slice. Three plants, one creature, full loop.
2. **The Whispering Hollows** — attached to Sunthread; proves the hidden-route grammar and wind audio.
3. **Windstep Prairie** — the streaming stress test. Long views, grass LOD rings, wind vector variation.
4. **Glasswater Basin** — water spike. Shorelines, reeds, reflections, swim/water traversal rules if any.
5. **Rainmirror Pools** — weather state. Pools appear and disappear; reflection is a gameplay clue, not decoration.
6. **The Buried Meadow** — underground pocket. Reuses cave kit and lighting contrast; last because it depends on the transition tech.

### Signature moment (PROPOSED)

The player crests a low ridge in Windstep Prairie and the grass bends in a visible wave ahead of a weather change. The wave reveals the silhouette of the next landmark. No UI marker; the wind is the marker. This is the visual thesis of the whole game in eight seconds.

### Exit criteria

- A new player can scan, research and unlock one ability without external instructions.
- Sunthread Fields holds 30 FPS at quality 4 on the mid-tier phone with all three sets active.
- The route from Sunthread to Whispering Hollows is discoverable from environmental clues alone in playtest.
- All five plants have habitat anchors in at least two regions each, or a documented reason for one.
- No default materials on any surface above four studs.
- Rainmirror Pools state change is server-authoritative and survives rejoin.

### Risk

Water and reflections are the hidden cost in an otherwise cheap world. Do not let Glasswater's shoreline kit become a one-off art project; it must be reusable in Nacre Hollow and Pelagora.

---

## 5. Myrrwood — WORLD_002

> An enormous ancient forest with layered canopy, giant trees and interconnected root systems.

**Palette:** deep greens, mossy browns, teal shadows, shafts of warm light.
**Role:** the vertical world. Teaches that the route is not always on the ground.

### Snapshot

| Property | Value |
|---|---|
| Regions | 3 major, 3 hidden |
| Plants | Threadroot (Natural), Echofern (Distinct), Hollowbark (Unusual), Lanternroot (Distinct), Thornwake (Forgotten) |
| Creatures | Canopy Glider (CRE-003), Rootmaw (CRE-004) |
| Abilities | 15 across 5 sets; 6 still lack a confirmed role |
| Art | 7 images; 5/6 regions; The Still Canopy missing |
| Theme | Clock 15.4, brightness 1.6, latitude 35, fog 0.44, haze 2.6, bloom 0.50 |
| Water | `#2f5f57`, transparency 0.35, wave size 0.06 |
| Terrain | LeafyGrass `#3f5c2f`, Grass `#4e6b35`, Ground `#4a3a29`, Mud `#3b2f22`, Rock `#59604f`, Sand `#6b6350` |
| Accents | `#c98f3f` amber, `#7fb08a` moss, `#2f4a3f` deep teal |

**PROPOSED scale envelope:** 4,800 × 4,800 studs; canopy layer 900–1,400 studs above the floor; root layer 250 studs below. Planning estimate only.

### Regions

| Region | Kind | Canonical description | Production problem it solves | Effort |
|---|---|---|---|---|
| Fernfall Basin | Major | Dense fern fields around streams and low waterfalls | Entry region; foliage density without frame loss | M |
| Hush Canopy | Major | Elevated branches, hanging gardens and quiet forest clearings | Canopy traversal, vertical streaming, occlusion | L |
| Rootbound Groves | Major | Huge trees and exposed root networks | Hero tree kit, scale readability, collision | L |
| The Underbough | Hidden | A walkable ecosystem beneath enormous interwoven roots | Ceiling geometry, filtered light, navigation | L |
| Hollowheart | Hidden | The interior of a colossal fallen tree with its own miniature habitat | Interior/exterior transition, unique landmark asset | XL |
| The Still Canopy | Hidden | A secluded upper-forest pocket where the wind barely moves | Contrast region; audio silence as a clue | M |

### Build order

1. **Fernfall Basin** — entry and vertical-slice candidate. Proves the forest kit and density budget.
2. **The Underbough** — attached to Fernfall; proves the layered-map concept and filtered light.
3. **Rootbound Groves** — hero trees and root collision. The kit made here serves all six regions.
4. **Hush Canopy** — vertical traversal and canopy streaming. Build after traversal abilities are playable.
5. **Hollowheart** — landmark interior. Highest art cost; build once the kit is stable.
6. **The Still Canopy** — hidden upper pocket. Uses the canopy kit with minimal new assets; the design work is audio and wind state.

### Signature moment (PROPOSED)

The player climbs through roots into the Underbough and the canopy above becomes a ceiling of moving light. The route forward is read from root growth, not from a path. When the wind stops in The Still Canopy, the absence of sound is the discovery cue.

### Exit criteria

- Canopy and floor are both traversable without a UI arrow.
- Dense fern fields hold the frame budget at quality 4; foliage ring distances are measured.
- The Underbough never lets the player see an unstreamed hole in the ceiling during normal traversal.
- Hollowheart's interior is a single compact model with its own lighting profile, not part of a world-spanning model.
- Rootmaw and Canopy Glider have readable silhouettes against the forest at gameplay distance.

### Risk

Occlusion is the enemy. A beautiful canopy can hide the route, the interactable and the threat at the same time. Build the navigation read first, then add density.

---

## 6. Caldera Reach — WORLD_003

> A volcanic world where life thrives around cooled lava, mineral channels and geothermal activity.

**Palette:** basalt black, copper, ember orange, muted red, turquoise mineral deposits.
**Role:** the spectacle world. Proves emissive materials and particles without breaking readability.

### Snapshot

| Property | Value |
|---|---|
| Regions | 3 major, 3 hidden |
| Plants | Glassfire Lily (Unusual), Emberlace (Distinct), Basalt Bloom (Ancient), Ashwing Fern (Forgotten), Ashen Crown (Relic) |
| Creature | Emberhorn (CRE-005) |
| Abilities | 16 across 5 sets; 7 still lack a confirmed role |
| Art | 6 images; 6/6 regions |
| Theme | Clock 17.3, brightness 2.0, latitude 8, fog 0.42, haze 3.0, bloom 0.45 |
| Water | `#2e6f6a`, transparency 0.30, wave size 0.05 |
| Terrain | Basalt `#2a2724`, Rock `#4a4038`, Ground `#3a312a`, Slate `#3d3a38`, Sand `#6e5a45`, CrackedLava `#ff5f24` |
| Accents | `#c9784a` copper, `#2fb0a0` mineral teal, `#ff7a3c` ember |

**PROPOSED scale envelope:** 5,000 × 5,000 studs; vertical range 700 studs; geothermal interior 400 studs below the surface. Planning estimate only.

### Regions

| Region | Kind | Canonical description | Production problem it solves | Effort |
|---|---|---|---|---|
| Ashen Terraces | Major | Layered volcanic slopes with sparse resilient vegetation | Entry read; layered silhouette; ash material | M |
| Cinder Veins | Major | Cooled lava channels and warm mineral ground | Emissive ground detail without bloom blowout | L |
| Obsidian Fields | Major | Dark glass-like rock formations and narrow ravines | High-contrast material; navigation in dark rock | L |
| The Quiet Caldera | Hidden | A sheltered crater where unusual life grows around cooled rock | Contrast pocket; quiet after spectacle | M |
| Steamglass Tunnels | Hidden | Narrow passages shaped by ancient steam vents | Interior occlusion; steam VFX budget | L |
| The Buried Furnace | Hidden | A deep geothermal chamber with old mineral structures | Hottest lighting scene; landmark structure | XL |

### Build order

1. **Ashen Terraces** — entry and material baseline for basalt, ash and sparse flora.
2. **Cinder Veins** — emissive channel kit; establish the bloom and exposure envelope.
3. **Obsidian Fields** — dark-rock navigation; prove gameplay cues survive low contrast.
4. **The Quiet Caldera** — quiet contrast region; reuse the rock kit with living cover.
5. **Steamglass Tunnels** — interior steam and narrow navigation.
6. **The Buried Furnace** — landmark chamber. Build last; it consumes the most lighting and VFX budget.

### Signature moment (PROPOSED)

The player descends into the Quiet Caldera and the roar of the surface cuts out. Warm mineral light pulses slowly under the rock, revealing living plants rooted in cooled stone. The world's violence becomes shelter.

### Exit criteria

- Emissive surfaces never clip to white at quality 4; bloom threshold is tuned per screen.
- The player can read safe ground versus heat hazard without colour alone.
- Particle count during the heaviest vent scene holds the frame budget.
- Obsidian navigation works at low graphics quality.
- Emberhorn's telegraphed attack is readable against a bright mineral background.

### Risk

Bloom and particles can make a volcanic world look impressive in screenshots and unplayable in motion. Measure frame time during the busiest effect, not after it.

---

## 7. Pelagora — WORLD_004

> A huge ocean world with islands, reefs, deep water and submerged ecosystems.

**Palette:** turquoise shallows, rich ocean blue, coral colours, deep indigo.
**Role:** the water world. The largest technical risk in the project.

### Snapshot

| Property | Value |
|---|---|
| Regions | 3 major, 3 hidden |
| Plants | Brineglass (Unusual), Tideglass (Distinct), Coralweave (Unusual), Pearlcurrent (Ancient), Abyssal Bloom (Forgotten) |
| Creature | Tidewhisper (CRE-006) |
| Abilities | 15 across 5 sets; 6 still lack a confirmed role |
| Art | 8 images; 6/6 regions |
| Theme | Clock 10.6, brightness 2.6, latitude 5, fog 0.26, haze 2.0, bloom 0.30 |
| Water | `#1fa3bd`, transparency 0.12, wave size 0.15 |
| Terrain | Sand `#dcc9a2`, Ground `#b9a887`, Rock `#8a8f86`, Grass `#5f8c5a`, Mud `#7a6a52` |
| Accents | `#ef7f6a` coral, `#2b6f8f` ocean, `#1b2a5a` deep indigo |

**PROPOSED scale envelope:** 6,000 × 6,000 studs; water surface at 0; playable depth 900 studs; three island clusters. Planning estimate only.

### Regions

| Region | Kind | Canonical description | Production problem it solves | Effort |
|---|---|---|---|---|
| Shallows of Glass | Major | Clear coastal water, tidal flats and small islands | Entry; swim transition; underwater clarity | L |
| Bluefall Reef | Major | Layered reefs, arches and bright underwater gardens | Reef kit; colour and silhouette density | XL |
| The Open Reach | Major | Broad stretches of ocean connecting distant landforms | Traversal emptiness that still reads as designed | L |
| Kelp Cathedral | Hidden | A towering underwater forest with vertical navigation routes | Vertical underwater navigation; kelp instancing | XL |
| The Sunken Choir | Hidden | Submerged stone formations that create sounds as currents pass | Audio-led discovery; submerged architecture | L |
| The Still Trench | Hidden | A deep, sheltered region where light barely reaches | Depth darkness; ability-gated visibility | XL |

### Build order

**Do a water spike before production.** One 400 × 400 stud test volume with swim, depth fog, surface transition and one reef kit piece. If it does not hold frame time and readability, stop and redesign before art.

1. **Shallows of Glass** — entry and swim tutorial without a tutorial.
2. **Bluefall Reef** — reef kit and colour baseline.
3. **The Open Reach** — traversal scale and island silhouettes.
4. **Kelp Cathedral** — vertical underwater route and instanced kelp.
5. **The Sunken Choir** — audio cue and submerged landmark.
6. **The Still Trench** — deep-water lighting and ability-gated route.

### Signature moment (PROPOSED)

The player breaks the surface above Bluefall Reef and sees the reef continue underwater as a second skyline. Diving changes the music, the fog and the movement, not just the camera height.

### Exit criteria

- Swimming, surfacing and diving are readable without UI prompts after the first minute.
- Underwater fog preserves depth cues and does not hide hazards.
- Kelp and reef instances hold the frame budget on mobile.
- The deep trench is navigable with reduced effects and low graphics quality.
- Underwater audio is muffled and directional without making combat cues unintelligible.

### Risk

Water is a subsystem, not a region theme. If the spike fails, Pelagora moves later and the launch scope does not change.

---

## 8. Veyr Peaks — WORLD_005

> A colossal mountain world with alpine meadows, glaciers, ridges and storm systems.

**Palette:** ice blue, slate grey, pine green, pale lavender, occasional warm gold.
**Role:** the weather world. Proves that environmental state can change routes and readability.

### Snapshot

| Property | Value |
|---|---|
| Regions | 3 major, 3 hidden |
| Plants | Snowbell (Unusual), Frostwaker (Ancient), Rimepine (Ancient), Stormbell (Forgotten), Thunderroot (Relic) |
| Creature | Frostmane (CRE-007) |
| Abilities | 17 across 5 sets; 7 still lack a confirmed role |
| Art | 9 images; 6/6 regions |
| Theme | Clock 7.5, brightness 2.1, latitude 62, fog 0.38, haze 2.8, bloom 0.30 |
| Water | `#6fa6c4`, transparency 0.20, wave size 0.08 |
| Terrain | Snow `#e8eef5`, Glacier `#b9d3e0`, Ice `#a8c8d8`, Rock `#5b6270`, Slate `#4a505c`, Grass `#4f6b52`, Ground `#6a6458` |
| Accents | `#c9a45c` warm gold, `#b9a8d8` lavender, `#3f5a4a` pine |

**PROPOSED scale envelope:** 5,200 × 5,200 studs; summit at 2,400 studs; glacier volume 600 studs. Planning estimate only.

### Regions

| Region | Kind | Canonical description | Production problem it solves | Effort |
|---|---|---|---|---|
| Cloudpine Basin | Major | High-altitude forests and misty valleys | Entry; mist layers; pine kit | M |
| Paleglass Shelf | Major | Snowy plateaus and sheltered cold-adapted vegetation | Snow material; wind exposure; shelter pockets | L |
| Thunderline Ridge | Major | Exposed mountain ridges with rapidly changing weather | Weather transitions on a long sightline | XL |
| Blue Hour Hollow | Hidden | A sheltered valley in cool twilight for much of the day | Local lighting profile; contrast pocket | M |
| The Frozen Bellows | Hidden | Ice caverns with unusual air currents | Interior ice; wind audio; particle budget | L |
| The Eye of the Storm | Hidden | An exposed circular ridge where weather patterns converge | Storm centre; circular navigation; VFX peak | XL |

### Build order

1. **Cloudpine Basin** — entry, mist and pine baseline.
2. **Paleglass Shelf** — snow and shelter read.
3. **Blue Hour Hollow** — local twilight; cheapest hidden region, early contrast win.
4. **Thunderline Ridge** — weather system proof on the longest sightline.
5. **The Frozen Bellows** — interior ice and wind.
6. **The Eye of the Storm** — final spectacle; depends on mature weather and VFX budgets.

### Signature moment (PROPOSED)

A storm crosses Thunderline Ridge and the route the player could see a minute ago disappears into white. The safe line is marked by sheltering pines and warm-gold mineral stones. Weather is navigation.

### Exit criteria

- Weather transitions are server-authoritative, predictable and survive rejoin.
- The player can still read the route in fog and snow at low quality.
- Mist layers do not stack into a white screen at any camera angle.
- Storm VFX holds the frame budget during an encounter.
- Shelter and exposure are distinguishable without colour alone.

### Risk

Weather can become an expensive global simulation. Keep it to a small set of authoritative state values and local presentation, as the system documents require.

---

## 9. Nacre Hollow — WORLD_006

> A mysterious wetland world of shallow water, drifting fog, reflective pools and dense marsh vegetation.

**Palette:** muted jade, pearl white, deep teal, soft violet, silver mist.
**Role:** the atmospheric world. Proves fog, reflection and quiet navigation.

### Snapshot

| Property | Value |
|---|---|
| Regions | 3 major, 3 hidden |
| Plants | Boglight (Unusual), Mistbell (Unusual), Duskmantle (Ancient), Lullaby Reed (Forgotten), Moonlace (Forgotten) |
| Creature | Mirecrawler (CRE-008) |
| Abilities | 16 across 5 sets; 7 still lack a confirmed role |
| Art | 5 images; 5/6 regions; Pearlreed Flats missing |
| Theme | Clock 18.4, brightness 1.7, latitude 20, fog 0.55, haze 4.0, bloom 0.35 |
| Water | `#2d6f72`, transparency 0.25, wave size 0.07 |
| Terrain | Limestone `#d6d2c4`, Rock `#a8a89c`, Grass `#6d8f78`, Ground `#8a8574`, Mud `#5c5a4c`, Sand `#cfc9b4` |
| Accents | `#b9c9c0` pearl, `#8f7fa8` violet, `#e8e6de` mist |

**PROPOSED scale envelope:** 4,600 × 4,600 studs; water depth 120 studs; fog ceiling 180 studs. Planning estimate only.

### Regions

| Region | Kind | Canonical description | Production problem it solves | Effort |
|---|---|---|---|---|
| Drifting Marsh | Major | Broad wetlands with islands of vegetation | Entry; shallow water navigation; island readability | M |
| Nightglass Fen | Major | Dark pools, reflective water and nocturnal life | Reflection and night lighting | L |
| Pearlreed Flats | Major | Open reed beds and shallow winding channels | Open-space navigation without landmarks | L |
| Drowned Orchard | Hidden | Remains of an ancient grove beneath shallow water | Submerged props; memory of a place | L |
| The Fog Maze | Hidden | A shifting network of narrow channels read through plant clues | Navigation by ecology, not geometry | XL |
| The Quiet Mirror | Hidden | A hidden pool whose surface remains unusually still | Reflection as a discovery clue | M |

### Build order

1. **Drifting Marsh** — entry and shallow-water baseline.
2. **Pearlreed Flats** — open navigation and reed instancing; also fills the missing art gap before final pass.
3. **Nightglass Fen** — reflection and night palette.
4. **The Quiet Mirror** — reuse reflection tech for a small, high-impact hidden region.
5. **Drowned Orchard** — submerged props and quiet storytelling.
6. **The Fog Maze** — the design capstone; only build once plant-clue navigation is playable.

### Signature moment (PROPOSED)

In the Fog Maze, the path is not visible. A line of Boglight glows brighter when the player moves in the right direction. The maze is solved by reading the plants, which is the game's thesis applied to navigation.

### Exit criteria

- Fog creates depth and mystery without hiding hazards or interactables.
- Reflections read as clues, not just decoration.
- Reed beds hold the frame budget and do not block movement invisibly.
- Nightglass Fen is playable at low graphics quality.
- Fog Maze has at least two valid solution routes and no pixel-hunt entrance.

### Risk

Fog plus water plus particles is the classic Roblox performance trap. Budget them together, not separately.

---

## 10. Sereglass — WORLD_007

> A desert world with enormous dunes, weathered stone, dry basins and hidden pockets of water.

**Palette:** sand gold, pale cream, rust red, dusty rose, glassy blue.
**Role:** the heat world. Proves scale, heat shimmer and water scarcity as a route clue.

### Snapshot

| Property | Value |
|---|---|
| Regions | 3 major, 3 hidden |
| Plants | Pebblecup (Natural), Dune Lotus (Unusual), Sunshard Cactus (Distinct), Veil Orchid (Ancient), Mirage Thorn (Relic) |
| Creature | Dune Strider (CRE-009) |
| Abilities | 16 across 5 sets; 6 still lack a confirmed role |
| Art | 7 images; 5/6 regions; The Glasswind Vault missing |
| Theme | Clock 16.6, brightness 2.7, latitude 22, fog 0.36, haze 3.2, bloom 0.35 |
| Water | `#6fa9b8`, transparency 0.15, wave size 0.04 |
| Terrain | Sand `#d9bd8b`, Sandstone `#c19a6b`, Ground `#b08f68`, Rock `#9c7d5f`, Salt `#e6dcc8`, Slate `#8a7460` |
| Accents | `#a85f42` rust, `#c98f8f` dusty rose, `#7fb0c0` glassy blue |

**PROPOSED scale envelope:** 5,400 × 5,400 studs; dune crests 300 studs; vault 250 studs below. Planning estimate only.

### Regions

| Region | Kind | Canonical description | Production problem it solves | Effort |
|---|---|---|---|---|
| Drywash Basin | Major | Wide dry riverbeds and scattered stone formations | Entry; dry riverbed as a natural route | M |
| Singing Dunes | Major | Rolling dunes with wind-shaped ridges and unusual acoustic patterns | Dune silhouette; wind audio; traversal rhythm | L |
| Veiled Escarpment | Major | Tall cliffs and heat-shimmering ledges | Vertical navigation; heat shimmer budget | L |
| The Underflow | Hidden | A hidden underground watercourse beneath the dry basin | Hidden water; contrast and sound clue | L |
| The Veiled Garden | Hidden | A concealed habitat behind a heat-distorted rock face | Shimmer as a discovery cue | M |
| The Glasswind Vault | Hidden | A sheltered cavern filled with naturally polished mineral formations | Art-heavy interior; bloom and reflection | XL |

### Build order

1. **Drywash Basin** — entry and route grammar.
2. **Singing Dunes** — dune kit and wind acoustics.
3. **Veiled Escarpment** — cliffs, ledges and heat shimmer.
4. **The Underflow** — hidden watercourse; reuse water tech.
5. **The Veiled Garden** — shimmer-reveal clue; fills the missing-art gap before final pass.
6. **The Glasswind Vault** — interior showcase; build after the kit is stable.

### Signature moment (PROPOSED)

Heat shimmer on the Veiled Escarpment distorts a rock face. When the player moves to a different angle, the distortion reveals an opening that was always there. The mirage is not a trick; it is a lens.

### Exit criteria

- Dunes read as traversable shapes, not a featureless yellow field.
- Heat shimmer is a local screen effect with a documented performance cost and a low-quality fallback.
- The player can find water without a marker.
- The Glasswind Vault interior is readable and does not blow out bloom.
- Wind audio and encounter audio do not mask each other.

### Risk

A desert can become visually monotonous. The palette has enough range, but the silhouette variety has to come from geology and vegetation, not colour alone.

---

## 11. Umbra Deep — WORLD_008

> A vast subterranean world with enormous caverns, vertical rock formations and independent underground ecosystems.

**Palette:** deep navy, charcoal, muted teal, mineral violet, carefully placed bioluminescent light.
**Role:** the darkness world. Proves that lighting is gameplay information.

### Snapshot

| Property | Value |
|---|---|
| Regions | 3 major, 3 hidden |
| Plants | Glowcap (Unusual), Gloomcap (Distinct), Stoneheart Moss (Ancient), Crystalroot (Ancient), Deepwarden Fungus (Relic) |
| Creature | None in the initial ten — content gap |
| Abilities | 16 across 5 sets; 6 still lack a confirmed role |
| Art | 8 images; 6/6 regions |
| Theme | Clock 0.3, brightness 0.5, latitude 40, fog 0.62, haze 3.5, bloom 0.80 |
| Water | `#1f4a4a`, transparency 0.30, wave size 0.05 |
| Terrain | Rock `#22282e`, Basalt `#1b1f24`, Ground `#2a2f33`, Grass `#2f4a45`, Mud `#23282a`, Slate `#2b3138` |
| Accents | `#3ec9a8` bioluminescent teal, `#7a5fa8` mineral violet, `#1f6b6b` deep teal |

**PROPOSED scale envelope:** 4,200 × 4,200 studs; vertical range 2,000 studs; three major cavern layers. Planning estimate only.

### Regions

| Region | Kind | Canonical description | Production problem it solves | Effort |
|---|---|---|---|---|
| Lantern Hollows | Major | Caverns with naturally glowing organisms | Entry; bioluminescent lighting language | L |
| Blackwater Galleries | Major | Underground lakes and submerged passages | Dark water; reflections; swim routes | XL |
| The Vertical Archive | Major | Enormous shafts, ledges and layered stone walls | Vertical streaming and navigation | XL |
| The Blind Garden | Hidden | A hidden ecosystem with almost no natural light | Non-visual discovery cues | L |
| The Crystal Lung | Hidden | A chamber where mineral formations create slow, visible air currents | Air current VFX; chamber landmark | L |
| The Root Cathedral | Hidden | A cavern crossed by giant roots descending from the surface | Cross-world visual link without new lore | L |

### Build order

1. **Lantern Hollows** — entry and bioluminescent baseline.
2. **The Vertical Archive** — vertical streaming proof.
3. **Blackwater Galleries** — dark water and submerged navigation.
4. **The Root Cathedral** — reuse Myrrwood root kit; strong visual bridge.
5. **The Crystal Lung** — air current effect and chamber composition.
6. **The Blind Garden** — the design capstone; audio and touch cues, minimal light.

### Signature moment (PROPOSED)

The player enters the Blind Garden and their light does not help. The route is read by sound, air movement and the faint geometry of roots. The game briefly becomes a different kind of exploration without changing the controls.

### Exit criteria

- The player can navigate without cranking brightness; no region is a black screen.
- Bioluminescence is placed as information, not scattered decoration.
- Shadow-casting lights are budgeted per cavern; the count is measured.
- Blackwater Galleries water is readable at low quality.
- Vertical Archive never exposes unstreamed geometry during descent.

### Risk

Dark worlds hide performance problems and navigation problems equally well. Test with the brightest and darkest settings and with effects off.

---

## 12. Zephyr Crown — WORLD_009

> A high-altitude world of immense plateaus, wind-carved cliffs, suspended-looking rock formations and rare aerial routes.

**Palette:** sky blue, pale stone, cloud white, soft green, occasional violet.
**Role:** the aerial world. Depends on traversal abilities more than any other world.

### Snapshot

| Property | Value |
|---|---|
| Regions | 3 major, 3 hidden |
| Plants | Springvine (Unusual), Cloudvine (Unusual), Gale Orchid (Ancient), Skydrift (Relic), Starfeather Grass (Relic) |
| Creature | None in the initial ten — content gap |
| Abilities | 17 across 5 sets; 10 still lack a confirmed role |
| Art | 6 images; 5/6 regions; The Updraft Wells missing |
| Theme | Clock 11.2, brightness 2.7, latitude 25, fog 0.22, haze 1.4, bloom 0.30 |
| Water | `#7cc4d6`, transparency 0.20, wave size 0.10 |
| Terrain | Sand `#e0d8c2`, Limestone `#d8d2c2`, Rock `#b9b6a8`, Grass `#7fa06a`, Ground `#a89a80` |
| Accents | `#8f7fb0` violet, `#ffffff` cloud, `#5f8f6a` soft green |

**PROPOSED scale envelope:** 5,000 × 5,000 studs; plateau layers at 800, 1,500 and 2,200 studs. Planning estimate only.

### Regions

| Region | Kind | Canonical description | Production problem it solves | Effort |
|---|---|---|---|---|
| Cloudgarden Fields | Major | Open highland meadows above the cloud line | Entry; cloud sea horizon; wind | M |
| The High Aeries | Major | Broad elevated plateaus and unusual air currents | Plateau traversal; updraft readability | L |
| Windwoven Cliffs | Major | Exposed cliffs and narrow natural anchor points | Climbing/gliding routes; anchor readability | XL |
| The Hanging Grove | Hidden | A sheltered forest growing across connected cliff ledges | Vertical garden; ledge streaming | L |
| The Farwind Shelf | Hidden | A remote plateau reachable through environmental traversal challenges | Ability-gated route design | L |
| The Updraft Wells | Hidden | Deep vertical openings where air rises in powerful columns | Updraft mechanics; vertical streaming | XL |

### Build order

1. **Cloudgarden Fields** — entry and cloud horizon.
2. **The High Aeries** — plateau traversal and wind read.
3. **The Hanging Grove** — vertical greenery; reuse cliff and foliage kits.
4. **Windwoven Cliffs** — anchor routes and glide lines.
5. **The Farwind Shelf** — ability-gated route; build after traversal sets are tuned.
6. **The Updraft Wells** — vertical mechanic showcase; build last.

### Signature moment (PROPOSED)

The player steps off the High Aeries into an updraft and the camera pulls back just enough to show the cloud sea below the plateau. The route ahead is a chain of islands, not a path. Flight is the reward for reading the wind.

### Exit criteria

- Aerial traversal never lets the player outrun streaming; the next plateau loads before arrival.
- Updrafts and glide lines are readable without UI arrows.
- Falling is recoverable and never a soft-lock.
- The cloud sea hides the world edge without looking like a wall.
- Ability-gated routes have at least one alternate approach for players without the ability.

### Risk

Zephyr Crown is designed around traversal abilities that may not exist or may be tuned later. Do not build its routes before those sets are playable.

---

## 13. The First Garden — WORLD_010

> A mysterious, ancient world that feels like the source of many biological patterns found throughout FLORA.

**Palette:** natural greens and stone with restrained luminous accents. Unfamiliar without becoming generic neon fantasy.
**Role:** the endgame. The world that answers the game's visual and mechanical thesis.

### Snapshot

| Property | Value |
|---|---|
| Regions | 3 major, 3 hidden |
| Plants | Everseed (Forgotten), Worldroot (Origin), Firstlight (Origin), Chronobloom (Origin), Heart of Verdance (Origin) |
| Creature | Origin Warden (CRE-010) |
| Abilities | 19 across 5 sets; 8 still lack a confirmed role |
| Art | 7 images; 6/6 regions |
| Theme | Clock 7.0, brightness 2.1, latitude 12, fog 0.42, haze 2.4, bloom 0.40 |
| Water | `#4f8f86`, transparency 0.20, wave size 0.06 |
| Terrain | Grass `#5d7d4a`, LeafyGrass `#46653a`, Ground `#6b5f48`, Rock `#a8a394`, Limestone `#cfc9b6`, Mud `#5a4c3a` |
| Accents | `#d8c98f` pale gold, `#a8d8b8` luminous green, `#8f9a7a` stone green |

**PROPOSED scale envelope:** 5,000 × 5,000 studs; root structures up to 1,200 studs tall; three vertical layers. Planning estimate only.

### Regions

| Region | Kind | Canonical description | Production problem it solves | Effort |
|---|---|---|---|---|
| Dawn Chamber | Major | A sheltered region with unusual light and delicate botanical formations | Entry; light that feels ancient, not magical | M |
| Root of All Paths | Major | A landscape crossed by enormous branching root structures | Hero root kit; route network | XL |
| The Unwritten Wilds | Major | An ecosystem that does not match any known world classification | Visual unfamiliarity without new lore | XL |
| The First Canopy | Hidden | A vast upper ecosystem above the main root network | Vertical canopy; reuse Myrrwood tech | L |
| The Memory Basin | Hidden | A quiet region where environmental traces reveal fragments of ancient events | Environmental storytelling without text dumps | L |
| The Seedless Deep | Hidden | A concealed region whose organisms do not appear to reproduce in any known way | Mystery as a design constraint, not a monster | L |

### Build order

1. **Dawn Chamber** — entry and the world's light signature.
2. **Root of All Paths** — hero root kit and route network.
3. **The First Canopy** — reuse Myrrwood canopy tech with a new palette.
4. **The Memory Basin** — quiet environmental storytelling.
5. **The Unwritten Wilds** — the visual thesis; build only after the kit is mature.
6. **The Seedless Deep** — the final mystery; build last, with the most restrained effects.

### Signature moment (PROPOSED)

In the Memory Basin, the environment briefly replays a trace of something that happened there — light, growth, rain, footsteps — with no text and no NPC. The player understands that the world remembers. The moment is environmental, skippable and never blocks control.

### Exit criteria

- The world feels related to the other nine without reusing their palettes literally.
- Origin abilities are spectacular and still readable in multiplayer.
- No new lore is invented to explain the mystery; the environment carries it.
- The final region has a clear completion state and a reason to return.
- The world's lighting holds at low quality; luminous accents do not become neon.

### Risk

The endgame tempts the team to invent answers. The repository deliberately leaves the First Garden mysterious. Build atmosphere and implication, not exposition.

---

## 14. Cross-world production rules

- **One kit per world, reused six times.** No region gets a bespoke art set unless it contains a landmark.
- **Every region gets a hero screenshot at player eye height** before acceptance. Compare it with the world palette and the closest concept image.
- **Every region gets a low-quality screenshot.** If the route is not readable, the region is not done.
- **Every region gets a streaming test** at walk, sprint and traversal speed.
- **Every world gets one content-complete pass before polish.** Do not polish region one while region six is still a greybox.
- **No world ships with default materials, default sky, Voxel lighting or a single flat terrain colour.**
- **No region ships with a plant habitat that is only a random scatter.** Use authored anchors.
- **Do not build a world whose native plants' abilities are still unassigned.** The level design depends on what the player can do.

---

## 15. Build book summary

| World | Regions | Effort | Native sets | Biggest risk | Earliest start |
|---|---:|---:|---:|---|---|
| Auralis | 6 | 1,800 h | 5 | Water edges | Now |
| Myrrwood | 6 | 2,280 h | 5 | Canopy occlusion | After slice |
| Caldera Reach | 6 | 2,100 h | 5 | Bloom/particles | After world 1 |
| Pelagora | 6 | 2,520 h | 5 | Water subsystem | Spike early |
| Veyr Peaks | 6 | 2,280 h | 5 | Weather cost | After weather |
| Nacre Hollow | 6 | 1,980 h | 5 | Fog + water + particles | After Pelagora |
| Sereglass | 6 | 1,800 h | 5 | Visual monotony | Any time |
| Umbra Deep | 6 | 2,280 h | 5 | Darkness hiding problems | After lighting |
| Zephyr Crown | 6 | 2,400 h | 5 | Traversal dependency | After traversal |
| The First Garden | 6 | 2,160 h | 5 | Inventing answers | Endgame |

The build book is a map, not a promise. Every effort band must be replaced by a measured actual after the first region of each world.
