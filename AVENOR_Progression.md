# AVENOR Progression, XP and Economy

> **Status: Proposed system for review.** This document expands the progression and economy decisions in `AVENOR_Main.md`. Numbers marked **TBD / playtest** are starting design targets, not final balance values. No progression reward may grant a direct combat-stat advantage.

## 1. Design Principles

AVENOR progression should:
- Reward playing matches, improving, experimenting with the roster, and completing objectives.
- Give players several meaningful goals at once without making the game feel like a second job.
- Keep skill rating separate from account level and weapon mastery.
- Make every reward path understandable before a player commits time or currency.
- Avoid pay-to-win, pay-to-skip competitive power, and random paid gameplay unlocks.
- Never reward leaving matches early, farming cooperative opponents, or deliberately manipulating match outcomes.
- Preserve competitive integrity: match results and progression are validated and saved by the server.

### The three progression tracks

| Track | Measures | Main rewards |
|---|---|---|
| Account Progression | Overall time, participation and achievements | Account levels, earnable currency, cosmetics, titles, profile rewards and eligible unlocks |
| Weapon Mastery | Experience with an individual weapon | Weapon-specific cosmetics, mastery challenges, statistics and completion rewards |
| Competitive Rank | Demonstrated skill against other players | Rank, seasonal recognition, ranked cosmetics and leaderboard placement |

These tracks must not substitute for one another. A high account level does not mean a high skill rank, and a high weapon mastery level does not mean a player is better overall.

## 2. Account XP

Account XP contributes to the player's account level.

### XP sources

Players can earn account XP from:
- Completing a match.
- Winning a match.
- Contributing to the mode objective.
- Completing daily and weekly challenges.
- Completing one-time achievements and milestone challenges.
- Participating in eligible limited-time events.

Match XP should primarily reward completing a match and meaningful participation. Eliminations can contribute, but must not dominate the formula. Objective contribution, support actions, and playing the mode properly should remain worthwhile.

### Match XP model

Use a transparent match reward with separate components:
- **Completion XP:** the main guaranteed reward for finishing a match.
- **Performance XP:** a smaller amount based on meaningful match contribution.
- **Win bonus:** a modest bonus for winning, never so large that losing feels pointless.
- **Objective bonus:** rewards mode-specific participation, such as contesting or progressing the objective.
- **Challenge XP:** awarded separately when a challenge is completed.

Exact XP values, caps, and level thresholds are **TBD / playtest**. Match length and mode should be considered so that one mode is not automatically the best XP farm.

### Anti-farming rules

- No unlimited XP for repeated actions within one match.
- Repeated low-value actions have diminishing or capped rewards.
- No XP for damaging or eliminating consenting teammates outside valid mode rules.
- Abandoned matches receive reduced or no completion rewards according to a clear disconnect policy.
- Reconnecting must not duplicate match XP.
- The server calculates and records the final reward once per match ID.
- Suspicious repeated matches, collusion, or deliberate score manipulation can be excluded from progression.

## 3. Account Levels and Milestones

Account levels are a long-term progression display, not a measure of competitive skill.

The level curve should:
- Have **no maximum account level**. Players can continue leveling indefinitely.
- Be quick during the first few levels so new players discover progression early.
- Require progressively more XP as the account level rises. Higher levels should take noticeably longer, while avoiding an unreasonable grind.
- Have clearly displayed next-level progress and reward previews at every level.
- Provide a reward at every level, with larger or more distinctive rewards at selected milestone levels.
- Never reset account levels between seasons.
- Never grant damage, health, accuracy, cooldown, movement, or other combat-stat bonuses.

The exact XP curve, level reward cadence and milestone intervals remain **TBD / playtest**. The uncapped structure and progressively increasing XP requirement are approved design decisions.

### Level rewards

Possible account-level rewards:
- Earnable currency.
- Weapon skins and cosmetic items.
- Player banners, titles, badges and profile showcases.
- Emotes and victory celebrations.
- Selected weapon or ability unlocks, if the final unlock policy retains progression-based access.
- Milestone rewards at notable level intervals.

The account level count is uncapped. The exact XP curve, reward cadence and milestone levels are **TBD / playtest**. Avoid filler rewards that make levels feel meaningless.

## 4. Weapon Unlocks

The current main design allows weapon unlocks through account progression and provides a usable default loadout immediately.

