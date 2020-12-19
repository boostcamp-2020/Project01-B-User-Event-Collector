import React from 'react';
import styled from 'styled-components';
import GenreCard from '@components/molecules/GenreCard/GenreCard';
import CardScrollList from '@components/organisms/CardScrollList/CardScrollList';

// TODO : refactor
const getCardBundle = (cards) => {
    const bundle = [];

    for (let i = 0; i < cards.length; i += 3) {
        bundle.push(
            <CardBundle>
                <GenreCard id={cards[i].id} name={cards[i].name} />
                {cards[i + 1] ? <GenreCard id={cards[i + 1].id} name={cards[i + 1].name} /> : null}
                {cards[i + 2] ? <GenreCard id={cards[i + 2].id} name={cards[i + 2].name} /> : null}
            </CardBundle>,
        );
    }
    return bundle;
};

const StyledListContainer = styled.div`
    box-sizing: border-box;
    padding: 0;
    white-space: nowrap;
`;
const CardBundle = styled.div`
    width: 180px;
    display: inline-block;
    box-sizing: border-box;
    margin-right: 16px;
    vertical-align: top;
`;

const GenreCardList = ({ items }) => (
    <CardScrollList>
        <StyledListContainer>{getCardBundle(items)}</StyledListContainer>
    </CardScrollList>
);

export default GenreCardList;
