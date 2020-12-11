import React from 'react';
import CheckBox from '.';

export default {
    title: 'Atoms/CheckBox',
    component: CheckBox,
};

const STORY_ID = '1';
const onChange = (e) => {};
export const Default = () => <CheckBox id={STORY_ID} checked={false} onChange={onChange} />;
