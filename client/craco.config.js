const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        /* tsConfigPath should point to the file where "paths" are specified */
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /mapbox-gl-csp-worker\.js$/,
        use: { loader: 'worker-loader' },
      });

      return webpackConfig;
    },
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
};
