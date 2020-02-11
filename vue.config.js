const path = require('path');

module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-import')(),
          require('autoprefixer')({ grid: true }),
          require('cssnano')()
        ],
      }
    }
  },
  outputDir: 'lib',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
      },
    },
  },
  lintOnSave: undefined,
};
