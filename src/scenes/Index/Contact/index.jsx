import * as React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid';

import {
  Container,
  GridStyled,
  Heading,
  Text,
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
            Office Phone: 310-453-3355
            <br/>
            Email: Team@sunsetais.com
            <br/>
            <br/>

            Sunset Aviation Insurance Services, Inc.
            <br/>
            312 Arizona Ave
            <br/>
            Santa Monica, CA 90401
            </TextContainer>
          </Col>
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send to</button>
            </p>
          </form>
        </Row>
      </GridStyled>
    </Container>
  );
}
Contact.propTypes = {
  innerRef: PropTypes.func,
};

export default Contact;
