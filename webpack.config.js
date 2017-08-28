var path = require('path')
var webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
    filename: 'build.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': resolve('src'),
      'src': path.resolve(__dirname, './src'),
      'css': path.resolve(__dirname, './src/css'),
      'assets': path.resolve(__dirname, './src/assets'),
      'directive': path.resolve(__dirname, './src/directive'),
      'data': path.resolve(__dirname, './src/data'),
      'components': path.resolve(__dirname, './src/components'),
      'views': path.resolve(__dirname, './src/views'),
      'styles': path.resolve(__dirname, './src/styles'),
      'api': path.resolve(__dirname, './src/api'),
      'utils': path.resolve(__dirname, './src/utils'),
      'vuex-store': path.resolve(__dirname, './src/store'),
      'router': path.resolve(__dirname, './src/router'),
      'vendor': path.resolve(__dirname, './src/vendor'),
      'static': path.resolve(__dirname, './static')
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
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
        test: /\.(png|jpg|gif|svg|wav|ogg|wma|otf)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: false,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
