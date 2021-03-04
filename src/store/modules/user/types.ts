/* eslint-disable no-unused-vars */

/**
 * Actions Types
 */
export enum UserTypes {
  SET_PROFILE = '@user/SET_PROFILE',

  REGISTER_REQUEST = '@user/REGISTER_REQUEST',
  REGISTER_SUCCESS = '@user/REGISTER_SUCCESS',
  REGISTER_FAILURE = '@user/REGISTER_FAILURE',
}

/**
 * Reducer Data Types
 */
export interface Profile {
  id: string;
  name: string;
  email: string;
}

/**
 * Reducer State Types
 */
export interface UserState {
  readonly data: { profile: Profile | null; list: [] };
}
