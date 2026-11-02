# AVENOR — Solo Development Roadmap

> Designed for one creator using Freebuff as a coding assistant and Roblox Studio for implementation, testing and profiling. Build incrementally; do not ask an agent to generate the entire game in one prompt.

## Working rules
One milestone at a time. Inspect the project before changing it. Make small reversible changes. Keep modules focused. Run checks and test in Roblox after meaningful changes. Generated code is not complete until it works in a playable build. Profile mobile early. Keep documents updated and maintain a known-good version.

## Milestones
### M0 — Project foundation
Experience setup, folder/module conventions, version control, test place and documented run/test workflow.

### M1 — Movement prototype
First-person camera, sprint without stamina, jump, air control, slide and slide-jump. Test keyboard, controller and mobile.

### M2 — Greybox district
One compact GREYHAVEN district: settlement, road loop, landmark, remote point and a few interiors. Test streaming, traversal and performance before art production.

### M3 — Multiplayer foundation
Joins, server capacity, character replication, spawn safety and basic interaction. Validate actual instance limits.

### M4 — Persistence and discovery
Versioned profile, one server-validated permanent weapon discovery, Arsenal display, death/rejoin and save-failure tests.

### M5 — NPC slice
One civilian, trader, adventurer group and security NPC. Simple routines, pooling, distance tiers and cleanup. Profile server cost.

### M6 — Reactive incident
One witnessed local incident triggers an understandable security reaction. No visible wanted meter. Test awareness, escape, identity recognition and server budget.

### M7 — Exploration content
Hidden interior, environmental clue, journal record, short activity and longer discovery. Ensure exploration is fun without combat.

### M8 — PvE/PvP prototype
One optional hostile encounter and controlled PvP test area. Test friendly-fire options, safe spaces, respawn protection and grief prevention.

### M9 — Home screen/loadouts
Character showcase, Enter World, Game Modes, Loadout, Arsenal, Discoveries, Events and Settings. Mobile support.

### M10 — Competitive playlist
One small mode using owned weapons. No competitive weapon unlocks. Test match lifecycle and persistence.

### M11 — Rotation prototype
Two small region packages/variants, authoritative schedule, cycle ID, transition and persistent data. Four-day timing remains provisional.

### M12 — Optional vehicle gate
One simple vehicle, server networking, spawn/despawn, collisions, mobile controls and crowded-area profiling. Do not build a fleet before one vehicle works.

### M13 — World expansion
Expand Greyhaven and build a second distinct region. Reuse modular systems and enforce performance budgets.

### M14 — Factions/social depth
More NPC routines, faction relationships, local incidents, party systems, shops/services and social interactions.

### M15 — Content/live events
More worlds, discoveries, seasonal transformations, weapons, cosmetics and competitive playlists, based on measured capacity.

### M16 — Release hardening
Exploit/security review, data recovery, moderation/reporting, mobile, server load, accessibility, analytics and live operations.

## First playable
One compact Greyhaven district; fast movement; a few weapons; multiplayer test; one permanent discovery; one NPC group and two basic roles; one witnessed security reaction; one secret/interior; one small activity; saving/rejoin; performance measurements on desktop and mobile.

## Definition of done
Feature runs in Roblox; success and failure paths tested; no critical errors; intended input devices work; performance is within measured budget; docs updated; previous working build can be restored.

## Freebuff task format
For each task, ask Freebuff to read relevant docs, inspect the project, propose a minimal plan, change only required files, explain assumptions, run checks, provide exact Studio test steps, report known issues/performance impact, then stop for approval. Never grant blanket permission to rewrite the whole project or access unrelated local files.
