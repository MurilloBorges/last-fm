/* eslint-disable no-unused-vars */

/**
 * Actions Types
 */
export enum AlbumTypes {
  LIST_REQUEST = '@album/LIST_REQUEST',
  LIST_SUCCESS = '@album/LIST_SUCCESS',
  LIST_FAILURE = '@album/LIST_FAILURE',

  SEARCH_REQUEST = '@album/SEARCH_REQUEST',
  SEARCH_SUCCESS = '@album/SEARCH_SUCCESS',
  SEARCH_FAILURE = '@album/SEARCH_FAILURE',
}

/**
 * Reducer Data Types
 */
export interface AlbumList {
  mbid: string;
  name: string;
  url: string;
  image: [];
  imageUrl: string;
  artist: {
    mbid: string;
  };
}

export interface Album {
  list: AlbumList[];
}

/**
 * Reducer State Types
 */
export interface AlbumState {
  readonly data: Album;
}
