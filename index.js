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
// 验证用户名
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
// 查询分组信息
app.get('/qClass',(req,res)=>{
    let resData = req.query
    resData = resData.id.split(',')
    console.log(resData)
    sql.qClass((result)=>{
      let arr = [];
      for (let i = 0; i <result.length; i++){
        for(let z = 0; z < resData.length; z ++){
          if(result[i].id == resData[z]){
            arr.push(result[i])
          }
        }
      }
      console.log(arr)
      res.send(arr)
   }) 
})
app.get('/classId',(req,res)=>{
  let resData = req.query.id
  console.log(resData)
  sql.qClass((result)=>{
    for (let i = 0; i <result.length; i++){
        if(result[i].id == resData){
          console.log(result[i].teamItem)
          res.send(result[i].teamItem)
        }
      }
    })
   
 }) 
// })
app.listen(8090,function(){
    console.log("运行在8090端口")
})