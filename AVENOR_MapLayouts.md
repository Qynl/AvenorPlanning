# AVENOR — Map Greybox Layout Blueprints

> **Status: Proposed greybox blueprints.** These layouts turn the eight approved map concepts into buildable first-pass arena plans. Dimensions, coordinates, route widths, vertical heights, spawn zones, and objective placements are starting targets in Roblox studs, not locked final geometry. Every map must pass mode-specific playtests before production art.

## 1. Shared Coordinate and Layout Rules

- Each map uses a local top-down coordinate plane. **West** is left, **East** is right, **South** is bottom, and **North** is top.
- The southwest corner is coordinate `(0, 0)`. Coordinates are approximate greybox landmarks, not exact part placements.
- Dimensions describe the playable footprint, not decorative scenery.
- Keep at least three meaningful route choices between opposing sides wherever the mode supports them.
- Every important elevated position needs at least two readable access or counter-routes.
- Do not make a route mandatory if it can be held from one safe, dominant angle.
- Spawn zones must be protected from immediate line-of-sight and must have more than one safe exit.
- No spawn may have a direct uninterrupted view into the opposing spawn.
- Place pickups in contestable transition spaces, not inside protected spawn zones.
- Use consistent collision and visibility rules. Decorative glass, foliage, water, snow, and railings must not create surprise hitboxes.
- Dimensions are tuned for the proposed movement package and must be re-evaluated if movement changes.

## 2. Map 01 — FOUNDRY

**Role:** Baseline medium arena. It should teach AVENOR's route language without being visually or mechanically plain.

**Proposed footprint:** 220 × 180 studs. Three principal elevations: ground floor, upper catwalks, and limited service platforms.

### Top-down structure

- **West spawn zone:** `(22, 90)`, protected by two offset walls and two exits.
- **East spawn zone:** `(198, 90)`, mirrored in safety and route access, not necessarily in scenery.
- **Central Forge Hall:** `(110, 90)`, large industrial landmark with waist-high cover islands and two side entrances.
- **North route:** `y ≈ 145`, elevated maintenance catwalk with two access stairs and interrupted sightlines.
- **South route:** `y ≈ 35`, ground-level conveyor/service corridor with two exits and a slower rotation.
- **West interior:** `(65, 90)`, workshop room with several exits; no dead-end.
- **East interior:** `(155, 90)`, loading-control room with a partial view of the central hall.

### Route identities

1. **Center:** Fastest route, most exposed, several pieces of hard cover.
2. **North catwalk:** Elevated and useful for rotations, but broken into short sightline segments.
3. **South service route:** More protected and slightly longer, with multiple exits to prevent trapping.

### Greybox objectives

- Test central landmark readability from all four approaches.
- Ensure the north catwalk cannot see both spawn exits.
- Keep the south route useful without making it the universally safest route.
- Use FOUNDRY as the first map for DUEL, then validate TDM and HARDPOINT variants.

### Mode overlays

- DUEL: use the central hall and both side routes; disable spawn-side extensions if needed.
- TDM: activate the full footprint with opposing spawn regions.
- HARDPOINT: test five objective anchors distributed between center, north interior, south service, and the two side rooms.
- ORIGIN: reserve the central hall as the awakening space, with two claim-site candidates on opposite side sectors.

## 3. Map 02 — BREAKWATER

**Role:** Medium-large rotation map with container cover, a cargo vessel, and carefully limited long lanes.

**Proposed footprint:** 260 × 210 studs. Ground dock, vessel deck, and one elevated crane-maintenance route.

### Top-down structure

- **West spawn:** `(24, 105)`, behind the terminal office block.
- **East spawn:** `(236, 105)`, behind stacked freight buildings.
- **Container yard:** central band from `x = 75–185`, `y = 65–145`; container stacks form readable lanes, never a sealed maze.
- **Cargo vessel:** `(130, 165)`, with a broad deck and two accessible interior entry points.
- **Crane maintenance route:** northern edge `y ≈ 185`, short elevated path with limited view into the yard.
- **Waterline service route:** southern edge `y ≈ 25`, protected, slower, and connected back to the yard at two points.
- **Loading lane:** central-east corridor, long enough for range variety but broken by fixed cover.

### Route identities

1. **Container grid:** Flexible mid-range route with frequent choices.
2. **Vessel deck:** More enclosed route with close-to-mid engagements.
3. **Waterline:** Protected rotation that takes longer and cannot bypass the entire map unseen.
4. **Crane route:** Elevated shortcut with restricted sightlines and clear access points.

### Greybox objectives

