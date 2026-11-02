# AVENOR — Active Firearm Firing Identities

> **Launch roster: 40 active damage-dealing firearms and launchers.** This document is the source of truth for how each active firearm actually fires. The older 167-concept catalogue has been reduced: 54 firearm concepts are archived and are not part of the active launch roster. The 43 utility concepts and 30 melee concepts remain separately active.
>
> **Design rule:** changing damage, recoil, fire rate, magazine size, or rarity is not a unique firing identity. Every active firearm must change what leaves the muzzle, how it travels, how its shots are sequenced, or what happens on impact. No two weapons should feel like the same ordinary bullet with different numbers.
>
> All mechanics below are fictional Roblox gameplay systems. Values are prototype proposals and require in-game testing.

## 1. What makes a firearm distinct

Every active weapon must have a recognisable combination of:
- **Projectile form:** bullet, pellet fan, slug, bolt, disc, orb, rail, pulse, liquid globule, canister, or another clearly defined form.
- **Travel behaviour:** straight, arcing, splitting, ricocheting, returning, branching, delayed, converging, or changing state.
- **Firing pattern:** single, fixed burst, alternating sequence, charge-release, spin-up stream, staged volley, or deliberate multi-step shot.
- **Impact behaviour:** direct hit, splash, push, surface embed, temporary route effect, delayed burst, or bounded chain.
- **Handling rhythm:** spin-up, charge, staged reload, two-feed cycle, brace, heat management, or timing window.
- **Counterplay:** every special path or effect is visible, bounded, and avoidable through movement, cover, spacing, or timing.

A weapon may share a broad category with another weapon, but it must not share the same full firing loop. For example, two shotguns may both be close-range weapons, but one fires a horizontal pellet wall while another fires two different break-action patterns. That is a real gameplay difference.

## 2. Active launch roster

| ID | Weapon | Distinct firing identity |
|---|---|---|
| 001 | **TAXMAN** | Sticky ledger darts |
| 002 | **POCKET ROCKET** | Runaway micro-round stream |
| 003 | **DOORBELL** | Two-pattern pellet shells |
| 004 | **LONG STORY** | Charged piercing rail lance |
| 005 | **LOOSE CHANGE** | Banking metal slugs |
| 006 | **THREE'S COMPANY** | Three-lane burst |
| 007 | **LAWNMOWER** | Rotating barrel stream |
| 008 | **RETURN TO SENDER** | Outbound-and-return disc |
| 011 | **DEAD WEIGHT** | Remote-burst payload |
| 013 | **CALL WAITING** | Charge-and-release energy bolt |
| 014 | **SHORT NOTICE** | Distance-splitting crossbow bolt |
| 015 | **BAD NEIGHBOR** | Surface-embedded nail rounds |
| 055 | **BAD TIMING** | Three-shot rhythm burst |
| 161 | **BAD SIGNAL** | Disruption pulse dart |
| 022 | **LAST CALL** | Directional sonic cones |
| 023 | **TWO CENTS** | Alternating fast and heavy rounds |
| 025 | **HOLD MUSIC** | Five-note projectile sequence |
| 026 | **SPLIT DECISION** | Alternating slug and fork shot |
| 028 | **SLOW BURN** | Heat-state plasma bolts |
| 033 | **BOUNCER** | Compressed-air impact shells |
| 038 | **TIN CAN** | Multi-bounce puck |
| 039 | **HOME RUN** | Distance-building kinetic ball |
| 041 | **DOUBLE PARKED** | Alternating twin-pistol projectiles |
| 045 | **CLEAN BREAK** | Break-action paired shells |
| 049 | **HIGH HORSE** | Upward-arc gravity charge |
| 053 | **DOUBLE TAKE** | Delayed echo projectile |
| 059 | **SHORT FUSE** | Sticky timed burst charges |
| 064 | **BULLPEN** | Braced fan-burst shotgun |
| 069 | **WIDE OPEN** | Horizontal wall of pellets |
| 074 | **OVERHEAD** | Banked mortar shells |
| 082 | **TALLY HO** | Counted fifth-shot splitter |
| 083 | **STATIC SHOCK** | Branching arc burst |
| 085 | **BLIND DATE** | Split hip-fire / focused slug |
| 097 | **BIG PICTURE** | Converging spiral burst |
| 100 | **OVERBOOKED** | Cycling auto-shotgun shells |
| 105 | **DOUBLE SHIFT** | Selectable dual-feed projectile modes |
| 109 | **SIDE DISH** | Main bolt with companion seekerless shard |
| 148 | **DETOUR** | Limited-bend guided arc bolt |
| 153 | **TRAFFIC JAM** | Cluster canister with timed fragment fan |
| 157 | **NARROW ESCAPE** | Delayed rebound capsule |

