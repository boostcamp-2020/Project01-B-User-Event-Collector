import React from 'react';
import styled from 'styled-components';
import MainMenu from '@components/molecules/MainMenu';
import SubMenu from '@components/molecules/SubMenu';
import UserProfileMenu from '@components/organisms/UserProfileMenu';
import Text from '@components/atoms/Text/Text';
import SearchIcon from '@material-ui/icons/Search';

const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 9px 6px;
    margin: 0px;
`;

const Logo = styled.h1`
    display: inline-flex;
    margin: 0 0 5px 0;

    & > * {
        margin: 5px;
    }
`;

const SectionContainer = styled.div`
    padding: 0 15px;
`;

const ProfileContainer = styled.div`
    border: 1px solid hsla(0,0%,84.7%,.13);
    border-width: 1px 0;
    padding: 11px 0;
`
const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 81px;
    width: 225px;
    background-color: black;
`;

const HeaderSideBar = ({ user }) => (
  <Header>
    <SectionContainer>
        <LogoContainer> 
            <Logo>
                <Text variant="secondary">mini</Text>
                VIBE
            </Logo> 
            <SearchIcon style={{ color: 'white' }}/>
        </LogoContainer>
        <ProfileContainer>
            <UserProfileMenu user={user}/>  
        </ProfileContainer>
        <MainMenu/>
        { user && <SubMenu/> }
    </SectionContainer>
  </Header>
);

export default HeaderSideBar;
