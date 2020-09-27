const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }= require("clean-webpack-plugin");



module.exports = {
  entry: './src/js/game.js',
  mode:"development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:{
          loader:"file-loader",
          options:{
            name:"[name].[ext]",
            outputPath:"images"
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
                          '@babel/react',{
                          'plugins': ['@babel/plugin-proposal-class-properties']}]
          }
        }
      }
    ],
  },
  devServer:{
      open:true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins:[
      
      new HtmlWebpackPlugin({
          template:"./src/index.html"
      }),
      new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'rules.html',
        template: './src/rules.html'
      }),
      new CleanWebpackPlugin(),
  ]
};