# Plant and Ability Implementation

**Status:** PROPOSED IMPLEMENTATION GUIDE

## Data-driven definitions
Keep plant and ability definitions separate from runtime behaviour.

Plant definition fields:
- PlantId
- DisplayName
- WorldId and BiomeIds
- Rarity
- HabitatTags
- DiscoveryProfileId
- AbilitySetId
- EcologyProfileId

Ability definition fields:
- AbilityId and ParentPlantId
- SetPosition
- RoleTags
- ActivationType
- Cooldown
- Duration
- Range or area
- ServerValidationProfile
- VFX and audio references

Exact schemas should be finalised after the first vertical slice.

## Runtime flow
1. Client requests an ability activation.
2. Server validates ownership, unlock, cooldown, character state and target.
3. Server creates or updates the authoritative gameplay state.
4. Server replicates the result and relevant state.
5. Clients play local visual and audio presentation.
6. Server ends timed effects and clears temporary state.
7. Cooldown and mastery progress are updated authoritatively.

## State machines
Use explicit states such as Ready, Activating, Active, Ending and Cooldown. Define cancellation and interruption paths.

## Temporary objects
- Give temporary objects a clear owner and lifetime.
- Use cleanup paths for death, disconnect, world exit and encounter end.
- Avoid unbounded object creation.
- Reuse effect objects when practical.
- Do not let local cosmetic effects decide gameplay outcomes.

## Plant spawn and scan flow
Use habitat anchors and server-owned spawn records. Client scanning is presentation; the server validates the plant ID, distance, eligibility and research transition.

## Testing
Test each ability alone, with several players, during streaming transitions and with reduced graphics effects.
