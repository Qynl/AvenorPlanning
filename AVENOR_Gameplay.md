# AVENOR — Core Gameplay Specification

> **Current direction:** fast FPS combat inside a large rotating multiplayer Open World, with separate competitive playlists. This document defines the shared player feel and the Open World loop. Exact numeric tuning remains TBD until Roblox prototypes are tested.

## 1. Core player loop

1. Open AVENOR and configure a loadout.
2. Enter the currently active world.
3. Choose a destination, activity or direction. The game should not force every player into one mission.
4. Explore, encounter NPCs and players, investigate locations and participate in activities.
5. Fight when appropriate, cooperate when useful, and discover permanent weapons or other rewards.
6. Add discoveries to the permanent collection and journal.
7. Continue exploring, return to a hub, or leave for a competitive playlist.
8. Return later to find a different world, new activities or seasonal changes.

The loop must work for a solo player, a small friend group and a busy server. It must offer meaningful things to do even when no major event is running.

## 2. First-person character and camera

- First-person during Open World gameplay and competitive matches.
- Third-person character presentation in the home screen and suitable social spaces.
- Camera movement must be responsive and comfortable.
- Weapon viewmodels must preserve target visibility and avoid excessive screen coverage.
- Camera shake, blur and visual effects must be configurable or reducible.
- Third-person views must not create unfair peeking advantages in first-person competitive modes.

## 3. Movement package

### Design goals
Movement should feel fast, direct, expressive and fun even when the player is simply travelling across the map. No stamina system.

### Core movement
- Walk.
- **Unrestricted sprint:** no stamina bar and no forced sprint cooldown.
- Jump.
- Responsive air control.
- Slide.
- Slide-jump.
- Fast direction changes and responsive acceleration.
- Smooth transitions between movement states.
- Optional advanced movement such as bunny hopping can be tested after the core package is stable.

### Rules
- Do not gate movement speed or movement options behind levels, paid content or weapon unlocks.
- No stamina drain, hunger, hydration or survival meter affects movement.
- Sliding and jumping must remain readable and controllable on keyboard/mouse, controller and mobile.
- Movement must be consistent across Open World and competitive playlists.
- Avoid exploit-prone client authority. Client prediction can make movement feel immediate, but the server validates plausible movement state.
- Exact acceleration, top speed, slide duration, jump impulse and air-control values are **TBD/playtest**, not guessed final values.

## 4. Combat foundations

- Weapon handling should feel responsive and distinct.
- Combat should reward aim, movement, timing, awareness and decisions.
- Weapons must have clear strengths and limitations.
- Damage, ammunition state, weapon ownership, ability cooldowns and competitive results are server-authoritative.
- Visual feedback must communicate hits and threats without filling the screen.
- Combat in the Open World should coexist with exploration and NPC encounters. Do not make every location a forced combat arena.
- Open World death must never permanently remove a discovered weapon or cosmetic.

Exact health, damage, respawn and PvP rules need separate playtesting. The design must decide safe areas and player interaction rules before implementation.

## 5. Weapon ownership and discovery

**All weapon unlocks come from the Open World.**

- A first-time discovery permanently adds that weapon ID to the player's collection.
- Weapon discovery can happen through a location, hidden room, NPC encounter, expedition, activity or world event.
- Do not make every weapon a random drop from an identical container.
- A player may encounter a weapon in the world before owning it, but the permanent unlock is recorded only after a server-validated discovery condition.
- Weapons already owned remain owned forever.
- Death, map rotation, competitive loss, disconnect and season changes never remove owned weapons.
- Competitive modes use the player's unlocked collection and never award new weapon unlocks.
- Cosmetics and mastery may be earned in either experience if the reward source is clearly stated.

## 6. Magazine and backpack ammunition model

### Core idea
AVENOR does not use long-term ammunition scarcity as its main survival pressure. Players should not spend most of a session searching for basic bullets. The interesting decision is **how quickly they can reload**, not whether they can play at all.

