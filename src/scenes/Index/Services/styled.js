import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid';

import { AirplaneIcon, AirshipIcon, BalloonIcon } from './icons';

export const Container = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 130px 1rem 112px 1rem;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 130px 0 112px 0;
  }
`;

export const Heading = styled.h2`
  color: ${props => props.theme.colors.blackThree};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.1px;
  margin: 0;
  text-transform: uppercase;
`;

export const ServiceTitle = styled.h3`
  color: ${props => props.theme.colors.greyishBrown};
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 18px;
  font-weight: bold;
  margin: 28px 0 13px 0;
  text-transform: uppercase;
`;

export const ServiceDescription = styled.p`
  line-height: 1.88;
  margin: 0;
  padding-right: 10px;
`;

export const ColStyled = Col.extend`
  margin-top: 70px;
`;

export const AirplaneIconStyled = styled(AirplaneIcon)`
  height: 33px;
  width: auto;
`;

export const AirshipIconStyled = AirplaneIconStyled.withComponent(AirshipIcon);

export const BalloonIconStyled = AirplaneIconStyled.withComponent(BalloonIcon);
