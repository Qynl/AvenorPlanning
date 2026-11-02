# AVENOR — HUD, Controls, Audio & Accessibility

> **Status: Proposed design specification.** This document defines the interface and audio experience required for the first playable version and later expansion. Exact pixel positions, final sound assets, platform-specific tuning, and balance values require implementation and playtesting.

## 1. Interface Principles

1. Gameplay remains the visual priority. The HUD must not compete with the arena.
2. Critical information is consistent across weapons, modes, and platforms.
3. Important information is communicated through more than colour alone.
4. Cosmetic presentation never imitates competitive information.
5. The same gameplay state must be understandable on keyboard/mouse, controller, and mobile.
6. The interface should be configurable without allowing unfair information advantages.

## 2. In-Match HUD Layout

### Center
- Crosshair and weapon-specific aim feedback.
- Hit confirmation appears close to the crosshair but does not obscure the target.
- Damage direction feedback uses a consistent shape and direction cue, not colour alone.
- No permanent center-screen clutter beyond the crosshair and essential temporary feedback.

### Lower left
- Health value and a compact health bar.
- Current status effects with icon, label, and remaining duration where relevant.
- Teammate status in team modes, shown in a compact vertical group.

### Lower center
- Equipped weapon name or icon.
- Magazine and reserve ammunition where applicable.
- Reload and weapon-action state.
- Melee and utility states use relevant charges or cooldown indicators rather than fake ammunition values.

### Lower right
- Player Ability icon, availability state, and cooldown.
- Secondary utility state where applicable.
- Interaction prompt appears contextually and disappears when no longer relevant.

### Upper area
- Match timer.
- Score, round count, and objective state.
- Team indicators where needed.
- Objective direction or distance only when the mode rules provide that information to every player.

### Kill feed
- Shows eliminator, eliminated player, and relevant weapon/action icon.
- Uses a consistent layout and fixed information order.
- Cosmetic announcement text may appear as a secondary owner-only layer, never replacing the factual feed.

## 3. HUD State Rules

- The HUD must react to server-confirmed match state.
- Temporary local prediction may improve responsiveness but must reconcile with authoritative state.
- Cooldowns must not display as ready until the server permits use.
- Ammo display must distinguish magazine, reserve, and reload state.
- A weapon with no conventional magazine must use a clearly labeled alternative state.
- Spectators see only information permitted by the mode and spectator rules.
- Menus and post-match panels must not cover critical live-match information if opened during active play.
- Every critical state must remain readable at common mobile aspect ratios.

## 4. Crosshair and Combat Feedback

### Crosshair
- Default crosshair is clean, geometric, and low visual weight.
- Weapon-specific crosshair behavior is permitted when it communicates real weapon behavior.
- Crosshair customization may adjust shape, size, thickness, opacity, and gap within a fair range.
- No paid crosshair may provide better target visibility or extra information.

### Hit feedback
- Confirmed hit feedback is brief and consistent.
- Headshot feedback may be distinct only when the server confirms the hit classification.
- Elimination feedback is more prominent than a normal hit but remains brief.
- Damage direction indicators must not reveal exact enemy positions beyond the actual hit direction.
- Friendly and enemy information must never rely on colour alone.

### Objective feedback
- Objective state uses icon, text, progress, and team ownership.
- Contested states must be obvious and consistent.
- Progress pauses, reversals, and completion are clearly differentiated.
- Objective audio is standardized and cannot be replaced by cosmetic sounds.

## 5. Controls

Controls should use an action mapping layer so inputs can be remapped without rewriting weapon or movement systems.

### Keyboard and mouse proposed defaults

| Action | Default |
|---|---|
| Move | WASD |
| Look | Mouse |
| Jump | Space |
| Sprint | Left Shift |
| Slide | Left Ctrl |
| Fire | Left Mouse Button |
| Aim / alternate weapon function | Right Mouse Button |
| Reload | R |
| Interact / pickup | E |
| Player Ability | Q |
| Melee | V |
| Weapon Action | F |
| Primary slot | 1 |
| Secondary slot | 2 |
| Melee slot | 3 |
| Scoreboard | Tab |
| Emote wheel | G |
| Menu | Escape |

These are initial defaults, not locked. Weapon-specific actions must not permanently conflict with aiming or essential movement. Players must be able to remap supported actions.

### Controller
- Use a consistent modern controller layout with movement on the left stick and camera on the right stick.
- Fire and aim use the primary trigger pair.
- Jump, sprint/slide, reload/interact, ability, melee, and weapon action receive dedicated or contextual bindings.
- Avoid requiring simultaneous awkward button combinations for core combat.
- Provide sensitivity, aim response, and deadzone settings.

