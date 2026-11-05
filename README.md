# FLORA: BEYOND THE ORIGINS — Project Hub

> Independent Roblox adventure project. **FLORA** is the main title; **BEYOND THE ORIGINS** is its subtitle. This is the canonical design source of truth. AVENOR remains separate.

## Project identity

- **Main title:** FLORA
- **Full title:** FLORA: BEYOND THE ORIGINS
- **Platform:** Roblox
- **Genre:** Large-scale exploration adventure with botanical discovery, plant-powered abilities and encounters.
- **Camera:** Third-person gameplay with cinematic framing for important discoveries.
- **Visual direction:** Stylized realism.

## Start here — implementation agents

If you are an AI or a developer about to build anything, read these five things in order. They exist so you do not have to read 400 documents or guess at undecided design.

1. [`AGENTS.md`](AGENTS.md) — non-negotiables, stable IDs, what blocks implementation.
2. [`plan/AI_MASTER_INSTRUCTIONS.md`](plan/AI_MASTER_INSTRUCTIONS.md) — authority, the implementation loop and the required completion report.
3. [`07_Technical/README.md`](07_Technical/README.md) — architecture, streaming, asset pipeline and world data.
4. [`07_Technical/Data/README.md`](07_Technical/Data/README.md) — every world, region, plant, ability, creature and image as JSON.
5. [`07_Technical/Materials_And_Lighting.md`](07_Technical/Materials_And_Lighting.md) — the visual baseline a built region must meet.

For the execution plan — launch scope, world build order, budgets, QA gates and paste-ready agent task packets — see [`GameplanningFreebuff/`](GameplanningFreebuff/README.md). It expands the existing production roadmap into an 18-month plan and does not replace any source document.

The short version: documentation is the source of truth, `TBD` means undecided rather than an invitation to invent, stable IDs (`WORLD_001`, `PLANT_31`, `PLANT_31_A01`, `CRE-001`) are contracts, and no default Roblox materials, sky or lighting may ship.

## Documentation structure

| Area | Folder | Purpose |
|---|---|---|
| Overview | [00_Overview](00_Overview/README.md) | Vision, pillars, decisions and core loop |
| Worlds | [01_Worlds](01_Worlds/README.md) | World and biome specifications |
| Plants | [02_Content/Plants](02_Content/Plants/README.md) | Plant identities and research |
| Creatures | [02_Content/Creatures](02_Content/Creatures/README.md) | Creature identities, abilities and concept-art sorting |
| Abilities | [03_Content/Abilities](03_Content/Abilities/README.md) | Individual abilities grouped by plant |
| Systems | [04_Systems](04_Systems/README.md) | Exploration, combat, scanning, research and progression |
| Presentation | [05_Presentation](05_Presentation/README.md) | Visuals, cinematics, animation, VFX and audio |
| Concept art | [05_Presentation/Concept_Art](05_Presentation/Concept_Art/README.md) | Every image in the project, organised by world, region, plant and creature |
| Production | [06_Production](06_Production/README.md) | Roadmap, content pipeline and quality gates |
| AI build plan | [plan](plan/README.md) | Build instructions, roadmap and planning hub for implementation agents |
| Technical | [07_Technical](07_Technical/README.md) | Roblox architecture and performance |
| Templates | [Templates](Templates/README.md) | Standard content templates |

## Where images live

All concept art has exactly one home: [`05_Presentation/Concept_Art/`](05_Presentation/Concept_Art/README.md). There are no per-world duplicate image trees elsewhere in the repository. The library currently holds **78 supplied images**: 69 environment images across the ten worlds and 9 creature sheets.

| What you are looking for | Path |
|---|---|
| A region's art | `05_Presentation/Concept_Art/Worlds/<world-slug>/Major_Biomes/<Region_Name>/` or `.../Hidden_Sub_Biomes/<Region_Name>/` |
| A world's overall art | `Worlds/<world-slug>/World_Panorama/`, `World_Moodboard/`, `Landmarks/`, `Materials_Props/`, `Weather_Atmosphere/`, `Ecosystem Events/`, `World_Map/` |
| A plant specimen | `05_Presentation/Concept_Art/Plants/<plant-slug>/` — 50 folders, currently empty |
| A creature | `05_Presentation/Concept_Art/03_Creatures_and_Encounters/<Creature>/` — files use the `CRE-###_Name` prefix |
| Ability VFX | `05_Presentation/Concept_Art/02_Abilities_VFX/<ability-set>/` — empty scaffolding |
| Maps and layouts | `05_Presentation/Concept_Art/11_Maps_and_Diagrams/` — empty; prompts only |
| Logo, palette, UI, characters, props, cinematics, hub, events, style boards | `00_Game_Identity/`, `06_UI_UX/`, `04_Characters/`, `05_Equipment_and_Props/`, `07_Cinematics/`, `08_Social_Hub/`, `09_World_Events/`, `10_Reference_Boards/` |

