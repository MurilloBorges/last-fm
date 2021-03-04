import { Draft, produce } from 'immer';
import { Reducer } from 'redux';

import { UserTypes } from '../user/types';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  data: { signed: false },
};

const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_OUT_SUCCESS:
      return produce(state, (draft: Draft<AuthState>) => {
        draft.data.signed = false;
      });

    case AuthTypes.SIGN_IN_SUCCESS:
    case UserTypes.REGISTER_SUCCESS:
      return produce(state, (draft: Draft<AuthState>) => {
        draft.data.signed = true;
      });

    default:
      return state;
  }
};

export default auth;
