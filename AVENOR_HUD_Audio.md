# AVENOR — HUD, Controls, Audio & Accessibility

> This document covers both the Open World HUD and competitive match HUD. The interface must support fast FPS play without making the large world feel like a constant arena match.

## 1. Interface principles

1. Gameplay and the environment remain visually dominant.
2. The player always understands health, weapon, ammunition and important interaction state.
3. Open World navigation supports discovery without revealing every secret.
4. Competitive objective information is clear and immediate.
5. Cosmetic presentation never imitates gameplay warnings.
6. Keyboard/mouse, controller and mobile receive equivalent gameplay information.
7. Reduce-motion, reduced-effects, audio and text options are available.

## 2. Open World HUD

### Upper area
- Compact compass with major directions and optional discovered landmark markers.
- Active world/event indicator.
- Party status where relevant.
- World activity notice only when useful.

### Lower left
- Health.
- Relevant temporary status effects.
- Party member status where applicable.

### Lower centre/right
- Equipped weapon.
- Loaded magazine count.
- Quick-access spare magazine state.
- Backpack reserve / long reload state.
- Melee, utility and ability status.
- Interaction prompt when near a usable object or NPC.

### Map and journal
- World map with known roads, settlements and discovered landmarks.
- Player position and party members, if enabled.
- Journal access for discovered locations and clues.
- Undiscovered secrets should not automatically appear as pins.
- Map filters must be simple and usable on mobile.

### Notifications
- Weapon permanently discovered.
- Location discovered.
- Activity started/completed.
- NPC interaction result.
- Event/world rotation announcement.
- Keep rewards concise and avoid repeated popups.

## 3. Competitive HUD

- Crosshair and weapon-specific aim feedback.
- Health and status effects.
- Weapon, loaded magazine, quick-access magazines and reserve reload state.
- Ability cooldown.
- Team status.
- Score, timer and objective state.
- Kill feed and hit feedback.
- Mode-specific objective indicators.

Competitive HUD must not show Open World-only clutter.

## 4. Ammunition display

The magazine system has three relevant states:
- Loaded magazine.
- Ready spare magazine(s).
- Backpack reserve used for a longer resupply reload.

Use clear icons and counts. When no quick-access spare remains, show that the next reload will take longer. Do not make the player guess whether they have ammunition available.

## 5. Controls

### Keyboard and mouse
Proposed defaults:
- WASD: movement.
- Mouse: camera and aim.
- Left mouse: fire.
- Right mouse: aim / weapon alternate action where applicable.
- Shift: sprint.
- Space: jump.
- C or Ctrl: slide (final bind configurable).
- R: reload.
- Number keys / wheel: weapon selection.
- E: interact.
- G: utility (final bind configurable).
- Q: ability (final bind configurable).
- Tab: map / player list depending context.

All important controls must be rebindable. Avoid hard-coding an ability to a button that conflicts with a weapon's right-click action.

### Controller
- Full remapping.
- Aim assist rules must be consistent and mode-aware.
- Movement actions should be comfortable without requiring impossible simultaneous button combinations.

### Mobile
- Configurable movement, aim, fire, jump, slide, reload, interact, ability and utility controls.
- Buttons must not cover key targets.
- Support HUD scaling and opacity settings.
- Keep movement and combat responsive on touch.

## 6. Crosshair and combat feedback

- Weapon-specific crosshair shapes may communicate handling, not hidden damage stats.
- Hit feedback is short and readable.
- Damage direction uses shape/position, not colour alone.
- Elimination feedback is distinct from ordinary hit feedback.
- Avoid full-screen flashes and excessive camera shake.
- Cosmetic kill effects must not obscure nearby threats.

## 7. Audio direction

### Open World
- Distinct ambience per region.
- City traffic and crowd ambience where appropriate.
- Wind, forest, water, industrial machinery and weather layers.
- NPC voices and interaction cues.
- Discovery and activity stingers.
- Spatial audio for nearby events.

### Combat
- Clear weapon firing and reload identities.
- Footstep and movement cues that remain readable.
- Distinct hit, elimination and objective sounds.
- Consistent mix priority for critical gameplay cues.

### Music
- Home screen theme.
- Region-specific ambient music used sparingly.
- Seasonal/event themes.
- Competitive menu and match themes.
- Music volume controls and mute option.

## 8. Accessibility

- Text scaling.
- High contrast.
- Colour-independent indicators.
- Subtitle support for important dialogue/cues.
- Reduced motion and reduced screen effects.
- Independent music, ambience, dialogue and SFX sliders.
- Remappable controls.
- Mobile-safe layout and controller focus states.

## 9. Performance

- Avoid excessive client-side UI updates.
- Pool transient notifications and effects.
- Use distance-aware audio and NPC updates.
- Avoid excessive particles or transparent overlays.
- Profile HUD and audio on mobile and lower-end devices.
