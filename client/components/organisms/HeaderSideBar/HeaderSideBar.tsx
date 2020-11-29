import React, { useState } from 'react';
import styled from 'styled-components';
import MainMenu from '@components/molecules/MainMenu';
import SubMenu from '@components/molecules/SubMenu';
import UserProfileMenu from '@components/organisms/UserProfileMenu';
import Text from '@components/atoms/Text/Text';
import SearchInput from '@components/molecules/SearchInput';
import SearchIcon from '@material-ui/icons/Search';
import { LogoContainer, Logo, SearchContainer, SectionContainer, ProfileContainer, Header } from './HeaderSideBar.styles';

const HeaderSideBar = ({ user }) => { 
  const [ searching, setSearching ] = useState(false);

  return(
    <Header>
        <SectionContainer>
            <LogoContainer> 
                <Logo>
                    <Text variant="secondary">mini</Text>
                    VIBE
                </Logo> 
                <SearchIcon style={{ color: 'white' }} onClick={()=>setSearching(!searching)}/>
            </LogoContainer>
            <SearchContainer searching={searching}>
                <SearchInput onClose={()=>setSearching(false)}/>    
            </SearchContainer>
            <ProfileContainer>
                <UserProfileMenu user={user}/>  
            </ProfileContainer>
            <MainMenu/>
            { user && <SubMenu/> }
        </SectionContainer>
    </Header>
    );
};

export default HeaderSideBar;
