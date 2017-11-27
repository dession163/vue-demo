import Vue from 'vue'
import Router from 'vue-router'

// 使用懒加载的组件
const thirtcomponment = resolve => require(['@/components/thirt-component'], resolve)
const secondcomponent = resolve => require(['@/components/second-component'], resolve)
const markdown = resolve => require(['@/components/Markdown-test'],resolve)
const httptest = resolve => require(['@/components/http-test'], resolve)
const listtest = resolve => require(['@/components/list-test'], resolve)

import home from '@/components/home.vue'
Vue.use(Router)

// 创建一个路由器实例
// 并且配置路由规则
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', name: 'home', component: home},
    {path: '/home', name: 'home', component: home},
    {path: '/markdown', name: 'markdown', component: markdown},
    {path: '/httptest', name: 'httptest', component: httptest},
    {path: '/listtest', name: 'listtest', component: listtest},
    {path: '/home/first', name: 'user', components: {firstrouterview: thirtcomponment, secondrouterview:secondcomponent}},
    {path: '/home/second', components: {firstrouterview: secondcomponent, secondrouterview:thirtcomponment,}},
  ]
})
export default router
