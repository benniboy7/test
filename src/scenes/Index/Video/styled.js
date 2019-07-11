import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid } from 'react-styled-flexboxgrid';

import BackgroundImage1 from './images/Background.jpg';
import BackgroundImage2 from './images/Background@2x.jpg';
import BackgroundImage3 from './images/Background@3x.jpg';

export const Container = styled.div`
  background: url(${BackgroundImage2}) no-repeat center center;
  background-image: image-set(
    ${BackgroundImage1} 1x,
    ${BackgroundImage2} 2x,
    ${BackgroundImage3} 3x
  );
  background-size: cover;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 0 2rem;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 0;
  }
`;

export const GridStyled = Grid.extend`
  position: relative;

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
`;

export const Flex = styled.div`
  display: flex;
  height: 40rem;
`;

export const FlexInner = styled.div`
  margin: auto 0;
`;

export const Title = styled.h6`
  color: ${props => props.theme.colors.maize};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.3px;
  margin: 0;
  text-transform: uppercase;
`;

export const Description = styled.h4`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 32px;
  font-weight: 700;
  line-height: 1.31;
  letter-spacing: 0.9px;
  margin: 21px 0 33px 0;
  position: relative;
  text-transform: uppercase;

  &::after {
    color: ${props => props.theme.colors.maize};
    font-size: 36px;
    content: '“';
    left: -20px;
    position: absolute;
    top: -2px;
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
  text-transform: uppercase;
  white-space: nowrap;
  width: 120px;

  &:hover {
    border-color: ${props => props.theme.colors.white};
  }
`;

export const PlayButton = styled(Link)`
  background: none;
  border: 0;
  display: none;
  height: 220px;
  margin-top: -110px;
  position: absolute;
  right: -10px;
  top: 50%;
  width: 220px;

  &:hover svg .bg {
    fill-opacity: 0.7;
  }

  svg .bg {
    transition: fill-opacity 0.3s ease-in-out;
  }

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: block;
  }
`;
