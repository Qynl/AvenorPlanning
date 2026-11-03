# VIREL — Ability Directory

Every ability belongs to exactly one plant ability set. Ability documents are grouped by their parent plant so the relationship is visible in the folder structure.

## Plant ability sets

- **[Driftleaf](./driftleaf/README.md)** (Natural, Windweave) — 0 abilities
- **[Sunspool](./sunspool/README.md)** (Natural, Sunthread) — 0 abilities
- **[Threadroot](./threadroot/README.md)** (Natural, Rootcall) — 0 abilities
- **[Echofern](./echofern/README.md)** (Distinct, Resonance) — 0 abilities
- **[Emberlace](./emberlace/README.md)** (Distinct, Cinderbloom) — 0 abilities
- **[Ashen Crown](./ashen-crown/README.md)** (Relic, Magma Crown) — 0 abilities
- **[Brineglass](./brineglass/README.md)** (Unusual, Brinecraft) — 0 abilities
- **[Tideglass](./tideglass/README.md)** (Distinct, Tidal Form) — 0 abilities
- **[Frostwaker](./frostwaker/README.md)** (Ancient, Pale Winter) — 0 abilities
- **[Stormbell](./stormbell/README.md)** (Forgotten, Tempest Choir) — 0 abilities
- **[Mistbell](./mistbell/README.md)** (Unusual, Veilmist) — 0 abilities
- **[Moonlace](./moonlace/README.md)** (Forgotten, Moonveil) — 0 abilities
- **[Pebblecup](./pebblecup/README.md)** (Natural, Stonewell) — 0 abilities
- **[Veil Orchid](./veil-orchid/README.md)** (Ancient, Mirage Bloom) — 0 abilities
- **[Glowcap](./glowcap/README.md)** (Unusual, Lumen Spores) — 0 abilities
- **[Stoneheart Moss](./stoneheart-moss/README.md)** (Ancient, Bedrock) — 0 abilities
- **[Springvine](./springvine/README.md)** (Unusual, Wildcoil) — 0 abilities
- **[Skydrift](./skydrift/README.md)** (Relic, Aetherwing) — 0 abilities
- **[Worldroot](./worldroot/README.md)** (Origin, Worldweave) — 0 abilities
- **[Firstlight](./firstlight/README.md)** (Origin, Genesis) — 0 abilities

## Rules
1. A plant file defines the set identity, theme, rarity and unlock sequence.
2. An ability file defines one ability's detailed behaviour, role, visuals, audio, cooldown placeholder and counterplay.
3. Every ability file links to its parent plant file.
4. Every plant file links to every ability in its set.
5. Do not create orphan abilities. An ability without a parent plant is invalid.
6. Ability IDs are stable identifiers. Renaming the display name does not require changing the ID without an explicit migration.

## Shared standards
- [Ability design standard](../../04_Systems/Abilities/README.md)
- [Combat system](../../04_Systems/Combat/README.md)
- [Ability template](../../Templates/Ability_Template.md)