### Mobile
- Use an adjustable virtual movement stick and camera-look region.
- Fire and aim controls remain separated and large enough for reliable touch.
- Jump, sprint/slide, reload, interact, ability, melee, and weapon action use configurable on-screen buttons.
- Buttons must avoid common thumb occlusion zones where practical.
- Support button repositioning, scaling, opacity, and simplified layouts.
- Do not require multi-finger precision combinations for basic movement and firing.

## 6. Accessibility and Readability

- Separate sliders for master, music, effects, weapons, voice/announcements, and interface audio where supported.
- Optional subtitles for important non-cosmetic audio cues.
- Adjustable crosshair size, shape, opacity, and colour.
- Colour-safe team indicators using icons, outlines, and labels as well as colour.
- Camera shake and motion effects can be reduced or disabled.
- Screen flashes and high-intensity cosmetic effects can be reduced.
- UI scale and mobile button scale can be adjusted.
- Sensitivity settings are available across supported input types.
- Avoid conveying critical gameplay information only through sound or only through colour.
- Reduced-effects mode must preserve gameplay-critical information.

## 7. Audio Direction

AVENOR's audio identity should be crisp, modern, and functional. It should combine tactile weapon feedback with a restrained electronic identity. The soundscape should feel energetic without turning every action into a loud spectacle.

### Audio layers

1. **Gameplay-critical:** enemy weapon fire, reloads, footsteps, ability cues, objective state, hit feedback, and match state.
2. **Player feedback:** own weapon handling, own ability activation, hit confirmation, elimination confirmation.
3. **Presentation:** cosmetic kill announcements, MVP stings, victory effects, emotes, and lobby ambience.
4. **Music:** lobby themes, menu transitions, and optional post-match music.

### Priority mix

When sounds compete, gameplay-critical cues take priority over player feedback, which takes priority over cosmetic presentation and music.

### Weapon audio identity

- Every weapon needs a recognizable firing and reload identity.
- Weapon families may share a sonic foundation, but individual weapons need distinct timing, pitch, texture, or mechanical character.
- Weapon sounds must communicate firing cadence and reload state without revealing information beyond what the weapon's real behavior already implies.
- Suppressed, energy, explosive, and unusual weapons need coherent category identities.
- Cosmetic weapon audio variants must preserve timing and gameplay-relevant cues.

### Movement and ability audio

- Sprint, jump, slide, landing, and movement abilities need consistent distance and direction behavior.
- Enemy ability cues must be distinguishable from friendly cues.
- Important ability activation and expiration sounds must be brief and recognizable.
- Cosmetic audio must never imitate footsteps, reloads, enemy shots, objective warnings, or ability cues.

### Mix and performance

- Use distance attenuation and occlusion consistently.
- Limit overlapping cosmetic emitters.
- Avoid clipping and sudden extreme loudness changes.
- Important gameplay sounds should remain audible at low master volume.
- Provide independent category volume controls.
- Use platform-aware voice and audio handling; no gameplay feature should require a microphone.

## 8. Music

- Lobby music establishes AVENOR's identity: deep electronic textures, clean rhythm, restrained melodic motifs.
- Match music should be optional and low-priority. It must never mask gameplay-critical audio.
- Competitive playlists should default to minimal or no continuous match music.
- Post-match music may support victory presentation but must stop or reduce when players leave the results sequence.
- Seasonal music can change the lobby atmosphere without changing gameplay feedback.

## 9. Performance and Implementation Notes

- Use pooled UI elements for repeated kill-feed and status entries.
- Avoid per-frame UI work when event-driven updates are sufficient.
- Keep HUD state derived from validated game state.
- Use shared input actions instead of separate hard-coded controls in each weapon.
- Test UI at supported resolutions, aspect ratios, and device performance levels.
- Profile audio emitter counts, simultaneous sounds, and replication cost.
- Validate all controls with actual controller and touch-device playtests.

## 10. Open Decisions

- Final HUD coordinates, scale, and animation timings.
- Exact crosshair customization boundaries.
- Controller layout and aim-assist policy, if any.
- Mobile layout presets and button customization limits.
- Final audio middleware/workflow and sound asset pipeline.
- Whether match music is disabled by default in all competitive queues.
- Exact subtitle and visual accessibility coverage.
- Final audio loudness targets and priority ducking values.

## 11. Related Documents

- `AVENOR_Main.md` — high-level HUD, platform, and presentation direction.
- `AVENOR_Gameplay.md` — combat feedback requirements and gameplay states.
- `AVENOR_Technical.md` — input abstraction, UI architecture, performance, and replication.
- `AVENOR_Presentation.md` — MVP presentation, elimination announcements, banners, and profile showcases.
- `AVENOR_GameModes.md` — mode-specific HUD and objective information.
