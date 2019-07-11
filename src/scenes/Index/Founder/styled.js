import styled, { css } from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

import QuoteButton from 'src/components/QuoteButton';

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const GridStyled = Grid.extend`
  padding: 81px 0 140px 0;
`;

export const ImageContainer = styled.div`
  max-height: 464px;
  padding-top: 100%;
  position: relative;
`;

export const Image = styled.img`
  max-width: 66%;
  position: absolute;

  ${props =>
    props.front &&
    css`
      bottom: 0;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
      right: 0;
      z-index: 1;
    `};

  ${props =>
    !props.front &&
    css`
      left: 0;
      top: 0;
    `};
`;

export const Heading = styled.h3`
  color: ${props => props.theme.colors.blackThree};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 1.1px;
  margin: 60px 0 0 0;
  padding: 70px 0 28px 0;
  text-transform: uppercase;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin: 0;
  }
`;

export const Text = styled.p`
  line-height: 1.88;
  margin: 0 0 25px 0;
`;

export const Logos = styled.img`
  display: block;
  max-width: 100%;
  margin-top: 30px;
`;

export const TextContainer = styled.div`
  padding: 0 1rem;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 0;
  }
`;

export const QuoteButtonStyled = styled(QuoteButton)`
  margin: 0 auto;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin: 0;
  }
`;
