import React, { ReactNode, ComponentType } from 'react';
import styled from 'styled-components';

interface MenuLinkProps {
    children: ReactNode;
    href: string;
    icon?: ComponentType;
    selected?: boolean;
}

interface styledLinkProps {
    href: string;
    selected?: boolean;
}

// TODO: a 태그 -> Link 컴포넌트로 변경하기
const StyledLink = styled.a<styledLinkProps>` 
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => (props.selected ? '#ff1500' : '#fff')};
    background-color: transparent;
    padding: 6px 9px;
    text-decoration: none;
    opacity: ${(props) => (props.selected ? '1' : '.8')};

    &:hover {
        opacity: 1;
    }
`;

const IconWrapper = styled.div`
    margin-right: 10px;
`;

const MenuLink = ({
  children, href, icon: Icon, selected,
}: MenuLinkProps) => (
  <StyledLink href={href} selected={selected}>
    { Icon && (
    <IconWrapper>
      <Icon />
    </IconWrapper>
    )}
    {children}
  </StyledLink>
);

export default MenuLink;
