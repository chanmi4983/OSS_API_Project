module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.module.rules.push({
          test: /\.xml$/,
          use: "raw-loader",
        });
        return webpackConfig;
      },
    },
  };
  