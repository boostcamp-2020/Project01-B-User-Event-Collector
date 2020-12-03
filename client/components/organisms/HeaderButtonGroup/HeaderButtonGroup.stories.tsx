import React from 'react';
import HeaderButtonGroup from './index';

export default {
    title: 'Organisms/HeaderButtonGroup',
    component: HeaderButtonGroup,
};

export const Default = () => <HeaderButtonGroup />;

export const Track = () => <HeaderButtonGroup sort="track" />;
