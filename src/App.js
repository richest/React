import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRoutes from './routes';
import actions from './redux/authenticate/actions';
// import { getToken } from './components/Auth';
import UserWithAxios from './components/posts/UserWithAxios';
// const TOKEN = getToken();
import Homepage from './pages/homepage';

const App = () => {

  const {isAuthenticated, validateUserLoader} = useSelector(state => state.authenticateReducer)
  const dispatch = useDispatch();
  return  <>
      <AppRoutes isAuthenticated={isAuthenticated} />
  </>
}
export default App;
