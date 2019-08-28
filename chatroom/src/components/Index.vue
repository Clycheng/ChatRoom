<template>
  <div>
    <el-container>
      <el-aside width="5%">
        <div class="head">
          <img :src="headImg" alt />
        </div>
        <div class="list">
          <ul>
            <li  @click="changActive" :class="{active:isActive == 1}">
             <i class = "el-icon-info
          "></i>
            </li>
            <li   @click="changActive" :class="{active:isActive == 2}"> <i class = "el-icon-star-on
            "></i></li>
          </ul>
        </div>
      </el-aside>
      <el-aside class="list-cat" >
        <div v-if = "isActive ==1" class = "group-list" :class="{active:isActive == 1}">
           <Chat :chat-cat = 'isActive'></Chat>
        </div>
        <div v-if = "isActive ==2" class = "per-list" :class="{active:isActive == 2}">
         <Chat :chat-cat = 'isActive'></Chat>
        </div>
      </el-aside>
      <el-container>
        <el-header>{{this.$store.state.headTitle}}</el-header>
        <el-main><ul id = "chatList-warp">
          <li  class = "chatList" v-for="(item,index) in chatList" :key="index" :class ="{ownactive:item.own == true}">
            <div>
              <img :src="item.img" alt="">
            <i>{{item.name}}</i>
            <p>{{item.message}}</p>
            </div>
            
          </li>
        </ul>　<div class="clearfloat"></div></el-main>
        <el-footer>输入框</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Chat from '@/components/common/Chat'
export default {
  name: "Index",
  data() {
    return {
      headImg: "",
      isActive:1,
      chatList:[
        {
          img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=571610305,1553276443&fm=26&gp=0.jpg',
          name:'苏峰',
          own:false,
          message:'我是苏峰我是苏峰我是苏峰我是苏峰我是苏峰我是苏峰我是苏峰我是苏峰我是苏峰我是苏峰我是苏峰我是苏峰我是苏峰'
        },
         {
          img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=571610305,1553276443&fm=26&gp=0.jpg',
          name:'高露',
          own:false,
          message:'我是高露我是高露我是高露我是高露我是高露我是高露我是高露我是高露我是高露我是高露我是高露我是高露我是高露我是高露我是高露我是高露'
        },
          {
          img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1367423687,185986171&fm=26&gp=0.jpg',
          name:'程晓磊',
          own:true,
          message:'我是管理员我是管理员我是管理员我是管理员我是管理员我是管理员我是管理员我是管理员我是管理员我是管理员我是管理员我是管理员我是管理员我是管理员'
        }
      ]
    };
  },
  components:{
    Chat,
  },
  mounted() {
    this.headImg = sessionStorage.getItem("headPic");
  },
  methods:{
    changActive(e){
     this.isActive = this.isActive ==1?2:1
    }
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #f5f5f5;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header {
box-shadow: 2px 1px 5px #888888;
z-index: 99
}
.el-footer {
box-shadow: 2px -1px 5px #888888;
z-index: 99
}

.el-aside {
  background-color: hsl(220, 7%, 16%);
  text-align: center;
  /* line-height: 200px; */
}
.el-aside.list-cat {
  background-color: #eeeae8;
}
.el-main {
  background-color: #f5f5f5;
  color: #333;
  text-align: center;
  
  /* line-height: 160px; */
}
.el-main::-webkit-scrollbar{
  display: none;
}

.el-container {
  margin-bottom: 40px;
  height: 400px;
}

/* .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
} */

/* .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */

.head {
  width: 100%;
  height: 20%;
  line-height: 150%;
  /* background: red; */
  text-align: center;
}
.head img {
  margin-top: 20px;
  width: 50%;
  cursor: pointer;
  height: 40%;
}
.list ul li {
  margin-top: 15px;
  width: 100%;
  height: auto;
  line-height: 50px;
}
.list ul li i {
  font-size: 25px;
  color: white;
}
.list ul li.active {
  background: #09bb07;
}
.list ul li i.active {
  color: white;
}

.group-list{
   display: none;
  width: 100%;
  height: 100%;
  /* background: red; */
}
.group-list.active {
  display: block;
}
.per-list {
  display: none;
  width: 100%;
  height:100%;
  /* background:aqua; */
}
.per-list.active {
  display: block;
}

/* 聊天内容框 */
#chatList-warp{
  overflow: scroll;
  height: 280px;
}
#chatList-warp::-webkit-scrollbar{
  display: none;
}
#chatList-warp li{
  float: left;
width: 100%;
height: auto;
/* background: red; */
margin-bottom: 10px;
}
#chatList-warp li img {
  display: block;
  float: left;
  width:5%;
  
}
#chatList-warp li i {
  font-style: normal;
  float: left;
  margin-left: 10px;
  font-size: 14px;
  color:#bebebe
}
#chatList-warp li p {
  padding-top: 25px;
  width: 50%;
  margin-left: 6%;
  text-align: left;
  /* float: left; */
}
#chatList-warp li.ownactive img{
 float: right;
}
#chatList-warp li.ownactive i{
  float: right;
  margin-right: 14px;
}
#chatList-warp li.ownactive p{
  padding-top: 25px;
  float: right;
  width: 50%;
  margin-right: -6%;
  text-align: right;
}
</style>