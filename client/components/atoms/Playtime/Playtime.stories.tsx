import React from 'react';
import Playtime from './index';

export default {
    title: 'Atoms/Playtime',
    component: Playtime,
};

export const Default = () => <Playtime current={120} total={240} />;
