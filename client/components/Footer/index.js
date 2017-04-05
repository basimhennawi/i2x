import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  align-self: flex-end;
`;

export default () => (
  <FooterWrapper>
    <h6>© 2017 by Basim Hennawi | i2x challenge</h6>
  </FooterWrapper>
);
