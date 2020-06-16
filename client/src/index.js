import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import mySaga from './redux-saga/sagas';
import { UserReducer } from './Store/User.Redux';
import LoginReducerSaga from './redux-saga/user.redux.reducer';
import App from './App';

//  组合 所有 的 reducer，使用同一个 store
const allReducer = combineReducers({
    UserReducer,
    LoginReducerSaga,
});

//  创建 saga 的中间件
const sagaMid = createSagaMiddleware();

const store = createStore(allReducer, applyMiddleware(sagaMid, thunk, logger));
sagaMid.run(mySaga);

ReactDom.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root'),
);
