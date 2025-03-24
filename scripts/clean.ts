import * as fs from "fs";
import * as path from "path";
import { exec } from "child_process";
import { promisify } from "util";
import { fileURLToPath } from "url";

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const challengesDir = path.join(__dirname, "..", "src/challenges");

async function clean() {
  try {
    console.log("🧹 Cleaning solutions directory...");
    if (fs.existsSync(challengesDir)) {
      const files = fs.readdirSync(challengesDir);
      for (const file of files) {
        const filePath = path.join(challengesDir, file);
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
          fs.unlinkSync(filePath);
          console.log(`Deleted: ${filePath}`);
        } else if (stats.isDirectory()) {
          fs.rmSync(filePath, { recursive: true, force: true });
          console.log(`Deleted directory: ${filePath}`);
        }
      }

      console.log("✅ Solutions directory cleaned successfully.");
    } else {
      console.log("⚠️ Solutions directory does not exist. Creating it...");
      fs.mkdirSync(challengesDir, { recursive: true });
    }

    console.log("Running generate command...");
    const { stdout, stderr } = await execAsync("npm run generate");

    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);

    console.log("✅ Clean and generate process completed successfully.");
  } catch (error) {
    console.error("⚠️ Error during clean process:", error);
    process.exit(1);
  }
}

clean();
