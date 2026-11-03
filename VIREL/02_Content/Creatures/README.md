# VIREL — Creature Directory

> Status: **PROPOSAL**. These are the first ten creature concepts and visual identities. Their final gameplay roles, encounter tuning and abilities remain subject to implementation and testing.

## Purpose

This directory is the canonical reference for VIREL's initial creature concept-art collection. Each creature has one individual specification. Use these pages to identify, classify and organize generated images.

## Creature index

| ID | Creature | Native world | Primary visual identifier | Ability shown |
|---|---|---|---|---|
| CRE-001 | [Mossback](Mossback/README.md) | Auralis | Broad moss-covered quadruped with flowers | Blooming Pollen |
| CRE-002 | [Thornrunner](Thornrunner/README.md) | Auralis | Sleek runner with backward-curving spine thorns | Golden Rush |
| CRE-003 | [Canopy Glider](Canopy_Glider/README.md) | Myrrwood | Leaf-like gliding membranes | Leafwind Glide |
| CRE-004 | [Rootmaw](Rootmaw/README.md) | Myrrwood | Bark-armored heavy quadruped with root limbs | Root Surge |
| CRE-005 | [Emberhorn](Emberhorn/README.md) | Caldera Reach | Obsidian armor, glowing cracks, two horns | Magma Burst |
| CRE-006 | [Tidewhisper](Tidewhisper/README.md) | Pelagora | Streamlined aquatic body and translucent fins | Tidal Resonance |
| CRE-007 | [Frostmane](Frostmane/README.md) | Veyr Peaks | Pale-blue fur and frozen-leaf mane | Frostwave |
| CRE-008 | [Mirecrawler](Mirecrawler/README.md) | Nacre Hollow | Low amphibious body, flexible limbs, violet markings | Luminous Spores |
| CRE-009 | [Dune Strider](Dune_Strider/README.md) | Sereglass | Tall long-legged desert creature | Mirage Spiral |
| CRE-010 | [Origin Warden](Origin_Warden/README.md) | The First Garden | Majestic ancient creature with golden roots and crown-like leaves | Primordial Bloom |

## Image sorting instructions for AI agents

When inspecting an image repository or an unorganized concept-art folder:

1. Read this directory and the individual creature pages before classifying images.
2. Identify the creature primarily by its silhouette and defining anatomy, not by background color alone.
3. Use the **primary visual identifier** and **distinctive features** on each page. Ability VFX and habitat are supporting evidence.
4. If one image clearly shows a creature and its ability, classify it as that creature's hero concept image.
5. If an image shows the same creature without its ability, classify it as a creature study or neutral pose, not as a different creature.
6. If the image is ambiguous, place it in `_Needs_Review/`. Do not guess or assign it to the closest-looking creature.
7. Do not treat a creature's habitat as proof of identity. Concept art may use a neutral background or a different camera angle.
8. Preserve original files. Never overwrite or delete source images during sorting.
9. Do not invent missing images or claim that an image exists when it is not present.

## Recommended asset structure

```text
VIREL/
  Assets/
    Creatures/
      CRE-001_Mossback/
        Concept/
        Ability/
        Detail/
      CRE-002_Thornrunner/
        Concept/
        Ability/
        Detail/
      ...
      CRE-010_Origin_Warden/
        Concept/
        Ability/
        Detail/
      _Needs_Review/
```

## File naming convention

Use:

`VIREL_CRE-###_CreatureName_AssetType_Variant.ext`

Examples:

- `VIREL_CRE-001_Mossback_Concept_Hero.png`
- `VIREL_CRE-001_Mossback_Ability_BloomingPollen.png`
- `VIREL_CRE-003_CanopyGlider_Concept_GlidePose.png`

Allowed asset types: `Concept`, `Ability`, `Detail`, `Turnaround`, `Expression`, `InGame`.

## Classification output

For each sorted image, record:

- Original filename
- Assigned creature ID and name
- Asset type
- Confidence: High / Medium / Low
- Visual evidence used
- New destination filename

Only use High confidence when multiple distinctive features agree. Keep uncertain files in `_Needs_Review/`.

## Global art direction

All creature images should match VIREL's established visual direction: polished contemporary 3D game concept art, stylized realism, slightly exaggerated but appealing silhouettes, vibrant controlled colors, readable ability VFX, strong natural lighting and cinematic composition. Avoid photorealistic wildlife imagery, old-fashioned fantasy illustration and childish cartoon styling.
