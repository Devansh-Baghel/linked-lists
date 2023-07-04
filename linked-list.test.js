import { l } from "./linked-list";
import { describe, it, expect } from "vitest";

describe("head", () => {
  it("returns head", () => {
    expect(l.getHead()).toBe(300);
  });
});
