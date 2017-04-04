import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <FooterWrapper>
    <h6>This will be our very simple footer component, the content will be /© 2017 by Basim Hennawi, i2x challenge!/ like the footer in this page: https://goo.gl/GWZ9fj</h6>
  </FooterWrapper>
);
