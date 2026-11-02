# AVENOR — NPC Population & Behaviour Design

> NPCs make the world feel inhabited and responsive. They are not all enemies and should not all run full simulation at all times.

## 1. Goals
Give each NPC a reason to be present. Support exploration, services, social encounters, clues and optional combat. Let groups react to local incidents and relationships. Make reactions believable: NPCs only know what they could observe or receive. Keep quiet exploration as well as danger.

## 2. Population types
- **Civilians:** settlement/street population; simple routines, shops, social idles and reactions to nearby danger.
- **Police/public security:** respond to incidents in their jurisdiction based on witnesses, reports and local awareness.
- **Private security/facility guards:** protect sites, warn about trespass and escalate under defined conditions.
- **Military/organised security:** operate selected bases, checkpoints or facilities, not every region.
- **Traders/services:** shops, garages and specialist services; do not bypass Open World weapon discovery.
- **Adventurers/explorers:** travel in groups, investigate points of interest, rest at camps and share rumours.
- **Researchers/mechanics/medics/guides:** local services, context and optional activities.
- **Independent/hostile groups:** occupy or travel through selected locations; not every independent group is hostile.

## 3. Faction relationships
Suggested states: Friendly, Neutral, Wary, Hostile, or temporarily Allied through an event/activity. Reputation is faction-specific and may change through witnessed actions, assistance and faction activities. It is distinct from immediate incident attention.

## 4. Reactive awareness without a visible wanted meter
A reaction chain:
1. An NPC observes an incident or an alarm is triggered.
2. The observer warns, retreats or reports.
3. Nearby security receives a local report if communication is possible.
4. A response is selected based on incident, location, faction and available NPC budget.
5. Response is communicated through behaviour, dialogue, radio, access changes and visible presence.
6. Awareness can fade if there is no identification/report; recognised identity or faction consequences may persist.

No omniscient tracking and no default GTA-style star display. NPCs must have a plausible information path.

## 5. Behaviour model
Start with reusable state machines: Idle, FollowRoute, Travel, Inspect, Interact, Talk, NoticeIncident, Warn, Report, MoveToSafety, Investigate, Guard, Challenge, Encounter, ReturnToRoutine and Despawn. Combat states exist only for appropriate archetypes.

## 6. Local interactions
Police may respond to a witnessed public incident. Guards challenge restricted entry. Traders may refuse service if a relevant faction relationship is hostile. Adventurers may share clues after assistance. Rival groups may avoid or confront one another. Friendly NPCs may assist during an event. These are examples, not all launch requirements.

## 7. Regional authoring
Each map documents population locations, archetypes, route nodes, services, faction boundaries, incident coverage, discoveries and spawn/update budgets. Use authored schedules and seeded variation rather than continuous complex simulation.

## 8. Player interaction
Dialogue is short and skippable. Prompts support PC, controller and mobile. Services disclose cost/effect before confirmation. No forced dialogue to traverse ordinary spaces. Party credit and rewards are server-validated.

## 9. Fair response
Clear warnings; no unavoidable surprise damage; no endless world-wide pursuit; response units have bounded search areas and time budgets; safe/social areas obey their rules.

## 10. Performance
Ambient civilians use low-cost behaviour and limited update rates. Full awareness/combat logic is reserved for nearby relevant NPCs. Distant groups use lightweight scheduled state. Use per-server/per-region spawn budgets, pooling, cleanup and distance tiers. See AVENOR_Map_Performance.md.

## 11. First NPC slice
One civilian, one trader/specialist, one adventurer group with a multi-stop route, one guard with warning state, one optional hostile encounter, one witnessed incident with local security response and one NPC-led discovery. Avoid large faction warfare until this works.
