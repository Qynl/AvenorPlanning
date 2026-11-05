# 09 — Agent Task Packets

**Status:** PROPOSED work orders. Each packet is sized to one coherent implementation task with a testable exit.
**Use:** paste one packet at a time into an implementation agent. Do not bundle packets. Do not start a packet whose dependency is unmet.

---

## 0. Common preamble for every packet

> You are implementing **FLORA: BEYOND THE ORIGINS** in Roblox. Read `AGENTS.md`, `plan/AI_MASTER_INSTRUCTIONS.md`, `00_Overview/Decisions.md`, and the relevant source documents before editing. The repository is design-only; there is no existing Luau, Rojo project or place file unless a previous packet created one.
>
> Rules: server owns progression; every remote is untrusted; validate type, range, ownership, cooldown and state; do not invent lore, content names, mechanics, rarity or monetization; label work CONFIRMED / PROPOSED / OPEN; do not rename stable IDs; work only on the requested branch.
>
> Report exactly: **Result**, **Files**, **Validation actually run**, **Limitations**, **Next task**. Never say "tested" when you only compiled or inspected.

**Toolchain note:** paths below assume the canonical Explorer tree. If decision D3 chooses Rojo, map the same tree into the project file; do not invent a parallel structure.

**Dependency graph:**

```text
01 Bootstrap ─┬─ 02 Theme ──────────────┐
              ├─ 03 Movement/Input       │
              ├─ 14 Validation/CI        │
              └─ 13 Telemetry            │
03 ── 04 Scanner ── 05 Save ── 06 Research ── 07 Ability ── 09 Encounter
          │             │                          │
          └─────────────┴────────── 08 Spawn ──────┘
                                                      10 Loadout
                                                      11 Archive UI
                                                      15 Hub/Travel
12 Streaming harness runs alongside 03 and 15.
```

---

## Packet 01 — Place bootstrap and generated config

**Goal:** create the minimum Roblox project that can open, start in a deterministic order, and load all design data without hand-copied values.
**Depends on:** D3 toolchain decision.
**Files (proposed):** `default.project.json` if Rojo; `ServerScriptService/Bootstrap.server.lua`; `ServerScriptService/Services/*` stubs; `ReplicatedStorage/Shared/Config/*`; `tools/gen_luau.mjs`.
**Scope:**

- Explorer tree exactly as document 4, with placeholder modules where a service is not yet implemented.
- `tools/gen_luau.mjs` reads `07_Technical/Data/*.json` and emits `Worlds.lua`, `Regions.lua`, `Plants.lua`, `Abilities.lua`, `Creatures.lua`, `Assets.lua`, `VisualThemes.lua`.
- Generated files carry a header: generated, do not edit, source path.
- `Bootstrap.server.lua` requires services in order and calls `Init()` then `Start()`.
- Invalid or missing JSON fails loudly at generation, not at runtime.
- No behaviour inside config modules.

**Acceptance:**

- The place opens with no script errors.
- Generated config row counts match `index.json` (10, 60, 50, 162, 10, 78).
- Re-running the generator produces byte-identical output.
- Deleting a generated file and regenerating restores it.
- No service does work at require time.

**Verification:** Studio playtest for script errors; generator diff for determinism; count assertions.
**Out of scope:** gameplay, UI, art, save.

**Prompt:** "Implement Packet 01 from `GameplanningFreebuff/09_Agent_Task_Packets.md`. Create the place skeleton and generated config pipeline. Do not implement gameplay. Report the generated row counts and the Studio errors you actually observed."

---

## Packet 02 — Theme applier and visual baseline proof

**Goal:** apply a world's full visual record without eyeballing, and prove the default Roblox look is gone.
**Depends on:** 01.
**Files:** `ReplicatedStorage/Shared/Config/VisualThemes.lua` (generated); `ServerScriptService/Services/WorldStateService.lua`; `StarterPlayer/StarterPlayerScripts/Controllers/WorldEffectsController.lua`; a test region in `Workspace/Map/TestRegion`.
**Scope:**

- A `ThemeApplier` module sets Lighting, Atmosphere, Bloom, ColorCorrection, SunRays, Cloud, terrain material colours and water properties from the world record.
- `Lighting.Technology` is Studio-only: detect and document the manual step; never pretend a script set it.
- Apply the Auralis record to the test region.
- Add a validation function that fails if a large surface uses `Plastic`/`SmoothPlastic`, if terrain has fewer than the record's material count, or if the default sky remains.
- Include a debug command to re-apply a world theme by slug.

**Acceptance:**

- All record fields are applied; a printed diff shows zero mismatches.
- The test region contains no default sky, no Voxel lighting, no flat single-colour terrain, no Plastic on surfaces above four studs.
- Re-applying the theme is idempotent.
- An unknown world slug fails with a clear error, not a silent default.

