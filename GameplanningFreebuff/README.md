# FLORA: BEYOND THE ORIGINS — Production Plan

**Status:** PROPOSED EXECUTION PLAN — not new canon.
**Scope:** everything required to turn this design repository into a playable Roblox experience.
**Owner:** project owner. Every recommendation in this folder needs owner approval before it becomes a decision.

This folder exists because the design repository is intentionally honest about what is undecided, and an implementation team still needs a plan it can execute today. It does not replace a single source document. It reads the existing world, plant, ability, creature, system, art and technical specifications and arranges them into build order, budgets, acceptance criteria and task packets.

If a document in this folder disagrees with a canonical FLORA document, **the canonical document wins**. If this folder proposes something the canonical documents leave open, the proposal is labelled and must not be treated as approved.

---

## Status language

Every statement in this folder is one of three things:

| Label | Meaning | How to treat it |
|---|---|---|
| **CONFIRMED** | Recorded in `00_Overview/Decisions.md` or another canonical document. | Build it. Do not redesign it. |
| **PROPOSED** | A production recommendation made here, or a proposal in a source document that the owner has not approved. | Useful for planning. Requires sign-off before it hardens into code or content. |
| **OPEN** | A question the repository deliberately leaves unanswered. | Do not invent an answer. Ask one focused question, or build around it. |

Numbers labelled **PROPOSED** are planning envelopes, not engine requirements. The technical documents explicitly refuse to invent performance targets before a measured prototype baseline. This plan respects that: it provides working envelopes so a team can plan, then requires the first vertical slice to replace them with measured values.

---

## Read this in order

| # | Document | What it answers |
|---|---|---|
| 1 | [Game definition and launch scope](01_Game_Definition.md) | What game are we making, for whom, and what does version 1.0 contain? |
| 2 | [Content readiness audit](02_Content_Readiness.md) | What content actually exists, what is missing, and what is genuinely buildable today? |
| 3 | [World build book](03_World_Build_Book.md) | In what order do we build the ten worlds, region by region, and what must each one prove? |
| 4 | [Technical blueprint](04_Technical_Blueprint.md) | Place architecture, data flow, remotes, save schema, streaming and performance gates. |
| 5 | [Art, audio and UX production](05_Art_Audio_UX.md) | Kits, plant and creature pipelines, VFX budgets, UI surfaces, audio layers and review gates. |
| 6 | [18-month production plan](06_Production_Plan.md) | Team, phases, sprints, scope math, launch scope and content cadence. |
| 7 | [QA, launch and live operations](07_QA_Launch_LiveOps.md) | Test matrix, performance evidence, launch runbook, rollback and live cadence. |
| 8 | [Risks and decisions](08_Risks_And_Decisions.md) | The risks that can kill the project and the twelve decisions that unblock it. |
| 9 | [Agent task packets](09_Agent_Task_Packets.md) | Paste-ready work orders for implementation agents, in dependency order. |

If you only have ten minutes, read this page, the launch-scope section of document 1, and the readiness scoreboard in document 2.

---

## The plan in one page

**The game.** A third-person Roblox exploration adventure across enormous botanical worlds. Players read a landscape, find a plant in its habitat, scan it to own its complete ability set, research it to unlock those abilities one by one, and use them to traverse, fight and solve encounters. Exploration, attacking and plant powers are the three confirmed pillars.

**The content that exists as design.** 10 worlds, 60 regions (30 major, 30 hidden), 50 plants, 162 abilities across 50 sets, 10 creatures, 78 concept images, 60 region folders of which 54 have art, 50 empty plant art folders, and a complete JSON export of all of it.

**The content that exists as a game.** Nothing. There is no `.rbxl`, no Rojo project, no Luau module and no uploaded asset ID in this repository. Every hour of implementation is still ahead.

**The honest schedule.** A launch with **two complete worlds** — Auralis and Myrrwood — is achievable in roughly **18 months** with a focused team of eight and disciplined scope control. That is 12 regions, 10 plants, 30 abilities, 4 creatures and the complete discovery-to-mastery loop. Adding Caldera Reach at launch needs either three more months or three more people. Producing all ten worlds is a **three-to-four-year program**, not a launch plan. The math is in document 6.

**The first milestone.** A 12-week vertical slice in Auralis: Sunthread Fields plus The Whispering Hollows, three complete plant sets, one creature encounter, scanner, research, archive, loadout and server-authoritative save. It must hold its frame budget on a real mid-range phone before anyone builds a second biome.

