import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'
import state from './state.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 存放组件之间共享的数据
    state,
  // 获取数据的方法
    getters,
    actions,
  // 显式的更改state里的数据
    mutations
})
export default store
