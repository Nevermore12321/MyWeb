import React from "react";
import Navigator from "./component/Navigator";
import Header from "./component/Header";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navigator />
                <Header />
                <h1>
                    Hello World!
                </h1>
            </div>
        );
    }
}