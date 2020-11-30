import styled from 'styled-components';

import Image from '../../../atoms/Image/Image';
import A from '../../../atoms/A/A';
import Text from '../../../atoms/Text/Text';
import Label from '../../../atoms/Label';

const CardContainer = styled.div`
    display: flex;
    width: 1160px;
    height: 310px;
    background-color: white;
    cursor: pointer;
`;

const ImageContainer = styled.div`

`;

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
    word-wrap:break-word; 
    line-height: 1.2em;
    height: 2.4em;
`;

interface MainMagazineCardProps {
    src: string,
    href: string,
    title: string,
    label: string,
    decription: string
};

const MainMagazineCard = ( { title, src, href, decription, label }: MainMagazineCardProps ) => (
    <CardContainer>
        <ImageContainer>
            <Image variant = "primary" src = {src}/>
        </ImageContainer>
        <ContentsContainer>
            <LabelContainer>
                <Label selected = {true} variant = "secondary">{label}</Label>
            </LabelContainer>
            <TitleContainer>
                <A variant = 'primary' href = {href}>{title}</A>
            </TitleContainer>
            <DescriptionContainer>
                <Text variant = 'primary'>{decription}</Text>
            </DescriptionContainer>
        </ContentsContainer>
    </CardContainer>
)

export default MainMagazineCard;