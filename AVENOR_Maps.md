# AVENOR — World & Competitive Map Design Standards

> AVENOR has two different map categories: large rotating Open World regions and compact competitive arenas. They share art direction and movement rules, but they have different design goals. Do not design an Open World as if it were one oversized arena.

## 1. Open World design philosophy

Open World regions must feel like coherent modern places that players can inhabit and explore.

A good world includes:
- A recognisable geography and skyline.
- Major settlements and smaller locations.
- Main roads and secondary travel routes.
- Interesting interiors, rooftops, basements and infrastructure.
- Quiet exploration areas and optional encounter areas.
- NPC routines and activity locations.
- Secrets and weapon discoveries.
- Landmarks that help players navigate without staring at the map.
- Environmental storytelling and event hooks.

## 2. Region structure

Every Open World should include:
1. **Arrival / safe hub proposal:** a readable place to orient, configure and meet other players.
2. **Main settlement:** a city or town with services and multiple districts.
3. **Secondary settlements:** smaller locations with their own identity.
4. **Infrastructure:** ports, factories, railways, airports, dams, roads or other region-specific sites.
5. **Natural area:** forests, mountains, lakes, coast, desert or countryside.
6. **Remote destination:** a location worth travelling to.
7. **Discoverable interiors:** places with more to explore than a single room.
8. **Secrets:** hidden routes, records, clues and unexpected discoveries.

Not every map needs every category in the same proportion. Each must fit its own geography.

## 3. Scale and travel

- The user wants large worlds, but final size has not been selected.
- Do not invent a square-kilometre target or final stud dimensions.
- Prototype a district, measure traversal time and performance, then establish a scale standard.
- Avoid empty travel distance. Long routes need landmarks, NPC activity, optional stops or changing scenery.
- Provide multiple ways to move through important areas without making navigation confusing.
- Vehicles are not yet approved as a launch requirement; design roads sensibly but keep vehicle-specific layouts provisional.

## 4. Exploration and discovery

Each world must include:
- Discoveries visible from landmarks and discoveries found through investigation.
- Secret interiors or routes.
- Environmental clues.
- NPC-led discoveries.
- A permanent journal record for major discoveries.
- Weapon discovery points with clear unlock conditions.
- Optional activities that are not just repeated identical fetch tasks.

Do not reveal every secret with a permanent map marker. The journal can record what has been found while the world map preserves some mystery.

## 5. Player encounters and combat spaces

- Some areas naturally support PvP or PvE encounters, but the entire map should not feel like a military arena.
- Safe/neutral hubs and PvP rules need an explicit final decision.
- Design clear cover, escape routes and readable engagement spaces where combat is expected.
- Do not place essential exploration rewards behind unavoidable player combat until the PvP model is approved.
- Avoid surprise combat directly at arrival or respawn points.

## 6. NPC and activity integration

Every region needs an NPC plan:
- Civilian population.
- Adventurer routes.
- Traders and specialists.
- Security / guards.
- Optional hostile NPC encounters.
- Event-specific characters.

NPC routes and activities should make the world feel active but must be budgeted for server performance.

## 7. Environmental identity

Each world needs its own:
- Lighting and time-of-day treatment.
- Weather and ambience.
- Material palette.
- Architecture language.
- Ambient audio.
- Landmark silhouettes.
- Interior art direction.

Keep AVENOR's overall presentation consistent without forcing every region into the same colour palette.

## 8. Roblox performance standards

- Use streaming and modular region loading.
- Keep collision geometry simple where possible.
- Limit active NPC simulation by distance and relevance.
- Use level-of-detail strategies for distant structures.
- Avoid excessive dynamic lights, transparent layers and unbounded particle effects.
- Test on low- and mid-range mobile devices.
- Ensure interiors stream reliably before players enter them.
- Track memory, frame rate, network ownership and server frame time.

## 9. Competitive arena standards

Competitive arenas have separate requirements:
- Readable spawn regions.
- Multiple approach routes.
- Balanced sightlines and cover.
- Vertical positions with counter-routes.
- Objective spaces sized for their mode.
- No direct uninterrupted line of sight between opposing spawns.
- Mode-specific greybox and playtest.
- Compact footprint and stable performance.

The eight legacy arena concepts in the former document are not automatically the ten Open World regions. Keep arena layouts only if they still serve a separate competitive playlist.

## 10. Approval checklist

A map cannot be called ready until:
- Its region identity is obvious.
- Main and secondary areas are connected logically.
- Travel is interesting and not padded.
- At least one full exploration loop is playable.
- NPCs have a reason to be present.
- Weapon discovery conditions work and persist.
- Secrets are discoverable but not arbitrary.
- PvP and safe-area rules are clear.
- Performance is tested on mobile and desktop.
- The map remains enjoyable without a scheduled event running.


## 11. Exploration-first map design and performance ownership
Open World maps must support curiosity, social encounters and optional activities. A region should feel like a place to inhabit, not an oversized combat arena or a chain of mandatory missions. Players should be able to find interesting destinations through landmarks, environmental clues, NPC movement and exploration without every point being exposed as a map marker.

Every Open World map must be designed and approved using `AVENOR_Map_Performance.md`. That document owns the detailed production pipeline, streaming strategy, geometry/asset guidance, NPC simulation tiers, benchmark scenes, profiling matrix and release gates. This file retains the high-level geography and gameplay design standards.

Do not lock map dimensions, NPC counts, server capacity or final detail budgets until a representative greybox has been measured on target devices. Performance review is required at concept, greybox, population, art-pass and release stages.
