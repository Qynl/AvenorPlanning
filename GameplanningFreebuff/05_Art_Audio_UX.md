# 05 — Art, Audio and UX Production

**Status:** PROPOSED production guide. The visual direction is CONFIRMED; the databases, budgets and pipelines below are implementation proposals.

**Required reading before any art task:** `07_Technical/Materials_And_Lighting.md`, `05_Presentation/Visual_Direction.md`, `05_Presentation/VFX_Animation_Audio.md`, and the world record in `07_Technical/Data/visual_themes.json`.

---

## 1. The visual thesis

Stylized realism, not realism and not cartoon.

- Believable ecosystems with readable silhouettes.
- Slightly exaggerated botanical forms: silhouettes that read at 60 studs and remain interesting at 5.
- Vibrant but controlled colour; no global saturation crank.
- Strong natural light, long shadows, atmospheric depth.
- Ordinary places are beautiful; rare things are spectacular.
- Every world must be recognisable from a single frame with the UI removed.

**The default-look ban is absolute.** No Plastic or SmoothPlastic on surfaces above roughly four studs, no default sky at the horizon, no Voxel lighting, no flat single-colour terrain. Default materials are a greybox convention, not a style.

---

## 2. Per-world presentation recipe

| World | Clock | Fog | Bloom | Accent colours | Terrain signature |
|---|---:|---:|---:|---|---|
| Auralis | 8.9 | 0.30 | 0.25 | gold `#d9a84e`, stone `#e3ded0`, sky `#9cc6d8` | Grass, LeafyGrass, Rock, Sand |
| Myrrwood | 15.4 | 0.44 | 0.50 | amber `#c98f3f`, moss `#7fb08a`, teal `#2f4a3f` | LeafyGrass, Ground, Mud, Rock |
| Caldera Reach | 17.3 | 0.42 | 0.45 | copper `#c9784a`, mineral `#2fb0a0`, ember `#ff7a3c` | Basalt, CrackedLava, Slate |
| Pelagora | 10.6 | 0.26 | 0.30 | coral `#ef7f6a`, ocean `#2b6f8f`, indigo `#1b2a5a` | Sand, Rock, Grass |
| Veyr Peaks | 7.5 | 0.38 | 0.30 | gold `#c9a45c`, lavender `#b9a8d8`, pine `#3f5a4a` | Snow, Glacier, Ice, Rock |
| Nacre Hollow | 18.4 | 0.55 | 0.35 | pearl `#b9c9c0`, violet `#8f7fa8`, mist `#e8e6de` | Limestone, Grass, Mud |
| Sereglass | 16.6 | 0.36 | 0.35 | rust `#a85f42`, rose `#c98f8f`, glass `#7fb0c0` | Sand, Sandstone, Salt |
| Umbra Deep | 0.3 | 0.62 | 0.80 | bio-teal `#3ec9a8`, violet `#7a5fa8`, deep teal `#1f6b6b` | Rock, Basalt, Slate |
| Zephyr Crown | 11.2 | 0.22 | 0.30 | violet `#8f7fb0`, white `#ffffff`, green `#5f8f6a` | Sand, Limestone, Rock |
| The First Garden | 7.0 | 0.42 | 0.40 | pale gold `#d8c98f`, luminous green `#a8d8b8`, stone `#8f9a7a` | Grass, LeafyGrass, Limestone |

**How to use this table:** it is a summary, not the source. Apply the full JSON record — brightness, exposure, ambient, environment scales, atmosphere decay/glare/haze, colour correction, sun rays, clouds, water and all six terrain materials. A world is not themed until every field is applied and screenshotted.

---

## 3. Environment art pipeline

### Stage 1 — Layout brief and greybox

- One page per region: entry, exit, landmark, main route, optional route, hidden route, vertical layer, encounter pocket, streaming boundary, plant habitats.
- Greybox with anchored parts and terrain only.
- Walk, sprint and traversal-test the greybox.
- Profile it on the mid-tier phone before any art.

### Stage 2 — Large forms and kit blockout

- Terrain editor for landforms, caves, slopes, water and biome transitions.
- Modular meshes for distinctive cliffs, arches, roots, ruins and rock formations.
- Parts for simple blockout, collision helpers and small structural detail.
- No hundreds of tiny parts imitating one natural shape.

### Stage 3 — Kit pass

Every world gets one kit, reused six times. The kit contains:

| Family | Pieces | Reuse rule |
|---|---|---|
| Ground and path | 6–10 modular pieces | Tint and rotate; no one-off paths |
| Cliffs and rocks | 8–12 formations | Scale variants allowed; new mesh requires a landmark reason |
| Trees and roots | 6–10 trunk/root/branch modules | Build trees from modules, not unique meshes |
| Ruins and structures | 4–8 modules | Only where the region description supports them |
| Water edges | 4–6 shoreline pieces | Shared across water worlds |
| Biome transitions | 3–5 pieces | Blend palette and silhouette, not just texture |
| Landmark components | 1–3 hero pieces | The only place for unique high-detail art |
| Foliage clusters | 6–12 clusters | Clusters, not individual leaves |

