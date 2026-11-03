# VIREL — Project Hub

> Independent Roblox game project. This is the canonical VIREL design source of truth. AVENOR remains separate.

## Documentation structure

| Area | Folder | Purpose |
|---|---|---|
| Overview | [00_Overview](00_Overview/README.md) | Vision, pillars, decisions and core loop |
| Worlds | [01_Worlds](01_Worlds/README.md) | One detailed file per world |
| Plants | [02_Content/Plants](02_Content/Plants/README.md) | One detailed file per plant |
| Abilities | [03_Content/Abilities](03_Content/Abilities/README.md) | Individual abilities grouped by parent plant |
| Systems | [04_Systems](04_Systems/README.md) | Exploration, combat, scanning, research, progression |
| Presentation | [05_Presentation](05_Presentation/README.md) | Cinematics, visuals, animation, VFX and audio |
| Production | [06_Production](06_Production/README.md) | Roadmap, content pipeline and quality gates |
| Technical | [07_Technical](07_Technical/README.md) | Roblox architecture and performance |
| Templates | [Templates](Templates/README.md) | Standard content templates |

## Source-of-truth rules
1. Each world has one canonical specification under `01_Worlds/<World>/`.
2. Each plant has one canonical specification under `02_Content/Plants/<Plant>/`.
3. Each ability has an individual specification under `03_Content/Abilities/<Plant>/`.
4. Plant pages own set identity, rarity and unlock order. Ability pages own detailed mechanics and presentation.
5. Every ability links to its parent plant, and every plant links to every ability in its set.
6. Shared systems define global rules; content pages link to them instead of duplicating them.
7. Keep CONFIRMED, PROPOSAL and TBD clearly distinguished.

## Status labels
- **CONFIRMED:** explicitly selected direction.
- **PROPOSAL:** recommendation awaiting approval or testing.
- **TBD:** unresolved.
- **IN DEVELOPMENT:** implementation has started.
- **IMPLEMENTED:** built and verified in Roblox Studio.

## Initial content inventory
- 10 world concepts.
- 20 plant concepts.
- 0 individual ability concepts.

## Start here
- [Game vision](00_Overview/README.md)
- [Core loop](00_Overview/Core_Loop.md)
- [World directory](01_Worlds/README.md)
- [Plant directory](02_Content/Plants/README.md)
- [Ability directory](03_Content/Abilities/README.md)
- [Combat](04_Systems/Combat/README.md)
- [Roadmap](06_Production/Roadmap.md)
