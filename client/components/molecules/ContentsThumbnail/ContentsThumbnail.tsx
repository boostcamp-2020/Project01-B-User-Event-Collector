import React from 'react';
import styled from 'styled-components';

import Image from '../../atoms/Image/Image';
import PlayButton from '../PlayButton/PlayButton';
import DropDownMenu from '../DropdownMenu';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { ContentsThumbnailProps } from 'interfaces/props';

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50%;
    z-index: 15;
    position: absolute;
    bottom: 5%;
    visibility: hidden;
    opacity: 0%;
    transition: 0.2s ease-in;
`;

const ThumbnailContainer = styled.div`
    display: inline-block;
    position: relative;
    padding: 0;
    margin: 0;
    text-align: center;
    &:hover ${ButtonContainer} {
        visibility: visible;
        transition: 0.2s ease-in;
        opacity: 100%;
    }
`;

const StyledImage = styled(Image)`
    position: absolute;
    bottom: 0;
    padding: 0;
    margin: 0;
`;

const StyledDropDown = styled(DropDownMenu)`
    z-index: 5;
`;

const StyledMoreHorizIcon = styled(MoreHorizIcon)`
    position: absolute;
    right: 5%;
    bottom: 7%;
    color: white;
    font-size: 3rem;
`;

const contentsDropDownMenu = [
    {
        content: '내 플레이리스트 추가',
    },
    {
        content: '보관함에 추가',
    },
    {
        content: '현재재생목록에 추가',
    },
    {
        content: 'MP3 구매',
    },
];

const ContentsThumbnail = ({ data, sort }: ContentsThumbnailProps) => {
    const { imageUrl } = data;
    return (
    <ThumbnailContainer>
        <StyledImage
            src={imageUrl}
            variant={
                sort === 'news'
                    ? 'news'
                    : sort === 'todayMagazine' || sort === 'recommendPlaylist'
                    ? 'primary'
                    : sort === 'normalMagazine'
                    ? 'normalMagazine'
                    : ''
            }
        />
        <ButtonContainer>
            <PlayButton sort={sort} data={data}/>
            <StyledDropDown id="contents" control={StyledMoreHorizIcon} menuItems={contentsDropDownMenu} state={{}} />
        </ButtonContainer>
    </ThumbnailContainer>
)}

export default ContentsThumbnail;
