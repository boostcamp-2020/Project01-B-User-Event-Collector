import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    min-height: 100%;
`;

const ListContainer = styled.div`
    overflow-x: auto;
    -ms-overflow-style: none; /* IE */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none !important; /* 크롬 등  */
    }
    scroll-behavior: smooth;
`;

const PrevButtonContainer = styled.div`
    position: absolute;
    top: 50%;
    left: -27px;
    transform: translateY(-50%);
`;

const NextButtonContainer = styled.div`
    position: absolute;
    top: 50%;
    right: -27px;
    transform: translateY(-50%);
`;

export { Container, ListContainer, PrevButtonContainer, NextButtonContainer };
