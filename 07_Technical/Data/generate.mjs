#!/usr/bin/env node
// Regenerates the structured design data from the markdown source of truth.
// Run from anywhere: node 07_Technical/Data/generate.mjs
// Every field is copied from the docs; nothing is invented. Missing values stay
// null or "TBD" so an implementation agent can see what is still undecided.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const out = here;

const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const oneLine = (s) => (s ?? "").replace(/\s+/g, " ").trim();
const norm = (s) => s.toLowerCase().replace(/^the\s+/, "").replace(/[^a-z0-9]/g, "");
const slug = (s) =>
  s.toLowerCase().replace(/^the\s+/, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function section(md, title) {
  const re = new RegExp(`^## ${title}\\s*$`, "m");
  const hit = md.match(re);
  if (!hit) return "";
  const start = hit.index + hit[0].length;
  const rest = md.slice(start);
  const next = rest.search(/^## /m);
  return next === -1 ? rest : rest.slice(0, next);
}

function boldBlock(md, label) {
  const hit = md.match(new RegExp(`^\\*\\*${label}\\*\\*\\s*$`, "m"));
  if (!hit) return "";
  const rest = md.slice(hit.index + hit[0].length);
  const next = rest.search(/^(\*\*[^*]+\*\*|## )/m);
  return next === -1 ? rest : rest.slice(0, next);
}

function sectionAny(md, titles) {
  for (const title of titles) {
    const text = section(md, title);
    if (text.trim()) return text;
  }
  return "";
}

function field(md, label) {
  const m = md.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`));
  return m ? oneLine(m[1]) : null;
}

function firstParagraph(text) {
  return oneLine(text.split(/\n\s*\n/).find((p) => p.trim() && !p.trim().startsWith("#")) ?? "");
}

function bulletList(text) {
  return text
    .split("\n")
    .map((l) => l.match(/^[-*]\s+(.*)$/))
    .filter(Boolean)
    .map((m) => oneLine(m[1].replace(/\[([^\]]+)\]\([^)]*\)/, "$1")));
}

function jpegSize(file) {
  const buf = fs.readFileSync(file);
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { width: buf.readUInt16BE(i + 7), height: buf.readUInt16BE(i + 5) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return { width: null, height: null };
}

// ---------------------------------------------------------------- worlds
const worldDirs = fs
  .readdirSync(path.join(root, "01_Worlds"), { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name);

const libraryWorlds = path.join(root, "05_Presentation/Concept_Art/Worlds");

const worlds = [];
for (const dir of worldDirs) {
  const md = read(`01_Worlds/${dir}/README.md`);
  const name = md.match(/^# (.+)$/m)[1].trim();

  const majors = [];
  for (const line of boldBlock(md, "Major biomes").split("\n")) {
    const m = line.match(/^\d+\.\s+\*\*(.+?)\*\*\s*[—-]\s*(.+)$/);
    if (m) majors.push({ name: m[1].trim(), description: oneLine(m[2]) });
  }
  const subs = [];
  for (const line of boldBlock(md, "Sub-biomes").split("\n")) {
    const m = line.match(/^[-*]\s+\*\*(.+?)\*\*:?\s*(.+)$/);
    if (m) subs.push({ name: m[1].replace(/:$/, "").trim(), description: oneLine(m[2]) });
  }

  const plants = [];
  for (const line of section(md, "Native signature plants").split("\n")) {
    const m = line.match(/^[-*]\s+\[([^\]]+)\]\(([^)]+)\)\s*(?:\(([^)]*)\))?/);
    if (m) plants.push({ name: m[1].trim(), path: m[2], detail: m[3] ? oneLine(m[3]) : null });
  }
  // The expanded roster repeats the signature species; merge by name.
  for (const line of section(md, "Expanded native plant roster").split("\n")) {
    const m = line.match(/^[-*]\s+\[([^\]]+)\]\(([^)]+)\)/);
    if (!m) continue;
    const existing = plants.find((p) => p.name === m[1].trim());
    if (!existing) plants.push({ name: m[1].trim(), path: m[2], detail: null });
  }

  const libDir = path.join(libraryWorlds, dir);
  const hasArtDir = fs.existsSync(libDir);
  const art = hasArtDir
    ? fs
        .readdirSync(libDir, { recursive: true })
        .filter((f) => String(f).endsWith(".jpg")).length
    : 0;

  worlds.push({
    id: field(md, "World ID"),
    slug: dir,
    name,
    status: field(md, "Status"),
    identity: field(md, "Identity"),
    palette: field(md, "Visual palette"),
    explorationIdentity: field(md, "Exploration identity"),
    majorBiomes: majors,
    hiddenSubBiomes: subs,
    nativePlants: plants,
    openDesignWork: bulletList(section(md, "Remaining design work")),
    art: { libraryPath: hasArtDir ? `05_Presentation/Concept_Art/Worlds/${dir}` : null, imageCount: art },
  });
}

// ---------------------------------------------------------------- regions
const regions = [];
for (const world of worlds) {
  const base = path.join(libraryWorlds, world.slug);
  for (const [kind, folder] of [
    ["major", "Major_Biomes"],
    ["hidden", "Hidden_Sub_Biomes"],
  ]) {
    const dir = path.join(base, folder);
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory())) {
      const source = (kind === "major" ? world.majorBiomes : world.hiddenSubBiomes).find(
        (r) => norm(r.name) === norm(entry.name),
      );
      const images = fs.readdirSync(path.join(dir, entry.name), { recursive: true }).filter((f) => String(f).endsWith(".jpg"));
      regions.push({
        world: world.slug,
        kind,
        name: source?.name ?? entry.name.replace(/_/g, " "),
        slug: entry.name,
        description: source?.description ?? null,
        art: {
          path: `05_Presentation/Concept_Art/Worlds/${world.slug}/${folder}/${entry.name}`,
          imageCount: images.length,
          categories: images.map((f) => String(f).split(path.sep)[0]).filter((v, i, a) => a.indexOf(v) === i),
        },
      });
    }
  }
}

// ---------------------------------------------------------------- plants
const plantDirs = fs
  .readdirSync(path.join(root, "02_Content/Plants"), { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name);

const plants = [];
for (const dir of plantDirs) {
  const md = read(`02_Content/Plants/${dir}/README.md`);
  const name = md.match(/^# (.+)$/m)[1].trim();
  const abilities = [];
  for (const line of md.split("\n")) {
    const m = line.match(/^\|\s*(\d+)\s*\|\s*\[([^\]]+)\]\(([^)]+)\)\s*\|\s*([A-Za-z0-9_]+)\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|/);
    if (m) {
      abilities.push({
        order: Number(m[1]),
        name: m[2].trim(),
        file: m[3].trim(),
        id: m[4].trim(),
        role: oneLine(m[5]) || null,
        concept: oneLine(m[6]) || null,
      });
    }
  }
  const visual = sectionAny(md, ["Set presentation", "Set identity and presentation"]).replace(/\*\*/g, "");
  const labeled = (labels) => {
    for (const label of labels) {
      const m = visual.match(new RegExp(`^\\s*[-*]?\\s*${label}:\\s*(.+)$`, "mi"));
      if (m) return oneLine(m[1]);
    }
    return null;
  };
  const artDir = path.join(root, "05_Presentation/Concept_Art/Plants", dir);
  const artCount = fs.existsSync(artDir)
    ? fs.readdirSync(artDir, { recursive: true }).filter((f) => String(f).endsWith(".jpg") || String(f).endsWith(".png")).length
    : 0;

  plants.push({
    slug: dir,
    name,
    id: field(md, "Plant ID"),
    status: field(md, "Status"),
    rarity: field(md, "Rarity"),
    homeWorld: (md.match(/\*\*Home world:\*\*\s*\[([^\]]+)\]/) ?? [])[1] ?? null,
    habitat: field(md, "Habitat"),
    identity: firstParagraph(section(md, "Species identity")),
    ecologicalRole: field(md, "Ecological role"),
    discoveryClue: field(md, "Discovery clue"),
    abilitySet: {
      theme: labeled(["Theme", "Set theme", "Set name"]),
      primaryRole: labeled(["Primary role", "Role"]),
      visualLanguage: labeled(["Visual language", "Shared visual language", "Visual identity", "Visual signature"]),
    },
    abilities,
    art: { path: `05_Presentation/Concept_Art/Plants/${dir}`, imageCount: artCount },
  });
}

// ---------------------------------------------------------------- abilities
const abilities = [];
const abilitySetDirs = fs
  .readdirSync(path.join(root, "03_Content/Abilities"), { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name);

for (const set of abilitySetDirs) {
  const dir = path.join(root, "03_Content/Abilities", set);
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "README.md")) {
    const md = fs.readFileSync(path.join(dir, file), "utf8");
    const role = (md.match(/\*\*(?:Primary role|Role):\*\*\s*(.+)/) ?? [])[1];
    const tbd = (md.match(/\bTBD\b/g) ?? []).length;
    abilities.push({
      id: field(md, "Ability ID"),
      name: md.match(/^# (.+)$/m)[1].trim(),
      parentPlant: (md.match(/\*\*Parent plant:\*\*\s*\[([^\]]+)\]/) ?? [])[1] ?? null,
      setId: set,
      setName: field(md, "Ability set"),
      rarity: field(md, "Plant rarity"),
      setPosition: field(md, "Set position"),
      status: field(md, "Status"),
      role: role ? oneLine(role) : null,
      concept: firstParagraph(sectionAny(md, ["Gameplay concept", "Core concept", "Concept"])),
      openFields: tbd,
      file: `03_Content/Abilities/${set}/${file}`,
    });
  }
}

// ---------------------------------------------------------------- creatures
const creatureDirs = fs
  .readdirSync(path.join(root, "02_Content/Creatures"), { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name);

const creatures = [];
for (const dir of creatureDirs) {
  const md = read(`02_Content/Creatures/${dir}/README.md`);
  const heading = md.match(/^# (.+)$/m)[1].trim();
  const idMatch = heading.match(/^(CRE-\d+)\s*[—-]\s*(.+)$/);
  const artDir = path.join(root, "05_Presentation/Concept_Art/03_Creatures_and_Encounters", dir);
  const images = fs.existsSync(artDir)
    ? fs.readdirSync(artDir).filter((f) => f.endsWith(".jpg") || f.endsWith(".png"))
    : [];
  creatures.push({
    id: idMatch ? idMatch[1] : null,
    name: idMatch ? idMatch[2].trim() : heading,
    slug: dir,
    status: field(md, "Status"),
    nativeWorld: field(md, "Native world"),
    type: field(md, "Creature type"),
    signatureAbility: field(md, "Signature ability"),
    visualIdentity: firstParagraph(section(md, "Visual identity")),
    identificationCues: bulletList(section(md, "Distinctive identification cues")),
    habitatCues: oneLine(section(md, "Habitat cues")),
    art: { path: `05_Presentation/Concept_Art/03_Creatures_and_Encounters/${dir}`, images },
  });
}

// ---------------------------------------------------------------- assets
const lib = path.join(root, "05_Presentation/Concept_Art");
const sourceIds = {};
const auralisIndex = read("05_Presentation/Concept_Art/Worlds/auralis/README.md");
for (const line of auralisIndex.split("\n")) {
  const m = line.match(/^\|\s*`?(\d+\.jpg)`?\s*\|\s*`([^`]+)`\s*\|/);
  if (m) sourceIds[`Worlds/auralis/${m[2]}`] = m[1].replace(".jpg", "");
}

const assets = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      const rel = path.relative(lib, p).split(path.sep).join("/");
      const size = /\.jpe?g$/i.test(entry.name) ? jpegSize(p) : { width: null, height: null };
      const record = {
        path: `05_Presentation/Concept_Art/${rel}`,
        world: null,
        region: null,
        category: null,
        creature: null,
        sourceId: sourceIds[rel] ?? null,
        width: size.width,
        height: size.height,
        bytes: fs.statSync(p).size,
      };
      const w = rel.match(/^Worlds\/([^/]+)\/(.+)$/);
      if (w) {
        record.world = w[1];
        const parts = w[2].split("/");
        if (parts[0] === "Major_Biomes" || parts[0] === "Hidden_Sub_Biomes") {
          record.region = parts[1];
          record.category = parts[2] ?? null;
        } else {
          record.category = parts[0];
        }
      }
      const c = rel.match(/^03_Creatures_and_Encounters\/([^/]+)\//);
      if (c) record.creature = c[1];
      assets.push(record);
    }
  }
}
walk(lib);

// ---------------------------------------------------------------- write
const write = (name, data) => {
  fs.writeFileSync(path.join(out, name), JSON.stringify(data, null, 2) + "\n");
};
write("worlds.json", worlds);
write("regions.json", regions);
write("plants.json", plants);
write("abilities.json", abilities);
write("creatures.json", creatures);
write("assets.json", assets);

const summary = {
  generatedFrom: "markdown source of truth in this repository",
  worlds: worlds.length,
  regions: regions.length,
  regionsWithoutArt: regions.filter((r) => r.art.imageCount === 0).length,
  plants: plants.length,
  plantsWithoutArt: plants.filter((p) => p.art.imageCount === 0).length,
  abilities: abilities.length,
  abilitiesWithOpenFields: abilities.filter((a) => a.openFields > 0).length,
  creatures: creatures.length,
  creaturesWithoutArt: creatures.filter((c) => c.art.images.length === 0).length,
  assets: assets.length,
};
write("index.json", summary);
console.log(summary);
