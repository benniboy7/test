import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Grid } from 'react-styled-flexboxgrid';

import {
  Container,
  Inner,
  CallButtonStyled,
  QuoteButtonStyled,
  HamburgerButton,
  HamburgerIconStyled,
  Select,
  Navigation,
  NavList,
  NavListItem,
  NavListLink,
  NavListLabel,
  LogoLink,
} from './styled';

import { DOCUMENTS } from 'src/components/Footer/Documents';

import { toSrcSet } from 'src/services/helpers';

import LogoImage1 from './images/Logo.png';
import LogoImage2 from './images/Logo@2x.png';
import LogoImage3 from './images/Logo@3x.png';

@withRouter
export default class Header extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  };

  handleSelect = e => {
    const { value } = e.target;

    if (/\.pdf$/i.test(value)) {
      window.location = value;
    } else {
      this.props.history.push(value);
    }
  };

  render() {
    return (
      <Container>
        <Grid>
          <Inner>
            <HamburgerButton>
              <HamburgerIconStyled />
              <Select value={0} onChange={this.handleSelect}>
                <option value={0} disabled>
                  Navigation
                </option>
                <option value="/about">About</option>
                <option value="/services">Services</option>
                <option value="/testimonials">Testimonials</option>
                <optgroup label="Forms">
                  {DOCUMENTS.map(doc => (
                    <option key={doc.id} value={doc.pdf}>
                      {doc.title}
                    </option>
                  ))}
                </optgroup>
                <option value="/contactus">Contact Us</option>
              </Select>
            </HamburgerButton>
            <LogoLink to="/">
              <img alt={window.APP_TITLE} src={LogoImage1} {...toSrcSet(LogoImage2, LogoImage3)} />
            </LogoLink>
            <Navigation>
              <NavList>
                <NavListItem>
                  <NavListLink to="/about">About</NavListLink>
                </NavListItem>
                <NavListItem>
                  <NavListLink to="/services">Services</NavListLink>
                </NavListItem>
                <NavListItem>
                  <NavListLink to="/testimonials">Testimonials</NavListLink>
                </NavListItem>
                <NavListItem>
                  <NavListLabel>
                    Forms
                    <Select value={0} onChange={this.handleSelect}>
                      <option value={0} disabled>
                        Forms
                      </option>
                      {DOCUMENTS.map(doc => (
                        <option key={doc.id} value={doc.pdf}>
                          {doc.title}
                        </option>
                      ))}
                    </Select>
                  </NavListLabel>
                </NavListItem>

                <NavListItem>
                  <NavListLink to="/contactus">Contact Us</NavListLink>
                </NavListItem>

                <NavListItem>
                  <CallButtonStyled />
                </NavListItem>
              </NavList>
            </Navigation>
            <QuoteButtonStyled framePosition="right" />
            <CallButtonStyled />
          </Inner>
        </Grid>
      </Container>
    );
  }
}
