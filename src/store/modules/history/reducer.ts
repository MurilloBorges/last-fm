import produce, { Draft } from 'immer';
import { Reducer } from 'redux';

import { HistoryState, HistoryTypes } from './types';

const INITIAL_STATE: HistoryState = {
  data: {
    list: [],
  },
};

const user: Reducer<HistoryState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HistoryTypes.ADD_SUCCESS:
      return produce(state, (draft: Draft<HistoryState>) => {
        const { text } = action.payload;
        draft.data.list.push(text);
      });

    default:
      return state;
  }
};

export default user;
