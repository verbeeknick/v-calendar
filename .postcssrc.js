const postcssPresetEnv = require('postcss-preset-env');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    postcssPresetEnv(),
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer')({ grid: true }),
    process.env.NODE_ENV === 'production'
      ? purgecss({
          content: ['./src/**/*.vue', './src/**/*.js'],
          extractors: [
            {
              extractor: class {
                static extract(content) {
                  return content.match(/[A-Za-z0-9-_:/]+/g) || [];
                }
              },
              extensions: ['vue', 'js'],
            },
          ],
          whitelistPatterns: [/vc-text/, /vc-bg/, /vc-border/, /^vc-rounded/],
        })
      : '',
  ],
};
