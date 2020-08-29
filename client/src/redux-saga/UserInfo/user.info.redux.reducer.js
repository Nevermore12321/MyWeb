/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: user.info.redux.reducer.js
 * @time: 2020/6/28 16:19
*/

//  初始化  user info state
const userInfoStateInit = {
    isLogin: false,
    userName: '',
};

//  userInfoState 的 reducer 函数
const userInfoReducer = (state = userInfoStateInit, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLogin: true,
                userName: action.username,
            };
        case 'CHANGEPROFILE':
            return action.payload;
        case 'ERR':
            return {
                isLogin: false,
                userName: '',
            }
        default:
            return state;
    }
};

export default userInfoReducer;

//  redux-saga 的 action 操作， 也就是在 redux 修改state前，saga 做的操作
//  loginAction 登录操作
const loginAction = (data) => (
    {
        type: 'login_action',
        payload: data,
    }
);

//  modifyInfoAction 修改用户信息
const modifyInfoAction = () => (
    {
        type: 'modify_info_action',
    }
)
export {
    loginAction,
    modifyInfoAction,
}
