import { describe, it, expect } from "vitest";
import bubbleSort from "../challenges/bubbleSort.ts";

describe("bubbleSort", () => {
  it("should sort an unsorted array", () => {
    const unsortedArray = [3, 6, 1, 5, 9, 4, 10, 2, 7, 8];
    expect(bubbleSort(unsortedArray)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should handle already sorted array", () => {
    const sortedArray = [1, 2, 3, 4, 5];
    expect(bubbleSort(sortedArray)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort array in reverse order", () => {
    const reverseArray = [5, 4, 3, 2, 1];
    expect(bubbleSort(reverseArray)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle array with duplicate elements", () => {
    const duplicateArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    expect(bubbleSort(duplicateArray)).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
  });

  it("should handle empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should handle array with single element", () => {
    expect(bubbleSort([42])).toEqual([42]);
  });
});
