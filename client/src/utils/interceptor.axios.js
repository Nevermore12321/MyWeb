/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: interceptor.axios
 * @time: 2020/7/12 22:50
*/

import axios from 'axios';

//  服务器站点
axios.defaults.baseURL = 'http://127.0.0.1:6789'
//  是否跨站点
axios.defaults.withCredentials = true

//  发送请求前，做一些预处理，添加token
axios.interceptors.request.use((config) => {
    // todo 添加loading组件
    console.log('loading');
    return config;
}, (error) => (
    Promise.reject(error)
))
