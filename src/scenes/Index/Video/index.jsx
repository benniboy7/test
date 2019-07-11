import * as React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import {
  Container,
  GridStyled,
  Flex,
  FlexInner,
  Title,
  Description,
  VideoButton,
  PlayButton,
} from './styled';

import { PlayIcon } from './icons';

export default function Video() {
  return (
    <Container>
      <GridStyled>
        <Row>
          <Col xs={12} sm={6}>
            <Flex>
              <FlexInner>
                <Title>Meet our team</Title>
                <Description>
                  After working with Sunset Aviation, my insurance needs have been covered for
                  years.
                </Description>
                <VideoButton to="/video">Play video</VideoButton>
              </FlexInner>
            </Flex>
          </Col>
        </Row>
        <PlayButton to="/video">
          <PlayIcon />
        </PlayButton>
      </GridStyled>
    </Container>
  );
}
