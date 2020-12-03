import React from 'react';
import Input from './Input';

export default {
    title: 'Atoms/Input',
    component: Input,
};

export const Default = () => <Input />;

export const Search = () => <Input variant="search" />;
