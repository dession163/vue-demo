<template>

  <div>
    <p>http:{{}}</p>
      <input type="button" @click="get()" value="按钮get">
      <input type="button" @click="post()" value="按钮post">
  </div>

</template>

<script>
  import {mapMutations, mapActions, mapGetters, mapState}     from 'vuex'
  export default {
    methods: {
//      ...mapActions(['setMemberInfo']),
      get: function () {
        //发送get请求
        this.$http.get('http://127.0.0.1:8082/IM/SetMemberInfo')
          .then((response) => {
            alert(response.data)
          })
          .catch((response) => {
            alert('请求失败处理')
          });
      }
    }
  }
</script>

<style>

</style>
