/**
 * Here we configure the main store for the app
 */
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// Reducers
import ZipCodeReducer from "../reducers/ZipCodeReducer";
import FilterReducer from "../reducers/FilterReducer";

import {zipCodeSearch} from "../actions/ZipCodeAction";
import { distanceFilter, genderFilter } from "../actions/FilterActions";

function createRootReducer() {
  return combineReducers({
    zipCodeReducer: ZipCodeReducer,
    filterReducer: FilterReducer
  })
}
const rootReducer = createRootReducer();

const configureStore = (initialState?: any) => {
  const middleware = [];
  const enhancers = [];

  middleware.push(thunk);

  const actionCreators = {
    zipCodeSearch,
    distanceFilter,
    genderFilter
  };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://extension.remotedev.io/docs/API/Arguments.html
      actionCreators
    })
    : compose;
  // Apply middleware and compose enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);
  // Now we create the store
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
};

export default configureStore;
