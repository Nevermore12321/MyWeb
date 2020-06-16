//  初始化 state
const initLoginState = {
    isLogin: false,
};

//  reducer 函数
const loginReducer = (state = initLoginState, action) => {
    switch (action.type) {
        case 'login':
            return {
                isLogin: true,
            };
        case 'login_err':
            return {
                isLogin: false,
            };
        default:
            return state;
    }
};

export default loginReducer;

//  redux-saga 使用的 action 函数
//  这个 action 是 在dispatch后先经过 saga 捕获后的 action，然后再通过 saga 发出一个 修改state的action
//  也就是 dispatch 的是这个 action
const loginAction = () => (
    {
        type: 'login_request',
    }
);

export { loginAction };
