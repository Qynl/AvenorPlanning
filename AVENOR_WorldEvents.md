# AVENOR — World Rotation, Calendar & Live Events

> **Current proposal:** The active Open World changes every four days. This is a world event and calendar cycle, not a separate game mode. Exact schedule and duration remain subject to playtesting and approval.

## 1. The rotating-world idea

AVENOR has a collection of large regions, but only one region is the active Open World at a time.

- A new world becomes active on the rotation schedule.
- Players across all public servers enter the same active world identity.
- The active world remains available for approximately four days.
- After the cycle, a different world replaces it.
- The previous world can return in a later cycle with new seasonal changes, discoveries or activities.
- The rotation is part of the main game. There is no separate queue or mode for it.

Multiple Roblox servers may host the active world for capacity. They are server instances of the same current world, not different map choices.

## 2. Proposed four-day cadence

| Cycle day | Intended feeling | Example content |
|---|---|---|
| Day 1 | Arrival and first exploration | New world opens, landmarks and major activities are available |
| Day 2 | Deeper discovery | NPC expeditions, hidden areas and additional clues |
| Day 3 | Community activity | Special world activity, shared discovery or changing location |
| Day 4 | Final cycle day | Final opportunity to complete current-cycle activities; clear next-world preview |

This is a pacing concept, not a hard daily content gate. Players must be able to explore throughout the cycle. Do not make essential unlocks possible only during a short window.

## 3. What resets and what persists

### Always persistent
- Account level and XP.
- Permanently discovered weapons.
- Weapon mastery and statistics.
- Owned skins and cosmetics.
- Loadout presets.
- Currency and eligible progression.
- Achievements, titles and permanent records.
- Permanent discovery journal entries.
- Competitive rank and match history.

### World-cycle state that may change
- Active map and its local activity state.
- Temporary event NPC placements.
- Temporary event objectives.
- Temporary resource/activity state if such systems are later approved.
- Temporary world changes such as open/closed event locations.
- Map-specific leaderboard snapshots for the completed cycle.

### Never do this
- Never delete weapons or cosmetics because a map rotates.
- Never reset player levels or mastery.
- Never punish players for missing a four-day cycle.
- Never make a permanent weapon unlock unobtainable forever after one rotation.
- Never imply that a player has lost a permanent discovery when only the active map changed.

## 4. World transition

Proposed transition:
1. The calendar announces the next world in advance.
2. The current cycle enters a short closing period.
3. New entries are directed to the next active world once it activates.
4. Existing servers finish safe save operations and transition players gracefully.
5. The next world starts with a consistent world ID and event state across server instances.
6. The previous world is archived for history and future returns.

The transition must not erase unsaved player progress. The exact grace period and server-shutdown handling belong in the technical implementation.

## 5. World calendar

The home screen includes a world calendar showing:
- Current active world.
- Time remaining in the current cycle.
- Next scheduled world.
- Upcoming seasonal transformation.
- Current world activities.
- Event rewards and whether they are permanent or temporary.
- Recent discoveries and community milestones.

Use one authoritative schedule. Display localised countdowns to players, but store and calculate the schedule consistently on the server.

## 6. Seasonal transformations

Seasonal events can transform the current world rather than opening a separate mode.

### Halloween
- Autumn foliage, pumpkins, themed lighting and environmental decoration.
- Fog or atmospheric weather in selected areas.
- Special NPC visitors and adventurer stories.
- Temporary haunted locations or discoverable interiors.
- Event activities and exclusive cosmetics.
- Keep normal navigation and combat readability intact.

### Winter / Christmas
- Snow or cold-weather presentation where appropriate.
- Decorations in towns and city centres.
- Seasonal NPCs and activities.
- Temporary event locations and collectible discoveries.
- Special cosmetic rewards.

### Summer
- Coastal and town festivals.
- Temporary attractions and activities.
- Changed ambience, lighting and selected map dressing.
- Special NPCs and community events.

### Original AVENOR incidents
- Severe weather.
- Temporary power outages in selected areas.
- A special arrival at a port or airport.
- A temporary facility opening.
- A travelling expedition.
- A community-wide discovery.
- An unusual NPC group appearing in a new region.

World incidents must be designed as game experiences, not random disruptions that prevent players from playing.

## 7. Event design principles

Every event needs:
- A clear reason to exist.
- A visible but non-intrusive announcement.
- At least one meaningful activity or discovery.
- A fair reward path.
- A way to understand whether rewards are permanent or temporary.
- Accessibility for solo players where practical.
- A plan for players who miss the event.
- Performance and moderation review.

Events should encourage exploration, cooperation, combat or social interaction. Decoration alone is not enough for a major event.

## 8. Event reward rules

- Event rewards are primarily cosmetic, journal, title or collection rewards.
- Permanent weapon unlocks remain tied to Open World discovery and may be associated with an event only if there is a future return path.
- Do not award weapon unlocks through competitive modes.
- Avoid paid random rewards as the only way to obtain limited cosmetics.
- Make reward conditions clear before the player invests time.
- Do not make a four-day event require excessive daily play.

## 9. Archive and history

The permanent World Archive may record:
- World name and cycle dates.
- Major event descriptions.
- Community discoveries.
- Top exploration achievements.
- Special NPC appearances.
- World-specific records and statistics.

Archive entries are historical records, not proof that the same world state remains active.

## 10. Open decisions

- Exact rotation duration (four days is the current proposal).
- Exact UTC activation time and transition window.
- Map order and whether special events can extend a cycle.
- How many event activities are available at once.
- Whether seasonal transformations affect every map or selected worlds only.
- Whether world cycles include shared server-wide milestones.
