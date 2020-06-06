import React from "react";
import Navigator from "./component/Navigator";
import Header from "./component/Header";
import './App.less'

export default class App extends React.Component {
    render() {
        return (
            <div className='logo'>
                <Navigator />
                <Header />
                <h1>
                    Hello World!
                </h1>
            </div>
        );
    }
}