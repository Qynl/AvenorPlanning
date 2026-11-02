# AVENOR — Main Game Design

> **Canonical design brief.** This document supersedes the old description of AVENOR as primarily a conventional arena FPS. Existing weapons, abilities and cosmetic catalogues are retained where compatible, but the overall game identity is now an open-world multiplayer shooter sandbox with separate competitive playlists.

## 1. Game identity

- **Name:** AVENOR
- **Platform:** Roblox
- **Genre:** Large-scale multiplayer open-world shooter sandbox, with separate competitive FPS modes.
- **World style:** Modern and recognisable, with stylised realism suited to Roblox performance and readability. Not low-poly, not full sci-fi.
- **Core promise:** Enter a large living world, explore places worth discovering, meet players and NPCs, find permanent weapons, take part in unpredictable activities and events, and use the same growing arsenal in competitive matches.
- **Primary experience:** The rotating Open World.
- **Secondary experience:** Dedicated competitive shooter playlists.
- **Movement reference:** Fast, responsive RIVALS-like movement, used as a feel reference rather than copied content.
- **Player progression:** Persistent across every world rotation and match.

AVENOR is not simply an arena shooter with a large lobby map. The Open World must be a real game with its own exploration loop, population, discoveries, activities and evolving event calendar.

## 2. The two connected experiences

### 2.1 Open World — the primary game

Players enter the currently active large region. They can:
- Explore cities, towns, roads, industrial facilities, wilderness, ports and unusual locations.
- Discover weapons. A newly discovered weapon is permanently added to the player's account collection.
- Encounter friendly, neutral and hostile NPCs, including adventurer groups that travel through the world.
- Encounter other players naturally, cooperate, compete or fight.
- Find secrets, collectibles, hidden interiors and activities.
- Participate in world activities and limited-time events.
- Progress account level, weapon mastery, discovery records and cosmetic collections.
- Use their equipped loadout without losing permanently owned weapons on death.

The world should contain both obvious destinations and discoveries that players have to notice, investigate or share with friends. Exploration must lead to actual gameplay, not only scenery or a checklist of hundreds of identical objects.

### 2.2 Competitive modes — separate playlists

The home screen also offers match-based FPS modes such as DUEL, DUOS, TDM, FFA, HARDPOINT and CTF, plus future original modes.

Rules:
- Competitive modes use the player's permanently unlocked weapon collection.
- Competitive matches **never unlock weapons**. Weapon discovery belongs exclusively to the Open World.
- Competitive modes may award competitive rank, account XP, weapon mastery and cosmetic rewards.
- Competitive playlists use their own match maps and rules. They are not the rotating Open World.
- The same movement feel, weapon identities, abilities, HUD language and core combat rules should carry across both experiences where appropriate.

## 3. The defining progression connection

**Discover in the Open World. Keep it permanently. Use it everywhere.**

- A weapon discovered in the Open World becomes a permanent collection unlock.
- The weapon is not lost on death, disconnect, world rotation or match result.
- Players configure loadouts from the home screen and eligible safe locations.
- Competitive modes provide a place to master the arsenal, climb rank and earn non-weapon rewards.
- No competitive playlist may become the only route to a weapon.
- The exact discovery method for each weapon (direct find, NPC reward, exploration challenge, location secret or world activity) is specified per content item later. Avoid turning every unlock into a random chest.

## 4. World rotation

- One world is active for the whole Open World experience at a time.
- Proposed active duration: **four days**.
- At rotation, the active region changes to another world in the ten-world collection.
- Rotation is a limited-time world event and calendar change, **not a game mode or queue**.
- Multiple Roblox server instances may host the same active world; they must share the same world identity, rotation schedule and persistent player data.
- Player account level, weapons, cosmetics, mastery, achievements, currency and permanent discovery records do not reset.
- Map-local temporary activity state may reset when the world leaves rotation.
- Missed world-specific rewards should have a fair return path when that world rotates back or through a future archive/event. Do not punish players for being offline.
- The exact rotation time, order, special exceptions and whether a world can stay longer for a major event are TBD.

## 5. World identity and setting

AVENOR uses fictional modern regions inspired by believable geography:
- Dense cities and suburbs.
- Small towns, villages and rural roads.
- Forests, mountains, lakes and coastlines.
- Ports, airports, factories, rail yards and power facilities.
- Abandoned or restricted facilities with discoverable interiors.
- Seasonal weather and environmental changes.

Each map must feel like a coherent place, not a disconnected collection of arenas. The ten proposed worlds are documented in `AVENOR_Worlds.md`.

## 6. NPC population

