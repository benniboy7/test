import styled, { css } from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  padding: 80px 0 150px 0;
  width: 100%;
`;

export const Text = styled.p`
  line-height: 1.88;
  margin: 19px 0 0 0;
  padding: 0 1rem;

  &:first-child {
    margin: 0;
    padding-top: 71px;
  }

  &:last-child {
    margin-bottom: 80px;

    @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const PictureContainer = styled.div`
  padding-top: 100%;
  max-height: 464px;
  position: relative;
`;

export const Image = styled.img`
  max-width: 66%;
  position: absolute;

  ${props =>
    props.front
      ? css`
          bottom: 0;
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
          left: 0;
          z-index: 1;
        `
      : css`
          right: 0;
          top: 0;
        `};
`;

export const MobileContainer = styled.div`
  margin: 0 1rem;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin: 0;
  }
`;
