import React, { ReactNode, MouseEvent, ComponentType } from 'react';
import styled from 'styled-components';
import StyledIconButton from './IconButton.styles';

interface IconButtonProps {
    icon: any;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    variant?: 'plainGreyRegular' | 'plainGreySmall' | 'plainWhiteRegular' | 'plainBlackRegular' ;
}

const IconWrapper = styled.div`
    margin-right: 10px;
`;

const IconButton = ({
  onClick, icon: Icon, variant,
}: IconButtonProps) => (
  <StyledIconButton variant={variant} onClick={onClick}>
    <Icon style={{ fontSize: 15 }}/>
  </StyledIconButton>
);

export default IconButton;
