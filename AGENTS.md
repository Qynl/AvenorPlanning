# Agent Guide — FLORA: Beyond the Origins

Read this before changing anything. This repository is the **design and planning source of truth** for a Roblox exploration game. It contains no Roblox project, no Luau and no place file. An agent starting implementation is generating the game from these documents, not extending existing code.

## Read order

1. `00_Overview/README.md` and `00_Overview/Decisions.md` — confirmed decisions vs open questions.
2. `plan/AI_MASTER_INSTRUCTIONS.md` — build rules, authority, and the implementation loop.
3. `07_Technical/README.md` — architecture, streaming, asset pipeline, world data.
4. `07_Technical/Materials_And_Lighting.md` — required visual baseline for any built world.
5. `07_Technical/Data/README.md` — machine-readable exports and stable IDs.
6. The specific world, plant, ability or creature document for the task.

## Non-negotiables

- **Never ship default presentation.** No `Plastic`/`SmoothPlastic` on surfaces above ~4 studs, no default sky at the horizon, no Voxel lighting, no single flat terrain colour. Follow `07_Technical/Materials_And_Lighting.md` and apply the world's record from `07_Technical/Data/visual_themes.json`.
- **Do not invent lore, names, mechanics, geography, rarity or monetization.** If a source says `TBD`, it is undecided. Ask one focused question or leave it unimplemented.
- **Label claims** as CONFIRMED, PROPOSED or OPEN. A proposal in a document is not approval.
- **Stable IDs are contracts.** `WORLD_001`, `PLANT_31`, `PLANT_31_A01`, `CRE-001` are used as data keys. Never renumber or re-key them.
- **Never mass-reformat or rename existing files as cleanup.** Small, reviewable changes only.
- **Documentation wins.** If code and documents disagree, the document defines intent; report the conflict instead of silently following the code.
- Work on the requested branch, never `main`, unless explicitly asked.

## Layout

```text
00_Overview/      project identity, core loop, decisions
01_Worlds/        10 world specs (biomes, species, map requirements)
02_Content/       50 plants and 10 creature specs
03_Content/       ability sets and individual abilities
04_Systems/       progression, exploration, worlds, economy
05_Presentation/  concept art library and prompts
06_Production/    pipeline, quality gates, roadmap
07_Technical/     architecture and design data
plan/             AI build instructions and planning hub
```

## Structured data

`07_Technical/Data/` holds JSON exports of every world, region, plant, ability and creature, plus an asset manifest. Regenerate with:

```bash
node 07_Technical/Data/generate.mjs
```

Use it instead of reading 400 markdown files into context. `index.json` reports the current coverage gaps. The JSON is derived — edit the markdown, then regenerate; never hand-edit the JSON.

## When building the Roblox project

- Follow `07_Technical/Roblox_Studio_Project_Structure.md` for the place and Explorer layout, and `07_Technical/Server_Client_Architecture.md` for authority.
- Server owns state; treat every client remote as untrusted. Validate type, range, ownership, cooldown and state transition.
- Use `StreamingEnabled` per `07_Technical/Instance_Streaming.md`; worlds are enormous and must stream.
- Keep content definitions data-driven and free of behaviour.
- Build a greybox per biome before art; `01_Worlds/<world>/README.md` lists map production requirements.
- Concept art is reference only. It is illustration, not tileable textures or meshes, and it carries no Roblox asset ids.

## What blocks implementation today

- No `.rbxl`, Rojo project, Luau module or asset id exists anywhere in this repository.
- No map layouts: `World_Map` and `11_Maps_and_Diagrams` are empty; region greyboxes are unbuilt.
- No built world exists in this repository, so the visual baseline is not yet applied anywhere; a world that already exists outside it must be swept using the remediation order in `Materials_And_Lighting.md`.
- 20 abilities have no confirmed gameplay role and 162 ability files still contain `TBD` fields.
- Plant art does not exist yet; prompts are in `05_Presentation/Concept_Art/Plants/PROMPTS.md`.
- Persistence, combat roster, co-op rules and economy remain open in `00_Overview/Decisions.md`.

## Verification

There is no build, test suite or linter. For documentation changes, check internal links resolve and any generated JSON still parses. For Roblox work, test in Studio and state exactly what was run; never claim behaviour was tested when it was only written.
