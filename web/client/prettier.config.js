/** @type {import("prettier").Config} */
const config = {
  semi: true, // Always add semicolons
  singleQuote: true, // Prefer single quotes
  printWidth: 80, // Wrap lines at 100 characters
  tabWidth: 2, // Indent with 2 spaces
  trailingComma: 'es5', // Add trailing commas in ES5 (objects, arrays, etc.)
  arrowParens: 'always', // Always include parens for arrow functions
  endOfLine: 'lf', // Use LF line endings for consistency
};

export default config;
