import styled from 'styled-components';

import Text from '@components/atoms/Text';
import Image from '@components/atoms/Image/Image';
import Heart from '@components/atoms/Heart/Heart';
import DropDownMenu from '@components/molecules/DropdownMenu';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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

const contentsDropDownMenu = [
    {
        content: '좋아요 취소',
    },
    {
        content: '공유',
    },
];

interface ArtistHeaderProps {
    src: string;
    name: string;
    genre: string;
}

const ArtistHeader = ({ src, name, genre }: ArtistHeaderProps) => (
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
                <Heart isSelected={true} />
                <BlankDiv></BlankDiv>
                <StyledDropDown id="artist" control={MoreHorizIcon} menuItems={contentsDropDownMenu} state={{}} />
            </ButtonContainer>
        </ContentsContainer>
    </HeaderContainter>
);

export default ArtistHeader;
