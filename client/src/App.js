import React from 'react';
import Navigator from './component/Navigator';
import Header from './component/Header';
import Footer from './component/Footer';
import HOC from './component/HOC';
import Context from './component/Context';
import StateHook from './component/Hook';
import UseReducer from './component/UseReducer';
import ReactRouterTest from './Router/Router.Test';
import './App.less'
import ReduxComponent from './Store/ReduxComponent';

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
                <ReduxComponent />
                <ReactRouterTest />
                <Footer />
            </div>
        );
    }
}
