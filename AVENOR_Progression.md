# AVENOR — Progression, Discovery, XP & Economy

> **Critical rule:** permanent weapon unlocks come from Open World discovery only. Competitive matches never unlock weapons. All player progression survives world rotation.

## 1. Progression philosophy

AVENOR should reward exploration, skill, collection, mastery and participation without turning into a daily chore.

- Permanent progress belongs to the player, not the active map.
- Weapon discovery is a core Open World reward.
- Competitive modes reward competitive skill and mastery, not weapon access.
- Cosmetics never grant gameplay power.
- Missed event rewards should have a fair return path.
- No paid random reward should be the only route to an important item.

## 2. Progression tracks

| Track | Measures | Rewards |
|---|---|---|
| Account level | Overall play and achievements | Titles, cosmetics, currency and profile milestones |
| Weapon discovery | Permanent Open World finds | Permanent access to the weapon |
| Weapon mastery | Use of an owned weapon | Weapon-specific skins, stats, titles and mastery rewards |
| Exploration journal | Locations, secrets, NPCs and world history | Journal completion, badges, cosmetics and records |
| Competitive rank | Match performance | Rank emblems, seasonal cosmetics and recognition |
| Event records | Participation and achievements in events | Event cosmetics, titles and archive entries |

## 3. Weapon discovery and ownership

- Every permanent weapon unlock must have a defined Open World source.
- Possible sources: a hidden location, facility discovery, NPC expedition, exploration challenge, special activity or world event.
- Each discovery condition is server-validated.
- Once unlocked, the weapon remains in the player's collection permanently.
- Weapon ownership is not reset by death, map rotation, season change, disconnect or competitive loss.
- Competitive modes never grant weapon unlocks.
- Competitive modes can still provide weapon mastery progress for weapons the player already owns.
- Avoid duplicate unlocks; if a player repeats a discovery, award a clearly defined alternate reward or journal record.

The weapon catalogue should eventually include a **Discovery Source** field for every unlockable weapon. Do not invent all sources at once; design them with each world.

## 4. Account XP

Potential XP sources:
- Exploration and first-time location discoveries.
- Completing optional world activities.
- NPC expeditions and encounters.
- Participating in seasonal/world events.
- Competitive match participation and performance.
- Achievements and mastery milestones.

Anti-farming rules:
- No repeated trivial interaction should generate unlimited XP.
- Server validates rewards.
- Leaving or deliberately manipulating activities should not be rewarded.
- XP should reward varied play, not require a specific mode.

## 5. Weapon mastery

- Mastery is tracked per weapon.
- Mastery begins after the weapon is permanently unlocked.
- Progress can be earned in the Open World and competitive matches.
- Challenges should reward learning the weapon's identity, not only raw elimination count.
- Rewards are cosmetic, statistical or expressive, never direct weapon power.
- Mastery persists across world rotations and seasons.

## 6. Exploration journal

The journal records:
- Discovered locations.
- Hidden interiors and secrets.
- NPC encounters.
- Expedition records.
- Permanent weapon discoveries.
- World-event discoveries.
- Historical world-cycle archive entries.

Journal entries should reveal information progressively. Do not reveal undiscovered secrets by default.

## 7. Competitive rank

- Competitive rank is separate from account XP and weapon mastery.
- Rank is based on competitive match results and a server-authoritative rating model.
- No weapon unlock is attached to a rank tier.
- Ranked rewards are cosmetic and recognition-based.
- Rank resets/soft resets, if any, must never affect weapon ownership.

## 8. Seasons and events

- World rotation occurs on a proposed four-day cadence.
- Seasonal events may introduce temporary activities and permanent cosmetic rewards.
- Player progression never resets when the world changes.
- Event reward conditions must be achievable without unreasonable daily play.
- If a weapon discovery is event-associated, there must be a future return path or archive route.

## 9. Economy

Potential earnable currency sources:
- Account milestones.
- Exploration achievements.
- Event participation.
- Competitive milestones.
- Weapon mastery.

Potential spending:
- Cosmetics.
- Emotes and presentation.
- Character customisation.
- Other non-power expression items.

Do not sell weapon unlocks for Robux or create a paid shortcut around the Open World discovery identity. Exact currency names, amounts and shop structure remain TBD.

## 10. Persistence requirements

Save:
- Owned weapon IDs.
- Loadout presets.
- Account XP and level.
- Weapon mastery and stats.
- Cosmetics and equipped selections.
- Discovery journal.
- Achievements and titles.
- Competitive rating and season state.
- Currency and transaction history.

World-local temporary state is stored separately from permanent player data.

## 11. Open decisions

- Exact XP formula and level curve.
- Currency count and names.
- Discovery source for each weapon.
- Duplicate discovery rewards.
- Exact event reward schedule.
- Competitive rating formula.
- Mastery challenge list and values.
