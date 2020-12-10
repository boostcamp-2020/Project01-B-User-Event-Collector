import React, { ReactNode } from 'react';
import Link from 'next/link';
import StyledA from './A.styles';
import { useSelector } from 'react-redux';
import useClickEventLog from '@hooks/useClickEventLog';

interface AProps {
    children: ReactNode;
    href: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const A = ({ children, href, variant }: AProps) => {
    const user = useSelector((state) => state.user);
    const handleClick = useClickEventLog({ userId: user.id, href });

    return (
        <Link href={href ? href : ''}>
            <StyledA variant={variant} onClick={handleClick}>
                {children}
            </StyledA>
        </Link>
    );
};

export default A;
