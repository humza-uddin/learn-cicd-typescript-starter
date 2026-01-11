import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns null when authorization header is missing", () => {
    const headers = {};

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization scheme is invalid", () => {
    const headers = {
      authorization: "Bearer test-api-key",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns API key when authorization header is valid", () => {
    const headers = {
      authorization: "ApiKey test-api-key",
    };

    expect(getAPIKey(headers)).toBe("test-api-key");
  });
});