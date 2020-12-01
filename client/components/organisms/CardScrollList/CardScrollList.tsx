import React, { useRef } from 'react';
import MagazineCard from '@components/organisms/Cards/MagazineCard'
import NewsCard from '@components/organisms/Cards/NewsCard';
import SlideNextButton from '@components/molecules/SlideNextButton';
import SlidePrevButton from '@components/molecules/SlidePrevButton';
import { MagazineCardProps, NewsCardProps } from '@interfaces/props';
import { List, ListContainer, ItemContainer, PrevButtonContainer, NextButtonContainer } from './CardScrollList.styles';

interface CardScrollListProps {
    type: 'magazine' | 'news';
    items: (MagazineCardProps | NewsCardProps)[];
}

const CardScrollList = ({ type, items }: CardScrollListProps) => {
    const firstItemRef = useRef(null);
    const lastItemRef = useRef(null);

    const scrollToFirst = () => firstItemRef.current.scrollIntoView(); 
    const scrollToLast = () => lastItemRef.current.scrollIntoView();

    return(
        <ListContainer>
            <List>
                {
                    items.map((item, idx) => 
                        // TODO : key idx가 아닌 data id로 수정
                        <ItemContainer key={idx} ref={idx === 0? firstItemRef : ( idx === items.length - 1 ? lastItemRef : undefined) }>
                            {type === 'magazine'? <MagazineCard { ...(item as MagazineCardProps)}/> : <NewsCard { ...(item as NewsCardProps)}/>}
                        </ItemContainer> 
                    )
                }
            </List>
            <PrevButtonContainer>
                <SlidePrevButton onClick={scrollToFirst}/>
            </PrevButtonContainer>
            <NextButtonContainer>
                <SlideNextButton onClick={scrollToLast}/>
            </NextButtonContainer>
        </ListContainer>
    )
}

export default CardScrollList;