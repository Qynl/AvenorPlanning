# Map Performance and Optimisation

**Status:** TECHNICAL BASELINE  
**Goal:** Make VIREL's large worlds perform reliably across desktop, mobile and lower-end devices.

## Core principle
Do not wait until a world is finished to optimise it. Build a small test region, profile it, then add content while measuring the cost.

## 1. Enable and test instance streaming
For large worlds, use Workspace instance streaming. New places have it enabled by default, but verify the actual place settings in Studio.

Recommended starting configuration from Roblox's current streaming guidance:
- `Workspace.StreamingEnabled = true` (set in Studio; this property is not scriptable).
- `Workspace.ModelStreamingBehavior = Improved`.
- `Workspace.StreamingIntegrityMode = PauseOutsideLoadedArea`.
- Keep the default `StreamingMinRadius` of 64 studs as a starting point.
- Keep the default `StreamingTargetRadius` of 1024 studs as a starting point.
- Consider `StreamOutBehavior = Opportunistic` to let memory pressure unload content more aggressively.
- Consider SLIM level-of-detail for static models where supported.

These are starting recommendations, not magic settings. Test with the actual world layout and target devices. See [Roblox instance streaming](https://create.roblox.com/docs/workspace/streaming) and [streaming techniques](https://create.roblox.com/docs/workspace/streaming/techniques).

## 2. Reduce draw calls and unique assets
- Reuse the same mesh asset instead of importing visually identical copies with different asset IDs.
- Reuse textures and materials; tint shared assets when appropriate.
- Build modular kits and duplicate them in Studio.
- Use packages for reusable environment assets.
- Avoid excessive unique decals, textures and particle systems.
- Check Render Stats when looking at dense areas.

Roblox explains draw calls, instancing and reuse in [Improve performance](https://create.roblox.com/docs/performance-optimization/improve).

## 3. Control geometry
- Use appropriate mesh detail for the distance at which players see an object.
- Prefer Automatic or Performance render fidelity when the visual result is acceptable.
- Use simple collision shapes for decorative objects.
- Use custom invisible collision helpers for large complex meshes where needed.
- Disable CanCollide, CanTouch and CanQuery on objects that do not need those behaviours.
- Anchor static environment parts.
- Avoid unnecessary moving assemblies and complicated constraints.

Do not chase a universal triangle or part-count limit. Profile representative scenes and devices.

## 4. Control foliage and effects
- Use reusable foliage clusters rather than thousands of individually animated leaves.
- Avoid placing large numbers of overlapping semi-transparent layers.
- Keep particle emitters local to the player or nearby active areas.
- Reduce particle rate, lifetime and view distance at lower quality settings.
- Avoid every plant running its own continuous update loop.
- Prefer a few shared ambient systems with local variation.

## 5. Lighting and shadows
- Use a small number of meaningful shadow-casting lights.
- Disable CastShadow on tiny decorative parts when it does not improve the scene.
- Avoid excessive overlapping lights and transparent fog layers.
- Test the same scene at several graphics quality levels.
- Keep important gameplay cues visible even when shadows and effects are reduced.

## 6. Physics and collision
- Anchor scenery that never moves.
- Avoid unnecessary constraints and moving assemblies.
- Use Box or Hull collision fidelity when the detailed mesh collision is not needed.
- Do not use precise collision on every decorative mesh.
- Turn off touch/query/collision on visual-only details.
- Keep moving gameplay objects simple.

## 7. Scripts and runtime work
- Prefer events and state changes over per-frame polling.
- Do not run a Heartbeat loop for every plant.
- Update weather and ecology at controlled intervals.
- Pool temporary visual objects where appropriate.
- Clean up temporary effects reliably.
- Avoid repeated full Workspace scans.
- Keep client-only particles and camera effects on the client.

## 8. Memory and asset loading
- Keep ReplicatedStorage lean.
- Store large server-only templates in ServerStorage.
- Load optional assets only when needed.
- Use streaming for large Workspace content.
- Avoid keeping every world loaded in one place.
- Compress and resize textures to match their actual on-screen use.

## 9. Profile the real bottleneck
Measure separately:
- Client rendering and GPU cost.
- Client script time.
- Server script time.
- Physics time.
- Memory by category.
- Network send/receive.
- Join and region-streaming time.

Use Roblox MicroProfiler, Developer Console and Render Stats. A visual stutter, low FPS and server delay are different problems and need different fixes.

## Performance acceptance test
Every biome must be tested:
- At low, medium and high graphics settings.
- On a representative mobile device.
- With several players nearby.
- During the heaviest plant ability presentation.
- While entering and leaving streamed regions.
- During an encounter and a world event.

Record measurements before and after major changes. Never label a map optimised based only on how it feels on the developer's PC.