**Kit rule:** if a region needs a new mesh that is not a landmark, the kit is incomplete. Fix the kit, not the region.

### Stage 4 — Foliage and ground detail

- Foliage clusters at multiple LOD distances.
- Ground cover must not hide routes, interactables or hazards.
- Use tint variation instead of unique textures.
- Keep transparency for atmospheric effects and rare plants, not for every leaf.

### Stage 5 — Lighting and atmosphere

- Apply the world JSON.
- Screenshot at player eye height.
- Compare against the world palette and the closest concept image.
- Test at graphics quality 1, 4, 7 and 10.
- Verify gameplay cues at the lowest quality.

### Stage 6 — Gameplay anchors and presentation

- Invisible, named anchors for habitats, scans, encounters, safe zones, traversal links and cinematic cameras.
- Anchors are separate from decorative geometry.
- Plant specimens, scan clues and encounter props are placed last.

### Stage 7 — Review

A region is reviewable only with:

1. Hero screenshot at eye height, high quality.
2. Same frame at quality 1–2.
3. Mobile screenshot.
4. Fast-traversal capture across the boundary.
5. Completed performance budget sheet.
6. Comparison with the region's concept art or written palette.

---

## 4. Environment asset budgets

**PROPOSED working budgets. Replace after the first measured region.**

| Asset class | Triangle target | Texture | Collision | Notes |
|---|---:|---|---|---|
| Hero landmark module | ≤ 20k per mesh; split larger structures | 1024–2048, shared trim | Custom simplified hull | Only unique art in a region |
| Standard kit module | 1k–5k | 512–1024, shared atlas | Box/Hull | Reused heavily |
| Rock/cliff formation | 800–3k | 512–1024 | Hull, simplified | No precise collision |
| Tree trunk/root module | 1.5k–4k | 512–1024 | Hull | Build trees from modules |
| Foliage cluster | 300–800 | 256–512, alpha-tested where possible | None | LOD at distance |
| Ground cover patch | 100–300 | 256 | None | Cluster, not individual |
| Water edge piece | 500–1.5k | 512 | Box | Shared across worlds |
| Interactive prop | 500–2k | 512 | Box/Hull | Clear silhouette |

**Per-world texture budget:** ≤ 250 MB compressed on mobile; ≤ 500 MB on desktop. Measure actual GPU memory, not file size alone.

**Draw-call discipline:** reuse the same mesh asset and texture set. Duplicate visually identical copies with different asset IDs are a budget failure.

**Lighting discipline:** a small number of meaningful shadow-casting lights. Tiny decorative parts do not cast shadows. Overlapping transparent fog layers are a bug.

---

## 5. Plant art pipeline

The 50 plant folders are empty. Every plant needs a hero model before it can be a discovery moment.

### Per-plant deliverable

| Deliverable | Requirement |
|---|---|
| Hero model | Readable silhouette at 5, 30 and 80 studs; 8k–14k triangles |
| Texture set | 1024 base colour + normal/roughness as needed; reuse palettes within a family |
| Behaviour states | Only the states the plant design actually defines; do not invent growth stages |
| Scan highlight | Clear interaction silhouette that does not rely on colour alone |
| Ability attachment points | Named sockets for VFX and animation |
| Archive render | Clean neutral-background image for the archive card |
| Low-quality variant | Reduced foliage/particles, same silhouette |

### Process

1. Read the plant page and its ability set. The plant's identity is its ecology and its powers, not just its shape.
2. Sketch three silhouettes; pick the one readable at gameplay distance.
3. Block the model, place it in the target habitat at the correct scale.
4. Build the material set from the world palette plus the plant's accent.
5. Add behaviour states only where the design specifies them.
6. Test in the region at low and high quality.
7. Render the archive image from the approved model.
8. Upload once; reuse the asset ID everywhere.

### Priority order

Plants are produced in world order, not alphabetically. Auralis first: Driftleaf, Sunspool, Cloudreed, Meadowflare, Rainbell. The vertical slice needs three of them.

**Prompt packs exist:** `05_Presentation/Concept_Art/Plants/PROMPTS.md` covers all 50. Generated images are concept reference, not production textures or meshes.

---

## 6. Creature pipeline

Nine of ten creatures have a concept sheet; Thornrunner does not. A sheet is a casting reference, not a rig.

### Per-creature deliverable