## 3. Individual firing specifications

### 001 — TAXMAN

**Projectile identity:** Sticky ledger darts.

**How it fires:** Each trigger pull launches one compact adhesive dart, not a hitscan bullet. A direct hit sticks a bright numbered tab to the opponent. The tab records only the next few successful hits; it does not reveal the target through walls. Weapon Action: Collection Day fires a separate cash-out dart that pops the stored mark for a capped bonus. The target can clear the tab by breaking line of sight for the stated duration.

**Projectile, impact and feedback:**
- Single-shot darts travel at medium speed and have a visible, thin trail. The first hit attaches a tab; follow-up hits refresh its small counter. The cash-out shot is slower and louder, so the opponent gets a reaction window.

**What makes it play differently:**
- TAXMAN is about sticking to one opponent and finishing a readable sequence. It is not a general-purpose spray rifle: missed darts cost tempo, and changing targets throws away the mark.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 002 — POCKET ROCKET

**Projectile identity:** Runaway micro-round stream.

**How it fires:** The weapon begins with a deliberate, moderate cadence. Holding fire continuously makes its internal cycle accelerate in clear steps until it reaches its cap. The rounds remain small, fast physical projectiles; the change is the increasingly dense stream, not a hidden damage multiplier. Releasing fire immediately drops the cycle back to its starting pace.

**Projectile, impact and feedback:**
- The barrel and audio pitch climb together through three readable spin stages. Each stage tightens the interval between rounds; there is no random spread bloom. The reload interrupts the ramp and resets it.

**What makes it play differently:**
- POCKET ROCKET rewards short aggressive tracking windows. It starts manageable, becomes dangerous if the user maintains aim, and loses its advantage when forced to stop firing.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 003 — DOORBELL

**Projectile identity:** Two-pattern pellet shells.

**How it fires:** Every shell releases eight visible pellets from a fixed pattern. Hip-fire uses a broad, shallow fan for close-range coverage. Holding aim briefly compresses the same eight pellets into a narrow vertical cluster, but adds a small commitment delay before the shot. It never silently turns into a single slug.

**Projectile, impact and feedback:**
- Pellets travel as separate short-lived projectiles and each has its own impact. The wide pattern is forgiving nearby but loses consistency with distance; the focused pattern rewards lining up a clean centre mass shot.

**What makes it play differently:**
- DOORBELL is a spread-control shotgun. The choice is coverage now or a more deliberate, concentrated blast after a readable aim-in.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 004 — LONG STORY

**Projectile identity:** Charged piercing rail lance.

**How it fires:** Holding fire charges a bright energy line. Releasing sends one extremely fast, narrow rail projectile along the reticle line. It pierces the first opponent and continues at reduced damage through one additional opponent, then dissipates. The rail does not bend, home, or pass through arena walls.

**Projectile, impact and feedback:**
- Charge level is shown on the receiver and heard as a rising tone. A full charge has the strongest impact and a clear firing flash; a partial charge fires sooner but deals less damage. The beam leaves a brief straight afterimage.

**What makes it play differently:**
- LONG STORY is a precision lane weapon. It rewards pre-aiming and lining up multiple opponents, but its charge cue warns enemies and its narrow path is easy to avoid if the user rushes the shot.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 005 — LOOSE CHANGE

**Projectile identity:** Banking metal slugs.

**How it fires:** The pistol fires a dense metal slug that can make one controlled ricochet from approved hard arena surfaces. The first impact angle determines the reflected path; the slug never steers after bouncing and cannot ricochet from players.

**Projectile, impact and feedback:**
- The bounce point flashes for a fraction of a second and the slug changes colour after its first impact. A direct hit is immediate; a bank shot arrives later and is easier to read. Soft surfaces absorb the slug.

**What makes it play differently:**
- LOOSE CHANGE is a geometry pistol. Its best shots come from planning a bank around a corner, not from repeatedly clicking at an exposed target.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 006 — THREE'S COMPANY

**Projectile identity:** Three-lane burst.

**How it fires:** One trigger pull fires three projectiles in a fixed sequence: the first travels down the centre, the second offsets left, and the third offsets right. The three shots are individually visible and separated by a short, consistent interval. The pattern repeats exactly; it is not random recoil.

**Projectile, impact and feedback:**
- The muzzle selector clicks between three chambers and each projectile has a slightly different trail marker. A complete burst covers a narrow horizontal strip, while stopping early sacrifices the full pattern.

