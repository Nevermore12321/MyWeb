import React from 'react';
import PropTypes from 'prop-types';

//  PureComponent  判断props属性是否有更新，没有更新就不刷新组件
class Title extends React.PureComponent {
    render() {
        // window.console.log('title')
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

//  Memo ，使得函数组件也具有 PureComponent 组件的功能
const Count = React.memo( (props) => {
    const { count } = props;
    // window.console.log('count')
    return (
        <div>
            次数: { count }
        </div>
    )
})
// class Count extends React.PureComponent {
//     render() {
//         window.console.log('count')
//         const { count } = this.props;
//         return (
//             <div>
//                 次数: { count }
//             </div>
//         )
//     }
// }

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
