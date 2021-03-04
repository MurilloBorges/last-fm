import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import * as Helper from '../../../utils/helper';
import * as HistoryActions from '../history/actions';
import * as AlbumActions from './actions';
import { AlbumTypes } from './types';

function* AlbumList() {
  try {
    const {
      data: {
        albums: { album },
      },
    } = yield call(api.get, '', {
      params: {
        tag: 'disco',
        method: 'tag.gettopalbums',
        format: 'json',
      },
    });

    yield put(AlbumActions.listSuccess(album));
  } catch (err) {
    yield put(AlbumActions.listFailure());
    Helper.error(err, 'Falha ao listar os artistas');
  }
}

interface IAlbumList {
  payload: {
    album?: string;
  };
  type: string;
}

function* AlbumSearch({ payload: { album } }: IAlbumList) {
  try {
    const {
      data: {
        results: {
          albummatches: { album: data },
        },
      },
    } = yield call(api.get, '', {
      params: {
        album,
        method: 'album.search',
        format: 'json',
      },
    });

    yield put(AlbumActions.listSuccess(data));
    yield put(HistoryActions.addRequest(album));
  } catch (err) {
    yield put(AlbumActions.listFailure());
    Helper.error(err, 'Falha ao buscar os artistas');
  }
}

export default all([
  takeLatest(AlbumTypes.LIST_REQUEST, AlbumList),
  takeLatest(AlbumTypes.SEARCH_REQUEST, AlbumSearch),
]);
