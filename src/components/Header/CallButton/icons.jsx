import * as React from 'react';
import PropTypes from 'prop-types';

import { toClassNameObj } from 'src/services/helpers';

function PhoneIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      {...toClassNameObj(className)}
    >
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.888 15.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.998 1h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"
      />
    </svg>
  );
}
PhoneIcon.propTypes = {
  className: PropTypes.string,
};

export { PhoneIcon };
