import React, { ReactNode, MouseEvent } from 'react';
import StyledA from './A.styles';

interface AProps {
  children: ReactNode;
  href: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const A = ({
  children, href, onClick, variant,
}:AProps) => (
  <StyledA variant={variant} href={href} onClick={onClick}>
    {children}
  </StyledA>
);

export default A;
