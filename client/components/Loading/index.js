import React from 'react';
import { CircularProgress } from 'material-ui';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10px);
`;

export default () => (
  <LoadingWrapper><CircularProgress /></LoadingWrapper>
);
