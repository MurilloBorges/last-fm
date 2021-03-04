import produce, { Draft } from 'immer';
import { Reducer } from 'redux';

import { AlbumList, AlbumState, AlbumTypes } from './types';

const INITIAL_STATE: AlbumState = {
  data: {
    list: [],
  },
};

const user: Reducer<AlbumState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AlbumTypes.LIST_REQUEST:
      return produce(state, (draft: Draft<AlbumState>) => {
        draft.data.list = [];
      });

    case AlbumTypes.LIST_SUCCESS:
      return produce(state, (draft: Draft<AlbumState>) => {
        const { data }: { data: AlbumList[] } = action.payload;
        draft.data.list = data.map(elem => ({
          ...elem,
          imageUrl: elem.image?.map(img => img['#text'])[0],
        }));
      });

    case AlbumTypes.SEARCH_SUCCESS:
      return produce(state, (draft: Draft<AlbumState>) => {
        const { data }: { data: AlbumList[] } = action.payload;
        draft.data.list = data.map(elem => ({
          ...elem,
          imageUrl: elem.image?.map(img => img['#text'])[0],
        }));
      });

    default:
      return state;
  }
};

export default user;
