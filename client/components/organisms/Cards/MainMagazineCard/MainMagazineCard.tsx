import styled from 'styled-components';

import Image from '@components/atoms/Image/Image';
import A from '@components/atoms/A/A';
import Text from '@components/atoms/Text';
import Label from '@components/atoms/Label';

import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import { dataType } from '@constants/identifier';

const CardContainer = styled.div`
    display: flex;
    width: 960px;
    height: 310px;
    background-color: white;
    cursor: pointer;
`;

const ImageContainer = styled.div``;

const ContentsContainer = styled.div`
    display: flex;
    flex-flow: column;
    padding: 60px 40px;
`;

const LabelContainer = styled.div`
    margin: 15px 0 0 0;
`;

const TitleContainer = styled.div`
    margin: 15px 0 0 0;
`;

const DescriptionContainer = styled.div`
    margin: 15px 0 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.2em;
    height: 2.4em;
`;

interface MainMagazineCardProps {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    date: string;
    category: string;
}

const MainMagazineCard = (data: MainMagazineCardProps) => {
    const { id, imageUrl, title, description, date, category } = data;
    return (
        <ComponentInfoWrapper componentId={`${id}`} data={{ type: dataType.magaznie, id }}>
            <CardContainer>
                <ImageContainer>
                    <Image variant="primary" src={imageUrl} />
                </ImageContainer>
                <ContentsContainer>
                    <LabelContainer>
                        <Label selected={true} variant="secondary">
                            {category}
                        </Label>
                    </LabelContainer>
                    <TitleContainer>
                        <A variant="primary" href={'/magazine/' + id}>
                            {title}
                        </A>
                    </TitleContainer>
                    <DescriptionContainer>
                        <Text variant="primary">{description}</Text>
                    </DescriptionContainer>
                </ContentsContainer>
            </CardContainer>
        </ComponentInfoWrapper>
    );
};

export default MainMagazineCard;
