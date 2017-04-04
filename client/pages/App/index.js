/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Logout from 'components/Logout';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    const Wrapper = styled.section`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 30px 0;
      @media (max-width: 768px) {
        padding: 10px 20px 0;
      }
    `;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        <Wrapper>
          <Header />
          <Logout />
          {React.Children.toArray(this.props.children)}
          <Footer />
        </Wrapper>
      </MuiThemeProvider>
    );
  }
}

export default connect(undefined, undefined)(App);
