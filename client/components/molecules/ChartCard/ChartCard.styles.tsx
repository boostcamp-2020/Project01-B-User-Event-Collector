import React from 'react';
import styled from 'styled-components';

export const PlayButton = styled.button`
    outline: 0;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    padding-top: 6px;
    visibility: hidden;
    opacity: 0%;
    background-color: black;
`;

export const Card = styled.li`
    list-style: none;
    display: flex;
    padding: 8px 0;
    margin: 0;
    &:hover ${PlayButton} {
        visibility: visible;
        opacity: 60%;
    }
`;

export const AlbumImg = styled.div`
    position: relative;
`;

export const Rank = styled.div`
    width: 25px;
    padding-left: 13px;
    text-align: center;
`;
export const SongInfo = styled.div`
    padding: 0 20px 0 12px;
`;
