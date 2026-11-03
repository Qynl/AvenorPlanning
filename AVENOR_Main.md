# AVENOR — Main Game Design

> **Canonical design brief.** AVENOR is an exploration-first multiplayer open-world sandbox shooter, with separate competitive FPS playlists. The Open World is the main attraction. Its inhabitants are real players and a limited number of player-like NPC faction groups. There is no civilian simulation, police system, public-service NPC layer or everyday NPC society.

## 1. Identity
- **Name:** AVENOR
- **Platform:** Roblox
- **Genre:** Multiplayer open-world exploration sandbox shooter with separate competitive playlists.
- **World style:** Modern, recognisable, stylised realism; detailed but readable and designed around Roblox performance.
- **Core promise:** Explore a large, authored world with other players. Discover places, find weapons and equipment, encounter rival squads, establish temporary camps, protect or steal stored supplies and create your own adventures. AVENOR is an exploration-action sandbox, not a realistic city-life or crime simulator.
- **Primary experience:** The rotating Open World.
- **Secondary experience:** Dedicated competitive shooter playlists.
- **Movement reference:** Fast, responsive movement inspired by the feel of RIVALS, without copying its content.

## 2. What the game is really about
The main reason to join is **exploration, scavenging and unpredictable encounters**. Players travel through large regions, search hundreds of distinct locations, discover weapons and equipment, meet other players and occasionally encounter NPC groups that behave like player squads.

There is no mandatory mission chain or attempt to simulate everyday life. AVENOR is not GTA: no civilian crowds, traffic-life simulation, police response loop, wanted system, criminal career, functioning service economy or city-management layer. Buildings and infrastructure provide places, routes, atmosphere and discoveries, not a simulated society.

## 3. Core gameplay identity
AVENOR combines three connected pillars rather than treating them as separate modes:
1. **Explore:** travel through large, distinctive regions, discover hundreds of locations, hidden routes, secrets and unusual places.
2. **Progress:** discover weapons and build a permanent account collection; find equipment, supplies and other physical items in the world.
3. **Interact:** meet other players, form groups, contest discoveries, establish temporary camps and create player-driven situations.

World events, player-like NPC factions and dynamic location states connect these pillars. The world creates opportunities; players decide what to do with them. The intended mood ranges from quiet exploration to sudden high-energy encounters. Not every location is dangerous, occupied or full of loot.

## 4. The world and its inhabitants
The Open World contains:
- **Real players**, who are the main population and source of unpredictable social encounters.
- **NPC faction groups**, used sparingly to make remote places and valuable discoveries feel inhabited or contested.

NPC factions are not a general population. No ambient civilian crowds, police, guards, traders, shopkeepers, medics, mechanics, quest-givers, public-service workers, traffic simulation or law-enforcement system.

NPC factions should resemble player squads: recognisable members, weapons, equipment, group movement, camps, supplies, awareness, combat decisions, retreat, scavenging and defensive behaviour. Some groups may protect rare weapons, equipment caches or unusual discoveries. They should not run a city or provide a menu of services.

## 5. Combat and encounters
- Players can encounter and fight NPC faction groups.
- Player-versus-player combat is enabled throughout the Open World. There are no PvP-free regions in the current confirmed direction. Exact spawn protection, exploit prevention and combat-disengagement rules still need design and testing.
- NPC groups should use the same readable combat language as players: movement, cover, weapons, reloads, teamwork, retreat and repositioning.
- Do not turn every location into a combat zone. Quiet exploration and empty places are important.
- Friendly fire, spawn protection, death/respawn details and physical item-loss rules remain TBD. PvP itself is enabled throughout the Open World.
- Do not assume full-loot PvP, permanent inventory loss or survival penalties.

## 6. Competitive playlists
Separate match-based FPS modes may include DUEL, DUOS, TDM, FFA, HARDPOINT, CTF and future original modes.
- Competitive modes use the player's permanently unlocked weapon collection.
- Competitive matches never unlock weapons.
- They may award rank progress, account XP, mastery and cosmetic rewards.
- They are not the Open World and do not replace it.

## 7. Permanent collection and physical world storage
AVENOR has two distinct ownership layers. They must never be confused.

### Main Hub collection — permanent
- Permanently discovered/unlocked weapons are account entitlements held in the Main Hub Arsenal.
- Weapon skins, weapon mastery, cosmetics, levels and permanent discoveries also belong to the account.
- Players can equip their owned weapons from the hub and use them in supported experiences.
- These permanent unlocks cannot be stolen, dropped as loot, raided from a base or removed by death, disconnect, rotation or season changes.
- Competitive modes use the permanent collection and never grant weapon unlocks.

