# AVENOR — Rotating World Collection

> Ten proposed large regions for the long-term collection, not a launch commitment. Names, order, dimensions and rotation cadence remain provisional.

## Shared principles
Every region is a coherent place with distinct geography, architecture and ambience. Include landmarks, quiet exploration, social locations, remote destinations, secrets, interiors, NPC activity and optional combat. Do not design an oversized arena or pad the map with empty distance. First production target is one compact district in GREYHAVEN. Measure traversal, memory, server cost and mobile frame rate before deciding full-world dimensions.

Worlds should be authored with reusable seasonal/global-state variants in mind. A region is not a separate copy for every event: use shared modular assets and controlled world-state profiles for weather, materials, vegetation, lighting, water, ambience and NPC presentation. A transformation must still be designed and tested per region; do not assume one universal snow/foliage overlay will work everywhere.

## Proposed regions
### 01 GREYHAVEN
Coastal mainland: balanced city, old harbour, suburbs, countryside, industrial quarter and remote restricted facility. Introductory all-rounder. Suitable for spring, summer, autumn, Halloween and anniversary variants. Winter conversion is possible but must be deliberately authored and tested.

### 02 SOLARA
Mediterranean island: coastal town, beaches, cliffs, hills, villages, airport and remote research site. Warm coastal exploration and island geography. Strong summer/spring candidate; exclude from a full Arctic WINTERLIGHT rotation unless a dedicated cold-region reinterpretation is intentionally built.

### 03 NORTHPASS
Alpine region: mountain town, ski resort, pine forest, frozen lakes, tunnels, hydroelectric infrastructure and observatory. Primary winter/Arctic-compatible candidate, with natural snow, ice and cold-weather infrastructure.

### 04 IRONVALE
Industrial basin: steelworks, freight rail, worker town, power complex, old factory quarter and river corridor. Layered interiors and infrastructure exploration. Strong autumn, winter-industrial, spring and anniversary candidate.

### 05 REDSTONE
Arid inland region: roadside town, canyonlands, mining operation, desert highway, old airfield and remote compound. Rock formations and long horizons. Strong summer and autumn candidate. Exclude from full snow-covered WINTERLIGHT unless a separate, intentionally designed event variant replaces the desert identity.

### 06 WESTBRIDGE
Dense metropolis: downtown, suburbs, riverfront, transit network, shopping district and construction zone. Vertical urban exploration. Strong New Year, Halloween, winter-city, summer and anniversary candidate.

### 07 PINEFALL
Forest/lake region: village, national forest, cabins, logging quarter, lake district and dam/waterworks. Quiet wilderness and remote discoveries. Primary winter/Arctic-compatible candidate, as well as spring, summer and autumn.

### 08 EASTPORT
Maritime logistics region: port city, container terminals, shipyard, cargo airport, coastal suburbs and possible offshore facility. Waterfront industry. Strong storm, winter-coast, summer and anniversary candidate.

### 09 DUSTFORD
Rural agricultural region: town, farms, barns, silos, highway services, railway, woodland hills and forgotten settlement. Small communities and environmental storytelling. Strong spring, summer, autumn and harvest candidate.

### 10 BLACKRIDGE
Highland plateau: mountain village, quarry, winding roads, dam valley, observatory ridge and old resort. Elevation and remote infrastructure. Primary winter/Arctic-compatible candidate, with strong storm, spring-thaw and autumn variants.

## Global event compatibility
The normal region rotation may be overridden by a Global World Event. The event defines eligible and excluded world IDs. This is intentional: the event's world identity takes priority over blindly following the normal rotation.

Initial WINTERLIGHT pool proposal:
- **Preferred:** NORTHPASS, PINEFALL, BLACKRIDGE.
- **Possible with authored full-region conversion:** GREYHAVEN, IRONVALE, WESTBRIDGE, EASTPORT.
- **Excluded by default:** SOLARA, REDSTONE, DUSTFORD. These should not appear as unchanged hot/desert worlds during a full Arctic/snow-covered event.

Other seasonal events can use most or all worlds, provided each has a region-specific authored transformation. For example, spring in REDSTONE should not look like spring in PINEFALL; summer in EASTPORT should not simply reuse summer in BLACKRIDGE.

## Differentiation
Greyhaven = balanced coastal mainland; Solara = island; Northpass = alpine; Ironvale = industrial production; Redstone = desert/canyon; Westbridge = dense city; Pinefall = forest/lakes; Eastport = maritime logistics; Dustford = rural agriculture; Blackridge = highland/quarry/dam.

## Per-world design package
Top-down region plan; landmarks/routes; exploration loops; interior list; NPC/faction routes; ambient activities; discoveries; safe/social and encounter spaces; lighting/weather/audio; seasonal/global-state variants; performance budget; greybox test.

## Scope discipline
Ten regions are a long-term vision. Build one polished district, expand its region, then prove a second distinct region before scaling. Exact studs, kilometres, player capacity, full-world area and seasonal variant count remain TBD.