**What makes it play differently:**
- THREE'S COMPANY is a burst-pattern rifle. Players learn the three-shot sweep and track across a target rather than holding one point like a conventional rifle.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 007 — LAWNMOWER

**Projectile identity:** Rotating barrel stream.

**How it fires:** The barrels physically spin up before the first round reaches full cadence. Once spinning, the weapon emits a continuous stream of small projectiles with stable spacing. Releasing fire causes a visible spin-down; firing again before it fully stops resumes from the remaining spin rather than instantly returning to maximum speed.

**Projectile, impact and feedback:**
- The weapon has a distinctive mechanical whirr that rises with barrel speed. The first rounds are deliberately spaced, then the stream becomes dense. Sustained fire drains the large magazine quickly and the reload is long.

**What makes it play differently:**
- LAWNMOWER is the sustained-fire anchor. It owns space through continuous pressure, but the spin-up and heavy handling make sudden target switches awkward.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 008 — RETURN TO SENDER

**Projectile identity:** Outbound-and-return disc.

**How it fires:** The launcher throws one flat spinning disc. It travels outward on a straight path, reaches its range limit, then curves back toward the thrower along a predictable return route. A player can be hit once on the outbound leg and once on the return leg only if the design's balance cap permits; the prototype rule is one hit per opponent per throw.

**Projectile, impact and feedback:**
- The disc has a wide readable silhouette and a continuous spinning sound. Its return arc is shown by a short route cue, making the second pass something opponents can dodge rather than a surprise homing hit.

**What makes it play differently:**
- RETURN TO SENDER is about controlling two lanes with one throw. The user must plan where the disc will return and can punish opponents who chase through its route.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 011 — DEAD WEIGHT

**Projectile identity:** Remote-burst payload.

**How it fires:** The launcher lobs a heavy, slow payload on a shallow arc. The payload sticks to the first valid surface or bursts on direct player contact. While it is travelling, the user may trigger its detonation early; otherwise it bursts automatically after its fuse expires. Only one payload can be active.

**Projectile, impact and feedback:**
- The payload is large, bright, and audibly ticking. Its arc and blast radius are telegraphed. Direct impact is stronger than edge splash, and the delayed burst gives opponents time to leave the marked area.

**What makes it play differently:**
- DEAD WEIGHT is a timing launcher, not a fast rocket. It controls a patch of space and asks the user to predict movement or force an opponent away from cover.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 013 — CALL WAITING

**Projectile identity:** Charge-and-release energy bolt.

**How it fires:** Holding fire builds one energy bolt through three charge stages. Releasing launches a fast, straight projectile whose size, damage and impact are tied to the visible charge stage. A low charge fires quickly and weakly; a full charge fires slowly and strongly. It does not pierce targets.

**Projectile, impact and feedback:**
- The chamber visibly fills with light and gives a distinct audio cue at each stage. Releasing is immediate; holding beyond full charge does not add more power. Charging slows movement slightly, so the user must choose a safe timing window.

**What makes it play differently:**
- CALL WAITING is a flexible charge weapon. It lets the user trade tempo for impact, unlike LONG STORY's narrow piercing rail shot.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 014 — SHORT NOTICE

**Projectile identity:** Distance-splitting crossbow bolt.

**How it fires:** The crossbow fires one heavy bolt. It remains a single accurate projectile at close range, then splits at a fixed travel distance into three smaller bolts that fan horizontally. The split point is deterministic and visible; the smaller bolts cannot split again.

**Projectile, impact and feedback:**
- The central bolt has a bright core and the two side bolts peel away with a mechanical snap. Close shots reward precision; longer shots reward predicting where the target will be when the fan opens.

**What makes it play differently:**
- SHORT NOTICE changes shape during flight. It is a crossbow for choosing the correct distance, not a conventional bolt that simply deals different damage by range.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 015 — BAD NEIGHBOR

**Projectile identity:** Surface-embedded nail rounds.

**How it fires:** Each shot launches a short, heavy nail projectile. A nail that hits an arena surface embeds there and remains as a visible anchor. A later shot can connect to one embedded nail and release a short, straight pulse between the muzzle and that anchor. Nails that hit opponents deal direct damage but do not attach to them.

**Projectile, impact and feedback:**
- The nail has a sharp metallic trail and a chunky impact. Embedded nails remain visible to both teams and expire quickly. The connecting pulse is a separate, bright line with a clear start-up cue.

