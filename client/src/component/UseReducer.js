import React, { useReducer } from 'react';
import { Button } from 'antd';

const initState = {
    name: 'UseReducer',
    count: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'RESET':
            return initState;
        case 'ADD':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'REDUCE':
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export default function UseReducer() {
    const [ state, dispatch ] = useReducer(reducer, initState);
    return (
        <div>
            <p>名称: { state.name }</p>
            <p>次数: { state.count }</p>
            <Button type="primary" onClick={ () => dispatch({ type: 'RESET' }) }>Reset</Button>
            <Button type="primary" onClick={ () => dispatch({ type: 'ADD' }) }>Add</Button>
            <Button type="primary" onClick={ () => dispatch({ type: 'REDUCE' }) }>Reduce</Button>
        </div>
    )
}
