# AVENOR — Main Game Design

> **Canonical design brief.** AVENOR is an exploration-first multiplayer open-world sandbox shooter, with separate competitive FPS playlists. The Open World is the main attraction. Combat, NPC reactions, factions, events and progression enrich the world rather than replacing exploration as its central purpose.

## 1. Identity
- **Name:** AVENOR
- **Platform:** Roblox
- **Genre:** Multiplayer open-world exploration sandbox with FPS combat and separate competitive playlists.
- **World style:** Modern, recognisable, stylised realism; detailed but readable and designed around Roblox performance.
- **Core promise:** Explore a large living world with other players. Discover places, meet people, encounter unexpected situations, find permanent equipment and choose your own adventures.
- **Primary experience:** The rotating Open World.
- **Secondary experience:** Dedicated competitive shooter playlists.
- **Movement reference:** Fast, responsive movement inspired by the feel of RIVALS, without copying its content.

## 2. What the game is really about
The main reason to join is **exploration and freedom in a populated multiplayer world**. Players should be curious about what is over the next hill, inside the next building or happening in the next settlement. They can explore alone, with friends or alongside strangers. They can investigate, collect, socialize, participate in activities, encounter NPCs, fight AI or other players where permitted, or simply travel.

AVENOR is not a mission queue disguised as an open world. It should not constantly force players into combat or display every secret as a map icon. Systems should create opportunities and let players choose whether to engage.

See `AVENOR_OpenWorld.md` for the detailed world experience specification.

## 3. Open World pillars
1. **Exploration:** coherent regions, memorable landmarks, hidden interiors, caves, tunnels, rooftops, clues and unusual locations.
2. **Multiplayer:** real players naturally meeting, forming groups, cooperating, competing and creating stories.
3. **Living world:** civilians, traders, adventurers, guards, security, military groups, specialists and hostile factions with routines and reactions.
4. **Dynamic situations:** optional activities, NPC expeditions, temporary incidents, changing locations and community discoveries.
5. **Combat freedom:** PvE against NPCs and PvP encounters under clearly designed rules. Friendly fire is under consideration and must include safeguards against griefing.
6. **Collection and progression:** permanent weapon discoveries, cosmetics, mastery, journal entries and achievements.
7. **World evolution:** rotating regions and seasonal transformations without wiping permanent progress.

## 4. Player freedom and world reactions
The world can react to what players do. Police/security or faction NPCs may respond to witnessed incidents, trespassing or hostility. Factions can remember relevant actions and adjust access, services or attitude. These reactions should feel like part of the world, not a visible wanted-level minigame.

**There is no visible numerical wanted level or GTA-style star meter.** NPCs must not be omniscient: they need plausible awareness through witnesses, alarms, local reports or faction communication. Local incident awareness and longer-term faction reputation are separate concepts. Details are proposals in `AVENOR_OpenWorld.md`.

A light GTA-inspired touch means freedom, inhabited cities, possible vehicles, shops/services and reactive NPCs. It does not make crime the main game loop. Vehicles, ownership, economy and exact services are not yet approved launch features.

## 5. NPCs and factions
NPC categories include civilians/workers, police and security, military/facility guards, traders, adventurers, specialists, independent groups and optional hostile factions. Not every faction is a combat faction. Groups can offer services, rumours, discoveries, access, activities or conflict.

NPCs should have reasons to be where they are and use efficient behaviour tiers. See `AVENOR_NPCs.md` and `AVENOR_Map_Performance.md`.

## 6. Combat, PvP and friendly fire
- Players can encounter hostile NPCs and fight them.
- Player-versus-player encounters are part of the intended sandbox direction, but exact coverage and safe-area rules are TBD.
- Friendly fire is desired for consideration, but defaults for parties, public groups and accidental damage must be decided.
- Do not assume combat is allowed everywhere.
- Do not assume full-loot PvP, permanent inventory loss or survival penalties.
- Combat must coexist with exploration and must not dominate every region.

