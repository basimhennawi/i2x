import React from 'react';
import styled from 'styled-components';
import Logout from 'components/Logout';
import Logo from 'components/Logo';

const HeaderWrapper = styled.div`
  display: flex;
  // position: fixed;
  background-color: #eee;
  width: 100%;
  @media (min-width: 1215px) {
    padding: 10px calc((100% - 1160px) / 2 );
  }
  @media (max-width: 1215px) {
    padding: 10px 20px;
  }
  justify-content: space-between;
  align-items: center;

`;

const LogoContainer = styled.div `
  width: 60px;
`;

export default () => (
  <HeaderWrapper>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <Logout />
  </HeaderWrapper>
);
