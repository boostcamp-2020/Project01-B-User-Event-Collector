import styled from 'styled-components';

import Text from '@components/atoms/Text';
import Image from '@components/atoms/Image/Image';
import Heart from '@components/atoms/Heart/Heart';
import DropDownMenu from '@components/molecules/DropdownMenu';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useContext, useState } from 'react';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import { addToLibrary, deleteFromLibrary } from '@utils/apis';
import apiUrl from '@constants/apiUrl';

const HeaderContainter = styled.div`
    display: flex;
    border-bottom: 1px #d7d7d7 solid;
    width: 960px;
    height: 250px;
    background-color: white;
    padding: 10px 0 0 0;
`;

const ThumbnailContainer = styled.div`
    display: flex;
    width: 25%;
`;

const ContentsContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 75%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-flow: column;
    padding: 20px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    padding: 60px 0 0 0;
    align-items: center;
`;

const StyledDropDown = styled(DropDownMenu)`
    z-index: 5;
`;

const BlankDiv = styled.div`
    width: 20px;
`;

const contentsDropDownMenu = (liked) => [
    {
        content: liked ? '좋아요 취소' : '좋아요',
    },
    {
        content: '공유',
    },
];

interface ArtistHeaderProps {
    src: string;
    name: string;
    genre: string;
    isLiked: number;
}

const ArtistHeader = ({ src, name, genre, isLiked }: ArtistHeaderProps) => {
    const [liked, setIsLiked] = useState(isLiked);
    const { data } = useContext(ComponentInfoContext);
    const likeHandler = (e) => {
        if (liked) {
            setIsLiked(0);
            deleteFromLibrary(`${apiUrl.like}${data.type}s/${data.id}`);
        } else {
            setIsLiked(1);
            addToLibrary(`${apiUrl.like}${data.type}s`, {
                data: {
                    id: data.id,
                },
            });
        }
    };
    return (
        <HeaderContainter>
            <ThumbnailContainer>
                <Image src={src} variant="largeArtist" />
            </ThumbnailContainer>
            <ContentsContainer>
                <TextContainer>
                    <Text variant="tertiary">{name}</Text>
                    <Text>{genre}</Text>
                </TextContainer>
                <ButtonContainer>
                    <Heart isSelected={liked ? true : false} onClick={likeHandler} />
                    <BlankDiv></BlankDiv>
                    <StyledDropDown
                        id="artist"
                        control={MoreHorizIcon}
                        menuItems={contentsDropDownMenu(liked)}
                        state={{ setIsLiked }}
                    />
                </ButtonContainer>
            </ContentsContainer>
        </HeaderContainter>
    );
};

export default ArtistHeader;