### Proposed weapon ammunition states
1. **Loaded magazine:** rounds currently available to fire.
2. **Quick-access spare magazine(s):** preloaded magazines carried in an immediately accessible pocket/rig. Replacing one is the normal, relatively quick reload.
3. **Backpack reserve:** ammunition carried deeper in the backpack. Once quick-access magazines are used, the player performs a longer resupply reload to retrieve ammunition and prepare another magazine.

### Example (illustrative only)
A weapon might have a 10-round loaded magazine and one 50-round quick-access spare magazine. After the spare magazine is used, the next reload takes longer because the player retrieves reserve ammunition from the backpack and prepares the next magazine.

### Rules to prototype
- No need to scavenge ordinary ammunition boxes as a mandatory loop.
- Long-term bullet supply should be effectively renewable, matching the user's intended "infinite bullets" feel.
- The reload states, not an arbitrary total ammo cap, create downtime and decision-making.
- The longer backpack reload must be clearly communicated and interruptible where appropriate.
- Each weapon may have its own magazine capacity, quick-access capacity and reload timing.
- Special projectiles or utility charges may use separate rules if their gameplay identity requires it.
- Competitive mode ammo rules must be consistent and fair; no player should gain an advantage from spending more time in the Open World.
- Exact magazine counts, timings, animation design and interruption rules remain TBD.

## 7. Loadout structure

Existing proposed slots:
- Primary weapon.
- Secondary weapon.
- Melee.
- Utility.
- One player ability.

Players own a persistent collection and choose a limited loadout. Loadouts can be saved as presets. The main menu is the primary place to edit them. In the Open World, changes should happen only at approved safe hubs or other clearly defined loadout stations. Competitive mode loadouts lock at match start unless a mode explicitly supports between-round changes.

## 8. World interaction

Interaction categories:
- Inspect and discover locations.
- Open permitted doors, containers and access points.
- Talk to NPCs.
- Accept or complete activities.
- Use traders and specialists.
- Read clues, records and environmental storytelling.
- Activate world-event interactions.
- Use vehicles only if/when a vehicle system is approved.

Interactions need clear prompts, short animations and reliable mobile/controller support. Avoid making ordinary exploration depend on a long sequence of menu clicks.

## 9. Open World player interaction

The world should support spontaneous player encounters. The exact rules need a deliberate design decision:
- Whether PvP is enabled everywhere, only in designated areas, or varies by region.
- Whether safe hubs protect players from combat.
- Whether groups/parties share activity progress.
- Whether friendly fire exists.
- What happens on elimination and how quickly players can return.

Do not assume permanent loot loss, full-loot PvP or survival penalties. Those are not approved.

## 10. Competitive mode relationship

Competitive modes are separate playlists. They share:
- Movement feel.
- Weapon catalogue and firing identities.
- Weapon ownership unlocks from Open World.
- Loadout and cosmetic systems.
- Core input and combat readability.

Competitive modes may have mode-specific respawn, round and ammo rules. They never become the source of permanent weapon unlocks.

## 11. First playable gameplay slice

The first useful prototype should prove:
- One small but coherent Open World district.
- First-person movement with sprint, jump, slide and slide-jump.
- A small set of distinct weapons.
- Magazine / quick-access / backpack reload flow.
- One weapon permanently unlocked by discovery and saved across sessions.
- A few NPC types with simple but visible behaviour.
- One meaningful location discovery.
- One repeatable world activity.
- One player encounter.
- A basic home screen and loadout selection.
- A separate small competitive test mode using the same unlocked weapons.

## 12. Quality checklist

- Is movement fun without a stamina bar?
- Is simply travelling through the world enjoyable?
- Can players understand where to go without every secret being marked?
- Does every weapon discovery feel meaningful?
- Is a discovered weapon permanently safe?
- Do NPCs appear to have their own purpose?
- Can a player enjoy the world without being forced into PvP?
- Is ammunition downtime interesting rather than frustrating?
- Does the game remain readable on mobile?
- Can the server validate all important state?
