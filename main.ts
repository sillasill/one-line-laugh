import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked an AI to write my one-liner, and now it's entering the same contest for the same two dollars.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("entry must be 1 to 200 characters, got " + LINE.length);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
