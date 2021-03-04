/* eslint-disable no-unused-vars */

/**
 * Actions Types
 */
export enum AuthTypes {
  SET_TOKEN = '@auth/SET_TOKEN',

  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE',

  SIGN_OUT_REQUEST = '@auth/SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS = '@auth/SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE = '@auth/SIGN_OUT_FAILURE',
}

/**
 * Reducer Data Types
 */
export interface Auth {
  signed: boolean;
}

/**
 * Reducer State Types
 */
export interface AuthState {
  readonly data: Auth;
}
