# AVENOR Planning

The central planning repository for **AVENOR**, a competitive Roblox FPS built around distinctive weapons, expressive movement, tactical abilities, readable arenas, and a long-term mastery and ranked ecosystem.

## Start here

1. **[AVENOR_Main.md](AVENOR_Main.md)** — the canonical high-level game design and current project overview.
2. **[AVENOR_Roadmap.md](AVENOR_Roadmap.md)** — milestone order, dependencies, and definition of done.
3. **[AVENOR_Technical.md](AVENOR_Technical.md)** — proposed Roblox architecture and implementation plan.

## Core gameplay

- [AVENOR_Gameplay.md](AVENOR_Gameplay.md) — movement, combat, health, weapon handling, pickups, match flow, HUD requirements, and first playable scope.
- [AVENOR_Weapons.md](AVENOR_Weapons.md) — weapon catalogue, active/archive status, and proposed prototype combat stats.
- [AVENOR_FiringIdentities.md](AVENOR_FiringIdentities.md) — the 40 active firearms' distinct projectile and firing behaviours.
- [AVENOR_Abilities.md](AVENOR_Abilities.md) — 50 curated player ability concepts and proposed prototype specifications.
- [AVENOR_GameModes.md](AVENOR_GameModes.md) — DUEL, DUOS, TEAM DEATHMATCH, FREE FOR ALL, HARDPOINT, CAPTURE THE FLAG, and AVENOR ORIGIN.
- [AVENOR_Maps.md](AVENOR_Maps.md) — map design standards and the eight-map concept roster.
- [AVENOR_MapLayouts.md](AVENOR_MapLayouts.md) — proposed greybox footprints, route structures, spawn regions, pickups, and mode overlays for all eight maps.

## Progression and presentation

- [AVENOR_Progression.md](AVENOR_Progression.md) — account XP, unlocks, weapon mastery, ranked, seasons, currencies, challenges, and recommended economy values.
- [AVENOR_Cosmetics.md](AVENOR_Cosmetics.md) — individual weapon skins. The 80 active firearm skins are aligned to the new launch firing identities; archived firearm skins are reference-only.
- [AVENOR_KillEffects.md](AVENOR_KillEffects.md) — elimination effect collection.
- [AVENOR_WinEffects.md](AVENOR_WinEffects.md) — victory effect collection.
- [AVENOR_Emotes.md](AVENOR_Emotes.md) — character emote collection.
- [AVENOR_Presentation.md](AVENOR_Presentation.md) — MVP selection and showcases, elimination announcements, banners, titles, and profile showcases.
- [AVENOR_HUD_Audio.md](AVENOR_HUD_Audio.md) — HUD, controls, cross-platform input, audio direction, music, and accessibility.

## Development setup and integrations

- [AVENOR_Freebuff_Roblox_MCP.md](AVENOR_Freebuff_Roblox_MCP.md) — setup guide for connecting Freebuff Desktop to the official Roblox Studio MCP server on Windows, including configuration, verification, troubleshooting, and safe workflow.

## Project-wide rules

- **Status matters:** locked decisions are confirmed; proposed values are not final until approved and tested.
- **Rarity hierarchy:** Commonplace → Altered → Evolved → Ascendant → Extraordinary → Singular.
- **Cosmetics are cosmetic:** no cosmetic or progression reward may improve combat performance.
- **Server authority:** competitive outcomes, ownership, progression, and rewards are validated by the server.
- **Prototype before scale:** prove the core match loop and reusable systems before producing the full content roster.

## Current planning status

The design repository contains the full high-level game overview, gameplay and weapon rosters, ability concepts, mode rules, eight map concepts with proposed greybox layouts, progression/economy proposals, cosmetic collections, presentation requirements, HUD/audio requirements, technical architecture, and a development roadmap.

This repository contains plans and specifications. It does **not** mean the Roblox experience or its systems have already been implemented. Proposed values still require approval, simulation, Studio implementation, and playtesting.


**Weapon design direction:** AVENOR's long-term ambition is 167 genuinely distinct weapon experiences. The current foundation includes 40 completely rebuilt firearms; every rarity tier, including Commonplace, must deliver a memorable mechanic. See [AVENOR_FiringIdentities.md](AVENOR_FiringIdentities.md).