**What makes it play differently:**
- BAD NEIGHBOR is a setup weapon. Its first shots prepare geometry; its follow-up shot uses that setup. It is weaker when fired randomly into open space.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 022 — LAST CALL

**Projectile identity:** Directional sonic cones.

**How it fires:** The projector emits a short cone-shaped pressure wave. The wave expands forward, deals modest damage and slightly disrupts existing momentum on contact. It does not travel as a bullet, pass through walls, disable controls or affect players behind the user.

**Projectile, impact and feedback:**
- The cone is visible as a brief ripple with a clear radius edge. Each pulse has a deliberate recovery, and the user must turn to cover a different angle. Close range is required for meaningful effect.

**What makes it play differently:**
- LAST CALL is a close-range spacing tool. It rewards facing the right lane and timing a pulse, not tracking a target with ordinary projectiles.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 023 — TWO CENTS

**Projectile identity:** Alternating fast and heavy rounds.

**How it fires:** The rifle cycles between two visibly different rounds. The fast round has a thin trail, lower impact and quicker travel; the heavy round has a slower, thicker projectile and a stronger hit. The sequence is fixed: fast, heavy, fast, heavy. The two rounds share the same aim point but require different lead timing.

**Projectile, impact and feedback:**
- The receiver indicator alternates colour and the sound changes on every second shot. The heavy round has a slightly longer recovery, so firing rhythm is part of the weapon's identity.

**What makes it play differently:**
- TWO CENTS is a timing rifle. The user must adjust lead and tempo every other shot rather than holding a uniform cadence.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 025 — HOLD MUSIC

**Projectile identity:** Five-note projectile sequence.

**How it fires:** A trigger hold releases a fixed sequence of four small note-shaped energy bolts followed by one larger final note. The first four build a visible sequence meter on the target only when they hit; the fifth becomes a stronger straight projectile if the sequence is completed on the same opponent. Missing or changing target resets the sequence.

**Projectile, impact and feedback:**
- Each note has its own pitch and colour, and the fifth has a distinct wind-up. The bolts are separate projectiles with slight vertical offsets, not a normal stream with a bonus counter.

**What makes it play differently:**
- HOLD MUSIC rewards sustained tracking on one target. It has a musical rhythm and a clear payoff, but breaking line of sight interrupts the sequence.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 026 — SPLIT DECISION

**Projectile identity:** Alternating slug and fork shot.

**How it fires:** The rifle automatically alternates between a single dense slug and a forked shot that divides into two smaller projectiles after a short distance. The slug is best for a narrow exposed angle; the fork shot is best for catching a wider lateral dodge. The sequence is fixed and displayed on the weapon.

**Projectile, impact and feedback:**
- The muzzle changes shape before each shot. The forked projectiles visibly separate and lose individual impact strength; they never curve back toward a target.

**What makes it play differently:**
- SPLIT DECISION makes the user adapt to the next shot type. It is not a selectable mode, so learning the rhythm and planning the next angle matter.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 028 — SLOW BURN

**Projectile identity:** Heat-state plasma bolts.

**How it fires:** The rifle fires discrete plasma bolts. Each shot adds heat, and heat changes the bolt's behaviour through three states: cool bolts are compact and fast; warm bolts become wider and slightly slower; the final hot state creates a short-lived splash on impact. At maximum heat, the weapon locks briefly to cool.

**Projectile, impact and feedback:**
- The barrel glows through three clear colours and the projectile shape changes with it. Heat decays when the user stops firing. The user can deliberately pause to return to the fast compact shot.

**What makes it play differently:**
- SLOW BURN is a state-management rifle. Its projectile evolves as the player commits to a fight, creating a choice between quick precision and slower area pressure.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 033 — BOUNCER

**Projectile identity:** Compressed-air impact shells.

**How it fires:** The shotgun launches a tight cluster of heavy air pellets inside a visible pressure wave. On impact, the wave deals close-range damage and pushes opponents a short, fixed distance. It does not ragdoll, stun or increase damage based on knockback.

**Projectile, impact and feedback:**
- The pressure ring expands from the muzzle and collapses on impact. The push direction is away from the shot's impact point and is consistent, so players can learn how to avoid being displaced toward hazards.

**What makes it play differently:**
- BOUNCER is a positional shotgun. It changes spacing and can interrupt a push, but its range is short and the impact is easy to read.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 038 — TIN CAN

**Projectile identity:** Multi-bounce puck.

**How it fires:** The launcher fires a heavy metal puck that ricochets from up to three valid hard surfaces before losing energy and disappearing. Each bounce changes its direction according to the surface angle and reduces damage. It never seeks players and cannot bounce off player characters.

