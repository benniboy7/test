import * as React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid';

import {
  Container,
  GridStyled,
  Heading,
  Text,
  Label,
  TextContainer,
} from './styled';

import { toSrcSet } from 'src/services/helpers';

function Contact({ innerRef = () => {} }) {
  return (
    <Container innerRef={innerRef}>
      <GridStyled>
        <Row>
          <Col xs={12} md={6}>
            <TextContainer>
            <Heading>Contact Us</Heading>
            Office Phone: <a href="tel:+1-310-453-3355"><Label>+1-310-453-3355</Label></a>
            <br/>
            Email: <Label>Team@sunsetais.com</Label>
            <br/>

            <Label>Sunset Aviation Insurance Services, Inc.</Label>
            <br/>
            <Label>312 Arizona Ave</Label>
            <br/>
            <Label>Santa Monica, CA 90401</Label>
            </TextContainer>
          </Col>
        </Row>
      </GridStyled>
    </Container>
  );
}
Contact.propTypes = {
  innerRef: PropTypes.func,
};

export default Contact;
