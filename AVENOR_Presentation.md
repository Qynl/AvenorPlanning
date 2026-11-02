# AVENOR — Player Presentation & Profile Cosmetics

> **Status: Proposed specification.** This document completes the presentation categories that were identified in `AVENOR_Main.md`. All rewards are cosmetic. No presentation item may affect combat, visibility, matchmaking, rewards, or player performance.

## 1. Design Direction

AVENOR presentation should feel personal, competitive, and recognizable. It should reward achievement and let players express a style without turning every screen into visual noise.

### Shared rules

- Use the universal rarity hierarchy: Commonplace, Altered, Evolved, Ascendant, Extraordinary, Singular.
- Rarity controls visual/audio complexity and collectability, never gameplay power.
- Keep names, scores, rank, objective state, and combat information readable.
- All audio presentation must have volume controls and a reduced-effects option where practical.
- Players must be able to mute or reduce other players' cosmetic presentation.
- Do not use full-screen flashes, forced camera movement, or effects that resemble combat warnings.
- Avoid paid random rewards as the only route to a presentation item.

## 2. MVP Presentation

MVP is a post-match recognition moment, not a second win condition. It should recognize meaningful contributions and rotate the spotlight rather than always rewarding the player with the most eliminations.

### Selection rules

The server creates a match contribution summary and selects one MVP using mode-aware criteria. The exact scoring weights are to be tuned during playtests.

Eligible signals may include:
- Objective contribution and time spent contesting or carrying objectives.
- Elimination impact, not raw eliminations alone.
- Assists and team support.
- Survival and clutch contribution in round-based modes.
- Mode-specific actions that directly helped secure the result.

Safeguards:
- A loss does not automatically disqualify a player.
- AFK time, spawn farming, repeated self-resets, and invalid match activity do not count.
- MVP selection is server-authoritative and recorded once.
- If contributions are effectively tied, use a deterministic tie-break based on the match record.
- In FFA, MVP means match standout. In team modes, the selection may come from either team.
- MVP recognition never changes XP, rank, or rewards.

### Presentation sequence

1. Match result is shown immediately.
2. MVP is announced with name, selected title, and one short contribution label.
3. The player's equipped MVP presentation plays in a compact showcase.
4. The final results and full scoreboard remain available.
5. Players can skip or reduce the sequence.

### Initial MVP presentation collection

| Name | Rarity | Presentation |
|---|---|---|
| THE STANDARD | Commonplace | Clean nameplate reveal with a short white underline |
| CLEAN SWEEP | Commonplace | Three quick score marks appear beside the player |
| FRONT RUNNER | Altered | A slim blue track line draws toward the MVP name |
| LAST WORD | Altered | A compact final-round card flips into place |
| SPOTLIGHT | Evolved | A controlled soft spotlight frames the character |
| BLUEPRINT | Evolved | Geometric lines assemble a personal MVP frame |
| AFTERIMAGE | Ascendant | Two restrained character silhouettes trail into the final pose |
| ORBITAL DISPLAY | Ascendant | A small ring system forms around the MVP frame |
| SOLAR SIGNATURE | Extraordinary | A warm radial crest resolves behind the nameplate |
| CHAMPION'S ENGINE | Extraordinary | Mechanical panels unfold into a polished champion frame |
| STARFALL | Singular | A miniature starfield converges into the MVP emblem |
| AVENOR: THE MOMENT | Singular | A custom AVENOR crest builds from layered light and resolves into the player's profile identity |

These are initial showcase concepts, not locked animations. Each must have a short version and a reduced-effects version.

## 3. Elimination Announcements

Announcements provide optional identity and feedback when a player earns an elimination. They must never replace the kill feed or communicate information unavailable through normal gameplay.

### Announcement types

- **Text callout:** short phrase shown in the player's elimination feed.
- **Audio sting:** brief, non-verbal sound attached to the player's selected announcement style.
- **Milestone callout:** optional special phrase for a validated multi-elimination streak or mode milestone.
- **Team feed:** neutral, consistent information about who eliminated whom.

### Rules

