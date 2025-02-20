import { all } from 'redux-saga/effects';
import userSaga from '../features/user/sagas/userSaga';

export default function* rootSaga() {
  yield all([
    userSaga(), 
  ]);
}
