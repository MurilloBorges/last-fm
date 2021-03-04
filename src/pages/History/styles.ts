import styled from 'styled-components';

import colors from '../../styles/colors';

export const Title = styled.h1`
  color: ${colors.darker};
  font-size: 48px;
  padding: 50px 0;
  text-align: center;
`;

export const HistoryContainer = styled.ul`
  list-style: none;
`;

export const HistoryItem = styled.li`
  font-size: 15px;
  padding: 10px;
`;
