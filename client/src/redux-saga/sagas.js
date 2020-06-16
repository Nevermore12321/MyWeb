import { call, put, takeEvery } from 'redux-saga/effects';

//  这里表示 登录需要的操作api，也就是发送 http 请求
const API = {
    //  用于登录的api
    login() {
        return new Promise((resolve, reject) => {
            //  生成随机数，判断登录成功或失败
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve({
                        id: 1,
                        name: 'Jack',
                    })
                } else {
                    reject(new Error('用户名密码错误'))
                }
            }, 2000)
        })
    },
}

//  saga 的生成器函数，也就是dispatch 后捕获action，先经过 saga 的处理
function* login() {
    try {
        //  这里就是 先经过 saga 处理的 操作，通过 call 调用 处理api
        const res = yield call(API.login);

        //  这里是 saga 处理完后，通过 put 将触发原本 redux 的 action 去修改 state
        yield put({
            type: 'login',
            value: res,
        })
    } catch (e) {
        yield put({
            type: 'login_err',
            value: e.message,
        })
    }
}

//  saga 的监听函数
function* mySaga() {
    //  takeEvery 监听函数，也就是 监听 saga action 为 login_request，当有dispatch 这个action时，触发 login 处理函数
    yield takeEvery('login_request', login);
}

export default mySaga;
