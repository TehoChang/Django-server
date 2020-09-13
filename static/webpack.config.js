  
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require('path')
const webpack=require('webpack')
   

  module.exports={
      mode:'development',
      entry:'./JS/index.js',
      devServer:{
          contentBase:'./dist'
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          { test: /\.css$/, 
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.s[ac]ss$/i,
            use:[
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ]
          }
        ]
      },
      plugins:[
        new HtmlWebpackPlugin({
            title:'Development',
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html'
        })
      ],

      output:{
          filename:'bundle.js',
          path:path.resolve(__dirname,'dist')
      }
  };

 

