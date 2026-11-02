# AVENOR — Player-Like NPC Factions

> **Scope lock:** AVENOR does not simulate a civilian population or everyday NPC society. The only planned NPCs are a limited number of AI-controlled faction groups that behave as much like player squads as practical. Real players remain the heart of the world.

## 1. Purpose
NPC factions give selected remote, valuable or interesting locations a sense of risk and activity when real players are not there. They are not quest-givers, shopkeepers, public workers or background crowds.

A faction should feel like a group of players occupying the world:
- Members travel together or split into small sensible subgroups.
- They carry weapons, ammunition and equipment.
- They scavenge and move between locations.
- They establish temporary camps or use existing structures as a base of operations.
- They may guard rare weapons, equipment caches or unusual discoveries.
- They react to nearby players and other factions.
- They can engage, reposition, retreat, regroup or abandon a location.

## 2. What does not exist
Explicitly out of scope:
- Police or law enforcement.
- Civilian crowds and pedestrian routines.
- Public security, patrol guards or facility security as a separate service system.
- Military/security NPC ecosystems separate from player-like factions.
- Traders, merchants, shopkeepers, medics, mechanics or service NPCs.
- Quest-givers, dialogue hubs or NPC mission boards.
- Traffic or public-service simulations.
- Wanted levels, witness reports, arrests, fines or police pursuit.
- NPC reputation used to unlock everyday services.

A building may still be a hospital, station, shop, checkpoint or public facility as an explorable location. Its existence does not imply a functioning NPC service or civilian simulation.

## 3. Faction identity
Each faction needs a distinct visual and gameplay identity, not merely a different name:
- Clothing/colour language and silhouettes.
- Preferred weapons and equipment.
- Group size and formation habits.
- Preferred terrain and locations.
- Aggression and willingness to disengage.
- Scavenging priorities.
- Camp style and defensive habits.
- A recognisable reason for protecting or seeking certain discoveries.

Faction themes and names are proposals until separately approved. Avoid making every group an enemy. Some may ignore players unless approached, while others may be territorial around valuable finds.

## 4. Player-like behaviour model
Use a compact set of understandable behaviours:
- Roam between authored points of interest.
- Search selected containers or supply areas.
- Carry and switch weapons.
- Reload and manage limited ammunition.
- Stay near squad members.
- Watch approaches to a camp or valuable location.
- Investigate nearby sounds or visible activity.
- Take cover and reposition during encounters.
- Push, hold, flank or retreat according to simple squad rules.
- Recover, regroup and move on after an encounter.

The goal is not to imitate every human decision. The goal is to make factions readable, believable opponents and occasional unexpected neighbours.

## 5. Rare-site defence
Some rare discoveries may be guarded by an NPC faction:
- The group is physically present at or near the location.
- Its equipment and behaviour communicate that the site is defended.
- Players can observe, avoid, approach, or fight.
- Defeat or displacement of the group can open access to the discovery.
- The faction should not instantly respawn in front of the player.
- Rare rewards must remain balanced and must not require fighting every time.

Not every rare item should be guarded. Some discoveries should be hidden, abandoned, environmental or simply difficult to reach.

## 6. Camps and location presence
Factions can establish temporary camps at suitable places, using a small set of reusable props. A camp is a current presence, not permanent ownership of the land. A faction may move, leave or be displaced.

Player camps follow the separate player-camp design. NPC camps must obey similar spatial and visual rules so they feel like part of the same world.

## 7. Awareness and fairness
- NPCs only react to what they can plausibly see or hear within a bounded area.
- No omniscient tracking across the map.
- No world-wide pursuit or police-style escalation.
- Give players readable cues before a faction becomes hostile where appropriate.
- Factions should not spawn directly on top of players or immediately respawn after being cleared.
- Avoid unavoidable damage and unfair accuracy.
- Faction difficulty comes from positioning, teamwork and equipment, not cheating or perfect aim.

## 8. Spawn and persistence rules
- Keep the number of active NPC squads low and intentional.
- Spawn factions at authored sites or through controlled world-state events.
- Use server-side limits, distance-based updates, pooling and cleanup.
- A squad's state may persist locally while its location remains relevant, but do not simulate every squad in every world continuously.
- Exact cross-server persistence, respawn timing, squad counts and loot rules remain TBD.

## 9. First prototype
Build one small faction squad at one remote POI:
1. It occupies a location containing a rare discovery.
2. Members patrol a small local area and remain near the group.
3. They notice a nearby player within fair awareness limits.
4. They use cover, weapons, reloads and basic teamwork.
5. They can be avoided, fought or outmanoeuvred.
6. Once displaced, the location becomes accessible.
7. The squad does not instantly respawn.

Only expand the faction roster after this prototype is fun, readable and performant.