**The first thing that must happen.** The 66 abilities without a confirmed gameplay role, the missing encounter roster, the missing map layouts and the open loadout rules are not implementation details. They are the design inputs that determine what the engineers build. Document 8 lists the twelve decisions and the week by which each one is needed.

---

## How to use this plan by role

**Project owner.** Read documents 1, 6 and 8. Approve or reject the launch scope, place architecture, encounter direction and loadout rules. Nothing else in this folder needs your signature.

**Creative director / designer.** Own documents 1, 2, 3 and the design rows in 8. Resolve ability roles before the ability runtime is built, not after.

**Lead engineer.** Own document 4. Build the spine — data loader, save schema, remotes, ability state machine, streaming test harness — before content tooling. Use the task packets in document 9.

**Environment art lead.** Own document 3 and the environment half of document 5. Greybox each region, profile it, then art-pass it. Never art-pass an unprofiled greybox.

**Character / plant artist.** Own the plant and creature pipeline in document 5. The 50 plant folders are empty; the prompts exist. The art is not the bottleneck the ability design is.

**Producer.** Own documents 6 and 7. Protect the vertical slice gate. A slipped biome is cheaper than a slipped architecture.

**Implementation agent.** Read the repository `AGENTS.md`, `plan/AI_MASTER_INSTRUCTIONS.md`, then document 9. Work one packet at a time. Report what was verified in Studio and what was not.

---

## What this folder is not

- It is **not** a replacement for `00_Overview/`, `01_Worlds/`, `02_Content/`, `04_Systems/` or `07_Technical/`.
- It is **not** permission to rename, renumber or restructure stable IDs. `WORLD_001`, `PLANT_31`, `PLANT_31_A01` and `CRE-001` are contracts.
- It is **not** a lore bible. It adds no species, regions, landmarks, characters, factions or history.
- It is **not** a monetization plan. Economy, pricing and long-term collection systems are OPEN and must stay unimplemented until the owner decides.
- It is **not** a promise of a launch date. Dates are planning targets derived from the scope math, not commitments.

---

## Repository map for this plan

| Need | Canonical location |
|---|---|
| Confirmed decisions and open questions | [`00_Overview/Decisions.md`](../00_Overview/Decisions.md) |
| Core loop | [`00_Overview/Core_Loop.md`](../00_Overview/Core_Loop.md) |
| Rarity ladder and set-size guidance | [`00_Overview/Rarity_Standard.md`](../00_Overview/Rarity_Standard.md) |
| World specifications | [`01_Worlds/`](../01_Worlds/README.md) |
| Plant catalogue | [`02_Content/Plants/`](../02_Content/Plants/README.md) |
| Creature catalogue | [`02_Content/Creatures/`](../02_Content/Creatures/README.md) |
| Ability set specifications | [`03_Content/Abilities/`](../03_Content/Abilities/README.md) |
| System rules | [`04_Systems/`](../04_Systems/README.md) |
| All concept art | [`05_Presentation/Concept_Art/`](../05_Presentation/Concept_Art/README.md) |
| Generated design data | [`07_Technical/Data/`](../07_Technical/Data/README.md) |
| Materials and lighting baseline | [`07_Technical/Materials_And_Lighting.md`](../07_Technical/Materials_And_Lighting.md) |
| Architecture and world building | [`07_Technical/README.md`](../07_Technical/README.md) |
| Existing production roadmap | [`06_Production/Roadmap.md`](../06_Production/Roadmap.md) |
| Agent rules | [`AGENTS.md`](../AGENTS.md) and [`plan/AI_MASTER_INSTRUCTIONS.md`](../plan/AI_MASTER_INSTRUCTIONS.md) |

---

## Change discipline for this folder

1. This folder contains plans, not source content. When a proposal here is approved, record the decision in `00_Overview/Decisions.md` first, then update the plan.
2. When a world, plant, ability or creature document changes, regenerate the data export with `node 07_Technical/Data/generate.mjs` and update the affected table in document 2.
3. Do not silently edit numbers in document 6 to make a milestone look achievable. Change the scope or the team, and say so.
4. Do not add content names, regions or mechanics to this folder that do not already exist in the repository.
5. If implementation reveals that a plan assumption is wrong, write the correction in the risk register rather than quietly deleting the assumption.
