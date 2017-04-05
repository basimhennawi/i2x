import React from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

const ButtonWrapper = styled(FlatButton)`
  width: 100%;
`;

const Button = ({ onClick, label }) => (
  <ButtonWrapper
    onClick={onClick}
    label={label}
  >
  </ButtonWrapper>
);

Button.propTypes = {
  onClick: React.PropTypes.func,
  label: React.PropTypes.any,
};

export default Button;
