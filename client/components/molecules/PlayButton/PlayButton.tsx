import React from 'react';
import PlayTriangle from '../../atoms/PlayTriangle/PlayTriangle';
import { StyledPlayButton, StyledCircle } from './PlayButton.styles';
import { requestTracks } from '@utils/apis';
import apiUrl from '@constants/apiUrl';
import { Cookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { addToUpNextAndPlay } from 'reducers/musicPlayer';
import useUpNextChangeEventLog from '@hooks/useUpNextChangeEventLog';

interface playButtonProps {
    sort?: string;
    data?;
}

const PlayButton = ({ sort, data }) => {
    const cookies = new Cookies(); //request를 위해 새 쿠키 생성
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const { logAddToUpnextEvent } = useUpNextChangeEventLog({ userId: user.id });

    const handleClick = async () => {
        if (!user.isLoggedIn) return;

        let res, tracks;
        switch (sort) {
            case 'todayMagazine':
                res = await requestTracks(`${apiUrl.magazine}/${data.id}`, cookies.get('token'));
                tracks = res?.playlist?.tracks;
                break;
            case 'playlist':
                res = await requestTracks(`${apiUrl.playlist}/${data.id}`, cookies.get('token'));
                tracks = res?.tracks;
                break;
            case 'news':
                res = await requestTracks(`${apiUrl.album}/${data.albumId}`, cookies.get('token'));
                tracks = res?.tracks;
                break;
            case 'album':
                res = await requestTracks(`${apiUrl.album}/${data.id}`, cookies.get('token'));
                tracks = res?.tracks;
                break;
            case 'mixtape':
                res = await requestTracks(`${apiUrl.playlist}/${data.id}`, cookies.get('token'));
                tracks = res?.tracks;
                break;
            case 'station':
                break;
            default:
                return;
        }
        if (!tracks || tracks.length === 0) return;

        dispatch(addToUpNextAndPlay(tracks));
        logAddToUpnextEvent(tracks.map(({ id }) => id));
    };

    return (
        <StyledPlayButton onClick={handleClick}>
            <StyledCircle />
            <PlayTriangle />
        </StyledPlayButton>
    );
};

export default PlayButton;
