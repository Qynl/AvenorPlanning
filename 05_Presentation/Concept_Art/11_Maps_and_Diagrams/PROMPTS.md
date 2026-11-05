# Map and Layout Prompts

Prompts for the missing map art. These are **visual maps**, not build data — the playable greybox still has to be laid out in Studio.

**Global style** — stylized realism cartography in the VIREL palette. Hand-painted feel, clear silhouettes, readable elevation, no baked labels, no logos, no UI. Leave space for a legend; add text later in a separate layer so the art can be reused without localisation problems.

**Save world maps as:** `Worlds/<world>/World_Map/<world>_World_Map_Layout_V01.png`
**Save region top-downs as:** `Worlds/<world>/…/<Region>/03_Aerial_and_Topdown/<world>_<Region>_Aerial_Topdown_V01.png`

**Shared shot line** — append to every prompt:

> Orthographic top-down view, north at the top, soft ambient occlusion, elevation readable through colour and shading, thin hand-drawn region borders, main route and one optional route clearly visible, no text, no icons, no compass rose.

---

## World maps

### Auralis
> Stylized top-down world map of Auralis, a vast welcoming grassland world of open horizons and warm light. Fresh greens, warm gold, pale blue waterways and soft white stone. Show Windstep Prairie with long wind-shaped ridges, Sunthread Fields with spiral flower beds and scattered groves, Glasswater Basin with shallow reflective lakes and reed beds, the shallow valleys of Whispering Hollows, the small rain pools of Rainmirror Pools, and a collapsed root tunnel leading down to Buried Meadow. Warm afternoon light, enormous readable distances.

### Caldera Reach
> Stylized top-down world map of Caldera Reach, a volcanic world where life clings around cooled lava. Basalt black, copper, ember orange, muted red and turquoise mineral deposits. Show the Cinder Veins as branching cooled channels, Ashen Terraces as layered slopes, Obsidian Fields as dark glass uplands cut by ravines, the Buried Furnace chamber below, narrow Steamglass Tunnels, and the sheltered Quiet Caldera at the centre. Heat haze in the low ground.

### Myrrwood
> Stylized top-down world map of Myrrwood, an immense ancient forest. Deep greens, mossy browns, teal shadow and warm light breaking through. Show Rootbound Groves with exposed root networks, Hush Canopy as elevated branch country, Fernfall Basin with streams and low waterfalls, the Underbough beneath the roots, Hollowheart inside a colossal fallen trunk, and the Still Canopy as a small secluded pocket high in the trees. Canopy density should read as height, not just texture.

### Nacre Hollow
> Stylized top-down world map of Nacre Hollow, a wetland of shallow water and drifting fog. Muted jade, pearl white, deep teal, soft violet and silver mist. Show Drifting Marsh with vegetation islands, Nightglass Fen as dark reflective pools, Pearlreed Flats as open reed beds and winding channels, the Fog Maze with shifting narrow waterways, the Drowned Orchard under shallow water, and the Quiet Mirror as one small perfectly still pool. Mist pooling in the low ground.

### Pelagora
> Stylized top-down world map of Pelagora, an ocean world of reefs and deep water, drawn so both surface and depth are legible. Turquoise shallows, rich ocean blue, coral colour and deep indigo. Show Shallows of Glass with tidal flats and small islands, Bluefall Reef with layered reef structures and arches, the open water of the Open Reach, the Sunken Choir as submerged stone formations, the Kelp Cathedral as a towering underwater forest, and the Still Trench as a deep dark basin. Depth shown by colour, not by labels.

### Sereglass
> Stylized top-down world map of Sereglass, a desert of dunes, dry basins and hidden water. Sand gold, pale cream, rust red, dusty rose and glassy blue. Show Drywash Basin with braided dry riverbeds, Veiled Escarpment as a long cliff line, Singing Dunes with wind-shaped ridges, the hidden Underflow watercourse beneath the basin, the concealed Veiled Garden behind a rock face, and the Glasswind Vault as a sheltered cavern of polished mineral. Long shadows, heat shimmer over the low ground.

