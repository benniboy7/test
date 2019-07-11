import * as React from 'react';
import PropTypes from 'prop-types';

import { toClassNameObj } from 'src/services/helpers';

function HamburgerIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="14"
      viewBox="0 0 24 14"
      {...toClassNameObj(className)}
    >
      <g fill="#FFF" fillRule="nonzero">
        <rect width="24" height="2" opacity=".9" rx="1" />
        <rect width="24" height="2" y="6" rx="1" />
        <rect width="24" height="2" y="12" rx="1" />
      </g>
    </svg>
  );
}
HamburgerIcon.propTypes = {
  className: PropTypes.string,
};

export { HamburgerIcon };
