// Conection with services and dispatch events to reducer
import { Dispatch } from "redux";
import { AuthTypes } from "./actionTypes";

import { AuthSignInService } from "../../services/auth";

export function signIn(fields: any) {
  return async (dispatch: Dispatch) => {
    try {
      // Set Loading
      dispatch({
        type: AuthTypes.AUTH_LOADING,
        payload: true,
      });
      // code here
      const payload = await AuthSignInService(fields);

      return dispatch({
        type: AuthTypes.AUTH_SIGN_IN,
        payload,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export const signOut = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: AuthTypes.AUTH_LOADING,
        payload: true,
      });

      return dispatch({
        type: AuthTypes.AUTH_SIGN_OUT,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
