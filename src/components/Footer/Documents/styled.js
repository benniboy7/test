import styled from 'styled-components';

import { Anchor, ListItem } from '../styled';

export const ListItemStyled = ListItem.extend`
  position: relative;
`;

export const Label = Anchor.withComponent('span');

export const Select = styled.select`
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
