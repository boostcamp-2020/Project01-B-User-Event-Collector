import styled from 'styled-components';

import ContentsThumbnail from '@components/molecules/ContentsThumbnail/ContentsThumbnail';
import A from '@components/atoms/A/A';
import Text from '@components/atoms/Text';
import { NewsCardProps } from 'interfaces/props';

const CardContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 310px;
    height: 261px;
`;

const ThumbnailContainer = styled.div``;

const TextContainer = styled.div`
    display: flex;
    flex-flow: column;
`;

const TitleContainer = styled.div`
    padding: 10px 0px 10px 0px;
`;

const DescriptionContainer = styled.div`
    padding: 0;
`;

const StyledA = styled(A)`
    font-size: 16px;
`;

const NewsCard = (data: NewsCardProps) => {
    const { id, title, imageUrl, date, link, albumId } = data;
    return (
        <CardContainer>
            <ThumbnailContainer>
                <ContentsThumbnail sort="news" data={data} />
            </ThumbnailContainer>
            <TextContainer>
                <TitleContainer>
                    <StyledA href={'/album/' + albumId}>{title}</StyledA>
                </TitleContainer>
                <DescriptionContainer>
                    <A href={link} variant="tertiary">
                        관련 뉴스 보기
                    </A>
                </DescriptionContainer>
            </TextContainer>
        </CardContainer>
    );
};

export default NewsCard;
