/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: index.js
 * @time: 2020/6/18 15:04
*/

import React from 'react';
import { Row, Col, Tooltip } from 'antd';
import headListData from './header.config.data';
import './index.less';

export default function (props) {
    //   menu 组件
    //  通过 header 中 list 的配置文件，遍历 来生成 header 的 menu 菜单
    const MenuItem = headListData.map((item, index) => {
        //   遍历，headListData 中 父标题，在鼠标 悬挂时出现的 子标题, 返回每个 子标题的 整个 块
        const itemContent = item.children.map((childItem, childIndex) => (
            <a href={ childItem.link } className="tip-block" key={ childIndex.toString() }>
                <span className="tip-img">
                    <img src={ childItem.img } alt="img" />
                </span>
                <div className="tip-content">
                    { childItem.title }
                    <div>
                        { childItem.desc }
                    </div>
                </div>
            </a>
        ));

        //  返回 每个 父标题（tooltip) 与 其 子标题的 块
        //  一行中有 四个 父标题， 所以 每个 Col 占 6 份
        //   Tooltip 是文字提示， 可以规定触发行为，
        //   title 表示 鼠标触发后显示的内容，可以是字符串，也可以是组件。
        //   overlayClassName 表示出现卡片的类名
        //   placement 表示 从哪里出现
        return (
            <Col span={ 6 } key={ index.toString() }>
                <Tooltip title={ itemContent } overlayClassName="header-tip-wrap" placement="bottom">
                    <span className="nav-title">{ item.title }</span>
                </Tooltip>
            </Col>
        );
    });

    //   Header 组件
    return (
        <div { ...props } className="header-common">
            <Row className="nav">
                { MenuItem }
            </Row>
        </div>
    )
}
