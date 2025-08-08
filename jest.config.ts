import nextJest from "next/jest";

const customJestConfig = {
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
  },
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
};

const createJestConfig = nextJest({ dir: "./" });

export default createJestConfig(customJestConfig);