The world contains more than players:
- Adventurers and explorers who travel in groups and investigate places.
- Civilians who populate towns and public areas.
- Traders and service NPCs.
- Guards and security NPCs.
- Hostile NPC groups in selected locations.
- Specialists such as mechanics, medics, guides and quest characters.

NPCs should have readable identities, routines, routes, reactions and reasons to be where they are. They should not all stand still waiting for interaction. The NPC system is defined in `AVENOR_NPCs.md`.

## 7. Movement and combat

- First-person gameplay camera.
- No stamina meter or sprint-energy limitation.
- Unrestricted sprinting.
- Responsive jumping, air control, sliding and slide-jumping.
- Bunny hopping may be tested, but its exact behaviour and balance are TBD.
- Fast weapon switching and responsive inputs.
- Distinct weapon firing identities and readable combat feedback.
- Fair server-authoritative damage and hit validation.
- No movement feature should be gated behind paid content or progression.

Detailed rules and prototype targets are in `AVENOR_Gameplay.md`.

## 8. Weapons, abilities and equipment

- Retain the existing weapon catalogue and rebuilt firearm identities as the starting content library.
- Existing loadout structure: Primary, Secondary, Melee, Utility and one Ability, subject to final tuning.
- Weapon unlocks come only from Open World discovery.
- Players may own a large permanent collection but equip a limited loadout.
- Abilities remain cooldown-based, with clear counterplay and no automatic win buttons.
- Weapon actions must not conflict with the player's ability to aim or use normal weapon controls. Rebinding is supported.
- Ammunition should create reload decisions, not long-term scavenging pressure. See the magazine/backpack model in Gameplay.

## 9. Home screen and player interface

The home screen is a proper shooter hub with a 3D character/weapon showcase and clear navigation:
- PLAY / ENTER WORLD
- GAME MODES
- LOADOUT
- ARSENAL
- CHARACTER
- PROGRESSION
- DISCOVERIES
- EVENTS
- SOCIAL
- SETTINGS

The interface is specified in `AVENOR_Loadout_UI.md` and `AVENOR_HUD_Audio.md`.

## 10. Progression and rewards

Permanent progression includes:
- Account level and XP.
- Permanent weapon collection.
- Weapon mastery and statistics.
- Cosmetics, skins, emotes, effects, titles and banners.
- Discovery journal and permanent records.
- Competitive rank and seasonal competitive rewards.
- Event history and eligible permanent event rewards.

No direct combat-stat upgrades. Rarity is cosmetic ambition, not power.

## 11. Seasonal and world events

- World rotation is the recurring four-day event framework.
- Seasonal transformations can change the active world visually and add temporary activities, NPCs, discoveries and cosmetics.
- Halloween, winter/Christmas, summer and original AVENOR world incidents are possible event themes.
- Events must add experiences, not merely decorations.
- Event rules live in `AVENOR_WorldEvents.md`.

## 12. Visual and audio direction

- Modern, realistic-inspired environments with stylised readability.
- Deep blue and soft violet brand accents in UI, not forced onto every map.
- Geometric modern typography.
- Strong environmental audio, distinct region ambience, readable weapon sounds and configurable effects.
- Performance and mobile readability are non-negotiable.

## 13. Universal rarity

All rarity-bearing items use the same hierarchy:
1. Commonplace
2. Altered
3. Evolved
4. Ascendant
5. Extraordinary
6. Singular

Rarity never changes weapon statistics, unlock power, hitboxes, movement, matchmaking or competitive advantage.

## 14. Decisions deliberately left open

Do not silently lock these:
- Exact size and stud footprint of each world.
- Exact player cap per world server and shard architecture.
- Whether vehicles are a launch feature and which types.
- Player base-building, crafting, factions and territory ownership.
- Whether there is a player trading system.
- Exact hostile-NPC density and difficulty.
- Exact four-day rotation schedule and map order.
- Exact weapon discovery conditions and spawn logic.
- Final active launch roster and first-release scope.
- Final competitive playlist count and tuning.

## 15. Canonical document ownership

- Overall identity: this file.
- World roster and geography: `AVENOR_Worlds.md`.
- Rotation and events: `AVENOR_WorldEvents.md`.
- NPCs: `AVENOR_NPCs.md`.
- Movement, combat and ammunition: `AVENOR_Gameplay.md`.
- Competitive match rules: `AVENOR_GameModes.md`.
- Home screen/loadouts: `AVENOR_Loadout_UI.md`.
- Progression: `AVENOR_Progression.md`.
- Roblox implementation: `AVENOR_Technical.md`.
