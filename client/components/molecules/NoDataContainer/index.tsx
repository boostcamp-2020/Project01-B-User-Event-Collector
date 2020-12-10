import React from 'react';
import styled from 'styled-components';
import StyledText from '@components/atoms/Text/Text.styles';

const Container = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 220px;
`;
const TextContainer = styled.div`
    text-align: center;
    line-height: 40px;
`;
const Title = styled(StyledText)`
    font-size: 22px;
    font-weight: 700;
`;
const Description = styled(StyledText)`
    font-size: 17px;
`;
const titleText = {
    album: '보관한 앨범',
    artist: '좋아하는 아티스트',
    playlist: '보관한 플레이리스트',
    track: '좋아하는 노래',
    mixtape: '오늘 들을 믹스테잎',
};
const descriptionText = {
    album: '내 마음에 드는 앨범을 모아보세요',
    artist: '내가 좋아하는 아티스트를 보관함에서 확인해보세요.',
    playlist: '자주 듣고 싶은 플레이리스트는 보관함에 모아보세요.',
    track: '내가 좋아하는 노래들을 모아서 감상해보세요.',
    mixtape: '오늘 들을 믹스테잎이 없습니다.',
};
const NoDataContainer = ({ type }) => (
    <Container>
        <TextContainer>
            <Title>{titleText[type]}</Title>
            <Description>{descriptionText[type]}</Description>
        </TextContainer>
    </Container>
);

export default NoDataContainer;
