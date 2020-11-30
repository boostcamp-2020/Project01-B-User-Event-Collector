import styled from 'styled-components';

import ContentsThumbnail from '@components/molecules/ContentsThumbnail/ContentsThumbnail';
import A from '@components/atoms/A/A';
import Text from '@components/atoms/Text/Text';

const CardContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 180px;
    height: 260px;
`;

const ThumbnailContainer = styled.div`
`;

const TextContainer = styled.div`
    display: flex;
    flex-flow: column;
    height: 50%;
`;

const TitelContainer = styled.div`
    height: 75%;
    padding: 10px 0px 10px 0px;
`;

const DescriptionContainer = styled.div`
    height: 25%;
    padding: 0px 0px 20px 0px;
`;

const StyledA = styled(A)`
    font-size: 16px;
`;

interface AlbumCardProps {
    src: string,
    href: string,
    title: string,
    artist: string
};

const AlbumCard = ( { title, artist, src, href }: AlbumCardProps ) => (
    <CardContainer >
        <ThumbnailContainer>
            <ContentsThumbnail src = {src} href = {href} sort = "" />
        </ThumbnailContainer>
        <TextContainer>
            <TitelContainer>
                <StyledA href={href}>{title}</StyledA>
            </TitelContainer>
            <DescriptionContainer>
                <Text variant = "primary">{artist}</Text>
            </DescriptionContainer>
        </TextContainer>
    </CardContainer>
)

export default AlbumCard;