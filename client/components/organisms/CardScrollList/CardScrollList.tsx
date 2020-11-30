import React, { useRef } from 'react';
import styled from 'styled-components';
import MagazineCard from '@components/organisms/Cards/MagazineCard'
import SlideNextButton from '@components/molecules/SlideNextButton';
import SlidePrevButton from '@components/molecules/SlidePrevButton';

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

const ListContainer = styled.div`
    position: relative;
    min-height: 375px;
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

const CardScrollList = ({ children }) => {
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView(true);

    const src = "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906";
    const href = "localhost:3000";
    const title =   `이 주의 디깅 #77 
                    이영지 새 앨범 발표`;
    const date = "2020.11.25";

    return(
        <ListContainer>
            <List>
                <ItemContainer>
                    <MagazineCard sort="mainMagazine" src={src} href={href} title={title} date={date}/>
                </ItemContainer>
                <ItemContainer>
                    <MagazineCard sort="mainMagazine" src={src} href={href} title={title} date={date}/>
                </ItemContainer>
                <ItemContainer>
                    <MagazineCard sort="mainMagazine" src={src} href={href} title={title} date={date}/>
                </ItemContainer>
                <ItemContainer>
                    <MagazineCard sort="mainMagazine" src={src} href={href} title={title} date={date}/>
                </ItemContainer>
                <ItemContainer>
                    <MagazineCard sort="mainMagazine" src={src} href={href} title={title} date={date}/>
                </ItemContainer>
                <ItemContainer >
                    <MagazineCard sort="mainMagazine" src={src} href={href} title={title} date={date}/>
                </ItemContainer>
                <ItemContainer ref={myRef}>
                    <MagazineCard sort="mainMagazine" src={src} href={href} title={title} date={date}/>
                </ItemContainer>
            </List>
            <PrevButtonContainer>
                <SlidePrevButton onClick={executeScroll}/>
            </PrevButtonContainer>
            <NextButtonContainer>
                <SlideNextButton onClick={executeScroll}/>
            </NextButtonContainer>
        </ListContainer>
    )
}

export default CardScrollList;