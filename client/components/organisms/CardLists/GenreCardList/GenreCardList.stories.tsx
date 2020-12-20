import React from 'react';
import GenreCardList from '.';

export default {
    title: 'Organisms/GenreCardList',
    component: GenreCardList,
};

const items = [
    {"id":1,"name":"랩/힙합"},
    {"id":2,"name":"댄스"},
    {"id":3,"name":"알앤비/소울"},
    {"id":4,"name":"인디뮤직"},
    {"id":5,"name":"팝"},
    {"id":6,"name":"락"},
    {"id":7,"name":"발라드"}]

export const Default = () => <GenreCardList items={items}/>;
