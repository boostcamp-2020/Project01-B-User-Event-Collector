import React, { ReactNode, ComponentType } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import useClickEventLog from '@hooks/useClickEventLog';

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
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${(props) => (props.selected ? '#FF1150' : '#fff')};
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

const MenuLink = ({ children, href, icon: Icon, selected }: MenuLinkProps) => {
    const router = useRouter();
    const user = useSelector((state) => state.user);
    const handleClick = useClickEventLog({ userId: user.id, href });

    return (
        <Link href={href}>
            <StyledLink selected={selected ? selected : router.pathname === href} onClick={handleClick} href={href}>
                {Icon && (
                    <IconWrapper>
                        <Icon />
                    </IconWrapper>
                )}
                {children}
            </StyledLink>
        </Link>
    );
};

export default MenuLink;
