import React from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

const Button = styled(FlatButton)`
  width: 100%;
`;



export default ({onClick, label}) => (
  <Button
    onClick={onClick} 
    label={label}>
  </Button>
);
