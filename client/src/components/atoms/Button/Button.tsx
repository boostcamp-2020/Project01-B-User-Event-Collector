import React, { ReactNode, MouseEvent, ComponentType } from 'react';
import styled from 'styled-components';
import StyledButton from './Button.styles';

interface ButtonProps {
    children: ReactNode;
    icon?: ComponentType;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    variant?: 'primary';
}

const IconWrapper = styled.div`
    margin-right: 10px;
`;

const Button = ({
  children, onClick, icon: Icon, variant,
}: ButtonProps) => (
  <StyledButton variant={variant} onClick={onClick}>
    { Icon && (
    <IconWrapper>
      <Icon />
    </IconWrapper>
    )}
    {children}
  </StyledButton>
);

export default Button;
