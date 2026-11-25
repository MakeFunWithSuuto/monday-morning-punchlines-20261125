import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  'I booked my colonoscopy for Monday morning—best sleep of my week, and still less invasive than "How was your weekend?"';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
