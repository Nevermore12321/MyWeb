import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { UserReducer } from './Store/User.Redux';
import App from './App';

const store = createStore(UserReducer, applyMiddleware(thunk, logger));

ReactDom.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root'),
);
