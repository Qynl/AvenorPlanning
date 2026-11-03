# VIREL — Cinematics and Presentation

**Status:** Direction confirmed; individual sequences below are ideas for design and prototyping, not all approved features.

## 1. Presentation goals

VIREL should feel like a cinematic exploration adventure. The camera, sound, animation and environmental staging should make discoveries memorable while keeping the player in control.

Core rules:
- Third-person remains the normal gameplay camera.
- Cinematic framing is used for inspection, scanning and meaningful discoveries.
- Ordinary interactions stay brief; major story moments can take more time.
- Offer skip controls for longer sequences.
- Avoid repeatedly showing the same full animation for a species the player already knows.
- Never make a cutscene the only way to receive essential gameplay information.
- In multiplayer, avoid forcing every nearby player to watch another player's private discovery.

## 2. Cinematic categories

### A. Micro-cinematics
Very short camera moments during normal play:
- Camera leans toward a plant as its unusual feature becomes visible.
- Scanner view briefly focuses on a leaf pattern, root structure, pollen or movement.
- A plant reacts to the player's proximity or a field interaction.
- A newly revealed clue is highlighted in the environment.

These should be quick, repeatable and easy to skip or disable.

### B. Discovery reveals
Used when the player records a species for the first time:
- The camera frames the plant's silhouette and habitat.
- A short animation shows its signature behaviour.
- The scanner identifies one or two defining traits.
- The discovery is added to the field journal/archive.

Rarity can affect presentation intensity, but avoid making every rare plant use the same generic glow effect.

### C. Major discovery sequences
Reserved for exceptional finds:
- A hidden species emerges only after a chain of clues.
- A huge organism reveals its scale after the player enters its habitat.
- Several related plants react together, revealing an ecological relationship.
- A previously inaccessible area opens after the player understands a biological mechanism.

### D. World arrival cinematics
When a new world enters the active rotation:
- Show a sweeping view of its landscape.
- Introduce a distinctive environmental sound or visual motif.
- Briefly reveal several distant landmarks without explaining everything.
- Let players take control quickly and explore the mystery themselves.

### E. Story and event cinematics
Potential uses:
- A major environmental event changes a region.
- A dormant ecosystem awakens.
- An expedition discovers evidence of an ancient research project.
- A world begins to transform before leaving the active rotation.
- A new area or world becomes accessible through a story milestone.

These ideas should support exploration rather than turn VIREL into a cutscene-only story game.

### F. Ability unlock sequences
When research leads to a new ability:
- Show the discovery that explains the ability.
- Present a short visual metaphor for what the ability does.
- Let the player test it immediately in a safe nearby space.
- Make the ability's practical use clear without a long tutorial.

## 3. Additional ideas to prototype

- **First encounter versus repeat encounter:** the first reveal is cinematic; later scans use a faster compact animation.
- **Player field journal:** a beautiful page or holographic botanical record is assembled from sketches, scan data and field notes.
- **Environmental foreshadowing:** before a rare organism appears, players might notice unusual sounds, drifting spores, altered wildlife behaviour or a change in local plant movement.
- **Camera-aware habitats:** a discovery location is staged so the player naturally sees the important silhouette or landmark without a forced camera lock.
- **Shared expedition moments:** party members can gather around a major discovery, with an optional synchronized reveal.
- **World transition event:** returning players see a short news/archive entry and a world-map change, while players already online can witness the transition live.
- **Cinematic sound identity:** each world and major species family has recognizable ambient sounds and musical motifs.
- **Discovery recap:** after a longer expedition, the journal summarizes the most important finds and newly understood clues.

## 4. Multiplayer rules to decide

- Are first-discovery reveals private to the discovering player or visible to nearby teammates?
- Can a party choose to synchronize major discovery scenes?
- Can players move freely while another player's cinematic plays?
- How should simultaneous first discoveries be credited?
- Should world-arrival scenes play for everyone online, or only be available as an optional replay?

Recommended starting point: keep ordinary scans private and local; allow optional party synchronization for major discoveries; never freeze unrelated players.

## 5. Accessibility and comfort

- Skip longer cutscenes.
- Provide reduced camera movement and reduced screen-effect options.
- Avoid rapid flashes and unnecessarily intense camera shake.
- Keep subtitles for important dialogue and audio clues.
- Ensure essential information is also available in the journal or UI.
- Restore movement and camera controls correctly after every sequence.

## 6. Production approach

Do not build dozens of bespoke cutscenes before the core loop is fun.

1. Prototype one reusable inspection camera sequence.
2. Create one first-discovery reveal for a common species.
3. Create one special reveal for an exceptional species.
4. Create one world-arrival cinematic.
5. Test skip behaviour, multiplayer edge cases and mobile performance.
6. Expand the library only after the presentation system is reliable.

## 7. Open questions

- Exact camera language and animation style.
- Whether there is a story campaign or primarily environmental storytelling.
- Whether the player character speaks.
- How often full cutscenes should occur.
- Which scenes are local, party-synchronized or global.
- Whether players can replay major scenes from an archive.
