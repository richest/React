import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducers'
import rootSaga from './rootSaga';

export default function configureAppStore(preloadedState) {

  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    preloadedState,
  })
  sagaMiddleware.run(rootSaga)

  if (process.env.REACT_APP_NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducers', () => store.replaceReducer(rootReducer))
  }
  return store
}
