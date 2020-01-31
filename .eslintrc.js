// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//   },
//   extends: [
//     'plugin:react/recommended',
//     'airbnb',
//   ],
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//   },
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 2018,
//     sourceType: 'module',
//   },
//   plugins: [
//     'react',
//   ],
//   rules: {
//   },
// };

module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "es6": true
  },
  "settings": {
        "ecmascript": 6,
        "jsx": true
  },
  "parserOptions": {
      "ecmaVersion": 2017,
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "experimentalDecorators": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react",
  ],
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": 0,
    "function-paren-newline": 0,
    "linebreak-style": 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/no-array-index-key": 1,
    "react/no-unused-state": 1,
    "react/destructuring-assignment": 1,
    "max-len": ["error", { "code": 150 }],
    "import/prefer-default-export": 0,
    "no-return-assign": 0,
  }
};
