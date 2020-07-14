/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: requests.axios
 * @time: 2020/7/10 21:22
*/

import { Modal } from 'antd'
import axios from './interceptor.axios';

//  todo request method
/**
 * axiosGet request method
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function axiosGet(url, params) {
    return new Promise((resolve, reject) => {
        //  异步请求， 如果成功，返回
        axios.get(url, params).then((res) => {
            resolve(res);
        }, (err) => {
            Modal.error({
                title: 'Request Error!',
                content: err.message,
            })
            reject(err);
        })
    })
}

/**
 * axiosPost request method
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的数据]
 */
function axiosPost(url, data) {
    return new Promise((resolve, reject) => {
        //  异步请求， 如果成功，返回
        axios.post(url, data).then((res) => {
            resolve(res);
        }, (err) => {
            Modal.error({
                title: 'Request Error!',
                content: err.message,
            })
            reject(err);
        })
    })
}

export {
    axiosGet,
    axiosPost,
}
