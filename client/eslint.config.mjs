import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { settings: { react: { version: 'detect' } } },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      semi: 'off',
      'no-empty': 'off',
      'no-undef': 'off',
      'no-redeclare': 'off',
      'valid-typeof': 'off',
      'getter-return': 'off',
      'no-cond-assign': 'off',
      'no-fallthrough': 'off',
      'no-func-assign': 'off',
      'react/prop-types': 'off',
      'no-sparse-arrays': 'off',
      'no-useless-escape': 'off',
      'no-control-regex': 'off',
      'no-unsafe-finally': 'off',
      'react/display-name': 'off',
      'no-case-declarations': 'off',
      'no-prototype-builtins': 'off',
      'no-async-promise-executor': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'no-constant-binary-expression': 'off',
      'no-misleading-character-class': 'off',
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
    },
    ignores: ['node_modules/', 'build/', 'coverage/'],
  },
];
