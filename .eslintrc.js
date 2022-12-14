module.exports = {
  env: {
    "browser": true,
    "jest": true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // <== ADD THIS
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: ["airbnb", "prettier", "plugin:testing-library/react"],
  globals: {
    "hopscotch": true,
    "Box": true,
    "__ENV_CONFIG__": true,
  },
  "plugins": ["react-hooks", "prettier"],
  "overrides": [
    {
      "files": [
        "src/**/*.{js,jsx}",
      ],
      "rules": {
        "indent": "off",
      },
    },
    {
      "files": ["**/__tests__/*.[jt]s?(x)"],
    },
  ],
  "rules": {
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "arrow-parens": ["error", "as-needed"],
    "class-methods-use-this": "off",
    "eol-last": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "func-names": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-tabindex": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "linebreak-style": "off",
    "max-len": [
      "error",
      {
        "code": 125,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreTemplateLiterals": true,
      },
    ],
    "no-alert": "error",
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "no-constant-condition": "error",
    "no-else-return": ["error", { "allowElseIf": true }],
    "no-func-assign": "off",
    "no-irregular-whitespace": "error",
    "no-loop-func": "off",
    "no-nested-ternary": "error",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-param-reassign": ["error", { "props": false }],
    "no-shadow": ["error", { "hoist": "functions" }],
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "error",
    "no-unused-expressions": ["error", { "allowShortCircuit": true }],
    "no-unused-vars": "warn",
    "prefer-arrow-callback": "off",
    "prefer-destructuring": "off",
    "prefer-promise-reject-errors": "warn",
    "react/button-has-type": "warn",
    "react/destructuring-assignment": ["off", "always"],
    "react/forbid-prop-types": "off",
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-no-bind": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-array-index-key": "error",
    "react/no-danger": "error",
    "react/no-unused-prop-types": "off",
    "react/no-unused-state": "warn",
    "react/prefer-stateless-function": ["error", { "ignorePureComponents": true }],
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/sort-comp": ["error", { "order": ["static-variables", "everything-else"] }],
    "space-before-function-paren": "off",
    "global-require": "off",
    "no-template-curly-in-string": "error",
    "react/jsx-fragments": ["off", "syntax"],
    "object-curly-spacing": ["error", "always"],
    "semi": ["error", "always"],
    "no-unreachable": "error",
    "react-hooks/rules-of-hooks": "error",
    "testing-library/prefer-screen-queries": "off",
    "react/function-component-definition": "off",
  },
};
