import React from 'react';
import MagazineCard from '@components/organisms/Cards/MagazineCard';
import { MagazineCardProps } from '@interfaces/props';
interface MagazineListProps {
    items: MagazineCardProps[];
}

const MagazineList = ({ items }: MagazineListProps) => (
    <ul>
        {items.map((item) => (
            <li>
                <MagazineCard {...(item as MagazineCardProps)} />
            </li>
        ))}
    </ul>
);

export default MagazineList;
