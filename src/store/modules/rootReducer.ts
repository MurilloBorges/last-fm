import { combineReducers } from 'redux';

import album from './album/reducer';
import artist from './artist/reducer';
import auth from './auth/reducer';
import header from './header/reducer';
import history from './history/reducer';
import loading from './loading/reducer';
import user from './user/reducer';

export default combineReducers({
  artist,
  history,
  loading,
  auth,
  header,
  user,
  album,
});
