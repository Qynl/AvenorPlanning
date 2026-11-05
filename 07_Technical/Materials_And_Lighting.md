# Materials, Lighting and Atmosphere

**Status:** PROPOSED TECHNICAL ART DIRECTION
**Why this exists:** a world built from default Roblox materials, default sky and default lighting reads as a greybox no matter how good the layout is. This file is the baseline every built region must meet before it is called finished. Palette values per world are in [`Data/visual_themes.json`](Data/visual_themes.json).

## What "default Roblox" actually looks like

These are the causes, in order of visual damage:

1. `Plastic` or `SmoothPlastic` on terrain-sized parts — flat, untextured, unmistakably Roblox.
2. `Lighting.Technology` left on Voxel — chunky shadow edges and no bounce light.
3. No `Atmosphere` — a hard horizon, no aerial perspective, so the world looks small and flat.
4. One uniform terrain colour across a whole world — everything the same green.
5. No colour grading — washed-out midtones and no mood separation between worlds.
6. Primitive parts scaled up instead of terrain or meshes — visibly faceted cliffs and cubes.
7. No ground clutter or texture breakup — clean surfaces read as unfinished.
8. Every prop at the same scale, rotation and tint — obvious repetition.
9. Sun straight overhead with `GlobalShadows` off — no shape readability, no long shadows.
10. Default skybox and default `StarCount` — the single most recognisable "template game" tell.

Fixing 1–5 takes under an hour and changes more than a week of prop modelling.

## Non-negotiables

- `Lighting.Technology = Future` (or `Unified` where the place offers it). Never `Voxel` or `Legacy`. This property is Studio-only and is **not scriptable** — set it once in the place file and verify it.
- `Lighting.GlobalShadows = true`.
- Every world has an `Atmosphere`, a `ColorCorrectionEffect` and a `BloomEffect` tuned to its palette.
- No `Plastic` or `SmoothPlastic` on any surface larger than roughly 4 studs.
- No default skybox left visible at the horizon; if custom sky textures do not exist yet, mask the horizon with terrain, fog and clouds rather than shipping the default sky.
- No world ships without being screenshotted at player eye height and compared against its concept art.

## Apply a theme

`Data/visual_themes.json` holds one record per world. Apply it from a single server-side theme module so the whole world is consistent and one value change propagates.

```lua
local Lighting = game:GetService("Lighting")
local Terrain = workspace.Terrain

local function ensure(className, name, parent)
    local existing = parent:FindFirstChild(name)
    if existing and existing.ClassName == className then return existing end
    local inst = Instance.new(className)
    inst.Name = name
    inst.Parent = parent
    return inst
end

local function applyTheme(theme)
    Lighting.ClockTime = theme.clockTime
    Lighting.Brightness = theme.brightness
    Lighting.ExposureCompensation = theme.exposureCompensation
    Lighting.GeographicLatitude = theme.geographicLatitude
    Lighting.Ambient = Color3.fromHex(theme.ambient)
    Lighting.OutdoorAmbient = Color3.fromHex(theme.outdoorAmbient)
    Lighting.EnvironmentDiffuseScale = theme.environmentDiffuseScale
    Lighting.EnvironmentSpecularScale = theme.environmentSpecularScale
    Lighting.GlobalShadows = true
    Lighting.ShadowSoftness = 0.3

    local atmosphere = ensure("Atmosphere", "Atmosphere", Lighting)
    atmosphere.Density = theme.atmosphere.density
    atmosphere.Offset = theme.atmosphere.offset
    atmosphere.Color = Color3.fromHex(theme.atmosphere.color)
    atmosphere.Decay = Color3.fromHex(theme.atmosphere.decay)
    atmosphere.Glare = theme.atmosphere.glare
    atmosphere.Haze = theme.atmosphere.haze

    local grade = ensure("ColorCorrectionEffect", "WorldGrade", Lighting)
    grade.TintColor = Color3.fromHex(theme.colorCorrection.tint)
    grade.Brightness = theme.colorCorrection.brightness
    grade.Contrast = theme.colorCorrection.contrast
    grade.Saturation = theme.colorCorrection.saturation

    local bloom = ensure("BloomEffect", "WorldBloom", Lighting)
    bloom.Intensity = theme.bloom.intensity
    bloom.Size = theme.bloom.size
    bloom.Threshold = theme.bloom.threshold

    local rays = ensure("SunRaysEffect", "WorldSunRays", Lighting)
    rays.Intensity = theme.sunRays.intensity
    rays.Spread = theme.sunRays.spread

    local clouds = ensure("Clouds", "Clouds", Terrain)
    clouds.Cover = theme.clouds.cover
    clouds.Density = theme.clouds.density
    clouds.Color = Color3.fromHex(theme.clouds.color)
    clouds.Height = theme.clouds.height

    Terrain.WaterColor = Color3.fromHex(theme.water.color)
    Terrain.WaterTransparency = theme.water.transparency
    Terrain.WaterReflectance = theme.water.reflectance
    Terrain.WaterWaveSize = theme.water.waveSize
    Terrain.WaterWaveSpeed = theme.water.waveSpeed

    for _, entry in theme.terrain do
        Terrain:SetMaterialColor(Enum.Material[entry.material], Color3.fromHex(entry.color))
    end
end

return applyTheme
```

