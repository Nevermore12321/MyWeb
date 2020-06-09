/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: Context.js
 * @time: 2020/6/9 15:48
*/

import React from 'react';

const infoStore = {
    name: 'shaohe',
    age: 24,
}
const infoContext = React.createContext();
const { Provider, Consumer } = infoContext;

function Info() {
    return (
        <Consumer>
            {
                (contextStore) => {
                    const { name, age } = contextStore;
                    return (
                        <div>
                            <p>姓名: { name }</p>
                            <p>年龄: { age }</p>
                        </div>
                    )
                }
            }
        </Consumer>
    )
}

function Toolbar() {
    return (
        <Info />
    )
}

function Context() {
    return (
        <div>
            <Provider value={ infoStore }>
                <Toolbar />
            </Provider>
        </div>
    )
}

export default Context;
