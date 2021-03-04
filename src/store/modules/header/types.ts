/* eslint-disable no-unused-vars */

/**
 * Actions Types
 */
export enum HeaderTypes {
  PAGE_SELECT = '@header/PAGE_SELECT',
}

/**
 * Reducer Data Types
 */
export interface Header {
  page: string;
}

/**
 * Reducer State Types
 */
export interface HeaderState {
  readonly data: Header;
}
