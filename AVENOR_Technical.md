# AVENOR — Technical Architecture & Roblox Implementation Plan

> **Status: proposed architecture.** This document describes an implementation approach for Roblox. It is not proof that any service or gameplay feature has already been built. Server authority is required for ownership, combat, progression, world rotation and rewards.

## 1. Technical goals

Architecture must support:
- First-person movement and combat across PC, controller and mobile.
- A large streamed Open World region.
- Multiple Roblox server instances hosting the same active world identity.
- Persistent weapon collection and player progression.
- World rotation on a shared schedule.
- NPCs and activities with controlled server cost.
- Separate competitive match servers.
- Data-driven weapons, abilities and cosmetics.
- Safe updates without corrupting player data.

## 2. Experience and place structure

Proposed Roblox experience structure:
- **Main place / menu:** home screen, profile, loadouts, Arsenal and navigation.
- **Open World place:** joins the current active world package. Multiple server instances can host the same active world.
- **Competitive match place:** dedicated match instances with mode-specific maps and lifecycle.
- Additional places may be added only when a clear technical need exists.

The exact place structure should be validated against Roblox teleportation, memory and streaming behaviour before production.

## 3. Shared world identity and rotation

Use a server-authoritative world schedule:
- Stable world cycle ID.
- Active world ID.
- Start and end timestamps.
- Next world ID.
- Event overlay ID where applicable.
- Content version.
- Transition state.

All Open World servers read the same authoritative schedule. Never let an individual server decide which map is active based on its own local clock.

Multiple servers are acceptable and expected for capacity. They are instances of the same active world, not separate world choices. Cross-server shared activity state should use appropriate Roblox services and be designed around consistency and rate limits.

At rotation:
1. New joins are directed to the next active world when it becomes active.
2. Existing servers save relevant transient state and stop accepting new activity that cannot finish.
3. Players receive a clear transition message.
4. Server transitions are graceful and do not discard permanent player data.
5. The next world package loads with the same cycle ID across servers.

## 4. Server-side services

Proposed service boundaries:
- PlayerDataService.
- WeaponOwnershipService.
- LoadoutService.
- WeaponService.
- AmmunitionService.
- CombatService.
- AbilityService.
- MovementValidationService.
- WorldStateService.
- WorldRotationService.
- DiscoveryService.
- NPCService.
- ActivityService.
- EventService.
- ProgressionService.
- EconomyService.
- PartyService.
- MatchmakingService.
- MatchService.
- Analytics / telemetry service.

Keep modules focused. Avoid one giant server script.

## 5. Client-side controllers

- CameraController.
- InputController.
- MovementController (prediction/presentation with server validation).
- WeaponController.
- ReloadController.
- HUDController.
- WorldMapController.
- InteractionController.
- DialogueController.
- DiscoveryJournalController.
- MenuController.
- LoadoutController.
- AudioController.
- AccessibilityController.

The client can predict visual responsiveness but cannot authoritatively grant weapons, currency, discoveries, match results or damage.

## 6. Data-driven content

Use stable IDs and versioned definitions for:
- Weapons.
- Firing identities.
- Abilities.
- Cosmetics.
- NPC archetypes.
- NPC routes.
- World packages.
- Discoveries.
- Activities.
- Events.
- Competitive modes.

Content definitions should be separate from runtime state. Do not duplicate weapon stats in the menu, combat script and reward script.

## 7. Persistent player data

Suggested profile groups:
- SchemaVersion.
- AccountLevel / AccountXP.
- OwnedWeaponIds.
- LoadoutPresets.
- WeaponMastery.
- OwnedCosmeticIds.
- EquippedCosmetics.
- DiscoveryJournal.
- AchievementIds.
- CurrencyBalances.
- CompetitiveRating.
- SeasonState.
- Settings.

Use DataStoreService with safe update patterns, versioned migrations, retry/backoff and session-locking strategy where appropriate. Never overwrite a newer profile with stale data. Handle partial failure explicitly.

