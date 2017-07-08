const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = ['angular', 'angular-material', 'angular-ui-router', 'angular-aria', 'angular-messages', 'angular-animate', 'mdi'];

const PLUGINS = [
   new ngAnnotatePlugin({ add: true }),
   new HtmlWebpackPlugin({
      template: 'src/index.html'
   }),
   // new ExtractTextPlugin('style-[contenthash:10].css'),
   extractSass,
   new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
   })
];

const extractSass = new ExtractTextPlugin({
   filename: "[name].[contenthash].css",
   disable: process.env.NODE_ENV === "development"
});

const config = {
   entry: {
      bundle: './src/app.module.js',
      vendor: VENDOR_LIBS
   },
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name]-[hash:10].js',
   },
   devtool: "eval",
   plugins: PLUGINS,
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
         },
         {
            test: /\.scss$/,
            use: extractSass.extract({
               use: [{
                  loader: "css-loader"
               }, {
                  loader: "sass-loader"
               }],
               // use style-loader in development
               fallback: "style-loader"
            })
         },
         {
            test: /\.html$/,
            use: 'html-loader'
         },
         {
            test: /\.(jpe?g|png|gif)$/,
            use: ['url-loader?limit=10000&name=images/[hash:10].[ext]', 'image-webpack-loader'],
            exclude: /node_modules/
         },
         {
            test: /\.(ttf|eot|woff2?|svg)$/,
            use: ['url-loader?limit=10000&name=assets/[hash:10].[ext]'],
         },
      ]
   },
   devServer: {
      contentBase: path.join(__dirname, 'build'),
      historyApiFallback: true,
      inline: true,
      stats: {
         colors: true,
         reasons: true,
         chunks: false
      }
   },
};

module.exports = config;
