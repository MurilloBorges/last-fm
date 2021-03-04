import React from 'react';

import { useSelector } from 'react-redux';

import { uniqueId } from 'lodash';

import { ApplicationState } from '../../store';
import { HistoryList } from '../../store/modules/history/types';
import {
  Container,
  ContainerBody,
  ContainerHeader,
} from '../../styles/general';
import { HistoryContainer, HistoryItem, Title } from './styles';

const History: React.FC = () => {
  const histories = useSelector(
    (state: ApplicationState) => state.history.data.list
  );

  return (
    <Container>
      <ContainerHeader>
        <Title>Histórico</Title>
      </ContainerHeader>

      <ContainerBody>
        <HistoryContainer>
          {histories.map((history: HistoryList, index) => (
            <HistoryItem key={uniqueId()}>
              {index + 1} - {history}
            </HistoryItem>
          ))}
        </HistoryContainer>
      </ContainerBody>
    </Container>
  );
};

export default History;
