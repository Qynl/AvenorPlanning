# Discovery Archive

**Status:** PROPOSAL

## Purpose
The Discovery Archive is the player's permanent record of FLORA. It tracks plant ownership, first scans, further research, ability unlocks and mastery independently of temporary world rotations.

## Plant acquisition
A player acquires a plant by finding it in the world and successfully scanning it. The first successful scan:
- Adds the plant to the permanent collection.
- Creates its Archive record.
- Registers the confirmed discovery location and habitat.
- Grants ownership of the plant's complete, predefined ability set.

The player does not need to finish further research to own the plant or its set.

## Record structure
- Plant ID and ownership/discovery state.
- First scan timestamp.
- Confirmed habitat and world.
- Scan observations and confirmed facts.
- Research milestones completed.
- Ability unlock states for the plant's set.
- Additional observation notes and optional rare variants.
- Mastery progress and rewards.

## Progress states
Undiscovered → Scanned / Acquired → Researching → Fully Researched → Mastered.

Ability unlocks are tracked separately within the research state, because a plant can be owned while some of its abilities remain locked.

## UI
- World and biome filters.
- Rarity and research filters.
- Plant detail page with model, clues, ecology and complete ability set.
- Clear distinction between owned plants, locked/unlocked abilities, unknown information and confirmed facts.
- Visible next research milestone and progress.
- Accessibility for colour, text size and motion.

## Persistence
The server validates each transition and saves compact IDs and state. Avoid saving entire 3D models or large repeated data blobs. Use versioned player data and safe migrations.

## Fairness
A scanned plant remains owned and recorded when a world rotates out. A returning world may offer new observations, but must not erase old progress.