- Standard kill-feed information is always shown independently of cosmetic announcements.
- Custom announcements are heard only by the owner by default. A player may opt in to hearing other players' announcement stings.
- No announcement may imitate footsteps, reloads, ability cues, hit markers, warnings, or objective audio.
- Keep stings short, non-startling, and mixed below important gameplay audio.
- Avoid insults, slurs, targeted harassment, or player-entered audio.
- Competitive playlists may use a standardized announcement set for all players.

### Initial announcement styles

| Name | Rarity | Text identity | Audio identity |
|---|---|---|---|
| CONFIRMED | Commonplace | CONFIRMED | Dry, neutral confirmation tone |
| CLEAN | Commonplace | CLEAN | Short soft click |
| NEXT | Commonplace | NEXT | Two-note neutral ping |
| CHECKED | Altered | CHECKED OFF | Mechanical stamp |
| NO CONTEST | Altered | NO CONTEST | Tight low synth note |
| OUTPLAYED | Altered | OUTPLAYED | Brief rising digital tone |
| SYSTEM LOG | Evolved | TARGET LOGGED | Quiet terminal chirp |
| BLUE SHIFT | Evolved | BLUE SHIFT | Short stereo sweep |
| DEAD AIR | Evolved | DEAD AIR | Muted radio-style tone, no static burst |
| HARD RESET | Ascendant | RESET COMPLETE | Compact descending synth sequence |
| ZERO TRACE | Ascendant | ZERO TRACE | Soft glass-like resonance |
| ORBITAL | Ascendant | ORBITAL CONFIRMED | Short spatial tone |
| SOLAR FLARE | Extraordinary | LIGHTS OUT | Warm layered chord, tightly limited |
| PHANTOM INDEX | Extraordinary | INDEX UPDATED | Precise digital sequence |
| FINAL SIGNAL | Singular | FINAL SIGNAL | Signature AVENOR tonal motif |
| EVENT HORIZON | Singular | HORIZON CLOSED | Deep, controlled tonal resolution |
| WORLDSTATE | Singular | WORLDSTATE UPDATED | Multi-layer synthetic signature |
| AVENOR SIGNATURE | Singular | AVENOR CONFIRMED | Unique branded three-part sting |

The text phrases above are cosmetic labels. They must not imply extra damage, hidden tracking, or other gameplay effects.

## 4. Player Banners

Banners are horizontal profile identity plates displayed in the lobby, match intro-free player panels, scoreboard, party UI, and profile pages. They are not character clothing or accessories.

### Banner construction

A banner contains:
- One background artwork.
- One small emblem or icon.
- Player name and optional selected title in a separate readable UI layer.
- Optional subtle animation for higher rarity tiers.

Player text must remain readable over every banner. No animated element may cover names, scores, or team indicators.

### Initial banner collection

| ID | Name | Rarity | Visual direction |
|---|---|---|---|
| BAN-001 | DEEP CURRENT | Commonplace | Navy field with one ice-blue line |
| BAN-002 | GRIDLINE | Commonplace | Fine geometric grid |
| BAN-003 | STATIC FORM | Commonplace | Graphite blocks with a clean white edge |
| BAN-004 | BLUEPRINT | Commonplace | Minimal technical drafting marks |
| BAN-005 | COLD FRONT | Altered | Layered ice-blue bands |
| BAN-006 | VIOLET TRACE | Altered | Thin violet path crossing dark navy |
| BAN-007 | SIGNAL NOISE | Altered | Controlled broken-line pattern |
| BAN-008 | NIGHT SHIFT | Altered | Dark skyline silhouette |
| BAN-009 | PRISMATIC | Evolved | Faceted blue-violet glass geometry |
| BAN-010 | OVERDRIVE | Evolved | Directional energy streaks |
| BAN-011 | FRACTURE MAP | Evolved | Interlocking fractured polygons |
| BAN-012 | DEEP ORBIT | Evolved | Orbital arcs around a small central mark |
| BAN-013 | GLASS TIDE | Ascendant | Translucent layered wave forms |
| BAN-014 | CLOCKWORK | Ascendant | Precision mechanical rings |
| BAN-015 | PHASE SHIFT | Ascendant | Offset dimensional panels |
| BAN-016 | SOLAR ARRAY | Ascendant | Radiating segmented geometry |
| BAN-017 | CELESTIAL GRID | Extraordinary | Deep-space grid with restrained star points |
| BAN-018 | FROSTBURN | Extraordinary | Crystalline blue forms with violet edges |
| BAN-019 | INFINITE CIRCUIT | Extraordinary | Complex luminous circuit paths |
| BAN-020 | CROWN VECTOR | Extraordinary | Angular champion crest |
| BAN-021 | THE FIRST LIGHT | Singular | A horizon line opening through layered darkness |
| BAN-022 | STARFORGED | Singular | Forged geometric star emblem |
| BAN-023 | EVENT HORIZON | Singular | Curved light bending around a dark center |
| BAN-024 | AVENOR: ORIGIN | Singular | Signature AVENOR mark emerging from a deep-blue field |

