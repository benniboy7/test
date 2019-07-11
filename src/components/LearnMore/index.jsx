import * as React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid';

import { Container, FirstGrid, LastGrid, Banner, BannerText, ButtonContainer } from './styled';

import QuoteButton from 'src/components/QuoteButton';

function LearnMore({ first, second }) {
  return (
    <Container>
      <Banner>
        <FirstGrid position={first}>
          <Row>
            <Col xs={12} sm={6}>
              <BannerText>
                Want to Learn More?<br />
                Get a Free Insurance Quote
              </BannerText>
            </Col>
            <Col xs={12} sm={6}>
              <ButtonContainer>
                <QuoteButton framePosition="right" />
              </ButtonContainer>
            </Col>
          </Row>
        </FirstGrid>
      </Banner>
      <LastGrid position={second} />
    </Container>
  );
}
LearnMore.propTypes = {
  first: PropTypes.oneOf(['none', 'leftBottom', 'leftTop', 'rightTop']).isRequired,
  second: PropTypes.oneOf(['none', 'leftBottom', 'rightBottom']).isRequired,
};

export default LearnMore;
