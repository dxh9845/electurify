module.exports = {
  configureWebpack: {
    devtool: 'eval-source-map',
    module: {
      rules: [{
        // Look for any files with the word Worklet within it
        test: /Worklet\.js$/,
        loader: 'worklet-loader',
        options: {
          name: 'js/[hash].worklet.js',
        },
      }],
    },
  },
};
