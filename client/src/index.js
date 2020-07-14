import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import loadingReducer from './redux/loading.store.reducer'
import userInfoReducer from './redux-saga/UserInfo/user.info.redux.reducer';
import UserSaga from './redux-saga/UserInfo/user.info.saga';
import App from './App';

//  combine reducer
const allReducers = combineReducers([
    userInfoReducer,
    loadingReducer,
]);

//  combine all saga take func (合并saga监听函数)
const allSagas = [ ...UserSaga ]

//  create saga middleware
const sagaMid = createSagaMiddleware();

//  create redux store
const store = createStore(allReducers, applyMiddleware(sagaMid, logger));

//  start saga(启动所有saga)
allSagas.map((sagaItem) => sagaMid.run(sagaItem))

ReactDom.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root'),
);
