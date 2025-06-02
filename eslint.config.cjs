const {
    defineConfig,
} = require("eslint/config");

const parser = require("vue-eslint-parser");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        parser: parser,

        parserOptions: {
            parser: "@typescript-eslint/parser",
        },
    },

    extends: compat.extends("eslint-config-prettier"),

    rules: {
        "no-console": [2, {
            allow: ["warn", "error"],
        }],

        "vue/multi-word-component-names": "off",
        "vue/require-default-prop": "off",
        "vue/no-v-html": "off",
    },
}]);
