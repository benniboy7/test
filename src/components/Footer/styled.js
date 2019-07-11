import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.footer`
  background: ${props => props.theme.colors.white};
  border-bottom: solid 12px ${props => props.theme.colors.maize};
  padding: 157px 1rem 260px 1rem;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 157px 0 260px 0;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.greyishBrown};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: ${props => (props.large ? 32 : 16)}px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 32px;
  margin: 0;
  text-transform: uppercase;

  ${props =>
    props.dot &&
    css`
      &::after {
        color: ${props => props.theme.colors.maize};
        content: '.';
        letter-spacing: normal;
      }
    `};
`;

export const Text = styled.p`
  line-height: 1.88;
  margin: ${props => (props.last ? 19 : 24)}px 0 0 0;
`;

export const Anchor = styled.a`
  color: ${props => props.theme.colors.maize};

  &:hover {
    color: ${props => darken(0.1, props.theme.colors.maize)};
  }
`;

export const LinkStyled = Anchor.withComponent(Link);

export const List = styled.ul`
  list-style: none;
  margin: 27px 0 0 0;
  padding: 0;
`;

export const ListItem = styled.li`
  line-height: 2;
`;
