import { Draft, produce } from 'immer';
import { Reducer } from 'redux';

import { AuthTypes } from '../auth/types';
import { Profile, UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
  data: { profile: null, list: [] },
};

const user: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SET_PROFILE:
      return produce(state, (draft: Draft<UserState>) => {
        const { profile }: { profile: Profile } = action.payload;

        draft.data.profile = profile;
      });

    case AuthTypes.SIGN_OUT_SUCCESS:
      return produce(state, (draft: Draft<UserState>) => {
        draft.data.profile = null;
      });

    default:
      return state;
  }
};

export default user;
