# Discovery Archive

**Status:** PROPOSAL

## Purpose
The archive is the player's permanent scientific record of VIREL. It tracks discoveries, research, observations and mastery independently of temporary world rotations.

## Record structure
- Plant ID and discovery state.
- First discovery timestamp.
- Confirmed habitat and world.
- Research milestones completed.
- Ability unlocks.
- Observation notes and optional rare variants.
- Mastery progress and rewards.

## Discovery states
Unknown → Observed → Scanned → Investigated → Recorded → Researched → Mastered.

The player should always understand the next meaningful step. Do not make every plant a checklist of dozens of repetitive tasks.

## UI
- World and biome filters.
- Rarity and research filters.
- Plant detail page with model, clues, ecology and ability set.
- Clear difference between unknown information and confirmed facts.
- Accessibility for colour, text size and motion.

## Persistence
The server validates each transition and saves compact IDs and state. Avoid saving entire 3D models or large repeated data blobs. Use versioned player data and safe migrations.

## Fairness
A recorded plant remains recorded when a world rotates out. A returning world may offer new observations, but must not erase old progress.
