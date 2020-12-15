import React, { ReactNode } from 'react';
import styled from 'styled-components';
import CardScrollList from '@components/organisms/CardScrollList';
import A from '@components/atoms/A';
import IconButton from '@components/atoms/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

interface CardListContainerProps {
    title: string;
    href?: string;
    children: ReactNode;
}

const Container = styled.div`
    width: 960px;
    margin: 0 auto;
    padding: 36px 0 45px;
`;

const TitleContainer = styled.div`
    margin: 10px 0;
    display: flex;
    align-items:center;
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 17px;
`;

const CardListContainer = ({ title, href, children }: CardListContainerProps) => (
    <Container>
        <TitleContainer>
            {href ? (
                <>
                <A href={href} variant="secondary">
                    {title}
                </A>
                <IconButton variant="plainBlackRegular" icon={ArrowForwardIosIcon}/>
                </>
            ) : (
                <Title>{title}</Title>
            )}
        </TitleContainer>
        <CardScrollList> {children} </CardScrollList>
    </Container>
);

export default CardListContainer;
