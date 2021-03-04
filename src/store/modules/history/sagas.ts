import { all, put, takeLatest } from 'redux-saga/effects';

import * as Helper from '../../../utils/helper';
import * as HistoryActions from './actions';
import { HistoryTypes } from './types';

interface IHistoryList {
  payload: {
    text?: string;
  };
  type: string;
}

function* HistoryAdd({ payload: { text } }: IHistoryList) {
  try {
    yield put(HistoryActions.addSuccess(text));
  } catch (err) {
    yield put(HistoryActions.addFailure());
    Helper.error(err, 'Falha ao listar as pesquisas');
  }
}

export default all([takeLatest(HistoryTypes.ADD_REQUEST, HistoryAdd)]);
