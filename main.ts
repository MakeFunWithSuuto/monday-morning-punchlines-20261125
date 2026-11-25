import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I book my colonoscopy for Monday morning. Sunday night's already ruined, and at least the doctor knocks me out first.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
