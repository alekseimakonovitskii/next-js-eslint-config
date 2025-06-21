import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginNext from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const config = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        ignores: ['.next', 'dist', 'node_modules'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react: eslintPluginReact,
            'react-hooks': eslintPluginReactHooks,
            '@next/next': eslintPluginNext,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': ['error'],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/consistent-type-imports': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            '@next/next/no-img-element': 'error',
            '@next/next/no-sync-scripts': 'error',
            '@next/next/no-page-custom-font': 'error',
            '@next/next/no-head-element': 'error',
            'no-console': 'warn',
            'no-unused-vars': 'off',
            'eol-last': ['error', 'always'],
            eqeqeq: 'error',
            curly: 'error',
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            indent: ['error', 4],
            'prefer-destructuring': [
                'error',
                {
                    VariableDeclarator: {
                        object: true,
                        array: false,
                    },
                    AssignmentExpression: {
                        object: false,
                        array: false,
                    },
                },
                {
                    enforceForRenamedProperties: false,
                },
            ],
            'react/jsx-wrap-multilines': ['error'],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];

export default config;
