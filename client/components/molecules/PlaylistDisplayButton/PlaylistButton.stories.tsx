import React from 'react';
import PlaylistDisplayButton from './index';

export default {
    title: 'Molecules/PlaylistDisplayButton',
    component: PlaylistDisplayButton,
};

export const Default = () => <PlaylistDisplayButton open={false} style={{ width: 81, height: 81 }} />;

export const Open = () => <PlaylistDisplayButton open={true} style={{ width: 81, height: 81 }} />;