**Verification:** Studio property dump and screenshot at player eye height; validation output.
**Out of scope:** final art, foliage, gameplay.

---

## Packet 03 — Movement, camera and input abstraction

**Goal:** one traversal feel across keyboard/mouse, controller and touch.
**Depends on:** 01.
**Files:** `StarterPlayer/StarterPlayerScripts/Controllers/CameraController.lua`, `InputController.lua`; shared input map in `ReplicatedStorage/Shared/Config/InputMap.lua`.
**Scope:**

- Third-person camera with collision, zoom and a cinematic framing hook that does not take control.
- Input actions abstracted: move, look, jump, sprint, interact, scan, abilities, archive.
- Keyboard/mouse, gamepad and touch bindings for every action.
- Client sends intent, not position authority.
- No per-frame allocation in the input loop.

**Acceptance:**

- All actions reachable on all three input modes.
- Camera does not clip through terrain in the test region.
- Disconnecting a gamepad falls back without breaking input.
- Sprint and jump feel consistent at 30 and 60 FPS.
- No client script errors on mobile emulation.

**Verification:** Studio playtest on desktop, controller emulation and touch emulation; note what was actually used.
**Out of scope:** abilities, combat, swimming, gliding.

---

## Packet 04 — Scanner and first-scan ownership

**Goal:** find → scan → own, with the server as the only source of truth.
**Depends on:** 03, 08 (anchors may be stubbed for this packet).
**Files:** `ServerScriptService/Services/DiscoveryService.lua`; `StarterPlayer/.../ScannerController.lua`; `StarterGui/Scanner`; `ReplicatedStorage/Remotes/ScanRequest`.
**Scope:**

- Server-spawned specimen carries a stable plant ID and anchor ID.
- Client requests a scan by instance ID.
- Server validates: profile loaded, distance ≤ scan range, line of sight, correct world, not already owned.
- First success writes ownership atomically; duplicate returns "already owned" without a second reward.
- Failure returns a specific code: too far, blocked, invalid, already owned, not ready.
- Client presents a scan progress state and a clear result.

**Acceptance:**

- Scan at 500 studs fails; scan through a wall fails; scan of a non-specimen fails.
- Duplicate scan is idempotent.
- Ownership survives rejoin.
- Failure codes map to distinct UI messages.
- No client-side ownership write exists.

**Verification:** Studio two-client test; save/rejoin; deliberate invalid requests.
**Out of scope:** research, archive UI, cinematic polish.

---

## Packet 05 — Save schema, persistence and migration

**Goal:** a versioned, server-owned profile that survives rejoin, failure and schema change.
**Depends on:** 04.
**Files:** `ServerScriptService/Services/PlayerDataService.lua`; `ReplicatedStorage/Shared/Types/SaveTypes.lua`; `ServerScriptService/Tests/SaveMigration.spec.lua`.
**Scope:**

- Save schema v1 as document 4.
- One DataStore key per player; session lease; `UpdateAsync`; retry with backoff.
- Load before allowing scan/research/ability transactions.
- Autosave at scan, research, unlock, travel and leave.
- Migration function with fixtures from v1 to current.
- Failure injection hook for tests.
- Read-only state on load failure; no temporary grants.

**Acceptance:**

- Rejoin restores ownership, research and unlocks.
- Two servers cannot both write the same profile.
- Simulated save failure does not grant ownership and shows a clear message.
- Corrupt profile is quarantined, not overwritten.
- Migration fixture passes.
- No save in a per-frame loop.

**Verification:** Studio two-server test if available; unit tests for migration; failure injection.
**Out of scope:** cross-place teleport, leaderboards, economy.

---

## Packet 06 — Research milestones and ability unlocks

**Goal:** research a plant in order, unlock abilities one by one, persist the result.
**Depends on:** 05.
**Files:** `ServerScriptService/Services/ResearchService.lua`; `ReplicatedStorage/Shared/Config/Research.lua`; `StarterGui/Research`.
**Scope:**

- Milestones are ordered per plant; server rejects out-of-order or duplicate completion.
- Conditions are data-driven: location, weather phase, time window, nearby organism, interaction. Only implement the condition types the slice actually uses.
- Completing a milestone unlocks the next ability atomically.
- Client shows the next milestone and why it is unavailable.
- Research never re-acquires the plant.

**Acceptance:**

- Out-of-order request rejected.
- Duplicate completion idempotent.
- Unlock appears in the archive and survives rejoin.
- Condition failure gives a readable reason.
- No universal checklist or currency introduced.

**Verification:** Studio playtest for all three slice plants; persistence rejoin; invalid requests.
**Out of scope:** mastery rewards, economy, archive visual design.

---

## Packet 07 — Ability runtime shell

