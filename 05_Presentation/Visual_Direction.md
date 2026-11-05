# Visual Direction

**Confirmed style: stylized realism.**

- Believable natural environments.
- Expressive, slightly exaggerated botanical silhouettes.
- Vibrant but controlled colours.
- Strong natural lighting, shadows and atmosphere.
- Ordinary environments remain beautiful and readable.
- Rare plants and high-rarity abilities may use extraordinary visual effects.

Every world needs a recognisable palette and silhouette. Every plant needs a readable shape at gameplay distance.

## Production baseline

Style words alone do not produce a world. The executable version of this direction is [Materials, Lighting and Atmosphere](../07_Technical/Materials_And_Lighting.md), with per-world lighting, atmosphere, water and terrain values in [visual_themes.json](../07_Technical/Data/visual_themes.json).

A region is not presentation-ready while it still uses default Roblox materials, the default sky, Voxel lighting or one flat terrain colour. Default materials are a greybox convention, not a style choice.
