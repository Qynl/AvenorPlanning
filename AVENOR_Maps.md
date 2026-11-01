# AVENOR — Map System & Arena Design Standards

> **Status: Proposed for approval.** This document defines the standards for designing, evaluating, and documenting AVENOR maps. It does not lock individual maps, layouts, dimensions, or final map counts. Every map must be tested in its intended modes before approval.

## 1. Map Design Philosophy

AVENOR maps should be memorable arenas built for fast, readable, competitive FPS gameplay.

A map must do more than look attractive. It needs to create meaningful decisions through:
- Route choice and positioning.
- Clear but varied sightlines.
- Cover, exposure, and safe rotations.
- Sprinting, sliding, jumping, and air control.
- Flanks and alternate approaches.
- Verticality that creates options without making opponents impossible to read.
- Mode-specific objective spaces.
- Distinct visual identity and landmarks.

**Core rule:** Build the gameplay layout first, then wrap the visual theme around it. A beautiful map that plays badly is not a good AVENOR map.

## 2. Map Identity

Every map must have a recognisable identity.

Each map needs:
- A unique name.
- A strong visual theme and atmosphere.
- A memorable central landmark or defining feature.
- A distinct layout or gameplay mechanic where appropriate.
- A clear colour and material language.
- A short identity statement explaining what makes the map different.

Maps must not feel like the same arena with different textures. Reusing proven layout principles is acceptable; copying the same flow and changing the theme is not.

## 3. Map Size Categories

Map size is determined by player count, travel time, sightlines, and objective spacing, not by an arbitrary stud count.

| Category | Intended use | Design focus |
|---|---|---|
| Compact | DUEL and some DUOS layouts | Fast engagements, short rotations, tightly controlled sightlines |
| Medium | DUOS, 4v4 team modes, ORIGIN | Multiple routes, meaningful flanks, objective control |
| Large | FFA or modes that need more separation | More spawn options, route variety, controlled long sightlines |

These are functional categories, not fixed dimensions. Exact dimensions and travel times must be measured in Roblox Studio and playtested.

A map should not be enlarged simply to feel impressive. Empty travel space weakens match pacing.

## 4. Layout and Route Standards

### Route structure
- Maps should provide more than one viable way to reach important areas.
- Main routes must be easy to understand at a glance.
- Alternate routes should offer a meaningful trade-off, such as extra travel time, exposure, elevation, or reduced cover.
- Flanking routes must not become unavoidable instant access to every spawn.
- Chokepoints may exist, but should have more than one possible response where practical.
- Dead ends should be intentional and provide a clear tactical benefit or risk.

A three-route structure can be a useful starting point, but it is not mandatory. Maps should not all become identical three-lane layouts.

### Route readability
Players should be able to understand:
- Where a route leads.
- Whether it is exposed or protected.
- Which areas connect.
- Whether a route is one-way or can be reversed.
- Where important objectives and landmarks are located.

Use architecture, lighting, colour, and landmarks to guide players naturally. Do not rely entirely on arrows or UI markers.

## 5. Sightlines, Cover, and Engagement Distance

Every map should support a deliberate mix of engagement distances.

- Short sightlines create close-range encounters and movement opportunities.
- Medium sightlines support the main rhythm of most engagements.
- Long sightlines should be intentional and should not dominate every route.
- Cover should break up exposed spaces without creating confusing visual clutter.
- Players should have a reasonable way to challenge or avoid a powerful sightline.
- Spawn areas must not be directly exposed to common enemy positions.

Sniper-friendly positions can exist, but they must have counter-routes, limited dominance, or meaningful exposure. No single position should control too much of the map without a cost.

Cover must be visually consistent with its actual collision. Decorative objects must not misleadingly appear solid or block shots when they do not.

## 6. Verticality and Movement

Maps must support AVENOR's confirmed movement direction:
- Sprint.
- Slide.
- Jump.
- Responsive ground movement.
- Air control.

Vertical routes should create interesting choices, not mandatory frustration.

Standards:
- Elevated positions need identifiable access routes.
- Important areas should not be reachable only through obscure movement exploits.
- Players below should have a readable way to understand threats above.
- Jump gaps and slide routes must be tested at realistic movement values.
- No route should depend on frame-rate-specific timing.
- Movement paths must be checked on keyboard/mouse, controller, and mobile.
- Avoid excessive overlapping platforms, tiny ledges, and decorative geometry that creates inconsistent collision.

