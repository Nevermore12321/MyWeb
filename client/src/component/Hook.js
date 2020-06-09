import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

function StateEffectHook() {
    const [ count, setCount ] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    //   useEffect 函数体相当于 DidMount 生命周期函数，返回回掉函数，相当于 WillMount 生命周期函数
    //   useEffect 第一个参数是回调，第二个参数是一个数组
    //   空数组表示第一次渲染后执行 回调，且只执行一次
    //   非空数组 表示 只有在该数组改变了才会执行回调
    //   不传第二个数组参数 表示 每次渲染都执行回调
    useEffect(() => {
        document.title = `点击了${ count }次`;
    })

    return (
        <div>
            <h1>点击了 { count } 次</h1>
            <Button onClick={ handleClick }>Click</Button>
        </div>
    );
}

export default StateEffectHook;
