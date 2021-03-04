/* eslint-disable no-unused-vars */

/**
 * Actions Types
 */
export enum ArtistTypes {
  LIST_REQUEST = '@artist/LIST_REQUEST',
  LIST_SUCCESS = '@artist/LIST_SUCCESS',
  LIST_FAILURE = '@artist/LIST_FAILURE',

  SEARCH_REQUEST = '@artist/SEARCH_REQUEST',
  SEARCH_SUCCESS = '@artist/SEARCH_SUCCESS',
  SEARCH_FAILURE = '@artist/SEARCH_FAILURE',
}

/**
 * Reducer Data Types
 */
export interface ArtistList {
  mbid: string;
  name: string;
  url: string;
  image: [];
  imageUrl: string;
}

export interface Artist {
  list: ArtistList[];
}

/**
 * Reducer State Types
 */
export interface ArtistState {
  readonly data: Artist;
}
