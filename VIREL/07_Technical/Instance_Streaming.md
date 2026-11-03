# Instance Streaming Strategy

**Status:** PROPOSED TECHNICAL STANDARD

## Why VIREL needs streaming
VIREL has large worlds with multiple biomes, caves, hidden areas and dense vegetation. Sending the entire map to every client at join would increase load time and memory pressure.

Roblox instance streaming loads and unloads eligible Workspace content around the player. It is especially valuable for large environments.

## Studio settings
Verify these settings in every world place:
- StreamingEnabled: enabled.
- ModelStreamingBehavior: Improved.
- StreamingIntegrityMode: PauseOutsideLoadedArea.
- StreamingMinRadius: begin with the default 64.
- StreamingTargetRadius: begin with the default 1024.
- StreamOutBehavior: consider Opportunistic after testing.
- SLIM: evaluate for static environment models.

Roblox's streaming guide recommends Improved model streaming and describes these related controls: https://create.roblox.com/docs/workspace/streaming/techniques

## Model design
- Group models by logical and spatial purpose.
- Keep a model's bounding volume compact.
- Split huge structures into separate modules.
- Use Atomic only when descendants need to appear together.
- Use Persistent only for rare objects that truly must remain loaded.
- Do not make the whole map persistent.
- Avoid assuming a Workspace instance exists on every client at all times.

## Script safety
With streaming enabled, a client may not have distant Workspace instances yet, and streamed instances can later disappear.
- Wait for relevant objects when they become available.
- Handle missing references safely.
- Reconnect when a streamed model returns.
- Do not store permanent references to temporary streamed objects.
- Keep authoritative logic on the server.
- Do not make core progression depend on a client-only map instance.

## Fast movement and abilities
VIREL has glides, pulls, temporary routes and high-speed traversal proposals. Test whether the next region streams in before the player reaches it. Use predictive streaming only after measuring and testing its behaviour. Avoid increasing streaming radii blindly, because larger radii use more memory and bandwidth.

## Validation
Test walking, sprinting, gliding, teleporting, respawning and joining a running session near region boundaries. Verify that gameplay anchors and encounter state recover correctly after stream-in.
