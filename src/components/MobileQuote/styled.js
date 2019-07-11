import styled from 'styled-components';

import QuoteButton from 'src/components/QuoteButton';

export const Container = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85));
  bottom: 0;
  display: flex;
  left: 0;
  height: 134px;
  position: fixed;
  width: 100%;
  z-index: 1;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: none;
  }
`;

export const QuoteButtonStyled = styled(QuoteButton)`
  margin: auto auto 20px auto;
`;
