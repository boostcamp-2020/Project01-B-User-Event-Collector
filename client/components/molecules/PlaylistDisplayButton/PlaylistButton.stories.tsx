import React from 'react';
import PlaylistDisplayButton from './index';

export default {
    title: 'Molecules/PlaylistDisplayButton',
    component: PlaylistDisplayButton,
};

export const Default = () => <PlaylistDisplayButton open={false} />;

export const Open = () => <PlaylistDisplayButton open={true} />;
