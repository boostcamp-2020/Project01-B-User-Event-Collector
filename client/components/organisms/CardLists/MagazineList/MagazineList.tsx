import React from 'react';
import MagazineCard from '@components/organisms/Cards/MagazineCard';
import { List, Item } from './MagazineList.styles';
import { MagazineCardProps } from '@interfaces/props';

interface MagazineListProps {
    variant?: string,
    items: MagazineCardProps[];
}


const MagazineList = ({ variant, items }: MagazineListProps) => (
    <List variant={variant}>
        {items.map((item) => (
            <Item variant={variant}>
                <MagazineCard {...(item as MagazineCardProps)} />
            </Item>
        ))}
    </List>
);

export default MagazineList;
