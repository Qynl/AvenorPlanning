# World Data and Place Architecture

**Status:** PROPOSAL

## Recommended starting architecture
Keep one Roblox experience with a small Hub place and separate World places. Each world place contains only its own environment assets and uses instance streaming inside that world.

Benefits:
- Each world loads only its own art and gameplay assets.
- Different worlds can use different lighting and environmental configuration.
- Large worlds can be profiled and updated independently.
- Hub and expedition experiences can have different performance budgets.

Trade-offs:
- Moving between worlds requires a teleport flow.
- Player data and world state must persist safely across places.
- Cross-world parties and reserved sessions need extra engineering.

## Alternative
A single place containing all worlds is simpler for a prototype but risks loading too many assets and complicates memory management. It may be suitable for an early test with one or two compact regions.

## Data boundaries
- Player progression is global to the experience.
- World-specific temporary state belongs to that world server.
- Shared world events use compact versioned state records.
- Plant and ability definitions use stable IDs shared across places.

## Teleport rules
- Validate party membership and destination on the server.
- Treat teleport data as routing context, not trusted proof of inventory or rewards.
- Load authoritative progression from persistent storage.
- Handle failed teleports and reconnects gracefully.

## Decision gate
Do not split into many places until the first playable world has been profiled. Confirm the architecture with a hub-to-world prototype and a reconnect test.
