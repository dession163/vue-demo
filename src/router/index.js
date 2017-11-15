import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'

// 使用懒加载的组件
const thirtcomponment = resolve => require(['@/components/thirt-component'], resolve)
const secondcomponent = resolve => require(['@/components/second-component'], resolve)

Vue.use(Router)

// 创建一个路由器实例
// 并且配置路由规则
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/home/first',
      name: 'user',
      components: {
        firstrouterview: thirtcomponment,
        secondrouterview:secondcomponent
      }
    },
    {
      path: '/home/second',
      components: {
        firstrouterview: secondcomponent,
        secondrouterview:thirtcomponment,
      }
    }
  ]
})


export default router
