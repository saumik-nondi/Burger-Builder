const path=require("path");
const MiniCssExtractPlugin=require("mini-css-extract-plugin")

module.exports=(env)=>{
  const idProduction=env==="production";
  return{
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
                  use:[{
                    loader:MiniCssExtractPlugin.loader
                  },
                {
                  loader:"css-loader",
                  options:{
                    sourceMap:true
                  }
                }] 
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
     plugins:[new MiniCssExtractPlugin()],
     devtool: idProduction?"source-map":'inline-source-map',
     devServer:{
         contentBase:path.join(__dirname,"public"),
         historyApiFallback:true

     }
  }
}