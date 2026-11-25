import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Always book your colonoscopy for Monday morning. Sunday night's already ruined, and at least the doctor knocks you out first.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