| Deliverable | Requirement |
|---|---|
| Model | 15k–20k triangles; readable silhouette from the sheet's defining anatomy |
| Rig | Standard quadruped/aquatic/aerial rig; named bones for VFX attachment |
| Animation set | Idle, locomotion, telegraph, attack, hit, defeat, traversal variant where needed |
| Ability VFX | Signature ability must be readable at gameplay distance |
| Encounter read | Telegraph and state changes visible without UI |
| Low-quality variant | Same silhouette, reduced particles |

**Rule:** no creature enters an encounter until its role, health model and attack pattern are approved. Modelling can start earlier; encounter integration cannot.

---

## 7. VFX and animation

Every ability needs a recognisable activation, a distinctive silhouette, a sound identity, impact feedback, area/duration indicators where relevant, and a performance fallback. This is the canonical standard in `05_Presentation/VFX_Animation_Audio.md`.

### VFX budget by rarity

| Rarity | Emitters per ability | Live particles typical | Peak | Screen coverage |
|---|---:|---:|---:|---:|
| Natural | 2–3 | ≤ 60 | ≤ 120 | ≤ 20% |
| Unusual | 3–4 | ≤ 80 | ≤ 160 | ≤ 25% |
| Distinct | 3–5 | ≤ 100 | ≤ 200 | ≤ 30% |
| Ancient | 4–6 | ≤ 120 | ≤ 250 | ≤ 35% |
| Forgotten | 4–7 | ≤ 140 | ≤ 300 | ≤ 35% |
| Relic | 5–8 | ≤ 160 | ≤ 350 | ≤ 40% |
| Origin | 5–10 | ≤ 180 | ≤ 400 | ≤ 40% |

**Fallback rule:** if particles are reduced or disabled, the telegraph, area marker and impact must remain readable. Gameplay information is never carried by particles alone.

**Animation list for 1.0:**

- Player locomotion: idle, walk, sprint, jump, fall, swim, glide (if traversal exists), scan, interact, hurt, defeat, revive.
- Ability animations: activation, hold/loop where relevant, release, cancel.
- Creature animations: idle, locomotion, telegraph, attack, hit, defeat.
- Cinematic: discovery approach, scan reveal, first ability unlock.

**Animation budget:** one shared humanoid locomotion set; per-ability activation is layered upper-body where possible. Do not author a full-body unique animation for all 162 abilities before the vertical slice proves the combat feel.

---

## 8. Audio

No audio assets exist in the repository. Audio is a from-scratch discipline.

### Layers per world

| Layer | Content | Rule |
|---|---|---|
| Ambient bed | Wind, water, forest, cave, altitude | One loop per world, plus 2–3 variation stems |
| Weather | Rain, storm, fog, heat, snow | Local, driven by server state |
| Ecology | Creature calls, plant reactions, insect/ambient life | Sparse and directional; not a wall of loops |
| Interaction | Scan, research, pickup, UI, footstep surfaces | Short, readable, consistent |
| Ability | Activation, loop, impact, end | Unique identity per set; shared layer where possible |
| Music | Exploration, discovery, encounter, hub | Restrained; discovery cue is the emotional signature |

### Rules

- The discovery cue is the most important sound in the game. It must be recognisable before the UI appears.
- Underwater audio is muffled and directional without making combat cues unintelligible.
- The Still Canopy and the Blind Garden use silence or near-silence as a clue. Silence is a designed layer, not a missing asset.
- Ability sounds must be distinguishable in a four-player encounter. Test the mix with four sets active.
- No audio loop may exceed the memory budget; stream long music, keep short SFX resident.
- Every world needs a low-quality mix that drops distant ecology and reduces reverb.

**PROPOSED budget:** ≤ 20 MB compressed audio per world, ≤ 4 MB resident UI/interaction set, ≤ 4 simultaneous music layers.

---

## 9. UI and UX

### Surfaces

| Surface | Purpose | Required states |
|---|---|---|
| HUD | Set, cooldowns, health/state, interaction prompt, compass-free orientation cue | Normal, combat, swimming, gliding, low health, ability locked, no set equipped |
| Scanner | Aim, acquire, confirm, result | Searching, valid target, out of range, already owned, blocked |
| Discovery | First scan moment and plant acquisition | Cinematic, skip, reduced motion, late joiner |
| Archive | Collection, filters, plant detail | Owned, undiscovered, researching, complete, mastered |
| Research | Next milestone, clue, progress | Available, in progress, condition not met, complete |
| Loadout | Equip sets, presets, ability layout | Editing, valid, invalid, in combat (locked), mobile layout |
| Settings | Accessibility, audio, graphics, controls | Default, reduced motion, text scale, colourblind modes |

**OPEN and must not be invented:** map UI, fast travel, quest log, mission structure, currency displays, shop surfaces.

### UX principles