World-cycle temporary state belongs in a separate store and must not be mixed with permanent player inventory.

## 8. Weapon ownership and discovery

- Server validates discovery conditions.
- WeaponOwnershipService grants a stable weapon ID once.
- Duplicate discovery is idempotent.
- The permanent record is saved before the client receives a final success state.
- Competitive mode servers read owned weapon IDs but cannot grant new weapon IDs.
- Death and world rotation do not remove ownership.
- All unlock grants are logged with source and timestamp for support and anti-exploit review.

## 9. Ammunition and combat authority

- Server validates fire rate, weapon state, loaded magazine count, reload state and damage.
- Client may play predicted animations and immediate feedback.
- Quick-access magazine count and backpack reserve state are server-owned.
- Reload transitions must be explicit states, not arbitrary client timers.
- A backpack resupply reload can be longer than a quick magazine swap.
- The intended feel is effectively renewable ammunition with reload downtime, not long-term bullet scarcity.
- Exact reserve model and reload timings are content-configurable.
- Projectiles and hit validation must use bounded, validated requests.
- RemoteEvents need rate limits and input validation.

## 10. Movement architecture

- Client prediction is used for responsive movement where appropriate.
- Server validates movement states and implausible speed/position changes.
- Sprint has no stamina depletion.
- Slide and slide-jump are explicit movement states.
- Do not trust client-supplied final positions for rewards or combat outcomes.
- Tune physics and replication with real network latency.
- Test keyboard/mouse, controller and mobile.

## 11. NPC architecture

- Use archetype definitions and small state machines.
- Keep important interaction and reward state on the server.
- Use distance-based update tiers and simplified off-screen simulation.
- Avoid simulating every NPC at full fidelity on every server frame.
- NPC routes and activity state should be deterministic enough to feel consistent.
- Use spawn budgets per region and per server.
- Clean up NPCs and connections when regions unload or server state changes.

## 12. Open World streaming and performance

- Use Roblox instance streaming and modular region packages.
- Divide large worlds into manageable subregions.
- Prioritise critical roads, landmarks and navigation.
- Stream interiors before player entry where possible.
- Use LOD and simplified collision for distant geometry.
- Pool repeated effects and transient objects.
- Limit active NPCs and dynamic lights.
- Profile memory, server frame time, client frame rate and network traffic on mobile.
- Avoid assuming that a huge map can be loaded as one unstreamed model.

## 13. Competitive mode architecture

Competitive match servers use:
- A standard match lifecycle.
- Mode-specific adapters.
- Server-authoritative scoring and objectives.
- Owned weapon validation from player data.
- No weapon-unlock grant path.
- Match result records for rank, XP and mastery.
- Separate match map packages from Open World regions.

## 14. Security and exploit resistance

- Never trust the client for weapon ownership, discovery completion, currency, XP, damage, ammo or match result.
- Validate every remote payload and rate-limit sensitive requests.
- Keep reward grants idempotent.
- Avoid client-side proximity checks as the only discovery condition.
- Validate teleport destination and active world identity.
- Log suspicious reward patterns.
- Do not expose DataStore keys or privileged server state to clients.

## 15. Testing and observability

Required test layers:
- Unit tests for data definitions and reward calculations.
- Integration tests for weapon unlock and persistence.
- Movement tests under latency.
- NPC route and spawn-budget tests.
- World rotation transition tests.
- Competitive match lifecycle tests.
- Cross-platform UI tests.
- Mobile performance and memory tests.
- Data migration and failure-recovery tests.

Track:
- World join/leave.
- Discovery attempts and grants.
- Weapon ownership changes.
- Rotation transition status.
- NPC spawn counts and update cost.
- Activity starts/completions.
- Match results.
- Save failures and retries.

## 16. Open technical decisions

- Final place architecture.
- Exact per-world server capacity.
- Streaming radius and region chunk sizes.
- Shared cross-server event implementation.
- Session locking and profile library choice.
- Final schedule storage strategy.
- NPC simulation budget.
- Whether vehicles are included at launch.
