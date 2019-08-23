var ws = require('ws')
const url = require('url')
const WebScoketServer = ws.Server;
const requst = require('request')

var wss = new WebScoketServer({
    port:1080,noServer:false,
    host:'0.0.0.0', 
    verifyClient:ver,
    clientTracking:true
})
var cout = 0;
// 验证
var ret = true;
function ver(info){
   let newVal = url.parse(info.req.url,true).query
   requst.get('http://47.98.213.151:8090/ver?name='+newVal.user,(req,res)=>{
        var resUser = JSON.parse(res.body).username
        if(!resUser == newVal.username) ret = false
        // if(!resUser) return false;
        ret = true
   })
   return ret
}
wss.on('connection',function(ws,req){
    // console.log( url.parse(req.url,true).query)
    ws.UID = url.parse(req.url,true).query.name;
    cout ++;
   wss.clients.forEach(function(item,index){
       item.send(ws.UID+'来了')
   })
   ws.on('message',function(res){
    wss.clients.forEach(function(item,index){
        item.send(ws.UID+'说：'+res)
    })
})
})
