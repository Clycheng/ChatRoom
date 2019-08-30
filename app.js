var ws = require('ws')
const url = require('url')
const WebScoketServer = ws.Server;
const requst = require('request')

var wss = new WebScoketServer({
    port: 1080, noServer: false,
    host: '0.0.0.0',
    verifyClient: ver,
    clientTracking: true
})
var cout = 0;
// 验证
var ret = true;
function ver(info) {
    // let newVal = url.parse(info.req.url, true).query
    // requst.get('http://47.98.213.151:8090/ver?name=' + newVal.user, (req, res) => {
    //     var resUser = JSON.parse(req.body).username
    //     if (!resUser == newVal.name) ret = false
    //     // if(!resUser) return false;
    //     ret = true
    // })
    return ret
}

var chatOnlineList = []
wss.on('connection', function (ws, req) {
    // 链接流程
    let username = url.parse(req.url, true).query.name
    queryName(username, function (res) {
        ws.userData = res
        if(chatOnlineList.length>0){
            for (let i = 0; i < chatOnlineList.length; i++) {
                if (chatOnlineList[i] === ws.userData.intname) {
                        ws.send(404)
                        break;
                }else if(i === chatOnlineList.length-1&&chatOnlineList[i] !== ws.userData.intname) {
              
                    chatOnlineList.push(ws.userData.intname)
                    wss.clients.forEach((item,index)=>{
                        item.send(ws.userData.intname+"来了,在线人数："+chatOnlineList.length)
                    })
                }else{
                    continue;
                }
            }
        }else{
            chatOnlineList.push(ws.userData.intname)
            wss.clients.forEach((item,index)=>{
                item.send(ws.userData.intname+"来了,在线人数："+chatOnlineList.length)
            })
        }
       
       
    })
    // 接受参数body:{
    // 是否为群:isGroup
    // 是：接受群id 群成员usernam =>查询群成员是否在线 =>遍历筛选在线群成员发送消息
    // 否:接受个人id username =>查询是否在线 =>发送消息

    // }

    ws.on('message', function (res) {
        console.log(JSON.parse(res))
        res = JSON.parse(res)
        queryGroup(res.groupId,(result)=>{
            // wss.clients.forEach(item => {
            //     item.send(result)
            // });
           console.log(result)
        })
        // let obj = {
        //     "message":res,
        //     "intname":ws.userData.intname,
        //     "headPic":ws.userData.headPic
        // }
       
    })
    ws.on('close',function(res){
        for (let index = 0; index < chatOnlineList.length; index++) {
           if (chatOnlineList[index] === ws.userData.intname){
                chatOnlineList.splice(index,1)
                wss.clients.forEach((item,index)=>{
                    item.send(ws.userData.intname+"下线了，在线人数："+chatOnlineList.length)
                })
           }
             
        }
    })
})
// 查询username详细信息
function queryName(e, callback) {
    requst.get('http://47.98.213.151:8090/ver?name=' + e, (req, res) => {
        callback(JSON.parse(res.body))
        // console.log(res.body)
    })
}

// 获取群成员
function queryGroup(e,callback){
    requst.get('http://47.98.213.151:8090/qClass?id='+e,(req,res)=>{
       callback(res.body)
    })
}