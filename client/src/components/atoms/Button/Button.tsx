import React, { ReactNode, MouseEvent } from 'react';
import StyledButton from './Button.styles';

interface ButtonProps {
    children: ReactNode;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    variant?: 'primary';
}

const Button = ({ children, onClick, variant }: ButtonProps) => (
  <StyledButton variant={variant} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
