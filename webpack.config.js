module.exports = {
  entry: './app/App.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3000,
    contentBase: './public/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