Proposed rules:
- Every new account starts with a complete, usable default loadout.
- Additional weapons may be earned through account progression and clearly stated challenges.
- Weapon unlock requirements must be visible before the player starts working toward them.
- No weapon may be stronger because it is rarer, more expensive, or harder to unlock.
- Weapon unlocks must not depend on random paid cases.
- A player must never lose access to a weapon they have permanently unlocked.
- Temporary events must not create permanently missable competitive advantages.

**Still to approve:** whether all weapons should eventually be freely available through play, and whether any weapon access can ever be paid-exclusive. The recommended competitive direction is that every gameplay weapon is earnable by everyone and never Robux-exclusive.

## 5. Ability Unlocks

The current main design lists progression, shop, challenges, achievements and events as possible ability unlock routes.

Proposed safeguards:
- Abilities are gameplay options, not stat upgrades.
- No ability may be Robux-exclusive.
- Unlock requirements must be transparent and achievable.
- Competitive access should not be decided by spending.
- Ability unlocks should be front-loaded enough that players can experiment with meaningful playstyles early.
- Once unlocked, an ability remains permanently available.

The final ability unlock schedule and whether the full ability roster is available in ranked are **TBD**. This needs deliberate balance and onboarding testing.

## 6. Weapon Mastery

Every weapon has its own independent mastery track. Weapon XP is separate from account XP.

### How mastery progresses

Weapon XP is earned by using the relevant weapon in valid matches. It may include:
- Match participation while the weapon is equipped and meaningfully used.
- Weapon-specific challenges.
- Skill-based milestones such as accurate use or varied legitimate engagement.
- Objective participation while using the weapon.

Mastery must not reward reckless behaviour, intentional deaths, teammate damage, or repetitive farming.

### Mastery rewards

Weapon mastery may unlock:
- Weapon skins and finish variants.
- Weapon-specific titles and badges.
- Cosmetic elimination or firing effects that preserve readability.
- Weapon inspect or showcase animations.
- Weapon statistics and mastery profile displays.
- A dedicated max-mastery completion collection.

Every weapon follows the same overall mastery philosophy, but its challenges can reflect its unique identity.

### Completion

- Each weapon has a defined maximum mastery level.
- Reaching maximum mastery grants a distinct completion reward collection.
- No endless prestige loop after maximum mastery.
- Mastery does not improve damage, recoil, accuracy, reload speed, ammo, range, or any other combat property.

Exact mastery levels, XP thresholds and reward placement are **TBD / playtest** and are maintained alongside the weapon roster in `AVENOR_Weapons.md`.

## 7. Competitive Rank

AVENOR uses one universal competitive rank. Eligible competitive modes contribute to the same overall rating. Competitive rank measures demonstrated skill, not time played, account level, or weapon mastery.

### Rank ladder

The first seven tiers each contain three divisions. Division III is the entry division; players progress through II and then I before reaching the next tier. Each division has its own short flavour line, shown in rank details and promotion screens.

| Tier | Division | Flavour line |
|---|---|---|
| **FRESH SPAWN** | III | Everyone starts somewhere. Try not to spawn facing a wall. |
| **FRESH SPAWN** | II | You have discovered which end points forward. |
| **FRESH SPAWN** | I | The tutorial is getting nervous. |
| **WARM-UP** | III | Starting to figure things out. |
| **WARM-UP** | II | Your aim has officially entered the chat. |
| **WARM-UP** | I | Almost warmed up. No pressure. |
| **SCRAPPER** | III | Not going down easily. |
| **SCRAPPER** | II | You brought a fight. And possibly snacks. |
| **SCRAPPER** | I | The lobby is beginning to remember you. |
| **MENACE** | III | People are starting to notice. |
| **MENACE** | II | Someone just said, "Watch that one." |
| **MENACE** | I | You are becoming a scheduling problem. |
| **PUBLIC PROBLEM** | III | You are becoming everyone's problem. |
| **PUBLIC PROBLEM** | II | The enemy team has started a group chat about you. |
| **PUBLIC PROBLEM** | I | Even the kill feed needs a break. |
| **FINAL BOSS** | III | The lobby's main concern. |
| **FINAL BOSS** | II | The warm-up match is now everyone else's problem. |
| **FINAL BOSS** | I | Somebody has to be the final boss. Unfortunately for them, it's you. |
| **UNTOUCHABLE** | III | Very few can keep up. |
| **UNTOUCHABLE** | II | Your opponents are checking the settings. |
| **UNTOUCHABLE** | I | At this point, the hitbox rumours are inevitable. |

