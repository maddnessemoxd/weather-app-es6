var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve('src/js', 'app.js'),
  output: {
    path: path.resolve('dist'),
    publicPath: 'dist',
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //  mangle: true,
    //  screw_ie8: true,
    //  comments: false,
    //  compress: {
    //    sequences: true,
    //    dead_code: true,
    //    conditionals: true,
    //    booleans: true,
    //    unused: true,
    //    if_return: true,
    //    join_vars: true,
    //    drop_console: true,
    //    warnings: false
    //  }
    // }),
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [

      {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },

      // { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel', 'eslint'] },

      { test: /\.html$/, loader: 'html?attrs=false' },

      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },

      { test: /\.(jpe?g|png|gif)$/i, loader: 'url-loader?name=./img/[name].[ext]' },

      { test: /\.(woff|woff(2)?|eot|ttf|svg)$/, loader: 'file?name=fonts/[name].[ext]' },

      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader', { publicPath: './' }) },

      { test: /jquery-mousewheel/, loader: 'imports?define=>false&this=>window' },

      { test: /malihu-custom-scrollbar-plugin/, loader: 'imports?define=>false&this=>window' }

    ]
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['last 2 versions'] })];
  }
};
