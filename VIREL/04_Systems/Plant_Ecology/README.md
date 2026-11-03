# Plant Ecology System

**Status:** PROPOSAL  
**Purpose:** Make plants feel like species that belong to functioning ecosystems rather than static collectibles.

## Ecology model
Each plant definition should describe:
- Native world and biome.
- Preferred environmental conditions.
- Visible growth stages or behaviour states.
- Nearby environmental clues.
- Interactions with weather, light, water, temperature or terrain.
- Whether the species is common, rare or tied to a special event.

## Spawn and population rules
1. Define a small number of valid habitat zones for each species.
2. Spawn from authored habitat anchors or deterministic region data.
3. Use weighted selection within valid habitats, not random placement across the entire map.
4. Keep discovery-critical specimens reproducible and recoverable.
5. Do not respawn a player's already-recorded discovery as if it were new.
6. Use server-owned population state for shared rare specimens.

## Living behaviour
- Use a few readable states such as dormant, active, reacting and recovering.
- Change behaviour in response to meaningful world conditions.
- Prefer event-driven state changes over scripts checking every plant every frame.
- Nearby plants can share simple signals, but avoid simulating every organism continuously.

## Rarity and fairness
- Rarity controls discovery difficulty and ability-set strength.
- Rare plants need multiple discovery routes or reliable return windows.
- World rotation must not permanently delete access to essential progression.
- Archive records remain permanent.

## Data model
PlantDefinition: PlantId, WorldId, BiomeIds, Rarity, HabitatTags, DiscoveryProfileId, AbilitySetId, EcologyProfileId.

## Open decisions
Population density, server authority boundaries, growth simulation depth and exact respawn rules require prototype testing.
