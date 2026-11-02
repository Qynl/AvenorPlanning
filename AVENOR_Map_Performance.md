# AVENOR — Map Production & Performance Bible

> **Purpose:** This is the dedicated reference for designing, building and profiling every AVENOR map. Performance is a core design constraint, not a cleanup task at the end. The goal is a large world that feels dense and alive while remaining playable on supported Roblox devices, including lower- and mid-range mobile hardware.

## 1. Non-negotiable principles

1. Build and profile a small representative district before scaling the world.
2. Design around Roblox streaming; never assume the entire world is loaded on every client.
3. Prefer fewer, well-designed assets over huge counts of unique parts.
4. Keep server simulation separate from client-only presentation.
5. NPCs, physics, vehicles, particles, lights and network traffic all need explicit budgets.
6. Measure on real target devices and in multi-client server tests.
7. A map is not approved because it looks good in Studio on a powerful PC.
8. Never choose final map dimensions, player caps or NPC counts by guesswork. Establish them through repeatable tests.

## 2. World and region architecture

### 2.1 Modular world packages
- Build each world from named subregions with clear ownership and boundaries.
- Keep reusable systems (roads, doors, interaction points, NPC spawn definitions, discovery definitions) separate from art geometry.
- Use stable IDs for worlds, regions, landmarks, interiors and discoveries.
- Keep region manifests data-driven so systems can query what is active.
- Avoid one enormous monolithic model containing the whole world.

### 2.2 Streaming
- Configure and test Workspace streaming for the experience.
- Use sensible streaming targets and request critical nearby areas when needed, without forcing the entire map to load.
- Ensure spawn areas, roads, nearby landmarks and navigation-critical geometry arrive reliably.
- Interiors must stream before or as the player enters, with doors and transitions designed to avoid seeing unloaded spaces.
- Test streaming while sprinting, sliding, driving (if vehicles are approved), teleporting and moving between dense districts.
- Never rely on client-only streamed objects for authoritative rewards or combat validation.

### 2.3 Region boundaries
Each subregion needs:
- Region ID and world ID.
- Approximate bounds and streaming considerations.
- Landmark list.
- Interior list.
- NPC spawn and route definitions.
- Activity and discovery definitions.
- Lighting/audio profile.
- Performance budget and test notes.
- Optional event variants.

## 3. Geometry and asset budgets

- Reuse modular building kits, props, road pieces and environmental sets.
- Use MeshParts for appropriate complex static assets rather than constructing every detail from many individual Parts.
- Keep collision geometry simpler than visual geometry where possible.
- Use invisible or simplified collision only when needed; avoid dense decorative collision.
- Anchor static world geometry.
- Avoid unnecessary constraints and physics assemblies.
- Use unions sparingly and validate their collision and rendering cost.
- Avoid excessive tiny decorative parts, especially across large repeated areas.
- Use texture atlases/material reuse where appropriate.
- Use level-of-detail representations for distant structures and large landmarks.
- Reduce detail with distance while preserving silhouette and navigation readability.
- Avoid huge numbers of unique materials and transparent surfaces.
- Use terrain and foliage intentionally; dense vegetation can be expensive both visually and for collision.

No universal part-count target is declared here. Profile representative scenes and set budgets from measured device results.

## 4. NPC and simulation budgets

NPCs are among the highest-risk costs in AVENOR because the world is intended to feel populated.

### 4.1 Simulation tiers
- **Near / interactive:** full relevant state machine, navigation and interaction.
- **Mid-distance:** simplified movement or low-frequency state updates.
- **Far / off-screen:** abstract schedule or presence state; no continuous pathfinding.
- **Unneeded / unloaded:** despawn or store minimal state, unless persistence is explicitly required.

### 4.2 NPC rules
- Do not run PathfindingService continuously for every NPC.
- Recalculate routes only when needed and with throttling.
- Use authored waypoints for routine civilian/adventurer travel where practical.
- Stagger AI updates across frames.
- Use spawn/despawn zones and per-region/per-server budgets.
- Keep NPC physics simple; avoid unnecessary network ownership complexity.
- Avoid dozens of NPCs all reacting to the same event independently.
- Use one shared incident/faction state to coordinate group reactions.
- Make ambient NPCs cheaper than interactive or combat NPCs.
- Profile pathfinding, animation, physics and replication separately.

### 4.3 Population design
A world should feel populated through purposeful placement, audio, distant silhouettes and a small number of active characters, not by maximizing NPC count. Use activity clusters around settlements and points of interest rather than uniform population everywhere.

## 5. Server and client responsibilities

### Server-authoritative
- Weapon ownership and discovery grants.
- Damage, ammo and reload state.
- Currency, progression and rewards.
- Faction relationship changes that affect gameplay.
- Witness/incident records and consequential world reactions.
- Activity completion and shared event state.
- Vehicle ownership and permissions if implemented.

### Client presentation
- Cosmetic ambience and non-authoritative environmental effects.
- Local sound layering and camera feedback.
- Non-critical distant visual detail.
- UI and local animation presentation.

