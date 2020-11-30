import React from 'react';
import { StationCardProps } from '@interfaces/props';
import StationCard from '@components/organisms/Cards/StationCard/StationCard';

interface StationCardListProps {
    items: StationCardProps[];
}
const StationCardList = ({ items }: StationCardListProps) => (
    <ul>
        {items.map((item) => (
            <li>
                <StationCard {...(item as StationCardProps)} />
            </li>
        ))}
    </ul>
);

export default StationCardList;
