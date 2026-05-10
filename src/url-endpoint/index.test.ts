import { URLEndpoint } from "./index";

describe("URLEndpoint", () => {
  test("URLEndpoint", () => {
    const baseUrl = "https://api.example.com";
    const result = URLEndpoint({
      baseUrl,
      endpoint: "/users/:id",
      params: { id: "123" },
      query: { limit: 10, page: 1 },
    });
    expect(result).toEqual(`${baseUrl}/users/123?limit=10&page=1`);
  });
});
