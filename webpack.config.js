const path = require('path');

console.log(process.env.NODE_ENV)

let entry = './src/index.js'

if (process.env.NODE_ENV === 'dev') {
  entry = './example/index.js';
}

console.log(entry);

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }  
}
