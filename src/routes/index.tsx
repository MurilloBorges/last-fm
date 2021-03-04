import React from 'react';

import { Switch } from 'react-router-dom';

import pages from '../constants/pages';
import AlbumList from '../pages/Album/List';
import ArtistList from '../pages/Artist/List';
import Auth from '../pages/Auth';
import History from '../pages/History';
import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={ArtistList} exact path={pages.home} />

      <Route component={AlbumList} exact path={pages.albums} />

      <Route component={Auth} exact path={pages.signIn} />

      <Route component={History} exact isLogged path={pages.history} />
    </Switch>
  );
};
export default Routes;
