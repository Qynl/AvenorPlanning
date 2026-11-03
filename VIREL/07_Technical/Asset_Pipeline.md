# Asset Pipeline and Environment Art Standards

**Status:** PROPOSED

## Asset categories
- Terrain and landscape.
- Modular architecture and ruins.
- Rocks, roots, trees and large vegetation.
- Foliage clusters and ground cover.
- Plant specimens.
- Gameplay anchors and interaction props.
- VFX meshes and effect attachments.
- UI icons and archive renders.

## Naming
Use consistent prefixes and stable IDs:
- `ENV_` environment piece.
- `PLANT_` plant model.
- `PROP_` interactive prop.
- `VFX_` effect asset.
- `ANCHOR_` invisible gameplay anchor.

Names should describe the asset's purpose, not its current map location alone.

## Modelling and import
1. Model reusable pieces separately.
2. Keep pivots intentional and easy to place.
3. Separate visual mesh from collision helper when useful.
4. Use sensible UVs and shared material sets.
5. Import one asset family at a time.
6. Reuse the imported asset in Studio rather than reimporting identical copies.
7. Test collision, scale, materials and LOD behaviour in-game.

## Texture and material reuse
- Prefer built-in materials when they achieve the look.
- Reuse texture sets across a family of assets.
- Use trim sheets for modular architecture where appropriate.
- Avoid oversized textures on small objects.
- Avoid partial transparency unless it materially improves the scene.

## Packages and versioning
Use Packages for shared assets that need controlled updates. Keep a stable source asset and document intentional overrides.

## Asset review checklist
- Correct scale and pivot.
- Readable silhouette at gameplay distance.
- Collision behaves as expected.
- No unnecessary scripts.
- No unused lights or emitters.
- No duplicate mesh/texture uploads.
- Performance tested in a representative scene.
