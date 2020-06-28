import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import userInfoReducer from './redux-saga/UserInfo/user.info.redux.reducer';
import UserInfoSaga from './redux-saga/UserInfo/user.info.saga';
import App from './App';

//  combine reducer
const allReducers = combineReducers([
    userInfoReducer,
]);

//  create saga middleware
const sagaMid = createSagaMiddleware();

//  create redux store
const store = createStore(allReducers, applyMiddleware(sagaMid, logger));

//  start saga
sagaMid.run(UserInfoSaga);

ReactDom.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root'),
);
