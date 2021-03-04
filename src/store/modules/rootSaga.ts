import { all } from 'redux-saga/effects';

import album from './album/sagas';
import artist from './artist/sagas';
import auth from './auth/sagas';
import history from './history/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([album, artist, auth, history, user]);
}
