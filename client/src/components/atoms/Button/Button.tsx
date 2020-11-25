import React, { FC, ReactNode, MouseEvent } from 'react';
import StyledButton from './Button.styles';

interface ButtonProps {
    children: ReactNode;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    variant?: 'primary';
}

const Button: FC<ButtonProps> = ({
  children, onClick, variant,
}) => <StyledButton variant={variant} onClick={onClick}>{children}</StyledButton>;

export default Button;
