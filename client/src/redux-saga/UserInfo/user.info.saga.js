/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: user.info.saga.js
 * @time: 2020/6/28 17:06
*/

import { call, put, takeEvery } from 'redux-saga/effects';
import { axiosGet } from '@/utils/requests.axios';

//  saga 捕捉后 执行的 操作
const loginOperation = () => {
    console.log('test saga')
    return new Promise((resolve, reject) => {
        axiosGet('/hello').then((res) => {
            console.log(res.status);
            console.log(res.data);
            resolve(res.data);
        }).catch((err) => {
            console.log(err)
            reject(err);
        })
    })
}

//  捕捉后 调用 loginOperation 函数并且 dispatch 给 redux 修改 state的值
function* loginSagaOperation() {
    try {
        //  这里就是 先经过 saga 处理的 操作，通过 call 调用 处理api
        const res = yield call(loginOperation);
        //  如果成功返回，就登陆成功，重定向页面
        window.location.href = '/';
        //  这里是 saga 处理完后，通过 put 将触发原本 redux 的 action 去修改 state
        yield put({
            type: 'LOGIN',
            payload: res,
        });
    } catch (e) {
        yield put({
            type: 'ERR',
            payload: e.message,
        });
    }
}

//  saga 的监听函数
function* LoginSaga() {
    //  takeEvery 监听函数，也就是 监听 saga action 为 login_request，当有dispatch 这个action时，触发 login 处理函数
    yield takeEvery('login_action', loginSagaOperation);
}

const modifyInfoOperation = () => {
    console.log('test');
    return {
        isLogin: true,
        userNmae: 'Jack',
    }
}

function* ModifyInfoSagaOperation() {
    try {
        const res = yield call(modifyInfoOperation);
        //  这里是 saga 处理完后，通过 put 将触发原本 redux 的 action 去修改 state
        yield put({
            type: 'LOGIN',
            payload: res,
        });
    } catch (e) {
        yield put({
            type: 'ERR',
            payload: e.message,
        });
    }
}

function* UserInfoSaga() {
    yield takeEvery('modify_info_action', ModifyInfoSagaOperation);
}

const UserSaga = [ LoginSaga, UserInfoSaga ]

export default UserSaga;
