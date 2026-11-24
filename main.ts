// Seventeen Syllables of Debugging — make.fun entry
// Writes one original haiku about debugging to /output/entry.txt.
// Node 22+, no dependencies, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU = [
  "Cursor blinks at three",
  "the log scrolls past, line by line",
  "and the bug was me",
].join("\n") + "\n";

// Guard the gate: exactly 3 lines, 1-200 characters, valid UTF-8 text.
const lines = HAIKU.trimEnd().split("\n");
if (lines.length !== 3 || HAIKU.length > 200 || HAIKU.trim().length === 0) {
  throw new Error("haiku failed its shape check");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU, "utf8");
