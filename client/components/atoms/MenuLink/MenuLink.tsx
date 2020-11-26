import React, { ReactNode, ComponentType } from 'react';
import Link from 'next/link'
import styled from 'styled-components';

interface MenuLinkProps {
    children: ReactNode;
    href: string;
    icon?: ComponentType;
    selected?: boolean;
}

interface styledLinkProps {
    selected?: boolean;
}

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
  <Link href={href}>
    <StyledLink selected={selected}>
      { Icon && (
      <IconWrapper>
        <Icon />
      </IconWrapper>
      )}
      {children}
    </StyledLink>
  </Link>
);

export default MenuLink;
