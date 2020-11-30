import React from 'react';
import styled from 'styled-components';
import Image from '@components/atoms/Image/Image';
import Text from '@components/atoms/Text/Text';

const PlayButton = styled.button`
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

const Card = styled.li`
    list-style: none;
    display: flex;
    padding: 8px 0;
    margin: 0;
    &:hover ${PlayButton} {
        visibility: visible;
        opacity: 60%;
    }
`;

const AlbumImg = styled.div`
    position: relative;
`;

const Rank = styled.div`
    width: 25px;
    padding-left: 13px;
    text-align: center;
`;
const SongInfo = styled.div`
    padding: 0 20px 0 12px;
`;
const ChartCard = ({ src, rank, singer, songTitle }) => (
    <Card>
        <AlbumImg>
            <Image variant="trackRowCard" src={src} />
            <PlayButton>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 40"
                    width="30px"
                    height="30px"
                >
                    <path
                        fill="#ffffff"
                        d="M26.005,16.006c0,1.105-2.001,2-2.001,2L8.301,25.859C7.333,26.328,6,25.484,6,24.379V7.598  c0-1.106,0.775-1.989,2.338-1.426l15.666,7.834C24.004,14.005,26.005,14.9,26.005,16.006L26.005,16.006z"
                    ></path>
                </svg>
            </PlayButton>
        </AlbumImg>
        <Rank>
            <Text variant="k">{rank}</Text>
        </Rank>
        <SongInfo>
            <a href="#">
                <Text variant="">{songTitle}</Text>
            </a>
            <a href="#">
                <Text variant="primary">{singer}</Text>
            </a>
        </SongInfo>
    </Card>
);

export default ChartCard;
