import * as React from 'react';
import PropTypes from 'prop-types';

import { toClassNameObj } from 'src/services/helpers';

function LeftArrowIcon({ className = '' }) {
  return (
    <svg
      width="8px"
      height="14px"
      viewBox="0 0 8 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...toClassNameObj(className)}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-210.000000, -1504.000000)">
          <g
            transform="translate(-2.000000, 0.000000)"
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <g transform="translate(2.000000, 1325.000000)">
              <g transform="translate(208.000000, 122.000000)">
                <polyline id="Shape" points="9 70 3 64 9 58" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
LeftArrowIcon.propTypes = {
  className: PropTypes.string,
};

function RightArrowIcon({ className = '' }) {
  return (
    <svg
      width="8px"
      height="14px"
      viewBox="0 0 8 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...toClassNameObj(className)}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-244.000000, -1504.000000)">
          <g
            transform="translate(-2.000000, 0.000000)"
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <g transform="translate(2.000000, 1325.000000)">
              <g transform="translate(208.000000, 122.000000)">
                <polyline
                  transform="translate(40.000000, 64.000000) scale(-1, 1) translate(-40.000000, -64.000000) "
                  points="43 70 37 64 43 58"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
RightArrowIcon.propTypes = {
  className: PropTypes.string,
};

export { LeftArrowIcon, RightArrowIcon };