**Goal:** a generic, server-authoritative ability state machine that content can plug into.
**Depends on:** 06.
**Files:** `ServerScriptService/Services/AbilityService.lua`; `ReplicatedStorage/Shared/Types/AbilityTypes.lua`; `ServerScriptService/AbilityHandlers/`; `StarterPlayer/.../AbilityController.lua`.
**Scope:**

- State machine: Ready → Validating → Activating → Active → Ending → Cooldown → Ready; Interrupted path.
- Validate ownership, unlock, cooldown, character state, range, line of sight, target.
- Cooldowns are server timestamps; client displays only.
- Handlers receive a validated context and return a result.
- Cleanup on death, disconnect, world exit and encounter end.
- One test handler proving the shell; do not implement all content.
- Low-quality fallback: telegraph and impact marker remain.

**Acceptance:**

- Locked ability rejected; unowned ability rejected; spam rate-limited.
- Cooldown cannot be reset by re-equipping or rejoining.
- Effect cleans up on death and disconnect.
- Two players using the same ability do not share state.
- No client-decided damage or reward.

**Verification:** Studio two-client test; cooldown timing; cleanup checks.
**Out of scope:** final VFX/audio, balance tuning, all 162 abilities.

---

## Packet 08 — Plant spawn and habitat anchors

**Goal:** plants appear in authored habitats, deterministically and recoverably.
**Depends on:** 01; world layout stub.
**Files:** `ServerScriptService/Services/PlantSpawnService.lua`; `Workspace/GameplayAnchors` convention; `ReplicatedStorage/Shared/Config/Habitats.lua`.
**Scope:**

- Anchors are named, invisible and separate from decoration.
- Each anchor declares allowed plant IDs, weight and respawn rule.
- Server-owned population state; rare specimens are shared and recoverable.
- A player's already-recorded discovery does not respawn as new.
- No random placement across the whole map.
- Debug visualisation of anchors behind a flag.

**Acceptance:**

- Every slice plant has at least two valid anchors.
- Server restart restores the intended population.
- A scanned specimen does not respawn as a new discovery for the same player.
- Invalid anchor configuration fails validation.
- No per-frame loop.

**Verification:** Studio playtest, restart, rejoin, anchor debug view.
**Out of scope:** ecology simulation, weather reactions, growth stages.

---

## Packet 09 — Encounter state machine

**Goal:** a readable, server-owned encounter with a clear start, state change, completion and reward.
**Depends on:** 07, 08.
**Files:** `ServerScriptService/Services/EncounterService.lua`; `ServerStorage/EncounterAssets`; `ReplicatedStorage/Shared/Config/Encounters.lua`.
**Scope:**

- States: Idle → Reading/Intro → Active → Resolving → Complete/Failed.
- Server owns health/objective state, eligibility and rewards.
- Party scaling rule (health, timing or objective count) must be explicit and data-driven.
- Disconnect and death paths resolve cleanly.
- Reward computed server-side from the definition; duplicate claim rejected.
- Client receives compact state, not per-projectile truth.

**Acceptance:**

- Four players can complete the encounter; one player can complete a scaled version.
- Late joiner sees a coherent state.
- Disconnect mid-encounter does not duplicate rewards.
- Duplicate claim rejected.
- Encounter resets correctly after failure.

**Verification:** Studio 1- and 4-player tests; disconnect test; duplicate reward test.
**Out of scope:** boss design, PvP, final creature AI.

---

## Packet 10 — Loadout service and UI

**Goal:** equip owned sets, validate slots, persist presets, prevent cooldown refresh.
**Depends on:** 07.
**Files:** `ServerScriptService/Services/LoadoutService.lua`; `StarterGui/Loadout`; `ReplicatedStorage/Shared/Config/LoadoutRules.lua`.
**Scope:**

- Slot count from D4.
- Server validates ownership, unlock state, slot limit, safe zone and encounter state.
- Presets saved in the profile.
- Switching does not reset cooldowns.
- Controller and touch layouts.
- Locked abilities visible but not equippable.

**Acceptance:**

- Unowned set rejected.
- More than the allowed sets rejected.
- Switching in combat rejected with a reason.
- Cooldown persists across switch and rejoin.
- Presets survive rejoin.
- Touch targets ≥ 44 px.

**Verification:** Studio input-mode pass; exploit attempts; rejoin.
**Out of scope:** cosmetics, sharing presets, trading.

---

## Packet 11 — Archive UI

**Goal:** a permanent record that clearly separates owned plants, locked abilities, research state and mastery.
**Depends on:** 06.
**Files:** `StarterGui/Archive`; `StarterPlayer/.../UIController.lua`; archive view model from save.
**Scope:**

- List and filter by world, rarity, research state.
- Plant detail: model/render, habitat, clue, complete set with locked/unlocked states, next milestone.
- Owned vs undiscovered distinction.
- Text scaling, colour-independent state, controller/touch navigation.
- No save table access from the client.

