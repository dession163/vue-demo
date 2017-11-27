/**
 * API 列表
 * @type {
 * url:     请求链接
 * param:   参数列表
 * method:  请求方式：get、post、jsonp
 */
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
  },

  local_setMemberInfo:{
    url:'IM/SetMemberInfo',//相当于请求同域下的：http://localhost:8080/IM/SetMemberInfo
    param:{
    },
    method:'get'
  },
}
const Api = {...serviceModule }
export default Api
