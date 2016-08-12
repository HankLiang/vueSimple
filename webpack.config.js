var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var pkg = JSON.parse(fs.readFileSync('./package.json'))

module.exports = {
  entry: {
    index: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.less/,
        loader: ExtractTextPlugin.extract(['css', 'less'])
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#source-map'
}

if (process.env.NODE_ENV === 'develop') {
  module.exports.output.publicPath = '//' + pkg.cdn.dev.domain + pkg.cdn.dir;

  module.exports.plugins = (module.exports.plugins || []).concat([
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin(['./dist']),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
