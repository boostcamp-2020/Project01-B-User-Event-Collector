import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addToUpNext, addToUpNextAndPlay } from 'reducers/musicPlayer';

import Text from '@components/atoms/Text';
import HeaderButtonGroup from '@components/organisms/HeaderButtonGroup';
import Image from '@components/atoms/Image/Image';

import useUpNextChangeEventLog from '@hooks/useUpNextChangeEventLog';

const HeaderContainter = styled.div`
    display: flex;
    border-bottom: 1px #d7d7d7 solid;
    width: 960px;
    height: 220px;
    padding-bottom: 40px;
`;

const ImageContainer = styled.div``;

const DetailContainer = styled.div`
    display: flex;
    flex-flow: column;
    margin-left: 40px;
    height: 100%;
    padding: 0;
`;

const TextContainer = styled.div`
    display: flex;
    flex-flow: column;
    height: 77%;
`;

const ButtonContainer = styled.div`
    height: 23%;
`;

const TitleContainer = styled.div`
    padding-botton: 10px;
`;

const ArtistContainer = styled.div`
    height: 20px;
    padding-botton: 12px;
`;

const DateGenreContainer = styled.div`
    height: 20px;
    padding-botton: 7px;
    padding-top: 5px;
`;

const DescriptionContainer = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.2em;
    height: 2.4em;
`;

interface DetailHeaderProps {
    sort: 'album' | 'mixtape' | 'playlist' | 'track';
    data;
}

const DetailHeader = ({ sort, data }: DetailHeaderProps) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const { nowPlaying, playTime } = useSelector((state) => state.musicPlayer);
    const { logAddToUpnextEvent } = useUpNextChangeEventLog({ userId: user.id });

    const onAddUpNextAndPlayHandler = () => {
        if (sort === 'track') {
            dispatch(addToUpNextAndPlay([data]));
            logAddToUpnextEvent([data.id]);
            return;
        }
        dispatch(addToUpNextAndPlay(data.tracks));
        logAddToUpnextEvent(
            data.tracks.map(({ id }) => id),
            { nowPlaying, playTime },
        );
    };

    return (
        <HeaderContainter>
            <ImageContainer>
                <Image src={sort === 'track' ? data.album.imageUrl : data.imageUrl} variant="" />
            </ImageContainer>
            <DetailContainer>
                <TextContainer>
                    <TitleContainer>
                        <Text variant="tertiary">{data.title}</Text>
                    </TitleContainer>
                    {sort === 'album' || 'track' ? <ArtistContainer>{data.artist?.name}</ArtistContainer> : ''}
                    {sort === 'album' && (
                        <DateGenreContainer>
                            <Text variant="primary">
                                {data.releasedDate} {data.genre}
                            </Text>
                        </DateGenreContainer>
                    )}
                    <DescriptionContainer>
                        <Text variant="primary">{data.description}</Text>
                    </DescriptionContainer>
                </TextContainer>
                <ButtonContainer>
                    {sort === 'track' && (
                        <HeaderButtonGroup
                            sort="track"
                            onAddUpNextHandler={onAddUpNextAndPlayHandler}
                            liked={data.liked}
                        />
                    )}
                    {sort !== 'track' && (
                        <HeaderButtonGroup onAddUpNextHandler={onAddUpNextAndPlayHandler} liked={data.liked} />
                    )}
                </ButtonContainer>
            </DetailContainer>
        </HeaderContainter>
    );
};

export default DetailHeader;
