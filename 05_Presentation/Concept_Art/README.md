# VIREL — Complete Concept Art Library

Central visual library for all 10 worlds, 30 major biomes, 30 hidden sub-biomes, all 50 plants and the wider game's presentation.

## Worlds
- [Auralis](Worlds/auralis/README.md)
- [Myrrwood](Worlds/myrrwood/README.md)
- [Caldera Reach](Worlds/caldera-reach/README.md)
- [Pelagora](Worlds/pelagora/README.md)
- [Veyr Peaks](Worlds/veyr-peaks/README.md)
- [Nacre Hollow](Worlds/nacre-hollow/README.md)
- [Sereglass](Worlds/sereglass/README.md)
- [Umbra Deep](Worlds/umbra-deep/README.md)
- [Zephyr Crown](Worlds/zephyr-crown/README.md)
- [The First Garden](Worlds/the-first-garden/README.md)

## Global categories
- `00_Game_Identity/`: Logo, title treatments, brand language, global palette and visual identity.
- `Plants/`: All 50 plant species: hero specimens, alternate angles, silhouettes, details, scale and growth stages.
- `02_Abilities_VFX/`: Every plant ability: activation, effect shape, trails, impact, area effects and complete ability-set visual identity.
- `03_Creatures_and_Encounters/`: Creature silhouettes, behavior concepts, encounter scenes and environmental threats.
- `04_Characters/`: Player silhouettes, outfits, exploration gear, poses and animation reference.
- `05_Equipment_and_Props/`: Scanners, research tools, traversal objects, collectibles and world-interaction props.
- `06_UI_UX/`: HUD, scanner, research archive, plant collection, ability loadouts, maps, menus and interface states.
- `07_Cinematics/`: World arrivals, discovery reveals, plant research sequences, ability unlocks and major story moments.
- `08_Social_Hub/`: Hub spaces, travel gates, gathering areas and social locations.
- `09_World_Events/`: World rotation reveals, rare environmental states, event staging and reward presentation.
- `10_Reference_Boards/`: Shared palette sheets, material boards, lighting references, composition studies and style anchors.
- `11_Maps_and_Diagrams/`: Global world network, world maps, region layouts, route maps and visual system diagrams.

## Plants
All 50 canonical plant folders are under `Plants/<plant-slug>/`.

## Region structure
Every major and hidden region has its own folder and eight subfolders: hero views, alternate views, aerial/top-down, landmarks, flora/fauna, environmental details, lighting/atmosphere and secrets/discoveries.

## Generation prompts
[Prompt Pack](PROMPT_PACK.md) holds copy-paste prompts for the art that is still missing: the six empty regions, all 50 plant specs, the ten world maps, the per-region top-downs and the Thornrunner sheet.

## Image handling
Store generated images directly in their matching folders. Use `World_Region_Subject_View_V01.png`. Keep original generations unchanged and save edits as new versions. Mark selected/approved images in notes. Concept art is reference, not automatic canonical design.

Each world README records which source image landed where. Auralis keeps its six originals in the region folders under [`Worlds/auralis/`](Worlds/auralis/README.md). All supplied originals are filed under `Worlds/<world>/…/` by region and category, and under `03_Creatures_and_Encounters/<creature>/` using the `CRE-###_Name` prefix from each creature spec.
