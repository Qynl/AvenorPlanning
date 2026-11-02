# AVENOR — Development Roadmap

> This roadmap reflects the current game direction. It is a proposal for staged development, not a claim that any systems have already been implemented. Do not begin by building all ten worlds or importing the entire content catalogue.

## 1. Development rules

1. Prove the core player experience before producing large amounts of content.
2. Build one playable vertical slice end-to-end.
3. Test movement and traversal before deciding world scale.
4. Test permanent weapon discovery and saving before creating dozens of unlocks.
5. Test NPC performance before filling regions with population.
6. Build reusable systems before expanding maps.
7. Keep competitive modes connected to the same weapon collection.
8. Profile on mobile throughout development.
9. Record approved design changes in the canonical document.
10. Do not mistake a detailed planning catalogue for implemented game content.

## 2. Current design baseline

- Large modern stylised-realistic multiplayer Open World.
- One active world at a time, rotating on a proposed four-day schedule.
- Ten proposed worlds in the collection; not all are launch scope.
- Permanent player progression and weapon ownership.
- Weapons discovered in the Open World only.
- Separate competitive shooter playlists using owned weapons.
- Fast movement with no stamina, sprint, jump, slide and slide-jump.
- Magazine / quick-access / backpack reload concept.
- NPC population with adventurers, civilians, traders, guards, specialists and optional hostile groups.
- Seasonal transformations and world incidents.
- Home screen with loadout and Arsenal.
- Existing weapon, ability and cosmetic catalogues retained as content libraries.

## 3. Milestone overview

### M0 — Design and project foundation
- Confirm current game identity and canonical rules.
- Audit existing catalogues and identify incompatible legacy assumptions.
- Establish Roblox place structure and repository workflow.
- Define naming, IDs and content data formats.

**Exit:** no conflicting source-of-truth documents; project opens and runs in a clean test place.

### M1 — Movement feel prototype
- First-person camera.
- Unrestricted sprint.
- Jump and air control.
- Slide and slide-jump.
- Keyboard/mouse, controller and mobile input.
- Basic movement replication and validation.

**Exit:** movement feels responsive and fun in an empty greybox; no stamina system.

### M2 — Combat and weapon handling prototype
- A small representative weapon set.
- Firing, hit validation and damage.
- Loaded magazine, quick-access spare and backpack reload states.
- Weapon switching and utility.
- Basic combat HUD.

**Exit:** combat is readable, server-validated and works on supported input types.

### M3 — Permanent weapon discovery
- One discoverable weapon in the test world.
- Server-validated discovery condition.
- Persistent owned-weapon record.
- Arsenal ownership display.
- Death/rejoin test.

**Exit:** weapon remains permanently owned across death, disconnect and server rejoin.

### M4 — First Open World district
- Greybox one compact region of GREYHAVEN.
- Main hub, one town/city district, one remote location.
- Roads, landmarks and representative interiors.
- Streaming and mobile performance test.
- Basic map and compass.

**Exit:** player can navigate a coherent district and enjoys travelling through it.

### M5 — NPC vertical slice
- Civilian.
- Trader/specialist.
- Adventurer group with a route.
- Guard/security NPC.
- One optional hostile encounter.
- One NPC-led discovery.

**Exit:** NPCs create visible activity without unacceptable server cost.

### M6 — Activities and discovery journal
- One repeatable activity.
- One multi-step exploration discovery.
- Permanent journal records.
- One permanent weapon unlock.
- Basic reward feedback.

**Exit:** the Open World has a reason to explore beyond walking and shooting.

### M7 — Home screen and loadouts
- 3D character/weapon showcase.
- Enter World.
- Game Modes.
- Loadout presets.
- Arsenal.
- Discoveries and Events.
- Settings and social navigation.

**Exit:** player can configure, enter the world and understand ownership.

### M8 — First competitive playlist
- DUEL or another small competitive prototype.
- Match lifecycle and queue flow.
- Uses owned Open World weapons.
- No weapon unlock rewards.
- Match result and mastery rewards.

