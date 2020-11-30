/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: interceptor.axios
 * @time: 2020/7/12 22:50
*/

import axios from 'axios';
import React from 'react';
import ReactDom from 'react-dom';
import { Spin } from 'antd';

//  先创建一个用来获取 csrf token 的 axios 实例
const csrfAxios = axios.create({
    baseURL: 'http://localhost:1234/v1',
    withCredentials: true,
})

//  再次创建 用来发送 普通请求的 axios 实例
const Axios = axios.create()

//  服务器站点
Axios.defaults.baseURL = 'http://localhost:1234/v1'
//  是否跨站点
Axios.defaults.withCredentials = true
//  设置 请求头
Axios.defaults.headers[ 'Content-Type' ] = 'application/json';

//  请求计数器，判断当前有多少个请求
let requestCounter = 0;

//  显示 loading 的函数，当 requestCounter 为 0 时， 显示 loading 组件Spin
//  如果 requestCounter 不为0 ，说明已经有 request 开启 loading 了
function showLoading() {
    if (requestCounter === 0) {
        // 创建一个 放 Spin 的 div
        const dom = document.createElement('div');
        dom.setAttribute('id', 'loading');
        document.body.appendChild(dom);
        ReactDom.render(<Spin tip="Loading ..." size="large" />, dom)
    }
    requestCounter += 1;
}

//  隐藏 loading 的函数， 首先收到response后，首先要把这个请求去掉，然后判断 requestCounter 是否为0
//  如果 requestCounter 为0， 表示已经没有了请求，需要隐藏 loading
function hideLoading() {
    requestCounter -= 1;

    if (requestCounter === 0) {
        document.body.removeChild(document.getElementById('loading'))
    }
}

//  全局 的 csrf Token 值
let globalCsrfToken = window.localStorage.getItem('csrfToken');
console.log('global csrf: ', globalCsrfToken)

//  在每个请求前，需要判断 localStorage 中有没有 csrfToken ，用来验证 csrf Token
//  如果有，则直接在 header 中添加X-Csrf-Token，如果没有，则需要先获取，/getCSRF
async function getCsrf() {
     await csrfAxios.get('/getCSRF').then((res) => {
        const csrfTokenTmp = res.headers[ 'x-csrf-token' ];
        window.localStorage.setItem('csrfToken', csrfTokenTmp);
        globalCsrfToken = csrfTokenTmp;
        Axios.defaults.headers[ 'X-Csrf-Token' ] = csrfTokenTmp;
    }).catch((err) => (Promise.reject(err)));
}

function test() {
    getCsrf()
}

if (globalCsrfToken) {
    Axios.defaults.headers[ 'X-Csrf-Token' ] = globalCsrfToken;
} else {
    test()
}

//  发送请求前，做一些预处理，添加token，加载 loading
Axios.interceptors.request.use((reqConfig) => {
    //  从 localStorage 中先拿到 csrf token ，如果没有，就先获取 csrf token， 接口为 /v1/admin/getCSRF
    const { token } = window.localStorage;
    const newReqConfig = reqConfig;

    if (token) {
        newReqConfig.headers.Authorization = `token ${ token }`;
    }

    // 添加loading组件, 如果requestCounter 不是0，就 增加1
    showLoading();

    return newReqConfig;
}, (error) => {
        //  隐藏loading组件, 如果requestCounter 不是0，就 减去1
        hideLoading();

        return Promise.reject(error);
});

//  收到响应后，在处理前做一些预处理，无论是否出错，都取消 loading
Axios.interceptors.response.use((resConfig) => {
    //  隐藏loading组件, 如果requestCounter 不是0，就 减去1
    hideLoading();
    console.log('before response')
    return resConfig;
}, (error) => {
    console.log(error.response)
    const newError = error;

    //  隐藏loading组件, 如果requestCounter 不是0，就 减去1
    hideLoading();

    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                newError.message = `400 错误请求。原因: ${ error.response.data.message }`
                break;
            case 401:
                // newError.message = '401 未授权，请重新登录'
                newError.message = `401 未授权，请重新登录。原因: ${ error.response.data.message }`
                break;
            case 403:
                newError.message = `403 拒绝访问。原因: ${ error.response.data.message }`
                break;
            case 404:
                newError.message = `404 请求错误,未找到该资源。原因: ${ error.response.data.message }`
                break;
            case 405:
                newError.message = `405 请求方法未允许。原因: ${ error.response.data.message }`
                break;
            case 408:
                newError.message = `408 请求超时。原因: ${ error.response.data.message }`
                break;
            case 500:
                newError.message = `500 服务器端出错。原因: ${ error.response.data.message }`
                break;
            case 501:
                newError.message = `501 网络未实现。原因: ${ error.response.data.message }`
                break;
            case 502:
                newError.message = `502 网络错误。原因: ${ error.response.data.message }`
                break;
            case 503:
                newError.message = `503 服务不可用。原因: ${ error.response.data.message }`
                break;
            case 504:
                newError.message = `504 网络超时。原因: ${ error.response.data.message }`
                break;
            case 505:
                newError.message = `505 http版本不支持该请求。原因: ${ error.response.data.message }`
                break;
            default:
                newError.message = `连接错误${ error.response.status }`
        }
    } else {
        newError.message = '连接到服务器失败'
    }
    return Promise.reject(newError.message)
});

export default Axios;
