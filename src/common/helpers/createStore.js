/* eslint-disable max-len */
import rootReducer from '../reducer';
import {combineReducers,compose, createStore ,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import * as constants from "../constants"
import normalizeSalesManagementData from "./normalizeData"


function createReduxStore(initialData, customReducers, withBackendDemoData = true, customState = {}) {
  let reducers = customReducers;
  if (!customReducers) {
    reducers = {};
    reducers = rootReducer;
  }
  let initialStoreState = initialData;

  if (withBackendDemoData) {
    initialStoreState = {};
    initialStoreState[constants.NAME] = normalizeSalesManagementData(initialData, customState);
  }

  const middleware = [thunk];
  return createStore(
    combineReducers(reducers),
    initialStoreState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
export default createReduxStore;
