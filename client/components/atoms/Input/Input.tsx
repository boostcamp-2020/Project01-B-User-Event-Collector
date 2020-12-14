import React from 'react';
import { func, node, string } from 'prop-types';

import StyledInput from './Input.styles';
import { InputProps } from '@interfaces/props';

const Input = ({ variant, name, value, onChange }: InputProps) => {
    if (variant === 'search')
        return (
            <StyledInput
                type="text"
                name={name}
                variant={variant}
                placeholder="VIBE 검색"
                value={value}
                onChange={onChange}
            />
        );
    return (
        <StyledInput
            type="text"
            name={name}
            variant={variant}
            placeholder="플레이리스트 이름을 입력해 주세요"
            value={value}
            onChange={onChange}
        />
    );
};

// Expected prop values
Input.propTypes = {
    onClick: func,
    variant: string,
};

// Default prop values
Input.defaultProps = {
    children: 'Input text',
};

export default Input;
