import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

import { toImageSet } from 'src/services/helpers';

export const Container = styled.div`
  background: url(${props => props.background[1]}) no-repeat center center;
  background-image: image-set(${props => toImageSet(props.background)});
  background-size: cover;
  padding-top: 90px;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding-top: 134px;
  }
`;

export const GridStyled = Grid.extend`
  position: relative;

  &::after {
    background: ${props => props.theme.colors.maize};
    bottom: -6px;
    content: '';
    height: 12px;
    position: absolute;
    right: 0;
    width: 141px;
  }
`;

export const Flex = styled.div`
  display: flex;
  height: 273px;
`;

export const Inner = styled.div`
  margin: auto;
  padding: 0 1rem;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0 0 37px 0;
  text-transform: uppercase;
`;