- Prevent container stacks from creating invisible or ambiguous angles.
- Keep the crane route exposed enough to contest.
- Ensure water edges are hard-bounded and never use unpredictable physics.
- Test FFA spawns carefully because container layouts can produce repeated close spawns.

### Mode overlays

- TDM/FFA: full yard and vessel.
- HARDPOINT: objective anchors rotate between yard, vessel deck, and terminal interior.
- CTF: bases sit in the west and east terminal zones; both teams receive comparable route options.

## 4. Map 03 — SUNSPIRE

**Role:** Medium open-air citadel with deliberate elevation and a central courtyard.

**Proposed footprint:** 210 × 190 studs. Three ground terraces and two controlled upper platforms.

### Top-down structure

- **West spawn:** `(20, 95)`, lower outer courtyard.
- **East spawn:** `(190, 95)`, opposite lower outer courtyard.
- **Central courtyard:** `(105, 95)`, open enough to read but broken by three substantial cover structures.
- **Sunspire tower:** `(105, 125)`, visual landmark only; no unrestricted roof access.
- **North terrace:** `(105, 160)`, short upper platform with two exits and a partial courtyard view.
- **South terrace:** `(105, 30)`, separate elevation with a different approach.
- **Foundation route:** southern interior band `y ≈ 15`, slower protected connector with two exits.
- **Side passages:** west and east interior loops connecting courtyard edges.

### Route identities

1. **Courtyard:** Direct, visible, cover-based central route.
2. **North terrace:** Elevated route with limited view and at least two counter-approaches.
3. **South foundation:** Protected but slower route.
4. **Side passages:** Short interior connectors that prevent a single central choke.

### Greybox objectives

- Test upper-platform value without granting permanent map control.
- Keep every terrace accessible through more than one predictable route.
- Make the tower a navigation landmark, not an inaccessible sniper perch.
- Test lighting and player contrast at every time-of-day setting.

### Mode overlays

- DUEL: compact courtyard and side loops.
- HARDPOINT: test central and terrace anchors, excluding any anchor with only one viable entrance.
- ORIGIN: central courtyard is the AWAKEN space; claim candidates are opposite side terraces.

## 5. Map 04 — NEON DISTRICT

**Role:** Compact-to-medium urban map for short rotations and close-to-mid-range engagements.

**Proposed footprint:** 185 × 165 studs. Ground-floor interiors, one pedestrian walkway, and limited upper-floor access.

### Top-down structure

- **West spawn:** `(18, 82)`, behind a closed transit-office frontage.
- **East spawn:** `(167, 82)`, behind an arcade/service block.
- **Transit plaza:** `(92, 82)`, central navigation landmark with cover islands.
- **Arcade interior:** `(125, 45)`, multiple exits and a short interior loop.
- **Storefront block:** `(55, 115)`, connected ground-floor rooms with no single-door dead ends.
- **Pedestrian walkway:** northern band `y ≈ 145`, exposed crossing with two stair access points.
- **Service alley:** southern band `y ≈ 20`, two parallel connectors that rejoin the central area.
- **Roof access:** one limited upper route on the east and one on the west, neither overlooking the full plaza.

### Route identities

1. **Transit plaza:** Main central connection.
2. **Interior chain:** Close-range route through connected storefronts.
3. **Service alleys:** Fast flank paths with multiple exits.
4. **Pedestrian walkway:** Exposed upper rotation, not a dominant overlook.

### Greybox objectives

- Prevent doorway clutter and repeated doorframe fights.
- Ensure the plaza remains readable under neon signage.
- Keep roof access limited and visible.
- Make spawn exits safe without making the outer alleys uncontestable.

### Mode overlays

- DUEL: use plaza, interior chain, and one alley loop.
- TDM: activate both alley loops and all interiors.
- HARDPOINT: anchors should alternate between plaza, arcade, storefront block, and walkway base. Avoid objectives inside tiny rooms.

## 6. Map 05 — FROSTLINE

**Role:** Medium-large outpost with longer rotations and carefully bounded long sightlines.

**Proposed footprint:** 270 × 210 studs. Open snowfield, communications compound, hangar, and a limited observation structure.

### Top-down structure

- **West spawn:** `(25, 105)`, behind a low facility cluster.
- **East spawn:** `(245, 105)`, behind a separate service cluster.
- **Communications compound:** `(135, 105)`, central hub with several approach routes.
- **Maintenance hangar:** `(80, 155)`, protected close-range space with two wide exits.
- **Array tower:** `(180, 160)`, visual landmark and restricted observation platform.
- **Outer snow route:** southern arc `y ≈ 30`, long rotation with intermittent cover.
- **Service buildings:** two small structures along the north-east and south-west edges.
- **Snow berms:** placed as reliable cover, with consistent height and collision.

