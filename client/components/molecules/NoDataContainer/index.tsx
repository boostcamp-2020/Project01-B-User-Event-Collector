import React from 'react';
import styled from 'styled-components';
import StyledText from '@components/atoms/Text/Text.styles';
const Container = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 220px;
`;
const TextContainer = styled.div`
    text-align: center;
    line-height: 40px;
`;
const Title = styled(StyledText)`
    font-size: 22px;
    font-weight: 700;
`;
const Description = styled(StyledText)`
    font-size: 17px;
`;
const NoDataContainer = () => (
    <Container>
        <TextContainer>
            <Title>보관한 앨범</Title>
            <Description>내 마음에 드는 앨범을 모아보세요</Description>
        </TextContainer>
    </Container>
);

export default NoDataContainer;
