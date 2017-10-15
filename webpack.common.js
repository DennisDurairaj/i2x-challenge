const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: SRC_DIR + '/index.js',

  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.js$/,
        include: [ path.join(__dirname, 'src'), path.join(__dirname, 'dist/server.js') ],
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
};