Not every map needs advanced verticality. Some maps should be flatter and more focused on timing, aim, and route control.

## 7. Spawn Design

Spawn fairness is mandatory.

### Spawn principles
- Players should not spawn in immediate enemy line of sight where practical.
- Spawn selection must consider enemy distance, visibility, nearby combat, objective state, and recent spawn locations.
- Avoid repeatedly spawning a player in the same unsafe area.
- Spawn areas need more than one viable exit where possible.
- Spawn locations should not be easy to trap with a single player or ability.
- Spawn protection, if used by a mode, must be brief and clearly communicated.

### Team modes
- Team spawns should be separated enough to prevent immediate cross-map eliminations.
- Spawn flipping should be predictable enough to understand but not exploitable.
- Objective progress must not cause the spawn system to place players directly into danger.
- Maps need safe fallback spawn locations.

### FFA
- Use several distributed spawn locations.
- Avoid placing players beside an active opponent or directly behind an opponent who cannot reasonably react.
- Account for recent eliminations and local combat density.
- Test spawn logic with the full intended player count.

Spawn fairness must be measured through repeated playtests, not judged only by looking at the map in Studio.

## 8. Objective and Mode Support

A map must list exactly which modes it supports and why its layout suits them.

| Mode | Important map requirements |
|---|---|
| DUEL | Fair starting positions, controlled sightlines, compact routes, no dominant spawn trap |
| DUOS | Two-player coordination, useful cover pairs, alternate approaches |
| TEAM DEATHMATCH | Safe spawn distribution, route variety, room for repeated engagements |
| FREE FOR ALL | Multiple viable spawn locations, low spawn repetition, several engagement routes |
| HARDPOINT | Clear objective rotation spaces, multiple approaches, defensible but contestable zones |
| CAPTURE THE FLAG | Readable bases, balanced attack routes, viable return paths, meaningful defence |
| AVENOR ORIGIN | Layout built around the evolving central objective, with surrounding routes and space for changing priorities |

A map may support multiple modes, but only if each mode works properly. Do not force every mode onto every map.

### AVENOR ORIGIN maps
ORIGIN maps need special attention:
- The central structure must be visually and spatially important.
- Players need more than one approach to the objective.
- Surrounding areas should create meaningful choices between contesting, defending, and rotating.
- Objective changes must remain readable from different parts of the arena.
- The layout must support the final approved ORIGIN mechanics, not an assumed version of them.

## 9. Map Interactions and Pickups

Interactive map elements should exist only when they improve gameplay.

Possible elements:
- Weapon pickups.
- Doors or gates.
- Jump or movement features.
- Breakable or temporary objects, if technically fair.
- Mode-specific objective devices.
- Resupply or interaction points, if a mode requires them.

Rules:
- Interactions need clear visual and audio feedback.
- Activation range and timing must be consistent.
- Interactions must not trigger accidentally during combat.
- Important interactions must be server-validated.
- Pickups must be visible and understandable before collection.
- A map mechanic must not create an unavoidable advantage for one starting side.
- Avoid adding mechanics just because they look impressive.

Every interactive element must have a documented purpose, interaction rule, cooldown or reset rule where applicable, and counterplay.

## 10. Visual Direction and Performance

### Visual identity
- Clean, readable, low-to-mid-poly Roblox 3D style.
- Strong silhouettes and clear material separation.
- Distinct map themes without visual noise.
- Lighting that supports visibility and does not hide opponents unfairly.
- Landmarks that help players orient themselves.
- AVENOR's deep navy, ice blue, white, graphite, and soft violet can inform the world, but every map does not need to use the exact same palette.

### Performance
- Keep geometry, particles, lighting, and moving objects within Roblox performance budgets.
- Avoid excessive transparent layers and overlapping effects.
- Use level-of-detail and streaming approaches where appropriate.
- Test on lower-end mobile devices as well as PC.
- Avoid large numbers of unnecessary physics-driven objects.
- Keep collision simple and predictable.

Visual spectacle must never make opponents, projectiles, pickups, or objectives harder to read.

## 11. Competitive Fairness Checklist

