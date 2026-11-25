import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Book your colonoscopy for Monday morning. It's the only Monday they knock you out for.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
