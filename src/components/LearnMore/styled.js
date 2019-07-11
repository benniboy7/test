import styled, { css } from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

import BackgroundImage1 from './images/Background.jpg';
import BackgroundImage2 from './images/Background@2x.jpg';
import BackgroundImage3 from './images/Background@3x.jpg';

export const Container = styled.div`
  overflow: hidden;
  width: 100%;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    overflow: visible;
  }
`;

const gridChild = css`
  background: ${props => props.theme.colors.maize};
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  content: '';
  display: none;
  height: 12px;
  position: absolute;
  width: 141px;
  z-index: 1;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: block;
  }
`;

const firstGridChild = {
  leftBottom: css`
    bottom: -6px;
    left: 0;
  `,
  leftTop: css`
    left: 0;
    top: -6px;
  `,
  rightTop: css`
    right: 0;
    top: -6px;
  `,
};

const secondGridChild = {
  leftBottom: css`
    bottom: -6px;
    left: 0;
  `,
  rightBottom: css`
    bottom: -6px;
    right: 0;
  `,
};

const GridStyled = Grid.extend`
  position: relative;
`;

export const FirstGrid = GridStyled.extend`
  ${props =>
    props.position !== 'none' &&
    css`
      &::before {
        ${gridChild};
        ${props => firstGridChild[props.position]};
      }
    `};
`;

export const LastGrid = GridStyled.extend`
  display: none;
  height: 160px;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: block;
  }

  ${props =>
    props.position !== 'none' &&
    css`
      &::after {
        ${gridChild};
        ${props => secondGridChild[props.position]};
      }
    `};
`;

export const Banner = styled.div`
  background: ${props => props.theme.colors.blackTwo} url(${BackgroundImage2}) no-repeat center
    center;
  background-image: image-set(
    ${BackgroundImage1} 1x,
    ${BackgroundImage2} 2x,
    ${BackgroundImage3} 3x
  );
  background-size: cover;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`;

export const BannerText = styled.h4`
  align-items: center;
  color: ${props => props.theme.colors.white};
  display: flex;
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 24px;
  font-weight: 700;
  height: 200px;
  justify-content: center;
  letter-spacing: 0.9px;
  line-height: 1.33;
  margin: 0;
  padding: 0 1rem;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    justify-content: flex-start;
    padding: 0;
    text-align: left;
  }
`;

export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  height: 200px;
  justify-content: center;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    justify-content: flex-end;
    padding: 0;
  }
`;
