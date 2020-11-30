import styled from 'styled-components';

import ContentsThumbnail from '../../../molecules/ContentsThumbnail/ContentsThumbnail';
import A from '../../../atoms/A/A';
import Text from '../../../atoms/Text/Text';

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

const StyledText = styled(Text)`
`;

interface PlaylistCardProps {
    src: string,
    href: string,
    title: string,
    description: string
};

const PlaylistCard = ( { title, description, src, href }: PlaylistCardProps ) => (
    <CardContainer >
        <ThumbnailContainer>
            <ContentsThumbnail src = {src} href = {href} sort = "" />
        </ThumbnailContainer>
        <TextContainer>
            <TitelContainer>
                <StyledA href={href}>{title}</StyledA>
            </TitelContainer>
            <DescriptionContainer>
                <StyledText variant = "primary">{description}</StyledText>
            </DescriptionContainer>
        </TextContainer>
    </CardContainer>
)

export default PlaylistCard;