**Projectile, impact and feedback:**
- The puck remains visible throughout its path and gives a metallic clang at every bounce. A brief glint marks the surface it struck. The slow travel speed lets opponents read and dodge its route.

**What makes it play differently:**
- TIN CAN is a prediction launcher for banked arena shots. It rewards knowledge of map geometry, not direct aim alone.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 039 — HOME RUN

**Projectile identity:** Distance-building kinetic ball.

**How it fires:** The launcher throws one dense kinetic ball. It starts compact and relatively weak, then gains size and impact strength as it travels through open space, up to a strict cap. Hitting a wall or surface ends the growth immediately; it does not bounce or split.

**Projectile, impact and feedback:**
- The ball visibly expands and its low hum rises with travel distance. A fully grown ball is easy to spot and has a heavy impact cue. Short shots are fast to use but intentionally modest.

**What makes it play differently:**
- HOME RUN is a long-lane prediction weapon. It asks the player to send a shot early and let it build, unlike TIN CAN's surface-bounce routes.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 041 — DOUBLE PARKED

**Projectile identity:** Alternating twin-pistol projectiles.

**How it fires:** The left pistol fires a narrow, fast needle round; the right pistol fires a slower, wider pulse round. They alternate automatically and each has its own small ammo counter. The player cannot fire both at once. The two travel speeds make the weapon's rhythm and leading pattern distinctive.

**Projectile, impact and feedback:**
- The weapon swaps the active muzzle on every click, with a clear left-right flash and different sound. Reloading refills both feeds in a staged animation, leaving a short vulnerability window.

**What makes it play differently:**
- DOUBLE PARKED is a dual-feed sidearm. It rewards learning two projectile speeds and managing two linked ammo pools, rather than simply doubling ordinary pistol fire.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 045 — CLEAN BREAK

**Projectile identity:** Break-action paired shells.

**How it fires:** The weapon has two independent barrels and fires one shell per trigger pull. The first barrel releases a tight vertical pellet column; the second releases a wider horizontal fan. The user can fire either shell first, but the spread pattern is fixed to its barrel. Both barrels must be spent before a full reload.

**Projectile, impact and feedback:**
- Opening the action exposes both chambers. Each shot has a different muzzle flash and pellet silhouette. The reload is a deliberate two-shell sequence, not a magazine swap.

**What makes it play differently:**
- CLEAN BREAK is a two-decision shotgun. It lets the player choose between a narrow doorway shot and a broad close-range sweep, then commits to a full reload.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 049 — HIGH HORSE

**Projectile identity:** Upward-arc gravity charge.

**How it fires:** The launcher fires a slow gravity orb that rises slightly after leaving the muzzle, then curves downward toward the ground. It bursts into a brief circular pressure field on impact. The orb's path is fixed by launch angle and gravity; it does not track opponents.

**Projectile, impact and feedback:**
- The orb has a visible arc ribbon and a landing ring appears shortly before impact. A direct hit deals more than the edge of the pressure field. Opponents can move out of the ring before it activates.

**What makes it play differently:**
- HIGH HORSE is an aerial arc launcher. It pressures elevated positions and predictable cover without behaving like a straight rocket.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 053 — DOUBLE TAKE

**Projectile identity:** Delayed echo projectile.

**How it fires:** The pistol fires one primary dart. A fraction of a second later, a weaker echo dart retraces the exact same path from the muzzle, even if the user has already moved. The echo cannot change direction, home or retarget; it can hit only where the original line passes again.

**Projectile, impact and feedback:**
- The first dart is bright white; the echo is a thinner afterimage with a delayed audio click. The delay is fixed and visible, allowing opponents to dodge the second pass by moving after the first shot.

**What makes it play differently:**
- DOUBLE TAKE rewards prediction and follow-up timing. The player aims once but must account for a second pass through the same lane.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 055 — BAD TIMING

**Projectile identity:** Three-beat rhythm burst.

**How it fires:** Holding the trigger releases three compact pulse darts at a very fast, fixed interval, then forces a short, unmistakable pause before the next group. The darts travel straight and remain separate projectiles. The pause cannot be cancelled by clicking faster; the rhythm is part of the firing cycle.

**Projectile, impact and feedback:**
- The first two darts have thin trails; the third has a brighter pulse ring.
- Each dart registers its own hit. There is no hidden fourth shot or random spread.
- The weapon gives a triple audio beat followed by a quiet reset click.

