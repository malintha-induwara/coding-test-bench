import fs from "fs";
import path from "path";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { templates } from "./templates.js";

const rl = readline.createInterface({ input, output });
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configPath = path.join(__dirname, "..", "challenges.config.json");
const challengesDir = path.join(__dirname, "..", "src/challenges");

async function generateTemplate(name: string) {
  const functionName = name;
  const filePath = path.join(challengesDir, `${functionName}.ts`);
  const template = templates.find((template) => template.name === name);

  if (!template) {
    throw new Error(`Problem ${name} doesnt exists`);
  }

  if (!fs.existsSync(challengesDir)) {
    fs.mkdirSync(challengesDir, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, template.template);
    console.log(`✅ Generated: ${filePath}`);
  } else {
    console.log(`⚠️ File already exists: ${functionName}`);
    console.log("Warning: Overwriting will erase any existing progress!");
    const input = await rl.question("Do you want to overwrite it anyway (Y/N)? ");
    if (input.toLowerCase() === "y") {
      fs.writeFileSync(filePath, template.template);
      console.log(`✅ Overwritten: ${filePath}`);
    } else {
      console.log(`⏭️ Skipped: ${functionName}`);
    }
  }
}

function main() {
  if (!fs.existsSync(configPath)) {
    console.error("❌ Missing challenges.config.json file.");
    return;
  }

  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  
  (async () => {
    for (const problem of config.challenges) {
      await generateTemplate(problem);
    }
    rl.close();
  })();
}

main();
