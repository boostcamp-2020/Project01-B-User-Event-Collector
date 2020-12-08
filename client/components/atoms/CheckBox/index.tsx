import React from 'react';
import styled from 'styled-components';
interface CheckBoxProps {
    id: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    allCheck: boolean;
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
            url(https://vibe.naver.com/img/sp_vibe.7af837ac.svg);
        background-size: 1118px 1081px;
        background-position: -816px -860px;
        border: none;
    }
`;

const CheckBox = ({ id, allCheck, onChange, checked }: CheckBoxProps) => {
    return (
        <StyledCheckBox>
            <Input
                type="checkbox"
                id={allCheck ? `checkAll` : `checkRow_${id}`}
                onChange={onChange}
                checked={checked}
            />
            <label htmlFor={`checkRow_${id}`} />
        </StyledCheckBox>
    );
};

export default CheckBox;
