import styled from 'styled-components';
import ContentsThumbnail from '@components/molecules/ContentsThumbnail/ContentsThumbnail';
import A from '@components/atoms/A/A';
import Text from '@components/atoms/Text';

import { AlbumCardProps } from '@interfaces/props';

const CardContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 180px;
    height: 260px;
`;

const ThumbnailContainer = styled.div``;

const TextContainer = styled.div`
    display: flex;
    flex-flow: column;
    height: 50%;
`;

const TitelContainer = styled.div`
    height: 50%;
    padding: 10px 0px 10px 0px;
`;

const DescriptionContainer = styled.div`
    height: 50%;
    padding: 0px 0px 20px 0px;
`;

const StyledA = styled(A)`
    font-size: 16px;
`;

const AlbumCard = ( data : AlbumCardProps) => {
    const { id, title, description, releaseDate, imageUrl, artist } = data;
    const { id: artistId, name: artistName } = artist;

    return (
        <CardContainer>
            <ThumbnailContainer>
                <ContentsThumbnail src={imageUrl} href={"/album/"+id} />
            </ThumbnailContainer>
            <TextContainer>
                <TitelContainer>
                    <StyledA href={"/album/"+id}>{title}</StyledA>
                </TitelContainer>
                <DescriptionContainer>
                    <StyledA variant="tertiary" href={"/artist/"+id}>{artistName}</StyledA>
                </DescriptionContainer>
            </TextContainer>
        </CardContainer>
    )
};

export default AlbumCard;
