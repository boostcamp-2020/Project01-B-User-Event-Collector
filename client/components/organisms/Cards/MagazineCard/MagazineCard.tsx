import styled from 'styled-components';

import ContentsThumbnail from '../../../molecules/ContentsThumbnail/ContentsThumbnail';
import A from '../../../atoms/A/A';
import Text from '../../../atoms/Text/Text';

const CardContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: ${props => props.sort === 'mainMagazine'? '310px;':'274px;' }
    height: ${props => props.sort === 'mainMagazine'? '382px;':'349px;' }
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
    padding: 0;
`;

const StyledA = styled(A)`
    font-size: 16px;
`;

const StyledText = styled(Text)`
`;

interface MagazineCardProps {
    src: string,
    href: string,
    title: string,
    date: string,
    sort: 'todayMagazine' | 'normalMagazine'
};

const MagazineCard = ( { title, date, src, href, sort }: MagazineCardProps ) => (
    <CardContainer sort = {sort}>
        <ThumbnailContainer>
            <ContentsThumbnail src = {src} href = {href} sort = {sort} />
        </ThumbnailContainer>
        <TextContainer>
            <TitelContainer>
                <StyledA href={href}>{title}</StyledA>
            </TitelContainer>
            <DescriptionContainer>
                <StyledText variant = "primary">{date}</StyledText>
            </DescriptionContainer>
        </TextContainer>
    </CardContainer>
)

export default MagazineCard;