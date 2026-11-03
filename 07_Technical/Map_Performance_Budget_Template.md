# Map Performance Budget Template

Copy this page for every biome or major region. Values should be measured in Studio and on representative devices; do not invent targets before the first prototype baseline exists.

## Region identity
- World:
- Biome:
- Region ID:
- Approximate playable footprint:
- Main landmarks:
- Streaming boundaries:
- Test device(s):

## Rendering
- Typical draw calls:
- Peak draw calls:
- Unique mesh assets visible:
- Shadow-casting lights:
- Transparent/particle-heavy areas:
- Lowest tested graphics quality:
- Observed frame-time issue:

## Memory
- Client total memory:
- Graphics mesh memory:
- Texture memory:
- Audio memory:
- Physics memory:
- Peak memory during region transition:

## Physics
- Active moving assemblies:
- Complex collision meshes:
- Unanchored decorative objects:
- Collision fidelity exceptions:
- Observed physics spike:

## Scripts and networking
- Client script time:
- Server script time:
- Active periodic loops:
- Remote events per second during peak:
- Encounter replication payload:
- Observed server or network spike:

## Streaming
- Streaming settings used:
- Time to load first playable area:
- Missing content during fast traversal:
- Stream-out/stream-in issues:
- Persistent models and reason:

## Test scenarios
- [ ] Normal exploration.
- [ ] Fast traversal across the region.
- [ ] Highest-density foliage view.
- [ ] Plant ability effects active.
- [ ] Encounter with multiple players.
- [ ] Low graphics quality.
- [ ] Mobile device.
- [ ] Rejoin or respawn near a region boundary.

## Findings and actions
| Issue | Evidence | Root cause | Change made | Retest result |
|---|---|---|---|---|
| | | | | |

## Approval
- Performance reviewed by:
- Date:
- Remaining risks:
- Status: NOT TESTED / NEEDS WORK / ACCEPTED
