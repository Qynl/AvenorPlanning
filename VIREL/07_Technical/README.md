# FLORA — Technical Architecture

## Architecture principles
- Separate content definitions from runtime systems.
- Use stable IDs for worlds, plants, ability sets and abilities.
- Keep shared systems data-driven where practical.
- Treat server authority, persistence and exploit resistance as foundational.
- Design for Roblox streaming and mobile performance.

## Detailed guides
- [Roblox Studio project structure](Roblox_Studio_Project_Structure.md)
- [World and map building pipeline](World_Building_Pipeline.md)
- [Map performance optimisation](Map_Performance_Optimization.md)
- [Instance streaming strategy](Instance_Streaming.md)
- [Asset pipeline](Asset_Pipeline.md)
- [Server/client architecture](Server_Client_Architecture.md)
- [Plant and ability implementation](Plant_Ability_Implementation.md)
- [Profiling and performance testing](Profiling_Testing.md)
- [Per-biome performance budget template](Map_Performance_Budget_Template.md)
- [World data and place architecture](World_Data_Architecture.md)

## Suggested logical modules
- World/region streaming and world-state service.
- Plant catalogue and spawn/ecology service.
- Scanner and discovery service.
- Research and progression service.
- Ability definition and ability execution service.
- Encounter/combat service.
- Cinematic presentation controller.
- Persistence and player profile service.

## TBD
Exact framework choices, networking conventions, data schema, server sizes and persistence implementation must be decided during technical prototyping. The project folder structure and world-building workflow are documented as proposals.
