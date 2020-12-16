import styled from 'styled-components';

import ContentsThumbnail from '@components/molecules/ContentsThumbnail/ContentsThumbnail';
import A from '@components/atoms/A/A';
import Text from '@components/atoms/Text';

import { MixtapeCardProps } from '@interfaces/props';

const CardContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 180px;
    height: 240px;
`;

const ThumbnailContainer = styled.div``;

const TextContainer = styled.div`
    display: flex;
    flex-flow: column;
    height: 50%;
`;

const TitelContainer = styled.div`
    height: 50%;
    padding: 10px 0px 0px 0px;
`;

const DescriptionContainer = styled.div`
    height: 50%;
    padding: 0px 0px 30px 0px;
`;

const StyledA = styled(A)`
    font-size: 14px;
`;

const StyledText = styled(Text)`
    font-size: 13px;
`;

const MixtapeCard = (data: MixtapeCardProps) => {
    const { id, title, subTitle, imageUrl } = data;

    return (
        <CardContainer>
            <ThumbnailContainer>
                <ContentsThumbnail data={data} sort='mixtape'/>
            </ThumbnailContainer>
            <TextContainer>
                <TitelContainer>
                    <StyledA href={'/playlist/' + id}>{title}</StyledA>
                </TitelContainer>
                <DescriptionContainer>
                    <StyledText variant="primary">{subTitle}</StyledText>
                </DescriptionContainer>
            </TextContainer>
        </CardContainer>
    );
};

export default MixtapeCard;
