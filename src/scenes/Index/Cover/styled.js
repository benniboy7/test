import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid } from 'react-styled-flexboxgrid';

import QuoteButton from 'src/components/QuoteButton';

export const Container = styled.div`
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  height: 485px;
  padding-top: 90px;
  position: relative;
  z-index: 2;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    height: 40rem;
    padding-top: 134px;
  }
`;

export const GridStyled = Grid.extend`
  display: flex;
  height: 100%;
  padding: 0 1rem;
  position: relative;
  z-index: 1;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 0;

    &::after {
      background: ${props => props.theme.colors.maize};
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
      bottom: -6px;
      content: '';
      height: 12px;
      position: absolute;
      right: 0;
      width: 141px;
    }
  }
`;

export const Centered = styled.div`
  margin: auto 0;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 36px;
  font-weight: 700;
  line-height: 1.17;
  letter-spacing: 1px;
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    text-align: left;
  }
`;

export const VideoButton = styled(Link)`
  align-items: center;
  background: none;
  border: solid 1px rgba(255, 255, 255, 0.6);
  color: ${props => props.theme.colors.white};
  display: flex;
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 16px;
  font-weight: 700;
  height: 48px;
  justify-content: center;
  letter-spacing: 1.1px;
  margin: 20px auto 0 auto;
  text-transform: uppercase;
  white-space: nowrap;
  width: 120px;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin: 0 0 0 20px;
  }

  &:hover {
    border-color: ${props => props.theme.colors.white};
  }
`;

export const Buttons = styled.div`
  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: flex;
  }
`;

export const Video = styled.video`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const VideoContainer = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const QuoteButtonStyled = styled(QuoteButton)`
  margin: 0 auto;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin: 0;
  }
`;
