module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
    "jest/globals": true,
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "jest",
    "jest-dom",
    "jsx-a11y",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:jest-dom/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
  },
}
