const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // mode: process.env.NODE_ENV,
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HTMLWebpackPlugin ({
      template: './src/index.html',
      inject: true
    })
  ],

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          // Compiles Sass to CSS
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/dist'),
      publicPath: '/build',
    },
    proxy: { '/**': 'http://localhost:8080' },
    compress: true,
    open: true,
    hot: true,
    liveReload: true,
    //fall back to entry path to go back to router history
    historyApiFallback: true,
    port: 8081
  },
}