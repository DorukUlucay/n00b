const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    mainjs: path.resolve(__dirname, "src/scripts/main.js"),
    //maincss: path.resolve(__dirname, "src/style/main.css"),
  },

  //   output: {
  //     path: path.resolve(__dirname, "dist"), // string
  //     filename: "bundle.js", // string
  //     publicPath: "/assets/", // string
  //     library: "MyLibrary", // string,
  //     libraryTarget: "umd"
  //   },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['mainjs'],
      filename: 'index.html'
    })
  ]

}
