import React, { ReactNode, MouseEvent } from 'react';
import StyledCircle from './Circle.styles';

interface CircleProps {
    children: ReactNode;
    variant?: 'primary';
}

const Circle = ({ children, variant }: CircleProps) => (
  <StyledCircle variant={variant}>
    {children}
  </StyledCircle>
);

export default Circle;
