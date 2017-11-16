
const serviceModule = {
  baiduTelematics:{
    url:'http://api.map.baidu.com/telematics/v3/weather',
    param:{
      "location":"广州",
      "output":"json",
      "ak":"HGOUnCXeQLEeywhGOu2jU29PFdC6duFF"
    },
    method: 'jsonp'
  },

  douban:{
    url:'https://api.douban.com/v2/movie/top250',
    param:{
      "count":"10"
    },
    method:'jsonp'
  }


}
const Api = {...serviceModule }
export default Api
