import { mkdirSync, writeFileSync } from "node:fs";

// Monday reviewed in one line — byte-for-byte, single line, no trailing newline.
const LINE = "Monday reviewed: one star, too early, too loud, and it arrived before the coffee did.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
