# 04 — Technical Blueprint

**Status:** PROPOSED implementation blueprint. It follows the authority, streaming and data rules in `07_Technical/`, but it is not a substitute for them.
**Audience:** lead engineer, gameplay engineers, technical artist.
**Non-negotiable:** the server owns progression, ownership, cooldowns and rewards. Every client remote is untrusted.

---

## 1. Architecture in one page

**Recommendation:** build the first playable version in **one place**. Split into a **Hub place + one place per world** only after the vertical slice has a measured performance baseline and a working save.

Why:

- A single place removes teleport, cross-place persistence and party-routing complexity from the riskiest phase.
- The repository's own architecture documents recommend exactly this sequencing.
- Two launch worlds fit comfortably in two world places later; they do not need to exist as separate places on day one.
- The split is justified when world asset sets, memory or server populations genuinely require isolation — not before.

**PROPOSED 1.0 topology:**

```text
FLORA experience
├── Hub place          — spawn, archive terminal, loadout preparation, world selection
├── World place: Auralis
└── World place: Myrrwood
```

**Prototype topology (months 1–4):**

```text
FLORA prototype place
└── Workspace/Map/TestRegion  — Sunthread Fields greybox + The Whispering Hollows stub
```

The decision gate and its evidence requirements are in document 8, decision D2.

---

## 2. Explorer structure

This is the canonical proposed structure from `07_Technical/Roblox_Studio_Project_Structure.md`, expanded only where implementation needs a named home.

```text
ReplicatedStorage/
  Shared/
    Config/
      Worlds.lua            generated from worlds.json
      Regions.lua           generated from regions.json
      Plants.lua            generated from plants.json
      Abilities.lua         generated from abilities.json
      Creatures.lua         generated from creatures.json
      Assets.lua            generated from assets.json
      VisualThemes.lua      generated from visual_themes.json
      Rarity.lua            hand-authored constants from Rarity_Standard.md
    Types/
      PlantTypes.lua
      AbilityTypes.lua
      SaveTypes.lua
    Utilities/
      Signal.lua
      TableUtil.lua
      RateLimit.lua
      Validation.lua
  Remotes/
    ScanRequest
    ResearchRequest
    LoadoutRequest
    AbilityRequest
    InteractRequest
    TravelRequest
    ServerEvent          one server-to-client event channel with a typed payload
  UIShared/
    Theme.lua
    Components/

ServerScriptService/
  Bootstrap.server.lua
  Services/
    PlayerDataService.lua
    WorldStateService.lua
    DiscoveryService.lua
    ResearchService.lua
    PlantSpawnService.lua
    AbilityService.lua
    EncounterService.lua
    TravelService.lua
    TelemetryService.lua
  Tests/
    Validation.spec.lua
    SaveMigration.spec.lua
    AbilityState.spec.lua

ServerStorage/
  WorldAssets/
  PlantModels/
  EncounterAssets/
  ServerOnlyModules/

StarterPlayer/StarterPlayerScripts/
  Controllers/
    CameraController.lua
    InputController.lua
    ScannerController.lua
    AbilityController.lua
    WorldEffectsController.lua
    UIController.lua

StarterGui/
  HUD/
  Archive/
  Research/
  Loadout/
  Scanner/

Workspace/
  Map/
  GameplayAnchors/
  Runtime/
```

**Rules:**

- `Config` contains data, never behaviour.
- `Services` own state transitions and validation.
- `Controllers` own presentation and input, never truth.
- `Runtime` is for temporary server-spawned objects with explicit lifetimes.
- No module reaches across the tree into another service's internals; communicate through a small public API or a signal.

---

## 3. Boot sequence

1. `Bootstrap.server.lua` requires services in dependency order: Telemetry → PlayerData → WorldState → Discovery → Research → PlantSpawn → Ability → Encounter → Travel.
2. Each service exposes `Init()` and `Start()`. No service does work at require time.
3. `WorldStateService` reads the active world ID from the place configuration and applies the world's theme server-side where possible.
4. `PlantSpawnService` waits for `Workspace/GameplayAnchors` to replicate, then spawns authored specimens from region data. It never assumes anchors exist on every client.
5. `PlayerDataService` loads the profile before the player character is allowed to scan or use abilities. Until loaded, the client sees a neutral "syncing" state and cannot transact.
6. `TravelService` is last: it depends on save, party and world state.

**Failure behaviour:** if a profile fails to load after retries, the player enters a read-only spectator state with a clear message. Never grant temporary progression to unblock a save failure.

