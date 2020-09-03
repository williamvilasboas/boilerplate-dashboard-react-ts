import { TYPES_CONST } from "../env";

export const AuthSignInService = async (fields: any) => {
  try {
    return {
      token: "aqui-vai-o-token",
      user: fields,
    };
  } catch (err) {
    console.error(err);
  }
};

export function setToken(value: string) {
  localStorage.setItem(TYPES_CONST.TOKEN_NAME, value);
}

export function getToken() {
  return localStorage.getItem(TYPES_CONST.TOKEN_NAME);
}

export function removeToken() {
  return localStorage.removeItem(TYPES_CONST.TOKEN_NAME);
}