Before a map is accepted, test:
- Both starting sides.
- All supported modes and intended player counts.
- Spawn safety and spawn repetition.
- Long sightline dominance.
- Flank travel time and exposure.
- Vertical access and escape routes.
- Objective approach balance.
- Pickup placement and contestability.
- Collision accuracy.
- Performance on target platforms.
- Whether a player can become trapped without a reasonable response.
- Whether one position or route dominates too many situations.

Maps should be tested with real players. A layout that looks symmetrical may not play symmetrically.

## 12. Map Specification Template

Every individual map document should use this structure:

1. **Name**
2. **One-sentence identity**
3. **Visual theme and atmosphere**
4. **Supported modes**
5. **Recommended player counts**
6. **Size category**
7. **Layout overview**
8. **Main routes and flank routes**
9. **Key areas and landmarks**
10. **Sightlines and engagement distances**
11. **Vertical routes and movement features**
12. **Spawn locations and spawn logic**
13. **Objectives and mode-specific layout**
14. **Pickups and interactive elements**
15. **Visual readability requirements**
16. **Performance considerations**
17. **Known risks and counterplay**
18. **Playtest results and revisions**
19. **Approval status**

## 13. Map Development Workflow

1. Define the map's gameplay identity.
2. Select the modes and player counts it should support.
3. Create a simple greybox layout.
4. Test routes, sightlines, movement, and spawns.
5. Revise the layout before detailed art.
6. Add the visual theme and landmarks.
7. Add approved interactions and pickups.
8. Test performance and readability on multiple devices.
9. Run repeated matches in every supported mode.
10. Approve the map only when it meets the fairness and performance checklist.

Do not build a fully decorated map before its greybox has proven fun.

## 14. Current Decisions and Open Questions

### Confirmed direction
- AVENOR will have multiple distinct arena maps.
- Maps should support movement, alternate routes, verticality, cover, and meaningful map control.
- Maps should be designed for competitive readability and Roblox performance.
- Mode compatibility is selective; not every map must support every mode.
- AVENOR ORIGIN is a signature 4v4 mode and its maps must be designed around its final objective mechanics.

### Proposed standards
- Compact, Medium, and Large functional map categories.
- Layout, route, sightline, spawn, objective, interaction, visual, and performance standards in this document.
- Greybox-first development workflow.
- Individual map specification template.

### Still open
- Initial launch map count.
- Individual map themes and names.
- Exact dimensions and movement travel times.
- Which maps support which modes.
- Weapon pickup rules and placements.
- Interactive map mechanics.
- Spawn algorithms and numerical safety thresholds.
- Final ORIGIN objective layout requirements.
- Ranked map pool and map-veto rules.


## 15. Map 01 — FOUNDRY (Working Name)

> **Status: Concept selected.** The setting and broad purpose are approved for development. The final name, exact layout, dimensions, mode compatibility, and gameplay balance remain subject to greyboxing and playtesting.

### Core identity

**Setting:** A futuristic industrial research facility.

**Identity statement:** A high-tech research complex built around a massive central industrial structure, where clean laboratory architecture meets heavy machinery, service infrastructure, and active energy systems.

The map should feel like a real, functioning facility rather than a collection of disconnected sci-fi rooms. Its visual storytelling should suggest that the complex was designed to research, manufacture, contain, or test advanced technology.

### Purpose in the map roster

Map 01 is intended to be AVENOR's versatile baseline arena:
- A medium-sized map.
- Designed to test AVENOR's core movement, combat, sightlines, and map flow.
- Intended to support several modes rather than being built for only one.
- A useful first environment for validating the map standards in this document.
- A strong visual identity without allowing decoration to compromise readability.

It should be broad enough to create meaningful route choices, but compact enough to keep matches active. Avoid empty corridors and long stretches of travel without decisions.

### Central landmark

The defining feature is a massive central industrial structure.

It should:
- Be visible and recognisable from multiple parts of the map.
- Help players orient themselves without needing constant UI guidance.
- Create a memorable focal point in the arena.
- Influence the surrounding layout and route choices.
- Provide visual identity without automatically becoming an overpowered combat position.

The central structure may inspire future visual ideas for AVENOR ORIGIN, but Map 01 is **not automatically an ORIGIN-only map**, and its layout must not assume unapproved ORIGIN mechanics.

