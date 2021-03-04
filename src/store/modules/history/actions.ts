import { action } from 'typesafe-actions';

import { HistoryTypes } from './types';

export const addRequest = (text = '') =>
  action(HistoryTypes.ADD_REQUEST, { text });
export const addSuccess = (text = '') =>
  action(HistoryTypes.ADD_SUCCESS, { text });
export const addFailure = () => action(HistoryTypes.ADD_FAILURE);
