import { matchRoutes } from "react-router";
import { describe, expect, it } from "vitest";

import { routes } from "@/router";

// Match routes without rendering: pages may need network access the test run lacks.
function leafPath(pathname: string) {
  const matches = matchRoutes(routes, pathname);
  const leaf = matches?.at(-1)?.route;
  return leaf?.index ? "(index)" : leaf?.path;
}

describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    expect(leafPath("/")).toBe("(index)");
  });

  it("resolves the client-side routes", () => {
    expect(leafPath("/app")).toBe("app");
    expect(leafPath("/auth")).toBe("auth");
    expect(leafPath("/signup")).toBe("signup");
  });

  it("falls back to not found for unknown paths", () => {
    expect(leafPath("/nope")).toBe("*");
  });
});
