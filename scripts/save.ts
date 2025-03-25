import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const challangesDir = path.join(__dirname, "..", "src/challenges");
const archiveDir = path.join(__dirname, "..", "src/archive");

if (!fs.existsSync(archiveDir)) {
  fs.mkdirSync(archiveDir, { recursive: true });
}

function scanChallengesDirectory(): string[] {
  try {
    const files = fs.readdirSync(challangesDir);
    return files.map((file) => path.join(challangesDir, file));
  } catch (error) {
    console.error("Error scanning challenges directory:", error);
    return [];
  }
}

function extractNameFromPath(filePath: string): string {
  return filePath.split("/").pop()?.split(".")[0] || "";
}

function createChallengesIfNotExists(challenges: string[]) {
  for (const challenge of challenges) {
    const challengeName = extractNameFromPath(challenge);
    const archiveChallengePath = path.join(archiveDir, challengeName);
    if (!fs.existsSync(archiveChallengePath)) {
      fs.mkdirSync(archiveChallengePath, { recursive: true });
    }
  }
}

function getNextSolutionNumber(challengeName: string): number {
  const challengeDir = path.join(archiveDir, challengeName);
  try {
    const files = fs.readdirSync(challengeDir);
    const solutionFiles = files.filter((file) => file.startsWith(challengeName) && file.endsWith(".ts") && file.includes("solution"));

    if (solutionFiles.length === 0) {
      return 1;
    }

    const numbers = solutionFiles.map((file) => {
      const match = file.match(/solution(\d+)\.ts$/);
      return match ? parseInt(match[1], 10) : 0;
    });

    return Math.max(...numbers) + 1;
  } catch (error) {
    return 1;
  }
}

function saveChallengesToArchive(challenges: string[]) {
  for (const challenge of challenges) {
    const challengeName = extractNameFromPath(challenge);
    const nextNumber = getNextSolutionNumber(challengeName);
    const newSolutionPath = path.join(archiveDir, challengeName, `${challengeName}_solution${nextNumber}.ts`);

    fs.copyFileSync(challenge, newSolutionPath);
    console.log(`✅ Saved: ${challengeName}_solution${nextNumber}.ts`);
  }
}

function main() {
  // Scan the challenges directory
  const allChallanges = scanChallengesDirectory();
  // Check if the challenge exists if not create it
  createChallengesIfNotExists(allChallanges);
  // Save the challenges to the archive directory
  saveChallengesToArchive(allChallanges);
}

main();
