import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { selectTrack, unselectTrack } from 'reducers/selectedTrack';
import { TrackRowCardProps, CheckBoxProps } from 'interfaces/props';

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
            url(https://vibe.naver.com/img/sp_vibe.463acaba.svg);
        background-size: 1118px 1106px;
        background-position: -97px -1086px;
        border: none;
    }
`;
const CheckBox = ({ id, data }: CheckBoxProps) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    const onChangeHandler = () => {
        setChecked((checked) => !checked);
        !checked ? dispatch(selectTrack(data)) : dispatch(unselectTrack(data.id));
    };

    return (
        <StyledCheckBox>
            <Input type="checkbox" id={`'${id}'`} checked={checked} onChange={onChangeHandler} />
            <label htmlFor={`'${id}'`} />
        </StyledCheckBox>
    );
};

export default CheckBox;
