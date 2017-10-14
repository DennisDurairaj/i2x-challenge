import path from 'path';
import webpack from 'webpack';

const PUBLIC_DIR = path.resolve(__dirname, "public");
const SRC_DIR = path.resolve(__dirname, "src");

export default {
  entry : SRC_DIR + '/index.js',

  output : {
    path: PUBLIC_DIR,
    filename: 'bundle.js'
  },

  module : {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0', 'react']
          }
        }
      }
    ]
  },
  resolve : {
    extensions: ['.js']
  },
  devtool : 'source-map',
  devServer : {
    contentBase: './public',
    port: 9000,
    historyApiFallback: true,
    hot: true
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery"})
  ]
}