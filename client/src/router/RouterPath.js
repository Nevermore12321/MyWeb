/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: RouterPath.js
 * @time: 2020/6/28 11:55
*/

import React from 'react';
import AdminPage from '@/pages/AdminPage/Layout';
import LoginPage from '@/pages/LoginPage/Layout';
import RegisterPage from '@/pages/RegisterPage/Layout';
import BlogHomePage from '@/pages/BlogHomePage/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RouteGuard from './RouteGuard';

export default function () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ AdminPage } />
                <Route path="/login" component={ LoginPage } />
                <Route path="/register" component={ RegisterPage } />
                <RouteGuard path="/blog" component={ BlogHomePage } />
            </Switch>
        </BrowserRouter>
    )
}
