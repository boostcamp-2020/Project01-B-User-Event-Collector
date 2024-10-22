import React from 'react';
import styled from 'styled-components';
import IconButton from '@components/atoms/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TrackCard from '@components/molecules/TrackCard';
import { Play } from '@components/molecules/TrackPlayButton/TrackPlayButton.styles';
import { PlayerTrackCardProp } from 'interfaces/props';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTrackFromUpnext } from 'reducers/musicPlayer';
import useUpNextChangeEvent from 'hooks/useUpNextChangeEventLog';

const PlayerTrackCardContainer = styled.li`
    background-color: #141414;
    display: flex;
    width: 350px;
    justify-content: space-between;
    padding: 0 20px 0 12px;
    &: hover ${Play} {
        visibility: visible;
        opacity: 60%;
    }
    &:hover {
        background-color: #444;
        cursor: move;
    }
`;
const PlayerTrackCard = ({ data }: PlayerTrackCardProp) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const { logRemoveFromUpnextEvent } = useUpNextChangeEvent({ userId: user.id });

    const onClickDeleteHandler = () => {
        dispatch(deleteTrackFromUpnext(data.id));
        logRemoveFromUpnextEvent([data.id]);
    };

    return (
        <PlayerTrackCardContainer>
            <TrackCard data={data} imgVariant="trackRowCard" isDefault={true} isTrack={true} />
            <IconButton variant="plainGreyRegular" icon={CloseIcon} onClick={onClickDeleteHandler} />
        </PlayerTrackCardContainer>
    );
};

export default PlayerTrackCard;
