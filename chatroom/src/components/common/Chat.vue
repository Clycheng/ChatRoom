<template>
  <div>
      <header>{{chat}}</header>
      <ul v-if="chatCat == 1" class = "list group-list">
          <li   v-for = "(item,index) in groupList" :key = "index" :class ="{active:index == isactive}"  @click="addactive(index)">
              <div class ="head-pic-warp"><img :src = "item.Gheadimg" alt=""></div>
              <div class = "head-name-warp"><i>{{item.groupName}}</i></div>
          </li>
      </ul>
       <ul v-if="chatCat == 2"  class = "list per-list">
          <li   v-for = "(item,index) in perList" :key = "index" :class ="{active:index == isActive}"  @click="addActive(index)">
              <div class ="head-pic-warp"><img :src = "item.headPic" alt=""></div>
              <div class = "head-name-warp"><i>{{item.intname}}</i></div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"Chat",
    props:["chatCat"],
    data(){
        return{
            isactive:0,
            isActive:0,
            groupList:[

            ],
            perList:[]
        }
    },
    methods:{
        // 单人
        addActive(res){
            console.log(res)
            this.isActive = res
            this.$store.state.headTitle = this.perList[this.isActive].intname
        },
        // 群聊天
        addactive(res){
            console.log(res)
            this.isactive = res
            this.$store.state.headTitle = this.groupList[this.isactive].groupName
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
        this.axios.get('http://47.98.213.151:8090/qClass?id='+groupCat).then(res=>{
            this.groupList = res.data
            this.$store.state.headTitle = this.groupList[this.isactive].groupName
        })
        let perList = sessionStorage.getItem('firendGroup')
        // console.log(perList)
        perList = perList.split('},')
        for (let index = 0; index < perList.length-1; index++) {
            perList [index] += '}'
        }
   perList.forEach(element => {
       this.perList.push(eval('(' + element + ')'))
    // console.log(eval('(' + element + ')'))
   });
   


        // this.perList = sessionStorage.getItem('firendGroup').split("}")
        //     this.perList.forEach(element => {
        //         element = JSON.parse(JSON.stringify(element =element.replace(/\s*/g,"")))
        //        console.log(element)
        //     });
        // this.list.push(JSON.parse(JSON.stringify(groupCat)))
    }

}
</script>

<style scoped>
    .list {
        width: 100%;
        height: 100%;
    }
    .list li.active{
        background: #c8c6c6
    }
    .list li {
        text-align: left;
        position: relative;
        width: 100%;
        height: 85px;
        /* background: black; */
    }
     .list li .head-pic-warp {
         float: left;
         width:25%;
         height: 100%;
     }
     .list li .head-pic-warp  img {
         margin-top: 10px;
         margin-left: 20px;
         width: 50%;
     }
     .list li .head-name-warp{
         float: right;
            width:75%;
            line-height: 350%;
         height: 100%;
     }
     .list li .head-name-warp i{
         display: inline-block;
         font-style: normal;
     }
</style>