---

## 4. Content data layer

The markdown documents remain the source of truth. `07_Technical/Data/*.json` is derived. The Luau config modules are generated from that JSON by a build step.

**PROPOSED build step:** `tools/gen_luau.mjs` reads the JSON exports and writes deterministic Luau tables into `ReplicatedStorage/Shared/Config/`. Run it in CI and fail the build if generated output differs from committed output.

**Why generated modules instead of reading JSON at runtime:** Roblox cannot require a `.json` file. Hand-copying values into Luau guarantees drift. Generation makes drift a failing check.

**Schema rules:**

- Stable IDs are the only keys used in saved data and remotes.
- Display names may change without migration.
- `null` means "the document does not say". `TBD` means "deliberately undecided". Both must fail a content validation check if the feature requires them.
- Ability definitions carry no executable behaviour. `AbilityService` maps an ability ID to a handler module; the data says *what*, the handler says *how*.
- Rarity is data, not a hard-coded branch. Balance levers live in tuning tables, not in `if rarity == "Origin"` chains.

**Content validation (CI):**

| Check | Failure condition |
|---|---|
| Stable ID uniqueness | Duplicate world, region, plant or ability ID |
| Parent links | Ability's parent plant missing; plant's ability ID missing |
| Set order | Duplicate or missing `setPosition` within a set |
| Region ownership | Region world slug not in `worlds.json` |
| Theme coverage | World has no record in `visual_themes.json` |
| Art paths | `assets.json` path does not exist |
| Role completeness | Ability has `role = TBD` or blank, reported as a warning count, not a build failure until content lock |
| Save keys | Every key written by a service appears in the save schema |

---

## 5. Services and authority

| Service | Owns | Never trusts | Persists |
|---|---|---|---|
| `PlayerDataService` | Profile load/save, schema version, session lock | Client save requests | Entire profile |
| `WorldStateService` | Active world, weather phase, event state | Client weather claims | World-scoped transient state |
| `DiscoveryService` | First scan, ownership, archive record | Client scan result, distance | Plant ownership, first-scan location |
| `ResearchService` | Milestone order and completion | Client "I observed it" | Research state per plant |
| `PlantSpawnService` | Habitat anchors, population state, respawn | Client spawn requests | Shared rare specimen state |
| `AbilityService` | Unlock check, cooldown, activation, effect state | Client cooldown, target, damage | Cooldown timestamps if they must survive rejoin |
| `EncounterService` | Encounter state machine, eligibility, rewards | Client completion, damage, reward claims | Encounter completion record |
| `TravelService` | Destination validation, party routing, teleport | Teleport payload as proof | Nothing; reads profile |
| `TelemetryService` | Event batching and sampling | Client-reported outcomes | Nothing |

**State ownership rule:** if a value can grant an ability, item, reward or route, the server computes it. The client may predict the visual result, never the entitlement.

---

## 6. Remote contracts

Keep the remote surface small. One request remote per domain is easier to validate than a dozen ad-hoc events.

| Remote | Direction | Payload (compact) | Server validation | Rate limit (PROPOSED) |
|---|---|---|---|---|
| `ScanRequest` | C→S | `plantInstanceId` | Profile loaded; instance is a server-spawned specimen; distance ≤ scan range; line of sight; not already owned | 2/s |
| `ResearchRequest` | C→S | `plantId`, `milestoneId` | Plant owned; milestone is next in order; required condition/location met; not already complete | 1/s |
| `LoadoutRequest` | C→S | `presetIndex`, `plantIds` | All owned; slot count respected; safe zone; no combat/encounter; no cooldown refresh exploit | 2/s |
| `AbilityRequest` | C→S | `abilityId`, `aim` (unit vector or target ID) | Owned; unlocked; off cooldown; character alive; state allows; range/LOS; target valid; server starts cooldown | 10/s burst, 20/s hard cap |
| `InteractRequest` | C→S | `anchorId` | Anchor exists; distance; correct world state; not consumed | 3/s |
| `TravelRequest` | C→S | `worldId` | World available; player not in encounter; profile saved or save queued; destination exists | 1/5s |
| `ServerEvent` | S→C | `{kind, data}` | Not applicable; client validates shape defensively | Batched, compact |

**Payload rules:**

