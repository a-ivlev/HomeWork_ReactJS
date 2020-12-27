const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: { app: './src/index.jsx' },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js'
      },
    //context: path.resolve(__dirname, 'src'),  //если раскоментировать выдаёт ошибку Module not found: Error: Can't resolve './src/index.jsx' 
    devtool: 'inline-source-map',  
    resolve: {
      extensions: ['.js', '.jsx']
    }, 
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ["@babel/plugin-proposal-class-properties"]
              }
            }
          }
        ]
      },
    devServer: {
        contentBase: './build',
    },       
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
        title: "React_JS",
        filename: "index.html",
        template: "src/index.html"
    })
  ]
};