### Visual language

Use a futuristic industrial research-facility aesthetic:
- Large-scale machinery, structural supports, research infrastructure, and controlled-access areas.
- A balance of heavy industrial spaces and clean, advanced laboratory sections.
- Strong architectural silhouettes and clear material separation.
- Purposeful lighting, with the facility's technology providing visual interest.
- AVENOR's navy, ice blue, white, graphite, and soft violet palette as a foundation, with restrained industrial accent colours where useful.

The environment should feel advanced and polished, not excessively dark, cluttered, or visually noisy. Opponents, projectiles, pickups, and objectives must remain easy to distinguish from the environment.

### Layout direction

The exact layout is not locked. During greyboxing, explore:
- A central arena organised around the landmark structure.
- Multiple routes connecting the outer areas to the centre.
- At least one meaningful flank route with a clear trade-off.
- A mix of enclosed facility spaces and more open industrial areas.
- Deliberate short-, medium-, and limited long-range sightlines.
- Elevation changes that support sprinting, sliding, jumping, and air control.
- More than one viable approach to important areas.

Do not force a symmetrical three-lane layout. The final structure should emerge from playtesting and the map's identity.

### Initial mode targets

The initial design target is to evaluate the map for:
- DUEL and DUOS, if fair compact combat spaces can be created within the layout.
- TEAM DEATHMATCH.
- HARDPOINT, if objective rotations work naturally with the arena.
- AVENOR ORIGIN only if its eventual mechanics genuinely fit the map.

FREE FOR ALL and CAPTURE THE FLAG are not assumed. Add them only if the final scale, spawn distribution, and route structure support them properly.

These are candidates for testing, not a promise that every mode will ship on this map.

### Greybox priorities

The first playable version should focus on:
1. Overall travel time between major areas.
2. Route choice and flank viability.
3. Whether the central structure dominates too much of the arena.
4. Close-, medium-, and long-range engagement balance.
5. Vertical access and counter-routes.
6. Spawn safety for every supported mode.
7. Whether the map remains readable at match speed.
8. Performance on PC and lower-end mobile devices.

Do not begin detailed decoration until the greybox is fun and fair.

### Risks to watch

- The central structure becoming an overpowered position or unavoidable chokepoint.
- Long industrial corridors creating dominant sniper sightlines.
- Similar-looking rooms making navigation difficult.
- Decorative machinery creating unclear collision or blocking visibility.
- Too many routes making the arena difficult to learn.
- The facility theme producing excessive visual clutter or darkness.

Every risk must be evaluated in playtests and addressed through layout, readability, or balance changes.

### Approval checklist

Map 01 is not ready for final approval until:
- A playable greybox exists.
- Its supported modes have been tested at their intended player counts.
- Both starting sides have been evaluated.
- Spawn safety and route balance have been tested repeatedly.
- The central landmark is memorable but not unfairly dominant.
- Movement and combat flow feel good at real match speed.
- Performance and visual readability are acceptable across target devices.



## 16. Additional Map Concepts — Maps 02–08

> **Status: Initial concepts.** These seven maps expand the proposed roster to eight maps including Map 01 — FOUNDRY. Their identities and gameplay directions are planning decisions; names, exact layouts, mode pools, dimensions, and balance remain subject to greyboxing and playtesting. Each map must earn its place through a distinct gameplay experience, not merely a different theme.

---

### Map 02 — BREAKWATER

**Setting:** A storm-battered offshore shipping terminal.

**Identity:** A coastal freight complex built across loading platforms, container yards, cranes, and a large dockside vessel.

**Gameplay character:** Open sightlines broken up by dense, layered cover. The map should reward route planning and controlled rotations between exposed dock areas and protected cargo spaces.

**Layout direction:**
- A broad central container yard with several readable paths through it.
- A dockside vessel that creates a distinct enclosed combat space.
- An elevated crane-maintenance route, accessible from predictable entrances.
- A lower service route near the waterline, slower but more protected.
- Open loading lanes that create deliberate long-range opportunities without letting one angle dominate the whole map.

**Size:** Medium to Large.

**Initial mode targets:** TEAM DEATHMATCH, HARDPOINT, CAPTURE THE FLAG, FREE FOR ALL.

