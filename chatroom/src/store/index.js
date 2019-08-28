import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        headTitle:'',//聊天标题
        // chatContent:[],

    }
})
export default store