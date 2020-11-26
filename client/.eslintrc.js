module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
    },
    extends: [
        'react-app',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'airbnb',
    ],
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    rules: {},
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    ignorePatterns: ['node_modules/'],
    plugins: ['react', 'react-hooks', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/prop-types': 'off',
        'react/require-default-props': 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'prettier/prettier': ['error'],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            alias: {
                map: [['@components', './components']],
            },
        },
    },
};
