import { beforeAll, vi } from "vitest";

beforeAll(() => {
  vi.mock("next/router", () => require("next-router-mock"));
});

vi.mock("server-only", () => ({}));

console.log("set up vitest");