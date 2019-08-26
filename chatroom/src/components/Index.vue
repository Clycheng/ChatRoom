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
        <el-header>标题</el-header>
        <el-main>聊天内容</el-main>
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
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
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
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
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
  height: 50px;
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
</style>