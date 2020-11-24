import React from 'react';
import { func, node, string } from 'prop-types';

import StyledInput from './Input.styles.tsx';

const Input = ({
  onClick, variant, 
}) => {
  if (variant === 'search') return <StyledInput variant={variant} onClick={onClick} placeholder='VIBE 검색' />;
  return <StyledInput variant={variant} onClick={onClick} placeholder='플레이리스트 이름을 입력해 주세요' />;
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
