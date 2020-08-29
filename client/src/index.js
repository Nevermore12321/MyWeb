import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { PersistGate } from 'redux-persist/integration/react';
import loadingReducer from './redux/loading.store.reducer'
import userInfoReducer from './redux-saga/UserInfo/user.info.redux.reducer';
import UserSaga from './redux-saga/UserInfo/user.info.saga';
import App from './App';

//  configure the persist redux
const persistConfig = {
    key: 'user',
    storage: storageSession,
}

//  combine reducer include persist reducer
const allReducers = combineReducers({
    userLoginStatus: persistReducer(persistConfig, userInfoReducer),
    loading: loadingReducer,
});

//  combine all saga take func (合并saga监听函数)
const allSagas = [ ...UserSaga ]

//  create saga middleware
const sagaMid = createSagaMiddleware();

//  create redux store
const store = createStore(allReducers, applyMiddleware(sagaMid, logger));

// create persist redux store
const persistorTmp = persistStore(store)

//  start saga(启动所有saga)
allSagas.map((sagaItem) => sagaMid.run(sagaItem))

ReactDom.render(
    <Provider store={ store }>
        <PersistGate persistor={ persistorTmp }>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
