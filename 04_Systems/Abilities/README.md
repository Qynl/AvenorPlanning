# Ability System — Shared Rules

## Plant ownership and complete sets
Every plant has a complete, predefined ability set. The set describes all abilities that belong to that plant.

- A successful first scan acquires the plant and grants ownership of its complete set.
- The abilities in the set can then be unlocked progressively through further research of the parent plant.
- The parent plant page is the source of truth for the set identity, research journey and ability unlock order.
- A locked ability remains part of the player's acquired plant set; it is simply not available for use yet.

## What ability files are
Individual ability files are design descriptions/specifications. They explain what an ability is, how it should behave and how it should be presented.

They do not create a separate collection, research track, currency, quest chain or ownership mechanic. Do not add independent progression systems to individual ability files.

## Ability pillars
- **Exploration:** traversal, sensing, navigation and access.
- **Attacking:** direct attacks, area control, traps and disruption.
- **Botanical powers:** plant growth, environmental shaping and interactions.

## Rarity scaling
The seven tiers are Natural, Unusual, Distinct, Ancient, Forgotten, Relic and Origin. Higher rarity should generally increase the strength, versatility, complexity and spectacle of a plant's complete set. Do not make rarity a cosmetic-only label. Balance powerful sets through cooldown, duration, commitment, range, counterplay and situational limits. Lower-rarity plants must remain useful.

Set size is defined by each plant's actual design. Do not force every plant to have the same number of abilities.

## Required ability description
Every ability file should define:
- Stable ID and display name.
- Parent plant and ability set.
- Primary pillar and gameplay role.
- Activation and target rules.
- Effect and duration.
- Range/area and cooldown placeholders, where relevant.
- Counterplay and limitations.
- Animation, VFX, sound and feedback.
- Accessibility/readability considerations.

Exact numerical values are tuning data and remain TBD until playtesting. The ability file describes the ability; its unlock position belongs on the parent plant page.
