import { Draft, produce } from 'immer';
import { Reducer } from 'redux';

import { AlbumTypes } from '../album/types';
import { ArtistTypes } from '../artist/types';
import { AuthTypes } from '../auth/types';
import { UserTypes } from '../user/types';
import { LoadingState } from './types';

const INITIAL_STATE: LoadingState = {
  data: {
    signIn: false,
    register: false,
    artist: false,
    album: false,
  },
};

const loading: Reducer<LoadingState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AlbumTypes.LIST_REQUEST:
      return produce(state, (draft: Draft<LoadingState>) => {
        draft.data.album = true;
      });

    case AlbumTypes.LIST_SUCCESS:
    case AlbumTypes.LIST_FAILURE:
      return produce(state, (draft: Draft<LoadingState>) => {
        draft.data.album = false;
      });

    case ArtistTypes.LIST_REQUEST:
      return produce(state, (draft: Draft<LoadingState>) => {
        draft.data.artist = true;
      });

    case ArtistTypes.LIST_SUCCESS:
    case ArtistTypes.LIST_FAILURE:
      return produce(state, (draft: Draft<LoadingState>) => {
        draft.data.artist = false;
      });

    case AuthTypes.SIGN_IN_REQUEST:
      return produce(state, (draft: Draft<LoadingState>) => {
        draft.data.signIn = true;
      });

    case AuthTypes.SIGN_IN_SUCCESS:
    case AuthTypes.SIGN_IN_FAILURE:
      return produce(state, (draft: Draft<LoadingState>) => {
        draft.data.signIn = false;
      });

    case UserTypes.REGISTER_REQUEST:
      return produce(state, (draft: Draft<LoadingState>) => {
        draft.data.register = true;
      });

    case UserTypes.REGISTER_SUCCESS:
    case UserTypes.REGISTER_FAILURE:
      return produce(state, (draft: Draft<LoadingState>) => {
        draft.data.register = false;
      });

    default:
      return state;
  }
};

export default loading;
