import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import react from 'eslint-plugin-react'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default defineConfig([
  // ============================
  // NEXT.JS CORE RULES
  // ============================
  ...nextVitals,

  // ============================
  // GLOBAL IGNORES
  // ============================
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts'
  ]),

  // ============================
  // PROJECT RULES
  // ============================
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      react,
      '@typescript-eslint': tseslint
    },
    rules: {
      /**
       * 🚫 PREVENT HYDRATION MISMATCHES
       * Block multiline JSX attributes
       */
      'react/jsx-curly-newline': [
        'error',
        {
          multiline: 'never',
          singleline: 'consistent'
        }
      ],

      /**
       * 🚫 BLOCK MULTILINE className (ROOT CAUSE)
       */
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "JSXAttribute[name.name='className'] Literal[value=/\\n/]",
          message:
            '❌ Multiline className breaks Next.js hydration. Use a single-line string.'
        },
        {
          selector:
            "JSXAttribute[name.name='className'] JSXExpressionContainer Literal[value=/\\n/]",
          message:
            '❌ Multiline className breaks Next.js hydration. Use a single-line string.'
        }
      ],

      /**
       * QUALITY / STABILITY
       */
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
])
