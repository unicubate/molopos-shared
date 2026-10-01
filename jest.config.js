/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/*.test.ts"],
  watchman: false,
  transform: {
    "^.+\\.tsx?$": "<rootDir>/jest.transform.js",
  },
};
