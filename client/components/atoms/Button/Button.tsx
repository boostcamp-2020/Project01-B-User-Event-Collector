import React, { ReactNode, MouseEvent, ComponentType } from 'react';
import styled from 'styled-components';
import StyledButton from './Button.styles';

interface ButtonProps {
    children: ReactNode;
    icon?: ComponentType;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    variant?: 'primary' | 'secondary';
    width?: string;
    height?: string;
}

const IconWrapper = styled.div`
    margin-right: 3px;
`;

const Button = ({
  children, onClick, icon: Icon, variant, width, height
}: ButtonProps) => (
  <StyledButton variant={variant} onClick={onClick} width={width} height={height} >
    { Icon && (
    <IconWrapper>
      <Icon />
    </IconWrapper>
    )}
    {children}
  </StyledButton>
);

export default Button;
