/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: RouteGuard.js
 * @time: 2020/6/28 15:02
*/

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

function PreRouteGuard(props) {
    const { component: SrcComponent, isLogin, ...otherProps } = props;
    console.log(isLogin)
    return (
        <Route
            { ...otherProps }
            render={
                (newProps) => (
                    isLogin
                        ? <SrcComponent { ...newProps } />
                        : (<Redirect to={ { pathname: '/login', state: { from: props.location.pathname } } } />)
                )
            }
        />
    )
}

PreRouteGuard.propTypes = {
    component: PropTypes.func,
    isLogin: PropTypes.bool,
    location: PropTypes.object,
    pathname: PropTypes.string,
}

export default connect(
    (state) => ({ isLogin: state.userLoginStatus.isLogin }),
)(PreRouteGuard);