### Umbra Deep
> Stylized top-down world map of Umbra Deep, a subterranean world of caverns and vertical rock, drawn as a layered cave system rather than open terrain. Deep navy, charcoal, muted teal, mineral violet and small pools of biological light. Show Lantern Hollows with glowing growth, the Vertical Archive as shafts and ledges, Blackwater Galleries with underground lakes, the Root Cathedral crossed by descending roots, the Crystal Lung with slow visible air currents, and the Blind Garden almost unlit. Light only where organisms or minerals produce it.

### Veyr Peaks
> Stylized top-down world map of Veyr Peaks, a colossal mountain world of glaciers, ridges and storms. Ice blue, slate grey, pine green, pale lavender and occasional warm gold. Show Paleglass Shelf as snowy plateau, Thunderline Ridge as an exposed spine, Cloudpine Basin with misty high forests, the Frozen Bellows ice caverns beneath, the Eye of the Storm as a circular convergence ridge, and Blue Hour Hollow in permanent cool shade. Elevation dominant, weather systems visible at the edges.

### Zephyr Crown
> Stylized top-down world map of Zephyr Crown, a high-altitude world of plateaus and wind-carved cliffs. Sky blue, pale stone, cloud white, soft green and occasional violet. Show Windwoven Cliffs as a broken edge of anchor points, the High Aeries as broad elevated plateaus, Cloudgarden Fields as meadow above the cloud line, the Updraft Wells as deep vertical openings, the Hanging Grove spread across connected ledges, and the Farwind Shelf as a remote plateau reached by a chain of gaps. Cloud drifting across the lower ground.

### The First Garden
> Stylized top-down world map of The First Garden, an ancient place that feels like the source of every biological pattern in FLORA. Natural greens and stone tones with restrained luminous accents; unfamiliar without becoming neon fantasy. Show Root of All Paths as an immense branching root landscape, the Dawn Chamber as a sheltered lit hollow, the Unwritten Wilds as terrain that follows no known biome rule, the First Canopy above, the Memory Basin as a quiet ringed depression, and the Seedless Deep as a concealed region with no visible regeneration. Calm, deliberate, slightly wrong in its symmetry.

---

## Region top-downs

Use the world style above, then add the region line below and the shared shot line. These show layout and traversal, so keep the biome's defining landmark visible even from directly above.

