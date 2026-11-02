# AVENOR Planning

> **Current direction: exploration-first multiplayer open-world sandbox shooter.** This repository is the design source of truth. It contains plans and specifications, not claims that systems are already implemented.

## Start here
1. **[AVENOR_Main.md](AVENOR_Main.md)** — canonical identity and priorities.
2. **[AVENOR_OpenWorld.md](AVENOR_OpenWorld.md)** — exploration, freedom, player encounters and limited player-like NPC factions.
3. **[AVENOR_Locations.md](AVENOR_Locations.md)** — 200 named POIs across ten worlds, location families, micro-discoveries and temporary presence.
4. **[AVENOR_Map_Performance.md](AVENOR_Map_Performance.md)** — map production, streaming, budgets and profiling.
5. **[AVENOR_Worlds.md](AVENOR_Worlds.md)** — ten proposed world concepts and global-event compatibility.
6. **[AVENOR_WorldEvents.md](AVENOR_WorldEvents.md)** — global transformations, admin-triggered live events, community events, local incidents, competitive playlists and seasonal scheduling.
7. **[AVENOR_GameModes.md](AVENOR_GameModes.md)** — permanent competitive playlists and temporary mode events.
8. **[AVENOR_NPCs.md](AVENOR_NPCs.md)** — player-like NPC faction squads only.
9. **[AVENOR_Gameplay.md](AVENOR_Gameplay.md)** — movement, combat, ammunition and core loop.
10. **[AVENOR_Roadmap.md](AVENOR_Roadmap.md)** — staged development and quality gates.
11. **[AVENOR_Technical.md](AVENOR_Technical.md)** — Roblox architecture and implementation plan.

## Core experience
- The Open World is the main attraction: explore a large, populated, changing world with other players.
- Players choose their own pace: discover hundreds of distinct locations over time, investigate secrets, scavenge, meet other players, encounter occasional player-like NPC factions, establish temporary camps and contest occupied places.
- Players can establish a temporary presence at suitable locations. This is not permanent land ownership or a mandatory base-building system; control emerges from who is actually there and what they have established.
- A limited number of NPC faction squads behave like players: they travel, scavenge, camp, occupy locations and may defend rare discoveries. There are no civilians, police, public-service NPCs or wanted systems.
- AVENOR is an exploration-action sandbox, not a GTA-style crime or everyday-life simulator. Buildings, roads and infrastructure create believable places to explore; they do not imply civilian crowds, traffic AI, police systems, working services or a simulated city economy.
- Combat includes player encounters and occasional encounters with player-like NPC faction squads. PvP coverage and friendly-fire rules remain TBD.
- Separate competitive FPS playlists remain available from the home screen.
- Weapons are discovered/unlocked in the Open World only and remain permanently owned. Competitive matches never grant weapon unlocks.
- One active Open World region normally rotates on a proposed four-day cycle. Major Global World Events can override that rotation and select a compatible region.
- Ten worlds are proposed long-term, not promised at launch.
- Progression persists through death, disconnects, world rotation and seasons.
- Fast movement: unrestricted sprint, jump, slide and slide-jump; no stamina.
- Performance is a design constraint from the first greybox.

## Events
AVENOR separates **Global World Events** (whole-region transformations), **Admin Events** (authorised live operations and surprise events), **Community Events** (shared goals and celebrations), **Local World Events** (temporary incidents and discoveries) and **Competitive Events** (limited playlists and match rules). Major seasonal events can replace the normal active world with a compatible region and a complete event-specific world state. See AVENOR_WorldEvents.md.

## Status rules
- **Confirmed direction:** explicitly selected by the user.
- **Current proposal:** recommended design awaiting approval/testing.
- **TBD:** unresolved; never silently treat as locked.
- No survival meters, forced base-building, civilian simulation, police/crime systems, traffic-life simulation, public-service NPCs, city economy, crafting tree, full-loot PvP or permanent weapon loss is assumed.
- Safe areas, PvP coverage, friendly-fire defaults, vehicle launch scope, economy/trading and exact event calendar remain unresolved.
- Rarity: **Commonplace, Altered, Evolved, Ascendant, Extraordinary, Singular**. Rarity never grants gameplay power.
- Existing weapons, skins, abilities and effects are content libraries, not a requirement to ship every item.

## Other documents
Maps: AVENOR_Maps.md, AVENOR_MapLayouts.md, AVENOR_Worlds.md.
Interface: AVENOR_Loadout_UI.md, AVENOR_HUD_Audio.md.
Progression: AVENOR_Progression.md, AVENOR_Presentation.md.
Content libraries: AVENOR_Weapons.md, AVENOR_Abilities.md, AVENOR_Cosmetics.md, AVENOR_Emotes.md, AVENOR_FiringIdentities.md, AVENOR_KillEffects.md, AVENOR_WinEffects.md.
Integration notes: AVENOR_Freebuff_Roblox_MCP.md.
Existing branding and rank artwork remain in assets/.
