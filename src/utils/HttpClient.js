/**
 *  封装网络请求客户端
 *  用 axios 处理普通交互
 *  用 jsonp 处理跨域请求
 */
import axios from 'axios';
import originJsonp from 'jsonp'

class HttpClient{
  constructor (){
    this.init();
  };

  /**
   * 初始化
   */
  init(){
    // axios.defaults.baseURL = "/"; //defaults.baseURL;
  };

  /**
   * 判断是否返回数据
   * @param data 接收到的数据
   * @returns {boolean}
   * @private
   */
  _isStatus(data){
    if(data.code == 100){
      return false
    }else{
      return true
    }
  }

  /**
   * 全局错误处理
   * @param data 传入错误的数据
   * @private
   */
  _error(data){
    console.log(data)
  }

  /**
   * GET 请求 {es6解构赋值}
   * @param type 包含url信息
   * @param data 需要发送的参数
   * @returns {Promise}
   * @constructor
   */
  HttpGet(url,data) {
    console.log("HttpGet",data)
    this.promise = new Promise((resolve, reject)=> {
      axios.get(url,{params:data})
        .then((response) => {
          console.log("HttpGet:",response)
          // if(this._isStatus(data.data)){
          //   resolve(data.data);
          // }
          resolve(response.data);
        })
        .catch((error) =>{
          this._error(error);
        })
    })
    return this.promise;
  };

  /**
   * POST 请求
   * @param type Object 包含url信息
   * @param data Object 需要发送的参数
   * @param urlData Object 需要拼接到地址栏的参数
   * @returns {Promise}
   * @constructor
   */
  HttpPost(url,Data,urlData){
    // 判断是否加头部
    this._isLogin(url);
    // 创建一个promise对象
    this.promise = new Promise((resolve, reject)=> {
      for(const item in urlData){
        url +=  '/' + urlData[item];
      };
      axios.post(url,Data)
        .then((data) => {
          // 是否请求成功
          if(this._isStatus(data.data)){
            // // 是否需要存数据
            // if(this._isLogin(url)){
            //   this._setUserInfo(data.data)
            // };
            resolve(data.data)
          };
        })
        .catch((data) =>{
          this._error(data);
        })
    })
    return this.promise;
  };

  /**
   * HttpJsonp 跨域请求
   * @param type Object 包含url信息
   * @param data Object 需要发送的参数
   */
  httpJsonp(url,data, option){
    if ((url.indexOf('?') < 0)) {
      url += '?' + this._param(data);
    } else {
      url += '&' + this._param(data);
    }
    console.log("HttpJsonp-url:",url)
    return new Promise((resolve, reject) => {
      originJsonp(url, "",(err, data) => {
        if(!err){
          console.log("HttpJsonp-res:",data)
          resolve(data);
        }else{
          console.log("HttpJson-err:",err)
          reject(err);
        }
      });
    });
  }

  /**
   * 将data对象转化为get请求的键值链式 => key1=value1&key2=value2...
   * @param data
   * @returns {string}
   * @private
   */
  _param(data){
    if(data==null){
      return;
    }
    let url = '';
    for(let i in data){
      let value = data[i];
      url += '&' + i + '=' + encodeURIComponent(value);
    }
    return url ? url.substring(1) : '';
  }

};
export default new HttpClient();