The tier flavour lines remain part of the rank identity:
- **FRESH SPAWN:** Everyone starts somewhere.
- **WARM-UP:** Starting to figure things out.
- **SCRAPPER:** Not going down easily.
- **MENACE:** People are starting to notice.
- **PUBLIC PROBLEM:** You are becoming everyone's problem.
- **FINAL BOSS:** The lobby's main concern.
- **UNTOUCHABLE:** Very few can keep up.

### AVENOR

**AVENOR** is the single final rank. It has no divisions and no further rank promotions.

Once a player reaches AVENOR:
- Their rank remains AVENOR for the rest of the season, subject to normal ranked integrity and season rules.
- They continue earning competitive rating or leaderboard points indefinitely.
- Their rating/points determine their position on the AVENOR leaderboard.
- There is no AVENOR II, AVENOR I, or extra tier above it.
- The leaderboard provides the long-term chase after rank progression ends.

AVENOR is the ultimate rank title; the leaderboard position is the ongoing competition.

### Placement and rating

Proposed structure:
- New players complete placement matches before receiving a visible rank.
- Rating changes primarily reflect match outcome and opponent/team rating context.
- Individual performance may be used cautiously for calibration, especially during placements, but should not encourage selfish play or objective abandonment.
- Rating gains and losses are shown after every ranked match with a concise explanation.
- Matchmaking uses rating and suitable queue constraints, not account level or weapon mastery.
- Party matchmaking must account for rating differences to limit boosting.
- Players advance through the divisions and tiers by reaching defined rating thresholds.
- Rating thresholds and any demotion protection must be transparent.

The exact rating algorithm, placement count, uncertainty model, rank thresholds and matchmaking rules are **TBD**. Do not publish a formula until it has been tested against real match data.

### Seasonal top 20 reward

At the end of each ranked season:
- The **top 20 eligible players on the AVENOR leaderboard** receive a special seasonal cosmetic reward, planned as an exclusive skin.
- The reward is based on final verified leaderboard standings, not account level or weapon mastery.
- The reward is granted only if the ranked playlist reaches a healthy minimum participation threshold for that season.
- If the ranked population is too small to make a top-20 award meaningful, no top-20 skin reward is issued that season. The threshold must be announced before the season begins.
- Suspicious results, cheating, boosting, collusion or other ranked-integrity violations make a player ineligible.
- Tie-break rules for the final qualifying position must be published in advance.
- The reward is cosmetic and must not grant gameplay advantages.

The minimum ranked population threshold, tie-break rules, exact skin design and reward delivery timing are **TBD**. The top-20 reward is a prestige reward, not a guaranteed feature for seasons with too few ranked participants.

### Competitive integrity

- Server-validated match results determine rating changes.
- Leaving, disconnecting, intentional throwing, cheating and boosting need clear policies.
- A reconnect should restore the same match identity and must not create a second result.
- Penalties should be consistent, visible and proportionate.
- Casual progression must never be a way to manipulate ranked rating.

## 8. Ranked Seasons

- Ranked seasons are monthly, as already planned in the main document.
- Account level and weapon mastery do not reset.
- Seasonal rank rewards are based on the player's highest eligible rank or another clearly announced season-end rule.
- Any seasonal rating reset or soft reset must be announced before the season ends.
- Seasonal rewards are cosmetic: banners, titles, badges, skins or profile displays.
- Rewards must not grant gameplay advantages.
- Leaderboards should use clear tie-break rules and exclude invalid or suspicious results.

Season reset rules, reward thresholds, leaderboard scope and end-of-season timing are **TBD**.

## 9. Season Pass

The season pass is a seasonal cosmetic progression track.

Proposed structure:
- A free reward track available to everyone.
- An optional premium reward track.
- Pass XP earned through matches and season challenges.
- A clearly visible reward at every tier.
- No combat-stat bonuses, exclusive gameplay weapons, or exclusive abilities.
- No requirement to buy the premium track to complete the free track.
- Premium rewards should be cosmetic variants, not stronger or clearer competitive items.

The pass length, duration, pricing, tier count, XP curve and reward list are **TBD**. Avoid designing the pass around exhausting daily obligations. Weekly challenges should provide flexible catch-up opportunities.

## 10. Economy and Currencies

Keep the economy small and easy to understand. Each currency needs one clear purpose.

### Proposed currencies

**AVENOR Credits**
- Earned through account progression, challenges, events and selected milestones.
- Used for direct purchases of eligible cosmetics and cosmetic customization.
- Not purchasable with Robux in the initial proposal.
- Never required to enter a mode or remain competitively viable.

