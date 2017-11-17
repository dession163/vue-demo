<template>
  <div id="secondcomponent">
    <h1>Second</h1>
    <a> written by {{ author }} </a>
    <p> <a href="https://github.com/">github</a></p>
    <ul>
      <li v-for="subject in subjects">
        {{subject.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  import httpClient from '../utils/HttpClient'
  import api from '../utils/API'
export default {
  data() {
    return {
      author: "dddddddd",
      subjects: []
    }
  },

mounted: function() {
    httpClient.httpJsonp(api.douban.url,api.douban.param)
      .then((data)=> {
      // 这里是处理正确的回调
        console.log("douban:",data.subjects)
        this.subjects = data.subjects  // this.articles = response.data["subjects"] 也可以
    })
      .catch((error)=>{
      // 异常回调
        console.log(error)
    })
  }
}
</script>

<style>
</style>
