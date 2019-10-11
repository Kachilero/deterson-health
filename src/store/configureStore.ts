/**
 * Here we configure the main store for the app
 */
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// Reducers

// Setup devtoools
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export default () => {
  const store = createStore(
    combineReducers({}),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