| World | Region | Layout cue |
|---|---|---|
| Auralis | Windstep Prairie | Long parallel ridges, wind-shaped grass, one high viewpoint |
| Auralis | Sunthread Fields | Spiral flower beds, scattered groves, a low stone arch |
| Auralis | Glasswater Basin | Shallow linked lakes, reed beds, reflective channels |
| Auralis | Whispering Hollows | Shallow winding valleys that funnel wind |
| Auralis | Rainmirror Pools | Scattered small pools reflecting distant landmarks |
| Auralis | Buried Meadow | Underground pocket reached through a collapsed root tunnel |
| Caldera Reach | Cinder Veins | Branching cooled lava channels, warm mineral ground |
| Caldera Reach | Ashen Terraces | Layered volcanic slopes, sparse resilient growth |
| Caldera Reach | Obsidian Fields | Dark glass rock, narrow ravines, sharp edges |
| Caldera Reach | Buried Furnace | Deep geothermal chamber with old mineral structures |
| Caldera Reach | Steamglass Tunnels | Narrow passages shaped by ancient steam vents |
| Caldera Reach | Quiet Caldera | Sheltered crater, unusual life around cooled rock |
| Myrrwood | Rootbound Groves | Huge trunks, exposed root networks as walkable ground |
| Myrrwood | Hush Canopy | Elevated branches, hanging gardens, quiet clearings |
| Myrrwood | Fernfall Basin | Dense fern fields, streams, low waterfalls |
| Myrrwood | Underbough | Walkable ecosystem beneath interwoven roots |
| Myrrwood | Hollowheart | Interior of a colossal fallen tree, own mini habitat |
| Myrrwood | Still Canopy | Secluded upper pocket where the wind barely moves |
| Nacre Hollow | Drifting Marsh | Broad wetland with islands of vegetation |
| Nacre Hollow | Nightglass Fen | Dark pools, reflective water, nocturnal life |
| Nacre Hollow | Pearlreed Flats | Open reed beds, shallow winding channels |
| Nacre Hollow | Fog Maze | Shifting narrow channels, landmarks read through plants |
| Nacre Hollow | Drowned Orchard | Ancient grove beneath shallow water |
| Nacre Hollow | Quiet Mirror | One hidden pool with an unusually still surface |
| Pelagora | Shallows of Glass | Clear coastal water, tidal flats, small islands |
| Pelagora | Bluefall Reef | Layered reefs, arches, bright underwater gardens |
| Pelagora | Open Reach | Broad open ocean between distant landforms |
| Pelagora | Sunken Choir | Submerged stone formations that sound in currents |
| Pelagora | Kelp Cathedral | Towering underwater forest with vertical routes |
| Pelagora | Still Trench | Deep sheltered basin where light barely reaches |
| Sereglass | Drywash Basin | Wide dry riverbeds, scattered stone formations |
| Sereglass | Veiled Escarpment | Tall cliffs, heat-shimmering ledges |
| Sereglass | Singing Dunes | Rolling dunes with wind-shaped acoustic ridges |
| Sereglass | Underflow | Hidden underground watercourse beneath the basin |
| Sereglass | Veiled Garden | Concealed habitat behind a heat-distorted rock face |
| Sereglass | Glasswind Vault | Sheltered cavern of naturally polished minerals |
| Umbra Deep | Lantern Hollows | Caverns lit by naturally glowing organisms |
| Umbra Deep | Vertical Archive | Enormous shafts, ledges, layered stone walls |
| Umbra Deep | Blackwater Galleries | Underground lakes and submerged passages |
| Umbra Deep | Root Cathedral | Cavern crossed by giant roots from the surface |
| Umbra Deep | Crystal Lung | Mineral chamber with slow visible air currents |
| Umbra Deep | Blind Garden | Hidden ecosystem with almost no light |
| Veyr Peaks | Paleglass Shelf | Snowy plateau, sheltered cold-adapted vegetation |
| Veyr Peaks | Thunderline Ridge | Exposed ridge, fast-changing weather |
| Veyr Peaks | Cloudpine Basin | High-altitude forest, misty valley floor |
| Veyr Peaks | Frozen Bellows | Ice caverns with unusual air currents |
| Veyr Peaks | Eye of the Storm | Exposed circular ridge where weather converges |
| Veyr Peaks | Blue Hour Hollow | Sheltered valley in permanent cool twilight |
| Zephyr Crown | Windwoven Cliffs | Exposed cliff face, narrow natural anchor points |
| Zephyr Crown | High Aeries | Broad elevated plateaus, unusual air currents |
| Zephyr Crown | Cloudgarden Fields | Open highland meadow above the cloud line |
| Zephyr Crown | Updraft Wells | Deep vertical openings with powerful rising air |
| Zephyr Crown | Hanging Grove | Sheltered forest across connected cliff ledges |
| Zephyr Crown | Farwind Shelf | Remote plateau behind a chain of traversal gaps |
| The First Garden | Root of All Paths | Landscape crossed by enormous branching roots |
| The First Garden | Dawn Chamber | Sheltered region of unusual light, delicate plants |
| The First Garden | Unwritten Wilds | Ecosystem that matches no known classification |
| The First Garden | First Canopy | Vast upper ecosystem above the root network |
| The First Garden | Memory Basin | Quiet basin where environmental traces remain |
| The First Garden | Seedless Deep | Concealed region whose organisms do not reproduce |
