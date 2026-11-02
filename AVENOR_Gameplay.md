# AVENOR — Core Gameplay Specification

> Exploration-first multiplayer sandbox. Combat, NPC reactions and progression support the world; they do not replace exploration as the primary attraction.

## 1. Player freedom loop
There is no single mandatory mission loop. Join the active world, choose a direction or destination, travel through a living region, notice NPCs/players/clues/incidents, then investigate, interact, collect, socialise, cooperate, fight or ignore the situation. Record meaningful discoveries and continue freely. Support solo explorers, friend groups and busy public servers. The game must remain interesting without a major event running.

## 2. Exploration
Use recognisable landmarks, enterable buildings, layered interiors, hidden rooms, environmental clues, remote destinations, NPC expeditions, unmarked secrets and locations with different moods. Some places are peaceful, some social, some dangerous or strange. Avoid map-marker overload, identical loot containers, repetitive fetch quests and combat gates on every discovery.

## 3. Player-created experiences
Players can meet and travel together, form temporary squads, investigate clues, help during NPC incidents, compete or fight where PvP permits, encounter rival groups and socialise. Party systems should help without making solo play second-class.

## 4. Combat layers
- PvE: hostile NPCs, guarded sites and faction incidents.
- PvP: player encounters under world rules.
- Cooperative: players and friendly NPCs responding to shared situations.
Combat is not mandatory across the map. Calm spaces and routes coexist with dangerous sites.

### Friendly fire
Friendly fire is a desired feature to prototype, not a fully locked rule. Test clear teammate identification, immediate feedback, accidental-damage handling, anti-griefing protections, safe-space enforcement and server-authoritative damage. Do not finalise penalties or multipliers before playtesting.

## 5. Reactive world without visible wanted UI
A hidden internal incident/attention model may exist, but there is no required visible wanted meter. Reactions are communicated through the world:
- A guard notices restricted-area entry and warns the player.
- A civilian or NPC witness reacts to a public incident.
- Security communicates locally and changes patrol behaviour.
- Facility access may be restricted.
- A faction may become wary or hostile after repeated conflicts.
- A response arrives only if the incident was observed, reported or otherwise detected.

NPCs must not magically know everything. Awareness is local and contextual. Witnesses have limited memory/communication. Leaving an area may reduce immediate attention, while recognised identity or faction consequences may persist. Faction reputation is separate from immediate incident attention.

## 6. Light GTA-like freedom
Possible activities include shops, services, travel, vehicles, public incidents, restricted locations and civilian routines. Vehicles are proposed and require a separate network/performance prototype. Take inspiration from freedom and reactive worlds, not copied missions, characters, maps or UI.

## 7. Organic encounters
An adventurer group investigates a landmark; a trader arrives; a guard challenges entry; a research team opens a temporary site; a power outage changes a district; a clue points to a remote interior; rival NPC groups meet; a local incident attracts curious players. Prefer reusable systems interacting over a separate cutscene for every event.

## 8. Movement
First-person; no stamina; unrestricted sprint; jump and responsive air control; slide and slide-jump; fast weapon switching; keyboard/mouse, controller and mobile parity. Tune values in a playable prototype.

## 9. Weapon discovery
All permanent weapon unlocks originate in the Open World. Discovery is server-validated and idempotent. Sources include hidden locations, clues, expeditions, activities and incidents. Duplicate discoveries use a defined alternative reward. Death, disconnect, rotation and seasons never remove weapons. Competitive playlists never unlock weapons.

## 10. Ammunition
Intended model: loaded magazine, quick-access spare magazines, then a slower backpack resupply reload. This creates reload timing decisions without making players scavenge basic ammunition all session. Capacities, reserve limits and timings remain TBD.

## 11. Death and persistence
Death never removes permanent weapons, cosmetics, levels or discoveries. Respawn rules, temporary penalties and PvP consequences remain TBD. Save permanent rewards through server-validated systems.

## 12. First playable
One compact district; first-person movement; a few weapons; several players; small NPC population and one travelling group; one discovery and permanent weapon unlock; one reactive security interaction; one ambient incident; basic PvE and controlled PvP test; saving/rejoin; mobile performance measurement. Do not build ten worlds or full faction warfare before this slice is fun.
