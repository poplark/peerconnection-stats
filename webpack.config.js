const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    library: 'PCGetStats',
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader'
      }
    }]
  },
  plugins: [
    new webpack.BannerPlugin(`A getStats API of peerconnection with 'Standardized' and 'Legacy Non-Standard' reports.\n\n@author poplark <https://github.com/poplark>\n@license MIT`)
  ]
}
