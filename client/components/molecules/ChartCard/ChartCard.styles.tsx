import React from 'react';
import styled from 'styled-components';
import { Play } from '@components/molecules/TrackPlayButton/TrackPlayButton.styles';

export const Card = styled.li`
    list-style: none;
    display: flex;
    padding: 8px 0;
    margin: 0;
    &:hover ${Play} {
        visibility: visible;
        opacity: 60%;
    }
`;

export const Rank = styled.div`
    width: 25px;
    padding-left: 13px;
    text-align: center;
`;
export const SongInfo = styled.div`
    padding: 0 20px 0 12px;
`;
