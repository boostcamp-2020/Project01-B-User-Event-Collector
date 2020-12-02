import React from 'react';
import PlayControllerButtons from './index';

export default {
    title: 'Molecules/PlayControllerButtons',
    component: PlayControllerButtons,
};

export const Default = () => <PlayControllerButtons playing={false} />;

export const Playing = () => <PlayControllerButtons playing={true} />;
