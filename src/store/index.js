import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'
import state from './state.js'

Vue.use(Vuex)

// store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutation

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

//   使用示例
/*
1、同步state
computed: mapState([
  // 映射 this.count 为 store.state.count
  'count'
])
*/

/*
 2、用getter从 store 中的 state 中派生出一些状态
 getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }

 组件中的调用：
export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount'
      // ...
    ])
  }
}
* */

/*

3、用mutations更改 Vuex 的 store 中的状态，同步修改
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})
组件中的调用方法：
methods: {
  ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
  ])
}*/

/*
4、Action 类似于 mutation，不同在于：
    Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作。

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

组件中使用：
methods: {
  ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ])
  }*/

