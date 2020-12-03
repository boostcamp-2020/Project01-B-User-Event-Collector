import React, { ReactNode, MouseEvent } from 'react';
import styled from 'styled-components';
import { convertToHHSS } from '@utils/time';

const Container = styled.div`
    font-size: 14px;
    line-height: 14px;
    text-align: right;
`;

const CurrentTime = styled.span`
    color: #747474;
    padding-right: 2px;
`;

const TotalTime = styled.span`
    color: #bcbcbc;
`;

interface PlaytimeProps {
    total: number;
    current: number;
}

const Playtime = ({ current, total }: PlaytimeProps) => (
    <Container>
        <CurrentTime>{convertToHHSS(current)}</CurrentTime>
        <TotalTime>/{convertToHHSS(total)}</TotalTime>
    </Container>
);

export default Playtime;
