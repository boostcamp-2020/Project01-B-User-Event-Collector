import styled from 'styled-components';

import ContentsThumbnail from '@components/molecules/ContentsThumbnail/ContentsThumbnail';
import { StationCardProps } from '@interfaces/props';
import A from '@components/atoms/A/A';
import Text from '@components/atoms/Text/Text';

const CardContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 180px;
    height: 180px;
`;

const ThumbnailContainer = styled.div``;

const StationCard = ({ src }: StationCardProps) => (
    <CardContainer>
        <ThumbnailContainer>
            <ContentsThumbnail src={src} href="" sort="" />
        </ThumbnailContainer>
    </CardContainer>
);

export default StationCard;
