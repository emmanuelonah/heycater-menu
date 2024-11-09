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
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-empty': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-cond-assign': 'off',
      'no-fallthrough': 'off',
      'no-constant-binary-expression': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      'no-case-declarations': 'off',
      'no-prototype-builtins': 'off',
      'no-redeclare': 'off',
      'no-useless-escape': 'off',
      'no-control-regex': 'off',
      'no-async-promise-executor': 'off',
      'no-unsafe-finally': 'off',
      'valid-typeof': 'off',
      'getter-return': 'off',
      'no-misleading-character-class': 'off',
      'no-sparse-arrays': 'off',
      'no-func-assign': 'off',
      'react/display-name': 'off',
    },
    ignores: ['node_modules/', 'build/', 'coverage/'],
  },
];
