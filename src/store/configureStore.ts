/**
 * Here we configure the main store for the app
 */
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// Reducers
import ZipCodeReducer from "../reducers/ZipCodeReducer";

// Setup devtoools
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export default () => {
  const store = createStore(
    combineReducers({
      zipCodeReducers: ZipCodeReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
