import { defineConfig } from "vitest/config";
import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configPath = path.join(__dirname, "challenges.config.json");
const challengesConfig = JSON.parse(fs.readFileSync(configPath, "utf8"));
const enabledChallenges = challengesConfig.challenges || [];

const includePatterns = enabledChallenges.map((challenge) => `**/${challenge}.test.{js,jsx,ts,tsx}`);

export default defineConfig({
  test: {
    include: includePatterns,
  },
});
