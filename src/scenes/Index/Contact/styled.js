import styled, { css } from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const GridStyled = Grid.extend`
  padding: 81px 0 140px 0;
`;

export const Label = styled.h4`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
  color: rgb(123, 123, 123);
`;

export const Heading = styled.h2`
  color: ${props => props.theme.colors.blackThree};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 1.1px;
  margin: 10px 0 0 0;
  padding: 28px 0 28px 0;
  text-transform: uppercase;
  margin-top=0px;
  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin-left: 0;
  }

`;

export const Text = styled.p`
  line-height: 1.88;
  margin: 0 0 25px 0;
`;

export const TextContainer = styled.div`
  padding: 0 1rem;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 0;
  }
`;