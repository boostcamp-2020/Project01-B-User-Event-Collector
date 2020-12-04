import React from 'react';
import Text from '.';

export default {
    title: 'Atoms/Text',
    component: Text,
};

const STORY_TEXT = '테스트 메세지 입니다. TEST MESSAGE';

export const Default = () => <Text>{STORY_TEXT}</Text>;

export const Primary = () => <Text variant="primary">{STORY_TEXT}</Text>;

export const Secondary = () => <Text variant="secondary">{STORY_TEXT}</Text>;

export const Tertiary = () => <Text variant="tertiary">{STORY_TEXT}</Text>;

export const PlainStrong = () => <Text variant="regularStrong">{STORY_TEXT}</Text>;
