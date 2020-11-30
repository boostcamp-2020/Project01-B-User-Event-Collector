import styled from 'styled-components';

import ContentsThumbnail from '@components/molecules/ContentsThumbnail/ContentsThumbnail';
import A from '@components/atoms/A/A';
import Text from '@components/atoms/Text/Text';

const CardContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 310px;
    height: 261px;
`;

const ThumbnailContainer = styled.div`
`;

const TextContainer = styled.div`
    display: flex;
    flex-flow: column;
`;

const TitelContainer = styled.div`
    padding: 10px 0px 10px 0px;
`;

const DescriptionContainer = styled.div`
    padding: 0;
`;

const StyledA = styled(A)`
    font-size: 16px;
`;

interface NewsCardProps {
    src: string,
    href: string,
    newsHref: string,
    title: string,
};

const NewsCard = ( { title, src, href, newsHref }: NewsCardProps ) => (
    <CardContainer >
        <ThumbnailContainer>
            <ContentsThumbnail sort = "news" src = {src} href = {href} />
        </ThumbnailContainer>
        <TextContainer>
            <TitelContainer>
                <StyledA href={href}>{title}</StyledA>
            </TitelContainer>
            <DescriptionContainer>
                <A href = {newsHref} variant = "tertiary">관련 뉴스 보기</A>
            </DescriptionContainer>
        </TextContainer>
    </CardContainer>
)

export default NewsCard;