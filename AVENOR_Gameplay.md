# AVENOR — Core Gameplay Specification

> Exploration-first multiplayer sandbox. The world creates opportunities; players choose what to do with them. Exploration, permanent collection progression and player-driven interaction form one connected experience.

## 1. Core identity and player freedom
AVENOR is a large multiplayer open-world sandbox shooter with separate competitive playlists. Its three connected pillars are:
- **Explore:** travel through authored regions, discover hundreds of distinct locations, hidden routes, secrets and unusual places.
- **Progress:** permanently unlock weapons and build an account collection; find physical supplies and equipment in the world.
- **Interact:** meet other players, form groups, contest discoveries, establish temporary camps and create emergent situations.

There is no mandatory mission chain. Players can roam, investigate, scavenge, travel, socialise, cooperate, avoid encounters or fight where world rules permit. The world should support quiet exploration as well as sudden high-energy encounters.

## 2. Exploration and discovery
Use recognisable landmarks, enterable buildings, layered interiors, hidden rooms, environmental clues, remote destinations, faction activity, unmarked secrets and locations with different moods. Some places are peaceful, some social, some dangerous or strange.
- Avoid map-marker overload, identical loot containers, repetitive fetch quests and combat gates on every discovery.
- Not every location needs loot, an enemy or an objective.
- Some discoveries permanently unlock weapons; others provide physical supplies, collectibles, records, cosmetics or knowledge.
- Discovery conditions and rewards must be server-validated.

## 3. Player-created experiences
Players can meet and travel together, form temporary squads, investigate clues, compete, cooperate, contest locations, establish temporary camps and socialise. Party systems should help without making solo play second-class.
- A camp is a place players establish and use, not permanent ownership of surrounding land.
- Groups may arrive, stay, leave, abandon a site or contest another group's presence.
- Do not require constant upkeep or punish players for taking breaks.
- Camp persistence and exact placement rules remain TBD.

## 4. Permanent account collection
Permanent weapons are account unlocks, not physical loot that can be stolen.
- First-time weapon discoveries in the Open World add a stable weapon ID to the player's permanent collection.
- The Main Hub Arsenal is the authoritative home for permanently unlocked weapons.
- Players equip owned weapons from the Main Hub and use them in supported experiences.
- Weapon skins, mastery, cosmetics, account levels and permanent discoveries are also account progression.
- Death, disconnect, base raids, world rotation and seasons never remove permanent weapon ownership.
- Competitive playlists use the permanent collection and never grant weapon unlocks.
- Duplicate weapon discoveries use a defined alternative reward rather than removing or replacing ownership.

## 5. Physical world items and base storage
AVENOR has a separate layer for physical possessions accumulated in the Open World.
- Players can carry eligible physical supplies/equipment and deliberately deposit them into storage at a player-established base.
- Deposited items are not permanent account unlocks. They are physical world possessions.
- If another player gains access to the storage and steals an item, that item is removed from the owner's stored stock and becomes the thief's possession, subject to final transfer and anti-exploit rules.
- Stealing a physical item never steals the corresponding permanent weapon ID from the owner's Main Hub Arsenal.
- The exact storable categories, stack limits, storage capacity, access permissions, raid rules, offline protection, persistence and recovery are TBD.
- Do not silently assume full-loot PvP, that every carried item is lost on death, or that every base can be raided at any time.

**Core rule:** Permanent weapon collection is safe. Physical supplies deliberately deposited in a base can be stolen.

## 6. NPC faction encounters
The only planned NPCs are limited AI-controlled faction squads that behave like player groups. They may travel, scavenge, carry weapons and equipment, establish temporary camps, occupy selected locations, defend some rare discoveries, reposition, retreat, regroup or abandon a site.
- NPCs are sparse and meaningful, not a background population.
- They use bounded sight/hearing and local awareness. No omniscient detection.
- Combat should be readable and fair: movement, cover, reloads, teamwork, retreat and repositioning.
- No civilian crowds, police, guards-for-hire, traders, shopkeepers, medics, mechanics, quest-givers, public-service NPCs, wanted systems, witness systems or law-enforcement loops.
- Not every rare discovery is guarded, and not every location is occupied.
- Avoid instant respawns and unfair accuracy.

## 7. Combat and PvP coexistence
- PvE: occasional player-like faction encounters and guarded discoveries.
- PvP: player encounters within the eventual world rules.
- Cooperative: players may work together or encounter each other during shared discoveries and events.
- Combat is not mandatory across the map. Calm spaces and routes coexist with dangerous sites.
- Exact PvP coverage, safe areas, friendly fire, death/respawn consequences and item-drop rules remain TBD.
- All damage, awareness, inventory changes, theft and rewards must be server-authoritative.

## 8. World events and dynamic locations
Events should create opportunities and change where players travel, what they discover and who they encounter. Examples include unusual signals, temporary access to a discovery, faction movement, environmental transformations, storms, altered routes and temporary anomalies.
- Events should not force every player into one combat hotspot.
- Dynamic locations can change between quiet, occupied, abandoned, damaged, powered, inaccessible or transformed states.
- World events should complement ordinary exploration rather than make the game uninteresting without an active event.

## 9. Movement
First-person gameplay; third-person hub presentation. No stamina. Unrestricted sprint, jump, responsive air control, slide and slide-jump; fast weapon switching. Support keyboard/mouse, controller and mobile. Tune values in a playable prototype.

## 10. Ammunition
Intended model: loaded magazine, quick-access spare magazines, then a slower backpack resupply reload. This creates reload timing decisions without making players scavenge basic ammunition all session. Capacities, reserve limits and timings remain TBD.

## 11. Death and persistence
Death never removes permanent weapons, cosmetics, levels, mastery or permanent discoveries. Physical item loss on death, dropped-item rules, base persistence, respawn rules and temporary penalties remain TBD. Theft of deposited base storage is a separate deliberate risk and does not affect permanent account unlocks.

## 12. First playable
One compact district; first-person movement; a few weapons; several players; one small player-like NPC faction group; several distinct POIs; one discovery and permanent weapon unlock; physical supply collection; a basic camp/storage prototype with server-validated deposit and theft; saving/rejoin; controlled PvP test; mobile performance measurement. Do not build ten worlds or full faction warfare before this slice is fun.

## 13. Out of scope
No civilian-life simulation, police/crime systems, wanted levels, routine city schedules, traffic simulation, public-service NPCs, city economy, forced survival meters, mandatory crafting trees or base upkeep. These systems do not support AVENOR's core identity.