**Signature landmark:** A huge cargo ship at the terminal, visible from much of the arena.

**Risks to watch:** Container stacks creating confusing sightlines, crane positions becoming too dominant, and water or dock edges creating frustrating movement restrictions. Water should be visual or carefully bounded, not a source of unpredictable physics.

---

### Map 03 — SUNSPIRE

**Setting:** An ancient desert citadel adapted into a high-tech energy research site.

**Identity:** A sunlit fortress of stone courtyards, modern installations, narrow passages, and layered terraces.

**Gameplay character:** A more deliberate, vertical arena where elevation and route commitment matter. Unlike FOUNDRY's industrial centre, SUNSPIRE should feel open-air, warm, and architectural.

**Layout direction:**
- A large central courtyard with several entrances and substantial cover.
- Two elevated terraces with separate access routes.
- Tight interior passages that connect outer courtyards.
- A lower route through the foundations, offering safer but slower rotations.
- Carefully limited long sightlines across open courtyards.

**Size:** Medium.

**Initial mode targets:** DUEL, DUOS, HARDPOINT, AVENOR ORIGIN.

**Signature landmark:** A tall sunspire tower rising above the central courtyard. It is a navigation landmark, not a freely accessible sniper nest.

**Risks to watch:** Upper levels controlling too much of the map, narrow passages becoming unavoidable chokepoints, and bright lighting reducing opponent visibility. Every elevated position needs a readable counter-route.

---

### Map 04 — NEON DISTRICT

**Setting:** A dense futuristic city block at night.

**Identity:** A compact urban arena woven through a transit plaza, storefronts, an arcade, and connected building interiors.

**Gameplay character:** Fast, close-to-medium-range engagements with many short rotations. Navigation should feel intuitive despite the density. This is the roster's close-quarters urban map.

**Layout direction:**
- A recognisable central transit plaza.
- Interconnected ground-floor interiors with multiple exits.
- A raised pedestrian walkway that creates a useful but exposed rotation.
- A service alley network for flanks.
- Limited rooftop access, with no rooftop route overlooking every major area.

**Size:** Compact to Medium.

**Initial mode targets:** DUEL, DUOS, TEAM DEATHMATCH, HARDPOINT.

**Signature landmark:** A bright transit hub and its large suspended route display.

**Risks to watch:** Too many doorways creating unreadable fights, neon effects obscuring players, interiors becoming repetitive, and flank routes allowing instant access to spawn areas. Keep signage and lighting restrained enough for competitive clarity.

---

### Map 05 — FROSTLINE

**Setting:** A remote alpine communications and climate-monitoring station.

**Identity:** A cold-weather research outpost spread between a communications tower, snow-covered service buildings, and a partially enclosed maintenance hangar.

**Gameplay character:** A more open, rotation-focused map with carefully managed long sightlines. It should contrast with NEON DISTRICT by offering breathing room and stronger medium-to-long-range engagements.

**Layout direction:**
- A central communications compound with several approach routes.
- A hangar that provides a protected close-range combat space.
- A winding exterior route with intermittent cover.
- A raised observation structure that is exposed and has limited sightline coverage.
- Snowbanks and facility structures used as clear, reliable cover.

**Size:** Medium to Large.

**Initial mode targets:** TEAM DEATHMATCH, FREE FOR ALL, CAPTURE THE FLAG, HARDPOINT.

**Signature landmark:** A tall communications array visible across the snowfield.

**Risks to watch:** White-on-white visibility problems, long-range positions controlling too much space, and snow terrain creating unclear collision. Snow effects must not obscure players or projectiles.

---

### Map 06 — OVERGROWTH

**Setting:** A futuristic botanical research dome reclaimed by uncontrolled plant growth.

**Identity:** A once-pristine scientific greenhouse where glass architecture, research infrastructure, and dense vegetation now form an unusual arena.

**Gameplay character:** A route-reading and close-to-medium-range map. Its vegetation creates visual identity, but must never become unreliable camouflage or conceal opponents unfairly.

**Layout direction:**
- A central conservatory with a large, recognisable tree installation.
- Several connected greenhouse wings with different shapes and sightline profiles.
- A maintenance ring running around the outside of the main dome.
- A lower irrigation and service route that offers a slower flank.
- Carefully placed clearings that create readable engagement spaces.