- Never send a full inventory or a full plant table on every action.
- Send IDs and deltas. The client already has static definitions.
- Replicate weather as a phase ID and intensity band; clients render local particles.
- Replicate encounter state as a compact state record, not per-projectile truth.
- Version the event schema. Additive fields first; breaking changes require a client update gate.

**Anti-exploit checks that are mandatory, not optional:**

1. Distance measured on the server from the character's server position.
2. Line of sight checked against server geometry or a simplified collision query.
3. Cooldown timestamps stored server-side; client UI is display only.
4. Ability ownership derives from save data, not from the equipped UI.
5. Rewards computed from encounter definition, never from a client-supplied amount.
6. Rate limits per player per remote, with a warning and then a short lockout.
7. Invalid payload types rejected before indexing tables.
8. Teleport data treated as routing context only.
9. Duplicate scan requests idempotent: second scan returns "already owned", not a second reward.
10. Disconnect during an encounter resolved by the server state machine, not by the departing client.

---

## 7. Ability runtime

### State machine

```text
Ready
  → Validating      server checks ownership, unlock, cooldown, state, target
  → Activating      wind-up; cancellable only if the ability definition says so
  → Active          effect exists; duration starts
  → Ending          cleanup, final tick, presentation end
  → Cooldown        server timestamp; client displays
  → Ready

Any state → Interrupted   death, disconnect, encounter end, world exit
Interrupted → Cooldown or Ready according to the ability definition
```

### Implementation rules

- One ability handler module per ability family, keyed by ability ID in a registry.
- Handlers receive a validated context: caster, target, aim, definition, server time. They return a result, not a client message.
- Cooldowns are server timestamps. A client may render a countdown from a replicated end time, but the server decides readiness.
- Timed effects are owned by `AbilityService` and cleaned up on death, disconnect, world exit and encounter end.
- No ability creates an unbounded number of instances. Pool projectiles and effects where the definition allows.
- Damage, healing and control are applied by server-side effect modules, not by touched client parts.
- Every ability needs a fallback presentation at low graphics: a readable telegraph and impact marker, even if particles are reduced.

### What the runtime can be built without knowing

The generic shell — validation order, state machine, cooldown store, effect registry, cleanup — can be built now. The 162 content definitions cannot be tuned until roles, activation rules and counterplay are approved. Build the shell; gate the content.

---

## 8. Scanner, research and archive flow

### First scan

1. Client raycasts or proximity-detects a specimen for presentation.
2. Client sends `ScanRequest` with the specimen instance ID.
3. Server resolves the instance to a stable plant ID through `PlantSpawnService`.
4. Server validates distance, line of sight, world state and ownership.
5. Server writes ownership atomically: plant ID, first-scan timestamp, region ID, anchor ID.
6. Server returns a result code and the archive delta.
7. Client plays the discovery cinematic locally; the server may trigger a shared presentation event for nearby players.
8. If the write fails, the scan fails cleanly. No "pending" ownership that disappears later.

### Research

- Research milestones are ordered per plant. The server rejects out-of-order completion.
- A milestone may require a location, a weather phase, a time window, a nearby organism or a field interaction. The requirement is data, evaluated server-side.
- The client can show a hint, but the server owns completion.
- Unlocking an ability is a separate write from completing the milestone, in the same transaction where possible.
- Research progress survives world rotation and rejoin.

### Archive

- The archive reads a projection of save data, not the save table directly.
- Locked abilities are shown as part of an owned set but marked locked. The distinction between "owned plant" and "unlocked ability" must be visible.
- The archive never reveals undiscovered species names unless the design later decides otherwise. That is OPEN.

---

## 9. Save schema v1

**PROPOSED shape** (Luau table, stored as a versioned dictionary):

```lua
type SaveV1 = {
  schemaVersion: number,          -- 1
  createdAt: number,
  updatedAt: number,
  plants: {
    [string]: {                   -- stable plant ID, e.g. "PLANT_001"
      owned: boolean,
      firstScanAt: number,
      firstRegionId: string,
      firstAnchorId: string,
      research: {
        stage: string,            -- "scanned" | "researching" | "complete" | "mastered"
        milestones: { [string]: boolean },
      },
      abilities: { [string]: boolean },  -- ability ID -> unlocked
      mastery: number,
    },
  },
  loadouts: {
    activePreset: number,
    presets: {
      { name: string, plantIds: { string } },
    },
  },
  world: {
    visitedWorldIds: { [string]: boolean },
    discoveredRegionIds: { [string]: boolean },
    anchorFlags: { [string]: boolean },
  },
  settings: {
    reducedMotion: boolean,
    textScale: number,
    colorblindMode: string,
  },
  stats: {
    scans: number,
    researchCompleted: number,
    encountersCompleted: number,
    playSeconds: number,
  },
}
```

