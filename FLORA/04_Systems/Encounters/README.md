# Encounters System

**Status:** PROPOSAL  
**Purpose:** Give exploration and plant powers meaningful challenges without turning every region into constant combat.

## Encounter types
- **Wildlife response:** a creature reacts to noise, light, movement or a disturbed habitat.
- **Environmental challenge:** unstable ground, strong currents, heat vents, storms or shifting roots.
- **Guardian encounter:** a major ecosystem presence protects a location or discovery.
- **World event:** a temporary condition changes routes and available interactions.
- **Cooperative anomaly:** several players coordinate plant abilities to stabilise a location.

## Encounter structure
1. **Read:** show environmental signs before the challenge begins.
2. **Understand:** players learn the encounter's pattern.
3. **Respond:** movement, positioning, plant abilities and environmental interactions matter.
4. **Resolve:** the encounter reaches a clear state.
5. **Reward:** research data, archive progress, mastery progress or cosmetic rewards.

## Design rules
- Every encounter needs a readable start, state changes and completion.
- Avoid unavoidable damage loops or long control lockouts.
- Make the environment part of the challenge.
- Different plant sets should create different valid solutions.
- Do not require one rare plant to complete a core encounter.
- Rewards should encourage replay without making rare progress dependent on narrow time windows.

## Multiplayer
- The server owns encounter state and reward eligibility.
- Clients render effects and local feedback.
- Use a shared encounter state machine rather than each client inventing its own result.
- Scale challenge health, timing or objective count carefully with party size.

## Still TBD
Enemy roster, PvE/PvP split, party size, failure rules, encounter frequency and exact reward economy.
