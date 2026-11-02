# AVENOR Planning

> **Current direction: exploration-first multiplayer open-world sandbox shooter.** This repository is the design source of truth. It contains plans and specifications, not claims that systems are already implemented.

## Start here
1. **[AVENOR_Main.md](AVENOR_Main.md)** — canonical identity and priorities.
2. **[AVENOR_OpenWorld.md](AVENOR_OpenWorld.md)** — exploration, freedom, NPC factions and social sandbox.
3. **[AVENOR_Map_Performance.md](AVENOR_Map_Performance.md)** — map production, streaming, budgets and profiling.
4. **[AVENOR_Worlds.md](AVENOR_Worlds.md)** — ten proposed world concepts.
5. **[AVENOR_WorldEvents.md](AVENOR_WorldEvents.md)** — 27 limited-time event concepts, seasonal windows and schedule rules.
6. **[AVENOR_GameModes.md](AVENOR_GameModes.md)** — permanent competitive playlists and temporary mode events.
7. **[AVENOR_NPCs.md](AVENOR_NPCs.md)** — NPC categories and behaviour.
8. **[AVENOR_Gameplay.md](AVENOR_Gameplay.md)** — movement, combat, ammunition and core loop.
9. **[AVENOR_Roadmap.md](AVENOR_Roadmap.md)** — staged development and quality gates.
10. **[AVENOR_Technical.md](AVENOR_Technical.md)** — Roblox architecture and implementation plan.

## Core experience
- The Open World is the main attraction: explore a large, populated, changing world with other players.
- Players choose their own pace: discover places, investigate secrets, meet people, encounter NPC groups, take part in temporary events, collect things and fight when they want or when situations develop.
- NPCs and factions have routines, relationships and believable awareness. The world can react without a visible GTA-style wanted-level meter.
- A light GTA-inspired influence means freedom, inhabited cities, possible vehicles, public services and reactive NPCs. It does not mean copying GTA missions or making crime the central loop.
- Combat includes PvE and player encounters under rules still being designed. Friendly fire is being evaluated with anti-griefing safeguards.
- Separate competitive FPS playlists remain available from the home screen.
- Weapons are discovered/unlocked in the Open World only and remain permanently owned. Competitive matches never grant weapon unlocks.
- One active Open World region rotates on a proposed four-day cycle. Rotation is a world event, not a separate game mode.
- Ten worlds are proposed long-term, not promised at launch.
- Progression persists through death, disconnects, world rotation and seasons.
- Fast movement: unrestricted sprint, jump, slide and slide-jump; no stamina.
- Performance is a design constraint from the first greybox.

## Events
AVENOR has temporary Open World events that alter places, NPCs, access, weather, discoveries or routes, and limited-time competitive playlists that alter match formats and rules. Calendar events include Halloween, Christmas, New Year, spring, summer, April Fools, Valentine's, autumn and the game anniversary. See AVENOR_WorldEvents.md.

## Status rules
- **Confirmed direction:** explicitly selected by the user.
- **Current proposal:** recommended design awaiting approval/testing.
- **TBD:** unresolved; never silently treat as locked.
- No survival meters, forced base-building, crafting tree, full-loot PvP or permanent weapon loss is assumed.
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
