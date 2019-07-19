import styled from 'styled-components';

export const HubspotContainer = styled.div`
  // height: 590px;
  // padding-top: 60%;
  // backdrop-filter: blur(1.8px);
  // display: flex;
  // height: 100%;
  // left: 0;
  // overflow: auto;
  // position: fixed;
  // top: 0;
  // width: 100%;
  // z-index: 3;
  background: #f8f8f8;
  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    // height: 695px;
  }
`;

export const Hubspot = styled.iframe`
  border: 0;
  height: 0;
  left: 0;
  position: absolute;
  top: 0;
  width: 0;
`;
