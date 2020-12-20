import React from 'react';
import LyricModal from './LyricModal';

export default {
    title: 'Organisms/LyricModal',
    component: LyricModal,
};

const data = {
    src: 'https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg?type=r360Fll&v=20200507115931',
    title: '그냥',
    artist: '이영지',
    lyrics: '가사',
    visibility: true
}

export const Default = () => (
    <LyricModal {...(data)} />
);
