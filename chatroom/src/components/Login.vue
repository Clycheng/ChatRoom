<template>
  <div >
<div id = "loginWarp" v-bind:style="{  height: WinHeight + 'px' }">
    <!-- 登陆框 -->
    <div class = "login">
        <!-- head -->
        <div class = "login-head">欢迎登陆密聊</div>
        <div class = "login-name">
          <input type="text" id = "admin" v-model="adminName">
          <p>{{ale}}</p>
        </div>
        <div class = "head-img">
            <ul>
              <li  v-for="(item,index) in headPicList"  @click="addClass(index)" :class ="{active:index == isactive}" :key = "index">
                <img :src="item" alt="">
              </li>
              <li id = "message">请选择您的头像</li>
            </ul>
        </div>
        <div class = "login-btn" @click="login">登陆</div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name:"Login",
  data(){
    return{
      isactive:999,
      adminName:'',
      WinHeight:'',
     fontSize: 30,
     headPicList:[
       require('@/assets/head/0.jpg'),
       require('@/assets/head/1.jpg'),
       require('@/assets/head/2.jpg'),
       require('@/assets/head/3.jpg'),
       require('@/assets/head/4.jpg'),
       require('@/assets/head/5.jpg'),
       require('@/assets/head/6.jpg'),
       require('@/assets/head/7.jpg'),
       require('@/assets/head/8.jpg'),
       require('@/assets/head/9.jpg'),
     ],
     ale:"请输入您的用户名，如未注册请联系管理员"
    }
    
  },
  computed:{
  },
  methods:{
    addClass:function(res){
     this.isactive = res
    },
    login(){
      // console.log(this.adminName)
      this.axios.get('http:/47.98.213.151:8080/ver?name='+this.adminName).then((res)=>{
        console.log(res)
      })
    }
  },
  mounted(){
    console.log(window.outerHeight)
     var wH = window.innerHeight = 0 ? window.innerHeight : document.documentElement.clientHeight;
    this.WinHeight = window.outerHeight
    console.log(this.WinHeight)
  }
  
}
</script>

<style scoped>
  #loginWarp{
    width: 100%;
    background: rgb(59, 158, 197);
    overflow: hidden;
  }
  .login {
    width: 50%;
    height:50%;
    margin: 100px auto;
    background: white;
  
    box-shadow: 1px 1px 10px rgb(112, 110, 110);
     

  }
  .login .login-head {
    width: 100%;
    height: 15%;
    line-height: 200%;
    text-align: center;
    color:rgb(59, 158, 197); 
    font-size: 150%;
    background: rgba(45, 110, 119,0.2)
  }
  .login .login-name {
     overflow: hidden;
    width: 100%;
    height: 35%;
    /* background: red; */
  }
   
  .login .login-name p {
    text-align: center;
    margin-top: 10px;
    color: brown
  }
  .login .head-img{
    width: 100%;
    height: 35%;
    /* background: blue; */
  }
  .login .head-img ul  {
    width: 100%;
    height: 100%;
    border: 1px solid rgb(59, 158, 197); 
    box-sizing: border-box;
  }

  .login .head-img ul li{
    float: left;
    width: 10%;
    height: 50%;
    border: 1px solid rgb(59, 158, 197); 
    box-sizing: border-box;
  }
  .login .head-img ul li#message{
    width: 100%;
    height: 50%;
    line-height: 240%;
    text-align: center;
    font-size: 150%;
    color: brown;
  }
  .login .head-img ul li.active {
border: 2px solid  rgb(0, 132, 255);
  }
  .login .head-img ul li img {
    width: 98%;
    height: 98%;
    overflow: hidden
  }
  .login .login-btn {
    width: 100%;
    height: 15%;
    background: rgb(0, 132, 255);
    line-height: 230%;
    color: white;
     text-align: center;
     cursor: pointer;
    font-size: 150%;
  }
  .login .login-btn:hover{
    box-shadow: 2px 2px 10px rgb(59, 158, 197); 
  }
  #admin {
    display: block;
    width: 65%;
    height: 35%;
    margin:0 auto;
    margin-top: 20px;
    outline-style: none;
    border: 1px solid rgb(30, 209, 233);
    border-radius: 5px;
   font-size: 120%;
  }

</style>