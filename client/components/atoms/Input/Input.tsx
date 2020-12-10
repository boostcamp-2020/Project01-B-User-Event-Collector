import React from 'react';
import { func, node, string } from 'prop-types';

import StyledInput from './Input.styles';
import { InputProps } from '@interfaces/props';

const Input = ({variant}: InputProps) => {
  if (variant === 'search') return <StyledInput type = "text" variant={variant} placeholder='VIBE 검색' />;
  return <StyledInput type = "text" variant={variant} placeholder='플레이리스트 이름을 입력해 주세요' />;
};

// Expected prop values
Input.propTypes = {
  onClick: func,
  variant: string,
};

// Default prop values
Input.defaultProps = {
  children: 'Input text',
};

export default Input;
