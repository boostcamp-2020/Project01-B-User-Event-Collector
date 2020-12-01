import styled from 'styled-components';

const ListContainer = styled.div`
    position: relative;
    min-height: 375px;
`;

const List = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar { 
        display: none !important;  /* 크롬 등  */
      }
    scroll-behavior: smooth;
`;

const ItemContainer = styled.li`
    list-style: none;   
    margin-left: 17px;

    &:first-child {
        margin-left: 0;
    }
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

export { List, ListContainer, ItemContainer, PrevButtonContainer, NextButtonContainer };