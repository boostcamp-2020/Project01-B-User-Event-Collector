import React from 'react';
import styled from 'styled-components';
import ChartCard from '@components/molecules/ChartCard/ChartCard';
import { ChartCardProps } from '@interfaces/props';

interface ChartCardListProps {
    items: ChartCardProps[];
}
const ChartCardList = ({ items }: ChartCardListProps) => (
    <ul>
        {items.map((item) => (
            <li>
                <ChartCard {...(item as ChartCardProps)} />
            </li>
        ))}
    </ul>
);

export default ChartCardList;
