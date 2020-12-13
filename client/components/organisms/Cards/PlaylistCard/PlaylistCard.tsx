import styled from 'styled-components';

import ContentsThumbnail from '@components/molecules/ContentsThumbnail/ContentsThumbnail';
import A from '@components/atoms/A/A';
import Text from '@components/atoms/Text';

import { PlaylistCardProps } from '@interfaces/props';

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

const PlaylistCard = (data: PlaylistCardProps) => {
    const { id, title, subTitle, imageUrl } = data;

    return (
        <CardContainer>
            <ThumbnailContainer>
                <ContentsThumbnail src={imageUrl} href={'/playlist/' + id} />
            </ThumbnailContainer>
            <TextContainer>
                <TitelContainer>
                    <StyledA href={'/playlist/' + id}>{title}</StyledA>
                </TitelContainer>
                <DescriptionContainer>
                    <Text variant="primary">{subTitle}</Text>
                </DescriptionContainer>
            </TextContainer>
        </CardContainer>
    );
};

export default PlaylistCard;
