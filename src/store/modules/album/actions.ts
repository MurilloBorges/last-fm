import { action } from 'typesafe-actions';

import { AlbumTypes } from './types';

export const listRequest = () => action(AlbumTypes.LIST_REQUEST);
export const listSuccess = (data: []) =>
  action(AlbumTypes.LIST_SUCCESS, { data });
export const listFailure = () => action(AlbumTypes.LIST_FAILURE);

export const searchRequest = (album = '') =>
  action(AlbumTypes.SEARCH_REQUEST, { album });
export const searchSuccess = (data: []) =>
  action(AlbumTypes.SEARCH_SUCCESS, { data });
export const searchFailure = () => action(AlbumTypes.SEARCH_FAILURE);
