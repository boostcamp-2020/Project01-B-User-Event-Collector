import React, { MouseEvent } from 'react';
// import { useRouter } from 'next/router'
import styled from 'styled-components';
import MenuLink from '@components/atoms/MenuLink';
import DropdownMenu from '@components/molecules/DropdownMenu';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

interface UserProfileMenuProps {
    user?: {
        id: string,
        name: string,
        profileUrl?: string,
    };
}

const IconWrapper = styled.div`
    margin-right: 10px;
`;

const UserProfileMenu = ({ user }: UserProfileMenuProps) => {
  // const router = useRouter();

  const defaultImage = 'https://ssl.pstatic.net/static/common/myarea/myInfo.gif?type=s33';
  const dropdownItems = [{
      content: 'My 멤버십',
      handleClick: (e: MouseEvent<HTMLElement>) => console.log('My 멤버십'), // TODO: My 멤버십 페이지 이동 함수로 변경
    }, {
      content: '로그아웃',
      handleClick: (e: MouseEvent<HTMLElement>) => console.log('로그아웃'), // TODO: 로그아웃 함수로 변경
    }];

  if (!user) {
    return (
      <MenuLink href="/login">
        <IconWrapper>
          <Avatar alt="profile" src={defaultImage} style={{width: 30, height: 30}}/>
        </IconWrapper>
        로그인
      </MenuLink>
    );
  }
  return (
    <DropdownMenu id="user-profile" menuItems={dropdownItems}>
    <MenuLink href="">
          <IconWrapper>
            <Avatar alt="profile" src={user.profileUrl ? user.profileUrl : defaultImage} style={{width: 30, height: 30}}/>
          </IconWrapper>
          {user.name}
          <ArrowDropDownIcon />
    </MenuLink>
    </DropdownMenu>
  );
};

export default UserProfileMenu;