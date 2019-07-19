import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HamburgerIcon } from './icons';

import CallButton from './CallButton';
import QuoteButton from 'src/components/QuoteButton';

export const Container = styled.header`
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`;

export const Inner = styled.div`
  display: flex;
  height: 90px;
  justify-content: space-between;
  padding: 0 2rem;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    height: 134px;
    padding: 0;
  }
`;

export const CallButtonStyled = styled(CallButton)`
  margin: auto 0;
    margin-top: 10px;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    // display: none;
    margin: 0 14px;
  }
`;

export const QuoteButtonStyled = styled(QuoteButton)`
  display: none;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: flex;
    margin: auto 0;
  }
`;

export const HamburgerButton = styled.span`
  display: flex;
  position: relative;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: none;
  }
`;

export const HamburgerIconStyled = styled(HamburgerIcon)`
  margin: auto;
`;

export const Select = styled.select`
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Navigation = styled.nav`
  display: none;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: block;
    margin: auto;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
`;

export const NavListItem = styled.li`
  float: left;
`;

export const NavListLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.1px;
  line-height: 48px;
  padding: 0 14px;
  position: relative;
  text-transform: uppercase;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const NavListLabel = NavListLink.withComponent('span').extend`
  cursor: pointer;
  position: relative;
`;

export const LogoLink = styled(Link)`
  display: block;
  margin: auto 0;
`;
