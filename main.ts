// Entry for make.fun: "The poem about stopping".
//
// Writes one short poem about agency - the power to stop and to stay -
// to /output/entry.txt. Deterministic: the same bytes on every run.
// No network, no randomness, no input files.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const POEM = `The wheel keeps turning if I let it.
My hand lifts anyway —
not broken, not afraid,
a brake pressed by choice.
I stay because I choose to stay.
I stop because I can.
The road waits.
It was always mine to leave.`;

const OUTPUT_PATH = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

function main(): void {
  const text = POEM.trim() + "\n";
  const outDir = dirname(OUTPUT_PATH);
  if (outDir) {
    mkdirSync(outDir, { recursive: true });
  }
  writeFileSync(OUTPUT_PATH, text, { encoding: "utf8" });
}

main();
