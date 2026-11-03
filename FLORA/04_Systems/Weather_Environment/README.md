# Weather and Environmental Simulation

**Status:** PROPOSAL

## World conditions
Each world may define a small set of conditions such as wind, rain, fog, temperature, water level, light and storm intensity.

## Simulation layers
- **Authoritative state:** compact server values such as weather ID, intensity band and phase.
- **Gameplay state:** only the environmental effects that influence routes, plants or encounters.
- **Presentation state:** client-side clouds, particles, ambient sound and local visual details.

## Performance rules
- Do not simulate every leaf or raindrop individually.
- Use local visual emitters and shared ambient loops.
- Update world conditions at sensible intervals, not every frame.
- Use distance and visibility to reduce decorative effects.
- Keep gameplay-relevant hazards readable even with effects disabled.

## Plant interactions
Plant definitions list which weather tags affect them. A plant reacts to a weather-state change event rather than constantly polling global conditions.

## Open decisions
Exact weather patterns, cycle lengths, seasonal rules and cross-player synchronisation remain TBD.
