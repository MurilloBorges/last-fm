import produce, { Draft } from 'immer';
import { Reducer } from 'redux';

import { HeaderState, HeaderTypes } from './types';

const INITIAL_STATE: HeaderState = {
  data: {
    page: '/',
  },
};

const user: Reducer<HeaderState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderTypes.PAGE_SELECT:
      return produce(state, (draft: Draft<HeaderState>) => {
        const { page } = action.payload;
        draft.data.page = page;
      });

    default:
      return state;
  }
};

export default user;
