const path = require('path');

module.exports={
  entry:{
    app:path.join(__dirname,'src','app.js')
  },
  output:{
    path:path.join(__dirname,'public','js'),
    filename:'[name].bundle.js'
  },
  watch:true,
  module:{
    loaders:[
      {
        test:/\.scss$/,
        exclude:/node_modules/,
        loader:'style-loader!css-loader!sass-loader'
      }
    ]
  }


}
