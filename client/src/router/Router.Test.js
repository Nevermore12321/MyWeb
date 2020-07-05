// import React from 'react';
// import { Button } from 'antd';
// import {
//  BrowserRouter, Route, Link, Switch, Redirect,
// } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { loginAction } from '../redux-saga/user.redux.reducer';
//
// function Home({ location }) {
//     return (
//         <div>
//             <p>首页</p>
//             {
//                 location.state && location.state.foo
//                     ? <p>从详情页携带的参数: { location.state.foo }</p>
//                     : null
//             }
//
//         </div>
//     )
// }
//
// Home.propTypes = {
//     location: PropTypes.object,
//     state: PropTypes.object,
//     foo: PropTypes.string,
//
// }
//
// function Course() {
//     return (
//         <div>
//             <ul>
//                 <li>
//                     <Link to="/detail/react">react</Link>
//                 </li>
//                 <li>
//                     <Link to="/detail/vue">vue</Link>
//                 </li>
//             </ul>
//         </div>
//     )
// }
//
// function Info() {
//     return (
//         <div>
//             信息
//         </div>
//     )
// }
//
// function Detail({ match, history }) {
//     // 可以直接拿 react-router 在 连接link中传来的参数
//     return (
//         <div>
//             <p>详情: { match.params.course }</p>
//             <Button
//             type="primary"
//             onClick={
//             () => history.push({ pathname: '/', state: { foo: 'bar' } }) }>返回首页</Button>
//         </div>
//     )
// }
//
// Detail.propTypes = {
//     match: PropTypes.object,
//     params: PropTypes.object,
//     course: PropTypes.string,
//     history: PropTypes.object,
// }
//
// function UserInfo() {
//     return (
//         <div>
//             <ul>
//                 <li> Change Username </li>
//                 <li> Change Password </li>
//             </ul>
//         </div>
//     )
// }
//
// function PreRouteGuard(props) {
//     const { component: Component, isLogin, ...otherProps } = props;
//     return (
//         <Route
//             { ...otherProps }
//             render={
//                 (newProps) => (
//                     isLogin
//                         ? <Component { ...newProps } />
//                         : (<Redirect
//                         to={
//                         {
//                             pathname: '/login', state: { from: props.location.pathname } }
//                         }
//                         />)
//                 )
//         }
//         />
//     )
// }
//
// PreRouteGuard.propTypes = {
//     component: PropTypes.func,
//     location: PropTypes.object,
//     pathname: PropTypes.string,
//     isLogin: PropTypes.bool,
// }
//
// //  使用 redux-saga 中的state
// const RouteGuard = connect(
//     (state) => ({ isLogin: state.LoginReducerSaga.isLogin }),
// )(PreRouteGuard);
//
// function PreLogin(props) {
//     const { isLogin, login, location } = props;
//     console.log(isLogin);
//     const srcState = location.state;
//
//     //  如果 from 不存在，就是直接通过浏览器输入 /login 进入的，而不是通过 /mine 进入的 /login
//     //  /mine 进入，会传入 pathname 和 from 属性
//     const from = (srcState && srcState.from) || '/';
//
//     if (isLogin) {
//         return <Redirect to={ from } />
//     }
//     return (
//         <div>
//             <p>登录</p>
//             <Button type="primary" onClick={ login }>用户登录</Button>
//         </div>
//     )
// }
//
// PreLogin.propTypes = {
//     location: PropTypes.object,
//     state: PropTypes.object,
//     from: PropTypes.string,
//     isLogin: PropTypes.bool,
//     login: PropTypes.func,
// }
//
// //  Login 组件 使用 redux-saga 的state
// const Login = connect(
//     (state) => ({ isLogin: state.LoginReducerSaga.isLogin }),
//     {
//         login: loginAction,
//     },
// )(PreLogin);
//
// function App() {
//     return (
//         <div>
//             <ul>
//                 <li>
//                     <Link to="/">首页</Link>
//                 </li>
//                 <li>
//                     <Link to="/courses">课程</Link>
//                 </li>
//                 <li>
//                     <Link to="/info">信息</Link>
//                 </li>
//                 <li>
//                     <Link to="/mine">我的</Link>
//                 </li>
//             </ul>
//             <Switch>
//                 <Route exact path="/" component={ Home } />
//                 <Route path="/courses" component={ Course } />
//                 <Route path="/info" component={ Info } />
//                 <Route path="/login" component={ Login } />
//                 <Route path="/detail/:course" component={ Detail } />
//                 { /* 路由守卫， path 和 component 作为参数传入 UserInfo 组件 */ }
//                 <RouteGuard path="/mine" component={ UserInfo } />
//             </Switch>
//         </div>
//     )
// }
//
// export default function ReactRouterTest() {
//     return (
//         <div>
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//         </div>
//     )
// }
