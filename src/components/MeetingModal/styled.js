import styled from 'styled-components';

export const HubspotContainer = styled.div`
  height: 590px;
  padding-top: 60%;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    height: 695px;
  }
`;

export const Hubspot = styled.iframe`
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
