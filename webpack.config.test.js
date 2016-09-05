
module.exports = {
  devtool: 'inline-source-map',
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        exclude: /(test|node_modules|bower_components)/,
        loader: 'isparta'
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
