import * as React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid';
import NetlifyForm from 'react-netlify-form'

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
          <NetlifyForm name='Contact Form'>
            {({ loading, error, success }) => (
              <div>
                {loading &&
                  <div>Loading...</div>
                }
                {error &&
                  <div>Your information was not sent. Please try again later.</div>
                }
                {success &&
                  <div>Thank you for contacting us!</div>
                }
                {!loading && !success &&
                  <div>
                    <input type='text' name='Name' required />
                    <textarea name='Message' required />
                    <button>Submit</button>
                  </div>
                }
              </div>
            )}
          </NetlifyForm>
        </Row>
      </GridStyled>
    </Container>
  );
}
Contact.propTypes = {
  innerRef: PropTypes.func,
};

export default Contact;
