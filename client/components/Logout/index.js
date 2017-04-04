import React from 'react';
import styled from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import FormattedMessage from 'components/FormattedMessage';
import FlatButton from 'material-ui/FlatButton';
import { getToken } from 'utils/api';
import messages from './messages';
import { logout } from './actions';

export class Logout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    push: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired,
  };

  logoutHandler() {
    this.props.logout();
    this.props.push('/login');
  }

  render() {
    // Only show logout btn when user is loggedin
    if (!getToken()) return null;

    const LogoutWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    return (
      <LogoutWrapper>
        <FlatButton
          onClick={this.logoutHandler.bind(this)} // eslint-disable-line react/jsx-no-bind
          label={<FormattedMessage {...messages.logout} />}
        />
      </LogoutWrapper>
    );
  }
}

const mapDispatchToProps = {
  push,
  logout,
};

export default connect(undefined, mapDispatchToProps)(injectIntl(Logout));
