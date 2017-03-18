const path = require('path');

console.log(process.env.NODE_ENV)

let 
  entry = './src/index.js',  
  output = {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
  };

if (process.env.NODE_ENV === 'dev') {
  entry = './example/index.js';
  output = {
    path: path.join(__dirname, 'example'),
    publicPath: '/example/',
  };
}

console.log(entry, output);

module.exports = {
  entry: entry,
  output: Object.assign(output, {
    library: 'react-sequence-form',
    libraryTarget: 'umd', // universal module definition
    filename: 'bundle.js'
  }),
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
