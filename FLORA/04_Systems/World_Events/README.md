# World Events and Rotation

**Status:** PROPOSAL

## Event categories
- Weather shifts.
- Rare bloom windows.
- Migration or ecosystem activity.
- Temporary hidden-region openings.
- Cooperative world stabilisation events.
- Seasonal visual changes.

## Event lifecycle
1. Schedule or trigger a world condition on the server.
2. Publish a clear world-state identifier and start time.
3. Replicate only the state needed by nearby clients.
4. Update relevant plant habitats and encounter anchors.
5. End the event cleanly and restore stable world state.
6. Record eligible discoveries and rewards persistently.

## Rotation fairness
- Announce rotations in advance.
- Preserve discovery records and research progress.
- Keep essential progression available through return rotations or alternate routes.
- Do not require a player to be online at one exact hour.
- Archive retired world states and bring them back through predictable cycles.

## Technical rule
Use a small authoritative world-state record. Do not try to synchronise every particle, leaf or weather detail between all clients.

## Open decisions
Rotation cadence, active world count, event length, schedule and return rules remain TBD.
