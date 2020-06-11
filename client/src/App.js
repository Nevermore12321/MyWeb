import React from 'react';
import Navigator from './component/Navigator';
import Header from './component/Header';
import Footer from './component/Footer';
import HOC from './component/HOC';
import Context from './component/Context';
import StateHook from './component/Hook';
import UseReducer from './component/UseReducer';
import './App.less'

export default class App extends React.PureComponent {
    render() {
        return (
            <div className="logo">
                <Navigator />
                <Header />
                <h1>
                    Hello World!
                </h1>
                <HOC hocTitle="父组件 props" />
                <Context />
                <StateHook />
                <UseReducer />
                <Footer />
            </div>
        );
    }
}