### Physical world storage — vulnerable
- Players may bring eligible physical items and supplies back from the Open World and deliberately deposit them in storage at their base.
- These deposited items are world possessions, not permanent account unlocks.
- If another player gains access to that storage and steals an item, it is removed from the owner's stored inventory and becomes the thief's possession, subject to final transfer/anti-exploit rules.
- A stolen physical item never transfers or removes the owner's permanent weapon unlock. For example, stealing a stored weapon-shaped item or supply does not steal the corresponding weapon ID from the owner's Arsenal.
- The exact list of storable items, stack limits, access permissions, raid rules, persistence and recovery remain TBD.

**Design rule:** Permanent weapons live in the Main Hub collection. Risk-bearing possessions live physically in the world.

## 8. Movement and combat feel
- First-person during gameplay; third-person presentation in the home screen and suitable social spaces.
- No stamina system.
- Unrestricted sprint, jump, responsive air control, slide and slide-jump.
- Fast switching and readable weapon identities.
- Server-authoritative damage, ammunition, ownership and rewards.
- Exact movement and weapon tuning is TBD until tested.

## 9. Ammunition concept
The intended model uses a loaded magazine, quick-access spare magazine(s), then a slower backpack resupply reload. The purpose is reload decisions and downtime, not long-term ammunition scarcity. Exact magazine sizes, reserve rules, timing and interruption behaviour remain TBD. See `AVENOR_Gameplay.md`.

## 10. World rotation
- One active Open World region at a time.
- Proposed duration: four days.
- Rotation is a world event/calendar change, not a separate game mode.
- Multiple Roblox server instances can host the same active world identity.
- Travel is designed around both on-foot movement and optional vehicles; exact vehicle roster, ownership and launch scope remain TBD.
- Locations combine handcrafted landmarks, hidden areas and dynamically changing states. World revisits should be driven by discoveries, events, player activity and changing world conditions.
- Ten proposed worlds are documented in `AVENOR_Worlds.md`; this is a long-term collection, not launch scope.
- Account level, weapons, cosmetics, mastery, currency and permanent discoveries persist.
- Exact schedule, map order and exceptions remain TBD.

## 11. Home screen and progression
The home screen includes a 3D character/weapon showcase and navigation for Enter World, Game Modes, Loadout, Arsenal, Character, Progression, Discoveries, Events, Social and Settings. Permanent progression includes account XP and levels, weapon ownership and mastery, cosmetics, achievements, discovery records, meaningful collectibles, purely cosmetic trophies and competitive rank. Rewards can come from challenges, exploration, levels, events and weapon mastery. Progression must never grant unfair combat advantages.

## 12. Performance is a core requirement
Large maps, player counts, weapon combat, physics, effects, geometry, streaming and a limited number of NPC squads create performance risks. NPC simulation must be budgeted like a small number of nearby player agents, not a city-wide crowd simulation. No map size, player cap or NPC count is final until measured.

The dedicated specification is `AVENOR_Map_Performance.md`. Do not start by building ten complete maps.

## 13. Visual identity
- Modern, believable geography with stylised readability.
- Deep blue and soft violet brand accents in UI, not forced onto every biome.
- Geometric modern typography.
- Strong environmental ambience and distinct regional soundscapes.
- Clean first-person gameplay presentation.
- High detail only where it is visible and valuable; performance always wins over unnecessary decoration.

## 14. Universal rarity
1. Commonplace
2. Altered
3. Evolved
4. Ascendant
5. Extraordinary
6. Singular

Rarity is presentation and collection value only. It never changes weapon statistics, hitboxes, movement, matchmaking or competitive advantage.

## 15. Unresolved decisions
Do not silently lock: safe-area functionality (if any, without disabling PvP), friendly-fire defaults, spawn protection, death/respawn rules, exact NPC faction roster and squad count, vehicle launch scope and ownership, player trading/economy, world dimensions, player cap, map rotation schedule, exact base persistence, storage access/raid rules, storable item categories, storage capacity, offline-raid protection and first-release scope.

## 16. Document ownership
- Identity: this file.
- Open World sandbox: `AVENOR_OpenWorld.md`.
- Maps and performance: `AVENOR_Map_Performance.md`.
- World roster: `AVENOR_Worlds.md`.
- Rotation/events: `AVENOR_WorldEvents.md`.
- Player-like NPC factions: `AVENOR_NPCs.md`.
- Locations: `AVENOR_Locations.md`.
- Movement/combat/ammunition: `AVENOR_Gameplay.md`.
- Roblox architecture: `AVENOR_Technical.md`.
- Development sequence: `AVENOR_Roadmap.md`.
