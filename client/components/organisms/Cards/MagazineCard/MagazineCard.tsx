import styled from 'styled-components';

import ContentsThumbnail from '@components/molecules/ContentsThumbnail/ContentsThumbnail';
import A from '@components/atoms/A/A';
import Text from '@components/atoms/Text';
import { MagazineCardProps } from '@interfaces/props';
const CardContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 310px;
    height: 382px;
`;

const ThumbnailContainer = styled.div``;

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
    padding: 0;
`;

const StyledA = styled(A)`
    font-size: 16px;
`;

const MagazineCard = ( data : MagazineCardProps ) => {
    const { id, title, imageUrl, date, category } = data;

    return(
    <CardContainer>
        <ThumbnailContainer>
            <ContentsThumbnail data={data} sort='todayMagazine' />
        </ThumbnailContainer>
        <TextContainer>
            <TitelContainer>
                <StyledA href={"/magazine/"+id}>{title}</StyledA>
            </TitelContainer>
            <DescriptionContainer>
                <Text variant="primary">{date}</Text>
            </DescriptionContainer>
        </TextContainer>
    </CardContainer>
)};

export default MagazineCard;
