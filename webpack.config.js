const path = require('path');

 module.exports = {
  watch: true,
  mode: "development",
  entry: {
    index: './src/index.js',
    nav: './src/nav.js',
  },
   output: {
    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]

    }
 };