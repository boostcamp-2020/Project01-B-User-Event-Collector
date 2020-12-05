import React from 'react';
import Heart from './Heart';

export default {
    title: 'Atoms/Heart',
    component: Heart,
};

export const Default = () => <Heart isSelected = {true} />;

export const MusicPlayer = () => <Heart  isSelected = {true} sort="musicPlayer" />;