**Rules:**

- Save only stable IDs and compact state. Never save models, positions of decorative objects or per-frame data.
- One DataStore key per player, with a session lease to prevent two servers writing the same profile.
- `UpdateAsync` for writes; retry with backoff; surface a save failure to the player and queue a retry.
- Autosave on a controlled interval and at meaningful transitions: scan, milestone, ability unlock, world travel, leave.
- Never save inside a combat tick or a per-frame loop.
- Every schema change increments `schemaVersion` and ships a migration function with a fixture test.
- A failed migration must not wipe the profile. Keep the raw profile for manual recovery.
- Do not trust teleport payloads for progression. Load from the store after arrival.

**OPEN:** persistence backend beyond DataStore (external database, cross-experience profile service), session-lock implementation, and whether mastery needs its own collection surface. Decide before launch, not before the vertical slice.

---

## 10. Streaming and world loading

Apply the canonical settings from `07_Technical/Instance_Streaming.md`:

| Setting | Value |
|---|---|
| `StreamingEnabled` | `true` (Studio-only; verify per place) |
| `ModelStreamingBehavior` | `Improved` |
| `StreamingIntegrityMode` | `PauseOutsideLoadedArea` |
| `StreamingMinRadius` | 64 (starting value) |
| `StreamingTargetRadius` | 1024 (starting value) |
| `StreamOutBehavior` | Evaluate `Opportunistic` after measurement |
| SLIM | Evaluate for static environment models |

**Model design:**

- Every region is a compact model or a small set of models, not one world-spanning model.
- Landmarks can be `Atomic` only when their descendants must appear together.
- `Persistent` is reserved for gameplay anchors and rare objects that must survive stream-out. Never make the map persistent.
- Scripts must tolerate streamed-out instances. Do not cache a Workspace reference across a region transition.
- Server logic uses stable IDs and server-owned state, never a client's local model.

**Fast traversal test:** walk, sprint, glide or ability-dash across every region boundary. Record time-to-visible and any hole. If the next region is not ready, reduce traversal speed, adjust boundaries, or add a controlled preload — not a blind radius increase.

**World loading:** on travel, the destination place loads its own map and applies its own theme. Do not keep two worlds loaded in one server unless the prototype explicitly needs it.

---

## 11. Performance budgets

The repository correctly refuses to invent universal targets before a measured baseline. The following are **PROPOSED working envelopes** for planning. Replace them with measured values after the vertical slice; do not treat them as engine limits.

### Working envelope

| Metric | Desktop target | Mid-tier mobile target | Measurement |
|---|---|---|---|
| Frame rate | 60 FPS at quality 6–8 | 30 FPS at quality 4 | Studio device emulation + real device |
| Client frame time | ≤ 16.7 ms | ≤ 33.3 ms | MicroProfiler, 95th percentile |
| Server script time | ≤ 8 ms per tick | same | Developer Console, peak encounter |
| Client script time | ≤ 6 ms per frame | ≤ 10 ms | MicroProfiler |
| Draw calls, typical | ≤ 1,500 | ≤ 900 | Render Stats |
| Draw calls, peak | ≤ 2,500 | ≤ 1,500 | Render Stats, worst view |
| Client memory | ≤ 3.5 GB | ≤ 2.0 GB | Developer Console |
| Join to playable | ≤ 30 s | ≤ 45 s | Timed join test |
| Region stream-in | ≤ 3 s at sprint | ≤ 5 s | Boundary traversal test |
| Remote traffic | ≤ 8 KB/s per player | ≤ 8 KB/s | Network stats |
| Physics | No unanchored decorative props | same | Explorer audit |
| Shadow-casting lights per view | ≤ 4 meaningful | ≤ 2 | Scene audit |

**Budget ownership:** every region gets a copy of `07_Technical/Map_Performance_Budget_Template.md`. A region without a completed budget sheet is not accepted.

**Regression rule:** after the baseline exists, no change may increase a region's 95th-percentile frame time by more than 10% or its peak memory by more than 15% without an explicit trade-off note.

### Required test scenes

- Dense forest clearing.
- Long open vista.
- Underground cave with lights.
- Underwater area with particles.
- Busy plant habitat.
- Highest-intensity ability presentation.
- Four players in one encounter.
- Fast traversal across a streamed boundary.

