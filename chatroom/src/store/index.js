import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        headTitle:'',//聊天标题
        // chatContent:[],
        // 
        isActive:0,
        groupList:[

        ],
        perList:[]

    }
})
export default store