**Robux**
- Optional real-money purchase route for premium cosmetic content or the premium season pass.
- Must not buy competitive rating, combat power, weapon statistics or exclusive gameplay abilities.
- Prices and purchase contents must be explicit before confirmation.

Do not add extra currencies unless a genuinely different use case requires them. Avoid exchange-rate webs between several tokens.

### Shop rules

- Direct purchase is preferred over relying on random cases.
- Display item name, rarity, exact price, contents and whether it is permanent.
- No misleading countdowns or fake scarcity.
- Rotating offers may exist, but core gameplay access must never depend on a limited-time shop rotation.
- Cosmetic cases, if retained, should have transparent odds and must never contain gameplay power.
- Duplicate protection or duplicate compensation must be clearly defined before cases are implemented.
- Paid purchases must be confirmed by the platform and validated server-side.

## 11. Challenges and Events

### Daily challenges
- Short, varied objectives that can be completed in normal play.
- Offer a small amount of account XP and/or AVENOR Credits.
- Avoid requiring a specific rare weapon or forcing players into an unwanted mode.

### Weekly challenges
- Longer goals with larger rewards.
- Allow multiple modes and playstyles to count where possible.
- Provide enough time and flexibility that missing one day does not ruin progress.

### Achievements
- Permanent milestones for meaningful accomplishments.
- May reward titles, badges, banners, cosmetics or account XP.
- Should recognize skill, exploration, teamwork and experimentation.

### Limited-time events
- Offer themed challenges and cosmetic rewards.
- Must not permanently lock competitive gameplay power behind a short event.
- Event progress and reward conditions must be clearly displayed.

Exact challenge rotation and reward values are **TBD**.

## 12. Player Profile and Progress Display

The profile should distinguish:
- Account level and total account XP.
- Universal competitive rank and current season.
- Weapon mastery levels and completed masteries.
- Selected title, banner and showcased cosmetics.
- Relevant match statistics and achievement milestones.

Do not present account level as an indication of skill. Players should be able to inspect a weapon's mastery and a player's rank without confusing the two.

## 13. Server Authority, Saving and Exploit Protection

The server is authoritative for:
- Account XP awards and level-ups.
- Weapon XP and mastery levels.
- Challenge and achievement completion.
- Currency balances and purchases.
- Permanent unlock ownership.
- Ranked rating and seasonal results.
- Season pass XP and reward claims.

Implementation requirements:
- Use unique match IDs and idempotent reward processing.
- Validate every reward source on the server.
- Save progression atomically where possible.
- Prevent duplicate claims after reconnects or retries.
- Never trust client-submitted XP, currency, mastery, rank or purchase ownership.
- Keep an auditable transaction history for currency grants, spending and purchases.
- Handle failed saves safely without silently losing or duplicating rewards.
- Apply rate limits and server-side checks to challenge completion and reward claims.

## 14. Decisions Still Requiring Approval

1. Final weapon unlock policy, including whether any weapon access can ever be paid-exclusive.
2. Final ability unlock schedule and ranked availability.
3. Exact account XP curve, reward cadence and milestone intervals for the uncapped level system.
4. Account XP curve, match XP values and level reward cadence.
5. Weapon mastery level count, XP curve and reward milestones.
6. Rank rating thresholds, placement count, rating model, seasonal reset policy, ranked-population threshold for the AVENOR top-20 reward, and tie-break rules. (Rank names, tier divisions and the AVENOR apex structure are now defined.)
7. Season pass duration, tier count, pricing and rewards.
8. AVENOR Credits earning rate and shop pricing.
9. Whether cosmetic cases remain in the economy, and their odds/duplicate rules if so.

## 15. Recommended Implementation Order

Build progression in layers. Do not build the entire economy before the core match loop is reliable.

1. **Match reward foundation:** unique match IDs, server-validated results and one-time reward processing.
2. **Account XP:** completion, win and objective participation rewards; level display.
3. **Weapon mastery:** per-weapon XP, levels, challenges and completion rewards.
4. **Unlock inventory:** permanent weapon, ability and cosmetic ownership.
5. **Challenges:** daily, weekly and achievement tracking.
6. **Currencies and shop:** earn, spend, purchase validation and transaction history.
7. **Competitive rank:** placements, rating updates, matchmaking integration and penalties.
8. **Seasons and pass:** seasonal reset rules, reward track and claims.

The first playable prototype needs only match completion rewards and a simple account XP display. All other systems can be layered on after match integrity is proven.
