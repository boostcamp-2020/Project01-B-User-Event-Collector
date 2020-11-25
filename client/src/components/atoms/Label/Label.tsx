import React, { ReactNode, MouseEvent } from 'react';
import StyledSpan from './Label.styles';

interface ButtonProps {
  children: ReactNode;
  variant?: 'special' | 'primary' | 'secondary';
  selected?: boolean;
}

const Label = ({
  children, onClick, variant, selected,
}: ButtonProps) => (
  <StyledSpan variant={variant} onClick={onClick} selected={selected}>
    {children}
  </StyledSpan>
);

export default Label;