Do not replicate every decorative detail or every NPC thought to every player. Replicate meaningful state changes and nearby relevant actors.

## 6. Effects, lighting and audio

- Limit simultaneous dynamic lights, shadows and expensive post-processing.
- Prefer baked/static lighting approaches where suitable.
- Use distance-based effect quality and particle limits.
- Pool frequently reused temporary effects where practical.
- Avoid large transparent particle clouds and stacked transparent surfaces.
- Prioritize important combat and navigation audio over constant ambient layers.
- Use regional ambience with controlled layering.
- Provide scalable visual settings where feasible.
- Test day/night and weather variants because they can multiply rendering cost.

## 7. Terrain, roads and traversal

- Roads and traversal routes should be interesting without being excessively long.
- Use landmarks to make navigation intuitive.
- Build terrain with readable slopes and avoid unnecessary tiny collision changes.
- Ensure sprinting, jumping, sliding and slide-jumping work across region seams.
- Keep critical traversal routes clear of streaming gaps.
- If vehicles are later approved, prototype road width, turning, streaming lead distance and traffic simulation before building long road networks.
- Avoid populating every distant road with active traffic simulation.

## 8. Performance test scenes

Before full map production, build a benchmark place containing:
1. A dense urban street with interiors and layered props.
2. A forest with foliage, terrain and long sightlines.
3. An industrial facility with complex geometry and lighting.
4. A settlement with the target NPC archetypes and routes.
5. A mixed traversal route that stresses streaming at sprint speed.
6. A representative event scene with effects and multiple actors.

Test each scene alone, then combined.

## 9. Profiling and test matrix

Record at minimum:
- Client frame rate and frame-time consistency.
- Server frame time / simulation health.
- Memory use on client and server.
- Instance and asset load behaviour.
- Network send/receive traffic.
- NPC count, active AI count and pathfinding requests.
- Physics assemblies and active moving parts.
- Streaming misses or visible late loads.
- Join time and time to playable state.

Test:
- Low-end supported mobile device.
- Mid-range mobile device.
- Typical desktop.
- Weak network / elevated latency.
- One player and a realistic busy-server load.
- Peak event conditions, not only quiet exploration.

Use Roblox MicroProfiler, Developer Console, performance stats and server/client profiling tools. Save baseline captures so later changes can be compared.

## 10. Performance gates

A region cannot advance from greybox to art production until:
- Traversal works without major streaming holes.
- Server remains stable with the planned player and NPC test load.
- Client performance is acceptable on the minimum supported test device.
- Memory remains within the project's measured device budget.
- No single NPC, effect or script creates recurring frame spikes.
- The map remains navigable when many players gather in one location.
- The test is repeatable and results are recorded.

Exact numeric FPS, memory, player-count and NPC targets must be set after the first benchmark on chosen target devices. Do not invent universal guarantees.

## 11. Map production pipeline

1. **Concept:** define region identity, player fantasy, landmarks and unique exploration hook.
2. **Paper layout:** mark districts, routes, verticality, interiors, activity clusters and secrets.
3. **Greybox:** build simple terrain and blockout geometry only.
4. **Traversal test:** measure travel times and movement feel.
5. **Streaming test:** validate loading at realistic traversal speeds.
6. **Population test:** add representative NPCs and players.
7. **Performance benchmark:** record baseline data on target devices.
8. **Gameplay test:** verify discoveries, activities and encounters.
9. **Art pass:** add modular environment art within measured budgets.
10. **Regression pass:** repeat benchmarks after every major content pass.
11. **Release gate:** review quality, accessibility, navigation and performance together.

## 12. World-specific performance sheet

Every map must include a section recording:
- Target device tier.
- Test build/version.
- Region and subregion count.
- Approximate streamed content footprint.
- Dense-scene benchmark results.
- NPC population budget by simulation tier.
- Active effects and dynamic-light budget.
- Memory and frame-time measurements.
- Network and server load observations.
- Known bottlenecks and mitigations.
- Date and owner of last performance test.

## 13. Launch strategy

Do not build ten full worlds before proving the pipeline.

Recommended sequence:
- One compact Greyhaven district.
- Expand Greyhaven to a complete first world only after the district passes performance gates.
- Build a second, visually different world to prove reuse and variation.
- Validate rotation and shared world identity.
- Expand the remaining proposed worlds using the proven production pipeline.

The ten-world roster is a long-term content target, not a launch requirement.

## 14. Explicit anti-patterns

Do not:
- Put every world region into one unstreamed Workspace.
- Spawn all NPCs when the server starts.
- Run a per-frame loop for every NPC.
- Recompute every NPC path continuously.
- Use complex physics for static props.
- Add high-cost particle effects to every weapon and environment.
- Duplicate unique building assets where modular kits would work.
- test only in Studio on the developer's PC.
- add map size before proving traversal density and performance.
- Treat optimization as a final milestone rather than a continuous requirement.
