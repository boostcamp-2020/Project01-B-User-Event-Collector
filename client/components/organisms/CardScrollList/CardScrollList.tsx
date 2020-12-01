import React, { ReactNode, useRef } from 'react';
import SlideNextButton from '@components/molecules/SlideNextButton';
import SlidePrevButton from '@components/molecules/SlidePrevButton';
import { Container, ListContainer,  PrevButtonContainer, NextButtonContainer } from './CardScrollList.styles';

interface CardScrollListProps {
  children: ReactNode;
}

const CardScrollList = ({ children }: CardScrollListProps) => {
    // const firstItemRef = useRef(null);
    // const lastItemRef = useRef(null);

    // const scrollToFirst = () => firstItemRef.current.scrollIntoView(); 
    // const scrollToLast = () => lastItemRef.current.scrollIntoView();

    return(
        <Container>
            {/* <List>
                {
                    items.map((item, idx) => 
                        // TODO : key idx가 아닌 data id로 수정
                        <ItemContainer key={idx} ref={idx === 0? firstItemRef : ( idx === items.length - 1 ? lastItemRef : undefined) }>
                            {type === 'magazine'? <MagazineCard { ...(item as MagazineCardProps)}/> : <NewsCard { ...(item as NewsCardProps)}/>}
                        </ItemContainer> 
                    )
                }
            </List> */}
            <ListContainer>
                {children}
            </ListContainer>
            <PrevButtonContainer>
                <SlidePrevButton onClick={()=>console.log('scroll')}/>
            </PrevButtonContainer>
            <NextButtonContainer>
                <SlideNextButton onClick={()=>console.log('scroll')}/>
            </NextButtonContainer>
        </Container>
    )
}

export default CardScrollList;