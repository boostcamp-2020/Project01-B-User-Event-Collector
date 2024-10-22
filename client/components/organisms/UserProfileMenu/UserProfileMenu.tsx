import React, { MouseEvent } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import MenuLink from '@components/atoms/MenuLink';
import DropdownMenu from '@components/molecules/DropdownMenu';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { UserProps } from 'interfaces/props';
import { useDispatch } from 'react-redux';
import { loginRequestAction } from 'reducers/user';

interface UserProfileMenuProps {
    user?: UserProps;
}

const IconWrapper = styled.div`
    margin-right: 10px;
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    color: white;
`;

const UserProfileMenu = ({ user }: UserProfileMenuProps) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const dispatch = useDispatch();
    const defaultImage = 'https://ssl.pstatic.net/static/common/myarea/myInfo.gif?type=s33';
    const dropdownItems = [
        {
            content: 'My 멤버십',
            handleClick: (e: MouseEvent<HTMLElement>) => console.log('My 멤버십'), // TODO: My 멤버십 페이지 이동 함수로 변경
        },
        {
            content: '로그아웃',
            handleClick: () => {
                removeCookie('token');
                window.location.reload();
            },
        },
    ];
    const loginHandler = () => {
        dispatch(loginRequestAction());
    };

    if (!user.isLoggedIn) {
        return (
            <MenuLink href="/login">
                <IconWrapper>
                    <Avatar alt="profile" src={defaultImage} style={{ width: 30, height: 30 }} />
                </IconWrapper>
                로그인
            </MenuLink>
        );
    }
    return (
        <DropdownMenu id="user-profile" menuItems={dropdownItems} state={{}}>
            <MenuLink href="">
                <IconWrapper>
                    <Avatar
                        alt="profile"
                        src={user.profileUrl ? user.profileUrl : defaultImage}
                        style={{ width: 30, height: 30 }}
                    />
                </IconWrapper>
                {user.name}
                <ArrowDropDownIcon />
            </MenuLink>
        </DropdownMenu>
    );
};

export default UserProfileMenu;
