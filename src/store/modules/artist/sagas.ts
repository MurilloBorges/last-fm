import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import * as Helper from '../../../utils/helper';
import * as HistoryActions from '../history/actions';
import * as ArtistActions from './actions';
import { ArtistTypes } from './types';

function* ArtistList() {
  try {
    const {
      data: {
        topartists: { artist },
      },
    } = yield call(api.get, '', {
      params: {
        tag: 'disco',
        method: 'tag.gettopartists',
        format: 'json',
      },
    });

    yield put(ArtistActions.listSuccess(artist));
  } catch (err) {
    yield put(ArtistActions.listFailure());
    Helper.error(err, 'Falha ao listar os artistas');
  }
}

interface IArtistList {
  payload: {
    artist?: string;
  };
  type: string;
}

function* ArtistSearch({ payload: { artist } }: IArtistList) {
  try {
    const {
      data: {
        results: {
          artistmatches: { artist: data },
        },
      },
    } = yield call(api.get, '', {
      params: {
        artist,
        tag: 'disco',
        method: 'artist.search',
        format: 'json',
      },
    });

    yield put(ArtistActions.listSuccess(data));
    yield put(HistoryActions.addRequest(artist));
  } catch (err) {
    yield put(ArtistActions.listFailure());
    Helper.error(err, 'Falha ao buscar os artistas');
  }
}

export default all([
  takeLatest(ArtistTypes.LIST_REQUEST, ArtistList),
  takeLatest(ArtistTypes.SEARCH_REQUEST, ArtistSearch),
]);
