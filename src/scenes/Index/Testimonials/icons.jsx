import * as React from 'react';
import PropTypes from 'prop-types';

import { toClassNameObj } from 'src/services/helpers';

function LeftIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      viewBox="0 0 8 14"
      {...toClassNameObj(className)}
    >
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#F1C84A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 13L1 7l6-6"
      />
    </svg>
  );
}
LeftIcon.propTypes = {
  className: PropTypes.string,
};

function RightIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      viewBox="0 0 8 14"
      {...toClassNameObj(className)}
    >
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#F1C84A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 13l6-6-6-6"
      />
    </svg>
  );
}
RightIcon.propTypes = {
  className: PropTypes.string,
};

export { LeftIcon, RightIcon };
