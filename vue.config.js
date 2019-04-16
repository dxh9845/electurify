module.exports = {
  configureWebpack: {
    devtool: 'eval-source-map',
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/assets/index.scss";',
      },
    },
  },
};
