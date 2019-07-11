import * as React from 'react';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import BenImage1 from './images/Ben.png';
import BenImage2 from './images/Ben@2x.png';
import BenImage3 from './images/Ben@3x.png';

export const Button = styled(({ lightShadow, transparent, ...rest }) => <Link {...rest} />)`
  align-items: center;
  background: ${props => (props.transparent ? 'none' : props.theme.colors.maize)};
  border: ${props => (props.transparent ? 'solid 1px rgba(255, 255, 255, 0.6)' : 0)};
  color: ${props => props.theme.colors.white};
  display: flex;
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 16px;
  font-weight: 700;
  height: 48px;
  justify-content: center;
  letter-spacing: 1.1px;
  padding: 0 0 0 36px;
  position: relative;
  text-transform: uppercase;
  white-space: nowrap;
  width: 206px;

  ${props =>
    !props.transparent &&
    css`
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, ${props => (props.lightShadow ? 0.1 : 0.5)});

      &:hover {
        background: ${props => darken(0.1, props.theme.colors.maize)};
      }
    `};

  ${props =>
    props.transparent &&
    css`
      &:hover {
        border-color: ${props => props.theme.colors.white};
      }
    `};

  &::before {
    content: '';
    background: url(${BenImage2}) no-repeat center center;
    background-image: image-set(${BenImage1} 1x, ${BenImage2} 2x, ${BenImage3} 3x);
    background-size: contain;
    height: 26px;
    left: 23px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 26px;
  }
`;
