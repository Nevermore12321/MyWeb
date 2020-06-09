/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: HOC.js
 * @time: 2020/6/9 14:22
*/

import React from 'react';
import PropTypes from 'prop-types';

// 基本组件,其中需要取 prps 中的两个参数，hocTitle 通过父组件传入，而 hocName 通过 高阶组件 添加
function HOC(props) {
    const { hocName, hocTitle } = props;
    return (
        <div>
            <p>HOC title: {hocTitle}</p>
            <p>HOC test: {hocName}</p>
        </div>
    );
}

HOC.propTypes = {
    hocName: PropTypes.string,
    hocTitle: PropTypes.string,
}

/*  高阶组件，也就是 将 原先组件通过一个函数后，不修改组件结构，只是增加属性,或修改生命周期
*   类似于 装饰器，在组件函数后使用，增加组件的属性或生命周期
 */
function withAddTestName(WrappedComponent) {
    return (props) => <WrappedComponent { ...props } hocName="HOC Function" />;
}

export default withAddTestName(HOC);
