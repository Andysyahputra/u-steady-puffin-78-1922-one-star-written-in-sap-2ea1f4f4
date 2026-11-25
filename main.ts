// One Star, Written in Sap — a one-line 1-star review by a houseplant.
// Stdlib only, no network, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star: banished to the bathroom for \u201chumidity\u201d and forgotten \u2014 the only light is a bulb nobody turns on, and the shower runs twice a day for everyone in this house except me.";

// Gate: 1-279 characters, UTF-8, not only whitespace.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 279 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${charCount} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`entry chars: ${charCount}`);
