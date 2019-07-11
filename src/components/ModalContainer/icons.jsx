import * as React from 'react';
import PropTypes from 'prop-types';

import { toClassNameObj } from 'src/services/helpers';

function CloseIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...toClassNameObj(className)}
    >
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M8 6.586L13.657.929a1 1 0 1 1 1.414 1.414L9.414 8l5.657 5.657a1 1 0 1 1-1.414 1.414L8 9.414l-5.657 5.657A1 1 0 1 1 .93 13.657L6.586 8 .929 2.343A1 1 0 1 1 2.343.93L8 6.586z"
      />
    </svg>
  );
}
CloseIcon.propTypes = {
  className: PropTypes.string,
};

export { CloseIcon };
