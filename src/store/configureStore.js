import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(
  rootReducer,
  compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;