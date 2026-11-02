# AVENOR — Open World Region Layout Planning

> **Status: high-level layout framework.** This document replaces the old arena-only greybox framing. It describes region structure for the ten proposed Open World maps. Exact dimensions, coordinates, road widths, elevations and travel times are intentionally TBD until the user chooses a target scale and a Roblox streaming prototype validates it.

## 1. Shared layout rules

- Use a readable top-down region map with named districts and natural boundaries.
- Every world needs a main settlement, secondary locations, natural area, infrastructure and remote discoveries.
- Connect major places with a hierarchy of primary roads, secondary roads, paths and service routes.
- Avoid one straight central road connecting every landmark.
- Add loops, alternate routes and shortcuts where they improve exploration.
- Important destinations should be visible or signposted from at least one navigational landmark.
- Hidden routes should reward observation, clues or exploration, not pixel hunting.
- Plan interiors as part of the map layout, not as disconnected rooms added at the end.
- Place NPC routes and activities during greyboxing.
- Keep safe hubs and possible PvP boundaries explicit.
- Use streaming-friendly region chunks and test cross-boundary transitions.

## 2. Proposed regional diagrams

Diagrams are conceptual, not to scale. North is at the top.

### 01 — GREYHAVEN

```
[NORTH: Greenbelt / Lake / Cabins]
          | country roads
[Outer Towns] --- [Greyhaven City] --- [Old Harbour]
          |              |                 |
       [Farms]      [Industrial Quarter] -- [Freight Piers]
          |              |
    [South Highway] -- [Remote Facility]
```

**Layout focus:** balanced first world. Keep city, harbour, countryside and industrial district connected by several routes. The remote facility should require a deliberate trip rather than sit beside the spawn.

### 02 — SOLARA

```
[NORTH: Hill Villages] --- [Inland Hills]
          |                     |
[West Beaches] --- [Solara Town] --- [Marina Coast]
          |                     |
[Cliff Paths] --- [Airport / Service Road]
          |
[Remote Research Site]
```

**Layout focus:** island perimeter road plus inland shortcuts. Use elevation and coastal paths to create route choices. Keep the airport and remote site distinct from the main town.

### 03 — NORTHPASS

```
[High Observatory] --- [Upper Mountain Road]
          |                    |
[Alpine Resort] --- [Northpass Town] --- [Dam / Waterworks]
          |                    |
[Pine Forest] --- [Frozen Lake] --- [Mountain Tunnel]
```

**Layout focus:** vertical elevation bands. The player should understand how the valley, resort and upper ridge connect. Avoid making the only route to a major location a long narrow tunnel.

### 04 — IRONVALE

```
[Old Factory Quarter] --- [Ironvale Works]
          |                    |
[Worker Town] --- [Freight District] --- [Rail Depot]
          |                    |
[River Corridor] --- [Power Complex] --- [Service Roads]
```

**Layout focus:** industrial loops, rail boundaries and layered interiors. Provide safe pedestrian routes around large industrial props.

### 05 — REDSTONE

```
[Canyonlands] --- [Remote Shelter] --- [Research Compound]
      |                  |
[Mining Operation] --- [Redstone Town] --- [Desert Highway]
      |                                      |
[Quarry Roads] --- [Old Airfield] --- [Roadside Stops]
```

**Layout focus:** long visual horizons broken by canyons and built landmarks. Use road stops and side routes to prevent empty travel.

### 06 — WESTBRIDGE

```
[North Suburbs] --- [Downtown North] --- [Transit Hub]
       |                    |                 |
[Commercial District] --- [Riverfront] --- [Office Core]
       |                    |                 |
[South Suburbs] --- [Construction Zone] --- [Service Network]
```

**Layout focus:** dense urban blocks with vertical traversal, street-level loops and a carefully bounded underground network. Avoid too many identical rooftops.

### 07 — PINEFALL

```
[North Ranger Station] --- [Deep Forest] --- [Remote Cabins]
          |                    |                  |
[Pinefall Village] --- [Lake District] --- [Island Docks]
          |                    |
[Logging Quarter] --- [Dam / Waterworks] --- [South Trail]
```

**Layout focus:** forest clearings and lake edges as navigation anchors. Paths should have distinctive landmarks so players do not experience the forest as repetitive foliage.

### 08 — EASTPORT

```
[Cargo Airport] --- [Eastport City] --- [Coastal Suburbs]
       |                  |                    |
[Container Port] --- [Freight Roads] --- [Shipyard]
       |                                      |
[Service Docks] --- [Offshore Access Point / Future]
```

**Layout focus:** large port geometry, cargo lanes and shipyard interiors. Offshore access is provisional until boats/transport are approved.

### 09 — DUSTFORD

```
[Woodland Hills] --- [Forgotten Town] --- [Railway]
       |                    |                |
[Farm Belt] --- [Dustford Town] --- [Highway Strip]
       |                    |
[Remote Barns] --- [Motel / Service Stops]
```

**Layout focus:** scattered settlements connected by readable rural roads. The forgotten town should be a deliberate discovery, not an obvious spawn landmark.

### 10 — BLACKRIDGE

```
[Observatory Ridge] --- [Highland Road] --- [Mountain Village]
          |                    |                  |
[Quarry District] --- [Blackridge Village] --- [Dam Valley]
          |                                       |
[Old Resort] --- [Tunnel Network] --- [River Route]
```

**Layout focus:** plateau and valley transitions, switchback roads and remote viewpoints. Ensure vertical routes are not just long ladders or dead ends.

## 3. Greybox process

For each world:
1. Block out terrain and major region boundaries.
2. Add primary and secondary travel routes.
3. Place settlement footprints and large landmarks.
4. Add a small set of representative interiors.
5. Add one full exploration route from the hub to a remote discovery.
6. Add NPC route markers and activity locations.
7. Test travel time and movement feel.
8. Test streaming boundaries and memory.
9. Add PvP/safe-area boundaries only after the interaction rules are approved.
10. Expand only after the greybox is fun to traverse.

## 4. Dimensions and scale

Do not set exact stud dimensions in this document yet. The user has not selected between large, huge or massive worlds. The first prototype should measure:
- Time from hub to nearest secondary settlement.
- Time from hub to a remote landmark.
- Time to cross the playable region.
- Average time between interesting points.
- Streaming load time and memory.
- NPC density and server cost.

Use those results to set a consistent world-size standard.

## 5. Separate competitive arena layouts

Competitive arenas remain a separate map family. Their dimensions and mode overlays should be documented only after the first competitive prototype is selected. Do not repurpose these ten regional diagrams as arena layouts.
