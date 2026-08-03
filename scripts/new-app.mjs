#!/usr/bin/env node
/**
 * Usage: pnpm new-app
 *
 * Interactively scaffolds packages/themes/src/apps/<id>.ts and registers
 * it in packages/themes/src/index.ts. This is the entire "launch a new
 * app" workflow for the config itself — copy, colors, and audience.
 * You'll still want to: drop in real logo/icon assets, set up the
 * domain/EAS build profile, and write real copy before it's market-ready.
 */
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { writeFileSync, readFileSync } from "node:fs";
import path from "node:path";

const rl = createInterface({ input: stdin, output: stdout });
const ask = (q) => rl.question(q);

const id = (await ask("App id (kebab-case, e.g. recipe-roulette): ")).trim();
const name = (await ask("Display name: ")).trim();
const tagline = (await ask("One-line tagline: ")).trim();
const audienceLabel = (await ask("Audience (e.g. 'Busy parents 30-45'): ")).trim();
const primary = (await ask("Primary color (hex, e.g. #6C4CE0): ")).trim();
const background = (await ask("Background color (hex): ")).trim();
const heroHeadline = (await ask("Hero headline: ")).trim();
const ctaPrimary = (await ask("Primary CTA text (e.g. 'Get started free'): ")).trim();

rl.close();

const varName = id.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

const fileContent = `import type { AppConfig } from "../types";

export const ${varName}: AppConfig = {
  id: "${id}",
  name: "${name}",
  tagline: "${tagline}",

  audience: {
    label: "${audienceLabel}",
    tone: "friendly",
  },

  domain: "${id}.app",
  store: {},

  theme: {
    colors: {
      background: "${background}",
      surface: "#FFFFFF",
      text: "#1A1A1A",
      textMuted: "#6B6B6B",
      primary: "${primary}",
      primaryContrast: "#FFFFFF",
      accent: "${primary}",
      success: "#4CAF7D",
      danger: "#E0574C",
    },
    fonts: {
      display: "Inter",
      body: "Inter",
    },
    radius: "md",
    logo: "/brands/${id}/logo.svg",
  },

  copy: {
    heroHeadline: "${heroHeadline}",
    heroSubhead: "${tagline}",
    ctaPrimary: "${ctaPrimary}",
  },

  features: {},
};
`;

const themesDir = path.resolve("packages/themes/src/apps");
const filePath = path.join(themesDir, `${id}.ts`);
writeFileSync(filePath, fileContent);
console.log(`\nCreated ${filePath}`);

const indexPath = path.resolve("packages/themes/src/index.ts");
let indexContent = readFileSync(indexPath, "utf-8");
indexContent = indexContent.replace(
  `import { focusFlow } from "./apps/focus-flow";`,
  `import { focusFlow } from "./apps/focus-flow";\nimport { ${varName} } from "./apps/${id}";`
);
indexContent = indexContent.replace(
  `[focusFlow.id]: focusFlow,`,
  `[focusFlow.id]: focusFlow,\n  [${varName}.id]: ${varName},`
);
writeFileSync(indexPath, indexContent);
console.log(`Registered "${id}" in packages/themes/src/index.ts`);

console.log(`\nNext steps:
  1. Add a logo at apps/web/public/brands/${id}/logo.svg
  2. Run web:    APP_ID=${id} pnpm dev:web
  3. Run mobile: APP_ID=${id} pnpm dev:mobile
  4. Refine copy/colors directly in packages/themes/src/apps/${id}.ts
`);
