const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require("glob");

const htmlPluginArray = [];
function getEntry() {
  const entry = {};
  //读取src目录所有page入口
  glob.sync('./src/pages/**/*/index.js')
    .forEach(function (filePath) {
      var name = filePath.match(/\/pages\/(.+)\/index.js/);
      name = name[1];
      entry[name] = filePath;
      // 实例化插件
      htmlPluginArray.push(new HtmlWebpackPlugin({
        filename: './' + name + '/index.html',
        template: './src/pages/' + name + '/index.html',
      }))

    });
  return {
    ...entry,
    index: '/src/index.js'
  }
};

module.exports = {
  mode: "production",
  entry: getEntry(),
  output: {
    // publicPath: CDN.js,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name]_[chunkhash].min.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.scss|\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|eot|woff|ttf|pdf)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    ...htmlPluginArray
  ]
}