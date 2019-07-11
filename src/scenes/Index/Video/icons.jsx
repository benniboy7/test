import * as React from 'react';
import PropTypes from 'prop-types';

import { toClassNameObj } from 'src/services/helpers';

function PlayIcon({ className = '' }) {
  return (
    <svg
      width="220px"
      height="220px"
      viewBox="0 0 220 220"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...toClassNameObj(className)}
    >
      <defs>
        <rect id="path-1" x="0" y="0" width="200" height="200" rx="100" />
        <filter
          x="-8.8%"
          y="-6.2%"
          width="117.5%"
          height="117.5%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
        <polygon id="path-3" points="86.5 72.624879 86.5 126.387388 128.315285 99.5061334" />
        <filter
          x="-41.9%"
          y="-23.3%"
          width="183.7%"
          height="165.1%"
          filterUnits="objectBoundingBox"
          id="filter-5"
        >
          <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-943.000000, -4547.000000)">
          <g transform="translate(-2.000000, 0.000000)">
            <g transform="translate(1.000000, 4332.000000)">
              <g>
                <g>
                  <g transform="translate(954.000000, 220.000000)">
                    <g>
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-2)"
                        xlinkHref="#path-1"
                      />
                      <use
                        className="bg"
                        fillOpacity="0.60473279"
                        fill="#000000"
                        fillRule="evenodd"
                        xlinkHref="#path-1"
                      />
                    </g>
                    <mask fill="white">
                      <use xlinkHref="#path-3" />
                    </mask>
                    <g fillRule="nonzero">
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-5)"
                        xlinkHref="#path-3"
                      />
                      <use fill="#FFFFFF" xlinkHref="#path-3" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
PlayIcon.propTypes = {
  className: PropTypes.string,
};

export { PlayIcon };
