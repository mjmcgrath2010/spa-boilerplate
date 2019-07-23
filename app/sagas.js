import { all } from 'redux-saga/effects';
import adminSaga from './containers/Admin/sagas';

export default function *rootSaga () {
    yield all([adminSaga()]);
    // code after all-effect
}
