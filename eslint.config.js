import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals"; // <-- Добавьте этот импорт

export default defineConfig([
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "off",
    },
  },
]);
