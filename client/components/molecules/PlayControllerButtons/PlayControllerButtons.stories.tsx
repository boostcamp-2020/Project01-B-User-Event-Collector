import React from 'react';
import PlayControllerButtons from './PlayControllerButtons';

export default {
    title: 'PlayControllerButtons',
    component: PlayControllerButtons,
};

export const Default = () => <PlayControllerButtons playing={false} />;

export const Playing = () => <PlayControllerButtons playing={true} />;
