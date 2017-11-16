<template>
  <div id="secondcomponent">
    <h1>Second</h1>
    <a> written by {{ author }} </a>
    <p> <a href="https://github.com/">github</a></p>
    <ul>
      <li v-for="article in articles">
        {{article.title}}
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
      articles: []
    }
  },

mounted: function() {
    httpClient.httpJsonp(api.douban.url,api.douban.param)
      .then(function(response) {
      // 这里是处理正确的回调
        console.log("douban:",response.title)
//        this.articles = response.subjects[0]
        // this.articles = response.data["subjects"] 也可以
    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });

//  this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10').then(function(response) {
//    // 这里是处理正确的回调
//    console.log("douban:",response)
//    this.articles = response.data.subjects
//    // this.articles = response.data["subjects"] 也可以
//
//  }, function(response) {
//    // 这里是处理错误的回调
//    console.log(response)
//  });

  }
}
</script>

<style>
</style>
