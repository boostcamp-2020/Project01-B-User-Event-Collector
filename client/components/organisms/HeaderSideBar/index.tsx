import React, { useState } from 'react';
import MainMenu from '@components/molecules/MainMenu';
import SubMenu from '@components/molecules/SubMenu';
import UserProfileMenu from '@components/organisms/UserProfileMenu';
import Text from '@components/atoms/Text';
import SearchInput from '@components/molecules/SearchInput';
import SearchIcon from '@material-ui/icons/Search';
import {
    LogoContainer,
    Logo,
    SearchContainer,
    SectionContainer,
    ProfileContainer,
    Header,
    AdminContainer
} from './HeaderSideBar.styles';
import { UserProps } from 'interfaces/props';
import MenuLink from '@components/atoms/MenuLink';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

interface HeaderProps {
    user: UserProps;
}

const HeaderSideBar = ({ user }: HeaderProps) => {
    const [searching, setSearching] = useState(false);

    return (
        <Header>
            <SectionContainer>
                <LogoContainer>
                    <Logo>
                        <Text variant="secondary">mini</Text>
                        VIBE
                    </Logo>
                    <SearchIcon style={{ color: 'white' }} onClick={() => setSearching(!searching)} />
                </LogoContainer>
                <SearchContainer searching={searching}>
                    <SearchInput onClose={() => setSearching(false)} />
                </SearchContainer>
                <ProfileContainer>
                    <UserProfileMenu user={user} />
                </ProfileContainer>
                <MainMenu />
                {user.isLoggedIn && <SubMenu />}
                <AdminContainer>
                    <MenuLink href="/admin" icon={SupervisorAccountIcon}>
                        관리자 메뉴
                    </MenuLink>
                </AdminContainer>
            </SectionContainer>
        </Header>
    );
};

export default HeaderSideBar;
