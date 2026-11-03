# World and Map Building Pipeline

**Status:** PROPOSED WORKFLOW  
**Purpose:** A repeatable way to build large, beautiful worlds in Roblox Studio without turning every map into an unoptimised pile of parts.

## 1. Design the world before opening Studio
For each world, define:
- One-sentence identity and visual silhouette.
- Three major biomes and their transitions.
- Three or more hidden sub-regions.
- Major landmarks visible from a distance.
- Main routes, alternate routes and shortcuts.
- Native plants and their habitat anchors.
- Encounter spaces and safe exploration pockets.
- Vertical layers, underground spaces and water spaces.
- Streaming boundaries and performance risks.

Create a simple top-down map with labelled regions before modelling.

## 2. Greybox the whole route
Use simple anchored parts and terrain to block out:
- Spawn and first landmark.
- Main travel loop.
- At least two alternate routes.
- One hidden route.
- One vertical traversal section.
- One encounter space.
- One return route.

Test walking, jumping, camera visibility and navigation before adding detail. If the greybox is not fun to explore, more foliage will not fix it.

## 3. Build terrain and large forms
- Use Terrain Editor for large natural landforms, caves, slopes, water and broad transitions.
- Use modular meshes for distinctive cliffs, arches, roots, ruins and rock formations.
- Use parts for simple blockout, collision helpers and small structural details.
- Avoid using hundreds of tiny parts to imitate one large natural shape.
- Keep collision geometry simpler than the visible art.

## 4. Build a modular environment kit
Create reusable families:
- Ground and path pieces.
- Cliffs and rock formations.
- Trees, roots and trunks.
- Ruins and structures.
- Water edges and shoreline pieces.
- Biome transition pieces.
- Landmark components.
- Foliage clusters.

Reuse the same mesh and texture assets with different scale, rotation and colour where appropriate. Package reusable assets so updates can be propagated safely.

## 5. Add visual layers
Build in this order:
1. Terrain silhouette and playable routes.
2. Large landmarks.
3. Mid-sized structures and vegetation.
4. Foliage clusters and ground detail.
5. Lighting, fog, sky and ambient sound.
6. Plant specimens, scan clues and encounter props.
7. Cinematic framing and discovery moments.

Keep the playable route readable. Decoration must not hide cliffs, interactables or navigation cues.

## 6. Design biomes as connected spaces
Each biome needs:
- A distinct palette and silhouette.
- A clear entrance and exit.
- A landmark that helps orientation.
- A unique traversal or environmental feature.
- A few native plant habitats.
- A quiet area and a challenge area.
- A route to at least one optional discovery.

## 7. Add hidden regions
Hide areas through readable clues: unusual airflow, root patterns, water reflections, sound, light, terrain shapes or plant behaviour. Avoid arbitrary invisible walls and pixel-hunt entrances.

## 8. Add gameplay anchors
Place invisible, clearly named anchors for:
- Plant spawn habitats.
- Scan points and research interactions.
- Encounter start and end.
- Safe zones.
- Traversal links.
- Cinematic camera positions.
- Event triggers.

Gameplay anchors should be separated from decorative geometry.

## 9. Streaming-aware map construction
- Divide the world into logical regions and models.
- Keep models spatially compact.
- Avoid one enormous model spanning an entire biome.
- Make scripts tolerate streamed-out instances.
- Keep only essential always-present objects persistent.
- Test entering and leaving every region at speed.

## 10. Review before art lock
Walk the map at normal speed, sprint speed and traversal-ability speed. Test with low graphics quality, mobile-sized screen and multiple players. Fix navigation, collision and performance before adding final decoration.

## Definition of done
A biome is ready for polish only when its greybox routes work, its identity is readable, its plant habitats make sense, its hidden route is discoverable and its performance budget is acceptable.
