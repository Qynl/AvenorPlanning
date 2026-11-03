# FLORA: BEYOND THE ORIGINS — Project Hub

> Independent Roblox adventure project. **FLORA** is the main title; **BEYOND THE ORIGINS** is its subtitle. This is the canonical design source of truth. AVENOR remains separate.

## Project identity

- **Main title:** FLORA
- **Full title:** FLORA: BEYOND THE ORIGINS
- **Platform:** Roblox
- **Genre:** Large-scale exploration adventure with botanical discovery, plant-powered abilities and encounters.
- **Camera:** Third-person gameplay with cinematic framing for important discoveries.
- **Visual direction:** Stylized realism.

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
| Production | [06_Production](06_Production/README.md) | Roadmap, content pipeline and quality gates |
| Technical | [07_Technical](07_Technical/README.md) | Roblox architecture and performance |
| Templates | [Templates](Templates/README.md) | Standard content templates |

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
- Existing `VIREL` identifiers are legacy references and should be migrated when their specific asset or document is next touched. Do not silently change unrelated AVENOR identifiers.

## Project status

The concepts and specifications in this repository are planning material. A documented feature is not automatically implemented in Roblox Studio.