Every region folder has the same eight category subfolders: `01_Hero_Views`, `02_Alternate_Views`, `03_Aerial_and_Topdown`, `04_Landmarks`, `05_Flora_and_Fauna`, `06_Environment_Details`, `07_Lighting_and_Atmosphere`, `08_Secrets_and_Discoveries`.

Rules for using and adding art:

- Supplied originals are `.jpg`; new generations are `.png` named `World_Region_Subject_View_V01.png`. Keep originals unchanged and save edits as new versions.
- Each world README records which source image landed in which folder. Auralis keeps its six originals' source-ID table in [`Worlds/auralis/README.md`](05_Presentation/Concept_Art/Worlds/auralis/README.md).
- Art is reference, not canonical design. If an image and a specification disagree, the specification wins.
- **Six regions have no art yet:** Auralis `Windstep_Prairie` and `Rainmirror_Pools`, Myrrwood `Still_Canopy`, Nacre Hollow `Pearlreed_Flats`, Sereglass `Glasswind_Vault`, Zephyr Crown `Updraft_Wells`.
- **No plant art exists yet**, and Thornrunner is the only creature without a sheet.

Generation prompts for everything missing are already written: [`PROMPT_PACK.md`](05_Presentation/Concept_Art/PROMPT_PACK.md) (master index and the six empty regions), [`Plants/PROMPTS.md`](05_Presentation/Concept_Art/Plants/PROMPTS.md), [`11_Maps_and_Diagrams/PROMPTS.md`](05_Presentation/Concept_Art/11_Maps_and_Diagrams/PROMPTS.md) and [`Thornrunner/PROMPTS.md`](05_Presentation/Concept_Art/03_Creatures_and_Encounters/Thornrunner/PROMPTS.md).

## Machine-readable design data

[`07_Technical/Data/`](07_Technical/Data/README.md) exports the design documents as JSON so an agent can load the catalogue instead of reading the whole repository: `worlds.json` (10), `regions.json` (60), `plants.json` (50), `abilities.json` (162), `creatures.json` (10) and `assets.json` (78 images with path, world, region, category, size and source ID). `index.json` reports the current coverage gaps.

Regenerate after editing any design document — the JSON is derived, never hand-edited:

```bash
node 07_Technical/Data/generate.mjs
```

## Visual baseline

Style words alone do not build a world. [`07_Technical/Materials_And_Lighting.md`](07_Technical/Materials_And_Lighting.md) defines the Roblox-level requirements — terrain material colours, part material mapping, `SurfaceAppearance` rules, lighting, atmosphere, grading, water and the audit that catches the default look — and [`07_Technical/Data/visual_themes.json`](07_Technical/Data/visual_themes.json) holds the exact per-world values. A region built with default Plastic, default sky or Voxel lighting is not finished.

## Source-of-truth rules

1. Each world has one canonical specification under `01_Worlds/<World>/`.
2. Each plant has one canonical specification under `02_Content/Plants/<Plant>/`.
3. Each creature has one canonical visual and identity specification under `02_Content/Creatures/<Creature>/`.
4. Each ability has an individual specification under `03_Content/Abilities/<Plant>/`.
5. Plant pages own set identity, rarity and unlock order. Ability pages own detailed mechanics and presentation.
6. Every ability links to its parent plant, and every plant links to every ability in its set.

## Naming and asset identity

- Player-facing title: **FLORA: BEYOND THE ORIGINS**
- Short title: **FLORA**
- Use `FLORA` for new project-level asset IDs, documentation labels and generated asset filenames.
- The repository folder remains `VIREL/` for path continuity only; the player-facing game name is FLORA. New asset IDs and documentation labels use `FLORA`. Do not change unrelated AVENOR identifiers.

## Project status

The concepts and specifications in this repository are planning material. A documented feature is not automatically implemented in Roblox Studio.

What does not exist yet, and therefore cannot be extended by an implementation agent:

- No `.rbxl`, Rojo project, Luau module or Roblox asset ID anywhere in the repository.
- No map layouts: `World_Map` folders and `11_Maps_and_Diagrams/` are empty and no region has been greyboxed.
- No plant art, no world maps and no region art for the six regions listed above.
- 162 ability files still contain `TBD` fields; 66 have no confirmed gameplay role and 6 record none at all.
- Persistence, combat roster, co-op rules and economy remain open in [`00_Overview/Decisions.md`](00_Overview/Decisions.md).

A world that already exists outside this repository must be swept against the visual baseline before it is treated as representative of the project.
