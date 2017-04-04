import React from 'react';
import styled from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import FormattedMessage from 'components/FormattedMessage';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import messages from './messages';
import { signinWithEmail } from './actions';
import selectSignin from './selectors';

export class Signin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    push: React.PropTypes.func.isRequired,
    signinWithEmail: React.PropTypes.func.isRequired,
    status: React.PropTypes.shape({
      error: React.PropTypes.any,
    }),
  };

  componentWillMount() {
    this.setState({ email: '', password: '' });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status.success) {
      this.props.push('/list-recordings');
    }
  }

  getError() {
    if (this.props.status.error) {
      return this.props.status.error;
    }
    return '';
  }

  login(email, password) {
    this.props.signinWithEmail(email, password);
  }

  updateEmail(e) {
    this.setState({ email: e.target.value });
  }

  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    const SigninWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    return (
      <div>
        <TextField
          errorText={this.getError()}
          type="text"
          value={this.state.email}
          onChange={(e) => this.updateEmail(e)}
          floatingLabelText={<FormattedMessage {...messages.email} />}
          fullWidth
        />
        <TextField
          errorText={this.getError()}
          type="password"
          value={this.state.password}
          onChange={(e) => this.updatePassword(e)}
          floatingLabelText={<FormattedMessage {...messages.password} />}
          fullWidth
        />
        <FlatButton
          onClick={() => this.login(this.state.email, this.state.password)}
          label={<FormattedMessage {...messages.login} />}
        />
      </div>
    );
  }
}

const mapStateToProps = selectSignin();

const mapDispatchToProps = {
  push,
  signinWithEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Signin));
