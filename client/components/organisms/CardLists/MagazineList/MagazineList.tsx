import React from 'react';
import styled from 'styled-components';
import MagazineCard from '@components/organisms/Cards/MagazineCard';
import { MagazineCardProps } from '@interfaces/props';
interface MagazineListProps {
    items: MagazineCardProps[];
}
const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    overflow: hidden;
`;
const StyledList = styled.li`
    float: left;
    width: 33.333333%;
    margin: 0;
    box-sizing: border-box;
    padding: 0 17px 39px 0;
`;
const MagazineList = ({ items }: MagazineListProps) => (
    <ListContainer>
        {items.map((item) => (
            <StyledList>
                <MagazineCard {...(item as MagazineCardProps)} />
            </StyledList>
        ))}
    </ListContainer>
);

export default MagazineList;
