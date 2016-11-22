const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname + "/app",

  entry: {
    javascript: "./js/app.js",
    html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  devtool: 'inline-source-map', // or 'source-map'

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!postcss!sass?sourceMap',
      }
    //   {
    //     test: /\.jsx?$/,
    //     exclude: /node_modules/,
    //     loaders: ["react-hot", "babel-loader"],
    //   }
    ]
  },
  postcss() {
    return [autoprefixer, precss];
  },
};
