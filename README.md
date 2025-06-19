# 📦 Installation
```
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks @next/eslint-plugin-next
```
# 🚀 Usage
In your ESLint config file (e.g., eslint.config.mjs):
# 🛠️ Included Rules

### TypeScript Rules (@typescript-eslint)
| Rule                            | Description                                              |
| ------------------------------- | -------------------------------------------------------- |
| `no-unused-vars`                | Disallows unused variables to reduce dead code.          |
| `no-explicit-any`               | Warns when `any` is used. Prefer strict typing.          |
| `explicit-function-return-type` | **Off** – allows inferred return types for cleaner code. |
| `no-non-null-assertion`         | Warns when using `!`, as it can lead to runtime errors.  |
| `consistent-type-imports`       | Enforces the use of `import type` for type-only imports. |

### React Hooks Rules (react-hooks)
| Rule              | Description                                                                     |
| ----------------- | ------------------------------------------------------------------------------- |
| `rules-of-hooks`  | Enforces proper usage of React Hooks (e.g., inside functional components only). |
| `exhaustive-deps` | Warns when dependencies are missing in `useEffect`, `useCallback`, etc.         |

### Next.js Rules (@next/next)
| Rule                  | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| `no-img-element`      | Prevents usage of `<img>`; use `next/image` for optimization.        |
| `no-sync-scripts`     | Disallows synchronous `<script>` tags.                               |
| `no-page-custom-font` | Disallows custom font loading in `_document.js`; prefer `next/font`. |
| `no-head-element`     | Avoid direct use of `<head>` tag; use `next/head` instead.           |

### JavaScript Core Rules
| Rule                   | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `no-console`           | Warns when `console.log()` is used. Useful for production safety. |
| `no-unused-vars`       | Disabled in favor of the TypeScript version.                      |
| `eol-last`             | Enforces a newline at the end of files.                           |
| `eqeqeq`               | Requires `===` and `!==` for equality comparisons.                |
| `curly`                | Requires curly braces for all control statements.                 |
| `semi`                 | Enforces the use of semicolons.                                   |
| `quotes`               | Enforces single quotes for strings.                               |
| `indent`               | Enforces 4-space indentation.                                     |
| `prefer-destructuring` | Encourages destructuring for cleaner variable access.             |

# 📁 Ignored Directories
- .next/
- dist/
- node_modules/