### Route identities

1. **Central compound:** Medium-range, multi-entry space.
2. **Hangar:** Protected close-range alternative.
3. **Outer snow route:** Longer exposed rotation with periodic cover.
4. **Observation route:** Limited elevated view with obvious counter-routes.

### Greybox objectives

- Keep player silhouettes visible against snow and building materials.
- Break long lanes with cover and terrain changes.
- Avoid bright particle snow that obscures players or projectiles.
- Ensure the outer route is viable but not a safe way to bypass the entire match.

### Mode overlays

- TDM/FFA: full footprint with extra spawn validation.
- CTF: bases at west/east service clusters, with multiple approach routes.
- HARDPOINT: anchors alternate between compound, hangar exterior, and snow-route cover pockets.

## 7. Map 06 — OVERGROWTH

**Role:** Medium greenhouse arena with connected wings and a strong central landmark. Vegetation is decorative and never functions as unreliable concealment.

**Proposed footprint:** 215 × 185 studs. Central conservatory, four wings, outer maintenance ring, and lower service route.

### Top-down structure

- **West spawn:** `(20, 92)`, west research wing.
- **East spawn:** `(195, 92)`, east research wing.
- **Central conservatory:** `(108, 92)`, monumental tree installation and broad circular route.
- **North wing:** `(108, 155)`, glass research gallery with clear sightlines and several cover pieces.
- **South wing:** `(108, 28)`, equipment and irrigation lab.
- **West and east wings:** `(55, 92)` and `(160, 92)`, distinct room shapes and multiple exits.
- **Maintenance ring:** perimeter path with regular re-entry points.
- **Lower irrigation route:** southern underpass connecting both sides with two visible exits.

### Route identities

1. **Conservatory loop:** Central rotation around the tree installation.
2. **Research wings:** Interior route options with different sightline lengths.
3. **Maintenance ring:** Outer rotation, visible at entry points.
4. **Irrigation route:** Slower lower connector with no dead ends.

### Greybox objectives

- Use simplified opaque foliage volumes during competitive testing.
- Do not allow plants or glass to create inconsistent visibility.
- Make each wing recognizable by shape and landmark, not only colour.
- Ensure the central tree does not block every route through the center.

### Mode overlays

- DUOS/TDM: full map.
- HARDPOINT: anchors distributed between conservatory and wings.
- ORIGIN: conservatory is the AWAKEN location; two claim candidates are opposite wings.

## 8. Map 07 — BLACKSITE

**Role:** Compact-to-medium structured interior arena. The layout should feel controlled, not maze-like.

**Proposed footprint:** 180 × 160 studs. One central chamber, four outer rooms, and a connected service loop.

### Top-down structure

- **West spawn:** `(18, 80)`, secure entry room with two exits.
- **East spawn:** `(162, 80)`, opposite secure entry room with two exits.
- **Containment chamber:** `(90, 80)`, central space with three broad entrances and substantial internal cover.
- **North observation gallery:** `(90, 135)`, overlooks only part of the chamber and has two access routes.
- **South service loop:** `y ≈ 25`, connected corridor with multiple room exits.
- **West test room:** `(48, 125)`, short engagement room with two doors.
- **East control room:** `(132, 35)`, objective-support room with multiple entrances.
- **Connector corridors:** short, wide, and limited in number. No long single-file corridors.

### Route identities

1. **Central chamber:** Primary contest space.
2. **North gallery:** Partial elevated view with limited exposure.
3. **South service loop:** Protected rotation that rejoins the main route twice.
4. **Side rooms:** Optional cover and repositioning spaces, never required dead ends.

### Greybox objectives

- Test every corridor from both directions.
- Ensure blast doors are static during combat in the initial version.
- Avoid room shapes that look identical.
- Validate spawn safety and prevent one team from holding both exits of the opposing spawn.

### Mode overlays

- DUEL: central chamber and two adjacent rooms.
- TDM: full footprint, with carefully tested respawn regions.
- HARDPOINT: use central chamber, gallery base, and side-room anchors only if each has multiple entries.

## 9. Map 08 — SKYLINE

**Role:** Medium vertical arena with three building sections and broad, readable skybridges.

**Proposed footprint:** 230 × 190 studs. Three building masses, two primary playable levels, and one lower service connector.

### Top-down structure

