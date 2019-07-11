import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { Container, Text, Image, PictureContainer, MobileContainer } from './styled';

import { toSrcSet } from 'src/services/helpers';

function Description({ pictures, text }) {
  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={12} md={5}>
            {text.map((line, index) => <Text key={index}>{line}</Text>)}
          </Col>
          <Col xs={12} md={6} mdOffset={1}>
            <MobileContainer>
              <PictureContainer>
                {pictures.map((pictureSet, index) => {
                  const tmp = [...pictureSet];
                  const firstImage = tmp.shift();
                  return (
                    <Image
                      key={index}
                      alt=""
                      front={index === 0}
                      src={firstImage}
                      {...toSrcSet(tmp)}
                    />
                  );
                })}
              </PictureContainer>
            </MobileContainer>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}
Description.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.array).isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Description;
