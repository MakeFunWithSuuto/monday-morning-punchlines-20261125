import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I book my colonoscopy for Monday morning. Sunday night is already ruined, and at least the gastroenterologist knocks me out first.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
