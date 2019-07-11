import styled from 'styled-components';

export const Container = styled.a`
  align-items: center;
  color: ${props => props.theme.colors.white};
  display: flex;
  font-family: ${props => props.theme.fonts.breuer};
  font-size: 16px;
  font-weight: 700;
  height: 48px;
  letter-spacing: 1.1px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Text = styled.span`
  display: none;
  margin-left: 9px;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: inline;
  }
`;
