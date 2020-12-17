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
    disabled?: boolean | undefined;
    htmlType?
    id?
}

const IconWrapper = styled.div`
    margin-right: 3px;
`;

const Button = ({ children, onClick, icon: Icon, variant, width, height, disabled }: ButtonProps) => (
    <StyledButton variant={variant} onClick={onClick} width={width} height={height} disabled={disabled}>
        {Icon && (
            <IconWrapper>
                <Icon />
            </IconWrapper>
        )}
        {children}
    </StyledButton>
);

export default Button;
