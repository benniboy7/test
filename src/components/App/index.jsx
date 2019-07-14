import * as React from 'react';
import { normalize } from 'polished';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from 'src/scenes/Index';
import Type, { TYPES } from 'src/scenes/Type';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import MeetingModal from 'src/components/MeetingModal';
import MobileQuote from 'src/components/MobileQuote';

import theme from 'src/theme';

import FontAverta from './fonts/Averta.woff';
import FontAverta2 from './fonts/Averta.woff2';

import FontBreuer from './fonts/Breuer.woff';
import FontBreuer2 from './fonts/Breuer.woff2';

injectGlobal`
  @font-face {
    font-family: ${theme.fonts.averta};
    src: url(${FontAverta2}) format('woff2'), url(${FontAverta}) format('woff');
  }
  
  @font-face {
    font-family: ${theme.fonts.breuer};
    font-weight: 700;
    src: url(${FontBreuer2}) format('woff2'), url(${FontBreuer}) format('woff');
  }

  ${normalize()};
  
  *, *::before, *::after {
    box-sizing: border-box;
    outline: 0;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    background: ${theme.colors.whiteTwo};
    color: ${theme.colors.warmGrey};
    font-family: ${theme.fonts.averta};
    font-size: 16px;
  }
  
  a, button {
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
`;

export default function App() {
  const typesRegex = Object.keys(TYPES).join('|');

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          {/*<Header />*/}
          {/*<Switch>*/}
            {/*<Route path={`/:type(${typesRegex})`} component={Type} />*/}
            {/*<Route path="/:scroll(about|services|testimonials|contact)" component={Index} />*/}
            <Route path="/" component={Index} />
          {/*</Switch>*/}
          {/*<Footer />*/}
          <MobileQuote />
          <Route path="/meeting" component={MeetingModal} />
          <Route path={`/:type(${typesRegex})/meeting`} component={MeetingModal} />
        </div>
      </Router>
    </ThemeProvider>
  );
}
