import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.PureComponent {
    render() {
        window.console.log('title')
        const { title } = this.props;
        return (
            <div>
                标题: { title }
            </div>
        );
    }
}

Title.propTypes = {
    title: PropTypes.string,
}

class Count extends React.PureComponent {
    render() {
        window.console.log('count')
        const { count } = this.props;
        return (
            <div>
                次数: { count }
            </div>
        )
    }
}

Count.propTypes = {
    count: PropTypes.number,
}

export default class Footer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: 'MyHome',
            count: 0,
        };
    }

    componentDidMount() {
        setInterval(() => {
            const { count } = this.state;
            this.setState({
                count: count + 1,
            })
        }, 1000)
    }

    render() {
        const { title, count } = this.state;
        return (
            <div>
                <Title title={ title } />
                <Count count={ count } />
            </div>
        )
    }
}
