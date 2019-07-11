import * as React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styled';

import { PhoneIcon } from './icons';

import { toClassNameObj } from 'src/services/helpers';

function CallButton({ className }) {
  return (
    <Container href="tel:+1-310-453-3355" {...toClassNameObj(className)}>
      <PhoneIcon />
      <Text>+1-310-453-3355</Text>
    </Container>
  );
}
CallButton.propTypes = {
  className: PropTypes.string,
};

export default CallButton;
