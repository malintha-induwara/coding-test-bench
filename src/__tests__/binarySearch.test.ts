import { describe, it, expect } from "vitest";
import binarySearch from "../challenges/binarySearch.ts";

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("binarySearch", () => {
  it("should find an element in the middle of the array", () => {
    expect(binarySearch(array, 5)).toBe(4);
  });

  it("should find the first element of the array", () => {
    expect(binarySearch(array, 1)).toBe(0);
  });

  it("should find the last element of the array", () => {
    expect(binarySearch(array, 10)).toBe(9);
  });

  it("should return -1 for elements not in the array", () => {
    expect(binarySearch(array, 11)).toBe(-1);
    expect(binarySearch(array, 0)).toBe(-1);
    expect(binarySearch(array, -5)).toBe(-1);
  });

  it("should handle empty arrays", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it("should work with arrays containing a single element", () => {
    expect(binarySearch([42], 42)).toBe(0);
    expect(binarySearch([42], 41)).toBe(-1);
  });

  it("should work with arrays containing duplicate elements", () => {
    const duplicatesArray = [1, 3, 3, 3, 5, 7, 9];
    const index = binarySearch(duplicatesArray, 3);
    expect([1, 2, 3]).toContain(index);
  });
});
