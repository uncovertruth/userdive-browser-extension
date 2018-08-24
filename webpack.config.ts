import * as ChromeExtemsionReloader from 'webpack-chrome-extension-reloader'
import * as CopyWebpackPlugin from 'copy-webpack-plugin'
import * as path from 'path'
import * as UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import * as webpack from 'webpack'

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
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: ['ts-loader']
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
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'app', 'manifest.json'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),
    new ChromeExtemsionReloader()
  ]
}
