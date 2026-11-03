# Cooperative Multiplayer

**Status:** PROPOSAL

## Goals
Exploration should be enjoyable alone and gain new possibilities with friends. Cooperation should add options, not make solo play impossible.

## Cooperative interactions
- Multiple players can scan or investigate a shared specimen.
- Some environmental mechanisms can be stabilised by several different plant abilities.
- Players can share route markers and archive clues.
- Large encounters can offer optional team objectives.

## Authority and replication
- Server owns discoveries, unlocks, encounter state and shared world events.
- Client owns local camera, local UI and cosmetic-only effects.
- Ability requests are validated by the server.
- Replicate compact state changes, not every visual particle.
- Avoid trusting client-reported distance, reward eligibility or cooldown completion.

## Session design
- Joining players receive the current world and encounter state.
- Late joiners should not see a broken or half-completed cinematic.
- Critical discoveries should not be locked by another player's temporary action.
- Provide clear party and solo difficulty rules.

## Open decisions
Party size, shared specimen rules, trading, social hub and PvP remain TBD.
