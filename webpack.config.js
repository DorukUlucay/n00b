const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/scripts/main.js"),
    //maincss: path.resolve(__dirname, "src/style/main.css"),
  },

     output: {
       path: path.resolve(__dirname, "dist"), // string
       filename: "scripts/main.js", // string
       publicPath: "/scripts/", // string
       library: "n00b", // string,
       libraryTarget: "umd"
     },

  plugins: [
    
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['main'],
      filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/game.html',
        inject: true,
        //chunks: ['main'],
        filename: 'game.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/contribute.html',
        inject: true,
       // chunks: ['main'],
        filename: 'contribute.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/about.html',
        inject: true,
       // chunks: ['main'],
        filename: 'about.html'
      }),
    new CopyPlugin([
      { from: 'src/scripts/vendor', to: 'scripts/vendor' },
      { from: 'src/style', to: 'style' },
      { from: 'src/img', to: 'img'},
      { from: 'src/kernel.txt', to: 'kernel.txt' }

    ])
  ]

}
