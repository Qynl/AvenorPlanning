# AVENOR — NPC Population & Behaviour Design

> **Status: Proposed system.** NPCs are a core part of making the Open World feel populated and active. The goal is a believable mix of friendly, neutral and hostile characters, not a map full of stationary target dummies.

## 1. NPC design goals

NPCs should:
- Make settlements, facilities and wilderness feel inhabited.
- Have a readable role and reason to be in a location.
- Travel between places where practical.
- React to nearby events and player interaction.
- Create optional activities and discoveries.
- Support solo exploration when few players are online.
- Avoid replacing the value of human players.
- Remain performant on Roblox, especially on mobile and busy servers.

NPCs are game characters. Their behaviour should be readable and fair, not designed as a realistic combat simulator.

## 2. NPC categories

### 2.1 Adventurers and explorers
Groups that travel around the map, investigate locations and look for discoveries.
- Travel between known points.
- Stop at landmarks, camps and facilities.
- Talk among themselves or inspect objects.
- May offer rumours, clues or optional expedition activities.
- Can be friendly or neutral by default.
- Their routes can change between world cycles.

They are especially important because they make exploration feel like something other people are doing too.

### 2.2 Civilians
Populate towns, city streets and public spaces.
- Walk between simple destinations.
- Visit shops and public locations.
- Use believable idle and social animations.
- React to selected world events.
- Usually avoid combat and move toward safe areas during danger.

Civilians are ambient population, not a source of combat rewards.

### 2.3 Traders and merchants
Offer item and service interactions.
- Have a clear shop or service location.
- May rotate cosmetic or utility stock.
- Can introduce players to local activities.
- Must not sell permanent weapon unlocks that bypass the Open World discovery system.
- Any economy interaction must use the approved currency and pricing rules.

### 2.4 Guards and security
Protect selected facilities and restricted areas.
- Have defined patrol or watch areas.
- Communicate a location's restricted status.
- Can react to trespassing or event conditions.
- Should have readable warning and response states.
- Their difficulty should be tuned for fair Roblox gameplay.

### 2.5 Hostile NPC groups
Provide optional PvE encounters in selected locations.
- Appear in clearly designated or signposted areas.
- Have simple readable roles and encounter patterns.
- Can guard a discovery, activity or facility.
- Should not make every road or town hostile.
- Rewards should be meaningful but not mandatory for basic progression.

### 2.6 Specialists
Examples include mechanics, medics, guides, researchers and other service characters.
- Offer a specific service or activity.
- Provide context about the region.
- Can introduce multi-step discoveries.
- Should have a clear interaction prompt and readable dialogue.

### 2.7 Travelling groups and expeditions
Small NPC groups that move through the world.
- Follow routes between several destinations.
- Can appear at camps, roads, landmarks and facilities.
- May have an activity state: preparing, travelling, investigating, resting or returning.
- Players may encounter them at different points in their journey.
- Some routes can change during world events.

## 3. Relationship states

Each NPC archetype or group uses one of these broad relationships:
- **Friendly:** offers help, services, clues or cooperation.
- **Neutral:** does not initiate conflict; reacts to player actions or local events.
- **Hostile:** initiates an encounter in defined circumstances.
- **Conditional:** relationship changes based on an event, activity or player action.

Do not assume all NPCs are hostile. The world needs quiet and social spaces as well as dangerous locations.

## 4. Behaviour model

Use simple, robust state machines before attempting complex simulation.

Possible states:
- Idle / ambient.
- Moving to destination.
- Observing / interacting.
- Investigating.
- Talking / offering service.
- Alerted.
- Retreating / moving to safety.
- Encounter / combat (hostile archetypes only).
- Returning to route.
- Disabled / despawned.

NPCs should not run expensive full simulation when far away. Use distance-based update levels and simplified off-screen state.

## 5. World routines

Each region should document:
- NPC archetypes present.
- Spawn and despawn areas.
- Typical routes.
- Activity locations.
- Time or event variations if supported.
- Friendly, neutral and hostile population balance.
- Interactions that lead to discoveries.
- Server performance budget.

The world should feel active without needing hundreds of fully simulated NPCs at once.

## 6. NPC discovery and activity design

NPCs can lead to:
- Rumours about a hidden location.
- Optional expeditions.
- Local history and journal entries.
- Requests to find a missing item or investigate a place.
- A special encounter that appears during a world event.
- A permanent weapon discovery, if the player completes a clear server-validated condition.

Avoid generic endless quest boards as the only activity. NPCs should connect to their location and the world around them.

## 7. Player interaction

- Dialogue must be concise and skippable.
- Interaction prompts must support PC, controller and mobile.
- NPC services should be understandable before a player spends currency.
- Players should not be forced into dialogue to pass through ordinary locations.
- Party/group credit rules must be clear for shared activities.
- NPCs should not grant permanent rewards based only on a client-side claim.

## 8. Combat and safety boundaries

Hostile NPC encounters are fictional gameplay. Keep their mechanics readable, stylised and fair.
- Avoid graphic injury presentation.
- Do not use surprise unavoidable damage.
- Use clear warning cues and understandable encounter boundaries.
- NPCs should not be able to follow players indefinitely across the whole world.
- Safe hubs and neutral spaces must be respected once the PvP/safe-area rules are finalised.

## 9. Initial NPC prototype

First prototype:
1. One ambient civilian archetype.
2. One trader/specialist.
3. One adventurer group with a simple multi-stop route.
4. One neutral guard/security archetype.
5. One optional hostile NPC encounter.
6. One NPC-led discovery that permanently records progress.

The prototype should prove that NPCs can spawn, move, interact and clean up without server performance collapsing.

## 10. Open decisions

- Final NPC count per region and per server.
- Exact day/night schedule.
- Whether NPC routes persist across server instances or are local ambience.
- How NPC groups interact with player parties.
- Whether players can trade with or recruit NPCs.
- Final hostile-NPC density and difficulty.


## 11. Witnessing, faction awareness and world reaction
NPCs and factions may react to player behaviour, but they must have plausible awareness. A guard can react to something witnessed locally; a facility can react to an alarm; a faction may learn about an incident through a defined local report or shared event. Do not make every NPC instantly know every player action across the whole map.

Separate three concepts:
- **Local awareness:** what nearby NPCs directly see or hear and may investigate.
- **Incident awareness:** what a location or organisation learns through witnesses, alarms or communication.
- **Faction relationship:** a slower-changing attitude based on relevant player actions and prior interactions.

There is no visible wanted-level meter, stars or numerical criminal status planned. Communicate reactions through behaviour, dialogue, access permissions, service availability, local searches and environmental context. Do not turn this into the main game loop; exploration remains primary. Include cooldowns, decay or ways for local situations to settle where appropriate. Keep reaction logic event-driven and budgeted rather than polling every NPC continuously.

## 12. Faction role examples
Police/public security, facility guards, military/security groups, independent adventurers, traders/logistics groups, researchers/workers and hostile groups are possible categories. Not all factions should be enemies. Factions can provide services, rumours, discoveries, access or optional encounters. Final roster and relationships remain TBD.

## 13. NPC performance rule
The world must feel inhabited through purposeful routes and activity clusters, not maximum NPC count. Use simulation tiers and the budgets in `AVENOR_Map_Performance.md`. A prototype must prove that NPCs can move, react, interact and clean up without harming server performance.
