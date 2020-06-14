import React from 'react';
import { Button } from 'antd';
import {
 BrowserRouter, Route, Link, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

function Home({ location }) {
    return (
        <div>
            <p>首页</p>
            {
                location.state && location.state.foo
                    ? <p>从详情页携带的参数: { location.state.foo }</p>
                    : null
            }

        </div>
    )
}

Home.propTypes = {
    location: PropTypes.object,
    state: PropTypes.object,
    foo: PropTypes.string,

}

function Course() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/detail/react">react</Link>
                </li>
                <li>
                    <Link to="/detail/vue">vue</Link>
                </li>
            </ul>
        </div>
    )
}

function Info() {
    return (
        <div>
            信息
        </div>
    )
}

function Detail({ match, history }) {
    // 可以直接拿 react-router 在 连接link中传来的参数
    return (
        <div>
            <p>详情: { match.params.course }</p>
            <Button type="primary" onClick={ () => history.push({ pathname: '/', state: { foo: 'bar' } }) }>返回首页</Button>
        </div>
    )
}

Detail.propTypes = {
    match: PropTypes.object,
    params: PropTypes.object,
    course: PropTypes.string,
    history: PropTypes.object,
}

function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/courses">课程</Link>
                </li>
                <li>
                    <Link to="/info">信息</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/courses" component={ Course } />
                <Route path="/info" component={ Info } />
                <Route path="/detail/:course" component={ Detail } />
            </Switch>
        </div>
    )
}

export default function ReactRouterTest() {
    return (
        <div>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </div>
    )
}
