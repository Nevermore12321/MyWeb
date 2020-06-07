module.exports =  {
    parser:  'babel-eslint',  // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2018, // specify the version of ECMAScript syntax you want to use: 2015 => (ES6)
        sourceType:  'module',  // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // enable JSX
            impliedStrict: true // enable global strict mode
        }
    },
    extends:  [
        'airbnb',  // Uses airbnb, it including the react rule(eslint-plugin-react/eslint-plugin-jsx-a11y)
        // 'plugin:promise/recommended',
        // 'prettier', // Use prettier, it can pretty file before executing eslint --fix
        // 'prettier/react' // Use prettier/react to pretty react syntax
    ],
    // settings: {
    //     'import/resolver': { // This config is described in article []()
    //         webpack: {
    //             config: './webpack/webpack-common-config.js'
    //         }
    //     },
    // },
    env: {
        browser: true, // enable all browser global variables
        commonjs: true,
        es6: true,
        node: true
    },
    plugins: ["react", "react-hooks"], // ['prettier', 'react-hooks']
    rules:  {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
        // 'react-hooks/rules-of-hooks': 'error',
        // semi: ['error', 'never'],
        // 'react/jsx-one-expression-per-line': 0,
        /**
         * @description rules of eslint-plugin-prettier
         */
        // 'prettier/prettier': [
        //   'error', {
        //     singleQuote: true,
        //     semi: false,
        //     trailingComma: true // be same with airbnb comma-dangle rule
        //   }
        // ]

        // semi: ["error", "always"],
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        // "react/jsx-in-jsx-scope": 2,
        // "indent": ["error", "tab"],
        "indent": ["off", 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-indent": [2, 4],
        // "react/jsx-filename-extension": [ 1, { "extensions": [".js", ".jsx"] } ],
        "react/prefer-stateless-function": 1,
        "no-tabs": "off", // 禁止缩进错误
        "no-console": 0,



        // 允许使用 for in
        "no-restricted-syntax": 0,
        "guard-for-in": 0,

        "linebreak-style": 0,
        // "react/prop-types": 1, // 开启PropTypes验证
        "react/forbid-prop-types": 0,
        "react/jsx-one-expression-per-line": 0,
        "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
        'import/no-unresolved': [1, { ignore: ['^@/'] }],


        "space-in-parens": [ 0, "always" ],
        "template-curly-spacing": [ 2, "always" ],
        "array-bracket-spacing": [ 2, "always" ],
        "object-curly-spacing": [ 2, "always" ],
        "computed-property-spacing": [ 2, "always" ],
        "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],
        "quotes": [ 1, "single", "avoid-escape" ],
        "no-use-before-define": [ 2, { "functions": false } ],
        "semi": [0, "never"],
        "prefer-const": 1,
        "react/prefer-es6-class": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-curly-spacing": [ 2, "always" ],
        // "react/jsx-indent": [ 2, 4 ],
        "react/prop-types": [ 1 ],
        "react/no-array-index-key": [ 1 ],
        "class-methods-use-this": [ 1 ],
        "no-undef": [ 1 ],
        "no-case-declarations": [ 1 ],
        "no-return-assign": [ 1 ],
        "no-param-reassign": [ 1 ],
        "no-shadow": [ 1 ],
        "camelcase": [ 1 ],
        "no-underscore-dangle" : [0, "always"],
    },
};