Do not create a second `Atmosphere` or `ColorCorrectionEffect`; Roblox applies multiple effects of the same class in sequence and the result is unpredictable.

## Terrain

- Run `SetMaterialColor` for every material the world uses, not only the dominant one. Unset materials keep Roblox's stock colours and immediately look default.
- Terrain colour should vary **within** a biome too: two or three related colours per material, blended by hand-painted regions, not one flat value over 2000 studs.
- Use `Grass`, `LeafyGrass`, `Ground`, `Mud`, `Sand`, `Snow`, `Rock`, `Slate`, `Basalt`, `Limestone`, `Sandstone`, `Salt`, `Glacier`, `Ice` — never paint organic ground with `Brick`, `Cobblestone` or `Concrete`.
- Terrain water must match the world's palette; leaving `WaterColor` default is as loud as leaving Plastic.
- Keep terrain resolution adequate for the scale: fine detail comes from clutter and meshes, not from over-subdivided terrain.

## Parts and meshes

| Surface | Material | Notes |
|---|---|---|
| Soil, paths | `Ground`, `Mud` | darker than surrounding grass |
| Grass surfaces | `Grass`, `LeafyGrass` | terrain first, parts only for detail |
| Cliffs | `Rock`, `Slate`, `Basalt` | flavour per world from the theme file |
| Warm stone | `Limestone`, `Sandstone` | Auralis, Nacre, Sereglass, Zephyr |
| Snow, ice | `Snow`, `Glacier`, `Ice` | Veyr only |
| Wood | `Wood`, `WoodPlanks` | never bare `Plastic` painted brown |
| Metal | `Metal`, `CorrodedMetal` | `DiamondPlate` only on industrial props |
| Glass, crystal | `Glass` | `Transparency` 0.35–0.6, `Reflectance` 0.05–0.15 |
| Fabric, roofs | `Fabric` | avoids the shiny plastic sheen |
| Magic only | `Neon` | never for ordinary lamps, water or fire |

Rules:

- **Hero meshes get a `SurfaceAppearance`.** `ColorMap`, `NormalMap`, `RoughnessMap`, `MetalnessMap`; 1024 for hero props and landmarks, 512 for reused kits. No `SurfaceAppearance` on a mesh that stays flat-coloured is a wasted mesh.
- Set `RenderFidelity = Precise` only within roughly 150 studs of the play route; use `Automatic` elsewhere.
- `CastShadow = false` for small clutter and foliage cards; keep shadows on landmark-scale geometry where the silhouette matters.
- Collision stays simpler than the art. Never generate `Hull` collision on a decorative 20k-triangle mesh.
- `MaterialService.Use2022Materials = true`. Use `MaterialVariant` sparingly and only for hero stone or wood; variants apply by base material across the whole place, so they are a global decision, not a per-prop one.

## Lighting is the cheapest fix

- One directional sun from a believable angle. `ClockTime` in the theme file is chosen for the world's mood; do not centre it at noon.
- Shadows must fall across the play route. If the ground reads flat, rotate the sun before adding props.
- Interior and cave spaces need their own local lights; the sun does not reach them and Future lighting will leave them black.
- Limit shadow-casting `PointLight`/`SpotLight` instances. Decorative lights get `Shadows = false`; only a few gameplay-relevant lights cast.
- Night worlds need a readable key light. Umbra Deep is dark, not unlit: ambient plus bioluminescent props plus a low-intensity fill, never pure black.

## Emissive surfaces: what is actually possible

`SurfaceAppearance` has no emissive map in Roblox. Bioluminescence, ember and magic must be built from:

- `Neon` parts with matching `PointLight`s (sparingly; they are the expensive option),
- `ParticleEmitter` and `Beam` for glow and motes,
- `BloomEffect` to make bright colours bleed — this is what sells it.

