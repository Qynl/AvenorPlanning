# Profiling and Performance Testing

**Status:** REQUIRED DEVELOPMENT PRACTICE

## Test early
Create a small representative test map before building all ten worlds. Include dense foliage, one cave, water, moving environmental effects, a plant ability and several players.

## Tools
- Roblox MicroProfiler for frame-time investigation.
- Developer Console for client/server performance and memory.
- Render Stats for draw-call and rendering inspection.
- Studio device emulation and real-device tests.
- Network simulation for latency and packet-loss behaviour.

Official guides:
- https://create.roblox.com/docs/performance-optimization
- https://create.roblox.com/docs/performance-optimization/identify
- https://create.roblox.com/docs/performance-optimization/improve

## Performance investigation loop
1. Reproduce the problem in a known test scene.
2. Identify whether the issue is client rendering, client scripts, server scripts, physics, memory or network.
3. Capture a baseline.
4. Change one major factor at a time.
5. Capture the same measurement again.
6. Test on the weakest supported target device.
7. Record the result and avoid regressions.

## Required test scenes
- Dense forest clearing.
- Large open vista.
- Underground cave with many lights.
- Underwater area with particles.
- Busy plant habitat.
- High-intensity ability presentation.
- Several players in one encounter.
- Fast traversal across a streamed boundary.

## Release gate
No biome is approved based only on a developer desktop. Every world needs a documented low-end test, memory check, join-time check and multiplayer check.