- **West spawn:** `(22, 95)`, west tower interior.
- **East spawn:** `(208, 95)`, east tower interior.
- **Central tower:** `(115, 95)`, central navigation landmark.
- **West skybridge:** connects west tower to central tower at upper level.
- **East skybridge:** connects central tower to east tower at upper level.
- **Lower service connector:** links all three buildings at ground/service level.
- **Rooftop terraces:** one limited terrace per tower, with interrupted sightlines and multiple exits.
- **Stair/lift cores:** broad, predictable vertical routes in every building.
- **Fall boundaries:** obvious rails and blocked decorative edges around all essential routes.

### Route identities

1. **Upper skybridges:** Faster exposed rotation between buildings.
2. **Interior floors:** Protected route with stair/lift-core connections.
3. **Lower service connector:** Slower route that avoids bridge exposure.
4. **Rooftop terraces:** Optional elevated spaces with restricted views.

### Greybox objectives

- Make falls rare and predictable; essential routes never require precision jumps.
- Ensure no rooftop sees both opposing spawn exits.
- Give each bridge at least one alternative route.
- Keep vertical navigation understandable from every spawn.
- Validate camera and mobile readability across height changes.

### Mode overlays

- DUOS/TDM: full building network.
- HARDPOINT: rotate objectives between building interiors, bridge bases, and lower connector.
- ORIGIN: central tower interior is the AWAKEN space; claim candidates are west and east tower interiors.

## 10. Shared Spawn Blueprint

### Round-based modes

- Place spawn positions behind solid visual blockers.
- Give each spawn at least two exits with distinct first route choices.
- Ensure both players or teams have equivalent access to central routes.
- Do not allow a player to see the opposing spawn from a spawn position.

### Respawn modes

- Use multiple spawn candidates per team or player.
- Exclude candidates under direct enemy line-of-sight where possible.
- Avoid spawning near active enemies, contested objectives, or immediate hazard zones.
- Rotate candidates to prevent predictable repeated spawns.
- Validate the spawn system at real player counts, not only in an empty editor.

### FFA

- Distribute spawn candidates around the map perimeter and safe interior pockets.
- Prevent repeated spawn proximity to the same opponent.
- Never place FFA spawns inside an active objective capture zone.

## 11. Shared Pickup Placement Blueprint

- Place high-value pickups in contested transition spaces rather than protected corners.
- Every pickup must have at least two approach routes.
- Avoid placing a pickup where a player can watch it from a spawn-safe position.
- Make pickup identity, slot replacement, and availability state clear.
- Use mode-specific pickup sets only when the mode's pacing requires them.
- Do not let pickups silently replace the Ability slot.
- Initial greyboxes should use a small, fixed pickup set so tests remain comparable.

## 12. Greybox Validation Checklist

Every map must pass the following before art production:

- [ ] Every major area can be reached through at least two routes.
- [ ] Spawn exits are safe and provide meaningful choices.
- [ ] No single elevated position dominates the map.
- [ ] No long sightline controls too many objectives or routes.
- [ ] Close, medium, and long engagement spaces are intentionally distributed.
- [ ] Pickups are contestable and do not reward spawn control alone.
- [ ] Objectives have multiple viable approach routes.
- [ ] Navigation is understandable without a minimap.
- [ ] Every route works with the proposed walk, sprint, jump, and slide package.
- [ ] FFA spawns do not create repeated immediate engagements.
- [ ] Mobile camera and touch controls remain viable.
- [ ] Performance is acceptable with representative player counts and effects.

## 13. Implementation Order

1. FOUNDRY: first production greybox and baseline DUEL.
2. NEON DISTRICT: validate compact route density and close-range readability.
3. SUNSPIRE: validate controlled verticality.
4. BREAKWATER: validate container cover and larger rotations.
5. FROSTLINE: validate longer sightlines and open-space readability.
6. BLACKSITE: validate interior route clarity.
7. OVERGROWTH: validate foliage and glass readability.
8. SKYLINE: validate multi-level navigation and fall boundaries.

This order deliberately tests different layout problems before the entire roster is built. The map count is not a release requirement; each map must earn inclusion through testing.

## 14. Related Documents

- `AVENOR_Maps.md` — map identities, visual direction, map standards, and mode candidates.
- `AVENOR_GameModes.md` — mode rules, objective logic, and map compatibility.
- `AVENOR_Gameplay.md` — movement, combat, pickups, and match rules.
- `AVENOR_Technical.md` — map streaming, collision, spawn validation, and performance.
- `AVENOR_Roadmap.md` — implementation milestones and production order.