---

## 12. Client presentation rules

- Camera and input are client-owned; the character's authoritative position is server-owned.
- Ability VFX are local. The server replicates the effect ID, origin and target, not every particle.
- Weather is local presentation driven by a compact server phase.
- UI reads a replicated view model, not the save table.
- Prediction is allowed for movement feel and immediate input feedback; it is never allowed to grant ownership, cooldowns or rewards.
- The client must handle a missing streamed instance gracefully: show a loading cue, do not error, do not assume the object is gone forever.
- Cinematics are skippable, never block input for more than the approved discovery beat, and must handle late joiners without replaying a half-finished sequence.

---

## 13. Observability

**PROPOSED telemetry events** (no personal data):

| Event | Fields |
|---|---|
| `session_start` | place ID, device class, quality level |
| `profile_loaded` | load ms, returning/new |
| `scan_attempt` | plant ID, result, distance band |
| `plant_acquired` | plant ID, region ID, session time |
| `research_milestone` | plant ID, milestone ID, session time |
| `ability_unlock` | plant ID, ability ID |
| `ability_used` | ability ID, result, cooldown ready |
| `encounter_start` / `encounter_end` | encounter ID, party size, result, duration |
| `world_enter` / `world_exit` | world ID, session time |
| `save_failure` | stage, retry count |
| `perf_sample` | FPS band, frame-time band, memory band, region ID |

**Debug flags:** a server-side `DEBUG` flag enables verbose validation logs for one player at a time. Never log every remote in production; it is both a performance and a privacy problem.

---

## 14. Build and test tooling

**PROPOSED:**

- **Rojo** for source-controlled place files, if implementation lives in this repository. If the team stays Studio-only, mirror the Explorer tree exactly and treat the place file as the source of truth.
- **Generated Luau config** from `07_Technical/Data/` via a Node script, run in CI.
- **Pure-module unit tests** for validation, save migration, rate limits and ability state transitions. Use a minimal harness; do not add a large test framework without a reason.
- **Studio playtest scripts** for the runtime paths that cannot be unit-tested: scan, research, ability, encounter, streaming, save/rejoin.
- **A dedicated test region** with dense foliage, water, a cave, a light cluster and an ability effect. Profile it before every world production start.

**CI checks (when the project exists):**

1. Data regeneration is clean.
2. Generated Luau is up to date.
3. Luau syntax/type check passes (StyLua/Selene/Luau LSP or equivalent, chosen by the team).
4. Unit tests pass.
5. No asset ID is duplicated across worlds without a documented reason.
6. Save schema fixtures migrate from v1 to current.

---

## 15. Implementation sequence

| Stage | Deliverable | Exit evidence |
|---|---|---|
| T0 | Place skeleton, folder tree, boot order, generated configs | Place opens, services start, config validates |
| T1 | Movement, camera, input abstraction | Keyboard/mouse, controller, touch parity for traversal |
| T2 | Test region greybox + streaming settings | Walk/sprint boundary test recorded |
| T3 | Scan → own → archive write | Rejoin preserves ownership; duplicate scan idempotent |
| T4 | Research → ability unlock | Milestone order enforced; save survives rejoin |
| T5 | Ability runtime shell + one full set | Cooldown server-authoritative; cleanup on death/disconnect |
| T6 | Encounter state machine + one encounter | Four-player test; reward computed server-side |
| T7 | Loadout + hub + travel | Presets validate; teleport loads authoritative profile |
| T8 | Performance and security hardening | Budget sheet accepted; exploit checklist passed |

**Do not start T7 before T5.** A hub around a loop that does not work is scenery.

---

## 16. Open technical questions

These are recorded in the decision register with owners and deadlines:

1. Single place vs hub + world places for 1.0 (D2).
2. Persistence backend and session-lock approach (D7).
3. Whether cooldowns persist across loadout switches and rejoin (part of D4).
4. Server size and party size (D9).
5. Whether abilities can be used while swimming, gliding or mounted, per world (depends on traversal design).
6. How research conditions are authored: data-only predicates vs per-plant handler modules.
7. Whether the archive is a physical hub terminal, a menu, or both.
8. Localization and text pipeline.
9. Anti-cheat beyond server validation: rate limits, anomaly detection, report tooling.
10. Whether to use a third-party persistence or analytics service. Any choice must be evaluated against Roblox's built-in services and the project's no-new-dependency rule.
