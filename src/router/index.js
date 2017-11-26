import Vue from 'vue'
import Router from 'vue-router'

// 使用懒加载的组件
const thirtcomponment = resolve => require(['@/components/thirt-component'], resolve)
const secondcomponent = resolve => require(['@/components/second-component'], resolve)

const markdown = resolve => require(['@/components/Markdown-test'],resolve)

const markdowndisplay = resolve => require(['@/components/Markdown-display'],resolve)

import home from '@/components/home.vue'
Vue.use(Router)

// 创建一个路由器实例
// 并且配置路由规则
const router = new Router({
  mode: 'history',
  base: __dirname,

  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: markdown
    },
    {
      path: '/markdown-display',
      name: 'markdowndisplay',
      component: markdowndisplay
    },
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
    },


    // {
    //   path:'/markdown',
    //   components:markdown,
    //
    // }
  ]
})


export default router
