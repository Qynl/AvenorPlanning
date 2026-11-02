# AVENOR Planning

> **Current direction: persistent-progression, rotating-world multiplayer shooter sandbox.** This repository is the design source of truth for AVENOR. It is a planning repository, not a claim that any Roblox systems are already implemented.

## Start here

1. **[AVENOR_Main.md](AVENOR_Main.md)** — canonical game identity and high-level rules.
2. **[AVENOR_Worlds.md](AVENOR_Worlds.md)** — the proposed ten-world collection.
3. **[AVENOR_WorldEvents.md](AVENOR_WorldEvents.md)** — four-day world rotation, seasonal transformations and event rules.
4. **[AVENOR_NPCs.md](AVENOR_NPCs.md)** — world population and NPC behaviours.
5. **[AVENOR_Roadmap.md](AVENOR_Roadmap.md)** — practical development milestones.
6. **[AVENOR_Technical.md](AVENOR_Technical.md)** — Roblox architecture and implementation plan.

## Core game

- [AVENOR_Gameplay.md](AVENOR_Gameplay.md) — open-world loop, movement, combat, weapon handling, ammunition, interaction and first playable.
- [AVENOR_GameModes.md](AVENOR_GameModes.md) — separate competitive playlists. Weapons are discovered/unlocked in the Open World, never by completing competitive matches.
- [AVENOR_Maps.md](AVENOR_Maps.md) — world-building standards.
- [AVENOR_MapLayouts.md](AVENOR_MapLayouts.md) — high-level region layouts and greybox planning.
- [AVENOR_Loadout_UI.md](AVENOR_Loadout_UI.md) — home screen, loadouts, arsenal and navigation.
- [AVENOR_HUD_Audio.md](AVENOR_HUD_Audio.md) — world HUD, combat HUD, controls, audio and accessibility.

## Weapons and abilities

- [AVENOR_Weapons.md](AVENOR_Weapons.md) — weapon catalogue and individual designs.
- [AVENOR_FiringIdentities.md](AVENOR_FiringIdentities.md) — rebuilt active firearm identities.
- [AVENOR_Abilities.md](AVENOR_Abilities.md) — player ability concepts and prototype specifications.

## Progression and presentation

- [AVENOR_Progression.md](AVENOR_Progression.md) — permanent account progression, weapon discovery, mastery, rank and economy.
- [AVENOR_Cosmetics.md](AVENOR_Cosmetics.md) — individual weapon skins.
- [AVENOR_Emotes.md](AVENOR_Emotes.md) — emotes.
- [AVENOR_KillEffects.md](AVENOR_KillEffects.md) — elimination effects.
- [AVENOR_WinEffects.md](AVENOR_WinEffects.md) — victory effects.
- [AVENOR_Presentation.md](AVENOR_Presentation.md) — player identity, banners, titles, MVP and profile presentation.

## Development and integrations

- [AVENOR_Technical.md](AVENOR_Technical.md) — runtime architecture, persistence, networking, streaming and security.
- [AVENOR_Roadmap.md](AVENOR_Roadmap.md) — milestones and quality gates.
- [AVENOR_Freebuff_Roblox_MCP.md](AVENOR_Freebuff_Roblox_MCP.md) — optional Freebuff + Roblox Studio MCP workflow.
- `assets/branding/` — existing AVENOR logo, hero banner and menu artwork.
- `assets/ranks/` — existing rank emblem artwork.

## Canonical project rules

- AVENOR is a **large, modern, realistic-but-stylized multiplayer open-world shooter sandbox** with fast, expressive FPS movement.
- The Open World is the primary shared experience. Players explore, discover, fight, interact with NPCs, take part in activities and encounter other players naturally.
- Competitive modes remain available as separate match-based playlists from the main menu. They are not the Open World and do not replace it.
- **Weapons are permanently unlocked through discovery in the Open World only.** Competitive matches may award rank progress, account XP, mastery and cosmetic rewards, but never weapon unlocks.
- A discovered weapon stays in the player's collection permanently. Death, map rotation and competitive match results never remove it.
- The active Open World rotates to a different map on a proposed four-day cycle. This rotation is a world event, not a game mode. Player progression is never reset.
- The current map roster contains ten proposed worlds. Names, exact sizes, final order and rotation duration remain subject to approval and testing.
- Movement has no stamina system. Sprinting is unrestricted; sliding, slide-jumping and responsive air control are core movement goals.
- Ammunition is designed around reload timing and carried magazines, not long-term scarcity. See `AVENOR_Gameplay.md`.
- No survival meters, permanent weapon loss, forced base-building, crafting tree or faction-war system is assumed. Those remain unapproved ideas unless explicitly added later.
- The universal rarity hierarchy is **Commonplace, Altered, Evolved, Ascendant, Extraordinary, Singular**. Rarity never grants gameplay power.
- Brand direction remains geometric modern typography, deep blue with soft violet accents, icon plus wordmark.
- First-person during gameplay; third-person character presentation in the home screen and suitable social spaces.

## Status language

- **Confirmed direction:** explicitly selected by the user.
- **Current proposal:** a coherent design recommendation awaiting approval or playtesting.
- **TBD:** intentionally unresolved. Do not silently turn it into a locked decision.
- **Legacy catalogue:** existing detailed content retained for continuity; it must follow the current canonical rules above.
