import React, { ReactNode, MouseEvent } from 'react';
import Link from 'next/link';
import StyledA from './A.styles';

interface AProps {
    children: ReactNode;
    href: string;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const A = ({ children, href, onClick, variant }: AProps) => (
    <Link href={href ? href : ''}>
        <StyledA variant={variant} onClick={onClick}>
            {children}
        </StyledA>
    </Link>
);

export default A;
