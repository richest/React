import actions from './actions';
import { getFromLocalStorage } from '../../utils/localStorage';

const initialState = {
  isAuthenticated: getFromLocalStorage('token') ? true:false,
  loader: false,
  email: null,
  name: null,
  validateUserLoader: true,
  logOutLoader: false,
  // token: getFromLocalStorage('token') ? getFromLocalStorage('token'):null
}

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_AUTH_USER:
      return {...state, validateUserLoader: true}
    case actions.GET_AUTH_USER_SUCCESS:
      return {
        ...state,
        validateUserLoader: false,
        isAuthenticated: !!action.payload.data.email,
        email: action.payload.data.email,
        name: action.payload.data.name,
      }
    case actions.GET_AUTH_USER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        validateUserLoader: false,
        email: null,
        name: null,
      }
    case actions.LOGIN:
      return {...state, loader: true}
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!action.payload.data.token,
        loader: false,
        // email: action.payload.data.email,
        // name: action.payload.data.name,
      }
    case actions.LOGIN_FAILURE:
      return {...state, isAuthenticated: false, loader: false}
    case actions.LOGOUT:
      return {...state, logOutLoader: true}
    case actions.LOGOUT_SUCCESS:
      return {...state, isAuthenticated: false, logOutLoader: false}
    case actions.LOGOUT_FAILURE:
      return {...state, isAuthenticated: false, logOutLoader: false}
    case actions.REGISTER:
      return {...state, registerLoader: true}
    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!action.payload.data.email,
        registerLoader: false,
        email: action.payload.data.email,
        name: action.payload.data.name,
      }
    case actions.REGISTER_FAILURE:
      return {...state, isAuthenticated: false, registerLoader: false}
    default:
      return state
  }
}

export default Reducer;
