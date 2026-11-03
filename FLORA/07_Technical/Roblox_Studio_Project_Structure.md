# Roblox Studio Project Structure

**Status:** PROPOSED ARCHITECTURE  
**Goal:** Keep FLORA maintainable as worlds, plants, abilities and systems grow.

## Recommended experience layout
Use one Roblox experience with:
- A small **Hub place** for joining, loadouts, archive and social features.
- Separate **World places** for large expeditions.
- Optional private or reserved servers for special instances if a later design requires them.

This is a proposal, not a locked decision. A single-place prototype is simpler at the beginning; separate places become useful when world memory, asset sets and server populations need isolation.

## Explorer structure

```text
ReplicatedStorage/
  Shared/
    Config/
    Types/
    Utilities/
  Remotes/
  UIShared/

ServerScriptService/
  Services/
    PlayerDataService
    WorldStateService
    DiscoveryService
    ResearchService
    PlantSpawnService
    AbilityService
    EncounterService
    PartyService

ServerStorage/
  WorldAssets/
  PlantModels/
  EncounterAssets/
  ServerOnlyModules/

StarterPlayer/
  StarterPlayerScripts/
    Controllers/
      CameraController
      InputController
      ScannerController
      AbilityController
      WorldEffectsController

StarterGui/
  HUD/
  Archive/
  Research/
  Loadout/

Workspace/
  Map/
  GameplayAnchors/
  Runtime/
```

## Responsibilities
- **ReplicatedStorage:** small shared modules and remotes clients need. Avoid putting every map asset here.
- **ServerStorage:** server-only assets and templates until needed.
- **ServerScriptService:** authoritative gameplay rules and persistence.
- **StarterPlayerScripts:** local camera, input, UI coordination and cosmetic presentation.
- **Workspace:** only the currently loaded world and active runtime objects.

## Naming and IDs
Use stable IDs such as `WORLD_001`, `PLANT_021` and `PLANT_021_A01`. Display names may change; IDs should not.

## Module rules
- One module should have one clear responsibility.
- Shared data definitions should not contain server-only secrets.
- Avoid circular module dependencies.
- Keep asset paths and IDs in one configuration layer.
- Version data schemas before changing saved player data.

## Development order
Start with one place and one playable biome. Add world-place separation only after profiling shows the benefit and the teleport/persistence flow is understood.
