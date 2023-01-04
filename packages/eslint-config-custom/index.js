module.exports = {
  plugins: ["turbo", "import"],
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended", "prettier"],
  globals: {
    React: "readonly",
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: false,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },

  ignorePatterns: [],
};
