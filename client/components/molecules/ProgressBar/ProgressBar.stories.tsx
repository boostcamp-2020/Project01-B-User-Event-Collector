import React from 'react';
import ProgressBar from './index';

export default {
    title: 'ProgressBar',
    component: ProgressBar,
};

export const Default = () => <ProgressBar totalPlaytime={240} progress={50} />;
