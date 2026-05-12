import type { UrlObject } from "url";
export type Url = string | UrlObject;
export type EndpointLike<T extends string> = `/${T}`;
/**
 * Create a URL with query parameters
 * @param baseUrl - The base URL
 * @param endpoint - The endpoint
 * @param params - The URL parameters
 * @param query - The query parameters
 * @returns
 *
 * @example
 * const url = URLEndpoint({
 *   baseUrl: "https://api.example.com",
 *   endpoint: "/users/:id",
 *   params: { id: "123" },
 *   query: { limit: 10, page: 1 },
 * });
 * // https://api.example.com/users/123?limit=10&page=1
 *
 */
export const URLEndpoint = ({
  query,
  params,
  baseUrl,
  endpoint,
}: {
  query?: Object;
  baseUrl: string;
  params?: Object;
  endpoint: EndpointLike<string>;
}): Url => {
  //replace params in url
  let url = baseUrl + endpoint;

  if (params) {
    Object.keys(params).forEach((key: string) => {
      url = url.replace(`:${key}`, params[key]);
    });
  }

  //add query params
  if (query) {
    url += "?";
    Object.keys(query).forEach((key: string) => {
      if (query[key]) {
        url += `${key}=${query[key]}&`;
      }
    });
    url = url.slice(0, -1);
  }

  return url;
};
