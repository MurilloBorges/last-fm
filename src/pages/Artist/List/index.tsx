import React, { useCallback, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { uniqueId } from 'lodash';

import ComponentSearchAnimated from '../../../components/SearchAnimated';
import { ApplicationState } from '../../../store';
import * as ArtistActions from '../../../store/modules/artist/actions';
import { ArtistList } from '../../../store/modules/artist/types';
import { BtnGlobal, Container, ContainerHeader } from '../../../styles/general';
import { ArtistImage, ArtistName, Card, GridList, Item, Title } from './styles';

const List: React.FC = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const artist = useSelector(
    (state: ApplicationState) => state.artist.data.list
  );

  useEffect(() => {
    dispatch(ArtistActions.listRequest());
  }, [dispatch]);

  const handleArtistInfo = useCallback((url: string) => {
    window.open(`${url}`, '_blank');
  }, []);

  const handleSearch = useCallback(
    text => {
      dispatch(ArtistActions.searchRequest(text));
    },
    [dispatch]
  );

  const handleSearchEmpty = useCallback(() => {
    dispatch(ArtistActions.listRequest());
  }, [dispatch]);

  return (
    <Container>
      <ContainerHeader>
        <Title>Artistas da atualidade</Title>
        <ComponentSearchAnimated
          inputRef={inputRef}
          onEmpty={handleSearchEmpty}
          onSearch={handleSearch}
          placeholder="Pesquisar artista"
        />
      </ContainerHeader>

      <GridList>
        {artist.map((elem: ArtistList) => (
          <Item key={uniqueId()} onClick={() => handleArtistInfo(elem.url)}>
            <Card>
              <ArtistName>{elem.name}</ArtistName>
              <ArtistImage alt={elem.name} src={elem.imageUrl} />
              <BtnGlobal margin="0" width="100%" widthIpad="100%">
                informações
              </BtnGlobal>
            </Card>
          </Item>
        ))}
      </GridList>
    </Container>
  );
};

export default List;