### Banner rules

- Banners are unlocked through progression, mastery, achievements, events, and cosmetic purchases.
- No banner is required for a competitive feature.
- Animation is subtle by default and can be disabled.
- Banner rarity does not determine rank or skill.

## 5. Profile Showcases

The profile is a compact record of identity and achievement, not a wall of every item a player owns.

### Profile layout

**Header**
- Player name and Roblox identity.
- Selected title.
- Selected banner.
- Account level.
- Current universal competitive rank and season.

**Showcase slots**
1. Featured weapon: one owned weapon with selected owned skin.
2. Featured mastery: one weapon mastery badge or completion display.
3. Featured achievement: one earned achievement.
4. Featured cosmetic: one owned cosmetic effect, emote, or banner detail.
5. Optional secondary showcase: a second weapon or achievement unlocked through progression.

**Statistics**
- Total matches.
- Wins and losses.
- Mode-specific records.
- Current and peak competitive rank.
- Weapon mastery completion count.
- Recent achievements.

### Privacy and fairness

- Players can hide selected statistics or restrict profile visibility using account privacy settings.
- Never expose private account data, hidden matchmaking data, or internal moderation information.
- Account level, cosmetics, and showcase choices must not be presented as proof of competitive skill.
- Profiles must load safely if a player owns an item that has since been retired or updated.
- All equipped showcase items must be validated against server-side ownership.

### Profile titles

Titles are short text labels shown below the player name. They are earned through mastery, ranked milestones, challenges, and events. They do not use rarity to imply skill unless the title itself is a verified rank reward.

Initial title examples:
- FIRST CONTACT
- RANGE TESTED
- FIELD READY
- CLEAN OPERATOR
- OBJECTIVE FIRST
- LAST PLAYER UP
- MAP SPECIALIST
- WEAPON MASTER
- ORIGIN BREAKER
- AVENOR VETERAN

## 6. Ownership, Equip Rules, and UI

- Each category has a dedicated inventory section.
- Players may equip one banner, one title, one MVP presentation, and one elimination announcement style.
- Profile showcase slots are independent of the in-match loadout.
- Previewing an item must not equip it automatically.
- Locked items show their unlock source and requirements.
- Removed or unavailable items remain visible in historical match records but cannot be equipped if their assets are no longer supported.
- Inventory ownership and equip state are server-validated and saved according to `AVENOR_Technical.md`.

## 7. Open Decisions

- Exact MVP contribution weights and tie-break implementation.
- Which MVP and announcement items are available at launch.
- Final collection size and unlock distribution for banners and titles.
- Whether other players' cosmetic announcement stings are enabled by default.
- Profile visibility defaults and exact privacy controls.
- Animation budgets and platform-specific reduced-effects behavior.

## 8. Related Documents

- `AVENOR_Main.md` — overall cosmetic and presentation direction.
- `AVENOR_Progression.md` — profile progression, unlocks, and rewards.
- `AVENOR_Cosmetics.md` — individual weapon skins.
- `AVENOR_KillEffects.md` — elimination effects.
- `AVENOR_WinEffects.md` — victory effects.
- `AVENOR_Emotes.md` — character emotes.
- `AVENOR_Technical.md` — server validation, ownership, and persistence.
