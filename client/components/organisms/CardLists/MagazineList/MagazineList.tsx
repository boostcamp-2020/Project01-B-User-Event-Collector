import React from 'react';
import MagazineCard from '@components/organisms/Cards/MagazineCard';
import { List, Item } from './MagazineList.styles';
import { MagazineCardProps } from '@interfaces/props';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import { dataType } from '@constants/identifier';

interface MagazineListProps {
    variant?: string;
    items: MagazineCardProps[];
}

const MagazineList = ({ variant, items }: MagazineListProps) => (
    <List variant={variant}>
        {items.map((item) => (
            <Item key = {item.id} variant={variant}>
                <ComponentInfoWrapper key = {item.id} componentId={`${item.id}`} data={{ type: dataType.magaznie, id: item.id }}>
                    <MagazineCard key = {item.id} {...(item as MagazineCardProps)} />
                </ComponentInfoWrapper>
            </Item>
        ))}
    </List>
);

export default MagazineList;
