import React from 'react';
import styled from 'styled-components';

interface CheckBoxProps {
    id: string;
}

const StyledCheckBox = styled.div`
    width: 40px;
    box-sizing: border-box;
    padding: 10px 12px;
`;
const Input = styled.input`
    width: 16px;
    height: 16px;
    margin: 0;
`;
const CheckBox = ({ id }: CheckBoxProps) => (
    <StyledCheckBox>
        <Input type="checkbox" id={id} />
    </StyledCheckBox>
);

export default CheckBox;
