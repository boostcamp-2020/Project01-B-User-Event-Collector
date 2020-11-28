import React from 'react';
import MainMenu from '@components/molecules/MainMenu';
import SubMenu from '@components/molecules/SubMenu';
import UserProfileMenu from '@components/organisms/UserProfileMenu';
import styled from 'styled-components';

const SectionContainer = styled.div`
    padding: 0 15px;
`;

const ProfileContainer = styled.div`
    border: 1px solid hsla(0,0%,84.7%,.13);
    border-width: 1px 0;
`
const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 81px;
    width: 225px;
    background-color: black;
`;

const HeaderSideBar = () => (
  <Header>
    <SectionContainer>
        <ProfileContainer>
            <UserProfileMenu/>  
        </ProfileContainer>
        <MainMenu/>
        <SubMenu/>
    </SectionContainer>
  </Header>
);

export default HeaderSideBar;
