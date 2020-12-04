import React from 'react';
import styled from 'styled-components';

interface CheckBoxProps {
    id: string;
}

const StyledCheckBox = styled.div`
    width: 40px;
    padding: 10px 12px;
    position: relative;
`;
const Input = styled.input`
    display: none;

    & + label {
        display: inline-block;
        width: 16px;
        height: 16px;
        position: absolute;
        border: 1px solid #0000001f;
        top: 10px;
        left: 12px;
    }
    &:checked + label {
        background-image: linear-gradient(transparent, transparent),
            url(https://vibe.naver.com/img/sp_vibe.cc4cc861.svg);
        background-size: 808px 764px;
        background-position: -440px -744px;
        border: none;
    }
`;

const CheckBox = ({ id }: CheckBoxProps) => (
    <StyledCheckBox>
        <Input type="checkbox" id={id} />
        <label htmlFor={id} />
    </StyledCheckBox>
);

export default CheckBox;
