import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_USER_REQUEST, fetchUserSuccess, fetchUserFailure } from '../actions/userActions';
import { fetchUserApi } from '../../api/userApi'; 

function* fetchUserSaga() {
  try {
    const user = yield call(fetchUserApi);  
    yield put(fetchUserSuccess(user));  
  } catch (error) {
    yield put(fetchUserFailure(error.message)); 
  }
}

function* userSaga() {
  yield takeEvery(FETCH_USER_REQUEST, fetchUserSaga);  
}

export default userSaga;
