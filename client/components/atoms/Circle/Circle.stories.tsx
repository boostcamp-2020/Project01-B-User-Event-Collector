import React from 'react';
import Circle from './Circle';

export default {
    title: 'Atoms/Circle',
    component: Circle,
};

export const Default = () => <Circle />;

export const Primary = () => <Circle variant="primary" />;
