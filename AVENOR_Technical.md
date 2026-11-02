# AVENOR — Roblox Technical Architecture

> Proposed architecture, not implemented features. Build a small vertical slice before committing to large infrastructure.

## Priorities
Stable multiplayer/data; exploration traversal and streaming; server-authoritative combat/rewards; NPC simulation within budgets; cross-server schedule consistency; mobile performance; separate competitive lifecycle.

## Experience structure
Proposed places: main/menu for profile/loadout/Arsenal; Open World for active region; competitive places for match instances. Validate with join, teleport and memory tests. Large shared worlds are multiple Roblox server instances of the same cycle, not one limitless server.

## World identity
Authoritative schedule fields: activeWorldId, cycleId, start/end timestamps, nextWorldId, eventOverlayId and contentVersion. All servers agree. Rotation saves relevant state, routes joins and preserves permanent data.

## Server services
PlayerDataService, WeaponOwnershipService, DiscoveryService, LoadoutService, CombatService, AmmunitionService, MovementValidationService, NPCService, FactionRelationshipService, IncidentAwarenessService, WorldActivityService, WorldRotationService, EventService, PartyService, ProgressionService, EconomyService, MatchService and TelemetryService. Keep modules focused and data-driven.

## Client controllers
Camera, input, movement presentation/prediction, weapon presentation, HUD, map, interaction, dialogue, journal, menu, loadout, audio and accessibility. Client handles responsiveness, not rewards, inventory, final damage or discovery validation.

## Persistence
Use DataStoreService with schema versions, safe UpdateAsync patterns, retries/backoff and session locking. Permanent profile includes progression, owned weapon IDs, mastery, cosmetics, loadouts, journal, achievements, currency and settings. Keep cycle-local state separate. Plan migrations and partial-failure recovery.

## Networking and authority
Server-authoritative weapon ownership, discovery, damage, ammo, currency and match results. Validate/rate-limit RemoteEvents. Do not trust client positions for rewards. Keep messages small and event-driven. Use MemoryStoreService for temporary coordination only where expiry/consistency fits; persistent profile data belongs in DataStoreService. Use MessagingService purposefully and respect limits.

## NPC/faction systems
Reusable state machines; local incident awareness through witnesses/alarms/reports; faction reputation separate from immediate attention; no omniscient pursuit; distance update tiers, spawn budgets, pooling and simplified off-screen state.

## Streaming and world packages
Test Workspace streaming. Build modular region/subregion packages. Prioritise nearby geometry and navigation. Keep distant scenery lightweight. Preload interiors where possible. Use simplified collision and LOD. Never assume a giant unstreamed model will work. Profile actual clients and servers.

## Security
Server validates ownership, discoveries, damage, ammo, movement plausibility, currency, activity completion and match results. Make grants idempotent. Validate every client request.

## Tests and telemetry
Track joins/leaves, save failures, discovery grants, NPC counts, incident starts, world transitions, server frame time, memory and network traffic. Test recovery, rejoin, latency, crowded areas, mobile and shutdown.

## Implementation order
Movement prototype → small district → persistence → one discovery → one NPC route → one reactive incident → multiplayer stress test → expansion.

## TBD
Place architecture, server capacity, streaming radius, profile/session-lock library, shared incident scope, vehicle networking, NPC budgets and rotation schedule.
