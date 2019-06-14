const path=require("path");
module.exports={
    entry:"./src/app.js",
    mode:"development",
    
    output:{
        path:path.join(__dirname,'public'),
        filename:"bundle.js"
    },
        module: {
         rules:[{
            loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
              },{
                  test:/\.s?css$/,
                  use:['style-loader',
                       "css-loader",
                        'sass-loader']
              },
              {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
              }
            
            
            
            ]
     },
     devtool:'cheap-module-eval-map',
     devServer:{
         contentBase:path.join(__dirname,"public"),
         historyApiFallback:true

     }
}