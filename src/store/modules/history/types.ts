/* eslint-disable no-unused-vars */

/**
 * Actions Types
 */
export enum HistoryTypes {
  ADD_REQUEST = '@history/ADD_REQUEST',
  ADD_SUCCESS = '@history/ADD_SUCCESS',
  ADD_FAILURE = '@history/ADD_FAILURE',
}

/**
 * Reducer Data Types
 */
export interface HistoryList {
  text: string;
}

export interface History {
  list: HistoryList[];
}

/**
 * Reducer State Types
 */
export interface HistoryState {
  readonly data: History;
}
