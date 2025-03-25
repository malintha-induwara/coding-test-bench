import { describe, it, expect } from "vitest";
import helloWorld from "../challenges/helloWorld.ts";

describe("helloWorld", () => {
  it("should return helloWorld ", () => {
    expect(helloWorld()).toBe("helloWorld");
  });   });