**Acceptance:**

- A player with one owned plant and one locked ability can explain the difference after using the UI.
- Filters work on a full launch catalogue.
- Text at 150% does not clip.
- All states readable without colour.
- Controller and touch can reach every view.

**Verification:** Studio UI pass at 150% text and reduced motion; playtest comprehension.
**Out of scope:** map, quest log, shop.

---

## Packet 12 — Streaming boundary test harness

**Goal:** prove the world streams correctly at traversal speed and produce evidence for every region boundary.
**Depends on:** 03.
**Files:** test tools in `ServerScriptService/Tests`; a boundary test region; the region budget sheet.
**Scope:**

- Configure streaming per canonical settings; verify place properties manually.
- A test harness that moves a dummy character across every boundary at walk, sprint and traversal speed and records time-to-visible and holes.
- Record a boundary report per region: streaming settings, time-to-visible, visible holes, missing anchors.
- A debug overlay showing loaded region bounds and streamed-out gaps.

**Acceptance:**

- No visible hole on the main route at sprint speed.
- Every launch region has a boundary report attached to its budget sheet.
- The harness can reproduce a failure with a fixed route and speed.
- Debug overlay is disabled by default.

**Verification:** Studio boundary runs; repeat a known failure; attach the report.
**Out of scope:** teleport validation, cross-experience profiles.

---

## Packet 13 — Telemetry and debug flags

**Goal:** make the funnel and failures observable without logging everything.
**Depends on:** 05.
**Files:** `ServerScriptService/Services/TelemetryService.lua`; event schema; debug flag in server config.
**Scope:**

- Events from document 7, with compact fields and sampling.
- No personal data, chat content or per-frame events.
- Batched sends; bounded queue; drop oldest on overflow.
- Debug flag enables verbose logs for one player only.
- Event schema documented in one file.

**Acceptance:**

- Events fire once per action, not per frame.
- Disabling telemetry does not break gameplay.
- Debug flag does not flood output for other players.
- No PII in any event.
- Queue overflow is counted, not silently lost.

**Verification:** Studio event log; simulated overflow; debug flag test.
**Out of scope:** dashboards, third-party analytics.

---

## Packet 14 — Content validation and CI

**Goal:** make content drift and broken links fail before runtime.
**Depends on:** 01.
**Files:** `tools/validate_content.mjs`; CI config; test fixtures.
**Scope:**

- Checks from document 4: ID uniqueness, parent links, set order, region ownership, theme coverage, art paths, role completeness, save keys.
- Warnings vs errors: role gaps are warnings until content lock, then errors.
- Deterministic output; exit code 1 on error.
- JSON regeneration check and generated Luau diff check.

**Acceptance:**

- A duplicate ID fails.
- A missing ability parent fails.
- A missing theme fails.
- A missing art path fails.
- A role gap warns, and fails in `--content-lock` mode.
- Clean repository passes.

**Verification:** fixture tests for each failure mode; run on the real repository.
**Out of scope:** runtime tests, Studio playtests.

---

## Packet 15 — Hub, travel and world selection

**Goal:** a complete hub → world → archive → loadout → world round trip with authoritative saves.
**Depends on:** 05, 10, 11; 12 for boundary evidence.
**Files:** Hub place/`Workspace` layout; `StarterGui` hub surfaces; `TravelService`; `ReplicatedStorage/Remotes/TravelRequest`.
**Scope:**

- Hub spawn, archive terminal, loadout preparation, world selection for available worlds.
- Travel validates world availability and save readiness.
- Hub and world places share the same generated config and save contract.
- Failure states: world unavailable, save not ready, teleport failed.
- No shop, currency or battle pass.

**Acceptance:**

- Round trip preserves ownership, research, unlocks and presets.
- Travel during an encounter is blocked.
- World unavailable shows a clear message.
- Failed teleport recovers safely.
- Forged destination is rejected; teleport payload is not proof of progression.
- Hub holds the mobile frame budget with 12 players.

**Verification:** Studio two-place test if available; otherwise document the limitation and test the routing logic with a simulated destination.
**Out of scope:** matchmaking, parties beyond joining the same server, social features.

---

## 16. Packet sequencing for a solo agent

If one agent implements the project without a team, use this order and stop at each gate:

1. 01 → 14 (foundation and guardrails)
2. 02 → 03 (presentation and traversal)
3. 04 → 05 (ownership and save)
4. 06 → 07 (research and abilities)
5. 08 → 09 (habitats and encounters)
6. 10 → 11 (loadout and archive)
7. 13 → 12 (observability and streaming)
8. 15 (hub and travel)

Do not skip 05. A solo agent that builds content before persistence will rebuild the content layer when the save contract changes.
