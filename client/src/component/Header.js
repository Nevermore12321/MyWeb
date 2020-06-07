import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            curDate: new Date(),
        };
    }

    componentDidMount() {
        this.timeID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick() {
        this.setState((preState, preProps) => {
            window.console.log(preProps);
            window.console.log(preState);
            return {
                curDate: new Date(),
            }
        });
    }

    render() {
        const { curDate } = this.state;
        return (
            <div>
                <h1>Clock</h1>
                <h2>It is { curDate.toLocaleTimeString() }</h2>
            </div>
        );
    }
}
