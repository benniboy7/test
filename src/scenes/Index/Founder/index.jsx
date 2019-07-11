import * as React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid';

import {
  Container,
  GridStyled,
  ImageContainer,
  Image,
  Heading,
  Text,
  Logos,
  TextContainer,
  QuoteButtonStyled,
} from './styled';

import { toSrcSet } from 'src/services/helpers';

import CityImage1 from './images/City.jpg';
import CityImage2 from './images/City@2x.jpg';
import CityImage3 from './images/City@3x.jpg';

import BenImage1 from './images/Ben.jpg';
import BenImage2 from './images/Ben@2x.jpg';
import BenImage3 from './images/Ben@3x.jpg';

import LogosImage1 from './images/Logos.jpg';

function Founder({ innerRef = () => {} }) {
  return (
    <Container innerRef={innerRef}>
      <GridStyled>
        <Row>
          <Col xs={12} md={6}>
            <TextContainer>
              <ImageContainer>
                <Image src={CityImage1} {...toSrcSet(CityImage2, CityImage3)} />
                <Image src={BenImage1} {...toSrcSet(BenImage2, BenImage3)} front />
              </ImageContainer>
            </TextContainer>
          </Col>
          <Col xs={12} md={5} mdOffset={1}>
            <TextContainer>
              <Heading>Meet the Founder:</Heading>
              <Text>
                Ben Peterson has been a commercial pilot and flight instructor for over 15-Years. In
                2012, Ben started Sunset Aviation to help aviation clients around the world with
                their insurance needs.
              </Text>
              <QuoteButtonStyled framePosition="left" lightShadow />
              <Logos src={LogosImage1} />
            </TextContainer>
          </Col>
        </Row>
      </GridStyled>
    </Container>
  );
}
Founder.propTypes = {
  innerRef: PropTypes.func,
};

export default Founder;
