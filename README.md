# Coding Test Bench

Coding Test Bench is an easy way to practice and test coding challenges within your own editor. This project provides a structured environment to solve algorithms and data structure problems, test your solutions, and maintain an archive of your previous attempts.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/malintha-induwara/coding-test-bench.git
cd coding-test-bench
```

2. Install dependencies:

```bash
npm install
```

## Commands

| Command            | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `npm run generate` | Generates challenge files based on the configuration |
| `npm run test`     | Runs tests on your challenge solutions               |
| `npm run save`     | Archives your current solutions                      |
| `npm run clean`    | Cleans the challenges directory                      |

## Adding New Challenges

### 1. Define the challenge template

Add your challenge to `scripts/templates.ts`:

```typescript
{
  name: "newChallenge",
  template: "export default function newChallenge(param: ParamType): ReturnType {\n  \n}\n"
}
```

### 2. Update the challenges configuration

Add your challenge name to `challenges.config.json`:

```json
{
  "challenges": ["helloWorld","binarySearch", "bubbleSort", "findSum", "newChallenge"]
}
```

### 3. Create test cases

Create test files in the `__tests__` directory for your new challenge.

## Workflow

1. Generate challenges: `npm run generate`
2. Solve the challenges in the `src/challenges` directory
3. Run tests to verify your solutions: `npm run test`
4. Save your solutions to the archive: `npm run save`
5. Clean up for a fresh start: `npm run clean`

## Available Challenges

Currently, the following challenges are available:
- Hello World (For Testing)
- Binary Search
- Bubble Sort
- Find Sum

## Project Structure

```
test-bench/
├── src/
│   ├── challenges/      # Generated challenge files
│   ├── archive/         # Archived solutions
├── __tests__/           # Test files
├── scripts/             # Utility scripts
│   ├── save.ts          # Script to archive solutions
│   ├── templates.ts     # Challenge templates
├── challenges.config.json  # Challenge configuration
```

## Tech Stack

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
