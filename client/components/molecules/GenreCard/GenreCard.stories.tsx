import React from 'react';
import GenreCard from './GenreCard';

export default {
    title: 'Molecules/GenreCard',
    component: GenreCard,
};

const id = 1;
const name = "힙합";

export const Default = () => <GenreCard color="pink" id={id} name={name} />;

export const Selected = () => <GenreCard color="black" id={id} name={name} />;
