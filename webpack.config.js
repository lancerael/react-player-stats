const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const config = {
    entry: ['whatwg-fetch', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'rps.min.js'
    },
    module: {
      loaders: [
        {
          enforce: 'pre',
          test: /\.js?$/,
          loader: 'eslint-loader',
          exclude: [/node_modules/, /dist/],
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: [/dist/],
          query: {
            presets: ['env'],
            plugins: ['transform-class-properties'],
            compact: false
          },
        },
        {
          test:/\.(s*)css$/,
          use:['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpeg|ttf|gif)$/,
          use: [
           { loader: 'url-loader', options: { limit: 8192 } }
          ]
        }
      ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          eslint: {
            failOnWarning: false,
            failOnError: true,
          },
        },
      })
    ],
    devServer: {
      contentBase: './',
      publicPath: path.resolve(__dirname, '/dist/')
    }
  };

  // Optimiise build for production
  if (env.NODE_ENV === 'production') {
    const aProductionPlugins = [
      new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
      new UglifyJSPlugin(),
      new BundleAnalyzerPlugin({analyzerMode: 'static'}),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'node-static',
        filename: 'rps.vendor.min.js',
        minChunks(module) {
          var context = module.context;
          return context && context.indexOf('node_modules') >= 0;
        }
      })
    ];
    config.module.loaders[2].use[1] == { loader: 'css-loader', options: { minimize: true }};
    config.plugins = [ ...config.plugins, ...aProductionPlugins ]
  }

  // Automatically build the index HTML form template
  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  );

  return config;
};
