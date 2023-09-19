module.exports = {
    "env": {
        "es2021": true
    },
    "ignore-patterns": ["*.js"],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": ["@typescript-eslint"]
};
