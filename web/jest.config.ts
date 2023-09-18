/*
 * For a detailed explanation regarding each configuration property and type
 * check, visit: https://jestjs.io/docs/configuration
 */
import nextJest from "next/jest";

const customJestConfig = {
  // An array of file extensions your modules use
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
  },
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
};

const createJestConfig = nextJest({ dir: "./" });

export default createJestConfig(customJestConfig);
