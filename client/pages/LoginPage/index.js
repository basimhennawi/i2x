import React from 'react';
import styled from 'styled-components';
import Signin from 'components/Signin';

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const PageWrapper = styled.section`
      display: flex;
      width: 100%;
      max-width: 600px;
    `;

    return (
      <PageWrapper>
        <Signin />
      </PageWrapper>
    );
  }
}

export default LoginPage;
