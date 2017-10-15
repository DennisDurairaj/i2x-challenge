import path from 'path';
import webpack from 'webpack';

const PUBLIC_DIR = path.resolve(__dirname, "server");
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
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0', 'react']
          }
        }]
      }
    ]
  },
  resolve : {
    extensions: ['.js']
  },
  devtool : 'source-map',
  devServer : {
    contentBase: './server',
    port: 9001,
    historyApiFallback: true,
    hot: true
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}