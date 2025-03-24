import { describe, it, expect } from "vitest";
import findSum from "../challenges/findSum.ts";

let number = 12345;

describe("findSum", () => {
  it("should find calculate the sum of the number", () => {
    expect(findSum(number)).toBe(15);
  });
});
