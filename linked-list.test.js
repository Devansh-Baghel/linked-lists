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

describe("Contains", () => {
  it("returns true for a containing element", () => {
    expect(l.contains(50)).toBe(true);
  });
  
  it("returns true for a containing element", () => {
    expect(l.contains(200)).toBe(true);
  });

  it("returns true for a containing element", () => {
    expect(l.contains(400)).toBe(true);
  });

  it("returns false for a non-containing element", () => {
    expect(l.contains(23)).toBe(false);
  });
});

describe("Find", () => {
  it("returns 0 for a containing element", () => {
    expect(l.find(50)).toBe(0);
  });
  
  it("returns 2 for a containing element", () => {
    expect(l.find(200)).toBe(2);
  });

  it("returns 4 for a containing element", () => {
    expect(l.find(400)).toBe(4);
  });

  it("returns null for a non-containing element", () => {
    expect(l.find(23)).toBe(null);
  });
});

describe("ToString", () => {
  it("returns string", () => {
    expect(l.toString()).toBe("50 -> 100 -> 200 -> 300 -> 400 -> null");
  })
});
