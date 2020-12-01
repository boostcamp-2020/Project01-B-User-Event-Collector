import React from 'react';
import styled from 'styled-components';
import CheckBox from '@components/atoms/CheckBox/CheckBox';

const List = styled.li``;
const TrackLeft = styled.div``;
const TrackMiddle = styled.div``;
const TrackRight = styled.div``;

const TrackRowCard = ({ id }) => (
    <List>
        <TrackLeft>
            <CheckBox id={id} />
        </TrackLeft>
        <TrackMiddle></TrackMiddle>
        <TrackRight></TrackRight>
    </List>
);

export default TrackRowCard;
