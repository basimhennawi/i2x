import React from 'react';
import styled from 'styled-components';
import Signin from 'components/Signin';

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const PageWrapper = styled.section`
      width: 100%;
    `;

    return (
      <PageWrapper>
        <Signin />
      </PageWrapper>
    );
  }
}

export default LoginPage;
