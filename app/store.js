import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
//Reducers
import adminReducer from './containers/Admin/reducer';
// Sagas
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    adminReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
