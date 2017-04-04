import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <HeaderWrapper>
    <h6>This will be the header component, just the i2x loga at left and the logout button at right!</h6>
  </HeaderWrapper>
);