Do not fake glow by painting parts bright white; it reads as plastic, not light.

## Sky and distance

- Replace skybox textures only when six uploaded faces exist. Until then, tune `Atmosphere` density/haze, raise `Clouds`, and keep the horizon behind terrain so the stock sky is not visible.
- Distance cueing is mandatory: aerial perspective separates near, mid and far. Without it, a 3000-stud world reads as a diorama.
- Fog is not a substitute for level design. It hides the far plane; it does not make a flat field interesting.

## Detail and variation

Build in layers, in this order: terrain silhouette → landmarks → mid structures → foliage clusters → ground clutter → atmosphere and light → interactables.

- Ground must never be one clean material for more than a few dozen studs. Break it with rocks, roots, debris, moss patches, wetness and path wear.
- Three variants minimum per prop family. Vary yaw, tilt (≤5°), scale (0.85–1.2) and tint (±5% luminance).
- Never place two identical props adjacent with identical rotation and scale.
- Edge transitions matter more than centres: shoreline, cliff base, forest edge, path edge. Default-looking worlds always have hard clean edges.
- Density target per 100×100 studs of playable ground: 1–3 landmarks, 6–12 large props, 20–40 mid props, 60–120 clutter clumps. Treat as a starting point, then measure with `Map_Performance_Budget_Template.md`.

## Audit before calling a region done

| Check | Fails when |
|---|---|
| Materials | any `Plastic`/`SmoothPlastic` above 4 studs, or a brown-painted part pretending to be wood |
| Terrain colour | one flat colour across the biome, or any stock material colour left unset |
| Lighting | `Technology` is Voxel/Legacy, `GlobalShadows` off, or sun at noon |
| Atmosphere | no `Atmosphere`, or fog so thick it replaces composition |
| Grade | no `ColorCorrectionEffect`; world looks the same as every other world |
| Sky | default skybox visible at the horizon |
| Silhouette | cliffs and landmarks are scaled cubes or visibly faceted parts |
| Ground | clean flat surfaces with no clutter within 30 studs |
| Repetition | identical props repeating at identical scale and rotation |
| Edges | hard seams between terrain and water, rock and grass, path and ground |
| Emissive | bright white parts instead of Neon/particles/Bloom |
| Comparison | screenshot does not resemble the world's concept art palette |

## Fixing a world that already looks default

Work in this order; stop when the screenshot passes.

1. **Lighting, atmosphere, grade** — apply the theme record. Under an hour, largest single improvement.
2. **Terrain material colours** — run `SetMaterialColor` for every material, then vary per region.
3. **Material sweep** — find every `Plastic`/`SmoothPlastic` part above 4 studs and replace it using the table above.
4. **Silhouette pass** — replace scaled-part cliffs and landmarks with terrain or meshes; add vertical variation.
5. **Ground breakup** — rocks, roots, debris, moss, wear paths, shoreline detail.
6. **Sky and distance** — clouds, haze, horizon masking, far-landmark readability.
7. **Variation pass** — scale/rotation/tint jitter, and a third variant for every repeated prop.
8. **Screenshot comparison** — eye height, three times of day, against the concept art. If it still reads flat, return to step 1; more props will not fix lighting.

## Directive to hand an implementation agent

```text
Rework the built world against 07_Technical/Materials_And_Lighting.md.
Apply the world's record from 07_Technical/Data/visual_themes.json exactly:
Lighting, Atmosphere, ColorCorrectionEffect, BloomEffect, SunRaysEffect, Clouds,
Terrain water and Terrain:SetMaterialColor for every material.
Set Lighting.Technology = Future and GlobalShadows = true.
Replace every Plastic and SmoothPlastic surface above 4 studs with the material
from the mapping table. Replace scaled-part cliffs and landmarks with terrain or meshes.
Add ground clutter, shoreline and cliff-base transitions, and a third variant for every
repeated prop with yaw, scale and tint variation. Do not add props to compensate for
lighting. Finish with eye-height screenshots at three times of day compared against the
world's concept art palette, and report which of the twelve audit checks pass.
```

## Performance guardrails

Future lighting and dense clutter are both expensive. Before adding a layer, check it against `Map_Performance_Optimization.md` and `Map_Performance_Budget_Template.md`: part count per region, shadow-casting light count, texture memory, draw calls and streaming behaviour. Test at low graphics quality — that is what a large share of players see, and it must still read as the intended world, not as grey plastic.
