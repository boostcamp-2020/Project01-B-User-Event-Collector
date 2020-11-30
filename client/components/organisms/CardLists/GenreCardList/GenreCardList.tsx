import React from 'react';
import styled from 'styled-components';
import GenreCard from '@components/molecules/GenreCard/GenreCard';

const getCardBundle = (cards) => {
    const bundle = [];

    for (let i = 0; i < cards.length; i += 3) {
        bundle.push(
            <CardBundle>
                <GenreCard title={cards[i].title} href={cards[i].href} color={cards[i].color} />
                <GenreCard title={cards[i + 1].title} href={cards[i + 1].href} color={cards[i + 1].color} />
                <GenreCard title={cards[i + 2].title} href={cards[i + 2].href} color={cards[i + 2].color} />
            </CardBundle>,
        );
    }
    return bundle;
};

const StyledListContainer = styled.div`
    box-sizing: border-box;
    padding: 0;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
`;
const CardBundle = styled.div`
    width: 180px;
    display: inline-block;
    box-sizing: border-box;
    margin-right: 16px;
`;

const GenreCardList = () => <StyledListContainer>{getCardBundle(cards)}</StyledListContainer>;

export default GenreCardList;
