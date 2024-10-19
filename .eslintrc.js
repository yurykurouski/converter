// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    "expo",
    "plugin:react-native-a11y/all",
    "plugin:sonarjs/recommended-legacy",
  ],
  plugins: ["simple-import-sort", "unused-imports", "sonarjs"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
};
