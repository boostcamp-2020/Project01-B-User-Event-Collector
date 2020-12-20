import React from 'react';
import MenuLink from '@components/atoms/MenuLink';
import Text from '@components/atoms/Text';
import styled from 'styled-components';

const MenuTitle = styled.div`
    margin: 32px 9px 0;
`;

const MenuWrapper = styled.div`
    & > a {
        margin-top: 8px;
    }
`;

const SubMenu = () => (
    <MenuWrapper>
        <MenuTitle>
            <Text variant="primary"> 보관함 </Text>
        </MenuTitle>
        <MenuLink href="/library/mixtapes"> 믹스테잎 </MenuLink>
        <MenuLink href="/library/tracks"> 노래 </MenuLink>
        <MenuLink href="/library/artists"> 아티스트 </MenuLink>
        <MenuLink href="/library/albums"> 앨범 </MenuLink>
        <MenuLink href="/library/playlists"> 플레이리스트 </MenuLink>
        <MenuLink href="/mp3/my"> 구매한 MP3 </MenuLink>
    </MenuWrapper>
);

export default SubMenu;
