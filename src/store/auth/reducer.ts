// import _ from "lodash";

import { Reducer } from "redux";

import Immutable, { ImmutableObjectMixin } from "seamless-immutable";

import { AuthState, AuthTypes } from "./actionTypes";

import { ApplicationStore } from "../index";

import { getToken, setToken, removeToken } from "../../services/auth";

const store = Immutable.from<AuthState>({
  auth: {
    token: "",
    user: {
      email: "",
      id: "",
      name: "",
    },
  },
  error: false,
  isAuth: getToken() !== null,
  loading: false,
});

const reducer: Reducer<ImmutableObjectMixin<AuthState> & AuthState> = (
  state = store,
  action
) => {
  switch (action.type) {
    case AuthTypes.AUTH_SIGN_IN:
      setToken(action.payload.token);
      return state.merge({
        auth: action.payload,
        isAuth: true,
        loading: false,
      });

    case AuthTypes.AUTH_SIGN_OUT:
      removeToken();
      return state.merge({
        isAuth: false,
        loading: false,
        auth: {
          token: "",
          user: {
            email: "",
            id: "",
            name: "",
          },
        },
      });

    case AuthTypes.AUTH_LOADING:
      return state.merge({
        loading: action.payload,
      });

    default:
      return state;
  }
};

export default reducer;

export function getAuth(state: ApplicationStore) {
  return state.auth;
}

export function isAuth(state: ApplicationStore) {
  return state.auth.isAuth;
}
