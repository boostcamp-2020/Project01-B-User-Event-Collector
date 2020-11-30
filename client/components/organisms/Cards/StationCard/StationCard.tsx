import styled from 'styled-components';

import ContentsThumbnail from '../../../molecules/ContentsThumbnail/ContentsThumbnail';
import A from '../../../atoms/A/A';
import Text from '../../../atoms/Text/Text';

const CardContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 180px;
    height: 180px;
`;

const ThumbnailContainer = styled.div`

`;

interface StationCardProps {
    src: string,
    href: string,
    title: string,
    artist: string
};

const StationCard = ( { title, artist, src, href }: StationCardProps ) => (
    <CardContainer >
        <ThumbnailContainer>
            <ContentsThumbnail src = {src} href = {href} sort = "" />
        </ThumbnailContainer>
    </CardContainer>
)

export default StationCard;