import React, { ReactNode, MouseEvent } from 'react';
import StyledCircle from './Circle.styles';

interface CircleProps {
    children?: ReactNode;
    variant?: 'primary';
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const Circle = ({ children, variant, onClick }: CircleProps) => (
  <StyledCircle variant={variant} onClick={onClick}>
    {children}
  </StyledCircle>
);

export default Circle;
