import styled, { css } from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  background: ${props => props.theme.colors.white};
  overflow: hidden;
  width: 100%;
`;

export const TypeContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  height: 100%;
  object-fit: cover;
  top: 0;
  width: 100%;

  ${props =>
    props.left &&
    css`
      left: 0;
    `};

  ${props =>
    props.right &&
    css`
      right: 0;
    `};

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    position: absolute;
    width: 50%;
  }
`;

export const GridStyled = Grid.extend`
  position: relative;
  z-index: 1;
`;

export const TextContainer = styled.div`
  display: flex;
  margin: 40px 0 80px 0;
  padding: 0 1rem;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    height: 320px;
    margin: 0;
    padding: 0;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.greyishBrown};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.9px;
  margin: 0;
  text-transform: uppercase;
`;

export const Description = styled.p`
  line-height: 1.88;
  margin: 16px 0 18px 0;
`;

export const LinkContainer = styled.p`
  margin: 0;
`;

export const MoreLink = styled(Link)`
  color: ${props => props.theme.colors.maize};
  font-family: ${props => props.theme.fonts.breuer};
  font-weight: 700;
  letter-spacing: 1.1px;
  text-transform: uppercase;

  &:hover {
    color: ${props => darken(0.1, props.theme.colors.maize)};
  }
`;

export const TextInner = styled.div`
  margin: auto 0;
`;