**Exit:** Open World and competitive experience share the same persistent arsenal correctly.

### M9 — World event and rotation prototype
- Two test world packages or two distinct versions.
- Authoritative rotation schedule.
- World calendar and countdown.
- Safe transition between cycles.
- Player data persists.

**Exit:** active world can change without deleting or corrupting player progress.

### M10 — Seasonal event prototype
- One seasonal transformation.
- World decorations and ambience.
- Temporary NPC/activity.
- Permanent cosmetic reward.
- Event archive record.

**Exit:** event changes the experience, not just the menu background.

### M11 — Expanded world and content production
- Expand GREYHAVEN.
- Build second world.
- Add more NPCs and activities.
- Add weapon discovery sources from existing catalogue.
- Add world-specific secrets and audio/visual identity.

**Exit:** two complete worlds are fun and performant before expanding the collection.

### M12 — Expanded competitive playlists
- TDM.
- FFA.
- Objective mode.
- Ranked prototype after casual stability.
- Competitive arena greyboxes.

**Exit:** each mode is distinct and works with the shared weapon system.

### M13 — Progression, cosmetics and social
- Account progression.
- Weapon mastery.
- Cosmetic shop and inventory.
- Events calendar and archive.
- Parties, friends and profile.
- Emotes and post-match presentation.

**Exit:** rewards are persistent, clear and non-pay-to-win.

### M14 — Additional world production
- Add worlds according to the ten-world plan.
- Prioritise distinct geography and activities.
- Use reusable world systems and content pipelines.
- Profile each region before approval.

**Exit:** each additional world passes the same quality gates.

### M15 — Release candidate and hardening
- Security and exploit review.
- Data persistence and recovery testing.
- Cross-platform testing.
- Performance, streaming and server load.
- Moderation and reporting.
- Live event schedule and operational plan.

**Exit:** stable end-to-end player experience with no critical data-loss or progression issues.

## 4. Strict first playable scope

Do not attempt ten worlds at once. The first playable should contain:
- One small GREYHAVEN district.
- One safe hub proposal.
- One connected exploration route.
- Three to five representative weapons.
- One permanent weapon discovery.
- One NPC group and a few basic NPC roles.
- One activity and one secret.
- Fast movement prototype.
- Ammunition reload prototype.
- Basic home screen and loadout.
- One small competitive test playlist.

## 5. Quality gates

A milestone is not complete because code exists. It must be demonstrated in a playable Roblox build, tested on target devices and reviewed against its exit criteria.

## 6. Immediate next actions

1. Build a movement test place.
2. Prototype the reload states.
3. Test one small Open World district.
4. Validate permanent weapon unlock saving.
5. Prototype one travelling NPC group.
6. Only then commit to exact world scale and expanded content.


## 7. Revised priority: prove exploration before scale
The first vertical slice must prove the actual AVENOR identity, not merely movement and shooting. Prioritise one compact but convincing district with several discoverable places, other players, a small purposeful NPC population, one optional activity, one hidden discovery and one observable world reaction. A player should have fun exploring even when no major event or combat encounter is active.

### New performance gates
- Build the benchmark scenes in `AVENOR_Map_Performance.md` before committing to world dimensions.
- Establish measured client/server frame-time and memory baselines on target mobile and desktop devices.
- Test streaming while sprinting and during dense NPC/player gatherings.
- Profile NPC simulation tiers before increasing population.
- Do not begin full production of the second world until the first district passes repeatable performance tests.

### Revised milestone order
1. Movement and camera feel prototype.
2. One compact Greyhaven greybox with streaming enabled.
3. Multiplayer join/leave and player interaction.
4. Exploration route, hidden discovery and journal persistence.
5. Small NPC population with routines and one optional encounter.
6. One witnessed incident and faction reaction, with no visible wanted meter.
7. Combat/PvP and friendly-fire rules prototype.
8. Performance profiling and art pass.
9. Expand district only after the benchmark passes.
10. Add vehicles, wider economy or more complex simulation only after separate approval and prototype evidence.
