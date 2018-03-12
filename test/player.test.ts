import request from "supertest";
import app from "../app";

describe("GET /api", () => {
  it("show return players", () => {
    return request(app).get("/api/v1/player")
      .expect(200);
  });
});
