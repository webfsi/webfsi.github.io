const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

//Change 'webpack' name in the proxy settings to your folder name
const settings = {
  host: 'localhost',
  port: 5500,
  proxy: 'http://habitat.local/'
};

module.exports = {
  entry: ['./src/scripts/app.js', './src/styles/app.scss'],
  output: {
    filename: './assets/js/app.min.js',
    path: path.resolve(__dirname),
    assetModuleFilename: "./assets/img/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator : {
          filename : './assets/fonts/[name][ext][query]',
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `./assets/css/app.min.css`,
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./assets/js/*', './assets/css/*']
    }),
    new BrowserSyncPlugin({
      host: settings.host,
      port: settings.port,
      proxy: settings.proxy,
      files: ['./**/*', '!./node_modules', '!./package.json'],
      notify: false,
      injectCss: true,
      reloadDelay: 0
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
};