**What makes it play differently:**
- BAD TIMING is a burst weapon with a deliberate dead beat between volleys. The player must use the pause to reposition or reacquire.
- THREE'S COMPANY spreads its shots across a horizontal pattern; BAD TIMING keeps a tight line and changes cadence instead.

**Required implementation checks:**
- Burst timing and pause are server-validated.
- The next burst cannot start early through input spam.
- Each dart remains individually visible and dodgeable.
- Cosmetic audio must not mask the rhythm cue.

### 059 — SHORT FUSE

**Projectile identity:** Sticky timed burst charges.

**How it fires:** The launcher fires small sticky charges that attach to valid surfaces and burst after a short fixed fuse. A direct player hit causes the charge to fall away and burst at the player's feet after a shorter warning delay; it never sticks to a character. Only a limited number of charges may exist at once.

**Projectile, impact and feedback:**
- Each charge blinks faster as its fuse approaches and produces a clear warning tone. The blast is small and local. Opponents can leave the marked area or destroy the charge before it bursts.

**What makes it play differently:**
- SHORT FUSE is delayed area pressure. It rewards placing charges where opponents intend to move, not landing a fast direct projectile.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 064 — BULLPEN

**Projectile identity:** Braced fan-burst shotgun.

**How it fires:** Holding Weapon Action briefly braces the weapon into a visible stance. While braced, the next shot releases three successive short pellet fans: low, centre, then high. The player is stationary during the brace and the sequence stops if the stance is cancelled. Unbraced fire is a weak single fan.

**Projectile, impact and feedback:**
- The brace deploys visible stabilisers and a floor marker. Each fan has a separate report and a slight pause, giving opponents a chance to break line of sight between pulses.

**What makes it play differently:**
- BULLPEN is a commitment shotgun for holding a doorway. It is powerful only when the user chooses a position and accepts being vulnerable while braced.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 069 — WIDE OPEN

**Projectile identity:** Horizontal wall of pellets.

**How it fires:** Each shell releases a broad, flat horizontal row of pellets rather than a circular shotgun cloud. The row covers a wide lane at close range but has very little vertical coverage. Crouched or airborne targets can avoid much of the pattern depending on angle.

**Projectile, impact and feedback:**
- The muzzle projects a thin horizontal guide for a split second. Pellets travel in parallel lanes and fade quickly. The pattern does not tighten when aiming; its identity is the wide horizontal coverage.

**What makes it play differently:**
- WIDE OPEN is a lane-sweep shotgun. It punishes side-to-side movement through a doorway but struggles against vertical movement or a target at a different elevation.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 074 — OVERHEAD

**Projectile identity:** Banked mortar shells.

**How it fires:** The launcher fires a slow shell on a high parabolic arc. The shell can pass over low cover but cannot pass through ceilings or solid overhead geometry. It bursts on landing, with a small inner impact zone and a weaker outer ring.

**Projectile, impact and feedback:**
- The arc is shown by a dotted preview while aiming and the landing area flashes shortly before impact. The shell has a long travel time and a distinct overhead whistle, so opponents can relocate.

**What makes it play differently:**
- OVERHEAD is a cover-pressure launcher. It punishes static positions behind low cover but is poor against moving targets in open space.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 082 — TALLY HO

**Projectile identity:** Counted fifth-shot splitter.

**How it fires:** The first four shots are compact, accurate darts. The fifth shot is a heavier seed projectile that splits into three smaller darts at a fixed distance. The counter resets after the fifth shot and is shown on the receiver. Reloading preserves the count so players can plan the splitter shot.

**Projectile, impact and feedback:**
- The fifth round has a different casing, louder chamber sound and a three-pronged trail after splitting. The smaller darts spread in a predictable fan and each deals reduced damage.

**What makes it play differently:**
- TALLY HO is a cadence-and-count weapon. It rewards planning the fifth shot around an opponent's position rather than spraying continuously.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 083 — STATIC SHOCK

**Projectile identity:** Branching arc burst.

**How it fires:** The rifle launches a short-range electrical orb. On contact with a player or surface, it releases a visible arc to one nearby opponent within a strict radius. The first hit is the strongest; the secondary arc is weaker and cannot jump again. It does not select targets through walls.

**Projectile, impact and feedback:**
- The orb travels slowly enough to read, and the arc has a clear connecting line. Only one secondary target can be affected. Spacing out and using cover breaks the chain.

**What makes it play differently:**
- STATIC SHOCK is a grouped-target punish tool. Its identity is a one-step chain reaction, not a conventional bullet stream or an unlimited chain lightning effect.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 085 — BLIND DATE

**Projectile identity:** Split hip-fire / focused slug.

