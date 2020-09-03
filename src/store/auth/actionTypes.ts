export enum AuthTypes {
  AUTH_FETCH = "@auth/FETCH",
  AUTH_SIGN_IN = "@auth/SIGN_IN",
  AUTH_FETCH_ERROR = "@auth/FETCH_ERROR",
  AUTH_FETCH_SUCCESS = "@auth/FETCH_SUCCESS",
  AUTH_LOADING = "@auth/LOADING",
  AUTH_SIGN_OUT = "@auth/SIGN_OUT",
}

export interface User {
  name: string;
  email: string;
  id: string;
}

export interface Auth {
  token: string;
  user: User;
}

export interface AuthState {
  readonly auth: Auth;
  readonly loading: boolean;
  readonly error: boolean;
  readonly isAuth: boolean;
}
