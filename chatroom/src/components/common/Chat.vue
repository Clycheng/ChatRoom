<template>
  <div>
      <header>{{chat}}</header>
      <ul class = "list">
          <li v-for = "(item,index) in list" :key = "index">
              <img :src = "item.gimg" alt="">
              <i>{{item.gname}}</i>
          </li>
      </ul>
  </div>
</template>

<script>
import { constants } from 'fs';
export default {
    name:"Chat",
    props:["chatCat"],
    data(){
        return{
            list:[

            ]
        }
    },
 computed:{
     chat(){
         if(this.chatCat ==1){
             return '群聊天'
         }else{
             return '单聊'
         }
     }
 },
    mounted(){
        let groupCat =  sessionStorage.getItem('groupCat')
        this.list = []
        this.list.push(JSON.parse(groupCat))
    }

}
</script>

<style scoped>
    .list {
        width: 100%;
        height: 100%;
    }
    .list li {
        text-align: left;
        position: relative;
        width: 100%;
        height: 85px;
        line-height: 85px;
        /* background: black; */
    }
    .list li img {
        display: block;
        float: left;
        width: 20%;
        height: 70%;
    }
</style>