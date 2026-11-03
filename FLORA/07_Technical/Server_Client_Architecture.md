# Server and Client Architecture

**Status:** PROPOSED

## Authority boundaries
The server owns:
- Player inventory and plant ownership.
- Research and discovery records.
- Ability unlocks and cooldown validation.
- Encounter state and rewards.
- Shared world events and ecology state.
- Persistent player data.

The client owns:
- Camera and input presentation.
- HUD and archive UI.
- Cosmetic particles, local ambience and non-authoritative animation.
- Immediate input feedback while waiting for server confirmation.

## Remote communication
- Define a small set of RemoteEvents and RemoteFunctions with clear contracts.
- Validate every client request on the server.
- Check player state, distance, ownership, cooldown and allowed target.
- Rate-limit requests.
- Reject malformed or impossible values.
- Never accept a client-provided reward amount or unlock state.

## Replication
Replicate compact state changes, not continuous decorative details. For example, replicate a weather phase ID and let each client render local rain, rather than sending every raindrop.

## Streaming compatibility
Clients must tolerate streamed Workspace content being absent. The server should use authoritative data and stable IDs rather than relying on a client's local copy of a model.

## Persistence
Use versioned player data. Save stable IDs and progress states, not entire models. Handle failed saves, retries and schema migration. Do not assume teleport payloads are trusted progression data.

## Security review
Every ability, discovery, interaction and reward path needs a server-side validation checklist before release.
