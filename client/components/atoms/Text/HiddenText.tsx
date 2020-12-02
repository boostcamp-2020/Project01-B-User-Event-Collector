import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
    overflow: hidden;
    width: 1px;
    height: 1px;
    position: absolute;
    clip: reat(0, 0, 0, 0);
`;
const HiddenText = ({ children }) => <Span>{children}</Span>;

export default HiddenText;
