import React from 'react';
import { action } from '@storybook/addon-actions';
import DropdownMenu from './index';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default {
    title: 'Molecules/DropdownMenu',
    component: DropdownMenu,
};

const STORY_ID = 'test menu';
const STORY_CONTROL_COMPONENT = ArrowDropDownIcon;
const STORY_MENU_ITEMS = [
    {
        content: '좋아요',
        handleClick: action('clicked'),
    },
    {
        content: 'MP3 구매',
        handleClick: action('clicked'),
    },
];

export const Default = () => (
    <DropdownMenu id={STORY_ID} control={STORY_CONTROL_COMPONENT} menuItems={STORY_MENU_ITEMS} />
);
