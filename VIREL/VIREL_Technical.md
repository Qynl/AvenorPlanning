# VIREL — Roblox Technical Plan

## Purpose
Record implementation constraints early so the large world and many unique plant species remain feasible on Roblox.

## Architecture principles

- Server owns permanent discovery, research unlocks, inventory and progression validation.
- Client handles responsive UI, local scan presentation and cosmetic effects where safe.
- Never trust the client to award a rare discovery or permanent ability.
- Use data-driven species definitions rather than one-off scripts per plant.
- Keep world content modular and streamable.
- Separate design data from presentation assets.
- Profile on target mobile hardware from the beginning.

## Suggested data model

A species definition may include:
- Stable species ID.
- Display name and classification.
- Rarity enum.
- Habitat tags and environmental predicates.
- Discovery clue identifiers.
- Scanner information stages.
- Interaction definitions.
- Research requirements and outputs.
- Ability reference, if applicable.
- Asset references and presentation metadata.

Player persistent data may include:
- Schema version.
- Discovered species IDs.
- Per-species research state.
- Variant records.
- Unlocked ability IDs.
- Research rank and archive milestones.
- Settings and accessibility preferences.

Exact schemas should be designed after the prototype, not prematurely frozen.

## World and spawning

- Use region/biome definitions and controlled spawn points or habitat volumes.
- Evaluate environmental conditions on the server or through server-validated state.
- Avoid thousands of constantly active per-plant scripts.
- Consider pooled or event-driven interactions.
- Use deterministic or server-seeded discovery logic where fairness matters.
- Ensure rare discoveries cannot be duplicated or claimed through client spoofing.

## Persistence

- Save in bounded, versioned structures.
- Batch writes and handle throttling.
- Validate all IDs and progression transitions.
- Support schema migration.
- Avoid saving every scan-frame or transient visual event.
- Handle disconnects during research and rewards safely.

## Performance

- Use StreamingEnabled and test region transitions.
- Use LOD and simplified distant vegetation.
- Reuse meshes, materials, textures and effects.
- Avoid excessive unique parts and particle emitters.
- Use client-side cosmetic detail with server-owned gameplay state.
- Set budgets for active interactive plants per region.
- Test memory, frame time and network replication on mobile.

## Security and fairness

- Server validates scan range, target identity, interaction eligibility and research requirements.
- Rate-limit scan and interaction requests.
- Do not let client-reported rarity or environmental conditions determine rewards.
- Validate ability unlocks and equip requests.
- Protect against duplicate reward claims and replayed requests.

## Open technical decisions

Engine asset pipeline, terrain strategy, exact region streaming, data-store layout, party architecture, analytics and moderation integration remain TBD.