## 7. Competitive playlists
Separate match-based FPS modes may include DUEL, DUOS, TDM, FFA, HARDPOINT, CTF and future original modes.
- Competitive modes use the player's permanently unlocked weapon collection.
- Competitive matches never unlock weapons.
- They may award rank progress, account XP, mastery and cosmetic rewards.
- They are not the Open World and do not replace it.

## 8. Weapon discovery and permanence
**Discover in the Open World. Keep it permanently. Use it everywhere.**
- First-time weapon discovery adds a stable weapon ID to the player's permanent collection.
- Discovery can be tied to a place, secret, NPC, expedition, activity or world event.
- Avoid making every weapon a random container reward.
- Death, disconnect, rotation and match results never remove owned weapons.
- Competitive modes cannot grant permanent weapon unlocks.

## 9. Movement and combat feel
- First-person during gameplay; third-person presentation in the home screen and suitable social spaces.
- No stamina system.
- Unrestricted sprint, jump, responsive air control, slide and slide-jump.
- Fast switching and readable weapon identities.
- Server-authoritative damage, ammunition, ownership and rewards.
- Exact movement and weapon tuning is TBD until tested.

## 10. Ammunition concept
The intended model uses a loaded magazine, quick-access spare magazine(s), then a slower backpack resupply reload. The purpose is reload decisions and downtime, not long-term ammunition scarcity. Exact magazine sizes, reserve rules, timing and interruption behaviour remain TBD. See `AVENOR_Gameplay.md`.

## 11. World rotation
- One active Open World region at a time.
- Proposed duration: four days.
- Rotation is a world event/calendar change, not a separate game mode.
- Multiple Roblox server instances can host the same active world identity.
- Ten proposed worlds are documented in `AVENOR_Worlds.md`; this is a long-term collection, not launch scope.
- Account level, weapons, cosmetics, mastery, currency and permanent discoveries persist.
- Exact schedule, map order and exceptions remain TBD.

## 12. Home screen and progression
The home screen includes a 3D character/weapon showcase and navigation for Enter World, Game Modes, Loadout, Arsenal, Character, Progression, Discoveries, Events, Social and Settings. Permanent progression includes account XP, weapon ownership, mastery, cosmetics, achievements, discovery records and competitive rank.

## 13. Performance is a core requirement
AVENOR's scale and NPC ambition create significant performance risks. Every map must be modular, streamable, profiled and tested on mobile. NPC simulation, physics, effects, lights, geometry and network traffic require explicit budgets. No map size, player cap or NPC count is final until measured.

The dedicated specification is `AVENOR_Map_Performance.md`. Do not start by building ten complete maps.

## 14. Visual identity
- Modern, believable geography with stylised readability.
- Deep blue and soft violet brand accents in UI, not forced onto every biome.
- Geometric modern typography.
- Strong environmental ambience and distinct regional soundscapes.
- Clean first-person gameplay presentation.
- High detail only where it is visible and valuable; performance always wins over unnecessary decoration.

## 15. Universal rarity
1. Commonplace
2. Altered
3. Evolved
4. Ascendant
5. Extraordinary
6. Singular

Rarity is presentation and collection value only. It never changes weapon statistics, hitboxes, movement, matchmaking or competitive advantage.

## 16. Unresolved decisions
Do not silently lock: PvP coverage, safe areas, friendly-fire defaults, death/respawn rules, exact faction roster, vehicle launch scope and ownership, player trading/economy, NPC density, world dimensions, player cap, map rotation schedule, weapon discovery conditions and first-release scope.

## 17. Document ownership
- Identity: this file.
- Open World sandbox: `AVENOR_OpenWorld.md`.
- Maps and performance: `AVENOR_Map_Performance.md`.
- World roster: `AVENOR_Worlds.md`.
- Rotation/events: `AVENOR_WorldEvents.md`.
- NPCs: `AVENOR_NPCs.md`.
- Movement/combat/ammunition: `AVENOR_Gameplay.md`.
- Roblox architecture: `AVENOR_Technical.md`.
- Development sequence: `AVENOR_Roadmap.md`.
