import * as React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styled';

import { TypeContext } from 'src/services/contexts';

import { toClassNameObj } from 'src/services/helpers';

function QuoteButton({ className = '', lightShadow = false, transparent = false }) {
  return (
    <TypeContext.Consumer>
      {type => (
        <Button
          lightShadow={lightShadow}
          to={`${type ? `/${type.key}` : ''}/meeting`}
          transparent={transparent}
          {...toClassNameObj(className)}
        >
          Get a free quote
        </Button>
      )}
    </TypeContext.Consumer>
  );
}
QuoteButton.propTypes = {
  className: PropTypes.string,
  lightShadow: PropTypes.bool,
  transparent: PropTypes.bool,
};

export default QuoteButton;
