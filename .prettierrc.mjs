/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 120,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  tailwindAttributes: ['class', 'className', 'classNames'],
};

export default config;
