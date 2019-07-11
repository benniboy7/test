import * as React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid';

import {
  Container,
  GridStyled,
  Title,
  VideoButton,
  Buttons,
  Centered,
  Video,
  VideoContainer,
  QuoteButtonStyled,
} from './styled';

import BackgroundVideo from './videos/Background.mp4';

function Cover({ innerRef = () => {} }) {
  return (
    <Container innerRef={innerRef}>
      <GridStyled>
        <Centered>
          <Row>
            <Col xs={12} md={5}>
              <Title>Aviation Insurance for Luxury Aircrafts</Title>
              <Buttons>
                <QuoteButtonStyled framePosition="left" />
                <VideoButton to="/video">Play video</VideoButton>
              </Buttons>
            </Col>
          </Row>
        </Centered>
      </GridStyled>
      <VideoContainer>
        <Video src={BackgroundVideo} autoPlay loop muted playsInline />
      </VideoContainer>
    </Container>
  );
}
Cover.propTypes = {
  innerRef: PropTypes.func,
};

export default Cover;
