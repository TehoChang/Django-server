  
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require('path')
   

  module.exports={
      mode:'development',
      entry:'./static/JS/index.js',
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
          }
        ]
      },
      plugins:[
        new HtmlWebpackPlugin({
            title:'Development',
        })
      ],

      output:{
          filename:'bundle.js',
          path:path.resolve(__dirname,'dist')
      }
  };

 

