import * as React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import {
  Container,
  Background,
  GridStyled,
  Outer,
  Inner,
  Heading,
  NavButton,
  RowStyled,
  Logo,
} from './styled';

// import { LeftArrowIcon, RightArrowIcon } from './icons';

import { toSrcSet } from 'src/services/helpers';

import LaxLogo1 from './images/Lax.png';
import LaxLogo2 from './images/Lax@2x.png';
import LaxLogo3 from './images/Lax@3x.png';

import CirrusLogo1 from './images/Cirrus.png';
import CirrusLogo2 from './images/Cirrus@2x.png';

import IataLogo1 from './images/Iata.png';
import IataLogo2 from './images/Iata@2x.png';

export const LOGOS = [
  [LaxLogo1, LaxLogo2, LaxLogo3],
  [CirrusLogo1, CirrusLogo2],
  [IataLogo1, IataLogo2],
];

export default function Partners() {
  const renderedLogos = LOGOS.map((logoSet, index) => {
    const tmp = [...logoSet];
    const logo = tmp.shift();
    return (
      <Col key={index} xs={12} sm={6}>
        <Outer>
          <Logo src={logo} {...toSrcSet(tmp)} />
        </Outer>
      </Col>
    );
  });

  return (
    <Container>
      <Background>
        <GridStyled>
          <Row>
            <Col xs={12} sm={4}>
              <Outer flat>
                <Inner left>
                  <Heading>We partner with</Heading>
                  {/*<NavButton type="button" left>*/}
                  {/*<LeftArrowIcon />*/}
                  {/*</NavButton>*/}
                  {/*<NavButton type="button" right>*/}
                  {/*<RightArrowIcon />*/}
                  {/*</NavButton>*/}
                </Inner>
              </Outer>
            </Col>
            <Col xs={12} sm={8}>
              <RowStyled>{renderedLogos}</RowStyled>
            </Col>
          </Row>
        </GridStyled>
      </Background>
    </Container>
  );
}
