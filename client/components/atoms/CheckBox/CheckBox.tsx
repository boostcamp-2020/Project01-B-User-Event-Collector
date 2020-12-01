import React from 'react';
import styled from 'styled-components';

interface CheckBoxProps {
    id: string;
}
const CheckBox = ({ id }: CheckBoxProps) => <input type="checkbox" id={id} />;

export default CheckBox;
