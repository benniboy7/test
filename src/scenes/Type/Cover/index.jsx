import * as React from 'react';
import PropTypes from 'prop-types';

import { Container, GridStyled, Flex, Inner, Title } from './styled';

import QuoteButton from 'src/components/QuoteButton';

function Cover({ background, title }) {
  return (
    <Container background={background}>
      <GridStyled>
        <Flex>
          <Inner>
            <Title>{title}</Title>
            <QuoteButton framePosition="left" />
          </Inner>
        </Flex>
      </GridStyled>
    </Container>
  );
}
Cover.propTypes = {
  background: PropTypes.arrayOf(PropTypes.node).isRequired,
  title: PropTypes.string.isRequired,
};

export default Cover;
