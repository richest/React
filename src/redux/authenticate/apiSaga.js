import {all, call, put, takeLatest} from 'redux-saga/effects'
import actions from './actions';
import { auth } from '../../app/config/endpoints/api';
import { setOnLocalStorage, removeFromLocalStorage } from '../../utils/localStorage';;
import {postRequest, posttRequest, getCustomRequest, getRequest, deleteRequest} from '../../app/httpClient/axiosClient'

function* login(action) {
  try {
    // yield call(() => getCustomRequest('sanctum/csrf-cookie'));
    const response = yield call(() => postRequest(auth.login, action.payload));
    if( response.status === 200 ){
      setOnLocalStorage('token', response.data.token);
      yield put({type: actions.LOGIN_SUCCESS, payload: response});
    }
  } catch (error) {
    console.log({error});
    yield put({type: actions.LOGIN_FAILURE});
    /*
    * error exceptions cases
    */
   /*
    if( error.code === 'ERR_NETWORK' ){
      console.log(error.message);
      return false;
    } else if ( error.code === 'ECONNABORTED' ){
      console.log(error.message);
      return false;
    }
    if(error.response.status === 401) {
      console.log(error.response.data.message)
    } else if(error.response.status === 405) {
      console.log("Invalid request method")
    } else {
      console.log('Something Went Wrong')
    }
    */
  }
}

function* register(action) {
  try {
    const response = yield call(() => posttRequest('register', action.payload));
    yield put({type: actions.REGISTER_SUCCESS, payload: response.data});
  } catch (error) {
    yield put({type: actions.REGISTER_FAILURE});
    if(error.response.status === 422) {
      // message.error(error.response.data.errors.join(','));
      alert(error.response.data.errors.join(','))
    } else {
      // message.error('Something Went Wrong');
      alert('Something Went Wrong')
    }
  }
}

function* getAuthUser() {
  try {
    const response = yield call(() => getRequest('auth/user'));
    yield put({type: actions.GET_AUTH_USER_SUCCESS, payload: response.data});
  } catch (error) {
    yield put({type: actions.GET_AUTH_USER_FAILURE});
  }
}

function* logout() {
  try {
    const response = yield call(() => getRequest('logout'));
    console.log(response)
    if( response.status === 200 ){
      removeFromLocalStorage('token');
      yield put({type: actions.LOGOUT_SUCCESS});
    }
  } catch (error) {
    console.log({error});
    yield put({type: actions.LOGOUT_FAILURE});
    if( error.code === 'ERR_NETWORK' ){
      return false;
    } else if ( error.code === 'ECONNABORTED' ){
      return false;
    }
    if(error.response.status === 401) {
    } else if(error.response.status === 405) {
    } else {
      // message.error('Something Went Wrong');
      console.log('Something Went Wrong')
    }

    
  }
}


export default function* rootSaga() {
  yield all([takeLatest(actions.LOGIN, login)]);
  yield all([takeLatest(actions.GET_AUTH_USER, getAuthUser)]);
  yield all([takeLatest(actions.LOGOUT, logout)]);
  yield all([takeLatest(actions.REGISTER, register)]);
}
