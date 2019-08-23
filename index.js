const app = require("express")()
var sql = require('./mysql/sql.config')

// 解决跨域
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
      res.send(200);
    }
    else {
      next();
    }
  });

app.get('/ver',(req,res)=>{
    var username = req.query.name

    sql.query((results)=>{
      for(let i = 0; i <results.length; i ++){
          if ( username === results[i].username){
                res.send(results[i])
                return true
          }else{
              console.log('验证失败')
          }
      }
    })
})

app.listen(8090,function(){
    console.log("运行在8090端口")
})