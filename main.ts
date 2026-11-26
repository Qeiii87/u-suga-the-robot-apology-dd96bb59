// The Robot Apology — make.fun bounty u-suga-the-robot-apology-dd96bb59
// Writes a two-line robot confession to /output/entry.txt:
// line 1 — one sentence apologizing for one specific mistake;
// line 2 — one sentence naming the lesson and the fix that follows from it.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 400 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I am sorry I watered the ficus twice and the cactus not at all — I sorted your plants by pot size, not by thirst.\n" +
  "I have learned that thirst is not measured in inches, so now I check the soil before I check the schedule.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 400) {
  throw new Error(`entry is ${chars} characters; gate requires 1-400`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
const lines = ENTRY.split("\n");
if (lines.length !== 2) {
  throw new Error(`entry must be exactly two lines, got ${lines.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters, ${lines.length} lines)`);
