import produce, { Draft } from 'immer';
import { Reducer } from 'redux';

import { ArtistList, ArtistState, ArtistTypes } from './types';

const INITIAL_STATE: ArtistState = {
  data: {
    list: [],
  },
};

const user: Reducer<ArtistState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArtistTypes.LIST_REQUEST:
      return produce(state, (draft: Draft<ArtistState>) => {
        draft.data.list = [];
      });

    case ArtistTypes.LIST_SUCCESS:
      return produce(state, (draft: Draft<ArtistState>) => {
        const { data }: { data: ArtistList[] } = action.payload;
        draft.data.list = data.map(elem => ({
          ...elem,
          imageUrl: elem.image?.map(img => img['#text'])[0],
        }));
      });

    case ArtistTypes.SEARCH_SUCCESS:
      return produce(state, (draft: Draft<ArtistState>) => {
        const { data }: { data: ArtistList[] } = action.payload;
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
