# AVENOR — Home Screen, Loadouts & Navigation

> **Status: proposed interface specification.** The home screen is a full shooter hub, not a plain Roblox menu. It connects the Open World, competitive playlists, weapon collection and player progression.

## 1. Home screen goals

- Make the next action obvious within seconds.
- Showcase the player's character and currently equipped weapon.
- Show the active world and its rotation timer.
- Make loadout editing fast and satisfying.
- Make discoveries, events and progression easy to access.
- Keep navigation readable on PC, controller and mobile.
- Avoid cluttering the main screen with every feature at once.

## 2. Main screen composition

### Central showcase
- Third-person character preview.
- Current primary weapon displayed in an inspection pose.
- Optional animated environment or region backdrop.
- Subtle idle animation and restrained lighting.
- Character and weapon can be rotated/inspected.
- Cosmetics must not obscure navigation or important information.

### Main navigation
- **ENTER WORLD** — join the currently active Open World.
- **GAME MODES** — open competitive playlist selection and matchmaking.
- **LOADOUT** — configure saved equipment presets.
- **ARSENAL** — browse owned and undiscovered weapons; inspect weapon details.
- **CHARACTER** — outfits and character cosmetics.
- **PROGRESSION** — level, mastery, achievements and rank.
- **DISCOVERIES** — permanent journal and world archive.
- **EVENTS** — current world cycle, seasonal event and calendar.
- **SOCIAL** — friends, parties and group management.
- **SETTINGS** — input, graphics, audio, accessibility and privacy.

## 3. Active world card

The main screen should display:
- Active world name and key art.
- Short world identity description.
- Current cycle day and time remaining.
- Next world preview.
- Current event and major activity.
- A clear ENTER WORLD action.

The four-day rotation is a world event, not a separate mode or queue.

## 4. Loadout builder

### Proposed slots
1. Primary.
2. Secondary.
3. Melee.
4. Utility.
5. One player ability.

The exact slot contents remain governed by the weapon and ability catalogues. Existing weapon designs should not be discarded simply because the overall game identity changed.

### Presets
- Save multiple loadout presets.
- Rename and reorder presets.
- Duplicate a preset.
- Show missing/unowned items clearly.
- Show weapon rarity and mastery.
- Preview skins and presentation.
- Display ability cooldown and short description.
- Provide clear warnings when a mode has special restrictions.

### Ownership rule
- Only permanently owned weapons can be equipped.
- Weapon ownership is earned through Open World discovery only.
- Competitive modes never unlock weapons.
- Death and world rotation never remove owned weapons.
- An unowned weapon may be previewed in the Arsenal but cannot be equipped until discovered.

### Where loadouts can change
- Main menu: always.
- Open World: at approved safe hubs or loadout stations, once those are designed.
- Competitive matches: before match start; in-match changes only if a mode explicitly allows them.

## 5. Arsenal

The Arsenal is the player's permanent weapon collection:
- Owned weapons.
- Undiscovered weapon silhouettes or entries, if mystery is desired.
- Weapon category and slot.
- Weapon description and firing identity.
- Mastery level and statistics.
- Skin collection.
- Inspection view.
- Discovery source / journal record when appropriate.

Do not expose secret location hints that spoil exploration unless the player has unlocked the relevant journal entry.

## 6. Competitive mode selection

The Game Modes screen lists available playlists, party size, short rules, ranked/casual status and estimated queue state when available.

Competitive modes are distinct from the Open World. They use the player's permanent weapon collection and do not grant weapon unlocks.

## 7. Discoveries and archive

- Current world discovery progress.
- Permanent locations and secrets found.
- NPC encounters and journal entries.
- Permanent weapon discoveries.
- Past world-cycle archive.
- Community milestones and event history.
- Clear distinction between discovered, not yet discovered and temporarily unavailable.

## 8. Social

- Friends and party status.
- Invite and join flow.
- Party leader and ready state for competitive playlists.
- Party entry into the active Open World.
- Clear handling when the active world rotates while a party is in a server.

## 9. UX and accessibility

- Full keyboard/mouse, controller and mobile support.
- Large touch targets on mobile.
- Focus navigation for controller.
- Reduced motion and reduced effects.
- Scalable text and high-contrast options.
- Clear ownership and reward labels.
- No deceptive currency or purchase presentation.
- Important actions should never rely on hover-only interaction.

## 10. Open decisions

- Exact menu layout and animation.
- Number of saved loadout presets.
- Whether loadout stations exist in every safe hub.
- How undiscovered Arsenal entries are displayed.
- Whether party members can inspect each other's loadouts.
