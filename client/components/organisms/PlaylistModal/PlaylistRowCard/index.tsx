import styled from 'styled-components';
import Text from '@components/atoms/Text';
import Image from '@components/atoms/Image/Image';

interface PlaylistRowCardProps {
    data,
    onClickFunc?: any;
}

const Container = styled.div`
    display: flex;
    width: 320px;
    height: 60px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #e7e7e7;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px 0 15px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 250px;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    overflow: hidden;
`;

const TrackCountContainer = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
`;

const PlaylistRowCard = ({ data, onClickFunc }: PlaylistRowCardProps) => {
    return (
        <Container>
            <ImageContainer>
                <Image src = {data.imageUrl} variant="trackInfo" />
            </ImageContainer>
            <TextContainer>
                <TitleContainer>
                    <Text>{data.title}</Text>
                </TitleContainer>
                <TrackCountContainer>
                    <Text variant="primary">{data.trackCount}곡</Text>
                </TrackCountContainer>
            </TextContainer>
        </Container>
    );
};

export default PlaylistRowCard;