- The world is the primary navigation. UI confirms; it does not lead.
- A plant's clue is readable in the world, not only in a menu.
- The archive distinguishes "owned plant" from "unlocked ability" clearly.
- Every cooldown and lock has a visible reason.
- No more than two taps to reach the archive from the HUD.
- Controller parity from the first playable build, not after.
- Mobile: touch targets ≥ 44 px, no hover-only information, no keyboard hints.
- Text: scalable, high contrast, no critical information in colour alone.

### Onboarding

**PROPOSED, not a tutorial:** the first region teaches through a single scanned plant, a clear habitat clue and a short research step. No modal wall, no forced camera tour longer than the discovery beat, no pop-up for every system. If the player can scan, research and unlock without reading a manual, onboarding works.

---

## 10. Cinematic discovery

The confirmed direction is cinematic framing for important discoveries.

**PROPOSED beat structure (6–10 seconds):**

1. Player initiates scan; control remains responsive.
2. Camera eases to a framed angle; the plant's defining feature is centred.
3. The scan visual resolves; the plant's name and rarity appear after the silhouette, not before.
4. A short ecological detail plays — a reaction, a movement, a light change.
5. The archive entry is confirmed; control returns.
6. Skip is always available; reduced motion uses a static frame with the same information.

**Rules:**

- Never take control during combat or an encounter.
- Late joiners see a compact confirmation, not a half-played cinematic.
- The cinematic is local presentation; ownership is already server-confirmed.
- No cinematic may hide a hazard or move the player into danger.

---

## 11. Accessibility baseline

| Feature | Requirement |
|---|---|
| Text scale | 100–150%, no clipping |
| Contrast | Critical text and prompts pass readable contrast on all world palettes |
| Colour | Scan validity, hazard, rarity and cooldown state also use shape/icon/text |
| Motion | Reduced-motion mode removes camera shake, reduces particle motion, keeps telegraphs |
| Audio | Subtitles for cinematics and important creature cues; visual cue for directional audio |
| Controls | Full remapping on keyboard, controller parity, touch layout |
| Photosensitivity | No full-screen flash above the agreed threshold; bloom and flashes tunable |
| Cognitive | One objective at a time; no timed decision during a discovery beat |

Accessibility settings are saved in the profile and respected by the cinematic and VFX controllers.

---

## 12. Art review gates

| Gate | Evidence | Reject if |
|---|---|---|
| Palette gate | Screenshot + theme JSON comparison | Default materials, wrong palette, flat terrain |
| Silhouette gate | Region frame at 60 studs and 5 studs | Landmark unreadable, route hidden |
| Low-quality gate | Quality 1–2 screenshot | Gameplay cue disappears |
| Mobile gate | Real mid-tier device capture | Below 30 FPS or unreadable |
| Streaming gate | Traversal capture | Holes, popping landmarks, missing anchors |
| Audio gate | Four-player encounter mix | Ability cues masked, discovery cue inaudible |
| Accessibility gate | Settings matrix | Colour-only cue, unscaled text, unskippable motion |

**Screenshot protocol:** player eye height, no UI unless the gate is a UI gate, same time of day as the theme record, named `WORLD_Region_Quality_Date.png`, stored with the region's budget sheet.

---

## 13. Asset naming and upload discipline

Follow `07_Technical/Asset_Pipeline.md`:

- `ENV_` environment, `PLANT_` plant, `PROP_` interactive, `VFX_` effect, `ANCHOR_` invisible anchor.
- `CRE-###_CreatureName_AssetType_Variant`.
- Name for purpose, not map location.
- Upload once; reuse the asset ID.
- Record every uploaded ID in a separate asset registry. The repository concept art has no Roblox IDs and must never be treated as uploaded assets.
- Keep source files (Blender/Substance/etc.) outside the place; only import approved game-ready assets.

---

## 14. Production order for presentation

1. Materials and lighting proof on the greybox test region.
2. One complete environment kit for Auralis.
3. Three Auralis plants for the vertical slice.
4. Scanner, discovery and archive UI.
5. One creature (Mossback) with telegraph and encounter read.
6. Ability VFX for the three slice sets.
7. Mobile and low-quality passes.
8. Only then expand to more plants, creatures and worlds.

**Do not produce 50 plant models before the first three are proven in play.** The art pipeline must be validated by the loop, not by the asset count.

---

## 15. The presentation definition of done

A region, plant, creature or ability is presentation-complete when:

- It reads at gameplay distance and at the lowest supported graphics quality.
- It uses the approved palette and material language.
- It has a low-quality fallback that preserves gameplay information.
- It has been seen on a real mid-tier phone, not only a desktop.
- It has a screenshot or capture recorded with the budget sheet.
- It does not rely on default Roblox presentation anywhere.
- Its audio identity is distinguishable in a busy mix.
- It respects reduced motion and colour-independent cues.

Anything less is greybox with decoration.
