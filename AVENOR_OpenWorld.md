# AVENOR — Open World Experience & Living Sandbox

> **Current direction: exploration-first multiplayer sandbox.** The Open World is the main attraction. Combat, NPC reactions, factions, vehicles, activities and world events support exploration and player freedom; they must not turn the experience into a constant mission queue or a wanted-level simulator.

## 1. Player promise

Enter a large, recognisable world with other real players. Explore because interesting places, people, discoveries and situations are scattered throughout it. Choose your own pace: roam, investigate, meet people, collect, take part in activities, fight NPCs, fight other players where rules allow, or simply travel around.

There is no single mandatory activity loop. The world should support several play styles at once and create memorable unscripted encounters.

## 2. Priority order

1. Exploration and discovery.
2. A populated world shared with other players.
3. Emergent situations and dynamic activities.
4. NPC life, groups, factions and world reactions.
5. Combat against NPCs and players.
6. Collection, progression and personal expression.
7. Optional GTA-inspired freedom systems such as vehicles, wanted-by-authorities reactions, shops and everyday world interactions.

Do not let combat or crime-response systems dominate the map, UI or marketing identity.

## 3. Exploration systems

Worlds should reward curiosity through:
- Recognisable landmarks and distant points of interest.
- Hidden rooms, interiors, tunnels, rooftops, caves and unusual routes.
- Environmental clues and connected discoveries.
- NPC rumours, travelling expeditions and unexpected encounters.
- Rare finds, collectibles, records, cosmetics and permanent weapon discoveries.
- Locations that change state during world events.
- Discoveries that players can share socially without every secret being immediately marked on the map.

Avoid filler collectibles and repetitive copy-paste buildings. Each major discovery needs a reason to remember its location.

## 4. Player freedom and social play

Players may:
- Explore alone or with friends.
- Form temporary groups/parties.
- Meet strangers naturally.
- Cooperate in activities or NPC encounters.
- Compete or fight other players according to the eventual PvP rules.
- Trade or use services only if a fair economy/trading system is later approved.
- Use social hubs and public spaces without being forced into combat.

Friendly fire is a desired design feature to evaluate, not permission for griefing. If enabled, it needs clear group rules, readable feedback, abuse prevention and consequences. Party friendly-fire behaviour and public-world rules must be explicitly configured.

## 5. NPC world population

NPCs should make the world feel inhabited rather than acting as static quest dispensers. Initial categories:
- Civilians and workers.
- Police/security and guards.
- Military/security organisations.
- Traders and travelling merchants.
- Adventurers and explorers.
- Specialists and service providers.
- Independent groups.
- Hostile or rival factions.

NPCs can walk routes, visit locations, investigate events, interact with each other, retreat from danger, request help and participate in encounters. Use simple state machines and distance-based simulation. See `AVENOR_NPCs.md`.

## 6. Factions and relationships

Factions are groups with their own identity, locations, routines, interests and relationships. A faction may be friendly, neutral, suspicious or hostile toward a player depending on context and past actions.

Possible faction types (examples, not a final roster):
- Local police / public security.
- Regional military or facility security.
- Independent adventurer organisations.
- Traders and logistics groups.
- Hostile gangs or organised groups.
- Researchers, workers or settlement organisations.

Factions should not all be combat factions. Many should create exploration, social and service opportunities.

## 7. Unscripted world reactions

The world may react to player behaviour without exposing a visible numerical wanted level.

Examples:
- Security witnesses an incident and may investigate or respond.
- A restricted facility challenges or refuses entry to an unauthorised player.
- Repeated hostile behaviour toward a faction can change its attitude.
- A trader or service NPC may refuse service when the player's reputation with their group is poor.
- Friendly groups may provide information, access or assistance.
- A nearby NPC group may react to a disturbance or another active event.

### Design rules
- **No visible GTA-style wanted stars or public wanted-level meter.** Reactions should be communicated through NPC behaviour, dialogue, access, radio chatter, search activity and world context.
- Avoid omniscient NPCs. Reactions need plausible awareness: witnesses, alarms, local reports or faction knowledge.
- Do not make every NPC instantly know what happened everywhere.
- Separate local incident awareness from longer-term faction reputation.
- Allow situations to cool down when the player leaves the area or enough in-world time passes, where appropriate.
- Do not punish exploration or harmless experimentation with permanent account-wide hostility.
- Keep responses fair, readable and performant. The system is fictional game logic, not a realistic law-enforcement simulator.

## 8. Combat and PvP coexistence

The Open World supports:
- PvE encounters against hostile NPCs.
- Player-versus-player encounters where the final PvP rules permit them.
- Faction conflicts and contested activities.
- Friendly-fire testing for parties and squads.

The exact safe-area model, PvP coverage, death/respawn rules, friendly-fire defaults and consequences remain **TBD**. Do not assume full-loot PvP, permanent item loss or combat everywhere. Exploration must remain viable for players who are not seeking a fight.

## 9. GTA-inspired systems, adapted for AVENOR

The desired touch is freedom and a reactive, inhabited world, not copying another game's missions or interface. Candidate systems:
- Drivable vehicles and traffic.
- Shops, garages and service locations.
- Security/police response to witnessed incidents.
- Restricted areas and access permissions.
- NPC routines and reactions.
- Player-owned or temporarily used transport.
- Everyday side activities and spontaneous encounters.

Vehicles, ownership, theft rules, garages, economy and exact activity types are **proposals only** until explicitly approved. Do not build them as launch requirements without a prototype decision.

## 10. Dynamic activities and events

Activities should appear in the world and connect to locations, NPCs or current conditions. Examples:
- A travelling expedition investigating a landmark.
- A temporary location opening.
- A trader convoy or visiting merchant.
- A facility inspection or public event.
- A community discovery that requires players to compare clues.
- A faction dispute that players can observe, avoid or influence.
- A temporary weather or infrastructure incident.

Activities should be optional, varied and discoverable. Avoid turning the whole world into a list of map icons.

## 11. Persistence and rewards

Permanent player data may include owned weapons, cosmetics, discovery journal, mastery, achievements and account progression. Temporary local incidents and event states belong to world-cycle state. Never remove permanent ownership on death, disconnect or map rotation.

Weapon unlocks remain Open World discovery only. Competitive playlists never grant weapon unlocks.

## 12. Prototype acceptance test

A first meaningful Open World prototype should let a player:
1. Spawn in a small but coherent settlement.
2. Walk or travel to at least three distinct points of interest.
3. Encounter other players and several NPC roles.
4. Discover one hidden location or clue.
5. See an NPC group perform a simple activity without player prompting.
6. Trigger or witness one understandable world reaction.
7. Encounter one optional PvE situation.
8. Save one permanent discovery.
9. Return later and find the permanent record intact.

The prototype succeeds only if exploring and encountering the world feels enjoyable without needing a major scripted mission.

## 13. Unresolved decisions

- Exact PvP coverage and safe-area rules.
- Friendly-fire defaults for parties and public encounters.
- Death, respawn and temporary inventory rules.
- Final faction roster and reputation model.
- Whether vehicles ship at launch.
- Vehicle ownership, storage and access rules.
- Player trading and economy.
- Exact activity cadence and event density.
- NPC population and per-server budgets.
- How much world state is shared across separate Roblox server instances.
