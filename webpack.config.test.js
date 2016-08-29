
module.exports = {
  devtool: 'inline-source-map',
  // module: {
  //   preLoaders: [
  //     {
  //       test: /\.js?$/,
  //       exclude: /(node_modules|bower_components)/,
  //       loader: 'isparta'
  //     }
  //   ]
  // }
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(test|node_modules|bower_components)/,
        loader: 'isparta'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
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
