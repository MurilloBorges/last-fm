import { Store } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import { AlbumState } from './modules/album/types';
import { ArtistState } from './modules/artist/types';
import { AuthState } from './modules/auth/types';
import { HeaderState } from './modules/header/types';
import { HistoryState } from './modules/history/types';
import { LoadingState } from './modules/loading/types';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { UserState } from './modules/user/types';
import persistReducers from './persistReducers';

export interface ApplicationState {
  album: AlbumState;
  artist: ArtistState;
  header: HeaderState;
  auth: AuthState;
  history: HistoryState;
  loading: LoadingState;
  user: UserState;
}

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store: Store<ApplicationState> = createStore(
  persistReducers(rootReducer),
  middlewares
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