**How it fires:** Hip-fire launches a loose cluster of small pellets with a broad spread. Aiming changes the next shot into one compact, fast slug with no pellet spread, but the shot has a short focus delay. The weapon cannot fire the two patterns simultaneously.

**Projectile, impact and feedback:**
- The muzzle visibly rotates between a multi-port diffuser and a single central aperture. The hip-fire pattern is immediate and close-range; the focused slug has a clear charge click and a narrow trail.

**What makes it play differently:**
- BLIND DATE is a close-range weapon with two genuinely different projectile forms. It asks the user to decide between immediate coverage and a delayed precision shot.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 097 — BIG PICTURE

**Projectile identity:** Converging spiral burst.

**How it fires:** One trigger pull fires three projectiles in a shallow spiral. The first begins wide left, the second wide right, and the third starts near centre; their paths gradually converge toward a shared point at medium range. The convergence distance is fixed and the projectiles never home.

**Projectile, impact and feedback:**
- The three trails form a visible corkscrew pattern. Close targets may be hit by one outer projectile; targets near the convergence point can be caught by the full group. Beyond that point the shots remain close together.

**What makes it play differently:**
- BIG PICTURE is a range-judgement burst weapon. Its best damage window is a predictable distance band, not every range equally.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 100 — OVERBOOKED

**Projectile identity:** Cycling auto-shotgun shells.

**How it fires:** Holding fire cycles a shell that releases a compact cluster of pellets, then a second delayed micro-cluster along the same aim line. The second cluster is weaker and arrives just after the first, creating a two-beat impact rather than one ordinary shotgun blast. The weapon has a strict heat and magazine cap.

**Projectile, impact and feedback:**
- The barrel cycles visibly between the two pellet releases. The first report is heavy; the follow-up is a lighter mechanical pop. Continuous fire builds heat and eventually forces a brief pause.

**What makes it play differently:**
- OVERBOOKED is an aggressive close-range pressure weapon. It rewards holding a lane briefly, but its delayed second cluster and heat pause make it less reliable for instant single-shot trades.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 105 — DOUBLE SHIFT

**Projectile identity:** Selectable dual-feed projectile modes.

**How it fires:** The weapon contains two ammunition feeds. The primary trigger alternates between a fast, light dart and a slow, heavy disc. Weapon Action locks the next three shots to one feed, after which the alternation resumes. The light dart is for quick tracking; the heavy disc is for leading a predictable route.

**Projectile, impact and feedback:**
- A side selector visibly moves between feeds. The light dart has a thin trail and quick report; the heavy disc has a broad silhouette and lower travel speed. The selected feed is always shown on the HUD.

**What makes it play differently:**
- DOUBLE SHIFT is a two-ammunition rifle. It gives deliberate control over projectile type without becoming a generic fire-mode toggle.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 109 — SIDE DISH

**Projectile identity:** Main bolt with companion seekerless shard.

**How it fires:** Each shot launches a central heavy bolt with a smaller companion shard offset to one side. The shard follows a fixed curved path that rejoins the central line at a set distance; it never homes or tracks. At close range the two paths are separated, while at the merge point they can converge on one target.

**Projectile, impact and feedback:**
- The main bolt is solid and bright; the shard is smaller and leaves a curved dotted trail. The companion's path is previewed by the weapon sight, making the geometry learnable.

**What makes it play differently:**
- SIDE DISH rewards aiming at the merge distance. It is not simply a double shot: one projectile follows the reticle while the other follows a fixed offset curve.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 148 — DETOUR

**Projectile identity:** Limited-bend guided arc bolt.

**How it fires:** The launcher fires one visible energy bolt that follows a shallow, preselected bend. Before firing, the player chooses left or right bend with Weapon Action; the bolt then follows that fixed curve and cannot adjust mid-flight. It cannot turn around cover or pursue a moving opponent.

**Projectile, impact and feedback:**
- The curve is previewed as a short arc on the reticle and remains visible as a bright trail. The projectile is slower than a straight shot, giving opponents time to dodge the bend.

**What makes it play differently:**
- DETOUR is a route-shaping projectile. It lets players lead a target around a small angle, but the path is committed before the shot and can be read.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 153 — TRAFFIC JAM

**Projectile identity:** Cluster canister with timed fragment fan.

**How it fires:** The launcher fires one slow canister that bursts at a chosen travel time or on surface impact. The burst releases five small fragments in a fixed radial fan. Each fragment travels independently for a short distance and then disappears; fragments do not bounce or seek targets.

**Projectile, impact and feedback:**
- The canister flashes through a short countdown and makes a distinct warning sound. The fragment fan is bright and wide, so opponents can move through gaps or retreat before it opens.

