import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "src/api/auth";
import { describe, expect, test } from "vitest";

describe("auth", () => {
  describe("getAPIKey", () => {
    test("returns key", () => {
      expect(getAPIKey({ authorization: "ApiKey 12345" })).toEqual("12345");
    });

    test("returns null if 'authorization' header is falsey", () => {
      expect(getAPIKey({})).toBeNull();
      expect(getAPIKey({ authorization: undefined })).toBeNull();
      expect(getAPIKey({ authorization: "" })).toBeNull();
    });

    test("returns null for invalid format", () => {
      expect(getAPIKey({ authorization: "invalid" })).toBeNull();
      expect(getAPIKey({ authorization: "invalid invalid" })).toBeNull();
      expect(getAPIKey({ authorization: "invalid ApiKey" })).toBeNull();
      expect(getAPIKey({ authorization: "apikey invalid" })).toBeNull();
    });
  });
});
