<template>
  <div id="app-5">
    <p>{{ message3 }}</p>
    <button v-on:click="reverseMessage">tran</button>
    <p>Cnt：{{ count }}</p>
  </div>
</template>

<script>
  import { mapState,mapMutations} from 'vuex'
  export default {
    name: 'app',
    data() {
      return {
        message3: 'AAAABBBCCC',
      }
    },
    //方法
    methods: {
//      响应按钮的方法一：
//      reverseMessage: function () {
//        this.message3 = this.message3.split('').reverse().join('')
//        // 调用stor中，increment()
//        this.$store.commit('increment')
//        //启用路由
//        this.$router.push("/home/first")
//
//      },

//    响应按钮的方法二：
      ...mapMutations({
        reverseMessage: 'increment', // 将【this.reverseMessage()】映射为【this.$store.commit('increment')】
      })
    },
    // 计算
    computed: {
      ...mapState({count: 'count'})  //将【this.count】映谢为【this.$store.state.count】.因为同名，也可以这样【...mapState(['count'])】
    },
  }
</script>

<style>

</style>
