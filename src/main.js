import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router  from './router'
//store为实例化生成的
import store from './store'
import $ from 'jquery'

import './assets/bootstrap/js/bootstrap.min'

// load the style
import './assets/bootstrap/css/bootstrap.min.css'
// import './assets/css/lists-style.css'
import './assets/css/homeindex.css'


//markdown编辑器需要的样式
import './assets/css/fontello.css'
import './assets/css/fontello-codes.css'
import './assets/css/animation.css'


//开启debug模式
Vue.config.debug = true;

Vue.use(VueResource);

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
