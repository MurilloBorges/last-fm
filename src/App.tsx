import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import Root from './Root';
import { persistor, store } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
}

export default App;
