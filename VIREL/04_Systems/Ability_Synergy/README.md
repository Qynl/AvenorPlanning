# Ability Synergy and Combos

**Status:** PROPOSAL  
**Purpose:** Make complete plant sets and mixed loadouts feel expressive without forcing one correct combination.

## Synergy layers
1. **Within-set synergy:** abilities from one plant reinforce a shared theme.
2. **Cross-set synergy:** abilities from different plants interact through shared tags such as wind, water, light, roots, spores or stone.
3. **Environment synergy:** an ability changes how a nearby route, plant habitat or encounter feature behaves.
4. **Co-op synergy:** two players can combine compatible effects to solve an optional challenge more efficiently.

## Interaction examples
- A wind ability can carry a drifting spore cloud toward a marked habitat.
- A water ability can activate a dormant watercourse, allowing a root ability to grow a temporary crossing.
- A light ability can reveal a hidden route that a traversal ability can reach.
- A grounding ability can stabilise a storm region before a plant network is activated.

These are design examples, not locked mechanics.

## Design rules
- Every plant set must be useful on its own.
- Synergies should reward experimentation, not become mandatory gates.
- Avoid infinite loops, permanent locks or instant cooldown resets.
- Effects need clear priority rules when they overlap.
- Strong combinations need readable tells and a clear end state.
- Do not make rarity the only way to access basic interaction types.

## Technical representation
Abilities may declare tags such as Wind, Water, Root, Light, Stone, Spore, Heat, Frost or Sound. The environment or encounter can listen for supported tags. Avoid hardcoding every possible pair of ability IDs.

## Balance
Test abilities individually, within their set, across common mixed loadouts and in co-op. Measure whether one combination invalidates the rest of the options.

## Open decisions
Exact tags, combination rules, stacking behaviour and whether any combos receive special presentation remain TBD.
