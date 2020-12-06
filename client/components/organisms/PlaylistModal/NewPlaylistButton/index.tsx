import styled from 'styled-components';
import Text from '@components/atoms/Text';

interface NewPlaylistButtonProps {
    onClickFunc?: any;
}

const GreyDiv = styled.div`
    width: 45px;
    height: 45px;
    background-color: #e7e7e7;
`;

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
    &:hover ${GreyDiv}{
        background-color: #b7b7b7;  
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

const NewPlaylistButton = ({ onClickFunc }: NewPlaylistButtonProps) => {
    return (
        <Container>
            <ImageContainer>
                <GreyDiv />
            </ImageContainer>
            <TextContainer>
                <TitleContainer>
                    <Text>새 플레이리스트</Text>
                </TitleContainer>
            </TextContainer>
        </Container>
    );
};

export default NewPlaylistButton;