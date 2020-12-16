import React from 'react';
import UserProfileMenu from './UserProfileMenu';

export default {
    title: 'Organisms/UserProfileMenu',
    component: UserProfileMenu,
};

export const LoggedIn = () => (
    <div style={{ width: '250px' }}>
        <UserProfileMenu
            user={{
                id: 1234,
                name: 'User',
                isLoggedIn: true,
                profileUrl:'https://musicmeta-phinf.pstatic.net/album/003/399/3399784.jpg'
            }}
        />
    </div>
);

export const NotLoggedIn = () => 
            <UserProfileMenu 
            user={{
                id: 1234,
                name: 'User',
                isLoggedIn: false,
                profileUrl:'https://musicmeta-phinf.pstatic.net/album/003/399/3399784.jpg'
            }}/>;
