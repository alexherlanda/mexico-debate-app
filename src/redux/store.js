import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/';
import initialState from './initialState';
import rootReducer from './reducers/';

const enhancers = [];
const isDevelopment = process.env.NODE_ENV === 'development';
if (isDevelopment && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
}

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(sagaMiddleware), ...enhancers)
  //composeEnhancers(applyMiddleware(thunk))
);

sagaMiddleware.run(rootSaga);
store.asyncReducers = {};
export default store;
