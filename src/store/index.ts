import { createStore, applyMiddleware, combineReducers, Store } from "redux";
import thunk from "redux-thunk";
import { ImmutableObjectMixin } from "seamless-immutable";

import * as reducers from "./reducers";
import { AuthState } from "./auth/actionTypes";

export interface ApplicationStore {
  auth: ImmutableObjectMixin<AuthState> & AuthState;
}

const store: Store<ApplicationStore> = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
);

export default store;
