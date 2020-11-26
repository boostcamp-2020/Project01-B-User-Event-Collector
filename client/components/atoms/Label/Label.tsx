import React, { ReactNode, MouseEvent } from 'react';
import StyledSpan from './Label.styles';

interface LabelProps {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  variant?: 'special' | 'primary' | 'secondary';
  selected?: boolean;
}

const Label = ({
  children, onClick, variant, selected,
}: LabelProps) => (
  <StyledSpan variant={variant} onClick={onClick} selected={selected}>
    {children}
  </StyledSpan>
);

export default Label;
