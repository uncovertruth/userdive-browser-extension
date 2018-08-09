import * as webpack from 'webpack'
import * as path from 'path'
import * as UglifyJSPlugin from 'uglifyjs-webpack-plugin'

export default {
  entry: {
    background: path.resolve(__dirname, 'app/scripts/background.ts'),
    chromereload: path.resolve(__dirname, 'app/scripts/chromereload.ts'),
    contentscript: path.resolve(__dirname, 'app/scripts/contentscript.ts'),
    options: path.resolve(__dirname, 'app/scripts/options.ts'),
    popup: path.resolve(__dirname, 'app/scripts/popup.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: ['ts-loader']
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader?modules']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    })
  ]
}
