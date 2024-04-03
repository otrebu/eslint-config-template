import eslintConfig from "./configuration/eslint.js";
import typescriptEslintConfig from "./configuration/typescript.js";

/** @type {import("eslint").Linter.FlatConfig} */
export default [
  eslintConfig,
  typescriptEslintConfig,
  {
    // must be added for the eslint config to do anything!
    files: [
      "**/*.js",
      "**/*.ts",
      "**/*.tsx",
      "**/*.jsx",
      "**/*.mjs",
      "**/*.cjs",
    ],
  },
];
