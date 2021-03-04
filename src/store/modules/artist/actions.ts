import { action } from 'typesafe-actions';

import { ArtistTypes } from './types';

export const listRequest = () => action(ArtistTypes.LIST_REQUEST);
export const listSuccess = (data: []) =>
  action(ArtistTypes.LIST_SUCCESS, { data });
export const listFailure = () => action(ArtistTypes.LIST_FAILURE);

export const searchRequest = (artist = '') =>
  action(ArtistTypes.SEARCH_REQUEST, { artist });
export const searchSuccess = (data: []) =>
  action(ArtistTypes.SEARCH_SUCCESS, { data });
export const searchFailure = () => action(ArtistTypes.SEARCH_FAILURE);
