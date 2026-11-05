# Design Data

Structured exports of the design documents, for implementation agents and for generating Luau data modules. The markdown files remain the source of truth; this folder is derived and disposable.

**Regenerate:** `node 07_Technical/Data/generate.mjs` (no dependencies). Run it after editing any world, region, plant, ability or creature document.

`visual_themes.json` is the exception: it is edited by hand, because it holds technical art direction rather than document text. The generator never overwrites it.

## Files

| File | Contents | Rows |
|---|---|---|
| `worlds.json` | 10 worlds: id, slug, name, status, identity, palette, exploration identity, biomes, native plants, open design work, art count | 10 |
| `regions.json` | Every major and hidden region with world, kind, description, art path and image count | 60 |
| `plants.json` | 50 species: id, rarity, home world, habitat, identity, discovery clue, ability set presentation, ordered abilities | 50 |
| `abilities.json` | Every ability file: stable id, parent plant, set, position, role, concept, count of unresolved fields | 162 |
| `creatures.json` | 10 creatures: id, world, type, signature ability, visual identity, identification cues, art | 10 |
| `assets.json` | Every concept image: path, world/region/category or creature, source id, pixel size, bytes | 78 |
| `index.json` | Counts and coverage gaps from the last generation | 1 |
| `visual_themes.json` | Per-world lighting, atmosphere, grading, water, terrain colours and accent colours. **Hand-authored**, not generated | 10 |

## Field notes

- **`id` is stable.** `WORLD_001`, `PLANT_31`, `PLANT_31_A01`, `CRE-001`. Use these as Luau table keys and as saved-data keys. Never key saved data on names.
- **`status`** is copied from the document: `PROPOSAL`, `CONFIRMED` or similar. `00_Overview/Decisions.md` holds project-level confirmed decisions; a document-level proposal is not a confirmed design.
- **`null` means the document does not say**, and `"TBD"` means the document says TBD. Both are deliberate: they mark work that must not be guessed at by an implementation agent. `abilities[].openFields` counts the TBDs in that file.
- **`regions[].description`** comes from the world README's biome list. Region folders carry no separate prose.
- **`art.imageCount`** is the only reliable coverage measure; do not infer art from folder existence.
- **`assets[].sourceId`** is populated only for the six Auralis originals, whose source IDs are recorded in the world README.

## Current coverage

Generated counts: 10 worlds, 60 regions (6 without art), 50 plants (0 with art), 162 abilities (162 containing at least one TBD), 10 creatures (1 without art), 78 images.

The gaps are real design work, not export bugs. Before an agent implements anything it should check `index.json`, then read the specific document for the feature it is building.

## How to use it in Roblox

Generate Luau modules under `ReplicatedStorage/Shared/Config/` from these files rather than hand-copying values into scripts:

- `Worlds.lua` from `worlds.json` — region ids, palettes, plant anchors.
- `Plants.lua` from `plants.json` — rarity, habitat, discovery clue, ability ids in unlock order.
- `Abilities.lua` from `abilities.json` — stable ids, parent plant, set position, role.
- `Creatures.lua` from `creatures.json` — spawn world and encounter identity.
- `Assets.lua` from `assets.json` — optional reference manifest mapping art to regions; Roblox upload ids belong in a separate table once assets are uploaded, because this file describes repository art, not uploaded asset ids.

Keep the generated Luau free of behaviour. Systems read the tables; the tables never call systems.
