import { l } from "./linked-list";
import { describe, it, expect } from "vitest";

l.append(100);
l.append(200);
l.append(300);
l.append(400);
l.prepend(50);

describe("Head and Tail", () => {
  it("returns head", () => {
    expect(l.getHead()).toBe(50);
  });

  it("returns tail", () => {
    expect(l.getTail()).toBe(400);
  })
});

describe("Size", () => {
  it("returns size", () => {
    expect(l.getSize()).toBe(5);
  })
});

describe("At", () => {
  it("returns first element", () => {
    expect(l.at(0)).toBe(50);
  });
  
  it("returns any other element", () => {
    expect(l.at(3)).toBe(300);
  });
});
