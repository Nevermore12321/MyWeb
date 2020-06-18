/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: index.js
 * @time: 2020/6/18 15:04
*/

import React from 'react';
import AdminLogo from './AdminLogo';
import './index.less';

export default function () {
    return (
        <div className="adminheader">
            <AdminLogo />
            <p>Header</p>
        </div>
    )
}