**What makes it play differently:**
- TRAFFIC JAM is a space-filling launcher. It is strongest at a choke point and weaker in open space where opponents can spread out.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.

### 157 — NARROW ESCAPE

**Projectile identity:** Delayed rebound capsule.

**How it fires:** The compact launcher fires a capsule that travels straight, strikes the first surface, then rebounds once at a shallow angle before bursting. The rebound direction follows the surface angle and is capped; it cannot bounce repeatedly or home toward a player.

**Projectile, impact and feedback:**
- The capsule leaves a bright line and flashes at the first impact. A short delay separates the rebound from the burst, so the second leg is visible and avoidable.

**What makes it play differently:**
- NARROW ESCAPE is a one-bounce timing launcher. Unlike TIN CAN's multiple bank shots, it has exactly one predictable rebound followed by a timed burst.

**Required implementation checks:**
- Projectile path and impact are validated by the server.
- Every special projectile has a maximum lifetime, range, and active-object limit.
- All trajectories, split points, ricochets, return paths, charge states, and delayed effects are readable to opponents.
- The weapon's HUD, animation, sound and crosshair state must communicate the next shot type and current firing state.
- Cosmetics may change presentation but may not hide the projectile, shorten warning cues, alter hitboxes, or change timing.


## 4. Archived firearm concepts

The following 54 concepts remain in the planning archive for possible future redesign, but are **not launch firearms**. Their current combat stats and skins must not be treated as active launch content:

- Weapon ID 010
- Weapon ID 012
- Weapon ID 016
- Weapon ID 018
- Weapon ID 019
- Weapon ID 030
- Weapon ID 031
- Weapon ID 034
- Weapon ID 036
- Weapon ID 044
- Weapon ID 046
- Weapon ID 047
- Weapon ID 051
- Weapon ID 057
- Weapon ID 060
- Weapon ID 061
- Weapon ID 063
- Weapon ID 065
- Weapon ID 067
- Weapon ID 070
- Weapon ID 073
- Weapon ID 076
- Weapon ID 077
- Weapon ID 079
- Weapon ID 080
- Weapon ID 081
- Weapon ID 087
- Weapon ID 088
- Weapon ID 091
- Weapon ID 092
- Weapon ID 094
- Weapon ID 098
- Weapon ID 102
- Weapon ID 103
- Weapon ID 106
- Weapon ID 141
- Weapon ID 142
- Weapon ID 143
- Weapon ID 144
- Weapon ID 145
- Weapon ID 146
- Weapon ID 147
- Weapon ID 149
- Weapon ID 150
- Weapon ID 151
- Weapon ID 152
- Weapon ID 154
- Weapon ID 159
- Weapon ID 162
- Weapon ID 163
- Weapon ID 164
- Weapon ID 165
- Weapon ID 166
- Weapon ID 167

> The archive is not a promise that these weapons will return. Any future return must pass the same firing-identity test and must not duplicate an active weapon.


## 5. Prototype and acceptance checklist

A firearm is not accepted into the active roster until all of the following are true:
1. A player can identify its firing pattern after seeing and hearing it in a real match.
2. Its projectile behaviour differs in a meaningful way from every other active weapon.
3. Its best range, timing window, and counterplay are clear.
4. It creates a different decision for the user, not merely a different damage calculation.
5. Its special behaviour works reliably under server authority and normal network latency.
6. Its VFX, sound and animation remain readable on low graphics settings and mobile.
7. It has a distinct reload and handling rhythm where appropriate.
8. A playtest confirms that the weapon is fun to use and fair to fight.

If a weapon fails this checklist, redesign it or leave it archived. Do not add another generic automatic rifle, generic burst rifle, or generic shotgun just to increase the count.

## 6. Balance guardrails

- The 40 active firearms are a content target, not a claim that all 40 must be built before the first playable prototype.
- The existing stat sheet is a starting balance reference only. Its firing cadence, damage and ammunition values must be revised to match these identities.
- Multi-projectile damage must be evaluated per projectile and as a complete pattern. Do not assume every pellet or fragment hits.
- Delayed, bouncing, returning, branching and arcing projectiles must have strict lifetime and object-count limits.
- No special projectile may pass through solid geometry unless that behaviour is explicitly described and separately approved.
- No projectile may home in on opponents unless a future design explicitly defines a bounded, visible and counterable lock mechanic.
- No cosmetic may change gameplay-relevant projectile visibility, hitbox size, travel speed, damage, timing, or audio priority.
