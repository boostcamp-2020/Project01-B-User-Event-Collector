import Text from '@components/atoms/Text';
import Button from '@components/atoms/Button/Button';
import styled from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useState } from 'react';

const HeaderContainter = styled.div`
    display: flex;
    border-bottom: 1px #d7d7d7 solid;
    width: 960px;
    height: 80px;
    background-color: white;
    padding: 10px 0 0 0;
`;

const TextContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 72%;
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 960px;
    flex-flow: row-reverse;
    align-items: center;
    justify-content: space-between;
`;

interface LibraryHeaderProps {
    sort: 'mixtape' | 'track' | 'artist' | 'album' | 'playlist';
    onAddUpNextAndPlayHandler?: any;
}

const headerTitle = (sort) => {
    let res;
    sort === 'mixtape'
        ? (res = '오늘 들을 믹스테잎')
        : sort === 'track'
        ? (res = '노래')
        : sort === 'artist'
        ? (res = '아티스트')
        : sort === 'album'
        ? (res = '앨범')
        : sort === 'playlist'
        ? (res = '플레이리스트')
        : (res = 'sort is wrong');

    return res;
};

const LibraryHeader = ({ sort, onAddUpNextAndPlayHandler }: LibraryHeaderProps) => {
    return(
    <HeaderContainter>
        <TextContainer>
            <Text variant="primary">보관함</Text>
            <Text variant="tertiary">{headerTitle(sort)}</Text>
        </TextContainer>
        {sort === 'track' && (
            <ButtonContainer>
                <Button variant="primary" width="130" height="40" icon={PlayArrowIcon} onClick={onAddUpNextAndPlayHandler}>
                    전체재생
                </Button>
            </ButtonContainer>
        )}
    </HeaderContainter>
)};

export default LibraryHeader;
