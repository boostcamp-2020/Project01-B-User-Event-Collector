import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    min-height: 375px;
`;

const ListContainer = styled.div`
    overflow-x: auto;
    -ms-overflow-style: none; /* IE */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar { 
        display: none !important;  /* 크롬 등  */
      }
    scroll-behavior: smooth;
`;

const PrevButtonContainer = styled.div` 
    position: absolute;
    top: 133px;
    left: -27px;
`

const NextButtonContainer = styled.div`
    position: absolute;
    top: 133px;
    right: -27px;
`

export { Container, ListContainer, PrevButtonContainer, NextButtonContainer };