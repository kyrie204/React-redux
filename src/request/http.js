

import axios from 'axios'; // 引入axios
import store from '@/store/index'  //redux全局状态
import { routes } from '@/router'; //获取路由对象

// import qs from 'qs'; // 引入qs模块，用来序列化post类型的数据

// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//   axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'debug') {
//   axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//   axios.defaults.baseURL = '';
// }

// 请求超时时间
axios.defaults.timeout = 10000;
// post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token        
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
    // const token = store.state.token;        
    // token && (config.headers.Authorization = token);  
    // console.log(store.getState());
    // console.log(window.router);  
    return config;
  },
  error => {
    return Promise.error(error);
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
    // 否则的话抛出错误
    if (response.status === 200) {

      return Promise.resolve(response);
    } else {

      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {


      return Promise.reject(error.response);
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err)
    })
  });
}


/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, JSON.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err)
      })
  });
}
