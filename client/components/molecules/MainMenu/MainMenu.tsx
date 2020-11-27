import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AlbumIcon from '@material-ui/icons/Album';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import MenuLink from '@components/atoms/MenuLink';

const MainMenu = () => (
  <>
    <MenuLink href="/today" icon={HomeIcon}> 투데이 </MenuLink>
    <MenuLink href="/chart" icon={InsertChartIcon}> 차트 </MenuLink>
    <MenuLink href="/dj-station" icon={AlbumIcon}> DJ 스테이션 </MenuLink>
    <MenuLink href="/magazines" icon={MenuBookIcon}> ViBE MAG </MenuLink>
    <MenuLink href="/this-month" icon={LibraryMusicIcon}> 이달의 노래 </MenuLink>
  </>
);

export default MainMenu;
