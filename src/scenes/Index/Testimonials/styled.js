import styled, { css } from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

import { LeftIcon, RightIcon } from './icons';

export const GridStyled = Grid.extend`
  padding: 150px 1rem 160px 1rem;
  position: relative;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 150px 0 160px 0;
  }
`;

export const Heading = styled.h3`
  color: ${props => props.theme.colors.blackThree};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 1.1px;
  margin: 0 0 78px 0;
  text-transform: uppercase;
`;

export const ItemContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 1px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  padding: 29px 32px 34px 32px;
  position: relative;
  text-align: center;

  ${props =>
    !props.first &&
    css`
      margin-bottom: 60px;

      @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
        margin: 0;
      }
    `};

  &::before {
    color: ${props => props.theme.colors.maize};
    content: '“';
    font-family: ${props => props.theme.fonts.breuer};
    font-size: 36px;
    font-weight: 700;
    left: 33px;
    position: absolute;
    top: -12px;
  }
`;

export const Message = styled.p`
  color: ${props => props.theme.colors.greyishBrown};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: 0.9px;
  margin: 0 0 25px 0;
  text-transform: uppercase;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    height: 372px;
  }
`;

export const Picture = styled.img`
  border-radius: 50%;
  width: 40px;
`;

export const Name = styled.h5`
  color: ${props => props.theme.colors.maize};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin: 9px 0 0 0;
`;

export const Title = styled.h6`
  color: ${props => props.theme.colors.greyish};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    height: 72px;
  }
`;

export const LeftIconStyled = styled(LeftIcon)`
  margin: auto;
`;

export const RightIconStyled = LeftIconStyled.withComponent(RightIcon);

export const NavButtonContainer = styled.div`
  right: 0;
  position: absolute;
  top: 144px;
`;

export const NavButton = styled.button.attrs({ type: 'button' })`
  background: none;
  border: solid 1px rgba(189, 189, 189, 0.6);
  display: flex;
  float: left;
  height: 48px;
  padding: 0;
  width: 48px;

  ${props =>
    props.withMargin &&
    css`
      margin-left: 20px;
    `};

  &:hover {
    border-color: #bdbdbd;
  }
`;
