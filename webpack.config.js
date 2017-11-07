module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.marko']
  },
  module: {
    loaders: [
      {
        test: /\.marko$/,
        loader: 'marko-loader'
      }, {
        test: /\.css/,
        loader: [ 'style-loader', 'css-loader' ]
      },
    ]
  },
  devServer: {
    contentBase: __dirname + '/dist'
  }
}
