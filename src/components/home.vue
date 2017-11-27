<template>
  <div>
    <div id="app">
      <span v-bind:title="message1">！</span>
      <p v-if="seen">see</p>
      <p v-else>on see</p>
      <div id="input">
        <p>Get:{{ message2 }}</p>
        <input v-model="message2" placeholder="edit me">
      </div>
      <vuextest></vuextest>
      <firstcomponent></firstcomponent>
      <routertest></routertest>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { mapState,mapMutations} from 'vuex'
  export default {
    name: 'app',
    //数据
    data () {
      return {
        //这里的数据，其实也定义了相应控件显示的数据类型。例如seen是bool值，count为整型，message1为字符
        message1: '页面加载于 ' + new Date().toLocaleString(),
        seen: false,
        message2:'',
        videoOptions: {
          source: {
            type: "application/x-mpegURL",
            src: 'http://www.17sysj.com/video/76f7b7ac5940La',
            withCredentials: false
          },
          language: 'zh-CN',
          live: true,
          autoplay: true,
          height: 540
        }
      }
    },
    // 组件
    components: {
      firstcomponent:resolve => {require(['../components/first-component.vue'], resolve)},
      vuextest:resolve =>{require(['../components/vuex-test.vue'],resolve)},
      routertest:resolve =>{require(['../components/router-test.vue'],resolve)},
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
