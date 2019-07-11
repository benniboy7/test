import styled, { css } from 'styled-components';
import { Grid, Row } from 'react-styled-flexboxgrid';

import BackgroundImage1 from './images/Background.jpg';
import BackgroundImage2 from './images/Background@2x.jpg';
import BackgroundImage3 from './images/Background@3x.jpg';

export const Container = styled.div`
  background: ${props => props.theme.colors.white};
  overflow: hidden;
  padding-bottom: 21px;
  width: 100%;
`;

export const Background = styled.div`
  background: url(${BackgroundImage2}) no-repeat center center;
  background-image: image-set(
    ${BackgroundImage1} 1x,
    ${BackgroundImage2} 2x,
    ${BackgroundImage3} 3x
  );
  background-size: cover;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    &::after {
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #000000);
      content: '';
      height: 100%;
      opacity: 0.8;
      position: absolute;
      right: 0;
      top: 0;
      width: 79%;
    }
  }
`;

export const GridStyled = Grid.extend`
  height: 100%;
  padding-bottom: 50px;
  position: relative;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding-bottom: 0;
  }

  &::after {
    background: ${props => props.theme.colors.maize};
    bottom: -6px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    content: '';
    height: 12px;
    left: 0;
    position: absolute;
    width: 141px;
    z-index: 1;
  }
`;

export const Outer = styled.div`
  padding: 10px 0;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: flex;
    height: 320px;
    padding: 0;
  }

  ${props =>
    !props.flat &&
    css`
      @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
        border-left: solid 1px rgba(255, 255, 255, 0.21);
      }
    `};

  ${props =>
    props.flat &&
    css`
      position: relative;
      z-index: 1;
    `};
`;

export const Inner = styled.div`
  margin: ${props => (props.left ? 'auto 0' : 'auto')};
  padding: 0 1rem;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 0;
  }
`;

export const Heading = styled.h5`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.9px;
  //margin: 0 0 26px 0;
  margin: 50px 0;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    text-align: left;
    margin: 0;
  }
`;

export const NavButton = styled.button`
  background: none;
  border: 0;
  padding: 0 ${props => (props.left ? '14px' : 0)} 0 ${props => (props.right ? '14px' : 0)};
`;

export const RowStyled = Row.extend`
  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    flex-wrap: nowrap;
  }
`;

export const Logo = Inner.withComponent('img').extend`
  display: block;
`;