**Size:** Medium.

**Initial mode targets:** DUOS, TEAM DEATHMATCH, HARDPOINT, AVENOR ORIGIN.

**Signature landmark:** A monumental tree growing through the centre of the glass dome.

**Risks to watch:** Dense foliage hiding opponents, transparent glass producing visual clutter, and similar-looking greenhouse wings causing navigation problems. Foliage must have predictable collision and visibility rules.

---

### Map 07 — BLACKSITE

**Setting:** A remote underground containment and testing complex.

**Identity:** A controlled-access facility built around a sealed central chamber, with heavy blast doors, observation rooms, and service tunnels.

**Gameplay character:** A tight, structured arena built around room-to-room transitions and controlled chokepoints. It should be tense and readable, not a maze.

**Layout direction:**
- A central containment chamber with several distinct entrances.
- An observation gallery overlooking only part of the central space.
- A service loop that connects the outer rooms.
- A limited number of short connector corridors, each with clear exits.
- No dead-end room without a meaningful reason to enter it.

**Size:** Compact to Medium.

**Initial mode targets:** DUEL, DUOS, TEAM DEATHMATCH, HARDPOINT.

**Signature landmark:** The sealed containment chamber, identifiable through its architecture and lighting.

**Risks to watch:** Corridor-heavy gameplay, spawn trapping, repetitive room shapes, and doors interrupting combat flow. Doors should not randomly close during fights or create one-sided access advantages.

---

### Map 08 — SKYLINE

**Setting:** A futuristic high-rise business and residential complex connected by skybridges.

**Identity:** A multi-building rooftop arena where open terraces, interior floors, and elevated connections create a strong sense of height and movement.

**Gameplay character:** The roster's most vertical map. Its challenge is to make elevation exciting without making opponents difficult to track or allowing rooftop control to decide every engagement.

**Layout direction:**
- Three distinct building sections connected by broad, readable skybridges.
- Interior stair and lift-core spaces connecting different levels.
- Rooftop terraces with limited, deliberate sightlines.
- A lower connecting route through an enclosed service level.
- Multiple safe ways to move between buildings, with exposed bridges offering faster rotations.

**Size:** Medium.

**Initial mode targets:** DUOS, TEAM DEATHMATCH, HARDPOINT, AVENOR ORIGIN.

**Signature landmark:** A central skybridge linking the tallest building sections.

**Risks to watch:** Falling becoming a constant frustration, rooftop positions dominating the map, bridge crossings becoming unavoidable kill zones, and vertical navigation confusing players. Falls should have clear boundaries and predictable consequences; essential routes must not depend on precision jumps.

---

## 17. Proposed Map Roster Overview

| Map | Size | Distinct gameplay identity | Initial mode candidates |
|---|---|---|---|
| 01 — FOUNDRY | Medium | Central industrial landmark, versatile baseline | DUEL, DUOS, TDM, HARDPOINT, possible ORIGIN |
| 02 — BREAKWATER | Medium–Large | Container-yard cover and exposed dock lanes | TDM, HARDPOINT, CTF, FFA |
| 03 — SUNSPIRE | Medium | Courtyards, terraces, deliberate verticality | DUEL, DUOS, HARDPOINT, possible ORIGIN |
| 04 — NEON DISTRICT | Compact–Medium | Dense urban close-range routes | DUEL, DUOS, TDM, HARDPOINT |
| 05 — FROSTLINE | Medium–Large | Open rotations and controlled long sightlines | TDM, FFA, CTF, HARDPOINT |
| 06 — OVERGROWTH | Medium | Greenhouse wings and readable close-to-mid fights | DUOS, TDM, HARDPOINT, possible ORIGIN |
| 07 — BLACKSITE | Compact–Medium | Structured room-to-room combat | DUEL, DUOS, TDM, HARDPOINT |
| 08 — SKYLINE | Medium | Multi-level buildings and skybridge rotations | DUOS, TDM, HARDPOINT, possible ORIGIN |

**Roster rule:** These mode lists are test candidates, not automatic compatibility promises. A map should be excluded from a mode if its greybox fails that mode's fairness, pacing, or spawn requirements. The eight concepts should also be reviewed together to ensure the final map pool has meaningful variety in scale, sightlines, verticality, and match rhythm.
