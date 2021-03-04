import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import pages from '../../constants/pages';
import { ApplicationState } from '../../store';
import * as AuthActions from '../../store/modules/auth/actions';
import * as HeaderActions from '../../store/modules/header/actions';
import { Container, Items, Link, NavItems } from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const pageName = useSelector(
    (state: ApplicationState) => state.header.data.page
  );
  const signed = useSelector(
    (state: ApplicationState) => state.auth.data.signed
  );

  useEffect(() => {
    if (signed && pages.signIn) {
      history.push(pages.history);
    }
  }, [history, signed]);

  const handleSetHeader = useCallback(
    page => {
      dispatch(HeaderActions.pageSelect(page));
    },
    [dispatch]
  );

  const handleSignOut = useCallback(() => {
    dispatch(AuthActions.signOutRequest());
    history.push(pages.home);
  }, [dispatch, history]);

  return (
    <Container>
      <NavItems>
        <Items>
          <Link
            className={pageName === pages.home ? 'active' : ''}
            onClick={() => handleSetHeader(pages.home)}
            smooth
            to={pages.home}
          >
            ARTISTAS
          </Link>
        </Items>
        <Items>
          <Link
            className={pageName === pages.albums ? 'active' : ''}
            onClick={() => handleSetHeader(pages.albums)}
            smooth
            to={pages.albums}
          >
            ALBUMS
          </Link>
        </Items>
        {signed ? (
          <Items>
            <Link
              className={pageName === pages.history ? 'active' : ''}
              onClick={() => handleSetHeader(pages.history)}
              smooth
              to={pages.history}
            >
              MINHAS PESQUISAS
            </Link>
          </Items>
        ) : (
          <Items paddingRight="0">
            <Link
              className={pageName === pages.signIn ? 'active' : ''}
              onClick={() => handleSetHeader(pages.signIn)}
              smooth
              to={pages.signIn}
            >
              ENTRAR
            </Link>
          </Items>
        )}
        {signed && (
          <Items paddingRight="0">
            <Link onClick={() => handleSignOut()} smooth to={pages.home}>
              SAIR
            </Link>
          </Items>
        )}
      </NavItems>
    </Container>
  );
};

export default Header;
